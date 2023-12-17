# 受控

- order: 2

通过 `value` 和 `onChange` 实现受控，仅支持通过选择实现受控。

:::lang=en-us
# Controlled

- order: 2

Creating controlled TimePikcer by `value` and `onChange`.

:::

---

````jsx
import { TimePicker } from '@alifd/next';
import moment from 'moment';

class ControlledTimePicker extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: moment('12:00:00', 'HH:mm:ss', true)
        };
    }

    onSelect = (value) => {
        this.setState({ value });
        this.props.onChange(value);
    }

    render() {
        return <TimePicker value={this.state.value} onChange={this.onSelect} />;
    }
}

ReactDOM.render(<ControlledTimePicker onChange={(val) => console.log(val.format('HH:mm:ss'))} />, mountNode);
````
