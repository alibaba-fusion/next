import { defineConfig } from 'cypress';
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin';

export default defineConfig({
    component: {
        setupNodeEvents(on, config) {
            on('task', {
                log: (message: string) => {
                    // eslint-disable-next-line no-console
                    console.log(message);
                    return null;
                },
            });
            addMatchImageSnapshotPlugin(on, config);
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
