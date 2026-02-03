# Guía de despliegue a Vercel

Este documento describe pasos claros para desplegar este proyecto en Vercel, tanto mediante Git (recomendado) como desde tu máquina local usando la CLI. Incluye cómo configurar variables de entorno (por ejemplo `BREVO_API_KEY`), solucionar el error de permisos por `git author`, probar el endpoint `/api/brevo` y revisar logs.

Contenido
- Requisitos
- Opción A: Deploy automático con Git (recomendado)
- Opción B: Deploy desde la máquina (Vercel CLI)
- Configurar variables de entorno en Vercel
- Probar el endpoint en producción
- Problemas comunes y soluciones

---

## Requisitos
- Cuenta en Vercel (https://vercel.com)
- Vercel CLI (opcional, para deploy desde local):
  - Instalar: `npm i -g vercel`
- Git (si usas deploy via repo)
- Asegúrate de tener `BREVO_API_KEY` (clave privada) lista para agregar a Vercel

## Opción A — Deploy automático con Git (recomendado)
1. Conecta tu repositorio (GitHub/GitLab/Bitbucket) al proyecto en Vercel:
   - En Vercel Dashboard → New Project → Import Git Repository → selecciona tu repo.
2. Configura las Environment Variables (ver siguiente sección).
3. Cada `git push` a la rama configurada (por ejemplo `master` o `main`) lanzará un deploy automático.

Comandos típicos (PowerShell):
```powershell
# Cambios y push que disparan un deploy automático
git add .
git commit -m "feat: cambios para deploy"
git push origin master
```

## Opción B — Deploy desde la máquina con Vercel CLI
1. Inicia sesión en Vercel CLI si no lo has hecho:
```powershell
vercel login
```
2. En la raíz del proyecto, si aún no está ligado a un proyecto en Vercel, enlázalo:
```powershell
vercel link
```
3. Deploy (preview):
```powershell
vercel
```
4. Deploy a producción (equivalente a promover a prod):
```powershell
vercel --prod
```
Nota: si obtienes error por `git author` y sabes que está bien, puedes forzar un deploy (usar con precaución):
```powershell
vercel --prod --force
```

## Configurar variables de entorno (BREVO_API_KEY)
### A) Usando Vercel Dashboard (recomendado)
1. Abre: `https://vercel.com` → tu proyecto → `Settings` → `Environment Variables`.
2. Añade `BREVO_API_KEY` con el valor de la clave.
3. Guarda y redeploy (o haz un nuevo push).

### B) Usando Vercel CLI (interactivo)
```powershell
vercel env add BREVO_API_KEY production
vercel env add BREVO_API_KEY preview
vercel env add BREVO_API_KEY development
```
Sigue las instrucciones y pega la clave cuando te lo pida.

Si cambias/añades variables, debes redeployar para que la función las use.

## Probar el endpoint en producción
Una vez desplegado, obtén la URL del deployment (por Dashboard o desde CLI). Prueba:

- GET (chequeo simple):
```powershell
Invoke-RestMethod -Uri 'https://<TU_DEPLOY>.vercel.app/api/brevo' -Method Get | ConvertTo-Json -Depth 5
```

- POST JSON (prueba real):
```powershell
$body = @{
  name = 'Prueba Usuario'
  email = 'test+vercel@example.com'
  phone = '+57 3000000000'
  procedure = 'Lipoescultura'
  message = 'Prueba desde prod'
  consent = 'on'
} | ConvertTo-Json

Invoke-RestMethod -Uri 'https://<TU_DEPLOY>.vercel.app/api/brevo' -Method Post -Body $body -ContentType 'application/json' | ConvertTo-Json -Depth 6
```

Respuestas esperadas:
- `{ success: true, status: 201, data: ... }` -> Contacto creado
- `{ success: true, status: 204 }` -> Contacto actualizado
- `{ success: false, error: 'brevo_api_error', status: 401, detail: ... }` -> problema de autenticación (revisar API key)

## Revisar logs de funciones y deployments
### Desde el Dashboard
- Vercel → Project → Deployments → selecciona el deployment → `Functions` / `Logs`

### Usando CLI
```powershell
# Lista deployments
vercel ls

# Ver logs de un deployment (usa la URL o el alias que te dió vercel)
vercel logs https://<TU_DEPLOY>.vercel.app --since 1h
```

Busca entradas con `console.error` o mensajes de tu endpoint (por ejemplo, "BREVO_API_KEY not configured" o la respuesta cruda de Brevo).

## Problemas comunes y soluciones rápidas
- Error: `Git author ... must have access to the team ...` (permiso/author mismatch)
  - Causa: el `author` del commit no corresponde a un miembro del team en Vercel.
  - Solución rápida:
    - Cambiar email local y reescribir autor del último commit:
      ```powershell
      git config user.email "tu_email@vercel_account.com"
      git commit --amend --reset-author --no-edit
      vercel --prod
      ```
    - O invitar el email del autor como miembro del proyecto en Vercel Dashboard → Settings → Members.

- Error: `BREVO_API_KEY not configured` o 401 de Brevo
  - Revisa que `BREVO_API_KEY` esté configurada en Vercel para el entorno correcto y redeploya.

- Error: 404 para `/api/brevo` en producción
  - Asegúrate de que el archivo API exporte funciones y no esté prerenderizado. Añade `export const prerender = false;` en `src/pages/api/brevo.ts` y redeploya.
  - Verifica que `astro.config.mjs` tenga `adapter: vercel()` y que las rutas API estén en `src/pages/api`.

- Error: 502 o 500 desde función
  - Revisa logs en Dashboard para ver el stack trace y `console.error`.

## Buenas prácticas
- No subas claves a tu repo. Guarda claves en Vercel env vars.
- Prueba primero en Preview antes de Production.
- Añade logs temporales (console.log) para debugging y remuévelos o disminúyelos en producción.

---

Si quieres, puedo añadir un script `scripts/check-deploy.ps1` que haga las pruebas GET/POST automáticas contra la URL del deployment. Dime si quieres que lo añada.
