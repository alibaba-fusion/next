import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Menu from '../../src/menu/index';
import '../../src/menu/style';
import { unmount, test, testReact, mountReact } from '../util/a11y/validate';

const { SubMenu, Item, Group, Divider } = Menu;
Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable no-undef, react/jsx-filename-extension */
describe.skip('Menu A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        unmount();
    });

    // TODO: Fix `aria-allowed-attr` due to `aria-multiselectable=\"false\"`, `aria-selected=\"false\"`
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

    // TODO: Fix issue with Item
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

    // TODO: Fix issue with Item
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

    // TODO: This throws a false error for `li` nested inside role="menu". This is a bug in axe-core. Issue was created (https://github.com/dequelabs/axe-core/issues/1365)
    //       Follow up to resolve this bug.
    it.skip('should not have any violations for SubMenu', async () => {
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
});
