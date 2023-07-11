import { defineConfig } from 'vite';

// https://vitejs.dev/config
export default defineConfig({
  base: '/fifteen-puzzle/',
  plugins: [],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});