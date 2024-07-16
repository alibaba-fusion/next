import * as React from 'react';
import { MountReturn } from 'cypress/react';
import '../style';
import MenuButton from '../index';

describe('MenuButton', () => {
    const menu = ['a', 'b'].map(item => <MenuButton.Item key={item}>{item}</MenuButton.Item>);

    describe('render', () => {
        it('should render', () => {
            cy.mount(<MenuButton label="hello world">{menu}</MenuButton>);
            cy.get('button.next-menu-btn').should('have.length', 1);
        });

        it('should controlled selectedKeys', () => {
            cy.mount(
                <MenuButton label="hello world" visible selectedKeys={['a']} selectMode="single">
                    {menu}
                </MenuButton>
            ).as('menu-btn');
            cy.get<MountReturn>('@menu-btn').then(({ component, rerender }) => {
                return rerender(React.cloneElement(component, { selectedKeys: ['b'] }));
            });
            cy.get('li[title="b"][role="option"]').should('have.class', 'next-selected');
        });

        it('should controlled popup visible', () => {
            cy.mount(<MenuButton label="hello world">{menu}</MenuButton>).as('menu-btn');
            cy.get('.next-menu').should('have.length', 0);
            cy.get<MountReturn>('@menu-btn').then(({ component, rerender }) => {
                return rerender(React.cloneElement(component, { visible: true }));
            });
            cy.get('.next-menu').should('have.length', 1);
        });
    });

    describe('action', () => {
        it('should click trigger to open the popup', () => {
            let visible: boolean;
            cy.mount(
                <MenuButton label="hello world" onVisibleChange={vis => (visible = vis)}>
                    {menu}
                </MenuButton>
            );
            cy.get('button.next-menu-btn').click();
            cy.then(() => {
                cy.get('.next-menu').should('have.length', 1);
                cy.wrap(visible).should('be.true');
            });
        });

        it('should select in uncontrolled mode', () => {
            cy.mount(
                <MenuButton label="hello world" visible selectMode="single">
                    {menu}
                </MenuButton>
            );
            cy.get('li[title="b"][role="option"]').click();
            cy.get('li[title="b"][role="option"]').should('have.class', 'next-selected');
        });

        it('should select in controlled mode', () => {
            cy.mount(
                <MenuButton label="hello world" visible selectedKeys={['a']} selectMode="single">
                    {menu}
                </MenuButton>
            );
            cy.get('li[title="b"][role="option"]').click();
            cy.get('li[title="a"][role="option"]').should('have.class', 'next-selected');
        });

        it('should mulitple select can`t close', () => {
            const onVisibleChange = cy.spy();
            const onItemClick = cy.spy();
            cy.mount(
                <MenuButton
                    onVisibleChange={onVisibleChange}
                    onItemClick={onItemClick}
                    label="hello world"
                    defaultVisible
                    selectMode="multiple"
                >
                    {menu}
                </MenuButton>
            );
            cy.get('li[title="b"][role="option"]').click();
            cy.wrap(onItemClick).should('be.calledOnce');
            cy.wrap(onVisibleChange).should('not.have.been.called');
        });
    });
});
