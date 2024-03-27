import React from 'react';
import ReactDOM from 'react-dom';
import { NumberPicker } from '@alifd/next';
import type { NumberPickerProps } from '@alifd/next/lib/number-picker';

const onChange: NumberPickerProps['onChange'] = (value, e) => {
    console.log('onChange', value, e);
};

const onCorrect: NumberPickerProps['onCorrect'] = obj => {
    console.log('onCorrect', obj);
};
ReactDOM.render(
    <div>
        <NumberPicker
            type="inline"
            step={3}
            min={6}
            max={30}
            defaultValue={6}
            onChange={onChange}
            onCorrect={onCorrect}
        />
    </div>,
    mountNode
);
