import React from 'react';
import Typography from '../index';

const { Paragraph, Text, H1, H2, H3, H4, H5, H6 } = Typography;

describe('Typography', () => {
    describe('Paragraph', () => {
        it('default class check', () => {
            cy.mount(<Paragraph />);
            cy.get('.next-typography-paragraph');
        });

        it('props `rtl` should be ok', () => {
            cy.mount(<Paragraph rtl />);
            cy.get('.next-typography-paragraph').last().should('have.attr', 'dir', 'rtl');
        });
    });

    describe('Typography', () => {
        it('default class check', () => {
            cy.mount(<Typography />);
            cy.get('.next-typography');
            cy.get('.next-typography').should('have.prop', 'tagName', 'ARTICLE');
        });
    });

    describe('Title', () => {
        it('default class check', () => {
            cy.mount(<H1 />);
            cy.get('.next-typography-title');
        });

        it('h1 tag check', () => {
            cy.mount(<H1 />);
            cy.get('.next-typography-title').last().should('have.prop', 'tagName', 'H1');
        });

        it('h2 tag check', () => {
            cy.mount(<H2 />);
            cy.get('.next-typography-title').last().should('have.prop', 'tagName', 'H2');
        });

        it('h3 tag check', () => {
            cy.mount(<H3 />);
            cy.get('.next-typography-title').last().should('have.prop', 'tagName', 'H3');
        });

        it('h4 tag check', () => {
            cy.mount(<H4 />);
            cy.get('.next-typography-title').last().should('have.prop', 'tagName', 'H4');
        });

        it('h5 tag check', () => {
            cy.mount(<H5 />);
            cy.get('.next-typography-title').last().should('have.prop', 'tagName', 'H5');
        });

        it('h6 tag check', () => {
            cy.mount(<H6 />);
            cy.get('.next-typography-title').last().should('have.prop', 'tagName', 'H6');
        });
    });

    describe('Text', () => {
        it('default class check', () => {
            cy.mount(<Text />);
            cy.get('.next-typography');
        });
        it('default different style', () => {
            cy.mount(<Text strong />);
            cy.get('strong');

            cy.mount(<Text underline />);
            cy.get('u');

            cy.mount(<Text delete />);
            cy.get('del');

            cy.mount(<Text code />);
            cy.get('code');

            cy.mount(<Text mark />);
            cy.get('mark');
        });
    });
});
