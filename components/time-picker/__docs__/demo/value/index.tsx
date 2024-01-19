import React from 'react';
import ReactDOM from 'react-dom';
import { TimePicker } from '@alifd/next';
import moment from 'moment';

class ControlledTimePicker extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: moment('12:00:00', 'HH:mm:ss', true),
        };
    }

    onSelect = value => {
        this.setState({ value });
        this.props.onChange(value);
    };

    render() {
        return <TimePicker value={this.state.value} onChange={this.onSelect} />;
    }
}

ReactDOM.render(
    <ControlledTimePicker onChange={val => console.log(val.format('HH:mm:ss'))} />,
    mountNode
);
