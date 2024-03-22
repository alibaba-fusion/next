import React from 'react';
import { MountReturn } from 'cypress/react';
import SplitButton from '../index';
import '../style';

describe('SplitButton', () => {
    const menu = ['a', 'b'].map(item => <SplitButton.Item key={item}>{item}</SplitButton.Item>);

    describe('render', () => {
        it('should render', () => {
            cy.mount(<SplitButton label="hello world">{menu}</SplitButton>);
            cy.get('div.next-split-btn');
        });

        it('should controlled selectedkeys', () => {
            cy.mount(
                <SplitButton label="hello world" visible selectedKeys={['a']} selectMode="single">
                    {menu}
                </SplitButton>
            ).as('btn');
            cy.get<MountReturn>('@btn').then(({ component, rerender }) => {
                return rerender(
                    React.cloneElement(component as React.ReactElement, { selectedKeys: ['b'] })
                );
            });
            cy.get('li[title="b"][role="option"]').should('have.class', 'next-selected');
        });

        it('should controlled popup visible', () => {
            cy.mount(<SplitButton label="hello world">{menu}</SplitButton>).as('btn');
            cy.get('.next-menu').should('have.length', 0);
            cy.get<MountReturn>('@btn').then(({ component, rerender }) => {
                return rerender(
                    React.cloneElement(component as React.ReactElement, { visible: true })
                );
            });
            cy.get('.next-menu').should('have.length', 1);
        });
    });

    describe('action', () => {
        it('should click trigger to open the popup', () => {
            const onVisibleChange = cy.spy();
            cy.mount(
                <SplitButton label="hello world" onVisibleChange={onVisibleChange}>
                    {menu}
                </SplitButton>
            );

            cy.get('button.next-split-btn-trigger').click();
            cy.get('.next-menu');
            cy.wrap(onVisibleChange).should('be.calledOnceWith', true, 'fromTrigger');
        });

        it('should select in uncontrolled mode', () => {
            cy.mount(
                <SplitButton label="hello world" visible selectMode="single">
                    {menu}
                </SplitButton>
            );
            cy.get('li[title="b"][role="option"]').click();
            cy.get('li[title="b"][role="option"]').should('have.class', 'next-selected');
        });

        it('should select in controlled mode', () => {
            cy.mount(
                <SplitButton label="hello world" visible selectedKeys={['a']} selectMode="single">
                    {menu}
                </SplitButton>
            );
            cy.get('li[title="b"][role="option"]').click();
            cy.get('li[title="a"][role="option"]').should('have.class', 'next-selected');
        });
    });
});
