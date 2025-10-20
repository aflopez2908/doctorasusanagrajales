import { defineCollection, z } from 'astro:content';

// Definir el esquema para la colección de servicios
// Nota importante sobre `slug`:
// - El slug de las entradas es un metadato propio de Astro (derivado del nombre del archivo o
//   calculado con la opción `slug` de la colección).
// - No lo exijas en el frontmatter para evitar errores cuando falte o cambie.
// - Si en algún archivo existe un campo `slug` en el frontmatter, lo respetamos como preferencia,
//   pero no lo validamos como obligatorio aquí.
const serviciosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    short: z.string(),
  image: z.string().optional(),
  category: z.string(),
  icon: z.string().optional(),

    // Campos opcionales que aparecen en varias entradas
    description: z.string().optional(),
    keywords: z.string().optional(),
    procedure: z.string().optional(),
    duration: z.string().optional(),
    price: z.string().optional(),
    features: z.array(z.string()).optional(),

    // `technologies` a veces viene como string JSON, otras como array
    technologies: z
      .union([z.array(z.string()), z.string()])
      .optional(),

    // Soporte para resultados en formato nuevo (array) o anterior (before/after sueltos)
    results: z
      .array(
        z.object({
          before: z.string(),
          after: z.string(),
          label: z.string().optional(),
          description: z.string().optional(),
        })
      )
      .optional(),
    before: z.string().optional(),
    after: z.string().optional(),

    // Bloque de recuperación con varias propiedades opcionales
    recovery: z
      .object({
        time: z.string().optional(),
        results: z.string().optional(),
        duration: z.string().optional(),
        scars: z.string().optional(),
        care: z.string().optional(),
        details: z.string().optional(),
      })
      .optional(),
  }),
});

// Exportar las colecciones
export const collections = {
  servicios: serviciosCollection,
};