import React from 'react';
import ReactDOM from 'react-dom';

import { NumberPicker } from '@alifd/next';

interface AppState {
    value: number;
    tip: string;
}

class App extends React.Component<any, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: 0,
            tip: '',
        };
        this.onChange = this.onChange.bind(this);
    }
    onChange(value: number, e: Event) {
        let num = '';
        if (value >= 0) {
            num = value.toString();
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
                    onChange={this.onChange}
                    upBtnProps={{ 'aria-label': 'increasing button' }}
                    downBtnProps={{ 'aria-label': 'decreasing button' }}
                    aria-labelledby="a11y-number-picker"
                />
            </div>
        );
    }
}
ReactDOM.render(<App />, mountNode);
