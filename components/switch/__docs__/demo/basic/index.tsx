import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Switch } from '@alifd/next';

function onChange(checked) {
    console.log(`switch to ${checked}`);
}

ReactDOM.render(
    <div>
        <Switch autoWidth defaultChecked={false} onChange={onChange} />
    </div>,
    mountNode
);
