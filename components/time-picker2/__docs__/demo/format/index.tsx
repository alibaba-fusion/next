import React from 'react';
import ReactDOM from 'react-dom';
import { TimePicker2 } from '@alifd/next';

ReactDOM.render(
    <div>
        <TimePicker2 format="HH" />
        <p>Hide seconds</p>
        <TimePicker2 format="HH:mm" />
        <p>Hide hours</p>
        <TimePicker2 format="mm:ss" />
    </div>,
    mountNode
);
