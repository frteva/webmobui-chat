import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy : {
      '/api/chat/': {
        target: 'https://chabloz.eu/api/chat/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/chat/, '')
      }
    }
  }
});