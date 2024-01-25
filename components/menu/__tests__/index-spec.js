import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import ReactTestUtils from 'react-dom/test-utils';
import { setTimeout } from 'timers';
import Checkbox from '../../checkbox';
import Radio from '../../radio';
import { KEYCODE, env } from '../../util';
import Menu from '../index';
import '../style';

/* eslint-disable react/jsx-filename-extension */
/* global describe it afterEach */

Enzyme.configure({ adapter: new Adapter() });
const { Item, Divider, Group, SubMenu, CheckboxItem, RadioItem } = Menu;

describe('Menu', () => {
    let wrapper;

    beforeEach(() => {
        const overlay = document.querySelectorAll('.next-overlay-wrapper');
        overlay.forEach(dom => {
            document.body.removeChild(dom);
        });
    });

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
    });

    it('should render menu', () => {
        wrapper = mount(
            <Menu className="custom" style={{ color: 'red' }}>
                <Item>item</Item>
            </Menu>
        );
        const menu = wrapper.find('.next-menu');
        assert(menu.prop('role') === 'menu');
        assert(menu.hasClass('custom'));
        assert(menu.prop('style').color === 'red');
    });

    it('should support isSelectIconRight', () => {
        wrapper = mount(
            <Menu isSelectIconRight selectMode="multiple" selectedKeys={['1', '2', '3']}>
                <Item key="1">item</Item>
                <Item key="2">item</Item>
                <Item key="3" isSelectIconRight={false}>
                    item
                </Item>
            </Menu>
        );
        assert(wrapper.find('i.next-menu-icon-right').length === 2);
    });

    it('should render menu item', () => {
        wrapper = mount(
            <Menu>
                <Item helper="helper" className="custom" style={{ color: 'red' }}>
                    item
                </Item>
            </Menu>
        );
        const item = wrapper.find('.next-menu-item');
        assert(item.find('.next-menu-item-text').text() === 'item');
        assert(item.prop('title') === 'item');
        assert(item.prop('role') === 'menuitem');
        assert(item.hasClass('custom'));
        assert(item.prop('style').color === 'red');
        assert(item.find('.next-menu-item-helper').text() === 'helper');
    });

    it('should render menu item with mode=popup && only 1 item', () => {
        wrapper = mount(
            <Menu hozInLine direction="hoz" mode="popup">
                <Item key="1" className="popup-menu-item">
                    First
                </Item>
            </Menu>
        );
        const item = wrapper.find('.next-menu-item');
        assert(item.find('.popup-menu-item').length === 1);
    });

    it('Group/SubMenu should accepct string/number/node', () => {
        wrapper = mount(
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
        const innerHTML = wrapper.find('.next-menu').at(0).instance().innerHTML;
        assert(innerHTML.match('test-group-string'));
        assert(innerHTML.match('test-submenu-string'));
    });

    it('Group/SubMenu robotness', () => {
        wrapper = mount(
            <Menu openKeys={['no-exist']} mode="popup">
                <SubMenu key="sub-menu" label="Sub menu">
                    <Item className="custom-className" key="sub-1">
                        Sub option 1
                    </Item>
                </SubMenu>
            </Menu>
        );
        assert(wrapper);
    });

    it('should filter duplicate keys', () => {
        wrapper = mount(
            <Menu>
                <Item key="1">item1</Item>
                <Item key="2">item2</Item>
                <Item key="2">item2</Item>
                <Item key="2">item2</Item>
                <Item>item</Item>
            </Menu>
        );
        const item = wrapper.find('.next-menu-item');
        assert(item.length === 3);
        assert(item.at(0).props().title === 'item1');
        assert(item.at(1).props().title === 'item2');
        assert(item.at(2).props().title === 'item');
    });

    it('should pass className', () => {
        wrapper = mount(
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
        const menu = wrapper.find('.next-menu li.custom-className');

        assert(menu.length === 3);
    });

    it('should support onItemClick', () => {
        let called = false,
            key,
            item,
            event;
        const handleItemClick = (k, i, e) => {
            called = true;
            key = k;
            item = i;
            event = e;
        };

        wrapper = mount(
            <Menu onItemClick={handleItemClick}>
                <Item key="0">item</Item>
            </Menu>
        );

        wrapper.find('.next-menu-item').simulate('click');

        assert(called);
        assert(key === '0');
        assert(item.props._key === '0');
        assert('target' in event);
    });

    it('should render disabled menu item', () => {
        wrapper = mount(
            <Menu>
                <Item disabled>disabled item</Item>
            </Menu>
        );
        const item = wrapper.find('.next-menu-item');
        assert(item.hasClass('next-disabled'));
        assert(item.prop('aria-disabled'));
    });

    it('paddingleft should only be related to inline mode', () => {
        wrapper = mount(
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
        const item1Level = wrapper.find('#sub2-item').at(0).props().inlineLevel;
        const item2Level = wrapper.find('#suba2-item').at(0).props().inlineLevel;

        assert(item1Level === 3);
        assert(item2Level === 2);
    });

    it('should render menu divider', () => {
        wrapper = mount(
            <Menu>
                <Item key="1">1</Item>
                <Divider className="custom" style={{ color: 'red' }} />
                <Item key="2">2</Item>
            </Menu>
        );

        const divider = wrapper.find('.next-menu-divider');
        assert(!!divider);
        assert(divider.prop('role') === 'separator');
        assert(divider.hasClass('custom'));
        assert(divider.prop('style').color === 'red');
    });

    it('should render menu group', () => {
        wrapper = mount(
            <Menu>
                <Group label="Group" className="custom" style={{ color: 'red' }}>
                    <Item key="1">1</Item>
                    <Item key="2">2</Item>
                </Group>
            </Menu>
        );

        const label = wrapper.find('.next-menu-group-label').at(0);

        assert(label.text() === 'Group');
        assert(label.hasClass('custom'));
        assert(label.prop('style').color === 'red');
    });

    it('should render inline sub menu', () => {
        wrapper = mount(
            <Menu defaultOpenKeys={['sub']}>
                <SubMenu key="sub" label="Sub Menu" className="custom" style={{ color: 'red' }}>
                    <Item key="1">1</Item>
                    <Item key="2">2</Item>
                </SubMenu>
            </Menu>
        );
        const subMenuWrapper = wrapper.find(SubMenu);
        assert(subMenuWrapper.hasClass('custom'));
        assert(subMenuWrapper.prop('style').color === 'red');

        const parentItem = wrapper.find('.next-menu-item.next-opened');
        assert(parentItem.text() === 'Sub Menu');

        const subItems = wrapper.find('.next-menu-sub-menu .next-menu-item');
        assert(subItems.length === 2);
    });

    it('should support triggerType under inline mode', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);

        ReactDOM.render(
            <Menu triggerType="hover" expandAnimation={false}>
                <SubMenu key="sub" label="Sub Menu">
                    <Item key="1">1</Item>
                    <Item key="2">2</Item>
                </SubMenu>
            </Menu>,
            div
        );

        ReactTestUtils.Simulate.mouseEnter(document.querySelector('.next-menu-sub-menu-wrapper'));
        assert(document.querySelector('.next-menu-sub-menu'));

        ReactTestUtils.Simulate.mouseLeave(document.querySelector('.next-menu-sub-menu-wrapper'));
        assert(!document.querySelector('.next-menu-sub-menu'));

        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
    });

    it('should support openKeys and onOpen under inline mode', () => {
        let called = false,
            openKeys,
            extra;
        const handleOpen = (keys, ex) => {
            called = true;
            openKeys = keys;
            extra = ex;
        };

        wrapper = mount(
            <Menu expandAnimation={false} openKeys={['0']} onOpen={handleOpen}>
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

        const subMenuWrapper = wrapper.find('.next-menu-sub-menu-wrapper');
        const firstWrapper = subMenuWrapper.at(0);
        const secondWrapper = subMenuWrapper.at(1);
        assertInlineSubMenuOpen(firstWrapper);
        assertInlineSubMenuClose(secondWrapper);

        const firstParentItem = firstWrapper.find('.next-menu-item.next-opened');
        firstParentItem.simulate('click');

        assert(called);
        assert.deepEqual(openKeys, []);
        assert.deepEqual(extra, {
            open: false,
            key: '0',
        });

        wrapper.setProps({
            openKeys: [],
        });

        const newsubMenuWrapper = wrapper.find('.next-menu-sub-menu-wrapper');
        assertInlineSubMenuClose(newsubMenuWrapper.at(0));
        assertInlineSubMenuClose(newsubMenuWrapper.at(1));
    });

    it('should support setting openMode to single under inline mode', () => {
        wrapper = mount(
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

        const subMenuWrapper = wrapper.find('.next-menu-sub-menu-wrapper');
        const secondParentItem = subMenuWrapper.at(1).find('.next-menu-item');
        secondParentItem.simulate('click');

        const newsubMenuWrapper = wrapper.find('.next-menu-sub-menu-wrapper');
        assertInlineSubMenuClose(newsubMenuWrapper.at(0));
        assertInlineSubMenuOpen(newsubMenuWrapper.at(1));
    });

    it('should render popup sub menu', () => {
        if (env.ieVersion === 9) {
            return;
        }

        wrapper = mount(
            <Menu mode="popup" defaultOpenKeys={['sub']}>
                <SubMenu key="sub" label="Sub Menu" className="custom" style={{ color: 'red' }}>
                    <Item key="1">1</Item>
                    <Item key="2">2</Item>
                </SubMenu>
            </Menu>
        );
        const parentItem = wrapper.find('.next-menu-item.next-opened');
        assert(parentItem.text() === 'Sub Menu');
        assert(parentItem.hasClass('custom'));
        assert(parentItem.prop('style').color === 'red');

        const overlay = wrapper.find('.next-overlay-wrapper');
        assert(overlay.length === 1);
        const subItems = overlay.find('.next-menu-item');
        assert(subItems.length === 2);
    });

    it('should render popup sub menu with no animation', () => {
        if (env.ieVersion === 9) {
            return;
        }

        wrapper = mount(
            <Menu mode="popup" popupProps={{ animation: false }} defaultOpenKeys={['sub-1']}>
                <SubMenu key="sub-1" label="Popup menu 1">
                    <Item key="popup-1-2">Popup option 2</Item>
                </SubMenu>
                <SubMenu key="sub-2" label="Popup menu 2">
                    <Item key="popup-2-2">Popup option 2</Item>
                </SubMenu>
            </Menu>
        );

        const overlay = wrapper.find('.next-overlay-wrapper');
        assert(overlay.length === 1);
    });

    it('can not select item if not set selectMode', () => {
        wrapper = mount(
            <Menu defaultSelectedKeys={['0']}>
                <Item key="0">0</Item>
                <Item key="1">1</Item>
            </Menu>
        );

        let items = wrapper.find('.next-menu-item');
        assertUnselected(items.at(0));
        assertUnselected(items.at(1));
        items.at(1).simulate('click');

        items = wrapper.find('.next-menu-item');
        assertUnselected(items.at(0));
        assertUnselected(items.at(1));
    });

    it('should support single select', () => {
        wrapper = mount(
            <Menu selectMode="single" defaultSelectedKeys={['0']}>
                <Item key="0">0</Item>
                <Item key="1">1</Item>
            </Menu>
        );

        let items = wrapper.find('.next-menu-item');
        assertSelected(items.at(0));
        assertUnselected(items.at(1));
        items.at(0).simulate('click');

        items = wrapper.find('.next-menu-item');
        assertSelected(items.at(0));
        assertUnselected(items.at(1));
        items.at(1).simulate('click');

        items = wrapper.find('.next-menu-item');
        assertSelected(items.at(1));
        assertUnselected(items.at(0));
    });

    it('should support multiple select', () => {
        wrapper = mount(
            <Menu selectMode="multiple" defaultSelectedKeys={['0']}>
                <Item key="0">0</Item>
                <Item key="1">1</Item>
            </Menu>
        );

        let items = wrapper.find('.next-menu-item');
        assertSelected(items.at(0));
        assertUnselected(items.at(1));
        items.at(0).simulate('click');

        items = wrapper.find('.next-menu-item');
        assertUnselected(items.at(0));
        assertUnselected(items.at(1));
        items.at(1).simulate('click');

        items = wrapper.find('.next-menu-item');
        assertSelected(items.at(1));
        assertUnselected(items.at(0));
    });

    it('should support selectedKeys and onSelect under inline mode', () => {
        let called = false,
            selectedKeys,
            item,
            extra;
        const handleSelect = (keys, it, ex) => {
            called = true;
            selectedKeys = keys;
            item = it;
            extra = ex;
        };

        wrapper = mount(
            <Menu
                selectMode="multiple"
                selectedKeys={['0']}
                defaultOpenKeys={['sub-menu']}
                onSelect={handleSelect}
            >
                <Item key="0">0</Item>
                <Item key="1">1</Item>
                <SubMenu key="sub-menu" label="Sub menu">
                    <Item key="2">2</Item>
                    <Item key="3">3</Item>
                </SubMenu>
            </Menu>
        );

        wrapper.find('.next-menu-sub-menu .next-menu-item').at(0).simulate('click');
        assert(called);
        assert.deepEqual(selectedKeys, ['0', '2']);
        assert(item.props._key === '2');
        assert.deepEqual(extra, {
            select: true,
            key: '2',
            label: '2',
            keyPath: ['sub-menu'],
            labelPath: ['Sub menu'],
        });

        wrapper.setProps({
            selectedKeys: ['0', '2'],
        });
        wrapper.find('.next-menu-item').forEach(item => {
            if (['0', '2'].indexOf(item.text()) > -1) {
                assertSelected(item);
            } else {
                assertUnselected(item);
            }
        });
    });

    it('should select sub menu label if set selectable of SubMenu to true', () => {
        wrapper = mount(
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

        let items = wrapper.find('div.next-menu-item');
        assertSelected(items.at(0));
        assertUnselected(items.at(1));
        items.at(0).simulate('click');
        items.at(1).simulate('click');

        items = wrapper.find('div.next-menu-item');
        assertUnselected(items.at(0));
        assertUnselected(items.at(1));
    });

    it('can not select sub menu item if set shallowSelect to true', () => {
        wrapper = mount(
            <Menu selectMode="multiple" defaultOpenKeys={['sub-menu']} shallowSelect>
                <SubMenu key="sub-menu">
                    <Item key="2">2</Item>
                    <Item key="3">3</Item>
                </SubMenu>
            </Menu>
        );

        wrapper.find('.next-menu-sub-menu .next-menu-item').at(0).simulate('click');
        assertUnselected(wrapper.find('.next-menu-sub-menu .next-menu-item').at(0));
    });

    it('should support pressing space to select item', () => {
        let called = false,
            selectedKeys;
        const handleSelect = keys => {
            called = true;
            selectedKeys = keys;
        };

        wrapper = mount(
            <Menu selectMode="single" onSelect={handleSelect}>
                <Item key="0">item</Item>
            </Menu>
        );

        const item = wrapper.find('.next-menu-item');
        item.simulate('keyDown', { keyCode: KEYCODE.SPACE });
        assert(called);
        assert(selectedKeys[0] === '0');
    });

    it('should calling onSelect if you pass it to the item', () => {
        let called = false,
            select;
        const handleSelect = s => {
            called = true;
            select = s;
        };

        wrapper = mount(
            <Menu>
                <Item key="0" onSelect={handleSelect}>
                    item
                </Item>
            </Menu>
        );

        const item = wrapper.find('.next-menu-item');
        item.simulate('click');
        assert(called);
        assert(select);
    });

    it('should render checkbox menu item', () => {
        let called = false,
            checked,
            event;
        const handleChange = (c, e) => {
            called = true;
            checked = c;
            event = e;
        };

        wrapper = mount(
            <Menu>
                <CheckboxItem
                    checked
                    onChange={handleChange}
                    className="custom"
                    style={{ color: 'red' }}
                    helper="helper"
                >
                    checkbox
                </CheckboxItem>
            </Menu>
        );
        const item = wrapper.find('.next-menu-item');
        assert(item.prop('role') === 'menuitemcheckbox');
        assert(item.hasClass('custom'));
        assert(item.prop('style').color === 'red');
        assert(item.find('.next-menu-item-helper').text() === 'helper');
        assert(item.find(Checkbox).prop('checked'));

        item.simulate('click');
        assert(called);
        called = false;
        assert(!checked);
        assert('target' in event);

        wrapper.setProps({
            labelToggleChecked: false,
        });

        const itemText = wrapper.find('.next-menu-item .next-menu-item-text');
        itemText.simulate('click');
        assert(!called);

        const checkbox = wrapper.find(Checkbox).find('input');
        checkbox.simulate('change');
        assert(called);
    });

    it('should support pressing space to check item', () => {
        let called = false,
            checked,
            event;
        const handleChange = (c, e) => {
            called = true;
            checked = c;
            event = e;
        };

        wrapper = mount(
            <Menu>
                <CheckboxItem onChange={handleChange}>checkbox</CheckboxItem>
            </Menu>
        );

        const item = wrapper.find('.next-menu-item');
        item.simulate('keyDown', { keyCode: KEYCODE.SPACE });
        assert(called);
        assert(checked);
        assert('target' in event);
    });

    it('should render radio menu item', () => {
        let called = false,
            key,
            checked,
            event;
        const handleChange = (k, c, e) => {
            called = true;
            key = k;
            checked = c;
            event = e;
        };

        wrapper = mount(
            <Menu>
                <RadioItem
                    key="1"
                    checked
                    onChange={handleChange.bind(null, '1')}
                    className="custom"
                    style={{ color: 'red' }}
                >
                    1
                </RadioItem>
                <RadioItem key="2" onChange={handleChange.bind(null, '2')}>
                    2
                </RadioItem>
            </Menu>
        );
        const items = wrapper.find('.next-menu-item');
        const item0 = items.at(0);
        const item1 = items.at(1);
        assert(item0.prop('role') === 'menuitemradio');
        assert(item0.hasClass('custom'));
        assert(item0.prop('style').color === 'red');
        assert(item0.find(Radio).prop('checked'));
        assert(!item1.find(Radio).prop('checked'));

        item1.simulate('click');

        assert(called);
        assert(key === '2');
        assert(checked);
        assert('target' in event);
    });

    it('should support triggerType under popup mode', done => {
        if (env.ieVersion === 9) {
            return done();
        }

        const div = document.createElement('div');
        document.body.appendChild(div);

        ReactDOM.render(
            <Menu mode="popup" triggerType="hover">
                <SubMenu key="sub" label="Sub Menu">
                    <Item key="1">1</Item>
                    <Item key="2">2</Item>
                </SubMenu>
            </Menu>,
            div
        );

        ReactTestUtils.Simulate.mouseEnter(document.querySelector('.next-menu-item'));

        setTimeout(() => {
            const subMenu = document.querySelector('.next-overlay-inner .next-menu');
            assert(subMenu);

            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
            done();
        }, 500);
    });

    it('should support popupAutoWidth and popupAlign', done => {
        if (env.ieVersion === 9) {
            return done();
        }

        const div = document.createElement('div');
        document.body.appendChild(div);

        ReactDOM.render(
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
            </Menu>,
            div
        );

        setTimeout(() => {
            const subMenu = document.querySelector('.next-overlay-inner');

            assert(subMenu.style.width === '300px');
            assert(subMenu.style.height === '300px');

            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
            done();
        }, 500);
    });

    it('should support keyboard', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);

        ReactDOM.render(
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
            </Menu>,
            div
        );

        const menu = document.querySelector('#menu-id');
        try {
            assert(document.activeElement === menu.querySelector('.i1'));
            const assertAE = assertActiveElement();
            assertAE(KEYCODE.DOWN, menu.querySelector('.i2 .next-menu-item'));
            assertAE(KEYCODE.ENTER, () => menu.querySelector('.i2-0'));
            assertAE(KEYCODE.ESC, menu.querySelector('.i2 .next-menu-item'));
            assertAE(KEYCODE.RIGHT, () => menu.querySelector('.i2-0'));
            assertAE(KEYCODE.LEFT, menu.querySelector('.i2 .next-menu-item'));
            assert(!menu.querySelector('.next-menu-sub-menu'));
            assertAE(KEYCODE.UP, menu.querySelector('.i1'));
            assertAE(KEYCODE.UP, menu.querySelector('.i3'));

            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
        } catch (err) {
            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
            throw new Error(err);
        }
    });

    it('should support keyboard if direction is hoz', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);

        ReactDOM.render(
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
            </Menu>,
            div
        );

        const menu = document.querySelector('.next-menu.next-hoz');
        const assertAE = assertActiveElement();
        try {
            assertAE(KEYCODE.RIGHT, menu.querySelector('.i1'));
            assertAE(KEYCODE.LEFT, menu.querySelector('.i0'));

            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
        } catch (err) {
            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
            throw new Error(err);
        }
    });

    it('should support hozInLine in hoz', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);

        ReactDOM.render(
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
            </Menu>,
            div
        );

        const menu = document.querySelector('.next-menu.next-hoz');
        try {
            assert(menu.querySelectorAll('li.next-menu-more').length === 2);

            const indicator = menu
                .querySelectorAll('li.next-menu-more')[0]
                .querySelector('.next-menu-item-inner');
            indicator.click();
            const overlay = document.querySelector('.next-overlay-wrapper');

            assert(overlay);
            assert(overlay.querySelectorAll('li').length === 2);

            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
        } catch (err) {
            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
            throw new Error(err);
        }
    });

    it('should support hozInLine with renderMore', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);

        ReactDOM.render(
            <Menu
                direction="hoz"
                style={{ width: 300 }}
                mode="popup"
                hozInLine
                renderMore={() => {
                    return <div className="rendermore-class">test</div>;
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
            </Menu>,
            div
        );

        const menu = document.querySelector('.next-menu.next-hoz');
        assert(menu.querySelectorAll('li.next-menu-more.rendermore-class'));

        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
    });

    it('should show renderMore when hozInLine & async load more items ', done => {
        const div = document.createElement('div');
        document.body.appendChild(div);

        const items = [];
        for (let i = 0; i < 50; i++) {
            items.push(i);
        }
        function App() {
            const [categoryList, setCategoryList] = useState([]);
            useEffect(() => {
                setCategoryList(items);
            }, []);

            return (
                <Menu hozInLine direction="hoz" triggerType="hover" mode="popup" popupAutoWidth>
                    {categoryList.map((index, v) => (
                        <SubMenu label="Sub Nav" key={index}>
                            <Item key="sub-12">Sub option 1</Item>
                            <Item key="sub-22">Sub option 2</Item>
                        </SubMenu>
                    ))}
                </Menu>
            );
        }
        ReactDOM.render(<App />, div);
        const menu = document.querySelector('.next-menu');
        assert(menu.querySelectorAll('li.next-menu-item').length === 52);
        assert(menu.querySelectorAll('li.next-menu-item.next-menu-more').length === 2);
        assert(menu.querySelectorAll('li.menuitem-overflowed').length > 1);
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
        done();
    });

    it('should support hozInLine with header&footer in hoz', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);

        ReactDOM.render(
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
            </Menu>,
            div
        );

        const menu = document.querySelector('.next-menu.next-hoz');
        assert(menu.querySelectorAll('li.next-menu-more').length === 2);

        const indicator = menu
            .querySelectorAll('li.next-menu-more')[0]
            .querySelector('.next-menu-item-inner');
        indicator.click();
        const overlay = document.querySelector('.next-overlay-wrapper');

        assert(overlay);
        assert(overlay.querySelectorAll('li').length === 4);

        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
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

        const menu = document.querySelector('#menu-create-id');
        assert(menu);

        const parentItem = menu.querySelector('.parent-item');
        ReactTestUtils.Simulate.click(parentItem);

        const overlays = document.querySelectorAll('.next-overlay-wrapper');
        assert(overlays.length === 2);

        document.body.removeChild(overlays[0]);
        document.body.removeChild(overlays[1]);
    });
});

function assertInlineSubMenuOpen(subMenuWrapper) {
    assert(subMenuWrapper.find('.next-menu-sub-menu').length);

    const arrow = subMenuWrapper.find('.next-menu-icon-arrow').first();
    assert(arrow.hasClass('next-open'));
}

function assertInlineSubMenuClose(subMenuWrapper) {
    assert(!subMenuWrapper.find('.next-menu-sub-menu').length);

    const arrow = subMenuWrapper.find('.next-menu-icon-arrow').first();
    assert(!arrow.hasClass('next-open'));
}

function assertSelected(item) {
    assert(item.hasClass('next-selected'));
    assert(item.find('.next-menu-icon-selected').length);
}

function assertUnselected(item) {
    assert(!item.hasClass('next-selected'));
    assert(!item.find('.next-menu-icon-selected').length);
}

function assertActiveElement() {
    let activeElement = document.activeElement;

    return (keyCode, next) => {
        ReactTestUtils.Simulate.keyDown(activeElement, { keyCode });
        next = typeof next === 'function' ? next() : next;
        assert(document.activeElement === next);
        activeElement = next;
    };
}
