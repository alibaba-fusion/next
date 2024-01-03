import React from 'react';
import Loading from '../index';

describe('Test', () => {
    describe('render', () => {
        it('should render default', () => {
            cy.mount(<Loading />);
            cy.get('.next-loading');
        });
        it('should render medium size', () => {
            cy.mount(<Loading />);
            cy.get('.next-loading-fusion-reactor');

            cy.mount(<Loading size="medium" />);
            cy.get('.next-loading-medium-fusion-reactor');
        });

        it('should show fullscreen', () => {
            cy.mount(<Loading fullScreen />);
            cy.get('.next-overlay-wrapper');
        });
    });

    describe('behavior', () => {
        it('should support tip', () => {
            cy.mount(<Loading tip="hello world" />);
            cy.get('.next-loading-tip-content');
        });
        it('should support indicator', () => {
            const indicator = <div className="custom-loading-dom" />;
            cy.mount(<Loading tip="hello world" indicator={indicator} />);
            cy.get('.next-loading-indicator > .custom-loading-dom');
        });
        it('should support visible', () => {
            cy.mount(<Loading tip="hello world" />);
            cy.get('.next-loading').should('have.class', 'next-open');
            cy.mount(<Loading tip="hello world" visible={false} />);
            cy.get('.next-loading').not('.next-open');
        });
        it('should support inline', () => {
            cy.mount(<Loading tip="hello world" />);
            cy.get('.next-loading').should('have.class', 'next-loading-inline');
            cy.mount(<Loading tip="hello world" inline={false} />);
            cy.get('.next-loading').not('.next-loading-inline');
        });
    });
});
