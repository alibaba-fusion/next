import React from 'react';
import ReactDOM from 'react-dom';
import { Pagination } from '@alifd/next';

ReactDOM.render(
    <div>
        <h3>small</h3>
        <Pagination defaultCurrent={2} size="small" />
        <h3>medium</h3>
        <Pagination defaultCurrent={2} size="medium" />
        <h3>large</h3>
        <Pagination defaultCurrent={2} size="large" />
    </div>,
    mountNode
);
