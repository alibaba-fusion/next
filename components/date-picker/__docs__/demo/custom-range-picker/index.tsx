import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from '@alifd/next';
import { type Moment } from 'moment';
import type { DatePickerProps } from '@alifd/next/types/date-picker';

class CustomRangePicker extends React.Component {
    state: {
        startValue: Moment | null;
        endValue: Moment | null;
        endOpen: boolean;
    } = {
        startValue: null,
        endValue: null,
        endOpen: false,
    };

    disabledStartDate: DatePickerProps['disabledDate'] = startValue => {
        const { endValue } = this.state;
        if (!startValue || !endValue) {
            return false;
        }
        return startValue.valueOf() > endValue.valueOf();
    };

    disabledEndDate: DatePickerProps['disabledDate'] = endValue => {
        const { startValue } = this.state;
        if (!endValue || !startValue) {
            return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
    };

    onChange = (stateName: 'startValue' | 'endValue', value: string | Moment | null) => {
        this.setState({
            [stateName]: value,
        });
    };

    onStartChange: DatePickerProps['onChange'] = value => {
        this.onChange('startValue', value);
    };

    onEndChange: DatePickerProps['onChange'] = value => {
        this.onChange('endValue', value);
    };

    handleStartOpenChange: DatePickerProps['onVisibleChange'] = open => {
        if (!open) {
            this.setState({ endOpen: true });
        }
    };

    handleEndOpenChange: DatePickerProps['onVisibleChange'] = open => {
        this.setState({ endOpen: open });
    };

    render() {
        const { endOpen } = this.state;
        return (
            <div>
                <DatePicker
                    disabledDate={this.disabledStartDate}
                    placeholder="Departure Date"
                    onChange={this.onStartChange}
                    onVisibleChange={this.handleStartOpenChange}
                />
                <span className="custom-sep">-</span>
                <DatePicker
                    disabledDate={this.disabledEndDate}
                    placeholder="Return Date"
                    onChange={this.onEndChange}
                    visible={endOpen}
                    onVisibleChange={this.handleEndOpenChange}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <CustomRangePicker />
    </div>,
    mountNode
);
