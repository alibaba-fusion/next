import React from 'react';
import { KEYCODE } from '../../util';
import Menu from '../index';
import '../style';

const { Item, Divider, Group, SubMenu, CheckboxItem, RadioItem } = Menu;

function shouldInlineSubMenuOpen(index: number) {
    cy.get('.next-menu-sub-menu-wrapper').eq(index).find('.next-menu-sub-menu').should('exist');
    cy.get('.next-menu-sub-menu-wrapper')
        .eq(index)
        .find('.next-menu-icon-arrow')
        .should('have.class', 'next-open');
}

function shouldInlineSubMenuClose(index: number) {
    cy.get('.next-menu-sub-menu-wrapper').eq(index).find('.next-menu-sub-menu').should('not.exist');
    cy.get('.next-menu-sub-menu-wrapper')
        .eq(index)
        .find('.next-menu-icon-arrow')
        .should('not.have.class', 'next-open');
}

function shouldSelected(chain: Cypress.Chainable<JQuery<HTMLElement>>) {
    chain.should('have.class', 'next-selected').find('.next-menu-icon-selected').should('exist');
}

function shouldUnselected(chain: Cypress.Chainable<JQuery<HTMLElement>>) {
    chain
        .should('not.have.class', 'next-selected')
        .find('.next-menu-icon-selected')
        .should('not.exist');
}

