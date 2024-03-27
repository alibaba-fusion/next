import React from 'react';
import ReactDOM from 'react-dom';
import { Radio } from '@alifd/next';

const RadioGroup = Radio.Group;

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

    onChange = (value: string) => {
        this.setState({
            value: value,
        });
        console.log('onChange', value);
    };

    render() {
        return (
            <div>
                normal:{' '}
                <RadioGroup dataSource={list} value={this.state.value} onChange={this.onChange} />
                <br />
                <br />
                <br />
                disabled:{' '}
                <RadioGroup
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
