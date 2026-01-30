import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
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
