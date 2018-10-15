# 不可用

- order: 2

Switch 失效状态。

:::lang=en-us
# disabled

- order: 2

Disabled switch.

:::

---

````jsx
import { Button, Icon, Switch } from '@alifd/next';



class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true
        };
    }

    toggle() {
        this.setState(Object.assign({}, this.state, {
            disabled: !this.state.disabled
        }));
    }

    render() {
        return (<div>
            <Switch checkedChildren={<Icon type="select" size="small" />}
                unCheckedChildren={<Icon type="close" size="small" />} disabled={this.state.disabled} />
            <Switch checkedChildren="on" unCheckedChildren="off" disabled={this.state.disabled} />
            <br />
            <br />
            <Button type="primary" onClick={this.toggle.bind(this)}>Toggle disabled</Button>
        </div>);
    }
}

ReactDOM.render(<Test />, mountNode);
````
