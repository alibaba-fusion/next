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
        <NumberPicker alwaysShowTrigger />
        <br />
        <br />
        <NumberPicker hasTrigger={false} />
    </div>,
    mountNode
);
