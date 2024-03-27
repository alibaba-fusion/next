import { defineConfig } from 'cypress';

export default defineConfig({
    component: {
        setupNodeEvents(on) {
            on('task', {
                'log': (message: string) => {
                    // eslint-disable-next-line no-console
                    console.log(message);
                    return null;
                },
            })
        },
        devServer: {
            framework: 'react',
            bundler: 'vite',
        },
        specPattern: ['**/__tests__/**/*-{spec,test}.{ts,tsx}'],
        viewportWidth: 1000,
        viewportHeight: 600,
    },
});
