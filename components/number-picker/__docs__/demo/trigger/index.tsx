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
        <NumberPicker alwaysShowTrigger onChange={onChange} onCorrect={onCorrect} />
        <br />
        <br />
        <NumberPicker hasTrigger={false} onChange={onChange} onCorrect={onCorrect} />
    </div>,
    mountNode
);
