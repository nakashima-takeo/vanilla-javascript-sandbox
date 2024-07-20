import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src/jquery',
    build:{
        outDir: '../../dist',
        emptyOutDir: true,
    },
    server:{
        open: true,
    }
})