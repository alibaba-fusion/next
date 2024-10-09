import React from 'react';
import { KEYCODE } from '../../util';
import Tab from '../index';
import '../style';

describe('Tab', () => {
    describe('simple', () => {
        it('should render only one tab', () => {
            cy.mount(
                <Tab>
                    <Tab.Item title="foo" />
                </Tab>
            );
            cy.get('.next-tabs-tab').should('have.length', 1);
        });
    });

    describe('with props', () => {
        const panes = [1, 2, 3, 4, 5].map((item, index) =>
            item < 5 ? <Tab.Item title={`item ${item}`} key={index} /> : null
        );

        it('should render tab (with animation)', () => {
            cy.mount(<Tab>{panes}</Tab>);
            cy.get('.next-tabs-tab').should('have.length', 4);
            cy.get('.next-tabs-tabpane').should('have.length', 1);
        });

        it('should render tab with undefined children', () => {
            cy.mount(<Tab shape="capsule">{undefined}</Tab>).as('Tab');
            cy.rerender('Tab', { children: [1, 2] });
            cy.get('.next-tabs').should('exist');
        });

        it('should render tab without animation', () => {
            cy.mount(<Tab animation={false}>{panes}</Tab>);
            cy.get('.next-tabs-nav-appear').should('not.exist');
        });

        it('should render with shape', () => {
            cy.mount(<Tab shape="wrapped">{panes}</Tab>).as('Tab');
            cy.get('.next-tabs').should('have.class', 'next-tabs-wrapped');

            cy.rerender('Tab', { shape: 'capsule' });
            cy.get('.next-tabs').should('have.class', 'next-tabs-capsule');

            cy.rerender('Tab', { shape: 'text' });
            cy.get('.next-tabs').should('have.class', 'next-tabs-text');
        });

        it('should render with defaultActiveKey', () => {
            cy.mount(<Tab defaultActiveKey="3">{panes}</Tab>);
            cy.get('.next-tabs-tab').eq(3).should('have.class', 'active');
        });

        it('should render with activeKey (controlled)', () => {
            cy.mount(<Tab activeKey="2">{panes}</Tab>).as('Tab');
            cy.get('.next-tabs-tab').eq(2).should('have.class', 'active');

            cy.rerender('Tab', {
                activeKey: '3',
            });
            cy.get('.next-tabs-tab').eq(3).should('have.class', 'active');
        });

        it('should render with tabPosition (wrapped)', () => {
            cy.mount(
                <Tab tabPosition="left" shape="wrapped">
                    {panes}
                </Tab>
            );
            cy.get('.next-tabs').should('have.class', 'next-tabs-vertical');

            cy.mount(
                <Tab tabPosition="right" shape="wrapped">
                    {panes}
                </Tab>
            );
            cy.get('.next-tabs').should('have.class', 'next-tabs-vertical');

            cy.mount(
                <Tab tabPosition="bottom" shape="wrapped">
                    {panes}
                </Tab>
            );
            cy.get('.next-tabs').should('have.class', 'next-tabs-bottom');
        });

        it('should render with size', () => {
            cy.mount(<Tab size="small">{panes}</Tab>);
            cy.get('.next-tabs').should('have.class', 'next-small');
        });

        it('should render with extra', () => {
            cy.mount(<Tab extra={<div className="test-extra" />}>{panes}</Tab>);
            cy.get('.test-extra').should('have.length', 1);
        });

        it('should render extra in left side', () => {
            cy.mount(
                <Tab
                    shape="wrapped"
                    tabPosition="left"
                    extra={<button className="test-extra">hello world</button>}
                >
                    {panes}
                </Tab>
            );
            cy.get('.test-extra').should('have.length', 1);
        });

        it('should render with navStyle & navClassName', () => {
            const navStyle = { background: 'red' };
            cy.mount(
                <Tab navClassName="custom-nav" navStyle={navStyle}>
                    {panes}
                </Tab>
            );
            cy.get('.next-tabs-bar').should('have.class', 'custom-nav');
            cy.get('.next-tabs-bar').should('have.css', 'background-color', 'rgb(255, 0, 0)');
        });

        it('should render with tabRender', () => {
            cy.mount(
                <Tab
                    tabRender={(key, props: { title: string }) => (
                        <div className="custom-tab-item">{props.title}</div>
                    )}
                >
                    {panes}
                </Tab>
            );
            cy.get('.custom-tab-item').should('have.length', 4);
        });

        it('should render all tabpanes (disable lazyLoad)', () => {
            cy.mount(<Tab lazyLoad={false}>{panes}</Tab>);
            cy.get('.next-tabs-tabpane').should('have.length', 4);
        });

        it('should render correctly when switching between different excessMode settings', () => {
            // If there are too few tab items, the next button will not appear in slide mode.
            const panes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
                (item, index) => <Tab.Item title={`item ${item}`} key={index} />
            );
            cy.mount(<Tab>{panes}</Tab>).as('Tab');
            cy.get('.next-tabs-scrollable').should('have.length.greaterThan', 0);
            cy.get('.next-tabs-btn-next').should('exist');
            cy.rerender('Tab', { excessMode: 'dropdown' });
            cy.get('.next-tabs-scrollable').should('exist');
        });

        it('should still render with no errors without Tab.Item', () => {
            function App() {
                return <Tab>1234</Tab>;
            }
            cy.mount(<App />).as('App');
            cy.rerender('App', { activeKey: '3' });
            cy.get('.next-tabs').should('have.length', 1);
        });
    });

    describe('with action', () => {
        const panes = [1, 2, 3, 4].map((item, index) => (
            <Tab.Item title={`item ${item}`} key={index} />
        ));

        it('should click to change', () => {
            const onClick = cy.spy();
            const onChange = cy.spy();

            cy.mount(
                <Tab onClick={onClick} onChange={onChange}>
                    {panes}
                </Tab>
            );
            cy.get('.next-tabs-tab').eq(2).click();
            cy.get('.next-tabs-tab').eq(2).should('have.class', 'active');
            cy.get('.next-tabs-tab').eq(2).click();

            cy.wrap(onClick).should('have.been.calledTwice');
            cy.wrap(onChange).should('have.been.calledOnce');
        });

        it('should change tabs with triggerType', () => {
            const onChange = cy.spy();
            cy.mount(
                <Tab triggerType="hover" onChange={onChange}>
                    {panes}
                </Tab>
            );

            cy.get('.next-tabs-tab').eq(3).trigger('mouseover');
            cy.get('.next-tabs-tab').eq(3).should('have.class', 'active');
            cy.get('.next-tabs-tab').eq(2).trigger('mouseover');
            cy.get('.next-tabs-tab').eq(2).should('have.class', 'active');
            cy.get('.next-tabs-tab').eq(2).trigger('mouseout');
            cy.wrap(onChange).should('have.been.calledTwice');
        });

        it('should change tabs with keyDown', () => {
            cy.mount(<Tab>{panes}</Tab>);
            cy.get('.next-tabs-tab.active').trigger('keydown', { keyCode: KEYCODE.RIGHT });
            cy.get('.next-tabs-tab').eq(1).should('have.class', 'active');
            cy.get('.next-tabs-tab.active').trigger('keydown', { keyCode: KEYCODE.DOWN });
            cy.get('.next-tabs-tab').eq(2).should('have.class', 'active');
            cy.get('.next-tabs-tab.active').trigger('keydown', { keyCode: KEYCODE.UP });
            cy.get('.next-tabs-tab').eq(1).should('have.class', 'active');
            cy.get('.next-tabs-tab.active').trigger('keydown', { keyCode: KEYCODE.LEFT });
            cy.get('.next-tabs-tab').eq(0).should('have.class', 'active');
        });

        it('should not change tabs with keyboard when keyboard event is disabled', () => {
            cy.mount(<Tab disableKeyboard>{panes}</Tab>);
            cy.get('.next-tabs-tab.active').trigger('keydown', { keyCode: KEYCODE.RIGHT });
            cy.get('.next-tabs-tab').eq(0).should('have.class', 'active');
        });

        it('should render with closeable tabs', () => {
            let tabKey: string;
            cy.mount(
                <Tab
                    onClose={key => {
                        tabKey = key;
                    }}
                >
                    <Tab.Item title="foo" key="0" />
                    <Tab.Item title="bar" closeable key="1" />
                </Tab>
            );
            cy.get('.next-icon-close').should('have.length', 1);
            cy.get('.next-icon-close').eq(0).click();
            cy.should(() => {
                expect(tabKey).to.equal('1');
            });
        });

        it('should close tab with keyboard', () => {
            let tabKey: string;
            cy.mount(
                <Tab onClose={key => (tabKey = key)}>
                    <Tab.Item title="foo" />
                    <Tab.Item title="bar" closeable />
                </Tab>
            );

            cy.get('.next-icon-close').should('have.length', 1);
            cy.get('.next-icon-close').eq(0).trigger('keydown', { keyCode: KEYCODE.ENTER });
            cy.should(() => {
                expect(tabKey).to.equal('1');
            });
        });

        it('should unmountInactiveTabs', () => {
            cy.mount(<Tab unmountInactiveTabs>{panes}</Tab>);

            cy.get('.next-tabs-tab').eq(3).click();
            cy.get('.next-tabs-tab').eq(2).click();
            cy.get('.next-tabs-tabpane').should('have.length', 1);
        });

        it('should resize', () => {
            const render = cy.spy().as('renderSpy');
            cy.mount(
                <Tab defaultActiveKey={'1'} tabRender={render}>
                    <Tab.Item key={1} title="Item1" />
                </Tab>
            );
            cy.window().then(win => {
                win.dispatchEvent(new Event('resize'));
            });
            cy.get('@renderSpy').should('have.been.calledOnce');
        });
    });

    describe('excess mode', () => {
        const panes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <Tab.Item title={`tab item ${item}`} key={index} />
        ));
        const boxStyle = { width: '200px' };

        it('should render excess tabs with slides', () => {
            cy.mount(
                <div style={boxStyle}>
                    <Tab animation={false}>{panes}</Tab>
                </div>
            );
            cy.get('.next-tabs-btn-prev').should('have.class', 'disabled');
            cy.get('.next-tabs-btn-next').should('exist');
        });

        it('should click prev/next to slide', () => {
            cy.mount(
                <div style={boxStyle}>
                    <Tab animation={false}>{panes}</Tab>
                </div>
            );
            cy.get('.next-tabs-btn-prev').should('exist').and('have.class', 'disabled');
            cy.get('.next-tabs-btn-next').should('exist').click();
            cy.get('.next-tabs-btn-prev').should('exist').and('not.have.class', 'disabled');
            cy.get('.next-tabs-btn-prev').click();
            cy.get('.next-tabs-btn-prev').should('exist').and('have.class', 'disabled');
        });

        it('should not render dropdown if not excessed', () => {
            cy.mount(
                <div style={boxStyle}>
                    <Tab excessMode="dropdown" shape="wrapped">
                        <Tab.Item title="item" key={1} />
                    </Tab>
                </div>
            );

            cy.get('.next-tabs-btn-down').should('not.exist');
        });

        it('should work fine without animation', () => {
            cy.mount(<Tab animation={false}>{panes}</Tab>);
            cy.get('.next-tabs-tab').first().should('have.class', 'active');
        });

        it('should scrollToActiveTab', () => {
            cy.mount(
                <div style={boxStyle}>
                    <Tab defaultActiveKey="9">{panes}</Tab>
                </div>
            );

            cy.get('.next-tabs-tab').eq(3).click();
            cy.get('.next-tabs-tab').eq(3).should('have.class', 'active');
        });

        it('should scroll into the viewport while click the edge item', () => {
            cy.mount(
                <Tab animation={false} style={{ width: 380 }}>
                    {panes}
                </Tab>
            );

            cy.get('.next-tabs-nav-scroll').then(scroller => {
                expect(scroller).to.exist;
                cy.wrap(scroller).find('.next-tabs-tab').eq(3).click();
                cy.wrap(scroller).find('.next-tabs-tab').eq(3).should('be.visible');
                scroller[0].scrollLeft = 2000;
                cy.wrap(scroller).find('.next-tabs-tab').eq(6).click();
                cy.wrap(scroller).find('.next-tabs-tab').eq(6).should('be.visible');
            });
        });

        it('extra content should not be obscured', () => {
            const extraContentStyle = { width: '50px' };
            cy.mount(
                <Tab extra={<div style={extraContentStyle}>hello world</div>} style={boxStyle}>
                    {panes}
                </Tab>
            );
            cy.get('.next-tabs-nav-extra').children().first().should('have.css', 'width', '50px');
        });
    });

    describe('animation sensitive tests', () => {
        const panes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <Tab.Item title={`tab item ${item}`} key={index} />
        ));
        const boxStyle = { width: '200px' };

        it('should render excess tabs with dropdown', () => {
            cy.mount(
                <div style={boxStyle}>
                    <Tab excessMode="dropdown" shape="wrapped">
                        {panes}
                    </Tab>
                </div>
            );

            cy.get('.next-tabs-btn-down').should('have.length', 1);
            cy.get('.next-tabs-btn-down').click();
            cy.get('.next-overlay-wrapper').should('have.length', 1);
            cy.get('.next-menu-item').first().click();
            cy.get('.next-menu-item').first().should('have.class', 'next-selected');
        });

        it('should show slide buttons', () => {
            cy.mount(
                <div style={boxStyle}>
                    <Tab rtl excessMode="slide">
                        {panes}
                    </Tab>
                </div>
            );
            cy.get('.next-tabs-btn-prev').should('have.class', 'disabled');
        });

        it('should slide', () => {
            cy.mount(
                <div style={boxStyle}>
                    <Tab rtl excessMode="slide">
                        {panes}
                    </Tab>
                </div>
            );
            let prev: number, newpos: number;
            cy.get('.next-tabs-nav').then(nav => {
                prev = nav[0].getBoundingClientRect().left;
            });
            cy.get('.next-tabs-btn-next').click();
            cy.get('.next-tabs-nav').then(nav => {
                newpos = nav[0].getBoundingClientRect().left;
                expect(newpos).to.be.greaterThan(prev);
            });
        });

        it('should adjust scroll length so that tab not partially in view', () => {
            const newpanes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item, index) => (
                <Tab.Item title={`tabsss item ${item}`} key={index}>
                    content
                </Tab.Item>
            ));
            cy.mount(
                <div style={{ width: '520px' }}>
                    <Tab excessMode="slide" lazyLoad={false} defaultActiveKey={'4'} shape="capsule">
                        {newpanes}
                    </Tab>
                </div>
            );

            cy.get('.next-tabs-nav-wrap').scrollIntoView();
            cy.get('.next-tabs-nav-wrap').then($scrollContainer => {
                const scrollLeft = $scrollContainer[0].scrollLeft;
                const clientWidth = $scrollContainer[0].clientWidth;
                cy.get('.next-tabs-tab')
                    .eq(4)
                    .then($tab => {
                        const tabLeft = $tab[0].scrollLeft; //
                        const tabWidth = $tab[0].offsetWidth;
                        expect(tabLeft).to.be.gte(scrollLeft);
                        expect(tabLeft + tabWidth).to.be.lte(scrollLeft + clientWidth);
                    });
            });
        });

        it('should adjust scroll length', () => {
            const newpanes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item, index) => (
                <Tab.Item title={`tabsss item ${item}`} key={index}>
                    content
                </Tab.Item>
            ));
            cy.mount(
                <div style={{ width: '520px' }}>
                    <Tab
                        excessMode="slide"
                        lazyLoad={false}
                        defaultActiveKey={'4'}
                        shape="wrapped"
                        rtl
                    >
                        {newpanes}
                    </Tab>
                </div>
            );

            cy.get('.next-tabs-nav-wrap').scrollIntoView();
            cy.get('.next-tabs-nav-wrap').then($scrollContainer => {
                const scrollLeft = $scrollContainer[0].scrollLeft;
                const clientWidth = $scrollContainer[0].clientWidth;
                cy.get('.next-tabs-tab')
                    .eq(4)
                    .then($tab => {
                        const tabLeft = $tab[0].scrollLeft;
                        const tabWidth = $tab[0].offsetWidth;

                        expect(tabLeft).to.be.gte(scrollLeft);
                        expect(tabLeft + tabWidth).to.be.lte(scrollLeft + clientWidth);
                    });
            });
        });

        it('should auto scroll to active tab', () => {
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
                { tab: 'More 14', key: 19 },
            ];
            cy.mount(
                <div className="fusion-demo" style={{ maxWidth: '520px' }}>
                    <div className="demo-item-title">Controlled mode</div>
                    <Tab excessMode="slide" activeKey={'9'}>
                        {tabs.map(item => (
                            <Tab.Item key={item.key} title={item.tab}>
                                {item.tab} content, content, content
                            </Tab.Item>
                        ))}
                    </Tab>
                </div>
            );
            cy.get('.next-tabs-tab').eq(8).should('have.class', 'active');
        });
        it('should support showAdd', () => {
            const tabs = [
                { tab: 'Home', key: 1 },
                { tab: 'Documnet', key: 2 },
                { tab: 'Setting', key: 3 },
                { tab: 'Help', key: 4 },
                { tab: 'Admin', key: 5 },
                { tab: 'More More More 1', key: 6 },
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
                { tab: 'More More More', key: 19 },
            ];
            cy.mount(
                <div className="fusion-demo" style={{ width: '520px' }}>
                    <Tab showAdd shape="wrapped">
                        {tabs.map(item => (
                            <Tab.Item key={item.key} title={item.tab}>
                                {item.tab} content, content, content
                            </Tab.Item>
                        ))}
                    </Tab>
                </div>
            );
            cy.get('.next-tabs-nav-operations').should('have.length', 1);
        });
    });
    describe('rtl mode', () => {
        it('should render extra content in left', () => {
            cy.mount(
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
                </Tab>
            );
            //Using position: absolute for positioning, the element is removed from the normal document flow, and float: left no longer takes effect.
            cy.get('#test-extra').parent().should('exist');
            cy.get('#test-extra').parent().should('have.css', 'left', '0px');
        });
    });
});
