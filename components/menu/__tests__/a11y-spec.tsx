import React from 'react';
import Menu from '../index';
import '../style';
import { test, testReact } from '../../util/__tests__/a11y/validate';

const { SubMenu, Item, Group, Divider, CheckboxItem, RadioItem } = Menu;

describe('Menu A11y', () => {
    it('should not have any violations for Item', async () => {
        await testReact(
            <Menu>
                <Item id="item" key="1">
                    Option 1
                </Item>
            </Menu>
        );
    });

    it('should not have any violations for `selectMode: single`', async () => {
        await testReact(
            <Menu selectMode="single">
                <Item id="item1" key="1">
                    Option 1
                </Item>
                <Item id="item2" key="2">
                    Option 2
                </Item>
            </Menu>
        );
    });

    it('should not have any violations for `selectMode: multiple`', async () => {
        await testReact(
            <Menu selectMode="multiple">
                <Item id="item1" key="1">
                    Option 1
                </Item>
                <Item id="item2" key="2">
                    Option 2
                </Item>
            </Menu>
        );
    });

    // Fix issue with Item
    it('should not have any violations for simple example', async () => {
        await testReact(
            <Menu>
                <Item key="1">Option 1</Item>
                <Divider />
                <Item disabled key="2">
                    Disabled option 2
                </Item>
            </Menu>
        );
    });

    // Fix issue with Item
    it('should not have any violations for Group', async () => {
        await testReact(
            <Menu>
                <Group id="group" label="Group">
                    <Item key="group-1">Group option 1</Item>
                    <Item key="group-2">Group option 2</Item>
                </Group>
            </Menu>
        );
    });

    it('should not have any violations for SubMenu', async () => {
        await testReact(
            <Menu className="my-menu" defaultOpenKeys="sub-menu">
                <SubMenu id="submenu" key="sub-menu" label="Sub menu">
                    <Item key="sub-1">Sub option 1</Item>
                    <Item key="sub-2">Sub option 2</Item>
                </SubMenu>
            </Menu>
        );
    });

    it('should not have any violations for popup', async () => {
        await testReact(
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
        return test('.next-overlay-wrapper');
    });

    it('should not have any violations for Checkbox Item', async () => {
        await testReact(
            <Menu className="my-menu">
                <CheckboxItem checked className="custom" style={{ color: 'red' }} helper="helper">
                    checkbox
                </CheckboxItem>
            </Menu>
        );
    });

    it('should not have any violations for Radio Item', async () => {
        await testReact(
            <Menu className="my-menu">
                <RadioItem key="1" checked className="custom" style={{ color: 'red' }}>
                    1
                </RadioItem>
                <RadioItem key="2">2</RadioItem>
            </Menu>
        );
    });
});
