import { cloneElement, type ReactElement } from 'react';
import { mount, type MountReturn } from 'cypress/react';
import './commands';

function rerender<Props extends object>(tag: string, nextProps: Props) {
    return cy.get<MountReturn>(`@${tag.replace(/^@/, '')}`).then(({ component, rerender }) => {
        return rerender(cloneElement(component as ReactElement, nextProps));
    });
}

function triggerInputChange(subject: JQuery<HTMLElement>, value: string) {
    const element = subject[0];
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value'
    )?.set;
    nativeInputValueSetter?.call(element, value)
    element.dispatchEvent(new Event('input', { bubbles: true }));
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            mount: typeof mount;
            rerender: typeof rerender;
            triggerInputChange: (value: string) => void;
        }
    }
}

Cypress.Commands.add('mount', mount);
Cypress.Commands.add('rerender', rerender);
Cypress.Commands.add('triggerInputChange', { prevSubject: 'element' }, triggerInputChange)
