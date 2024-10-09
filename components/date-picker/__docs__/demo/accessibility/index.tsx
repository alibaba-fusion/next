import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from '@alifd/next';

const { RangePicker } = DatePicker;
const onChange = (val: unknown) => console.log(val);

ReactDOM.render(
    <div>
        <DatePicker
            dateInputAriaLabel="date input"
            inputProps={{ 'aria-label': 'date picker main' }}
            onChange={onChange}
        />
        <br />
        <br />
        <RangePicker
            startDateInputAriaLabel="start date"
            startTimeInputAriaLabel="start time"
            endDateInputAriaLabel="end date"
            endTimeInputAriaLabel="end time"
            onChange={onChange}
            inputProps={{ 'aria-label': 'range picker main' }}
        />
    </div>,
    mountNode
);
