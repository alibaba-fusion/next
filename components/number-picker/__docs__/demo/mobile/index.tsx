import React from 'react';
import ReactDOM from 'react-dom';
import { NumberPicker, Radio } from '@alifd/next';

class Demo extends React.Component {
    state: { device: 'phone' | 'tablet' | 'desktop' } = {
        device: 'desktop',
    };

    handleDeviceChange = (device: 'phone' | 'tablet' | 'desktop') => {
        this.setState({
            device,
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
                    <Radio value="tablet">tablet</Radio>
                    <Radio value="phone">phone</Radio>
                </Radio.Group>
                <hr />
                <NumberPicker device={this.state.device} />
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
