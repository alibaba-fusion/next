import React from 'react';
// import ReactDOM from 'react-dom';
// import Enzyme, { mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import assert from 'power-assert';
import Shell from '../index';
import Search from '../../search/index';
import Radio from '../../radio/index';
import Icon from '../../icon/index';
import Nav from '../../nav/index';
import '../style';
import '../../search/style';
import '../../nav/style';
import '../../icon/style';
import './index.scss';

const { Item } = Nav;
// Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable */
describe('Shell', () => {
    describe('render', () => {
        it('default should work', () => {
            cy.mount(
                <Shell className={'iframe-hack'} style={{ border: '1px solid #eee' }}>
                    <Shell.Branding>
                        <div className="rectangular" />
                        <span style={{ marginLeft: 10 }}>App Name</span>
                    </Shell.Branding>
                    <Shell.Navigation direction="hoz">
                        <Search
                            key="2"
                            shape="simple"
                            type="dark"
                            placeholder="Search"
                            style={{ width: '200px' }}
                        />
                    </Shell.Navigation>
                    <Shell.Action>
                        <img
                            src="https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png"
                            className="avatar"
                            alt="用户头像"
                        />
                        <span style={{ marginLeft: 10 }}>MyName</span>
                    </Shell.Action>

                    <Shell.Content>
                        <div style={{ minHeight: 1200, background: '#fff' }} />
                    </Shell.Content>

                    <Shell.Footer>
                        <span>Alibaba Fusion</span>
                        <span>@ 2019 Alibaba Piecework 版权所有</span>
                    </Shell.Footer>
                </Shell>
            );
            // 检查各部分是否存在
            cy.get('.iframe-hack').should('exist');
            cy.get('.rectangular').should('exist');
            cy.contains('App Name').should('exist');
            cy.get('.avatar').should('exist');
            cy.contains('MyName').should('exist');
            cy.contains('Alibaba Fusion').should('exist');
            cy.contains('@ 2019 Alibaba Piecework 版权所有').should('exist');
        });

        it('default collapse should work', async () => {
            type Device = 'phone' | 'tablet' | 'desktop';
            interface AppProps {
                onCollapseNavigationChange: (visible: boolean) => void;
                onCollapseLocalNavChange: (visible: boolean) => void;
                onCollapseAncilleryChange: (visible: boolean) => void;
            }
            class App extends React.Component<AppProps> {
                state: {
                    device: Device;
                    navcollapse: boolean;
                } = {
                    device: 'desktop',
                    navcollapse: false,
                };
                onChange = (device: Device) => {
                    this.setState({
                        device,
                    });
                };

                btnClick = () => {
                    this.setState({
                        navcollapse: !this.state.navcollapse,
                    });
                };

                onCollapseChange = (visible: boolean) => {
                    console.log('onCollapseChange:', visible);
                    const { onCollapseNavigationChange } = this.props;

                    this.setState({
                        navcollapse: visible,
                    });

                    onCollapseNavigationChange(visible);
                };

                render() {
                    const { onCollapseLocalNavChange, onCollapseAncilleryChange } = this.props;
                    // eslint-disable-next-line react/jsx-filename-extension
                    return (
                        <div>
                            <Radio.Group
                                id="shell-device"
                                style={{ marginBottom: '10px' }}
                                onChange={this.onChange}
                                defaultValue="desktop"
                            >
                                <Radio value="phone">phone</Radio>
                                <Radio value="tablet">tablet</Radio>
                                <Radio value="desktop">desktop</Radio>
                            </Radio.Group>
                            <Shell
                                className={'iframe-hack'}
                                device={this.state.device}
                                style={{ border: '1px solid #eee' }}
                            >
                                <Shell.Branding>
                                    <div className="rectangular" />
                                    <span style={{ marginLeft: 10 }}>App Name</span>
                                </Shell.Branding>
                                <Shell.Navigation direction="hoz">
                                    <Search
                                        key="2"
                                        shape="simple"
                                        type="dark"
                                        placeholder="Search"
                                        style={{ width: '200px' }}
                                    />
                                </Shell.Navigation>
                                <Shell.Action>
                                    <img
                                        src="https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png"
                                        className="avatar"
                                        alt="用户头像"
                                    />
                                    <span style={{ marginLeft: 10 }}>MyName</span>
                                </Shell.Action>

                                <Shell.Navigation
                                    collapse={this.state.navcollapse}
                                    onCollapseChange={this.onCollapseChange}
                                >
                                    <Nav embeddable aria-label="global navigation">
                                        <Item icon="account">Nav Item 1</Item>
                                        <Item icon="calendar">Nav Item 2</Item>
                                        <Item icon="atm">Nav Item 3</Item>
                                        <Item icon="account">Nav Item 4</Item>
                                        <Item icon="account">Nav Item 5</Item>
                                        <Item icon="account">Nav Item 6</Item>
                                        <Item icon="account">Nav Item 7</Item>
                                    </Nav>
                                    <div
                                        id="custom-nav-trigger"
                                        style={{ textAlign: 'center', background: '#eee' }}
                                        onClick={this.btnClick}
                                    >
                                        {this.state.navcollapse ? (
                                            <Icon type="arrow-right" size="xs" />
                                        ) : (
                                            <Icon type="arrow-left" size="xs" />
                                        )}
                                    </div>
                                </Shell.Navigation>

                                <Shell.LocalNavigation onCollapseChange={onCollapseLocalNavChange}>
                                    <Nav embeddable aria-label="local navigation">
                                        <Nav.SubNav label="Local Nav1">
                                            <Item>Local Nav1</Item>
                                        </Nav.SubNav>
                                        <Nav.SubNav label="Local Nav2">
                                            <Item>Local Nav2</Item>
                                        </Nav.SubNav>
                                        <Nav.SubNav label="Local Nav3">
                                            <Item>Local Nav3</Item>
                                        </Nav.SubNav>
                                        <Item>Local Nav4</Item>
                                        <Item>Local Nav5</Item>
                                        <Item>Local Nav6</Item>
                                        <Item>Local Nav7</Item>
                                        <Item>Local Nav8</Item>
                                        <Item>Local Nav4</Item>
                                        <Item>Local Nav5</Item>
                                        <Item>Local Nav6</Item>
                                        <Item>Local Nav7</Item>
                                        <Item>Local Nav8</Item>
                                    </Nav>
                                </Shell.LocalNavigation>

                                <Shell.Content>
                                    <div style={{ minHeight: 1200, background: '#fff' }} />
                                </Shell.Content>
                                <Shell.Footer>
                                    <span>Alibaba Fusion</span>
                                    <span>@ 2019 Alibaba Piecework 版权所有</span>
                                </Shell.Footer>

                                <Shell.Ancillary onCollapseChange={onCollapseAncilleryChange} />

                                <Shell.ToolDock>
                                    <Shell.ToolDockItem>
                                        <Icon type="calendar" />
                                    </Shell.ToolDockItem>
                                    <Shell.ToolDockItem>
                                        <Icon type="atm" />
                                    </Shell.ToolDockItem>
                                    <Shell.ToolDockItem>
                                        <Icon type="account" />
                                    </Shell.ToolDockItem>
                                </Shell.ToolDock>
                            </Shell>
                        </div>
                    );
                }
            }
            let navCollapseCount = 0;
            let localCollapseCount = 0;
            let anciCollapseCount = 0;
            let navCollapse = false;
            let localCollapse = false;
            let anciCollapse = false;
            cy.mount(
                <App
                    onCollapseNavigationChange={visible => {
                        navCollapseCount++;
                        navCollapse = visible;
                        console.log('global nav:', navCollapseCount, navCollapse);
                    }}
                    onCollapseLocalNavChange={visible => {
                        localCollapseCount++;
                        localCollapse = visible;
                        console.log('local nav:', localCollapseCount, localCollapse);
                    }}
                    onCollapseAncilleryChange={visible => {
                        anciCollapseCount++;
                        anciCollapse = visible;
                        console.log('ancillery nav:', anciCollapseCount, anciCollapse);
                    }}
                />
            );
            cy.get('.local-nav-trigger').click();
            cy.get('.ancillary-trigger').click();
            cy.get('.nav-trigger').click();
            cy.get('.nav-trigger').click();
            await new Promise(resolve => setTimeout(resolve, 500));
            expect(navCollapse).to.be.false;
            expect(localCollapse).to.be.true;
            expect(anciCollapse).to.be.true;
            expect(navCollapseCount).to.be.equal(2);
            expect(localCollapseCount).to.be.equal(1);
            expect(anciCollapseCount).to.be.equal(1);

            cy.get('#custom-nav-trigger').click();
            cy.get('.next-shell-navigation.next-shell-collapse').should('not.exist');
        });

        it('should support no header', () => {
            cy.mount(
                <Shell className={'iframe-hack'} style={{ border: '1px solid #eee' }}>
                    <Shell.Navigation trigger={null}>
                        <Nav embeddable aria-label="global navigation">
                            <Nav.Item icon="account">Nav Item 1</Nav.Item>
                            <Nav.Item icon="calendar">Nav Item 2</Nav.Item>
                            <Nav.Item icon="atm">Nav Item 3</Nav.Item>
                            <Nav.Item icon="account">Nav Item 4</Nav.Item>
                            <Nav.Item icon="account">Nav Item 5</Nav.Item>
                            <Nav.Item icon="account">Nav Item 6</Nav.Item>
                            <Nav.Item icon="account">Nav Item 7</Nav.Item>
                        </Nav>
                    </Shell.Navigation>

                    <Shell.Content>
                        <div style={{ minHeight: 1200, background: '#fff' }} />
                    </Shell.Content>

                    <Shell.Footer>
                        <span>Alibaba Fusion</span>
                        <span>@ 2019 Alibaba Piecework 版权所有</span>
                    </Shell.Footer>
                </Shell>
            );

            cy.get('.next-shell-header').should('not.exist');
        });

        it('should support fixed header', () => {
            cy.mount(
                <Shell fixedHeader className={'iframe-hack'} style={{ border: '1px solid #eee' }}>
                    <Shell.Branding>
                        <div className="rectangular" />
                        <span style={{ marginLeft: 10 }}>App Name</span>
                    </Shell.Branding>
                    <Shell.Navigation fixed trigger={null}>
                        <Nav embeddable aria-label="global navigation">
                            <Nav.Item icon="account">Nav Item 1</Nav.Item>
                            <Nav.Item icon="calendar">Nav Item 2</Nav.Item>
                            <Nav.Item icon="atm">Nav Item 3</Nav.Item>
                            <Nav.Item icon="account">Nav Item 4</Nav.Item>
                            <Nav.Item icon="account">Nav Item 5</Nav.Item>
                            <Nav.Item icon="account">Nav Item 6</Nav.Item>
                            <Nav.Item icon="account">Nav Item 7</Nav.Item>
                        </Nav>
                    </Shell.Navigation>

                    <Shell.Content>
                        <div style={{ minHeight: 1200, background: '#fff' }} />
                    </Shell.Content>

                    <Shell.Footer>
                        <span>Alibaba Fusion</span>
                        <span>@ 2019 Alibaba Piecework 版权所有</span>
                    </Shell.Footer>
                </Shell>
            );

            cy.get('.next-shell-header.next-shell-fixed-header').should('exist');
            cy.get('.next-aside-navigation.fixed').should('exist');
        });

        it('should support nothing', () => {
            cy.mount(
                <Shell className={'iframe-hack'} style={{ border: '1px solid #eee' }}>
                    <Shell.Content>
                        <div style={{ minHeight: 1200, background: '#fff' }} />
                    </Shell.Content>

                    <Shell.Footer>
                        <span>Alibaba Fusion</span>
                        <span>@ 2019 Alibaba Piecework 版权所有</span>
                    </Shell.Footer>
                </Shell>
            );

            cy.get('.next-shell-header').should('not.exist');
            cy.get('.next-aside-navigation').should('not.exist');
            cy.get('.next-shell-aside.next-aside-localnavigation').should('not.exist');
            cy.get('.next-shell-aside.next-aside-ancillary').should('not.exist');
            cy.get('.next-aside-tooldock').should('not.exist');
        });

        it('only tooldock, show header only in phone', () => {
            const testDevice = (device: 'phone' | 'tablet' | 'desktop', shouldExist: boolean) => {
                // 创建一个通用的测试用例
                cy.mount(
                    <Shell
                        className="iframe-hack"
                        device={device}
                        style={{ border: '1px solid #eee' }}
                    >
                        <Shell.Content>
                            <div style={{ minHeight: 1200, background: '#fff' }} />
                        </Shell.Content>
                        <Shell.ToolDock>
                            <Shell.ToolDockItem>
                                <Icon type="calendar" />
                            </Shell.ToolDockItem>
                            <Shell.ToolDockItem>
                                <Icon type="atm" />
                            </Shell.ToolDockItem>
                            <Shell.ToolDockItem>
                                <Icon type="account" />
                            </Shell.ToolDockItem>
                        </Shell.ToolDock>
                    </Shell>
                );

                if (shouldExist) {
                    cy.get('.next-shell-header').should('exist');
                } else {
                    cy.get('.next-shell-header').should('not.exist');
                }
            };
            // 仅显示工具栏时，在桌面模式下不应显示头部
            testDevice('desktop', false);
            // 仅显示工具栏时，在平板模式下不应显示头部
            testDevice('tablet', false);
            // 仅显示工具栏时，在手机模式下应显示头部
            testDevice('phone', true);
        });

        // issue:
        it('should hidden menu & menu-items-icon in phone', () => {
            cy.mount(
                <Shell
                    device={'phone'}
                    className={'iframe-hack'}
                    style={{ border: '1px solid #eee' }}
                >
                    <Shell.Navigation>
                        <Nav embeddable aria-label="global navigation">
                            <Nav.Item icon="account">Nav Item 1</Nav.Item>
                            <Nav.Item icon="calendar">Nav Item 2</Nav.Item>
                            <Nav.Item icon="atm">Nav Item 3</Nav.Item>
                            <Nav.Item icon="account">Nav Item 4</Nav.Item>
                            <Nav.Item icon="account">Nav Item 5</Nav.Item>
                            <Nav.Item icon="account">Nav Item 6</Nav.Item>
                            <Nav.Item icon="account">Nav Item 7</Nav.Item>
                        </Nav>
                    </Shell.Navigation>
                    <Shell.Content>
                        <div style={{ minHeight: 1200, background: '#fff' }} />
                    </Shell.Content>
                    <Shell.ToolDock>
                        <Shell.ToolDockItem>
                            <Icon type="calendar" />
                        </Shell.ToolDockItem>
                        <Shell.ToolDockItem>
                            <Icon type="atm" />
                        </Shell.ToolDockItem>
                        <Shell.ToolDockItem>
                            <Icon type="account" />
                        </Shell.ToolDockItem>
                    </Shell.ToolDock>
                </Shell>
            );
            // 获取 .next-aside-navigation 元素并检查其样式
            cy.get('.next-aside-navigation').as('navigationElement');
            // 检查宽度是否为零
            cy.get('@navigationElement').invoke('width').should('eq', 0);
            // 检查 overflow 样式是否为 hidden
            cy.get('@navigationElement').invoke('css', 'overflow').should('eq', 'hidden');
        });
    });
});
