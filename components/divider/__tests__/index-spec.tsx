import React from 'react';
import Divider from '../index';
import '../style';

describe('Divider', () => {
    it('should render', () => {
        cy.mount(<Divider />);
        cy.get('.next-divider');
    });

    it('should render dashed', () => {
        cy.mount(<Divider dashed />);
        cy.get('.next-divider-dashed');
    });

    it('should render text right', () => {
        cy.mount(<Divider orientation="right">Right Text</Divider>);
        cy.get('.next-divider-with-text-right');
        cy.get('.next-divider-inner-text').contains('Right Text');
    });
});
