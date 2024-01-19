import ReactDOM from 'react-dom';

import React, { useState } from 'react';
import { DatePicker2 } from '@alifd/next';

const { RangePicker } = DatePicker2;

const App = () => {
    const [dates, setDates] = useState(null);
    const [value, setValue] = useState(null);
    const disabledDate = current => {
        if (!dates) {
            return false;
        }
        const tooLate = dates[0] && current.diff(dates[0], 'days') >= 7;
        const tooEarly = dates[1] && dates[1].diff(current, 'days') >= 7;
        return !!tooEarly || !!tooLate;
    };

    return (
        <RangePicker
            value={dates || value}
            disabledDate={disabledDate}
            onCalendarChange={val => {
                setDates(val);
            }}
            onChange={val => {
                setValue(val);
            }}
        />
    );
};

ReactDOM.render(<App />, mountNode);
