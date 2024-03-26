import { cloneElement, type ReactElement } from 'react';
import { mount, type MountReturn } from 'cypress/react';
import './commands';

function rerender<Props extends object>(tag: string, nextProps: Props) {
    return cy.get<MountReturn>(`@${tag.replace(/^@/, '')}`).then(({ component, rerender }) => {
        return rerender(cloneElement(component as ReactElement, nextProps));
    });
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            mount: typeof mount;
            rerender: typeof rerender;
        }
    }
}

Cypress.Commands.add('mount', mount);
Cypress.Commands.add('rerender', rerender);
