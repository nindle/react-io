import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 配置代理
    proxy: {
      '/v1': {
        target: 'https://api.kit9.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/v1/, '')
      },
    }
  },
})
