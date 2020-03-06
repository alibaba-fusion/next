# 定制

- order: 1

Nav 提供了丰富的配置，可以进行个性化定制。

:::lang=en-us
# Customize

- order: 1

Nav provides a lot of configurations that can be personalized.
:::

---

````jsx
import { Nav, Radio } from '@alifd/next';


const { Item, SubNav } = Nav;

class App extends React.Component {
    state = {
        type: 'normal',
        direction: 'hoz',
        activeDirection: null,
        triggerType: 'click',
        mode: 'inline'
    }

    setValue(name, value) {
        this.setState({
            [name]: value === '' ? null : value
        });
    }

    setTriggerType(triggerType) {
        this.setState({
            triggerType
        });
    }

    setModeType(mode) {
        this.setState({
            mode
        });
    }

    render() {
        const { type, direction, activeDirection, triggerType, mode } = this.state;

        return (
            <div>
                <div className="demo-ctl">
                    <Radio.Group shape="button" size="medium" value={type} onChange={this.setValue.bind(this, 'type')}>
                        <Radio value="normal">type="normal"</Radio>
                        <Radio value="primary">type="primary"</Radio>
                        <Radio value="secondary">type="secondary"</Radio>
                        <Radio value="line">type="line"</Radio>
                    </Radio.Group>
                    <Radio.Group shape="button" size="medium" value={direction} onChange={this.setValue.bind(this, 'direction')}>
                        <Radio value="hoz">direction="hoz"</Radio>
                        <Radio value="ver">direction="ver"</Radio>
                    </Radio.Group>
                    <Radio.Group shape="button" size="medium" value={activeDirection === null ? '' : activeDirection} onChange={this.setValue.bind(this, 'activeDirection')}>
                        <Radio value="">activeDirection=null</Radio>
                        {direction === 'hoz' ? <Radio value="top">activeDirection="top"</Radio> : null}
                        {direction === 'hoz' ? <Radio value="bottom">activeDirection="bottom"</Radio> : null}
                        {direction === 'ver' ? <Radio value="left">activeDirection="left"</Radio> : null}
                        {direction === 'ver' ? <Radio value="right">activeDirection="right"</Radio> : null}
                    </Radio.Group>
                    <Radio.Group shape="button" size="medium" value={triggerType} onChange={this.setTriggerType.bind(this)}>
                        <Radio value="click">triggerType="click"</Radio>
                        <Radio value="hover">triggerType="hover"</Radio>
                    </Radio.Group>
                    <Radio.Group shape="button" size="medium" value={mode} onChange={this.setModeType.bind(this)}>
                        <Radio value="inline">mode="inline"</Radio>
                        <Radio value="popup">mode="popup"</Radio>
                    </Radio.Group>
                </div>
                <Nav className="custom-nav" mode={mode} type={type} direction={direction} activeDirection={activeDirection} triggerType={triggerType}>
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <SubNav label="Sub Nav">
                        <Item>Item 3</Item>
                        <Item>Item 4</Item>
                        <SubNav label="Sub Nav">
                            <Item>Item 5</Item>
                            <Item>Item 6</Item>
                        </SubNav>
                    </SubNav>
                    <Item icon="account">
                        <a href="http://www.taobao.com" target="_blank">Taobao</a>
                    </Item>
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
.custom-nav.next-hoz .next-nav-item {
    width: 100px;
}
.custom-nav.next-ver {
    width: 200px;
}
````
