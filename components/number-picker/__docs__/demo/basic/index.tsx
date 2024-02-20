import React from 'react';
import ReactDOM from 'react-dom';
import { NumberPicker } from '@alifd/next';
import type { NumberPickerProps } from '@alifd/next/lib/number-picker';

const onChange: NumberPickerProps['onChange'] = (value, e) => {
    console.log(value, e.type, e.triggerType);
};

ReactDOM.render(
    <div>
        <NumberPicker onChange={onChange} />
        <br />
        <br />
        <NumberPicker defaultValue={0} type="inline" onChange={onChange} />
    </div>,
    mountNode
);
