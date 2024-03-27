import React from 'react';
import ReactDOM from 'react-dom';
import { Switch } from '@alifd/next';

function onChange(checked: boolean) {
    console.log(`switch to ${checked}`);
}

ReactDOM.render(
    <div>
        <Switch autoWidth defaultChecked={false} onChange={onChange} />
    </div>,
    mountNode
);
