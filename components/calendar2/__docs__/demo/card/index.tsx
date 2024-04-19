import React from 'react';
import ReactDOM from 'react-dom';
import { Calendar2 } from '@alifd/next';
import type { CalendarProps } from '@alifd/next/lib/calendar2';

const onDateChange: CalendarProps['onSelect'] = value => {
    console.log(value);
};

ReactDOM.render(
    <div className="wrapped-calendar">
        <Calendar2 onSelect={onDateChange} shape="card" />
    </div>,
    mountNode
);
