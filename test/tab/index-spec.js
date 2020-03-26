import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import assert from 'power-assert';
import { KEYCODE, dom } from '../../src/util';
import Tab from '../../src/tab/index';
import TabNav from '../../src/tab/tabs/nav';
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

        it('should support device', () => {
            wrapper = mount(<Tab>{panes}</Tab>);
            assert(wrapper.find('.next-tabs-scrollable').length === 0);
            assert(wrapper.find(TabNav).prop('excessMode') === 'slide');
            wrapper.setProps({
                device: 'phone'
            });
            assert(wrapper.find('.next-tabs-scrollable').length > 0);
            assert(wrapper.find(TabNav).prop('excessMode') === 'slide');
        })
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

        it('should resize', () => {
            const render = sinon.spy();
            const ele = (
                <Tab defaultActiveKey={1} tabRender={render}>
                    <Tab.Item key={1} title="Item1" />
                </Tab>
            );
            wrapper = mount(ele);
            window.dispatchEvent(new Event('resize'));
            assert(render.calledOnce);
        });
    });

    describe('excess mode', () => {
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

        it('should render excess tabs with slides', done => {
            wrapper = mount(
                <div style={boxStyle}>
                    <Tab animation={false}>{panes}</Tab>
                </div>,
                { attachTo: target }
            );
            setTimeout(() => {
                assert(
                    dom.hasClass(
                        wrapper.find('.next-tabs-btn-prev').getDOMNode(),
                        'disabled'
                    )
                );
                assert(wrapper.find('.next-tabs-btn-next').length === 1);
                done();
            }, 420);
        });

        it('should click prev/next to slide', done => {
            wrapper = mount(
                <div style={boxStyle}>
                    <Tab animation={false}>{panes}</Tab>
                </div>,
                { attachTo: target }
            );
            setTimeout(() => {
                assert(
                    dom.hasClass(
                        wrapper.find('.next-tabs-btn-prev').getDOMNode(),
                        'disabled'
                    )
                );
                wrapper.find('.next-tabs-btn-next').simulate('click');
                assert(
                    !dom.hasClass(
                        wrapper.find('.next-tabs-btn-prev').getDOMNode(),
                        'disabled'
                    )
                );
                wrapper.find('.next-tabs-btn-prev').simulate('click');
                assert(
                    dom.hasClass(
                        wrapper.find('.next-tabs-btn-prev').getDOMNode(),
                        'disabled'
                    )
                );
                done();
            }, 420);
        });

        it('should not render dropdown if not excessed', () => {
            wrapper = mount(
                <div style={boxStyle}>
                    <Tab excessMode="dropdown" shape="wrapped">
                        <Tab.Item title="item" key={1} />
                    </Tab>
                </div>,
                { attachTo: target }
            );
            assert(wrapper.find('.next-tabs-btn-down').length === 0);
        });

        it('should work fine without animation', () => {
            wrapper = mount(<Tab animation={false}>{panes}</Tab>, { attachTo: target });
            assert(
                wrapper
                    .find('.next-tabs-tab')
                    .at(0)
                    .hasClass('active')
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
    describe('animation sensitive tests', () => {
        let target;
        const delay = time => new Promise(resolve => setTimeout(resolve, time));
        const panes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <Tab.Item title={`tab item ${item}`} key={index} />
        ));
        const boxStyle = { width: '200px' };

        beforeEach(() => {
            target = document.createElement('div');
            document.body.appendChild(target);
        });

        afterEach(() => {
            ReactDOM.unmountComponentAtNode(target);
            document.body.removeChild(target);
        });
        it('should render excess tabs with dropdown', async () => {
            ReactDOM.render(
                <div style={boxStyle}>
                    <Tab excessMode="dropdown" shape="wrapped">
                        {panes}
                    </Tab>
                </div>, target);
            await delay(800);
            assert(target.querySelectorAll('.next-tabs-btn-down').length === 1);
            target.querySelector('.next-tabs-btn-down').click();
            await delay(800);
            assert(target.querySelectorAll('.next-overlay-wrapper').length === 1);
            target.querySelector('.next-menu-item').click();
            await delay(800);
            assert(target.querySelectorAll('.next-menu-item')[0].classList.contains("next-selected"));
        });
        it('should show slide buttons', async () => {
            ReactDOM.render(
                <div style={boxStyle}>
                    <Tab rtl excessMode="slide">
                        {panes}
                    </Tab>
                </div>, target);
            await delay(800);
            assert(target.querySelector('.next-tabs-btn-prev').classList.contains("disabled"));
        });
        it('should slide', async () => {
            ReactDOM.render(
                <div style={boxStyle}>
                    <Tab rtl excessMode="slide">
                        {panes}
                    </Tab>
                </div>, target);
            let prev, newpos;
            await delay(1800);
            prev = target.querySelector(".next-tabs-nav").getBoundingClientRect().left;
            target.querySelector(".next-tabs-btn-next").click();
            await delay(200);
            newpos = target.querySelector(".next-tabs-nav").getBoundingClientRect().left;
            assert(newpos > prev);
        });

        it('should adjust scroll length so that tab not partially in view', async () => {
            const newpanes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(
                (item, index) => (
                    <Tab.Item title={`tabsss item ${item}`} key={index}>
                        content
                    </Tab.Item>
                )
            );
            ReactDOM.render(
                <div style={{ width: '520px' }}>
                    <Tab
                        excessMode="slide"
                        lazyLoad={false}
                        defaultActiveKey={4}
                        shape="capsule"
                    >
                        {newpanes}
                    </Tab>
                </div>, target);
            await delay(1800);

            let transStr = target.querySelector('.next-tabs-nav').style.transform;
            let rst = transStr.match(
                /translate3d\((\-?\d+\.\d+|\-?\d+)px,.*\)/i
            );
            assert(rst[1].startsWith('-'));
            target.querySelector('.next-tabs-btn-prev').click();
            await delay(200);
            transStr = target.querySelector('.next-tabs-nav').style.transform;
            rst = transStr.match(
                /translate3d\((\-?\d+\.\d+|\-?\d+)px,.*\)/i
            );
            assert(rst[1] === '0');
        });

        it('should adjust scroll length', async () => {
            const newpanes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(
                (item, index) => (
                    <Tab.Item title={`tabsss item ${item}`} key={index}>
                        content
                    </Tab.Item>
                )
            );
            ReactDOM.render(
                <div style={{ width: '520px' }}>
                    <Tab
                        excessMode="slide"
                        lazyLoad={false}
                        defaultActiveKey={4}
                        shape="wrapped"
                        rtl
                    >
                        {newpanes}
                    </Tab>
                </div>, target);
            await delay(1200);
            let transStr = target.querySelector('.next-tabs-nav').style.transform;
            let rst = transStr.match(
                /translate3d\((\-?\d+\.\d+|\-?\d+)px,.*\)/i
            );
            assert(parseInt(rst[1]) > 0);
            target.querySelector('.next-tabs-btn-prev').click();
            await delay(1000);
            transStr = target.querySelector('.next-tabs-nav').style.transform;
            rst = transStr.match(
                /translate3d\((\-?\d+\.\d+|\-?\d+)px,.*\)/i
            );
            assert(rst[1] === '0');
        });

        it('should auto scroll to active tab', async () => {
            const tabs = [
                { tab: 'Home', key: 1 },
                { tab: 'Documnet', key: 2 },
                { tab: 'Setting', key: 3 },
                { tab: 'Help', key: 4 },
                { tab: 'Admin', key: 5 },
                { tab: 'More 1', key: 6 },
                { tab: 'More 2', key: 7 },
                { tab: 'More 3', key: 8 },
                { tab: 'More 4', key: 9 },
                { tab: 'More 5', key: 10 },
                { tab: 'More 6', key: 11 },
                { tab: 'More 7', key: 12 },
                { tab: 'More 8', key: 13 },
                { tab: 'More 9', key: 14 },
                { tab: 'More 10', key: 15 },
                { tab: 'More 11', key: 16 },
                { tab: 'More 12', key: 17 },
                { tab: 'More 13', key: 18 },
                { tab: 'More 14', key: 19 }
            ];
            ReactDOM.render(
                <div className="fusion-demo" style={{ maxWidth: '520px' }}>
                    <div className="demo-item-title">Controlled mode</div>
                    <Tab excessMode="slide" activeKey={9}>
                        {
                            tabs.map(item => <Tab.Item key={item.key} title={item.tab}>{item.tab} content, content, content</Tab.Item>)
                        }
                    </Tab>
                </div>, target);
            await delay(1200);
            let transStr = target.querySelector('.next-tabs-nav').style.transform;
            let rst = transStr.match(
                /translate3d\((\-?\d+\.\d+|\-?\d+)px,.*\)/i
            );
            assert(parseInt(rst[1]) < 560);
        });
    });
    describe('rtl mode', () => {
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
        it('should render extra content in left', () => {
            wrapper = mount(
                <Tab rtl extra={<span id="test-extra">hello</span>}>
                    <Tab.Item title="Home" key="1">
                        Home content
                    </Tab.Item>
                    <Tab.Item title="Documentation" key="2">
                        Doc content
                    </Tab.Item>
                    <Tab.Item title="Help" key="3">
                        Help Content
                    </Tab.Item>
                </Tab>,
                { attachTo: target }
            );
            const el = wrapper.find('#test-extra').getDOMNode().parentElement;
            assert(el.style.getPropertyValue('float') === 'left');
        });
    });
});
