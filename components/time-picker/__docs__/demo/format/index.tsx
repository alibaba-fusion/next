import React from 'react';
import ReactDOM from 'react-dom';
import { TimePicker } from '@alifd/next';

ReactDOM.render(
    <div>
        <TimePicker format="HH" />
        <p>Hide seconds</p>
        <TimePicker format="HH:mm" />
        <p>Hide hours</p>
        <TimePicker format="mm:ss" />
    </div>,
    mountNode
);
