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

    // Fix: https://github.com/alibaba-fusion/next/issues/4851
    it('The styles of the outer Message component will affect the inner component when nested', () => {
        cy.mount(
            <Message type="help">
                <Message type="error">
                    <span>help</span>
                </Message>
            </Message>
        );
        cy.get('.next-message-help').should('have.length', 1);
        cy.get('.next-message-error').should('have.length', 1);

        cy.get('.next-message-help .next-message-symbol-icon').then($el => {
            expect($el.css('color')).to.equal('rgb(1, 193, 178)');
            const element = $el[0];
            const helpIconCode = window.getComputedStyle(element, '::before').content;
            console.log(helpIconCode.charCodeAt(1).toString(16));
            expect(helpIconCode.charCodeAt(1).toString(16)).to.equal('e673');
        });

        cy.get('.next-message-error .next-message-symbol-icon').then($el => {
            expect($el.css('color')).to.equal('rgb(255, 48, 0)');
            const element = $el[0];
            const errorIconCode = window.getComputedStyle(element, '::before').content;
            console.log(errorIconCode.charCodeAt(1).toString(16));
            expect(errorIconCode.charCodeAt(1).toString(16)).to.equal('e60d');
        });
    });
});
