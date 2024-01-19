import React from 'react';
import ReactDOM from 'react-dom';
import { NumberPicker } from '@alifd/next';

function onChange(value) {
    console.log('changed', value);
}
function onCorrect(obj) {
    console.log(obj);
}
ReactDOM.render(
    <div>
        <NumberPicker defaultValue={0} onChange={onChange} onCorrect={onCorrect} step={0.01} />
    </div>,
    mountNode
);
