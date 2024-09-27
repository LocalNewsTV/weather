import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: ['*/**'],
      manifest: {
        name: 'LocalNewsTV Weather',
        short_name: 'weather',
        description: 'Get current weather',
        theme_color: '#FFF',
        icons: [
          {
            src: 'Logo192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'Logo512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  base: '/weather/',
});
