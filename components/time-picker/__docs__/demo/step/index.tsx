import React from 'react';
import ReactDOM from 'react-dom';
import { TimePicker } from '@alifd/next';
import { type Moment } from 'moment';

ReactDOM.render(
    <TimePicker
        onChange={val => console.log((val as Moment).format('HH:mm:ss'))}
        hourStep={2}
        minuteStep={5}
        secondStep={5}
    />,
    mountNode
);
