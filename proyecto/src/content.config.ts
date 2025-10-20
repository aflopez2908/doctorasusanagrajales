import { defineCollection, z } from 'astro:content';

// Definir el esquema para la colección de servicios
const serviciosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    short: z.string(),
    image: z.string(),
    category: z.string(),
    icon: z.string(),
    description: z.string().optional(),
    keywords: z.string().optional(),
    technologies: z.array(z.string()).optional(),
    before: z.string().optional(),
    after: z.string().optional(),
  }),
});

// Exportar las colecciones
export const collections = {
  servicios: serviciosCollection,
};