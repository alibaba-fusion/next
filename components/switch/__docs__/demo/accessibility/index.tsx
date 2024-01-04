import React from 'react';
import ReactDOM from 'react-dom';
import { Switch } from '@alifd/next';

function onChange(checked) {
    console.log(`switch to ${checked}`);
}

ReactDOM.render(
    <div>
        <Switch
            autoWidth
            checkedChildren="on"
            onChange={onChange}
            unCheckedChildren="off"
            aria-label="accessible switch"
        />
    </div>,
    mountNode
);
