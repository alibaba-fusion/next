# 禁用状态

- order: 3

`Radio`禁用状态。

:::lang=en-us
# Disabled
- order: 3
Disabled state of `Radio`.
:::

---

````jsx
import { Radio, Switch } from '@alifd/next';

class App extends React.Component {
  state = {
    disabled: true,
  };

  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };

  render() {
    return (
      <React.Fragment>
        disabled: <Switch size="small" defaultChecked onChange={this.toggleDisabled} style={{verticalAlign: "middle"}}/>
        <br />
        <br />
        <br />
        <Radio defaultChecked={false} disabled={this.state.disabled} style={{ marginRight: 10 }}>
          Disabled
        </Radio>
        <Radio defaultChecked disabled={this.state.disabled}>
          Disabled
        </Radio>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, mountNode);
````
