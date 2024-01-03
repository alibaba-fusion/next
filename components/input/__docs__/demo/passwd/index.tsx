import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from '@alifd/next';

function onChange(v) {
    console.log(v);
}

ReactDOM.render(
    <div>
        <Input.Password placeholder="please input password" onChange={onChange} />
        <br />
        <br />
        <Input.Password size="large" placeholder="please input password" onChange={onChange} />
        <br />
        <br />
        <Input.Password size="small" placeholder="please input password" onChange={onChange} />
        <br />
        <br />
    </div>,
    mountNode
);
