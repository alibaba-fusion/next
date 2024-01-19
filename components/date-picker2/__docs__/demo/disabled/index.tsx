import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker2 } from '@alifd/next';

const { RangePicker } = DatePicker2;

ReactDOM.render(
    <div>
        <DatePicker2 disabled defaultValue="2021-02-12" />
        <br />
        <br />
        <RangePicker disabled defaultValue={['2021-01-12', '2021-02-12']} />
        <br />
        <br />
        <RangePicker disabled={[false, true]} defaultValue={['2021-01-12', '2021-02-12']} />
        <br />
        <br />
    </div>,
    mountNode
);
