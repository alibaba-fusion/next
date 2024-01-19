import React from 'react';
import ReactDOM from 'react-dom';
import { Calendar2 } from '@alifd/next';
import dayjs from 'dayjs';

function onDateChange(value) {
    console.log(value.format('L'));
}

ReactDOM.render(
    <div>
        <Calendar2 onSelect={onDateChange} defaultValue={dayjs().add(1, 'days')} />
    </div>,
    mountNode
);
