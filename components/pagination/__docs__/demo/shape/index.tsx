import React from 'react';
import ReactDOM from 'react-dom';
import { Pagination } from '@alifd/next';

ReactDOM.render(
    <div>
        <h3>normal</h3>
        <Pagination defaultCurrent={2} />
        <h3>arrow-only</h3>
        <Pagination defaultCurrent={2} shape="arrow-only" />
        <h3>arrow-prev-only</h3>
        <Pagination defaultCurrent={2} shape="arrow-prev-only" />
        <h3>no-border</h3>
        <Pagination defaultCurrent={2} shape="no-border" type="simple" />
    </div>,
    mountNode
);
