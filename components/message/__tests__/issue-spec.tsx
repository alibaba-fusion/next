import React from 'react';
import Message from '../index';
import '../style';

describe('Message issues', () => {
    // Fix: https://github.com/alibaba-fusion/next/issues/3910
    // rest message symbol icon 'vertical-align: top'
    it('should align icon & content', () => {
        cy.mount(
            <Message defaultVisible animation={false}>
                content
            </Message>
        );
        cy.get('.next-message').should('have.length', 1);
        cy.get('.next-message').get('.next-message-symbol-icon').should('exist');
        cy.get('.next-message').get('.next-message-content').should('exist');
        let iconPos: DOMRect;
        cy.get('.next-message')
            .get('.next-message-symbol-icon')
            .should(node => {
                iconPos = node.get(0).getBoundingClientRect();
                expect(iconPos.height).to.exist;
            });
        let contentPos: DOMRect;
        cy.get('.next-message')
            .get('.next-message-content')
            .should(node => {
                contentPos = node.get(0).getBoundingClientRect();
                expect(iconPos.height).to.equal(contentPos.height);
                expect(iconPos.y).to.equal(contentPos.y);
            });
    });
});
