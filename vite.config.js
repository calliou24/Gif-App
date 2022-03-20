/// <reference types="vitest" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Gif-App/' , 
  plugins: [react()],
  test: {
    setupFiles: ['./vitest.setup.js'],
  },
})
