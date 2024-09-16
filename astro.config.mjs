// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid',

  adapter: node({
    mode: 'standalone'
  }),
  experimental: {
    // Habilita Server Island que son fragmentos de HTML que se renderizan en el servidor 
    serverIslands: true,
  }
});