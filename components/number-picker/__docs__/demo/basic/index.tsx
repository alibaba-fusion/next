import React from 'react';
import ReactDOM from 'react-dom';
import { NumberPicker } from '@alifd/next';

function onChange(value, e) {
    console.log(value, e.type, e.triggerType);
}

ReactDOM.render(
    <div>
        <NumberPicker onChange={onChange} />
        <br />
        <br />
        <NumberPicker defaultValue={0} type="inline" onChange={onChange} />
    </div>,
    mountNode
);
