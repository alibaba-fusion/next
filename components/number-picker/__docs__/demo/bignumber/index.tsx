import React from 'react';
import ReactDOM from 'react-dom';
import { NumberPicker } from '@alifd/next';
import type { NumberPickerProps } from '@alifd/next/lib/number-picker';

const step = '0.000000000000000000000001';

const onChange: NumberPickerProps['onChange'] = value => {
    console.log('changed', value);
};

const onCorrect: NumberPickerProps['onCorrect'] = value => {
    console.log('corrected', value);
};

class App extends React.Component {
    state = {
        value: `${Number.MIN_SAFE_INTEGER}`,
    };
    onChange = (value: number) => {
        console.log(value);
        this.setState({
            value,
        });
    };

    render() {
        return (
            <NumberPicker
                style={{ width: 350 }}
                value={this.state.value}
                onChange={this.onChange}
                onCorrect={onCorrect}
                step={step}
                stringMode
            />
        );
    }
}

const maxInteger = Math.pow(2, 53) - 1;

ReactDOM.render(
    <div>
        <NumberPicker
            style={{ width: 150 }}
            defaultValue="1"
            step="0.00000000000001"
            onChange={onChange}
            onCorrect={onCorrect}
            stringMode
        />
        <br />
        <br />
        <NumberPicker
            style={{ width: 300 }}
            defaultValue={maxInteger}
            step="0.00000000000001"
            onChange={onChange}
            onCorrect={onCorrect}
            stringMode
        />
        <br />
        <br />
        <App />
    </div>,
    mountNode
);
