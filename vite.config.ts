import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // project site is served from https://<user>.github.io/anand-portfolio/
  base: command === 'build' ? '/anand-portfolio/' : '/',
  plugins: [react(), tailwindcss()],
}))
