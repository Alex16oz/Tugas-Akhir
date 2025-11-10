import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa' // <-- Impor plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Otomatis update service worker
      devOptions: {
        enabled: true // Aktifkan PWA saat development (npm run dev)
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'vite.svg'], // Aset tambahan untuk di-cache
      manifest: {
        name: 'tugas-akhir', // Nama lengkap aplikasi Anda
        short_name: 'TugasAkhir', // Nama pendek
        description: 'Deskripsi singkat tentang aplikasi PWA Anda', // Deskripsi
        theme_color: '#43179c', // Warna tema (sesuai navbar Anda)
        background_color: '#ffffff', // Warna latar belakang splash screen
        start_url: '/', // Halaman awal
        display: 'standalone', // Tampilan aplikasi
        icons: [
          {
            src: 'pwa-192x192.png', // Path ke ikon di folder public
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png', // Path ke ikon di folder public
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable' // Ikon yang bisa di-masking
          }
        ]
      }
    })
  ],
})