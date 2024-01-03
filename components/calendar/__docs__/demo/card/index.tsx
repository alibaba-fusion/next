import React from 'react';
import ReactDOM from 'react-dom';
import { Calendar } from '@alifd/next';

function onDateChange(value) {
    console.log(value);
}

ReactDOM.render(
    <div className="wrapped-calendar">
        <Calendar onSelect={onDateChange} shape="card" />
    </div>,
    mountNode
);
