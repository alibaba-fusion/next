import React from 'react';
import Breadcrumb from '../index';
import ConfigProvider from '../../config-provider';
import '../style';

const { Item } = Breadcrumb;

describe('Item', () => {
    it('should has item class', () => {
        cy.mount(<Item>Item</Item>);
        cy.get('.next-breadcrumb-item').should('exist');
    });

    it('should has an a tag if you pass the link property', () => {
        cy.mount(<Item link="https://www.alibaba.com/">Item</Item>).as('BreadcrumbItem');
        cy.get('@BreadcrumbItem').document().find('a').should('have.length', 1);
        cy.get('@BreadcrumbItem')
            .document()
            .find('a')
            .should('have.attr', 'href', 'https://www.alibaba.com/');
    });

    it('should has an span tag if you do not pass the link property', () => {
        cy.mount(<Item>Item</Item>).as('BreadcrumbItem');
        cy.get('.next-breadcrumb-item').should('have.length', 1);
        cy.get('@BreadcrumbItem').document().find('a').should('have.length', 0);
    });

    it('should has an activated class if you pass it', () => {
        cy.mount(
            <Item activated link="https://www.alibaba.com/">
                Item
            </Item>
        ).as('BreadcrumbItem1');
        cy.get('@BreadcrumbItem1').document().find('a').get('.activated').should('exist');

        cy.mount(<Item activated>Item</Item>).as('BreadcrumbItem2');
        cy.get('@BreadcrumbItem2').document().find('span').get('.activated').should('exist');
    });
});

describe('Breadcrumb', () => {
    it("should throw error if you don't pass Item as children", () => {
        const spy = cy.spy(console, 'error');
        cy.mount(
            <Breadcrumb>
                <div>Invalid Child</div>
            </Breadcrumb>
        );
        expect(spy).to.have.been.calledWithMatch(
            /Warning: Failed %s type: %s%s/,
            'prop',
            "Breadcrumb's children must be Breadcrumb.Item!"
        );
    });

    it('should render ellipsis if maxNode is less than Items count', () => {
        cy.mount(
            <Breadcrumb maxNode={5}>
                <Item>Home 1</Item>
                <Item>Whatever 2</Item>
                <Item>All Categories 3</Item>
                <Item>Women’s Clothing 4</Item>
                <Item>Blouses & Shirts 5</Item>
                <Item>T-shirts 6</Item>
            </Breadcrumb>
        );
        cy.get('.next-breadcrumb-text-ellipsis').should('exist').and('contain', '...');
        cy.get('.next-breadcrumb-item').should('have.length', 5);
        cy.get('.next-breadcrumb-item:last').should('contain', 'T-shirts');
    });

    it('should render ellipsis if maxNode set auto', () => {
        cy.mount(
            <Breadcrumb maxNode="auto" style={{ width: '1px' }}>
                <Item>Home 1</Item>
                <Item>Whatever 2</Item>
                <Item>All Categories 3</Item>
                <Item>Women’s Clothing 4</Item>
                <Item>Blouses & Shirts 5</Item>
                <Item>T-shirts 6</Item>
            </Breadcrumb>
        );
        cy.get('.next-breadcrumb-text-ellipsis').should('exist').and('contain', '...');
    });

    it('should show hidden items menu when ellipsis clicked if showHiddenItems set true', () => {
        cy.mount(
            <Breadcrumb maxNode={5} showHiddenItems popupProps={{ triggerType: 'click' }}>
                <Item>Home 1</Item>
                <Item>Whatever 2</Item>
                <Item>All Categories 3</Item>
                <Item>Women’s Clothing 4</Item>
                <Item>Blouses & Shirts 5</Item>
                <Item>T-shirts 6</Item>
            </Breadcrumb>
        );
        cy.get('.next-breadcrumb-text-ellipsis-clickable').as('ellipsisItem');
        cy.get('@ellipsisItem').should('exist').and('contain', '...');
        cy.get('@ellipsisItem').click();
        cy.get('.next-menu-item').should('have.length', 2);
        cy.get('.next-menu-item').eq(0).should('contain', 'Whatever 2');
        cy.get('.next-menu-item').eq(1).should('contain', 'All Categories 3');
    });

    it('should not render the separator of the last item', () => {
        cy.mount(
            <Breadcrumb>
                <Item>Home</Item>
                <Item>Whatever</Item>
                <Item>All Categories</Item>
            </Breadcrumb>
        );
        cy.get('.next-breadcrumb-item')
            .last()
            .find('.next-breadcrumb-separator')
            .should('not.exist');
    });

    it('should not render the item of null', () => {
        const flag = false;
        cy.mount(
            <Breadcrumb>
                {flag && <Item>Default Not Show</Item>}
                <Item>Whatever</Item>
                <Item>All Categories</Item>
            </Breadcrumb>
        );
        cy.contains('Default Not Show').should('not.exist');
        cy.get('.next-breadcrumb-item')
            .last()
            .find('.next-breadcrumb-separator')
            .should('not.exist');
    });

    it('should be set component to change element tag', () => {
        cy.mount(
            <Breadcrumb className={'test-Breadcrumb'}>
                <Item>Home</Item>
                <Item>Whatever</Item>
                <Item>All Categories</Item>
            </Breadcrumb>
        );
        cy.get('.test-Breadcrumb').should('have.prop', 'tagName', 'NAV');
        cy.mount(
            <Breadcrumb component="div" className={'test-Breadcrumb'}>
                <Item>Home</Item>
                <Item>Whatever</Item>
                <Item>All Categories</Item>
            </Breadcrumb>
        );
        cy.get('.test-Breadcrumb').should('have.prop', 'tagName', 'DIV');
    });

    it('should support RTL', () => {
        cy.mount(
            <ConfigProvider rtl>
                <Breadcrumb className={'test-Breadcrumb'}>
                    <Item>Home</Item>
                    <Item>Whatever</Item>
                    <Item>All Categories</Item>
                </Breadcrumb>
            </ConfigProvider>
        );
        cy.get('.test-Breadcrumb').should('have.prop', 'dir', 'rtl');
        cy.get('.next-breadcrumb-item').eq(0).should('have.prop', 'dir', 'rtl');
    });

    it('should support onClick', () => {
        cy.wrap(false).as('isClicked');
        cy.mount(
            <Breadcrumb
                maxNode={2}
                showHiddenItems
                popupProps={{ triggerType: 'click', visible: true }}
            >
                <Breadcrumb.Item link="javascript:void(0);">Home 1</Breadcrumb.Item>
                <Breadcrumb.Item
                    link="javascript:void(0);"
                    onClick={() => {
                        cy.get('@isClicked').then(isClicked => {
                            if (!isClicked) {
                                cy.wrap(true).as('isClicked');
                            }
                        });
                    }}
                >
                    Whatever 2
                </Breadcrumb.Item>
                <Breadcrumb.Item link="javascript:void(0);">All Categories 3</Breadcrumb.Item>
            </Breadcrumb>
        );
        cy.contains('Whatever 2').click();
        cy.get('@isClicked').should('be.true');
    });
});
