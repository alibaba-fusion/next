import React from 'react';
import ReactDOM from 'react-dom';
import { Calendar } from '@alifd/next';
import moment from 'moment';

const currentDate = moment();
const disabledDate = function (date) {
    return date.valueOf() > currentDate.valueOf();
};

ReactDOM.render(
    <div className="wrapped-calendar">
        <Calendar disabledDate={disabledDate} shape="card" />
    </div>,
    mountNode
);
