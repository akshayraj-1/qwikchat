import { defineConfig } from "vite";
import sitemapPlugin from "vite-plugin-sitemap";
import react from "@vitejs/plugin-react";

const dynamicRoutes = ["hi", "hello"].map(name => `/room/${name}`);
export default defineConfig({
  plugins: [
      react(),
      sitemapPlugin({
        hostname: "https://qwikchat.web.app",
        changefreq: "weekly",
        dynamicRoutes
      })
  ],
  envDir: "./",
  envFiles: [".env.development"],
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    },
    envDir: "./",
    envFile: ".env.production",
    chunkSizeWarningLimit: 2000
  },
  server: {
    port: 3939
  }
})
