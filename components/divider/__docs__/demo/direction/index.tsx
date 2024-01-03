import React from 'react';
import ReactDOM from 'react-dom';
import { Divider } from '@alifd/next';

ReactDOM.render(
    <div>
        <a href="#">Add</a>
        <Divider direction="ver" />
        <a href="#">Edit</a>
        <Divider direction="ver" />
        <a href="#">Delete</a>
    </div>,
    mountNode
);
