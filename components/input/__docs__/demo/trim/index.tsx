import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from '@alifd/next';

class App extends React.Component {
    state = {
        value: '',
    };

    onChange(value) {
        console.log('onChange', value);
        this.setState({
            value,
        });
    }

    onKeyDown(e, opts) {
        console.log('onKeyDown', opts);
    }

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
