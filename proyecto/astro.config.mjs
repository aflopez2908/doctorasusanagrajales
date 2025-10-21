// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({}),
  site: 'https://dra.susanagrajales.com',
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
