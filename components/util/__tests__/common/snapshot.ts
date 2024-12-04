import type { Options } from 'cypress-image-snapshot';

export class CompareSnapshot {
    customSnapshotsDir: string;
    customDiffDir: string;
    constructor(options: { componentName: string }) {
        const { componentName } = options;
        this.customSnapshotsDir = `/components/${componentName}/__tests__/snapshots/__base__`;
        this.customDiffDir = `/components/${componentName}/__tests__/snapshots/__diff__`;
    }
    compare(
        subject: Cypress.Chainable<JQuery<HTMLElement>>,
        nameOrOptions?: string | Options,
        options?: Options
    ) {
        const commandOptions = typeof nameOrOptions === 'string' ? options : nameOrOptions;
        const targetOptions = Object.assign(
            {
                customSnapshotsDir: this.customSnapshotsDir,
                customDiffDir: this.customDiffDir,
            },
            commandOptions
        );
        const target = subject ? subject : cy;
        return target.matchImageSnapshot(targetOptions);
    }
}
