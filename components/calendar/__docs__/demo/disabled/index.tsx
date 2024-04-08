import React from 'react';
import ReactDOM from 'react-dom';
import { Calendar } from '@alifd/next';
import moment from 'moment';
import { type CalendarProps } from '@alifd/next/lib/calendar';

const currentDate = moment();
const disabledDate: CalendarProps['disabledDate'] = function (date) {
    return date.valueOf() > currentDate.valueOf();
};

ReactDOM.render(
    <div className="wrapped-calendar">
        <Calendar disabledDate={disabledDate} shape="card" />
    </div>,
    mountNode
);
