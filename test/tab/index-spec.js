import React from 'react';
import Enzyme, { mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import { KEYCODE } from '../../src/util';
import Tab from '../../src/tab/index';
import '../../src/tab/style.js';

Enzyme.configure({ adapter: new Adapter() });

describe('Tab', () => {
    describe('simple', () => {
        it('should render only one tab', () => {
            const wrapper = mount(
                <Tab>
                    <Tab.Item title="foo" />
                </Tab>
            );
            assert(wrapper.find('.next-tabs-tab').length === 1);
        });
    });

    describe('with props', () => {
        let wrapper;
        const panes = [1, 2, 3, 4, 5].map((item, index) =>
            item < 5 ? <Tab.Item title={`item ${item}`} key={index} /> : null
        );

        afterEach(() => {
            wrapper.unmount();
            wrapper = null;
        });

        it('should render tab (with animation)', () => {
            wrapper = mount(<Tab>{panes}</Tab>);
            assert(wrapper.find('.next-tabs-tab').length === 4);
            assert(wrapper.find('.next-tabs-tabpane').length === 1);
        });

        it('should render tab without animation', () => {
            wrapper = mount(<Tab animation={false}>{panes}</Tab>);
            assert(wrapper.find('.next-tabs-nav-appear').length === 0);
        });

        it('should render with shape', () => {
            wrapper = mount(<Tab shape="wrapped">{panes}</Tab>);
            assert(wrapper.props().shape === 'wrapped');
            assert(wrapper.find('.next-tabs').hasClass('next-tabs-wrapped'));

            const wrapper2 = mount(<Tab shape="capsule">{panes}</Tab>);
            assert(wrapper2.find('.next-tabs').hasClass('next-tabs-capsule'));
            const wrapper3 = mount(<Tab shape="text">{panes}</Tab>);
            assert(wrapper3.find('.next-tabs').hasClass('next-tabs-text'));
        });

        it('should render with defaultActiveKey', () => {
            wrapper = mount(<Tab defaultActiveKey="3">{panes}</Tab>);
            assert(
                wrapper
                    .find('.next-tabs-tab')
                    .at(3)
                    .hasClass('active')
            );
        });

        it('should render with activeKey (controlled)', () => {
            wrapper = mount(<Tab activeKey="2">{panes}</Tab>);
            assert(
                wrapper
                    .find('.next-tabs-tab')
                    .at(2)
                    .hasClass('active')
            );
            wrapper.setProps({ activeKey: '3' });
            assert(
                wrapper
                    .find('.next-tabs-tab')
                    .at(3)
                    .hasClass('active')
            );
        });

        it('should render with tabPosition (wrapped)', () => {
            wrapper = mount(
                <Tab tabPosition="left" shape="wrapped">
                    {panes}
                </Tab>
            );
            assert(wrapper.find('.next-tabs').hasClass('next-tabs-vertical'));

            const wrapper2 = mount(
                <Tab tabPosition="right" shape="wrapped">
                    {panes}
                </Tab>
            );
            assert(wrapper2.find('.next-tabs').hasClass('next-tabs-vertical'));

            const wrapper3 = mount(
                <Tab tabPosition="bottom" shape="wrapped">
                    {panes}
                </Tab>
            );
            assert(wrapper3.find('.next-tabs').hasClass('next-tabs-bottom'));
        });

        it('should render with size', () => {
            wrapper = mount(<Tab size="small">{panes}</Tab>);
            assert(wrapper.find('.next-tabs').hasClass('next-small'));
        });

        it('should render with extra', () => {
            wrapper = mount(
                <Tab extra={<div className="test-extra" />}>{panes}</Tab>
            );
            assert(wrapper.find('.test-extra').length === 1);
        });

        it('should render extra in left side', () => {
            wrapper = mount(
                <Tab
                    shape="wrapped"
                    tabPosition="left"
                    extra={<button className="test-extra">hello world</button>}
                >
                    {panes}
                </Tab>
            );
            assert(wrapper.find('.test-extra').length === 1);
        });

        it('should render with navStyle & navClassName', () => {
            const navStyle = { background: 'red' };
            wrapper = mount(
                <Tab navClassName="custom-nav" navStyle={navStyle}>
                    {panes}
                </Tab>
            );
            assert(wrapper.find('.next-tabs-bar').hasClass('custom-nav'));
            const tabBar = wrapper.find('.next-tabs-bar').instance();
            assert(
                tabBar.style.background === 'red' ||
                    tabBar.style.background.startsWith('red')
            );
        });

        it('should render with contentStyle & contentClassName', () => {
            const contentStyle = { background: 'red' };
            wrapper = mount(
                <Tab
                    contentStyle={contentStyle}
                    contentClassName="custom-content"
                >
                    {panes}
                </Tab>
            );
            assert(
                wrapper.find('.next-tabs-content').hasClass('custom-content')
            );
            const tabContent = wrapper.find('.next-tabs-content').instance();
            assert(
                tabContent.style.background === 'red' ||
                    tabContent.style.background.startsWith('red')
            );
        });

        it('should render with tabRender', () => {
            wrapper = mount(
                <Tab
                    tabRender={(key, props) => (
                        <div className="custom-tab-item">{props.title}</div>
                    )}
                >
                    {panes}
                </Tab>
            );
            assert(wrapper.find('.custom-tab-item').length === 4);
        });

        it('should render all tabpanes (disable lazyLoad)', () => {
            wrapper = mount(<Tab lazyLoad={false}>{panes}</Tab>);
            assert(wrapper.find('.next-tabs-tabpane').length === 4);
        });
    });

    describe('with action', () => {
        let wrapper;
        const panes = [1, 2, 3, 4].map((item, index) => (
            <Tab.Item title={`item ${item}`} key={index} />
        ));

        afterEach(() => {
            wrapper.unmount();
            wrapper = null;
        });

        it('should click to change', () => {
            let clickCounter = 0;
            let changeCounter = 0;
            wrapper = mount(
                <Tab
                    onClick={() => ++clickCounter}
                    onChange={() => ++changeCounter}
                >
                    {panes}
                </Tab>
            );
            wrapper
                .find('.next-tabs-tab')
                .at(2)
                .simulate('click');
            assert(
                wrapper
                    .find('.next-tabs-tab')
                    .at(2)
                    .hasClass('active')
            );
            wrapper
                .find('.next-tabs-tab')
                .at(2)
                .simulate('click');
            assert(clickCounter === 2);
            assert(changeCounter === 1);
        });

        it('should change tabs with triggerType', () => {
            let changeCounter = 0;
            wrapper = mount(
                <Tab triggerType="hover" onChange={() => ++changeCounter}>
                    {panes}
                </Tab>
            );
            wrapper
                .find('.next-tabs-tab')
                .at(3)
                .simulate('mouseEnter');
            assert(
                wrapper
                    .find('.next-tabs-tab')
                    .at(3)
                    .hasClass('active')
            );
            wrapper
                .find('.next-tabs-tab')
                .at(2)
                .simulate('mouseEnter');
            assert(
                wrapper
                    .find('.next-tabs-tab')
                    .at(2)
                    .hasClass('active')
            );
            wrapper
                .find('.next-tabs-tab')
                .at(2)
                .simulate('mouseLeave');
            assert(changeCounter === 2);
        });

        it('should change tabs with keyDown', () => {
            wrapper = mount(<Tab>{panes}</Tab>);
            wrapper
                .find('.next-tabs-tab.active')
                .simulate('keyDown', { keyCode: KEYCODE.RIGHT });
            assert(
                wrapper
                    .find('.next-tabs-tab')
                    .at(1)
                    .hasClass('active')
            );
            wrapper
                .find('.next-tabs-tab.active')
                .simulate('keyDown', { keyCode: KEYCODE.DOWN });
            assert(
                wrapper
                    .find('.next-tabs-tab')
                    .at(2)
                    .hasClass('active')
            );
            wrapper
                .find('.next-tabs-tab.active')
                .simulate('keyDown', { keyCode: KEYCODE.UP });
            assert(
                wrapper
                    .find('.next-tabs-tab')
                    .at(1)
                    .hasClass('active')
            );
            wrapper
                .find('.next-tabs-tab.active')
                .simulate('keyDown', { keyCode: KEYCODE.LEFT });
            assert(
                wrapper
                    .find('.next-tabs-tab')
                    .at(0)
                    .hasClass('active')
            );
        });

        it('should render with closeable tabs', () => {
            let tabKey;
            wrapper = mount(
                <Tab onClose={key => (tabKey = key)}>
                    <Tab.Item title="foo" />
                    <Tab.Item title="bar" closeable />
                </Tab>
            );
            const closeIcon = wrapper.find('.next-icon-close');
            assert(closeIcon.length === 1);
            closeIcon.simulate('click');
            assert(tabKey === '1');
        });

        it('should close tab with keyboard', () => {
            let tabKey;
            wrapper = mount(
                <Tab onClose={key => (tabKey = key)}>
                    <Tab.Item title="foo" />
                    <Tab.Item title="bar" closeable />
                </Tab>
            );
            const closeIcon = wrapper.find('.next-icon-close');
            assert(closeIcon.length === 1);
            closeIcon.simulate('focus');
            closeIcon.simulate('keyDown', { keyCode: KEYCODE.ENTER });
            assert(tabKey === '1');
        });

        it('should unmountInactiveTabs', () => {
            wrapper = mount(<Tab unmountInactiveTabs>{panes}</Tab>);
            wrapper
                .find('.next-tabs-tab')
                .at(3)
                .simulate('click');
            wrapper
                .find('.next-tabs-tab')
                .at(2)
                .simulate('click');
            assert(wrapper.find('.next-tabs-tabpane').length === 1);
        });
    });

    describe('slide mode', () => {
        let wrapper, target;
        const panes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <Tab.Item title={`tab item ${item}`} key={index} />
        ));
        const boxStyle = { width: '200px' };

        beforeEach(() => {
            target = document.createElement('div');
            document.body.appendChild(target);
        });

        afterEach(() => {
            document.body.removeChild(target);
            wrapper.unmount();
            wrapper = null;
            target = null;
        });

        it('should render excess tabs with slides', () => {
            wrapper = mount(
                <div style={boxStyle}>
                    <Tab>{panes}</Tab>
                </div>,
                { attachTo: target }
            );
            assert(wrapper.find('.next-tabs-btn-prev').hasClass('disabled'));
            assert(wrapper.find('.next-tabs-btn-next').length === 1);
        });

        it('should click prev/next to slide', () => {
            wrapper = mount(
                <div style={boxStyle}>
                    <Tab animation={false}>{panes}</Tab>
                </div>,
                { attachTo: target }
            );
            assert(wrapper.find('.next-tabs-btn-prev').hasClass('disabled'));
            wrapper.find('.next-tabs-btn-next').simulate('click');
            assert(!wrapper.find('.next-tabs-btn-prev').hasClass('disabled'));
            wrapper.find('.next-tabs-btn-prev').simulate('click');
            assert(wrapper.find('.next-tabs-btn-prev').hasClass('disabled'));
        });

        it('should render excess tabs with dropdown', () => {
            wrapper = mount(
                <div style={boxStyle}>
                    <Tab excessMode="dropdown" shape="wrapped">
                        {panes}
                    </Tab>
                </div>,
                { attachTo: target }
            );
            assert(wrapper.find('.next-tabs-btn-down').length === 1);
            wrapper.find('.next-tabs-btn-down').simulate('click');
            assert(wrapper.find('.next-overlay-wrapper').length === 1);
            wrapper
                .find('.next-menu-item')
                .at(0)
                .simulate('click');
            assert(
                wrapper
                    .find('.next-menu-item')
                    .at(0)
                    .hasClass('next-selected')
            );
        });

        it('should scrollToActiveTab', () => {
            wrapper = mount(
                <div style={boxStyle}>
                    <Tab defaultActiveKey="9">{panes}</Tab>
                </div>,
                { attachTo: target }
            );
            wrapper
                .find('.next-tabs-tab')
                .at(3)
                .simulate('click');
            assert(
                wrapper
                    .find('.next-tabs-tab')
                    .at(3)
                    .hasClass('active')
            );
        });
    });
});
