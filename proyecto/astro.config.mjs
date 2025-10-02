// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: [
        "localhost",
        "127.0.0.1",
        "*.ngrok-free.app" // 👈 permite cualquier subdominio de ngrok
      ]
    }
  },

  integrations: [react(), sitemap()]
});
