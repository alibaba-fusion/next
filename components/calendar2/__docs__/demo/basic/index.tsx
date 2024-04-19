import React from 'react';
import ReactDOM from 'react-dom';
import { Calendar2 } from '@alifd/next';
import dayjs from 'dayjs';
import type { CalendarProps } from '@alifd/next/lib/calendar2';

const onDateChange: CalendarProps['onSelect'] = value => {
    console.log(value.format('L'));
};

ReactDOM.render(
    <div>
        <Calendar2 onSelect={onDateChange} defaultValue={dayjs().add(1, 'days')} />
    </div>,
    mountNode
);
