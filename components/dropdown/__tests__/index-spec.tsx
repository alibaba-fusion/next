import * as React from 'react';
import type { MountReturn } from 'cypress/react';
import Dropdown from '../index';
import Menu from '../../menu';
import '../../menu/style';

const menu = (
    <Menu>
        <Menu.Item>Option 1</Menu.Item>
        <Menu.Item>Option 2</Menu.Item>
        <Menu.Item>Option 3</Menu.Item>
        <Menu.Item>Option 4</Menu.Item>
    </Menu>
);

describe('Dropdown', () => {
    it('should render by defaultVisible', () => {
        const onHandleVisible = cy.spy();

        cy.mount(
            <Dropdown
                trigger={<a className="trigger">Hello dropdown</a>}
                onVisibleChange={onHandleVisible}
                animation={false}
                triggerType="click"
            >
                {menu}
            </Dropdown>
        );

        cy.get('.trigger').click();
        cy.wrap(onHandleVisible).should('be.calledOnce');

        cy.get('.next-menu-item').first().click();
        cy.wrap(onHandleVisible).should('be.calledTwice');
    });

    it('should render by visible', () => {
        const onHandleVisible = cy.spy();

        cy.mount(
            <Dropdown
                trigger={<a className="trigger">Hello dropdown</a>}
                onVisibleChange={onHandleVisible}
                animation={false}
                triggerType="click"
            >
                {menu}
            </Dropdown>
        ).as('dropdown');

        cy.get('.trigger').click();
        cy.wrap(onHandleVisible).should('be.calledOnce');

        cy.get<MountReturn>('@dropdown').then(({ component, rerender }) => {
            return rerender(
                React.cloneElement(component as React.ReactElement, { visible: false })
            );
        });
        cy.get('.next-overlay-wrapper').should('not.exist');

        cy.get<MountReturn>('@dropdown').then(({ component, rerender }) => {
            return rerender(React.cloneElement(component as React.ReactElement, { visible: true }));
        });
        cy.get('.next-overlay-wrapper').should('exist');
        cy.get('.next-menu-item').first().click();
        cy.wrap(onHandleVisible).should('be.calledTwice').should('be.calledWith', false);
    });

    it('should trigger custom menu click event', () => {
        const onClick = cy.spy();
        cy.mount(
            <Dropdown
                defaultVisible
                trigger={<a className="trigger">Hello dropdown</a>}
                animation={false}
            >
                <Menu onItemClick={onClick}>
                    <Menu.Item>Option 1</Menu.Item>
                    <Menu.Item>Option 2</Menu.Item>
                    <Menu.Item>Option 3</Menu.Item>
                    <Menu.Item>Option 4</Menu.Item>
                </Menu>
            </Dropdown>
        );

        cy.get('.next-menu-item').first().click();
        cy.wrap(onClick).should('be.calledOnce').should('be.calledWith', '0-0');
    });

    it('autoFocus=false should not have any activeElement', () => {
        cy.mount(
            <Dropdown
                autoFocus={false}
                trigger={<button className="trigger">Hello dropdown</button>}
                animation={false}
            >
                <Menu>
                    <Menu.Item>Option 1</Menu.Item>
                    <Menu.Item>Option 2</Menu.Item>
                    <Menu.Item>Option 3</Menu.Item>
                    <Menu.Item>Option 4</Menu.Item>
                </Menu>
            </Dropdown>
        );
        cy.clock();
        cy.get('.trigger').focus();
        cy.get('.trigger').click();
        cy.tick(500).then(() => {
            cy.wrap(document.activeElement).get('.next-menu').should('exist');
            cy.wrap(document.activeElement).should('not.have.class', 'next-menu-item');
        });
    });
});
