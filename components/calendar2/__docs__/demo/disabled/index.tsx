import React from 'react';
import ReactDOM from 'react-dom';
import { Calendar2 } from '@alifd/next';
import dayjs from 'dayjs';

const currentDate = dayjs();
const disabledDate = function (date) {
    return date.valueOf() > currentDate.valueOf();
};

ReactDOM.render(
    <div className="wrapped-calendar">
        <Calendar2 disabledDate={disabledDate} shape="card" />
    </div>,
    mountNode
);
