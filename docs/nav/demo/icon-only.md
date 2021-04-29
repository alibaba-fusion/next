# 只显示图标

- order: 2
- debug: true

Nav 可设置 iconOnly 属性，只显示图标，以减少占用空间。

:::lang=en-us
# Only show icon

- order: 2

Nav could set the iconOnly property to reduce the footprint.
:::

---

````jsx
import { Nav, Radio, Icon, Input } from '@alifd/next';


const { Item, SubNav } = Nav;

class App extends React.Component {
    state = {
        iconOnly: false,
        hasTooltip: true,
        hasArrow: true,
        iconOnlyWidth: 58,
    }

    setValue(name, value) {
        this.setState({
            [name]: value === 'true'
        });
    }

    setWidth(value) {
        this.setState({
            iconOnlyWidth: value
        });
    }

    render() {
        const { iconOnly, hasTooltip, hasArrow, iconOnlyWidth } = this.state;
        return (
            <div>
                <div className="demo-ctl">
                    <Radio.Group shape="button" size="medium" value={iconOnly ? 'true' : 'false'} onChange={this.setValue.bind(this, 'iconOnly')}>
                        <Radio value="true">iconOnly=true</Radio>
                        <Radio value="false">iconOnly=false</Radio>
                    </Radio.Group>
                    {iconOnly ?
                        <Radio.Group shape="button" size="medium" value={iconOnlyWidth} onChange={this.setWidth.bind(this)}>
                            <Radio value={58}>iconOnlyWidth=58</Radio>
                            <Radio value={80}>iconOnlyWidth=80</Radio>
                        </Radio.Group> : null}
                    {iconOnly ?
                        <Radio.Group shape="button" size="medium" value={hasArrow ? 'true' : 'false'} onChange={this.setValue.bind(this, 'hasArrow')}>
                            <Radio value="true">hasArrow=true</Radio>
                            <Radio value="false">hasArrow=false</Radio>
                        </Radio.Group> : null}
                    {iconOnly ?
                        <Radio.Group shape="button" size="medium" value={hasTooltip ? 'true' : 'false'} onChange={this.setValue.bind(this, 'hasTooltip')}>
                            <Radio value="true">hasTooltip=true</Radio>
                            <Radio value="false">hasTooltip=false</Radio>
                        </Radio.Group> : null}
                </div>
                <Nav style={{ width: '200px' }} iconOnlyWidth={this.state.iconOnlyWidth} iconOnly={iconOnly} hasArrow={hasArrow} hasTooltip={hasTooltip}>
                    <Item icon="account">Navigation One</Item>
                    <Item icon="account">Navigation Two</Item>
                    <Item icon="account">Navigation Three</Item>
                    <Item icon={"atm"}>Navigation Four</Item>
                    <Item icon={<span>QAQ</span>}>Navigation Five</Item>
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
    margin: 5px;
}
````
