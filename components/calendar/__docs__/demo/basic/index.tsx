import React from 'react';
import ReactDOM from 'react-dom';
import { Calendar } from '@alifd/next';
import moment from 'moment';
import { type CalendarProps } from '@alifd/next/lib/calendar';

const onDateChange: CalendarProps['onSelect'] = value => {
    console.log(value.format('L'));
};

ReactDOM.render(
    <div>
        <Calendar onSelect={onDateChange} defaultValue={moment().add(1, 'days')} />
    </div>,
    mountNode
);
