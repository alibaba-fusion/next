# 自定义日期范围选择

- order: 5
- debug: true

如果默认的 RangePicker 在交互上无法满足您的使用需求，还可以基于 DatePicker 封装实现类似的功能。
例如，示例中的日期选择可以自由的更改开始或结束日期，而不必每次选择时重置日期。

:::lang=en-us
# Custom RangePicker

- order: 5
- debug: true

Create your own RangePicker with two DatePickers.

:::

---

````jsx
import { DatePicker } from '@alifd/next';

class CustomRangePicker extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            startValue: null,
            endValue: null,
            endOpen: false
        };
    }

    disabledStartDate = (startValue) => {
        const { endValue } = this.state;
        if (!startValue || !endValue) {
            return false;
        }
        return startValue.valueOf() > endValue.valueOf();
    }

    disabledEndDate = (endValue) => {
        const { startValue } = this.state;
        if (!endValue || !startValue) {
            return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
    }

    onChange = (stateName, value) => {
        this.setState({
            [stateName]: value
        });
    }

    onStartChange = (value) => {
        this.onChange('startValue', value);
    }

    onEndChange = value => {
        this.onChange('endValue', value);
    }

    handleStartOpenChange = (open) => {
        if (!open) {
            this.setState({ endOpen: true });
        }
    }

    handleEndOpenChange = (open) => {
        this.setState({ endOpen: open });
    }

    render() {
        const { endOpen } = this.state;
        return (
            <div>
                <DatePicker
                    disabledDate={this.disabledStartDate}
                    placeholder="Departure Date"
                    onChange={this.onStartChange}
                    onVisibleChange={this.handleStartOpenChange}
                />
                <span className="custom-sep">-</span>
                <DatePicker
                    disabledDate={this.disabledEndDate}
                    placeholder="Return Date"
                    onChange={this.onEndChange}
                    visible={endOpen}
                    onVisibleChange={this.handleEndOpenChange}
                />
            </div>
        );
    }
}

ReactDOM.render(<div>
    <CustomRangePicker />
</div>, mountNode);
````

````css
.custom-sep {
    margin: 0 6px;
    color: #999;
}
````
