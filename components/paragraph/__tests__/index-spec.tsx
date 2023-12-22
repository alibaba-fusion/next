import * as React from 'react';
import Paragraph from '../index';

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Paragraph', () => {
    describe('render', () => {
        it('default class check', () => {
            cy.mount(<Paragraph />);
            cy.get('.next-paragraph-medium.next-paragraph-long');
        });

        it('props `type` & `size` must work', () => {
            cy.mount(<Paragraph type="short" size="small" />);
            cy.get('.next-paragraph-small.next-paragraph-short');
        });

        it('props `rtl` should be ok', () => {
            cy.mount(<Paragraph rtl />);
            cy.get('.next-paragraph').should('have.attr', 'dir', 'rtl');
        });
    });
});
