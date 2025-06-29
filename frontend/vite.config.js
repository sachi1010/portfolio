import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],


  base: './', // or '/your-subpath/' if hosted under a sub-directory
  build: {
    outDir: 'dist'  // must be "dist" for Vercel unless you customize settings
  }
})

