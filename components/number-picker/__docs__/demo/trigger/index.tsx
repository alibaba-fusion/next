import React from 'react';
import ReactDOM from 'react-dom';
import { NumberPicker } from '@alifd/next';

function onChange(value: number) {
    console.log('changed', value);
}
function onCorrect(obj: object) {
    console.log(obj);
}
ReactDOM.render(
    <div>
        <NumberPicker alwaysShowTrigger onChange={onChange} onCorrect={onCorrect} />
        <br />
        <br />
        <NumberPicker hasTrigger={false} onChange={onChange} onCorrect={onCorrect} />
    </div>,
    mountNode
);
