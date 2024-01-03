import React from 'react';
import ReactDOM from 'react-dom';
import { Calendar } from '@alifd/next';
import moment from 'moment';

function onDateChange(value) {
    console.log(value.format('L'));
}

ReactDOM.render(
    <div>
        <Calendar onSelect={onDateChange} defaultValue={moment().add(1, 'days')} />
    </div>,
    mountNode
);
