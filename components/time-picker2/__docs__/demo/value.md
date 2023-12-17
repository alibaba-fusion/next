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
import { TimePicker2 } from '@alifd/next';
import dayjs from 'dayjs';

class ControlledTimePicker2 extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: dayjs('12:00:00', 'HH:mm:ss', true),
            rangeValue: [dayjs('14:00:00', 'HH:mm:ss'), dayjs('16:00:00', 'HH:mm:ss')],
        };
    }

    onSelect = (value) => {
        this.setState({ value });
        this.props.onChange(value);
    }

    onRangeSelect = (rangeValue) => {
        this.setState({ rangeValue });
        this.props.onChange(rangeValue);
    }

    render() {
        return (<div>
            <TimePicker2 value={this.state.value} onChange={this.onSelect} />
            <br /><br />
            <TimePicker2.RangePicker value={this.state.rangeValue} onChange={this.onRangeSelect} />
        </div>);
    }
}

ReactDOM.render(<ControlledTimePicker2 onChange={(val) => Array.isArray(val) ? console.log(val[0] && val[0].format('HH:mm:ss'), val[1] && val[1].format('HH:mm:ss')) : console.log(val && val.format('HH:mm:ss'))} />, mountNode);
````
