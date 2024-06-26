import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

// https://vitejs.dev/config
export default defineConfig({
  server: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, 'api'),
      },
    },
  },
  plugins: [react()],
});
