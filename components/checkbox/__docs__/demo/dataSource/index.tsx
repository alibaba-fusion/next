import React from 'react';
import ReactDOM from 'react-dom';
import { Checkbox } from '@alifd/next';

const list = [
    {
        value: 'apple',
        label: 'Apple',
        disabled: false,
    },
    {
        value: 'pear',
        label: 'Pear',
    },
    {
        value: 'orange',
        label: 'Orange',
        disabled: true,
    },
];

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 'apple',
        };
    }

    onChange = value => {
        this.setState({
            value: value,
        });
    };

    render() {
        return (
            <Checkbox.Group
                dataSource={list}
                size="small"
                value={this.state.value}
                onChange={this.onChange}
            />
        );
    }
}

ReactDOM.render(<App />, mountNode);
