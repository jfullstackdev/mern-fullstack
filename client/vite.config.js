import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('Proxy error:', err);
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('Sending request to the target:', req.url);
          });
        },
        rewrite: (path) => path,
      },
      '/personal-details': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('Proxy error:', err);
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('Sending request to the target:', req.url);
          });
        },
      }
    },
    port: 3000,
    strictPort: false, // Allow Vite to fallback to another port if 3000 is used
    // These settings help fix WebSocket connection issues in GitHub Codespaces, like in the old webpack.config.js
    host: '0.0.0.0',
    hmr: {
      clientPort: 0
    }
  },
})
