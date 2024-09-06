import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react({
      jsxRuntime: 'automatic'  // automatic JSXトランスフォームを有効化
    })],
    root: 'src',
    
    build:{
        outDir: '../../dist',
        emptyOutDir: true,
    },
    server:{
        open: true,
    }
})
