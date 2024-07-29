import React from 'react';
import ReactDOM from 'react-dom';
import { TimePicker } from '@alifd/next';

const disabledHours = [1, 2, 3, 4, 5];
const disabledMinutes = [10, 20, 30, 40, 50];
const disabledSeconds = [10, 20, 30, 40, 50];

const disabledItems = (list: number[]) => (index: number) => {
    return list.indexOf(index) >= 0;
};

ReactDOM.render(
    <div>
        <p>Disable TimePicker</p>
        <TimePicker disabled />
        <p>Disable Hours/Minutes/Seconds</p>
        <TimePicker
            disabledHours={disabledItems(disabledHours)}
            disabledMinutes={disabledItems(disabledMinutes)}
            disabledSeconds={disabledItems(disabledSeconds)}
        />
    </div>,
    mountNode
);
