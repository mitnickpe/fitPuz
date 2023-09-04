import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config
export default defineConfig({
  base: '/fifteen-puzzle/',
  plugins: [
    VitePWA({
      strategies: 'injectManifest',
      injectRegister: null,
      injectManifest: {
        globPatterns: ['**/*.{html,css,js,svg,mp3}'],
      },
      includeAssets: ['/Righteous.woff2'],
      srcDir: 'src',
      filename: 'sw.ts',
      registerType: 'autoUpdate',
      manifestFilename: 'site.webmanifest',
      manifest: {
        name: 'Fifteen Puzzle',
        short_name: 'Fifteen',
        dir: 'ltr',
        lang: 'en',
        categories: [
          'entertainment',
          'games'
        ],
        display: 'minimal-ui',
        orientation: 'natural',
        theme_color: '#38bdf8',
        background_color: '#4abeed',
        description: 'A 15 Puzzle Game',
        start_url: 'https://eldarlrd.github.io/fifteen-puzzle',
        scope: '/fifteen-puzzle/',
        icons: [
          {
            src: 'favicon.png',
            type: 'image/png',
            sizes: '512x512',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});