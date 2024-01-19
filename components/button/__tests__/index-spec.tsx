import React from 'react';
import Icon from '../../icon';
import Button from '../index';

describe('Button', () => {
    describe('render', () => {
        it('should render button by type', () => {
            cy.mount(<Button type="primary">重要按钮</Button>);
            cy.get('.next-btn.next-btn-primary');
        });

        it('should render button with deprecated shape', () => {
            cy.mount(<Button shape="text">button</Button>);
            cy.get('.next-btn.next-btn-text');
        });

        it('should render warning/text button', () => {
            cy.mount(<Button warning>确定</Button>);
            cy.get('.next-btn.next-btn-warning');
            cy.mount(
                <Button text type="primary">
                    确定
                </Button>
            );
            cy.get('.next-btn.next-btn-text');
        });

        it('should render ghost button', () => {
            cy.mount(<Button ghost>确定</Button>);
            cy.get('.next-btn-ghost');
            cy.mount(<Button ghost="light">确定</Button>);
            cy.get('.next-btn-light');
            cy.mount(<Button ghost="dark">确定</Button>);
            cy.get('.next-btn-dark');
        });

        it('should render loading button', () => {
            cy.mount(
                <Button ghost loading>
                    确定
                </Button>
            );
            cy.get('.next-btn-loading');
        });

        it('should render custom loading button', () => {
            cy.mount(
                <Button ghost loading icons={{ loading: <Icon type="loading" /> }}>
                    确定
                </Button>
            );
            cy.get('.next-btn-custom-loading-icon').should('not.have.class', 'next-btn-loading');
        });

        it('should render button with icon', () => {
            cy.mount(
                <Button type="primary">
                    <Icon type="arrow-left" />
                    按钮
                </Button>
            );
            cy.get('.next-icon.next-icon-first');
            cy.mount(
                <Button type="primary">
                    按钮
                    <Icon type="arrow-right" />
                </Button>
            );
            cy.get('.next-icon.next-icon-last');
        });

        it('should render button by different htmlType', () => {
            cy.mount(
                <Button component="a" htmlType="submit">
                    按钮
                </Button>
            );
            cy.get('a.next-btn');
        });

        it('should render disabled <a>', () => {
            cy.mount(
                <Button component="a" href="https://www.taobao.com" disabled>
                    hello
                </Button>
            );
            cy.get('a.next-btn').should('have.attr', 'disabled');
            cy.get('a.next-btn').should('not.have.attr', 'href');
        });

        it('should click single button', () => {
            const onClick = cy.spy();
            cy.mount(<Button onClick={onClick}>按钮</Button>);
            cy.get('.next-btn').click();
            cy.wrap(onClick).should('be.calledOnce');
        });

        it('should mouseUp with handler', () => {
            const onMouseUp = cy.spy();
            cy.mount(<Button onMouseUp={onMouseUp}>hello</Button>);
            cy.get('.next-btn').trigger('mouseup');
            cy.wrap(onMouseUp).should('be.calledOnce');
        });
    });
});

describe('ButtonGroup', () => {
    describe('render', () => {
        it('should render button by type', () => {
            cy.mount(
                <Button.Group>
                    <Button type="primary">确定</Button>
                    <Button type="secondary">取消</Button>
                </Button.Group>
            );
            cy.get('.next-btn-group').should('have.length', 1);
            cy.get('.next-btn.next-btn-primary').should('have.length', 1);
            cy.get('.next-btn.next-btn-secondary').should('have.length', 1);
        });

        it('should render button by group size', () => {
            cy.mount(
                <Button.Group size="small">
                    <Button size="large">确定</Button>
                    <Button>取消</Button>
                </Button.Group>
            );
            cy.get('.next-btn').should('not.have.class', 'next-large');
            cy.get('.next-btn.next-small').should('have.length', 2);
        });

        it('should render button group with invalid child', () => {
            cy.mount(
                <Button.Group>
                    <Button>OK</Button>
                    {null}
                </Button.Group>
            );
            cy.get('.next-btn-group')
                .should('have.length', 1)
                .get('.next-btn')
                .should('have.length', 1);
        });

        it('should click button in group', () => {
            const onClick = cy.spy();
            cy.mount(
                <Button.Group>
                    <Button type="primary" onClick={onClick}>
                        确定
                    </Button>
                    <Button type="primary">取消</Button>
                </Button.Group>
            );
            cy.get('.next-btn').first().click();
            cy.wrap(onClick).should('be.calledOnce');
        });
    });
});
