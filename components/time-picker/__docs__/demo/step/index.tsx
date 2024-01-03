import React from 'react';
import ReactDOM from 'react-dom';
import { TimePicker } from '@alifd/next';

ReactDOM.render(
    <TimePicker
        onChange={val => console.log(val.format('HH:mm:ss'))}
        hourStep={2}
        minuteStep={5}
        secondStep={5}
    />,
    mountNode
);
