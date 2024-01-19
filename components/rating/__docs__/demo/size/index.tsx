import React from 'react';
import ReactDOM from 'react-dom';
import { Rating } from '@alifd/next';

ReactDOM.render(
    <div>
        <Rating defaultValue={3.5} size="small" />
        <br />
        <br />
        <Rating defaultValue={3.5} />
        <br />
        <br />
        <Rating defaultValue={3.5} size="large" />
    </div>,
    mountNode
);
