# 缩起内嵌菜单

- order: 2

内嵌菜单可以被缩起/展开。
Nav背景与环境背景不同? 开启embeddable试试，完美嵌入环境:
- 当开启 `embeddable` 模式后，Nav组件适合被嵌入到有背景色的页面部分，当作导航。可以根据背景色色系选择不同的type；
- 当未开启 `embeddable` 模式时，Nav组件将带有背景色、border、阴影等，可以单独使用。

:::lang=en-us
# Only show icon

- order: 2

Nav could set the iconOnly property to reduce the footprint.
:::

---

````jsx
import { Nav, Switch, Radio } from '@alifd/next';


const { Item, SubNav } = Nav;

class App extends React.Component {
    state = {
        collapse: false,
        embeddable: false,
    }

    onChange = (val) => {
        this.setState({
            collapse: val,
        });
    }

    changeEmbeddable = (embeddable) => {
        this.setState({
            embeddable,
        });
    }

    render() {
        const { collapse, embeddable } = this.state;
        let iconOnly, mode;

        if (collapse) {
            iconOnly = true;
            mode = 'popup';
        } else {
            iconOnly = false;
            mode = 'inline';
        }

        return (
            <div>
                <Switch defaultChecked={false} onChange={this.onChange} size="small" />
                <div className="demo-ctl">
                    <Radio.Group shape="button" size="medium" value={embeddable} onChange={this.changeEmbeddable}>
                        <Radio value>embeddable=true</Radio>
                        <Radio value={false}>embeddable=false</Radio>
                    </Radio.Group>
                </div>
                <Nav style={{ width: '200px' }} embeddable={embeddable} defaultOpenAll defaultSelectedKeys={['0-1']} iconOnly={iconOnly} hasArrow={false} hasTooltip mode={mode}>
                    <Item icon="calendar"> Schedule </Item>
                    <Item icon="email"> Email </Item>
                    <Item icon="help"> Help </Item>
                    <SubNav icon="set" label="Settings">
                        <Item icon="account"> Account </Item>
                        <Item icon="exit"> Exit </Item>
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
