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
        leadership: resolve(__dirname, 'leadership.html'),
        carving: resolve(__dirname, 'carving.html'),
      }
    }
  }
})
