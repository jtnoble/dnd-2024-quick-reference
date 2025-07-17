import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/dnd-2024-quick-reference/',
  plugins: [react()],
})
