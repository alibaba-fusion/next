import React from 'react';
import ReactDOM from 'react-dom';
import { TimePicker2 } from '@alifd/next';

const renderTimeMenuItems = list => {
    return list.map(({ label, value }) => {
        return {
            value,
            label: value > 9 ? String(value) : `0${value}`,
        };
    });
};

ReactDOM.render(<TimePicker2 renderTimeMenuItems={renderTimeMenuItems} />, mountNode);
