import type { APIRoute } from 'astro';

// Asegurar que este endpoint no sea prerenderizado (importante para SSR)
export const prerender = false;

// URL de la API de Brevo para contactos
const BREVO_API_URL = 'https://api.brevo.com/v3/contacts';

export const POST: APIRoute = async ({ request }) => {
  try {
    // Intentar parsear tanto JSON como FormData
    let requestData: any = {};
    const contentType = request.headers.get('content-type') || '';
    
    if (contentType.includes('application/json')) {
      requestData = await request.json();
    } else {
      // FormData desde el formulario
      const form = await request.formData();
      requestData = {
        name: form.get('name')?.toString() || '',
        email: form.get('email')?.toString() || '',
        phone: form.get('phone')?.toString() || '',
        procedure: form.get('procedure')?.toString() || '',
        message: form.get('message')?.toString() || '',
        consent: form.get('consent') ? true : false
      };
    }

    const { name, email, phone, procedure, message, consent } = requestData;

    // Validación de campos obligatorios
    if (!email || !name || !phone) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'missing_fields',
          message: 'Email, nombre y teléfono son campos obligatorios'
        }), 
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Validar formato de email básico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'invalid_email',
          message: 'El formato del email no es válido'
        }), 
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Configurar la llamada a la API de Brevo usando fetch
    const brevoApiKey = import.meta.env.BREVO_API_KEY;
    if (!brevoApiKey) {
      console.error('BREVO_API_KEY not configured');
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'configuration_error',
          message: 'Error de configuración del servidor'
        }), 
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Preparar atributos usando los nombres exactos de tu cuenta Brevo
    const attributes: Record<string, any> = {};

    // Normalizar teléfono para formato SMS
    if (phone) {
      let normalizedPhone = phone.replace(/[^+0-9]/g, '');
      
      // Si no empieza con +, asumir número colombiano y agregar +57
      if (!normalizedPhone.startsWith('+')) {
        normalizedPhone = '+57' + normalizedPhone;
      }
      
      attributes.SMS = normalizedPhone;
    }

    // Separar nombre en FIRSTNAME y LASTNAME si es posible
    if (name) {
      const nameParts = name.trim().split(' ');
      if (nameParts.length >= 2) {
        attributes.FIRSTNAME = nameParts[0];
        attributes.LASTNAME = nameParts.slice(1).join(' ');
      } else {
        attributes.FIRSTNAME = name;
      }
    }
    
    // Usar PROCEDURE según tu configuración de atributos
    if (procedure) {
      attributes.PROCEDURE = procedure;
    }
    
    // Usar MESSAGE según tu configuración de atributos
    if (message) {
      attributes.MESSAGE = message;
    }

    // Crear el payload para Brevo según la documentación oficial
    const payload: any = {
      email: email,
      updateEnabled: true, // Actualizar si el contacto ya existe
      listIds: [2] // Agregar a la lista con ID 2
    };
    
    // Solo agregar atributos si existen
    if (Object.keys(attributes).length > 0) {
      payload.attributes = attributes;
    }

    // Log para debugging (remover en producción si es sensible)
    console.log('Enviando a Brevo:', JSON.stringify(payload, null, 2));

    // Llamar a la API de Brevo
    const response = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'api-key': brevoApiKey,
      },
      body: JSON.stringify(payload),
    });

    console.log('Status de respuesta Brevo:', response.status);

    // Brevo retorna 201 para creado, 204 para actualizado
    let responseData: any = {};
    const responseText = await response.text();
    
    if (responseText) {
      try {
        responseData = JSON.parse(responseText);
        console.log('Datos de respuesta Brevo:', responseData);
      } catch (e) {
        console.log('Respuesta Brevo (no JSON):', responseText);
        responseData = { raw: responseText };
      }
    }

    if (response.status === 201 || response.status === 200 || response.status === 204) {
      return new Response(
        JSON.stringify({ 
          success: true, 
          status: response.status,
          data: responseData,
          message: 'Contacto registrado exitosamente en Brevo'
        }), 
        { 
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Error de la API de Brevo
    console.error('Error de API Brevo - Status:', response.status);
    console.error('Error de API Brevo - Headers:', Object.fromEntries(response.headers.entries()));
    console.error('Error de API Brevo - Data:', responseData);
    
    // Mensajes de error más específicos basados en el status
    let errorMessage = 'Error al procesar la solicitud en Brevo';
    
    if (response.status === 400) {
      errorMessage = 'Datos inválidos enviados a Brevo';
    } else if (response.status === 401) {
      errorMessage = 'Error de autenticación con Brevo - verifica tu API key';
    } else if (response.status === 402) {
      errorMessage = 'Límite de API de Brevo alcanzado';
    } else if (response.status === 429) {
      errorMessage = 'Demasiadas solicitudes a Brevo, intenta más tarde';
    }
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'brevo_api_error', 
        status: response.status, 
        message: errorMessage,
        detail: responseData,
        headers: Object.fromEntries(response.headers.entries())
      }), 
      { 
        status: 502,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (err: any) {
    console.error('Error inesperado en /api/brevo:', err);
    
    // Error genérico
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'unexpected_error', 
        message: 'Error interno del servidor',
        detail: process.env.NODE_ENV === 'development' ? String(err) : undefined
      }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};

// Endpoint GET para verificar que la API funciona
export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({ 
      ok: true, 
      timestamp: new Date().toISOString(),
      message: 'Brevo API endpoint funcionando correctamente'
    }), 
    { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }
  );
};