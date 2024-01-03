import React from 'react';
import ReactDOM from 'react-dom';
import { Pagination } from '@alifd/next';

ReactDOM.render(
    <div>
        <h3>normal</h3>
        <Pagination defaultCurrent={2} />
        <h3>simple</h3>
        <Pagination defaultCurrent={2} type="simple" />
        <h3>mini</h3>
        <Pagination defaultCurrent={2} type="mini" />
    </div>,
    mountNode
);
