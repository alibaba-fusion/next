import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from '@alifd/next';

const { RangePicker, MonthPicker, YearPicker, WeekPicker } = DatePicker;
const onChange = val => console.log(val);

ReactDOM.render(
    <div>
        <DatePicker onChange={onChange} /> <br />
        <br />
        <WeekPicker onChange={onChange} /> <br />
        <br />
        <MonthPicker onChange={onChange} /> <br />
        <br />
        <YearPicker onChange={onChange} /> <br />
        <br />
        <RangePicker onChange={onChange} />
        <br />
        <br />
        <RangePicker type="month" onChange={onChange} />
        <br />
        <br />
        <RangePicker type="year" onChange={onChange} />
    </div>,
    mountNode
);
