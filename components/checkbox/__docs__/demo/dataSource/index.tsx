import React from 'react';
import ReactDOM from 'react-dom';
import { Checkbox } from '@alifd/next';
import { type GroupProps } from '@alifd/next/lib/checkbox';

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
    state = {
        value: 'apple',
    };

    onChange: GroupProps['onChange'] = value => {
        this.setState({
            value: value,
        });
    };

    render() {
        return (
            <Checkbox.Group dataSource={list} value={this.state.value} onChange={this.onChange} />
        );
    }
}

ReactDOM.render(<App />, mountNode);
