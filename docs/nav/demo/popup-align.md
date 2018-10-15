# 对齐方式

- order: 5

当 Nav 的 mode="popup" 时，popAlign 可控制弹出子导航的对齐方式。

:::lang=en-us
# Popup alignment

- order: 5

When you set mode of Nav to popup, popAlign could controls the alignment of the pop sub navigation.
:::

---

````jsx
import { Nav, Radio } from '@alifd/next';

const { Item, SubNav } = Nav;

class App extends React.Component {
    state = {
        popupAlign: 'follow'
    }

    setValue(popupAlign) {
        this.setState({
            popupAlign
        });
    }

    render() {
        const { popupAlign } = this.state;

        return (
            <div>
                <div className="demo-ctl">
                    <Radio.Group shape="button" size="medium" value={popupAlign} onChange={this.setValue.bind(this)}>
                        <Radio value="follow">popupAlign="follow"</Radio>
                        <Radio value="outside">popupAlign="outside"</Radio>
                    </Radio.Group>
                </div>
                <Nav style={{ height: 400, width: 240 }} mode="popup" popupAlign={popupAlign} defaultOpenKeys={['sub-nav-2']}>
                    <SubNav key="sub-nav-1"label="Sub Nav 1">
                        <Item key="1">Item 1</Item>
                    </SubNav>
                    <SubNav key="sub-nav-2" label="Sub Nav 2">
                        <Item key="1">Item 1</Item>
                        <Item key="2">Item 2</Item>
                    </SubNav>
                    <SubNav key="sub-nav-3" label="Sub Nav 3">
                        <Item key="1">Item 1</Item>
                        <Item key="2">Item 2</Item>
                        <Item key="3">Item 3</Item>
                    </SubNav>
                    <SubNav key="sub-nav-4" label="Sub Nav 4">
                        <Item key="1">Item 1</Item>
                        <Item key="2">Item 2</Item>
                        <Item key="3">Item 3</Item>
                        <Item key="4">Item 4</Item>
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
    margin: 5px;
}
````
