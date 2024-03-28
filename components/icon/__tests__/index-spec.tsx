import * as React from 'react';
import Icon from '../index';
import '../style';
import ConfigProvider from '../../config-provider';

describe('Icon', () => {
    it('should have type class', () => {
        cy.mount(<Icon type="smile" />);
        cy.get('.next-icon').should('have.class', 'next-icon-smile');
    });

    it('should have size class', () => {
        cy.mount(<Icon type="smile" size="large" />);
        cy.get('.next-icon').should('have.class', 'next-large');
    });

    it('should receive className prop', () => {
        cy.mount(<Icon type="smile" className="custom" />);
        cy.get('.next-icon').should('have.class', 'custom');
    });

    it('should receive style prop', () => {
        cy.mount(<Icon type="smile" style={{ color: 'red' }} />);
        cy.get('.next-icon').should('have.css', 'color').and('eq', 'rgb(255, 0, 0)');
    });

    it('should support createFromIconfontCN', () => {
        const CustomIcon = Icon.createFromIconfontCN({
            scriptUrl: '//at.alicdn.com/t/font_1464085_egnk4s8yv2f.js',
        });

        cy.mount(<CustomIcon type="icon-pic" />);
        cy.get('.next-icon svg');

        cy.mount(<CustomIcon type="icon-pic" size="xl" />);
        cy.get('.next-icon').should('have.class', 'next-xl');
    });

    it('createFromIconfontCN should support prefix', () => {
        const CustomIcon = Icon.createFromIconfontCN({
            scriptUrl: '//at.alicdn.com/t/font_1464085_egnk4s8yv2f.js',
        });

        cy.mount(
            <ConfigProvider prefix="abcd-">
                <CustomIcon type="icon-pic" prefix="efg-" />
            </ConfigProvider>
        );
        cy.get('.abcd-icon > svg');
        cy.get('.abcd-icon > .efg-icon-remote');
    });
});
