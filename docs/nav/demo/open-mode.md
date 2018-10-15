# 展开模式

- order: 4

当 Nav 的 mode="inline" 时，openMode 可控制同级内联子导航的展开数量。

:::lang=en-us
# Open mode

- order: 4

When yout set mode of Nav to inline, openMode could controls the number of expanded sub navigation at same time.
:::

---

````jsx
import { Nav, Radio } from '@alifd/next';

const { Item, SubNav } = Nav;

class App extends React.Component {
    state = {
        openMode: 'single'
    }

    setValue(openMode) {
        this.setState({
            openMode
        });
    }

    render() {
        const { openMode } = this.state;

        return (
            <div>
                <div className="demo-ctl">
                    <Radio.Group shape="button" size="medium" value={openMode} onChange={this.setValue.bind(this)}>
                        <Radio value="single">openMode="single"</Radio>
                        <Radio value="multiple">openMode="multiple"</Radio>
                    </Radio.Group>
                </div>
                <Nav style={{ width: 240 }} openMode={openMode}>
                    <SubNav label="Sub Nav 1">
                        <Item>Item 1</Item>
                    </SubNav>
                    <SubNav label="Sub Nav 2">
                        <Item>Item 1</Item>
                        <Item>Item 2</Item>
                        <SubNav label="Sub Nav 1">
                            <Item>Item 1</Item>
                            <Item>Item 2</Item>
                        </SubNav>
                        <SubNav label="Sub Nav 2">
                            <Item>Item 1</Item>
                            <Item>Item 2</Item>
                        </SubNav>
                    </SubNav>
                    <SubNav label="Sub Nav 3">
                        <Item>Item 1</Item>
                        <Item>Item 2</Item>
                        <Item>Item 3</Item>
                        <SubNav label="Sub Nav 1">
                            <Item>Item 1</Item>
                            <Item>Item 2</Item>
                            <Item>Item 3</Item>
                        </SubNav>
                        <SubNav label="Sub Nav 2">
                            <Item>Item 1</Item>
                            <Item>Item 2</Item>
                            <Item>Item 3</Item>
                        </SubNav>
                        <SubNav label="Sub Nav 3">
                            <Item>Item 1</Item>
                            <Item>Item 2</Item>
                            <Item>Item 3</Item>
                        </SubNav>
                    </SubNav>
                    <Item>Item</Item>
                </Nav>
            </div>);
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
