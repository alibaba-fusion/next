import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Dropdown from '../../src/dropdown';
import Menu from '../../src/menu';
import { KEYCODE } from '../../src/util';
import '../../src/menu/style.js';

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
        const initialLen = document.querySelectorAll('.next-overlay-wrapper').length;
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


        assert(document.querySelectorAll('.next-overlay-wrapper').length === initialLen);

        wrapper.find('.trigger').simulate('click');
        assert(triggered);
        assert(document.querySelectorAll('.next-overlay-wrapper').length === initialLen + 1);
        triggered = false;

        const item = document.querySelector('.next-menu-item');
        ReactTestUtils.Simulate.click(item);
        assert(triggered);
        assert(document.querySelectorAll('.next-overlay-wrapper').length === initialLen);
        triggered = false;

        wrapper.unmount();
    });

    it('should render by visible', () => {
        const initialLen = document.querySelectorAll('.next-overlay-wrapper').length;
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
            });
            show = visible;
            triggered = true;
        };

        const wrapper = mount(
            <Dropdown trigger={<a className="trigger">Hello dropdown</a>} onVisibleChange={handleVisible} animation={false} triggerType="click">
                {menu}
            </Dropdown>
        );
        assert(document.querySelectorAll('.next-overlay-wrapper').length === initialLen);

        wrapper.find('.trigger').simulate('click');
        assert(triggered);
        assert(document.querySelectorAll('.next-overlay-wrapper').length === initialLen + 1);
        triggered = false;

        const item = document.querySelector('.next-menu-item');
        ReactTestUtils.Simulate.click(item);
        assert(triggered);
        assert(document.querySelectorAll('.next-overlay-wrapper').length === initialLen);
        triggered = false;

        wrapper.unmount();
    });

    it('should trigger custom menu click event', () => {
        let triggered = false;
        const handleClick = () => {
            triggered = true;
        };

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

    it('should only focus when triggered by keyboard', (done) => {
        const mountNode = document.createElement('div');
        document.body.appendChild(mountNode);

        ReactDOM.render(
            <Dropdown defaultVisible trigger={<button className="trigger">Hello dropdown</button>} animation={false}>
                <Menu>
                    <Menu.Item>Option 1</Menu.Item>
                    <Menu.Item>Option 2</Menu.Item>
                    <Menu.Item>Option 3</Menu.Item>
                    <Menu.Item>Option 4</Menu.Item>
                </Menu>
            </Dropdown>
            , mountNode);

        const trigger = document.querySelector('.trigger');

        trigger.focus();
        trigger.click();

        setTimeout(() => {
            assert(document.activeElement !== document.querySelectorAll('.next-menu-item')[0]);

            ReactTestUtils.Simulate.keyDown(document.activeElement, { keyCode: KEYCODE.DOWN });

            setTimeout(() => {
                assert(document.activeElement === document.querySelectorAll('.next-menu-item')[0]);

                ReactDOM.unmountComponentAtNode(mountNode);
                document.body.removeChild(mountNode);

                done();
            }, 200);

        }, 200);

    });

    it('autoFocus=false should not have any activeElement', (done) => {
        const mountNode = document.createElement('div');
        document.body.appendChild(mountNode);

        ReactDOM.render(
            <Dropdown autoFocus={false} defaultVisible trigger={<button className="trigger">Hello dropdown</button>} animation={false}>
                <Menu>
                    <Menu.Item>Option 1</Menu.Item>
                    <Menu.Item>Option 2</Menu.Item>
                    <Menu.Item>Option 3</Menu.Item>
                    <Menu.Item>Option 4</Menu.Item>
                </Menu>
            </Dropdown>
            , mountNode);


        const trigger = document.querySelector('.trigger');

        trigger.focus();
        ReactTestUtils.Simulate.keyDown(document.activeElement, { keyCode: KEYCODE.DOWN });

        setTimeout(() => {
            assert(document.activeElement !== document.querySelectorAll('.next-menu-item')[0]);

            ReactDOM.unmountComponentAtNode(mountNode);
            document.body.removeChild(mountNode);

            done();
        }, 200);
    });

    it('autoFocus=true should have any activeElement when triggered by keyboard', (done) => {
        const mountNode = document.createElement('div');
        document.body.appendChild(mountNode);

        ReactDOM.render(
            <Dropdown autoFocus defaultVisible trigger={<button className="trigger">Hello dropdown</button>} animation={false}>
                <Menu>
                    <Menu.Item>Option 1</Menu.Item>
                    <Menu.Item>Option 2</Menu.Item>
                    <Menu.Item>Option 3</Menu.Item>
                    <Menu.Item>Option 4</Menu.Item>
                </Menu>
            </Dropdown>
            , mountNode);

        const trigger = document.querySelector('.trigger');

        trigger.click();

        setTimeout(() => {
            assert(document.activeElement === document.querySelectorAll('.next-menu-item')[0]);

            ReactDOM.unmountComponentAtNode(mountNode);
            document.body.removeChild(mountNode);

            done();
        }, 200);
    });
});
