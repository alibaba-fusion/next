import React from 'react';
import ReactDOM from 'react-dom';
import { TimePicker } from '@alifd/next';
import moment from 'moment';

const defaultVal = moment('12:00:00', 'HH:mm:ss', true);

ReactDOM.render(
    <div>
        <TimePicker defaultValue={defaultVal} onChange={val => console.log(val)} />
        <br />
        <br />
        <TimePicker defaultValue="12:00:00" onChange={val => console.log(val)} />
    </div>,
    mountNode
);
