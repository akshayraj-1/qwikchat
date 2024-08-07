import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  envDir: './',
  envFiles: ['.env', '.env.development'],
  build: {
    envDir: './',
    envFile: '.env.production',
    chunkSizeWarningLimit: 2000
  }
})
