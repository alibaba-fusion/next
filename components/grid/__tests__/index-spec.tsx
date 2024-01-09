import React from 'react';
import Grid from '../index';

const { Row, Col } = Grid;

describe('Row', () => {
    it('should have class', () => {
        cy.mount(
            <Row
                {...{
                    wrap: true,
                    fixed: true,
                    fixedWidth: 'xxs',
                    justify: 'end',
                    align: 'center',
                }}
            />
        );
        cy.get('.next-row').should('have.class', 'next-row-wrap');
        cy.get('.next-row').should('have.class', 'next-row-fixed');
        cy.get('.next-row').should('have.class', 'next-row-fixed-xxs');
        cy.get('.next-row').should('have.class', 'next-row-justify-end');
        cy.get('.next-row').should('have.class', 'next-row-align-center');
    });

    it('should apply gutter', () => {
        cy.mount(
            <Row gutter={16}>
                <Col key="1" span="12" />
                <Col key="2" span="12" />
            </Row>
        );
        cy.get('.next-row')
            .should('have.css', 'margin-left', '-8px')
            .and('have.css', 'margin-right', '-8px');
        cy.get('.next-col')
            .should('have.css', 'padding-left', '8px')
            .and('have.css', 'padding-right', '8px');
    });

    it('should receive className prop', () => {
        cy.mount(<Row className="custom" />);
        cy.get('.next-row').should('have.class', 'custom');
    });

    it('should receive style prop', () => {
        cy.mount(<Row style={{ color: 'red' }} />);
        cy.get('.next-row').should('have.css', 'color', 'rgb(255, 0, 0)');
    });

    it('should have hidden class', () => {
        cy.mount(<Row hidden />);
        cy.get('.next-row').should('have.class', 'next-row-hidden');

        cy.mount(<Row hidden="s" />);
        cy.get('.next-row').should('have.class', 'next-row-s-hidden');

        cy.mount(<Row hidden={['s', 'm']} />);
        cy.get('.next-row-s-hidden').should('have.class', 'next-row-m-hidden');
    });

    it('should rendered as custom element type', () => {
        cy.mount(<Row component="ul" />);
        cy.get('.next-row').should('have.prop', 'tagName', 'UL');
    });

    it('should rendered as custom element type(function)', () => {
        const func = (props: any) => <div className="cus-component">{props.children}</div>; // eslint-disable-line
        cy.mount(<Row component={func} />);
        cy.get('.cus-component');
    });
});

describe('Col', () => {
    it('should have class', () => {
        cy.mount(
            <Col
                {...{
                    span: 1,
                    fixedSpan: 2,
                    offset: 3,
                    fixedOffset: 4,
                    align: 'center',
                }}
            />
        );

        cy.get('.next-col')
            .should('have.class', 'next-col-1')
            .and('have.class', 'next-col-fixed-2')
            .and('have.class', 'next-col-offset-3')
            .and('have.class', 'next-col-offset-fixed-4')
            .and('have.class', 'next-col-center');
    });

    it('should have break point class', () => {
        cy.mount(<Col {...{ s: 2 }} />);
        cy.get('.next-col').should('have.class', 'next-col-s-2');
        cy.mount(<Col {...{ s: { span: 2, offset: 2 } }} />);
        cy.get('.next-col-s-2').should('have.class', 'next-col-s-offset-2');
    });

    it('should have hidden class', () => {
        cy.mount(<Col hidden />);
        cy.get('.next-col').should('have.class', 'next-col-hidden');

        cy.mount(<Col hidden="s" />);
        cy.get('.next-col').should('have.class', 'next-col-s-hidden');

        cy.mount(<Col hidden={['s', 'm']} />);
        cy.get('.next-col-s-hidden').should('have.class', 'next-col-m-hidden');
    });

    it('should receive className prop', () => {
        cy.mount(<Col className="custom" />);
        cy.get('.next-col').should('have.class', 'custom');
    });

    it('should receive style prop', () => {
        cy.mount(<Col style={{ color: 'red' }} />);
        cy.get('.next-col').should('have.css', 'color', 'rgb(255, 0, 0)');
    });

    it('should rendered as custom element type', () => {
        cy.mount(<Col component="li" />);
        cy.get('.next-col').should('have.prop', 'tagName', 'LI');
    });

    it('should rendered as custom element type(function)', () => {
        const func = (props: any) => <div className="cus-component">{props.children}</div>; // eslint-disable-line
        cy.mount(<Col component={func} />);
        cy.get('.cus-component');
    });
});
