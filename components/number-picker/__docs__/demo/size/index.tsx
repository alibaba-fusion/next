import React from 'react';
import ReactDOM from 'react-dom';
import { NumberPicker } from '@alifd/next';

ReactDOM.render(
    <div>
        <NumberPicker defaultValue={0} size="small" />
        <NumberPicker defaultValue={0} />
        <NumberPicker defaultValue={0} size="large" />
        <br />
        <br />
        <NumberPicker defaultValue={0} size="small" type="inline" />
        <NumberPicker defaultValue={0} type="inline" />
        <NumberPicker defaultValue={0} size="large" type="inline" />
    </div>,
    mountNode
);
