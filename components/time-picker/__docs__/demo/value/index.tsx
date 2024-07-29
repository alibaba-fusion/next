import React from 'react';
import ReactDOM from 'react-dom';
import { TimePicker } from '@alifd/next';
import moment, { type Moment } from 'moment';
import { type TimePickerProps } from '@alifd/next/types/time-picker';

class ControlledTimePicker extends React.Component<{ onChange: TimePickerProps['onChange'] }> {
    state = {
        value: moment('12:00:00', 'HH:mm:ss', true),
    };

    onSelect: TimePickerProps['onChange'] = value => {
        this.setState({ value });
        this.props.onChange!(value);
    };

    render() {
        return <TimePicker value={this.state.value} onChange={this.onSelect} />;
    }
}

ReactDOM.render(
    <ControlledTimePicker onChange={val => console.log((val as Moment).format('HH:mm:ss'))} />,
    mountNode
);
