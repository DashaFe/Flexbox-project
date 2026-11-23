import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// BASE_PATH задаётся при деплое на GitHub Pages (например, /pex-landing/).
// Локально по умолчанию '/'.
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
  build: {
    // chrome61 не знает 8-значный hex-цвет (#rrggbbaa), поэтому минификатор
    // оставляет rgba() — такой CSS проходит jigsaw-валидатор без ошибок
    cssTarget: 'chrome61',
    assetsInlineLimit: 0,
  },
  css: {
    modules: { localsConvention: 'camelCase' },
  },
});
