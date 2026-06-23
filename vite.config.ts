import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base: './' produces relative asset URLs so the build works on GitHub Pages
// at EITHER a user site (username.github.io) OR a project site
// (username.github.io/<repo>/) without changing config.
export default defineConfig({
  base: './',
  plugins: [react()],
})
