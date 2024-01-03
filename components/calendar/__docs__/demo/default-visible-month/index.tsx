import React from 'react';
import ReactDOM from 'react-dom';
import { Calendar } from '@alifd/next';
import moment from 'moment';

function onSelect(value) {
    console.log(value.format('L'));
}

function onVisibleMonthChange(value, reason) {
    console.log('Visible month changed to %s from <%s>', value.format('YYYY-MM'), reason);
}

ReactDOM.render(
    <Calendar
        onSelect={onSelect}
        defaultVisibleMonth={() => moment('2018-01', 'YYYY-MM', true)}
        onVisibleMonthChange={onVisibleMonthChange}
    />,
    mountNode
);
