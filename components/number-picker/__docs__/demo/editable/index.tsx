import React from 'react';
import ReactDOM from 'react-dom';
import { NumberPicker, Button } from '@alifd/next';

class App extends React.Component {
    state = {
        editable: false,
        value: 0,
    };

    toogle() {
        this.setState({
            editable: !this.state.editable,
        });
    }

    onChange(value: number) {
        console.log('changed', value);
        this.setState({
            value: value,
        });
    }

    render() {
        return (
            <div>
                <NumberPicker
                    onChange={this.onChange.bind(this)}
                    value={this.state.value}
                    editable={this.state.editable}
                />
                <br />
                <br />
                <Button onClick={this.toogle.bind(this)}>
                    {!this.state.editable ? 'Toggle to editable' : 'Toggle to uneditable'}
                </Button>
            </div>
        );
    }
}
ReactDOM.render(<App />, mountNode);
