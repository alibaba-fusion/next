import React, { ReactElement, cloneElement } from 'react';
import { MountReturn } from 'cypress/react';
import UIState, { UIStateProps } from '../index';

interface TestProps extends UIStateProps {
    reset?: boolean;
}

class Test extends UIState<TestProps> {
    componentWillReceiveProps(nextProps: TestProps) {
        if (nextProps.reset) {
            this.resetUIState();
        }
    }
    render() {
        const input = <input type="radio" className={this.getStateClassName()} />;
        return this.getStateElement(input);
    }
}

describe('mixin-ui-state', () => {
    it('Focus element should has focused class', () => {
        cy.mount(<Test />);
        cy.get('input').focus();
        cy.get('.focused').should('exist');
    });

    it('Blur element should not has focused class', () => {
        cy.mount(<Test />);
        cy.get('input').focus();
        cy.get('.focused').should('exist');
        cy.get('input').blur();
        cy.get('.focused').should('not.exist');
    });

    it('resetUIState should not has focused class', () => {
        cy.mount(<Test />).as('el');
        cy.get('input').focus();
        cy.get('.focused').should('exist');
        cy.get<MountReturn>('@el').then(({ component, rerender }) => {
            return rerender(cloneElement(component as ReactElement, { reset: true }));
        });
        cy.get('.focused').should('not.exist');
    });
});
