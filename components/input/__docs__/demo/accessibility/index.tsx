import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from '@alifd/next';

function onChange(v) {
    console.log(v);
}
function onKeyDown(v) {
    console.log(v);
}
ReactDOM.render(
    <div>
        <Input
            size="large"
            placeholder="please input"
            onChange={onChange}
            onKeyDown={onKeyDown}
            aria-label="this is input"
        />
    </div>,
    mountNode
);
