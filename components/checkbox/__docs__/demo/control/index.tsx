import React from 'react';
import ReactDOM from 'react-dom';
import { Checkbox } from '@alifd/next';

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
    constructor(props) {
        super(props);

        this.state = {
            value: 'orange',
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        this.setState({
            value: value,
        });
        console.log('onChange', value);
    }

    onClick(e) {
        console.log('onClick', e);
    }

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
