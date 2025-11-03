import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  appType: 'mpa',
  build: {
    minify: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        contactanos: resolve(__dirname, "contactanos.html")
      }
    }
  },
  plugins: [] // sin plugins extra
});