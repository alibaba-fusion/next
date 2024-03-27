import React from 'react';
import ReactDOM from 'react-dom';
import { NumberPicker } from '@alifd/next';

class App extends React.Component {
    state = {
        value: 0,
        tip: '',
    };

    onChange(value: number) {
        let num: string | number = '';
        if (value >= 0) {
            num = value;
        } else {
            num = `negative ${value * -1}`;
        }
        this.setState({
            value: value,
            tip: `${num}`,
        });
    }
    render() {
        const { value, tip } = this.state;
        return (
            <div>
                <span id="a11y-number-picker" aria-live="assertive" aria-label={tip}></span>
                <NumberPicker
                    type="inline"
                    value={value}
                    onChange={this.onChange.bind(this)}
                    upBtnProps={{ 'aria-label': 'increasing button' }}
                    downBtnProps={{ 'aria-label': 'decreasing button' }}
                    aria-labelledby="a11y-number-picker"
                />
            </div>
        );
    }
}
ReactDOM.render(<App />, mountNode);
