import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from '@alifd/next';

const { RangePicker } = DatePicker;

ReactDOM.render(
    <div>
        <DatePicker disabled />
        <br />
        <br />
        <RangePicker disabled />
    </div>,
    mountNode
);
