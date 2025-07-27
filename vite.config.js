import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';


export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist', // папка сборки
    emptyOutDir: true,
  },
  plugins: [
    react(),
    svgr(),
  ],
  base: '/movable-table/',
  resolve: {
    alias: {
      '@': '/src', // Алиас для удобных импортов
    }
  },
  server: {
    port: 3000, // Порт разработки
    open: true,  // Автоматически открывать браузер
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg', '.jpeg'],
  publicDir: 'public',
});