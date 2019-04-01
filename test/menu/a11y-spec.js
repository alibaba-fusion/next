import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Menu from '../../src/menu/index';
import '../../src/menu/style';
import { unmount, test, testReact, mountReact } from '../util/a11y/validate';

const { SubMenu, Item, Group, Divider, CheckboxItem, RadioItem } = Menu;
Enzyme.configure({ adapter: new Adapter() });

const portalContainerId = 'a11y-portal-id';
let portalContainer;

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Menu A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }

        if (portalContainer) {
            portalContainer.remove();
        }

        unmount();
    });

    it('should not have any violations for Item', async () => {
        wrapper = await mountReact(
            <Menu>
                <Item id="item" key="1">
                    Option 1
                </Item>
            </Menu>
        );
        return test('#item');
    });

    it('should not have any violations for `selectMode: single`', async () => {
        wrapper = await testReact(
            <Menu selectMode="single">
                <Item id="item1" key="1">
                    Option 1
                </Item>
                <Item id="item2" key="2">
                    Option 2
                </Item>
            </Menu>
        );
        return wrapper;
    });

    it('should not have any violations for `selectMode: multiple`', async () => {
        wrapper = await testReact(
            <Menu selectMode="multiple">
                <Item id="item1" key="1">
                    Option 1
                </Item>
                <Item id="item2" key="2">
                    Option 2
                </Item>
            </Menu>
        );

        return wrapper;
    });

    // Fix issue with Item
    it('should not have any violations for simple example', async () => {
        wrapper = await testReact(
            <Menu>
                <Item key="1">Option 1</Item>
                <Divider />
                <Item disabled key="2">
                    Disabled option 2
                </Item>
            </Menu>
        );
        return wrapper;
    });

    // Fix issue with Item
    it('should not have any violations for Group', async () => {
        wrapper = await testReact(
            <Menu>
                <Group id="group" label="Group">
                    <Item key="group-1">Group option 1</Item>
                    <Item key="group-2">Group option 2</Item>
                </Group>
            </Menu>
        );
        return wrapper;
    });

    it('should not have any violations for SubMenu', async () => {
        wrapper = await testReact(
            <Menu className="my-menu" defaultOpenKeys="sub-menu">
                <SubMenu id="submenu" key="sub-menu" label="Sub menu">
                    <Item key="sub-1">Sub option 1</Item>
                    <Item key="sub-2">Sub option 2</Item>
                </SubMenu>
            </Menu>
        );
        return wrapper;
    });

    it('should not have any violations for popup', async () => {
        wrapper = await testReact(
            <Menu className="my-menu" mode="popup" defaultOpenKeys={['sub-1']}>
                <Item key="1">Option 1</Item>
                <Item key="2">Option 2</Item>
                <Item key="3">Option 3</Item>
                <Divider key="divider" />
                <SubMenu key="sub-1" label="Popup menu 1">
                    <Item key="popup-1-1">Popup option 1</Item>
                    <Item key="popup-1-2">Popup option 2</Item>
                </SubMenu>
                <SubMenu key="sub-2" label="Popup menu 2">
                    <Item key="popup-2-1">Popup option 1</Item>
                    <Item key="popup-2-2">Popup option 2</Item>
                </SubMenu>
            </Menu>
        );
        return test(".next-overlay-wrapper");
    });

    it('should not have any violations for Checkbox Item', async () => {
        wrapper = await testReact(
            <Menu className="my-menu">
                <CheckboxItem
                    checked
                    className="custom"
                    style={{ color: 'red' }}
                    helper="helper"
                >
                    checkbox
                </CheckboxItem>
            </Menu>
        );
        return wrapper;
    });

    it('should not have any violations for Radio Item', async () => {
        wrapper = await testReact(
            <Menu className="my-menu">
                <RadioItem
                    key="1"
                    checked
                    className="custom"
                    style={{ color: 'red' }}
                >
                    1
                </RadioItem>
                <RadioItem key="2">
                    2
                </RadioItem>
            </Menu>
        );
        return wrapper;
    });
});
