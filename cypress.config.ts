import { defineConfig } from 'cypress';

export default defineConfig({
    component: {
        devServer: {
            framework: 'react',
            bundler: 'vite',
        },
        specPattern: ['**/__tests__/**/*.{ts,tsx}'],
        viewportWidth: 1000,
        viewportHeight: 600,
    },
});
