import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Icon from '../../src/icon';
import Balloon from '../../src/balloon';
import Nav from '../../src/nav/index';
import '../../src/nav/style.js';

/* eslint-disable react/jsx-filename-extension */
/* global describe it afterEach */

Enzyme.configure({ adapter: new Adapter() });
const { Tooltip } = Balloon;
const { Item, SubNav, PopupItem, Group } = Nav;

const render = element => {
    let inc;
    const container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);
    ReactDOM.render(element, container, function() {
        inc = this;
    });
    return {
        setProps: props => {
            ReactDOM.unmountComponentAtNode(container);
            const clonedElement = React.cloneElement(element, props);
            ReactDOM.render(clonedElement, container);
        },
        unmount: () => {
            ReactDOM.unmountComponentAtNode(container);
            document.body.removeChild(container);
        },
        instance: () => {
            return inc;
        },
        find: selector => {
            return container.querySelectorAll(selector);
        },
    };
};

describe('Nav', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
    });

    it('should support type', () => {
        wrapper = mount(
            <Nav>
                <Item key="1">First</Item>
                <Item key="2">Second</Item>
            </Nav>
        );
        ['normal', 'primary', 'secondary', 'line'].forEach(type => {
            wrapper.setProps({
                type,
            });
            assert(wrapper.find('ul.next-nav').hasClass(`next-${type}`));
        });
    });

    it('should support direction', () => {
        wrapper = mount(
            <Nav>
                <Item key="1">First</Item>
                <Item key="2">Second</Item>
            </Nav>
        );
        ['hoz', 'ver'].forEach(direction => {
            wrapper.setProps({
                direction,
            });
            assert(wrapper.find('ul.next-nav').hasClass(`next-${direction}`));
        });
    });

    it('should support activeDirection', () => {
        wrapper = mount(
            <Nav>
                <Item key="1">First</Item>
                <Item key="2">Second</Item>
            </Nav>
        );
        ['left', 'right'].forEach(activeDirection => {
            wrapper.setProps({
                activeDirection,
            });
            assert(wrapper.find('ul.next-nav').hasClass('next-active'));
            assert(
                wrapper.find('ul.next-nav').hasClass(`next-${activeDirection}`)
            );
        });
        ['top', 'bottom'].forEach(activeDirection => {
            wrapper.setProps({
                activeDirection,
            });
            assert(!wrapper.find('ul.next-nav').hasClass('next-active'));
        });
        wrapper.setProps({
            direction: 'hoz',
        });
        ['top', 'bottom'].forEach(activeDirection => {
            wrapper.setProps({
                activeDirection,
            });
            assert(wrapper.find('ul.next-nav').hasClass('next-active'));
            assert(
                wrapper.find('ul.next-nav').hasClass(`next-${activeDirection}`)
            );
        });
        ['left', 'right'].forEach(activeDirection => {
            wrapper.setProps({
                activeDirection,
            });
            assert(!wrapper.find('ul.next-nav').hasClass('next-active'));
        });
    });

    it('should render item', () => {
        wrapper = mount(
            <Nav>
                <Item key="1">First</Item>
                <Item icon="account" key="2">
                    Second
                </Item>
                <Item icon={<Icon type="atm" />} key="3">
                    Third
                </Item>
            </Nav>
        );

        const items = wrapper.find('li.next-nav-item');
        assert(items.length === 3);
        assert(
            items
                .at(1)
                .find('i.next-nav-icon')
                .hasClass('next-icon-account')
        );
        assert(
            items
                .at(2)
                .find('i.next-icon')
                .hasClass('next-icon-atm')
        );
    });

    it('should render sub nav', () => {
        wrapper = mount(
            <Nav>
                <SubNav key="1">
                    <Item key="1-1">First</Item>
                    <Item key="1-2">Second</Item>
                </SubNav>
                <SubNav key="2" icon="account">
                    <Item key="2-1">First</Item>
                    <Item key="2-2">Second</Item>
                </SubNav>
                <SubNav
                    key="3"
                    icon={<Icon className="custom-icon" type="atm" />}
                >
                    <Item key="3-1">First</Item>
                    <Item key="3-2">Second</Item>
                </SubNav>
            </Nav>
        );

        const subNavItems = wrapper.find('li.next-nav-sub-nav-item');
        assert(subNavItems.length === 3);
        assert(
            subNavItems
                .at(1)
                .find('i.next-nav-icon')
                .hasClass('next-icon-account')
        );
        assert(
            subNavItems
                .at(2)
                .find('i.custom-icon')
                .hasClass('next-icon-atm')
        );
    });

    it('should render popup item', () => {
        wrapper = mount(
            <Nav>
                <PopupItem key="1">
                    <div>Custom</div>
                </PopupItem>
                <PopupItem key="2" icon="account">
                    <div>Custom</div>
                </PopupItem>
                <PopupItem
                    key="3"
                    icon={<Icon className="custom-icon" type="atm" />}
                >
                    <div>Custom</div>
                </PopupItem>
            </Nav>
        );

        const popupItems = wrapper.find('li.next-nav-popup-item');
        assert(popupItems.length === 3);
        assert(
            popupItems
                .at(1)
                .find('i.next-nav-icon')
                .hasClass('next-icon-account')
        );
        assert(
            popupItems
                .at(2)
                .find('i.custom-icon')
                .hasClass('next-icon-atm')
        );
    });

    it('should render group', () => {
        wrapper = mount(
            <Nav>
                <Group label="Group label">
                    <Item key="1">First</Item>
                    <Item key="2">Second</Item>
                </Group>
            </Nav>
        );

        assert(wrapper.find('li.next-nav-group-label').length === 1);
    });

    it('should support defaultSelectedKeys undefined/null', () => {
        wrapper = mount(
            <Nav defaultSelectedKeys={null}>
                <SubNav label="Group label">
                    <Item key="1">First</Item>
                    <Item key="2">Second</Item>
                </SubNav>
            </Nav>
        );

    });

    it('should support showChildSelected', () => {
        wrapper = mount(
            <Nav selectedKeys="1" />
        );

        assert(wrapper);

        wrapper.setProps({
            children: <SubNav label="Group label">
            <Item key="1">First</Item>
            <Item key="2">Second</Item>
        </SubNav>
        });

        const subNavItem = wrapper.find('li.next-nav-sub-nav-item').at(0);

        assert(subNavItem.find('.next-nav-item').hasClass('next-child-selected'));

        wrapper.setProps({
            mode: 'popup'
        });

        assert(subNavItem.find('.next-nav-item').hasClass('next-child-selected'));

        wrapper.setProps({
            selectedKeys: 'ddasdfa'
        });

        assert(wrapper);
    });

    it('should support iconOnly', done => {
        wrapper = mount(
            <Nav iconOnly style={{ width: '200px' }}>
                <Item icon="account" key="1">
                    First
                </Item>
                <Item key="2">Second</Item>
                <SubNav icon="account" label="SubNav label">
                    <Item icon="account" key="1">
                        First
                    </Item>
                    <Item icon="account" key="2">
                        Second
                    </Item>
                </SubNav>
                <SubNav label="SubNav label">
                    <Item icon="account" key="1">
                        First
                    </Item>
                    <Item icon="account" key="2">
                        Second
                    </Item>
                </SubNav>
                <PopupItem icon="account" label="PopupItem label">
                    <Item icon="account" key="1">
                        First
                    </Item>
                    <Item icon="account" key="2">
                        Second
                    </Item>
                </PopupItem>
                <PopupItem label="PopupItem label">
                    <Item icon="account" key="1">
                        First
                    </Item>
                    <Item icon="account" key="2">
                        Second
                    </Item>
                </PopupItem>
                <Group icon="account" label="Group label">
                    <Item icon="account" key="1">
                        First
                    </Item>
                    <Item icon="account" key="2">
                        Second
                    </Item>
                </Group>
            </Nav>
        );

        let nav = wrapper.find('ul.next-nav');
        assert(nav.hasClass('next-icon-only'));
        assert(nav.prop('style').width === '58px');

        let items = nav.find('li.next-nav-item');
        assert(items.at(0).find('i.next-nav-icon').length === 1);
        assert(items.at(1).find('i.next-nav-icon').length === 0);

        let subNavItems = nav.find('li.next-nav-sub-nav-item');
        assert(
            subNavItems
                .at(0)
                .find('i.next-icon-arrow-down.next-nav-icon-only-arrow')
                .length === 1
        );
        assert(
            subNavItems
                .at(1)
                .find('i.next-icon-arrow-down.next-nav-icon-only-arrow')
                .length === 1
        );

        let popupItems = nav.find('li.next-nav-popup-item');
        assert(
            popupItems
                .at(0)
                .find('i.next-icon-arrow-right.next-nav-icon-only-arrow')
                .length === 1
        );
        assert(
            popupItems
                .at(0)
                .find('i.next-icon-arrow-right.next-nav-icon-only-arrow')
                .length === 1
        );

        const groupLabel = nav.find('li.next-nav-group-label');
        assert(groupLabel.find('.next-menu-item-inner > span').length === 1);

        wrapper.setProps({
            mode: 'popup',
        });
        nav = wrapper.find('ul.next-nav');
        subNavItems = nav.find('li.next-nav-sub-nav-item');
        assert(
            subNavItems
                .at(0)
                .find('i.next-icon-arrow-right.next-nav-icon-only-arrow')
                .length === 1
        );
        assert(
            subNavItems
                .at(1)
                .find('i.next-icon-arrow-right.next-nav-icon-only-arrow')
                .length === 1
        );

        wrapper.setProps({
            hasArrow: false,
            hasTooltip: true,
        });
        nav = wrapper.find('ul.next-nav');
        subNavItems = nav.find('li.next-nav-sub-nav-item');
        assert(subNavItems.at(0).find('i.next-nav-icon').length === 1);
        assert(
            subNavItems.at(1).find('.next-menu-item-text > span').length ===
                1
        );
        popupItems = nav.find('li.next-nav-popup-item');
        assert(popupItems.at(0).find('i.next-nav-icon').length === 1);
        assert(
            popupItems.at(1).find('.next-menu-item-text > span').length === 1
        );
        items = nav.find('li.next-nav-item');
        items.at(0).simulate('mouseenter');
        setTimeout(() => {
            assert(wrapper.find(Tooltip).length);
            done();
        }, 500);
    });

    it('should support fixed', () => {
        wrapper = render(
            <Nav
                style={{ left: 0, top: 0, position: 'fixed', width: 70}}
                popupStyle={{position: 'fixed'}}
                popupClassName="fixed-popup-sub3"
                type="primary"
                mode="popup"
                defaultOpenKeys="sub3"
                activeDirection="left"
                triggerType="click"
            >
                <SubNav label="产品1">
                    <Item>Item 1</Item>
                </SubNav>
                <SubNav label="产品2">
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                </SubNav>
                <SubNav label="产品3" key="sub3">
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item>
                </SubNav>
                <Item>其他</Item>
            </Nav>
        );

        const popup = document.querySelectorAll('.fixed-popup-sub3');
        assert(popup[0].style.top === '80px');
        assert(popup[0].style.left === '68px');
    });
});
