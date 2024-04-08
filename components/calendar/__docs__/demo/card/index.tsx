import React from 'react';
import ReactDOM from 'react-dom';
import { Calendar } from '@alifd/next';
import { type CalendarProps } from '@alifd/next/lib/calendar';

const onDateChange: CalendarProps['onSelect'] = value => {
    console.log(value.format('L'));
};

ReactDOM.render(
    <div className="wrapped-calendar">
        <Calendar onSelect={onDateChange} shape="card" />
    </div>,
    mountNode
);
