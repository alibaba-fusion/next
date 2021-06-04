# 移动端

- order: 10

device=phone 下会强制设置 type=normal

:::lang=en-us
# Basic Usage

- order: 10

force set type=normal while device=phone

:::
---

````jsx
import { NumberPicker, Radio } from '@alifd/next';

class Demo extends React.Component {
    state = {
        device: 'desktop'
    }

    handleDeviceChange = (device) => {
        this.setState({
            device
        });
    };

    render() {
        return (
            <div>
                <Radio.Group
                    shape="button"
                    value={this.state.device}
                    onChange={this.handleDeviceChange}
                >
                    <Radio value="desktop">desktop</Radio>
                    <Radio value="phone">phone</Radio>
                </Radio.Group>
                <hr/>
                <NumberPicker device={this.state.device}/>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````
