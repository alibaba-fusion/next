import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from '@alifd/next';

const { RangePicker } = DatePicker;
const onChange = val => console.log(val);

ReactDOM.render(
    <div>
        <DatePicker format="YYYY-M-D" onChange={onChange} />
        <br />
        <br />
        <DatePicker format="YYYY-M-D" onChange={onChange} showTime={{ format: 'HH:mm' }} />
        <br />
        <br />
        <RangePicker format="YYYY-M-D" onChange={onChange} />
        <br />
        <br />
        <RangePicker format="YYYY-M-D" onChange={onChange} showTime={{ format: 'HH:mm' }} />
    </div>,
    mountNode
);
