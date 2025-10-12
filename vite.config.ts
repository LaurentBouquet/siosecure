import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'fs';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-cname',
      closeBundle() {
        try {
          copyFileSync(
            resolve(__dirname, 'CNAME'),
            resolve(__dirname, 'dist/CNAME')
          );
        } catch (e) {
          console.warn('CNAME file not found or could not be copied');
        }
      }
    }
  ],
  base: '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
