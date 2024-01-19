import React from 'react';
import ReactDOM from 'react-dom';
import { TimePicker2 } from '@alifd/next';
import dayjs from 'dayjs';

const defaultVal = dayjs('12:00:00', 'HH:mm:ss', true);

ReactDOM.render(
    <div>
        <TimePicker2 defaultValue={defaultVal} onChange={console.log} />
        <br />
        <br />
        <TimePicker2 defaultValue="12:00:00" onChange={console.log} />
    </div>,
    mountNode
);
