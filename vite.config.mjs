import { defineConfig } from 'vite';
import elemixPlugin from '@neuralfog/elemix-vite-plugin';
import { resolve } from 'node:path';

export default defineConfig({
    plugins: [elemixPlugin()],
    esbuild: {
        minifyIdentifiers: false,
        keepNames: true,
    },
    resolve: {
        alias: {
            '#src': resolve(__dirname, 'src'),
        },
    },
});
