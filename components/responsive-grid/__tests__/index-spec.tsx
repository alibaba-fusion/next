import React from 'react';
import ResponsiveGrid from '../index';
import '../style';

const { Cell } = ResponsiveGrid;

const App = (props: { [key: string]: string }) => {
    return (
        <ResponsiveGrid {...props}>
            <Cell className="mygrid grid-12" colSpan={12} key="0">
                12
            </Cell>
            <Cell className="mygrid grid-6" colSpan={6} key="1">
                6
            </Cell>
            <Cell className="mygrid grid-6" colSpan={6} key="2">
                6
            </Cell>
            <Cell className="mygrid grid-3" colSpan={3} key="3">
                3
            </Cell>
            <Cell className="mygrid grid-3" colSpan={3} key="4">
                3
            </Cell>
            <Cell className="mygrid grid-3" colSpan={3} key="5">
                3
            </Cell>
            <Cell className="mygrid grid-3" colSpan={3} key="6">
                3
            </Cell>
            <Cell
                className="mygrid grid-3"
                id="r-grid-tablet-8"
                colSpan={{ desktop: 4, tablet: 8 }}
                key="7"
            >
                4 tablet: 8
            </Cell>
            <Cell className="mygrid grid-3" colSpan={4} key="8">
                3
            </Cell>
            <Cell className="mygrid grid-3" colSpan={4} key="9">
                3
            </Cell>
            <Cell
                className="mygrid grid-3"
                id="r-grid-phone-2"
                colSpan={{ desktop: 3, phone: 2 }}
                key="10"
            >
                3 phone: 2
            </Cell>
        </ResponsiveGrid>
    );
};

describe('ResponsiveGrid', () => {
    it('should render', () => {
        cy.mount(<ResponsiveGrid />);
        cy.get('.next-responsive-grid').should('exist');
    });

    it('should render in desktop', () => {
        cy.mount(<App />);
        cy.get('.next-responsive-grid').should('exist');
        cy.get('#r-grid-tablet-8').should('have.css', 'grid-area', 'auto / auto / span 1 / span 4');
        cy.get('#r-grid-phone-2').should('have.css', 'grid-area', 'auto / auto / span 1 / span 3');
    });

    it('should render in tablet', () => {
        cy.mount(<App device="tablet" />);
        cy.get('#r-grid-tablet-8').should('have.css', 'grid-area', 'auto / auto / span 1 / span 8');
        cy.get('#r-grid-phone-2').should('have.css', 'grid-area', 'auto / auto / span 1 / span 2');
    });

    it('should render in phone', () => {
        cy.mount(<App device="phone" />);
        cy.get('#r-grid-tablet-8').should('have.css', 'grid-area', 'auto / auto / span 1 / span 2');
        cy.get('#r-grid-phone-2').should('have.css', 'grid-area', 'auto / auto / span 1 / span 2');
    });
});
