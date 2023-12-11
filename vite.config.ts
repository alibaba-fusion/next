import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        {
            name: 'my-polyfill',
            config() {
                return {
                    resolve: {
                        alias: [
                            {
                                find: /^moment$/,
                                replacement: 'moment/moment.js',
                            },
                        ],
                    },
                };
            },
        },
    ],
});
