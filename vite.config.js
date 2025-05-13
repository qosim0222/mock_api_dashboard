import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),  VitePWA()],
  resolve: {
      alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
