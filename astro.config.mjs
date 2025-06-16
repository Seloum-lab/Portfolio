// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Seloum-lab.github.io',
  base: 'Portfolio',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
    server: {
    watch: {
      usePolling: true,
      interval: 100,
    },
    host: true
  }
  }
});