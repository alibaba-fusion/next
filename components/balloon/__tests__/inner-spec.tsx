import React from 'react';
import Balloon from '../index';
import '../style';

const Inner = Balloon.Inner;

describe('Tooltip', () => {
    it('balloon', () => {
        cy.mount(<Inner>test</Inner>);
        cy.get('.next-balloon').should('exist');
    });

    it('tooltip', () => {
        cy.mount(<Inner isTooltip>test</Inner>);
        cy.get('.next-balloon-tooltip').should('exist');
    });
});
