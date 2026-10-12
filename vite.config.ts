import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Relative asset URLs work both on github.io/<repository>/ and custom domains.
  base: './',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: [],
    clearMocks: true,
  },
});
