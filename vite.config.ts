import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'es2015',
    lib: {
      entry: './src/index.ts',
      formats: ['es', 'cjs', 'umd'],
      name: 'index',
      fileName: 'index'
    }
  }
})
