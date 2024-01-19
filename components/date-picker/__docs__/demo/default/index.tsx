import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from '@alifd/next';
import moment from 'moment';

const { RangePicker, MonthPicker, YearPicker } = DatePicker;
const startValue = moment('2017-11-20', 'YYYY-MM-DD', true);
const endValue = moment('2017-12-15', 'YYYY-MM-DD', true);
const timeStamp = moment(1581938105000);
const onChange = val => console.log(val);

ReactDOM.render(
    <div>
        <DatePicker defaultValue={startValue} onChange={onChange} />
        <br />
        <br />
        <DatePicker defaultValue={timeStamp} onChange={onChange} />
        <br />
        <br />
        <MonthPicker defaultValue={startValue} onChange={onChange} />
        <br />
        <br />
        <YearPicker defaultValue={startValue} onChange={onChange} />
        <br />
        <br />
        <RangePicker type="year" defaultValue={[startValue, endValue]} onChange={onChange} />
        <br />
        <br />
        <RangePicker type="month" defaultValue={[startValue, endValue]} onChange={onChange} />
        <br />
        <br />
        <RangePicker defaultValue={[startValue, endValue]} onChange={onChange} />
    </div>,
    mountNode
);
