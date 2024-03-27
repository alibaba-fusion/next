import React from 'react';
import ReactDOM from 'react-dom';
import { Checkbox } from '@alifd/next';
import { type GroupProps } from '@alifd/next/lib/checkbox';

const list = [
    {
        value: 'appale',
        label: 'Appale',
    },
    {
        value: 'pear',
        label: 'Pear',
    },
    {
        value: 'orange',
        label: 'Orange',
    },
];

class ControlApp extends React.Component {
    state = {
        value: 'orange',
    };

    onChange: GroupProps['onChange'] = value => {
        this.setState({
            value: value,
        });
        console.log('onChange', value);
    };

    render() {
        return (
            <div>
                normal:{' '}
                <Checkbox.Group
                    dataSource={list}
                    value={this.state.value}
                    onChange={this.onChange}
                />
                <br />
                <br />
                disabled:{' '}
                <Checkbox.Group
                    disabled
                    dataSource={list}
                    value={this.state.value}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}

ReactDOM.render(<ControlApp />, mountNode);
