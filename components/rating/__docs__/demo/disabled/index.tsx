import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Rating } from '@alifd/next';

ReactDOM.render(
    <div>
        <Rating defaultValue={2.5} disabled />
        <br />
        <Rating defaultValue={1.5} disabled />
    </div>,
    mountNode
);
