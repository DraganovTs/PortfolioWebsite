import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000, // Adjust this value as needed
    rollupOptions: {
      output: {
        manualChunks: {
          // Define manual chunks as needed based on your application's structure
          // For example, you can manually group modules into chunks
          // 'chunk-name': ['module1', 'module2', ...],
        },
      },
    },
  },
});
