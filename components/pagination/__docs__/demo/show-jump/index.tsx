import React from 'react';
import ReactDOM from 'react-dom';
import { Pagination } from '@alifd/next';

const change = function (value) {
    console.log(value);
};

ReactDOM.render(
    <div>
        <h3>Hide jump forcibly</h3>
        <Pagination total={500} showJump={false} />
    </div>,
    mountNode
);
