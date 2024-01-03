import React from 'react';
import ReactDOM from 'react-dom';
import { TimePicker2 } from '@alifd/next';

ReactDOM.render(
    <TimePicker2
        onChange={val => console.log(val.format('HH:mm:ss'))}
        hourStep={2}
        minuteStep={5}
        secondStep={5}
    />,
    mountNode
);
