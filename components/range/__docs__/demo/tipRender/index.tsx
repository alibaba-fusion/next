import React from 'react';
import ReactDOM from 'react-dom';
import { Range } from '@alifd/next';
import type { RangeValueType } from '@alifd/next/types/range';

interface AppProps {}
class App extends React.Component<AppProps, { value: RangeValueType }> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            value: 128,
        };
    }

    // This callback will be triggered when startValue and endValue aren't equal after moving.
    onChange(value: RangeValueType) {
        console.log('onChange value:', value);
    }

    // This callback will be triggered when startValue and endValue aren't equal after mousedown/mousemove. You can call setState here when using a controlled component.
    onProcess(value: RangeValueType) {
        console.log('onProcess');
        this.setState({ value });
    }

    formatter(value: RangeValueType) {
        return `0 ~ ${value}`;
    }
    render() {
        return (
            <div style={{ margin: '50px' }}>
                <Range
                    defaultValue={256}
                    tipRender={this.formatter.bind(this)}
                    value={this.state.value}
                    onChange={this.onChange.bind(this)}
                    onProcess={this.onProcess.bind(this)}
                    min={0}
                    max={1024}
                    marks={[0, 1024]}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
