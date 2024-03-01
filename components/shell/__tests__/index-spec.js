import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
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

const Item = Nav.Item;
Enzyme.configure({ adapter: new Adapter() });

const render = element => {
    let inc;
    const container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(element, container, function() {
        inc = this;
    });
    return {
        setProps: props => {
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

class App extends React.Component {
    state = {
        device: 'desktop',
    };
    onChange = device => {
        this.setState({
            device,
        });
    };

    btnClick = () => {
        this.setState({
            navcollapse: !this.state.navcollapse,
        });
    };

    onCollapseChange = (visible, e) => {
        console.log('onCollapseChange:', visible, e);
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
                <Shell className={'iframe-hack'} device={this.state.device} style={{ border: '1px solid #eee' }}>
                    <Shell.Branding>
                        <div className="rectangular" />
                        <span style={{ marginLeft: 10 }}>App Name</span>
                    </Shell.Branding>
                    <Shell.Navigation direction="hoz">
                        <Search key="2" shape="simple" type="dark" placeholder="Search" style={{ width: '200px' }} />
                    </Shell.Navigation>
                    <Shell.Action>
                        <img
                            src="https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png"
                            className="avatar"
                            alt="用户头像"
                        />
                        <span style={{ marginLeft: 10 }}>MyName</span>
                    </Shell.Action>

                    <Shell.Navigation collapse={this.state.navcollapse} onCollapseChange={this.onCollapseChange}>
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

/* eslint-disable */
describe('Shell', () => {
    describe('render', () => {
        let wrapper;

        afterEach(() => {
            wrapper.unmount();
        });

        it('default should work', () => {
            wrapper = render(
                <Shell className={'iframe-hack'} style={{ border: '1px solid #eee' }}>
                    <Shell.Branding>
                        <div className="rectangular" />
                        <span style={{ marginLeft: 10 }}>App Name</span>
                    </Shell.Branding>
                    <Shell.Navigation direction="hoz">
                        <Search key="2" shape="simple" type="dark" placeholder="Search" style={{ width: '200px' }} />
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
        });

        it('default collapse should work', () => {
            let navCollapseCount = 0,
                localCollapseCount = 0,
                anciCollapseCount = 0;
            let navCollapse = false,
                localCollapse = false,
                anciCollapse = false;
            wrapper = render(
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

            wrapper.find('.local-nav-trigger')[0].click();
            wrapper.find('.ancillary-trigger')[0].click();
            wrapper.find('.nav-trigger')[0].click();
            wrapper.find('.nav-trigger')[0].click();

            assert(
                navCollapseCount === 2 &&
                    localCollapseCount === 1 &&
                    anciCollapseCount === 1 &&
                    !navCollapse &&
                    localCollapse &&
                    anciCollapse
            );

            wrapper.find('#custom-nav-trigger')[0].click();

            assert(wrapper.find('.next-shell-navigation.next-shell-collapse'));
        });

        it('should support no header', () => {
            wrapper = render(
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

            assert(wrapper.find('.next-shell-header').length === 0);
        });

        it('should support fixed header', () => {
            wrapper = render(
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

            assert(wrapper.find('.next-shell-header.next-shell-fixed-header').length > 0);
            assert(wrapper.find('.next-aside-navigation.fixed').length > 0);
        });

        it('should support nothing', () => {
            wrapper = render(
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

            assert(wrapper.find('.next-shell-header').length === 0);
        });

        it('should support nothing', () => {
            wrapper = render(
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

            assert(wrapper.find('.next-shell-header').length === 0);
        });

        it('only tooldock, show header only in phone', () => {
            wrapper = render(
                <Shell className={'iframe-hack'} style={{ border: '1px solid #eee' }}>
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

            wrapper.setProps({
                device: 'tablet',
            });
            assert(wrapper.find('.next-shell-header').length === 0);

            wrapper.setProps({
                device: 'phone',
            });
            assert(wrapper.find('.next-shell-header').length === 1);
        });
    });
});
