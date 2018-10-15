import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Dropdown from '../../src/dropdown';
import Menu from '../../src/menu';

Enzyme.configure({ adapter: new Adapter() });

const menu = (
    <Menu>
        <Menu.Item>Option 1</Menu.Item>
        <Menu.Item>Option 2</Menu.Item>
        <Menu.Item>Option 3</Menu.Item>
        <Menu.Item>Option 4</Menu.Item>
    </Menu>
);

describe('Dropdown', () => {
    it('should render by defaultVisible', () => {
        let triggered = false;
        let show = false;
        const handleVisible = (visible, triggerType) => {
            if (show) {
                assert(!visible);
                assert(triggerType === 'fromContent');
            } else {
                assert(visible);
            }
            show = visible;
            triggered = true;
        };

        const wrapper = mount(
            <Dropdown trigger={<a className="trigger">Hello dropdown</a>} onVisibleChange={handleVisible} animation={false} triggerType="click">
                {menu}
            </Dropdown>
        );

        assert(document.querySelector('.next-overlay-wrapper') === null);

        wrapper.find('.trigger').simulate('click');
        assert(triggered);
        assert(document.querySelector('.next-overlay-wrapper') !== null);
        triggered = false;

        const item = document.querySelector('.next-menu-item');
        ReactTestUtils.Simulate.click(item);
        assert(triggered);
        assert(document.querySelector('.next-overlay-wrapper') === null);
        triggered = false;

        wrapper.unmount();
    });

    it('should render by visible', () => {
        let triggered = false;
        let show = false;
        const handleVisible = (visible, triggerType) => {
            if (show) {
                assert(!visible);
                assert(triggerType === 'fromContent');
            } else {
                assert(visible);
            }
            wrapper.setProps({
                visible
            })
            show = visible;
            triggered = true;
        };

        const wrapper = mount(
            <Dropdown trigger={<a className="trigger">Hello dropdown</a>} onVisibleChange={handleVisible} animation={false} triggerType="click">
                {menu}
            </Dropdown>
        );
        assert(document.querySelector('.next-overlay-wrapper') === null);

        wrapper.find('.trigger').simulate('click');
        assert(triggered);
        assert(document.querySelector('.next-overlay-wrapper') !== null);
        triggered = false;

        const item = document.querySelector('.next-menu-item');
        ReactTestUtils.Simulate.click(item);
        assert(triggered);
        assert(document.querySelector('.next-overlay-wrapper') === null);
        triggered = false;

        wrapper.unmount();
    });

    it('should trigger custom menu click event', () => {
        let triggered = false;
        const handleClick = () => {
            triggered = true;
        }

        const wrapper = mount(
            <Dropdown defaultVisible trigger={<a className="trigger">Hello dropdown</a>} animation={false}>
                <Menu onItemClick={handleClick}>
                    <Menu.Item>Option 1</Menu.Item>
                    <Menu.Item>Option 2</Menu.Item>
                    <Menu.Item>Option 3</Menu.Item>
                    <Menu.Item>Option 4</Menu.Item>
                </Menu>
            </Dropdown>
        );

        const item = document.querySelector('.next-menu-item');
        ReactTestUtils.Simulate.click(item);
        assert(triggered);
    });
});
