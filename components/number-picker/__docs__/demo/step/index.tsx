import React from 'react';
import ReactDOM from 'react-dom';
import { NumberPicker } from '@alifd/next';
import type { NumberPickerProps } from '@alifd/next/lib/number-picker';

const onChange: NumberPickerProps['onChange'] = value => {
    console.log('changed', value);
};
const onCorrect: NumberPickerProps['onCorrect'] = obj => {
    console.log(obj);
};
ReactDOM.render(
    <div>
        <NumberPicker defaultValue={0} onChange={onChange} onCorrect={onCorrect} step={0.01} />
    </div>,
    mountNode
);
