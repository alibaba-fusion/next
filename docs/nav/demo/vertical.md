# 左侧内嵌导航

- order: 1

垂直菜单，子菜单内嵌在菜单区域，四种样式模式可选。

:::lang=en-us
# Only show icon

- order: 2

Vertical navigation, there are four styles to be selected.
:::

---

````jsx
import { Nav, Radio } from '@alifd/next';


const { Item, SubNav } = Nav;

class App extends React.Component {
    state = {
        type: 'normal',
    }

    changeType = (type) => {
        this.setState({
            type,
        });
    }

    render() {
        const { type } = this.state;

        return (
            <div>
                <div className="demo-ctl">
                    <Radio.Group shape="button" size="medium" value={type} onChange={this.changeType}>
                        <Radio value="normal">type="normal"</Radio>
                        <Radio value="primary">type="primary"</Radio>
                        <Radio value="secondary">type="secondary"</Radio>
                        <Radio value="line">type="line"</Radio>
                    </Radio.Group>
                </div>
                <Nav style={{ width: '200px' }} type={type} defaultOpenAll>
                    <Item icon="account">Navigation One</Item>
                    <Item icon="account">Navigation Two</Item>
                    <Item icon="account">Navigation Three</Item>
                    <Item icon="account">Navigation Four</Item>
                    <Item icon="account">Navigation Five</Item>
                    <SubNav icon="account" label="Sub Nav">
                        <Item icon="account">Item 1</Item>
                        <Item icon="account">Item 2</Item>
                        <Item icon="account">Item 3</Item>
                        <Item icon="account">Item 4</Item>
                    </SubNav>
                </Nav>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
````

````css
.demo-ctl {
    background-color: #F1F1F1;
    border-left: 4px solid #0D599A;
    color: #0A7AC3;
    margin-bottom: 20px;
    padding: 5px;
}
.demo-ctl .next-radio-group {
    display: block;
    margin: 5px;
}
````
