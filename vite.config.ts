import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        babelrc: true
      }
    }),
    WindiCSS()
  ],
  resolve: {
    alias: [
      {
        find: /@\//,
        replacement: resolve(process.cwd(), '.', 'src') + '/'
      }
    ]
  }
})
