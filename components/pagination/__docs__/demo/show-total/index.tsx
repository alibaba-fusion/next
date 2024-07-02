import React from 'react';
import ReactDOM from 'react-dom';
import { Pagination } from '@alifd/next';

const total = 50;

ReactDOM.render(
    <Pagination
        className="custom-pagination"
        total={total}
        totalRender={total => `Total: ${total}`}
    />,
    mountNode
);
