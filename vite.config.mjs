import { defineConfig } from 'vite';
import elemixPlugin from '@neuralfog/elemix-vite-plugin';

export default defineConfig({
    plugins: [elemixPlugin()],
    esbuild: {
        minifyIdentifiers: false,
        keepNames: true,
    },
});
