import React from 'react';
import ReactDOM from 'react-dom';
import { TimePicker } from '@alifd/next';
import type { TimePickerProps } from '@alifd/next/types/time-picker';

const renderTimeMenuItems: TimePickerProps['renderTimeMenuItems'] = list => {
    return list.map(({ value }) => {
        return {
            value,
            label: value > 9 ? String(value) : `0${value}`,
        };
    });
};

ReactDOM.render(<TimePicker renderTimeMenuItems={renderTimeMenuItems} />, mountNode);
