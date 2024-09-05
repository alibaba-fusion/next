import React from 'react';
import ReactDOM from 'react-dom';
import { Search, Icon, Nav, Shell, Radio } from '@alifd/next';

const { Item } = Nav;
type deviceType = 'tablet' | 'desktop' | 'phone';

class App extends React.Component {
    state: { device: deviceType; navcollapse: boolean } = {
        device: 'desktop',
        navcollapse: false,
    };
    onChange = (device: deviceType) => {
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

        this.setState({
            navcollapse: visible,
        });
    };

    render() {
        return (
            <div>
                <Radio.Group
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
                        <div className="rectangular"></div>
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
                            <Nav.Item icon="account">Nav Item 1</Nav.Item>
                            <Nav.Item icon="calendar">Nav Item 2</Nav.Item>
                            <Nav.Item icon="atm">Nav Item 3</Nav.Item>
                            <Nav.Item icon="account">Nav Item 4</Nav.Item>
                            <Nav.Item icon="account">Nav Item 5</Nav.Item>
                            <Nav.Item icon="account">Nav Item 6</Nav.Item>
                            <Nav.Item icon="account">Nav Item 7</Nav.Item>
                        </Nav>
                        <div
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

                    <Shell.LocalNavigation>
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
                        <div style={{ minHeight: 1200, background: '#fff' }}></div>
                    </Shell.Content>
                    <Shell.Footer>
                        <span>Alibaba Fusion</span>
                        <span>@ 2019 Alibaba Piecework 版权所有</span>
                    </Shell.Footer>

                    <Shell.Ancillary />

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

ReactDOM.render(<App />, mountNode);
