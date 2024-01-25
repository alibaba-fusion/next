import React from 'react';
import Search from '../index';

describe('Search issues', function () {
    it('Enter search should be called once when autoHighlightFirstItem=false', function () {
        const onSearchSpy = cy.spy();
        cy.mount(
            <Search dataSource={['a']} onSearch={onSearchSpy} autoHighlightFirstItem={false} />
        );
        cy.get('input').type('a');
        cy.get('input').type('{enter}');

        cy.wrap(onSearchSpy).should('be.calledOnceWith', 'a');

        cy.get('input').clear();

        cy.get('input').type('b');
        cy.get('input').type('{enter}');

        cy.wrap(onSearchSpy).should('be.calledTwice');
        cy.wrap(onSearchSpy).should('be.calledWith', 'b');
    });
});
