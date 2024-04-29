import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from '@alifd/next';
import type { InputProps } from '@alifd/next/types/input';

class App extends React.Component {
    state = {
        value: '',
    };

    onChange(value: string) {
        console.log('onChange', value);
        this.setState({
            value,
        });
    }

    onKeyDown: NonNullable<InputProps['onKeyDown']> = (e, opts) => {
        console.log('onKeyDown', opts);
    };

    render() {
        return (
            <div>
                <Input
                    trim
                    placeholder="cant not input space"
                    aria-label="cant not input space"
                    onChange={this.onChange.bind(this)}
                    onKeyDown={this.onKeyDown.bind(this)}
                />
            </div>
        );
    }
}
ReactDOM.render(<App />, mountNode);
