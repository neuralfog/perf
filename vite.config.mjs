import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { elemix } from '@neuralfog/elemix-vite';

export default defineConfig({
    plugins: [elemix()],
    resolve: {
        alias: {
            '#src': resolve(__dirname, 'src'),
        },
    },
});
