import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

module.exports = defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'allef-lib-starter',
      formats: ['es'],
      fileName: (format) => `allef-lib-starter.${format}.js`,
    },
    rollupOptions: {
      
      external: ['vue'], 
      output: {
        exports: 'named',
        
        globals: {
          vue: 'Vue',
        },
      },
    },
    emptyOutDir: false,
  },
});
