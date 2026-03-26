import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        reset: resolve(__dirname, 'reset.html'),
        healing: resolve(__dirname, 'healing.html'),
        culture: resolve(__dirname, 'culture.html'),
        carving: resolve(__dirname, 'carving.html'),
        grant: resolve(__dirname, 'grant.html'),
      }
    }
  }
})
