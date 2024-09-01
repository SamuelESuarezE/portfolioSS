import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/styles/global.sass";`
        }
      }
    }
  }
});