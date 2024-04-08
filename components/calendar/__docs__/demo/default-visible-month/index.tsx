import React from 'react';
import ReactDOM from 'react-dom';
import { Calendar } from '@alifd/next';
import moment from 'moment';
import { type CalendarProps } from '@alifd/next/lib/calendar';

const onSelect: CalendarProps['onSelect'] = value => {
    console.log(value.format('L'));
};

const onVisibleMonthChange: CalendarProps['onVisibleMonthChange'] = (value, reason) => {
    console.log('Visible month changed to %s from <%s>', value.format('YYYY-MM'), reason);
};

ReactDOM.render(
    <Calendar
        onSelect={onSelect}
        defaultVisibleMonth={() => moment('2018-01', 'YYYY-MM', true)}
        onVisibleMonthChange={onVisibleMonthChange}
    />,
    mountNode
);
