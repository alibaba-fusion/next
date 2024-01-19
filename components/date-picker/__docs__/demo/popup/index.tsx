import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from '@alifd/next';

const { RangePicker } = DatePicker;

ReactDOM.render(
    <div>
        <p>Change popup align</p>
        <DatePicker popupAlign="bl tl" />
        <p>Change popup container</p>
        <RangePicker popupContainer={target => target.parentNode} />
    </div>,
    mountNode
);
