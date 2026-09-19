import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // project site is served from https://<user>.github.io/anand-portfolio/
  // `mode` is 'production' for both `vite build` and `vite preview`, unlike `command`
  // which is 'serve' for both `vite dev` and `vite preview`.
  base: mode === 'production' ? '/anand-portfolio/' : '/',
  plugins: [react(), tailwindcss()],
}))
