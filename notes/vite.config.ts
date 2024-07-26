import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // registerType: 'autoUpdate',
      // injectRegister: 'auto',
      // workbox: {
      //   globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      // },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: "Notes",
        short_name: "Notes",
        display: "standalone",
        description: "Simple Notes",
        icons: [
          {
            "src": "android192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "android512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "android96.png",
            "sizes": "96x96",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "android144.png",
            "sizes": "144x144",
            "type": "image/png",
            "purpose": "any"
          }
        ]
      }
    })],
})
