import React from 'react';
import ReactDOM from 'react-dom';
import { TimePicker2 } from '@alifd/next';
import type { Dayjs } from 'dayjs';

ReactDOM.render(
    <TimePicker2
        onChange={val => console.log((val as Dayjs).format('HH:mm:ss'))}
        hourStep={2}
        minuteStep={5}
        secondStep={5}
    />,
    mountNode
);
