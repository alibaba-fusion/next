import React from 'react';
import ReactDOM from 'react-dom';
import { NumberPicker } from '@alifd/next';

function onChange(value, e) {
    console.log('onChange', value, e);
}

function onCorrect(obj) {
    console.log('onCorrect', obj);
}
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
