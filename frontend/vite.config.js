import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['emoji-regex']
  },
  envDir: './',
  envFiles: ['.env', '.env.development'],
  build: {
    envDir: './',
    envFile: '.env.production',
    chunkSizeWarningLimit: 2000
  }
})
