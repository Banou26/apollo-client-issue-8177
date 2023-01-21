import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import polyfills from './vite-plugin-node-stdlib-browser.cjs'

export default defineConfig({
  build: {
    target: 'esnext',
    outDir: 'build'
  },
  plugins: [
    react(),
    // @ts-expect-error
    polyfills()
  ]
})
