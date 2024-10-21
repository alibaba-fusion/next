import React from 'react';
import ReactDOM from 'react-dom';
import { TimePicker2 } from '@alifd/next';
import dayjs, { type Dayjs } from 'dayjs';
import type { TimePickerProps, ValueType } from '@alifd/next/types/time-picker2';

interface ControlledTimePicker2Props {
    onChange: (value: ValueType) => void;
}
class ControlledTimePicker2 extends React.Component<
    ControlledTimePicker2Props,
    {
        value: Dayjs | null;
        rangeValue: (Dayjs | null)[] | null;
    }
> {
    constructor(props: ControlledTimePicker2Props) {
        super(props);
        this.state = {
            value: dayjs('12:00:00', 'HH:mm:ss', true),
            rangeValue: [dayjs('14:00:00', 'HH:mm:ss'), dayjs('16:00:00', 'HH:mm:ss')],
        };
    }

    onSelect: TimePickerProps['onChange'] = (value: Dayjs | null) => {
        this.setState({ value });
        this.props.onChange(value);
    };

    onRangeSelect: TimePickerProps['onChange'] = (rangeValue: (Dayjs | null)[] | null) => {
        this.setState({ rangeValue });
        this.props.onChange(rangeValue);
    };

    render() {
        return (
            <div>
                <TimePicker2 value={this.state.value} onChange={this.onSelect} />
                <br />
                <br />
                <TimePicker2.RangePicker
                    value={this.state.rangeValue}
                    onChange={this.onRangeSelect}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <ControlledTimePicker2
        onChange={val =>
            Array.isArray(val)
                ? console.log(
                      val[0] && val[0].format('HH:mm:ss'),
                      val[1] && val[1].format('HH:mm:ss')
                  )
                : console.log(val && val.format('HH:mm:ss'))
        }
    />,
    mountNode
);
