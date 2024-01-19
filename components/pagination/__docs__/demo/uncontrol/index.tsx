import React from 'react';
import ReactDOM from 'react-dom';
import { Pagination } from '@alifd/next';

const change = function (value) {
    console.log(value);
};

ReactDOM.render(<Pagination defaultCurrent={2} onChange={change} />, mountNode);
