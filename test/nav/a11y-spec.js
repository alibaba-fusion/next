import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Icon from '../../src/icon';
import Balloon from '../../src/balloon';
import Nav from '../../src/nav/index';
import '../../src/nav/style.js';
import { unmount, test, testReact, mountReact } from '../util/a11y/validate';

const { Tooltip } = Balloon;
const { Item, SubNav, PopupItem, Group } = Nav;
Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Nav A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        unmount();
    });

    it('should not have any violations for Item', async () => {
        wrapper = await mountReact(
            <Nav>
                <Item id="item" key="1">
                    First
                </Item>
                <Item key="2">Second</Item>
            </Nav>
        );
        return test('#item');
    });

    it('should not have any violations', async () => {
        wrapper = await testReact(
            <Nav>
                <Item key="1">First</Item>
                <Item key="2">Second</Item>
            </Nav>
        );
        return wrapper;
    });

    it('should not have any violations for icon only', async () => {
        wrapper = await testReact(
            <Nav iconOnly style={{ width: '200px' }}>
                <Item icon="account" key="1">
                    First
                </Item>
                <Item key="2">Second</Item>
            </Nav>
        );
        return wrapper;
    });

    it('should not have any violations for inline subnav', async () => {
        wrapper = await testReact(
            <Nav
                defaultOpenKeys={['sub-nav-1']}
            >
                <Item key="1">First</Item>
                <SubNav key="sub-nav-1" label="Sub Nav 1">
                    <Item key="1-1">Item 1</Item>
                    <Item key="1-2">Item 2</Item>
                </SubNav>
            </Nav>
        );
        return wrapper;
    });

    // TODO: `aria-required-children` - sub-nav popup has role='menu', but the items are role="listitem". Should change "listitem" to "menuitem".
    it.skip('should not have any violations for popup subnav', async () => {
        wrapper = await testReact(
            <Nav
                mode="popup"
                defaultOpenKeys={['sub-nav-1']}
            >
                <Item key="1">First</Item>
                <SubNav key="sub-nav-1" label="Sub Nav 1">
                    <Item key="1-1">Item 1</Item>
                    <Item key="1-2">Item 2</Item>
                </SubNav>
            </Nav>
        );
        return test('.next-overlay-wrapper');
    });


});
