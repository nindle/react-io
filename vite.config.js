import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 配置代理
    proxy: {
      '/weibo': {
        target: 'https://weibo.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/weibo/, '')
      },
      '/baidu': {
        target: 'http://s.api.enetapi.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/baidu/, '')
      },
    }
  },
})
