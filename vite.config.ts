import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, './src')}`,
      '@locales': `${path.resolve(__dirname, './src/locales/')}`,
      '@common': `${path.resolve(__dirname, './src/common/')}`,
      '@bj': `${path.resolve(__dirname, './src/games/black-jack')}`,
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-router-dom': ['react-router-dom'],
        },
      },
    },
  },
});
