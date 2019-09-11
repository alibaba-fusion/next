# 复合类型

- order: 3

全集

:::lang=en-us
# Type

- order: 3

With all components.

:::

---

````jsx
import { Menu, Search, Icon, Nav, Breadcrumb, Card, Tab, Shell, Radio } from '@alifd/next';

const { SubNav, Item, Group, Divider } = Nav;

class App extends React.Component {
   state = {
        device: 'desktop'
    }
    onChange = device => {
        this.setState({
            device
        });
    }

    btnClick = () => {
        this.setState({
            navcollapse: !this.state.navcollapse
        });
    }

    triggerClick = (e, currentCollapse) => {
        console.log(e, currentCollapse)
        this.setState({
            navcollapse: !currentCollapse
        });
    }

    render() {
        return (<div>
            <Radio.Group style={{marginBottom: '10px'}} onChange={this.onChange} defaultValue="desktop">
                <Radio value="phone">phone</Radio>
                <Radio value="tablet">tablet</Radio>
                <Radio value="desktop">desktop</Radio>
            </Radio.Group>
            <Shell className={"iframe-hack"} device={this.state.device}>
                <Shell.Branding>
                    <div className="rectangular"></div>
                    <span style={{marginLeft: 10, color: '#FFF'}}>App Name</span>
                </Shell.Branding>
                <Shell.Navigation direction="hoz">
                    <Search key="2" shape="simple" type="dark" palceholder="Search" style={{width: '200px'}}/>
                </Shell.Navigation>
                <Shell.Action>
                    <Icon type="ic_tongzhi" />
                    <img src="https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png" className="avatar" alt="用户头像" />
                    <span style={{marginLeft: 10, color: '#FFF'}}>MyName</span>
                </Shell.Action>

                <Shell.Navigation trigger={null} collapse={this.state.navcollapse}>
                    <Nav type="primary" embeddable>
                        <Nav.Item icon="account">Nav Item 1</Nav.Item>
                        <Nav.Item icon="calendar">Nav Item 2</Nav.Item>
                        <Nav.Item icon="atm">Nav Item 3</Nav.Item>
                        <Nav.Item icon="account">Nav Item 4</Nav.Item>
                        <Nav.Item icon="account">Nav Item 5</Nav.Item>
                        <Nav.Item icon="account">Nav Item 6</Nav.Item>
                        <Nav.Item icon="account">Nav Item 7</Nav.Item>
                    </Nav>
                <div className="my-trigger-nav" onClick={this.btnClick}>
                    {this.state.navcollapse ? '>' : '<'}
                </div>
                </Shell.Navigation>

                <Shell.LocalNavigation>
                    <Nav embeddable>
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
                    <div style={{minHeight: 1200, background: '#fff'}}></div>
                </Shell.Content>
                <Shell.Footer>
                    <span>Alibaba Fusion</span>
                    <span>@ 2019 Alibaba Piecework 版权所有</span>
                </Shell.Footer>

                <Shell.Ancillary>
                </Shell.Ancillary>

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
        </div>);
    }
}

ReactDOM.render((
  <App />
), mountNode);
````
````css
.my-trigger-nav {
  min-height: 30px;
  color: #fff;
  background: #333;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}
.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  vertical-align: middle;
}
.rectangular {
  width: 32px;
  height: 32px;
  background: #555;
}

.iframe-hack {
  width: 100%;
  height: 500px;
}

.next-shell-action .next-icon {
  margin: 0 30px;
  color: #fff;
}
````
