import React from 'react';
import Nav from '../index';
import '../style';
import { test, testReact } from '../../util/__tests__/a11y/validate';

const { Item, SubNav } = Nav;

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Nav A11y', () => {
    it('should not have any violations for Item', async () => {
        await testReact(
            <Nav>
                <Item id="item" key="1">
                    First
                </Item>
                <Item key="2">Second</Item>
            </Nav>
        );
    });

    it('should not have any violations', async () => {
        return await testReact(
            <Nav>
                <Item key="1">First</Item>
                <Item key="2">Second</Item>
            </Nav>
        );
    });

    it('should not have any violations for icon only', async () => {
        return await testReact(
            <Nav iconOnly style={{ width: '200px' }}>
                <Item icon="account" key="1">
                    First
                </Item>
                <Item key="2">Second</Item>
            </Nav>
        );
    });

    it('should not have any violations for inline subnav', async () => {
        return await testReact(
            <Nav defaultOpenKeys={['sub-nav-1']}>
                <Item key="1">First</Item>
                <SubNav key="sub-nav-1" label="Sub Nav 1">
                    <Item key="1-1">Item 1</Item>
                    <Item key="1-2">Item 2</Item>
                </SubNav>
            </Nav>
        );
    });

    // TODO: `aria-required-children` - sub-nav popup has role='menu', but the items are role="listitem". Should change "listitem" to "menuitem".
    it.skip('should not have any violations for popup subnav', async () => {
        await testReact(
            <Nav mode="popup" defaultOpenKeys={['sub-nav-1']}>
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
