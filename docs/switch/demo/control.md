# 受控开关

- order: 1

受控开关, 是指组件的值由上层组件决定, 如果开关定义了 `value` 属性, 就表示此开关是受控开关.

对于受控开关, 每一次 React 数据渲染时, 都会使用传入的值来更新开关, 开关本身是不能更新自己的状态的.

:::lang=en-us
# Controlled

- order: 1

A controlled switch is a switch with `value` prop, whose state is controlled by its parent component and can't be updated by itself.

:::

---

````jsx
import { Switch } from '@alifd/next';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(checked) {
        this.setState({checked});
    }

    render() {
        return (<div>
            <div className="line">value of switch: {this.state.checked ? 'true' : 'false'}</div>
            <div className="line">
                <Switch checked={this.state.checked} onChange={this.onChange} />
                <Switch checked={this.state.checked} onChange={this.onChange} disabled />
            </div>
        </div>);
    }
}

ReactDOM.render(
    <App />,
    mountNode
);
````

````css
.line {
  margin-bottom: 10px;
}
.next-switch {
  margin-right: 20px;
}
````