describe('Menu', () => {
    it('should render menu', () => {
        cy.mount(
            <Menu className="custom" style={{ color: 'red' }}>
                <Item>item</Item>
            </Menu>
        );
        cy.get('.next-menu').should('have.attr', 'role', 'menu');
        cy.get('.next-menu').should('have.class', 'custom');
        cy.get('.next-menu').should('have.css', 'color', 'rgb(255, 0, 0)');
    });

    it('should support isSelectIconRight', () => {
        cy.mount(
            <Menu isSelectIconRight selectMode="multiple" selectedKeys={['1', '2', '3']}>
                <Item key="1">item</Item>
                <Item key="2">item</Item>
                <Item key="3" isSelectIconRight={false}>
                    item
                </Item>
            </Menu>
        );
        cy.get('i.next-menu-icon-right').should('have.length', 2);
    });

    it('should render menu item', () => {
        cy.mount(
            <Menu>
                <Item helper="helper" className="custom" style={{ color: 'red' }}>
                    item
                </Item>
            </Menu>
        );
        cy.get('.next-menu-item .next-menu-item-text').should('have.text', 'item');
        cy.get('.next-menu-item').should('have.attr', 'title', 'item');
        cy.get('.next-menu-item').should('have.attr', 'role', 'menuitem');
        cy.get('.next-menu-item').should('have.class', 'custom');
        cy.get('.next-menu-item').should('have.css', 'color', 'rgb(255, 0, 0)');
        cy.get('.next-menu-item .next-menu-item-helper').should('have.text', 'helper');
    });

    it('should render menu item with mode=popup && only 1 item', () => {
        cy.mount(
            <Menu hozInLine direction="hoz" mode="popup">
                <Item key="1" className="popup-menu-item">
                    First
                </Item>
            </Menu>
        );
        cy.get('.next-menu-item.popup-menu-item').should('have.length', 1);
    });

    it('Group/SubMenu should accepct string/number/node', () => {
        cy.mount(
            <Menu defaultOpenKeys={['sub-menu']}>
                <Group label="Group">
                    test-group-string
                    <Item className="custom-className" key="group-1">
                        Group option 1
                    </Item>
                </Group>
                <SubMenu key="sub-menu" label="Sub menu">
                    test-submenu-string
                    <Item className="custom-className" key="sub-1">
                        Sub option 1
                    </Item>
                </SubMenu>
            </Menu>
        );
        cy.get('.next-menu').contains('test-group-string');
        cy.get('.next-menu-sub-menu').contains('test-submenu-string');
    });

    it('Group/SubMenu robotness', () => {
        cy.mount(
            <Menu openKeys={['no-exist']} mode="popup">
                <SubMenu key="sub-menu" label="Sub menu">
                    <Item className="custom-className" key="sub-1">
                        Sub option 1
                    </Item>
                </SubMenu>
            </Menu>
        );
        cy.get('.next-menu').should('exist');
    });

    it('should filter duplicate keys', () => {
        cy.mount(
            <Menu>
                <Item key="1">item1</Item>
                <Item key="2">item2</Item>
                <Item key="2">item2</Item>
                <Item key="2">item2</Item>
                <Item>item</Item>
            </Menu>
        );
        cy.get('.next-menu-item').should('have.length', 3);
        cy.get('.next-menu-item').eq(0).should('have.attr', 'title', 'item1');
        cy.get('.next-menu-item').eq(1).should('have.attr', 'title', 'item2');
        cy.get('.next-menu-item').eq(2).should('have.attr', 'title', 'item');
    });

    it('should pass className', () => {
        cy.mount(
            <Menu defaultOpenKeys="sub-menu" className="custom" style={{ color: 'red' }}>
                <Item className="custom-className">item</Item>
                <Group label="Group">
                    <Item className="custom-className" key="group-1">
                        Group option 1
                    </Item>
                </Group>
                <SubMenu key="sub-menu" label="Sub menu">
                    <Item className="custom-className" key="sub-1">
                        Sub option 1
                    </Item>
                </SubMenu>
            </Menu>
        );
        cy.get('.next-menu li.custom-className').should('have.length', 3);
    });

    it('should support onItemClick', () => {
        const onItemClick = cy.spy();
        cy.mount(
            <Menu
                onItemClick={(key, item, event) => {
                    onItemClick(key, item.props._key, event.target);
                }}
            >
                <Item key="0">item</Item>
            </Menu>
        );
        cy.get('.next-menu-item').click();
        cy.wrap(onItemClick).should('be.calledOnceWith', '0', '0');
        cy.then(() => {
            cy.wrap(onItemClick.firstCall.args[2]).should('have.class', 'next-menu-item-inner');
        });
    });

    it('should render disabled menu item', () => {
        cy.mount(
            <Menu>
                <Item disabled>disabled item</Item>
            </Menu>
        );
        cy.get('.next-menu-item').should('have.class', 'next-disabled');
        cy.get('.next-menu-item').should('have.attr', 'aria-disabled');
    });

    it('paddingleft should only be related to inline mode', () => {
        cy.mount(
            <Menu
                direction="hoz"
                mode="popup"
                defaultOpenKeys={['sub', 'sub1', 'sub2', 'suba', 'suba1', 'suba2']}
            >
                <SubMenu label="submenu1" key="sub">
                    <Item>1</Item>
                    <SubMenu label="submenu2" mode="inline" key="sub1">
                        <Item>2</Item>
                        <SubMenu label="submenu3" mode="inline" key="sub2">
                            <Item id="sub2-item">3</Item>
                        </SubMenu>
                    </SubMenu>
                </SubMenu>
                <SubMenu label="submenu11" key="suba">
                    <Item>11</Item>
                    <SubMenu label="submenu21" key="suba1">
                        <Item>21</Item>
                        <SubMenu label="submenu31" mode="inline" key="suba2">
                            <Item id="suba2-item">31</Item>
                        </SubMenu>
                    </SubMenu>
                </SubMenu>
            </Menu>
        );
        cy.get('#sub2-item').should('have.css', 'padding-left', '60px');
        cy.get('#suba2-item').should('have.css', 'padding-left', '40px');
    });

    it('should render menu divider', () => {
        cy.mount(
            <Menu>
                <Item key="1">1</Item>
                <Divider className="custom" style={{ color: 'red' }} />
                <Item key="2">2</Item>
            </Menu>
        );

        cy.get('.next-menu-divider').should('exist');
        cy.get('.next-menu-divider').should('have.attr', 'role', 'separator');
        cy.get('.next-menu-divider').should('have.class', 'custom');
        cy.get('.next-menu-divider').should('have.css', 'color', 'rgb(255, 0, 0)');
    });

    it('should render menu group', () => {
        cy.mount(
            <Menu>
                <Group label="Group" className="custom" style={{ color: 'red' }}>
                    <Item key="1">1</Item>
                    <Item key="2">2</Item>
                </Group>
            </Menu>
        );
        cy.get('.next-menu-group-label').should('have.text', 'Group');
        cy.get('.next-menu-group-label').should('have.class', 'custom');
        cy.get('.next-menu-group-label').should('have.css', 'color', 'rgb(255, 0, 0)');
    });

    it('should render inline sub menu', () => {
        cy.mount(
            <Menu defaultOpenKeys={['sub']}>
                <SubMenu key="sub" label="Sub Menu" className="custom" style={{ color: 'red' }}>
                    <Item key="1">1</Item>
                    <Item key="2">2</Item>
                </SubMenu>
            </Menu>
        );
        cy.get('.next-menu-sub-menu-wrapper').should('have.class', 'custom');
        cy.get('.next-menu-sub-menu-wrapper').should('have.css', 'color', 'rgb(255, 0, 0)');
        cy.get('.next-menu-item.next-opened').should('have.text', 'Sub Menu');
        cy.get('.next-menu-sub-menu .next-menu-item').should('have.length', 2);
    });

    it('should support triggerType under inline mode', () => {
        cy.mount(
            <Menu triggerType="hover" expandAnimation={false}>
                <SubMenu key="sub" label="Sub Menu">
                    <Item key="1">1</Item>
                    <Item key="2">2</Item>
                </SubMenu>
            </Menu>
        );
        cy.get('.next-menu-sub-menu-wrapper').trigger('mouseover');
        cy.get('.next-menu-sub-menu').should('exist');
        cy.get('.next-menu-sub-menu-wrapper').trigger('mouseout');
        cy.get('.next-menu-sub-menu').should('not.exist');
    });

    it('should support openKeys and onOpen under inline mode', () => {
        const onOpen = cy.spy();
        cy.mount(
            <Menu expandAnimation={false} openKeys={['0']} onOpen={onOpen}>
                <SubMenu key="0" label="0">
                    <Item key="0-0">0-0</Item>
                    <Item key="0-1">0-1</Item>
                </SubMenu>
                <SubMenu key="1" label="1">
                    <Item key="1-0">1-0</Item>
                    <Item key="1-1">1-1</Item>
                </SubMenu>
            </Menu>
        ).as('menu');
        shouldInlineSubMenuOpen(0);

        cy.get('.next-menu-sub-menu-wrapper').eq(0).find('.next-menu-item.next-opened').click();
        cy.wrap(onOpen).should('be.calledOnceWith', [], { open: false, key: '0' });
        cy.rerender('menu', { openKeys: [] });
        shouldInlineSubMenuClose(0);
        shouldInlineSubMenuClose(1);
    });

    it('should support setting openMode to single under inline mode', () => {
        cy.mount(
            <Menu openMode="single" expandAnimation={false} defaultOpenKeys={['0']}>
                <SubMenu key="0" label="0">
                    <Item key="0-0">0-0</Item>
                    <Item key="0-1">0-1</Item>
                </SubMenu>
                <SubMenu key="1" label="1">
                    <Item key="1-0">1-0</Item>
                    <Item key="1-1">1-1</Item>
                </SubMenu>
            </Menu>
        );

        cy.get('.next-menu-sub-menu-wrapper').eq(1).find('.next-menu-item').click();
        shouldInlineSubMenuClose(0);
        shouldInlineSubMenuOpen(1);
    });

    it('should render popup sub menu', () => {
        cy.mount(
            <Menu mode="popup" defaultOpenKeys={['sub']}>
                <SubMenu key="sub" label="Sub Menu" className="custom" style={{ color: 'red' }}>
                    <Item key="1">1</Item>
                    <Item key="2">2</Item>
                </SubMenu>
            </Menu>
        );
        cy.get('.next-menu-item.next-opened').should('have.text', 'Sub Menu');
        cy.get('.next-menu-item.next-opened').should('have.class', 'custom');
        cy.get('.next-menu-item.next-opened').should('have.css', 'color', 'rgb(255, 0, 0)');

        cy.get('.next-overlay-wrapper').should('have.length', 1);
        cy.get('.next-overlay-wrapper .next-menu-item').should('have.length', 2);
    });

    it('should render popup sub menu with no animation', () => {
        cy.mount(
            <Menu mode="popup" popupProps={{ animation: false }} defaultOpenKeys={['sub-1']}>
                <SubMenu key="sub-1" label="Popup menu 1">
                    <Item key="popup-1-2">Popup option 2</Item>
                </SubMenu>
                <SubMenu key="sub-2" label="Popup menu 2">
                    <Item key="popup-2-2">Popup option 2</Item>
                </SubMenu>
            </Menu>
        );
        cy.get('.next-overlay-wrapper').should('have.length', 1);
    });

    it('can not select item if not set selectMode', () => {
        cy.mount(
            <Menu defaultSelectedKeys={['0']}>
                <Item key="0">0</Item>
                <Item key="1">1</Item>
            </Menu>
        );

        shouldUnselected(cy.get('.next-menu-item').eq(0));
        shouldUnselected(cy.get('.next-menu-item').eq(1));
        cy.get('.next-menu-item').eq(1).click();
        shouldUnselected(cy.get('.next-menu-item').eq(0));
        shouldUnselected(cy.get('.next-menu-item').eq(1));
    });

    it('should support single select', () => {
        cy.mount(
            <Menu selectMode="single" defaultSelectedKeys={['0']}>
                <Item key="0">0</Item>
                <Item key="1">1</Item>
            </Menu>
        );

        shouldSelected(cy.get('.next-menu-item').eq(0));
        shouldUnselected(cy.get('.next-menu-item').eq(1));
        cy.get('.next-menu-item').eq(0).click();

        shouldSelected(cy.get('.next-menu-item').eq(0));
        shouldUnselected(cy.get('.next-menu-item').eq(1));
        cy.get('.next-menu-item').eq(1).click();

        shouldSelected(cy.get('.next-menu-item').eq(1));
        shouldUnselected(cy.get('.next-menu-item').eq(0));
    });

    it('should support multiple select', () => {
        cy.mount(
            <Menu selectMode="multiple" defaultSelectedKeys={['0']}>
                <Item key="0">0</Item>
                <Item key="1">1</Item>
            </Menu>
        );

        shouldSelected(cy.get('.next-menu-item').eq(0));
        shouldUnselected(cy.get('.next-menu-item').eq(1));
        cy.get('.next-menu-item').eq(0).click();

        shouldUnselected(cy.get('.next-menu-item').eq(0));
        shouldUnselected(cy.get('.next-menu-item').eq(1));
        cy.get('.next-menu-item').eq(1).click();

        shouldSelected(cy.get('.next-menu-item').eq(1));
        shouldUnselected(cy.get('.next-menu-item').eq(0));
    });

    it('should support selectedKeys and onSelect under inline mode', () => {
        const onSelect = cy.spy();
        cy.mount(
            <Menu
                selectMode="multiple"
                selectedKeys={['0']}
                defaultOpenKeys={['sub-menu']}
                onSelect={(keys, item, extra) => {
                    onSelect(keys, item.props._key, extra);
                }}
            >
                <Item key="0">0</Item>
                <Item key="1">1</Item>
                <SubMenu key="sub-menu" label="Sub menu">
                    <Item key="2">2</Item>
                    <Item key="3">3</Item>
                </SubMenu>
            </Menu>
        ).as('menu');
        cy.get('.next-menu-sub-menu .next-menu-item').eq(0).click();
        cy.wrap(onSelect).should('be.calledOnceWith', ['0', '2'], '2', {
            select: true,
            key: '2',
            label: '2',
            keyPath: ['sub-menu'],
            labelPath: ['Sub menu'],
        });
        cy.rerender('menu', { selectedKeys: ['0', '2'] });
        cy.get('.next-menu-item').each(el => {
            if (['0', '2'].includes(el.text())) {
                shouldSelected(cy.wrap(el));
            } else {
                shouldUnselected(cy.wrap(el));
            }
        });
    });

    it('should select sub menu label if set selectable of SubMenu to true', () => {
        cy.mount(
            <Menu selectMode="multiple" defaultSelectedKeys={['sub-1', 'sub-2']}>
                <SubMenu key="sub-1" selectable>
                    <Item key="0">0</Item>
                    <Item key="1">1</Item>
                </SubMenu>
                <SubMenu key="sub-2">
                    <Item key="2">2</Item>
                    <Item key="3">3</Item>
                </SubMenu>
            </Menu>
        );

        shouldSelected(cy.get('div.next-menu-item').eq(0));
        shouldUnselected(cy.get('div.next-menu-item').eq(1));
        cy.get('div.next-menu-item').eq(0).click();
        cy.get('div.next-menu-item').eq(1).click();

        shouldUnselected(cy.get('div.next-menu-item').eq(0));
        shouldUnselected(cy.get('div.next-menu-item').eq(1));
    });

    it('can not select sub menu item if set shallowSelect to true', () => {
        cy.mount(
            <Menu selectMode="multiple" defaultOpenKeys={['sub-menu']} shallowSelect>
                <SubMenu key="sub-menu">
                    <Item key="2">2</Item>
                    <Item key="3">3</Item>
                </SubMenu>
            </Menu>
        );

        cy.get('.next-menu-sub-menu .next-menu-item').eq(0).click();
        shouldUnselected(cy.get('.next-menu-sub-menu .next-menu-item').eq(0));
    });

    it('should support pressing space to select item', () => {
        const onSelect = cy.spy();
        cy.mount(
            <Menu selectMode="single" onSelect={onSelect}>
                <Item key="0">item</Item>
            </Menu>
        );
        cy.get('.next-menu-item').trigger('keydown', { keyCode: KEYCODE.SPACE });
        cy.wrap(onSelect).should('be.calledOnceWith', ['0']);
    });

    it('should calling onSelect if you pass it to the item', () => {
        const onSelect = cy.spy();
        cy.mount(
            <Menu>
                <Item key="0" onSelect={onSelect}>
                    item
                </Item>
            </Menu>
        );
        cy.get('.next-menu-item').click();
        cy.wrap(onSelect).should('be.calledOnceWith', true);
    });

    it('should render checkbox menu item', () => {
        const onChange = cy.spy();
        cy.mount(
            <Menu>
                <CheckboxItem
                    checked
                    onChange={(checked, event) => {
                        onChange(checked, (event.target as HTMLElement).className);
                    }}
                    className="custom"
                    style={{ color: 'red' }}
                    helper="helper"
                >
                    checkbox
                </CheckboxItem>
            </Menu>
        ).as('menu');
        cy.get('.next-menu-item').should('have.attr', 'role', 'menuitemcheckbox');
        cy.get('.next-menu-item').should('have.class', 'custom');
        cy.get('.next-menu-item').should('have.css', 'color', 'rgb(255, 0, 0)');
        cy.get('.next-menu-item-helper').should('have.text', 'helper');
        cy.get('.next-checkbox-input').should('have.attr', 'checked');

        cy.get('.next-menu-item').click();
        cy.wrap(onChange).should('be.calledOnceWith', false, 'next-menu-item-inner');

        cy.rerender('menu', { labelToggleChecked: false });
        cy.get('.next-menu-item .next-menu-item-text').click();
        cy.wrap(onChange).should('be.calledOnce');

        cy.get<HTMLInputElement>('.next-checkbox-input').uncheck();
        cy.wrap(onChange).should('be.calledTwice');
    });

    it('should support pressing space to check item', () => {
        const onChange = cy.spy();
        cy.mount(
            <Menu>
                <CheckboxItem
                    onChange={(checked, event) => {
                        onChange(checked, (event.target as HTMLElement).className);
                    }}
                >
                    checkbox
                </CheckboxItem>
            </Menu>
        );

        cy.get('.next-menu-item').trigger('keydown', { keyCode: KEYCODE.SPACE });
        cy.wrap(onChange).should('be.calledOnceWith', true, 'next-menu-item-inner');
    });

    it('should render radio menu item', () => {
        const onChange = cy.spy();
        cy.mount(
            <Menu>
                <RadioItem
                    key="1"
                    checked
                    onChange={() => {
                        onChange('1');
                    }}
                    className="custom"
                    style={{ color: 'red' }}
                >
                    1
                </RadioItem>
                <RadioItem
                    key="2"
                    onChange={(checked, event) => {
                        onChange('2', checked, (event.target as HTMLElement).className);
                    }}
                >
                    2
                </RadioItem>
            </Menu>
        );
        cy.get('.next-menu-item').eq(0).should('have.attr', 'role', 'menuitemradio');
        cy.get('.next-menu-item').eq(0).should('have.class', 'custom');
        cy.get('.next-menu-item').eq(0).should('have.css', 'color', 'rgb(255, 0, 0)');
        cy.get('.next-menu-item').eq(0).find('input').should('have.attr', 'checked');
        cy.get('.next-menu-item').eq(1).find('input').should('not.have.attr', 'checked');

        cy.get('.next-menu-item').eq(1).click();
        cy.wrap(onChange).should('be.calledOnceWith', '2', true, 'next-menu-item-inner');
    });

    it('should support triggerType under popup mode', () => {
        cy.mount(
            <Menu mode="popup" triggerType="hover">
                <SubMenu key="sub" label="Sub Menu">
                    <Item key="1">1</Item>
                    <Item key="2">2</Item>
                </SubMenu>
            </Menu>
        );
        cy.get('.next-menu-item').trigger('mouseover');
        cy.get('.next-overlay-inner .next-menu').should('exist');
    });

    it('should support popupAutoWidth and popupAlign', () => {
        cy.mount(
            <Menu
                mode="popup"
                popupAutoWidth
                popupAlign="outside"
                defaultOpenKeys={['sub']}
                style={{ width: '300px', height: '300px' }}
            >
                <SubMenu key="sub" label="Sub Menu" className="custom" style={{ color: 'red' }}>
                    <Item key="1">1</Item>
                    <Item key="2">2</Item>
                </SubMenu>
            </Menu>
        );
        cy.get('.next-overlay-inner').should('have.css', 'width', '300px');
        cy.get('.next-overlay-inner').should('have.css', 'height', '300px');
    });

    it('should support keyboard', () => {
        cy.mount(
            <Menu id="menu-id" autoFocus expandAnimation={false}>
                <Item disabled key="0">
                    0
                </Item>
                <Item className="i1" key="1">
                    1
                </Item>
                <SubMenu className="i2" key="2" label="2">
                    <Item className="i2-0" key="2-0">
                        2-0
                    </Item>
                    <Item className="i2-1" key="2-1">
                        2-1
                    </Item>
                </SubMenu>
                <Item className="i3" key="3">
                    3
                </Item>
            </Menu>
        );
        cy.get('#menu-id .i1').should('be.focused');
        cy.get('#menu-id .i1').trigger('keydown', { keyCode: KEYCODE.DOWN });
        cy.get('.i2 .next-menu-item')
            .should('be.focused')
            .trigger('keydown', { keyCode: KEYCODE.ENTER });

        cy.get('.i2-0').should('be.focused').trigger('keydown', { keyCode: KEYCODE.ESC });
        cy.get('.i2 .next-menu-item')
            .should('be.focused')
            .trigger('keydown', { keyCode: KEYCODE.RIGHT });
        cy.get('.i2-0').should('be.focused').trigger('keydown', { keyCode: KEYCODE.LEFT });
        cy.get('.i2 .next-menu-item').should('be.focused');
        cy.get('.next-menu-sub-menu').should('not.exist');
        cy.get('.i2 .next-menu-item').trigger('keydown', { keyCode: KEYCODE.UP });
        cy.get('.i1').should('be.focused').trigger('keydown', { keyCode: KEYCODE.UP });
        cy.get('.i3').should('be.focused');
    });

    it('should support keyboard if direction is hoz', () => {
        cy.mount(
            <Menu autoFocus direction="hoz">
                <Item className="i0" key="0">
                    0
                </Item>
                <Item className="i1" key="1">
                    1
                </Item>
                <Item className="i2" key="2">
                    2
                </Item>
            </Menu>
        );
        cy.get('.i0').should('be.focused').trigger('keydown', { keyCode: KEYCODE.RIGHT });
        cy.get('.i1').should('be.focused').trigger('keydown', { keyCode: KEYCODE.LEFT });
        cy.get('.i0').should('be.focused');
    });

    it('should support hozInLine in hoz', () => {
        cy.mount(
            <Menu direction="hoz" style={{ width: 300 }} mode="popup" hozInLine>
                <Item key="0" style={{ width: 60 }}>
                    0
                </Item>
                <Item key="1" style={{ width: 60 }}>
                    1
                </Item>
                <SubMenu key="sub-menu" label="Sub menu" style={{ width: 50 }}>
                    <Item key="2">2</Item>
                    <Item key="3">3</Item>
                </SubMenu>
                <Item key="4" style={{ width: 30 }}>
                    4
                </Item>
                <Item key="5">5</Item>
                <Item key="6">6</Item>
            </Menu>
        );
        cy.get('.next-menu.next-hoz li.next-menu-more').should('have.length', 2);
        cy.get('.next-menu.next-hoz li.next-menu-more').eq(0).find('.next-menu-item-inner').click();
        cy.get('.next-overlay-wrapper li').should('have.length', 2);
    });

    it('should support hozInLine with renderMore', () => {
        cy.mount(
            <Menu
                direction="hoz"
                style={{ width: 300 }}
                mode="popup"
                hozInLine
                renderMore={() => {
                    return <li className="rendermore-class">test</li>;
                }}
            >
                <Item key="0" style={{ width: 60 }}>
                    0
                </Item>
                <Item key="1" style={{ width: 60 }}>
                    1
                </Item>
                <SubMenu key="sub-menu" label="Sub menu" style={{ width: 50 }}>
                    <Item key="2">2</Item>
                    <Item key="3">3</Item>
                </SubMenu>
                <Item key="4" style={{ width: 30 }}>
                    4
                </Item>
                <Item key="5">5</Item>
                <Item key="6">6</Item>
            </Menu>
        );
        cy.get('.next-menu.next-hoz li.next-menu-more.rendermore-class').should('exist');
    });

    it('should show renderMore when hozInLine & async load more items ', () => {
        cy.mount(
            <Menu hozInLine direction="hoz" triggerType="hover" mode="popup" popupAutoWidth>
                {new Array(50).fill(0).map((_, index) => (
                    <SubMenu label="Sub Nav" key={index}>
                        <Item key="sub-12">Sub option 1</Item>
                        <Item key="sub-22">Sub option 2</Item>
                    </SubMenu>
                ))}
            </Menu>
        );
        cy.get('.next-menu li.next-menu-item').should('have.length', 52);
        cy.get('.next-menu li.next-menu-item.next-menu-more').should('have.length', 2);
        cy.get('.next-menu li.menuitem-overflowed').should('have.length.greaterThan', 1);
    });

    it('should support hozInLine with header&footer in hoz', () => {
        cy.mount(
            <Menu
                direction="hoz"
                style={{ width: 300 }}
                mode="popup"
                header="header"
                footer="footer"
                hozInLine
            >
                <Item key="0" style={{ width: 100 }}>
                    0
                </Item>
                <Item key="1" style={{ width: 60 }}>
                    1
                </Item>
                <SubMenu key="sub-menu" label="Sub menu" style={{ width: 50 }}>
                    <Item key="2">2</Item>
                    <Item key="3">3</Item>
                </SubMenu>
                <Item key="4" style={{ width: 30 }}>
                    4
                </Item>
                <Item key="5">5</Item>
                <Item key="6">6</Item>
            </Menu>
        );
        cy.get('.next-menu.next-hoz li.next-menu-more').should('have.length', 2);
        cy.get('.next-menu.next-hoz li.next-menu-more').eq(0).find('.next-menu-item-inner').click();
        cy.get('.next-overlay-wrapper li').should('have.length', 4);
    });
});

describe('Menu.create', () => {
    it('should create context menu', () => {
        Menu.create({
            target: document.body,
            id: 'menu-create-id',
            offset: [0, 0],
            children: [
                <Item key="1">Option 1</Item>,
                <Item key="2">Option 2</Item>,
                <SubMenu className="parent-item" key="sub-menu">
                    <Item key="3">Option 3</Item>
                    <Item key="4">Option 4</Item>
                </SubMenu>,
            ],
            triggerType: 'click',
        });
        cy.get('#menu-create-id').should('exist');
        cy.get('#menu-create-id .parent-item').click();
        cy.get('.next-overlay-wrapper').should('have.length', 2);
    });
});
