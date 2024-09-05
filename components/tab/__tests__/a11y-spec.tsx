import React from 'react';
import { mount } from 'cypress/react';
import Tab from '../index';
import '../style';

describe('Tab a11y', () => {
    afterEach(() => {
        cy.document().then(doc => {
            doc.body.innerHTML = '';
        });
    });

    it('should not have any violations for tab with children', () => {
        mount(
            <Tab>
                <Tab.Item title="foo" />
            </Tab>
        );
        cy.get('.next-tabs-tab').should('exist');
        cy.get('.next-tabs-tabpane').should('exist');
    });

    it('should not have any violations for tab with datasource', () => {
        const panes = [1, 2, 3, 4, 5].map((item, index) => (
            <Tab.Item title={`item ${item}`} key={index} />
        ));
        mount(<Tab animation={false}>{panes}</Tab>);
        cy.get('.next-tabs-tab').should('have.length', 5);
        cy.get('.next-tabs-tabpane').should('exist');
    });
});
