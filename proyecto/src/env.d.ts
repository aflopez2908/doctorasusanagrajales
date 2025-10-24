/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly BREVO_API_KEY: string;
  // Otras variables de entorno que puedas necesitar
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}