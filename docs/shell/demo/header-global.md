# 头-侧边栏

- order: 1

头部加侧边栏，最通用的布局

:::lang=en-us
# Type

- order: 1

Header with asider.

:::

---

````jsx
import { Menu, Search, Nav, Shell, Radio } from '@alifd/next';

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
    render() {
        return (<div>
            <Radio.Group style={{marginBottom: '10px'}} onChange={this.onChange} defaultValue="desktop">
                <Radio value="phone">phone</Radio>
                <Radio value="tablet">tablet</Radio>
                <Radio value="desktop">desktop</Radio>
            </Radio.Group>
            <Shell className={"iframe-hack"} device={this.state.device} style={{border: '1px solid #eee'}}>
                <Shell.Branding>
                    <div className="rectangular"></div>
                    <span style={{marginLeft: 10}}>App Name</span>
                </Shell.Branding>
                <Shell.Navigation direction="hoz">
                    <Search key="2" shape="simple" type="dark" palceholder="Search" style={{width: '200px'}}/>
                </Shell.Navigation>
                <Shell.Action>
                    <img src="https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png" className="avatar" alt="用户头像" />
                    <span style={{marginLeft: 10}}>MyName</span>
                </Shell.Action>

                <Shell.Navigation>
                    <Nav embeddable  aria-label="global navigation">
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
                    <div style={{minHeight: 1200, background: '#fff'}}></div>
                </Shell.Content>
            </Shell>
        </div>);
    }
}

ReactDOM.render((
  <App />
), mountNode);
````
````css

.avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  vertical-align: middle;
}
.rectangular {
  width: 32px;
  height: 32px;
  background: rgba(0, 0, 0, 0.04);
}
.iframe-hack {
  width: 100%;
  height: 500px;
}
````
