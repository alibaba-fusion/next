import React from 'react';
import ReactDOM from 'react-dom';
import { NumberPicker, Button } from '@alifd/next';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: false,
            value: 0,
        };
    }

    toogle() {
        this.setState({
            editable: !this.state.editable,
        });
    }

    onChange(value) {
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
                    Toggle to {!this.state.editable ? 'editable' : 'uneditable'}
                </Button>
            </div>
        );
    }
}
ReactDOM.render(<App />, mountNode);
