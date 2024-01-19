import React from 'react';
import ReactDOM from 'react-dom';
import { Pagination } from '@alifd/next';
import { hashHistory } from 'react-router';

function handleChange(page) {
    hashHistory.push(page.toString());
}

ReactDOM.render(<Pagination defaultCurrent={2} onChange={handleChange} />, mountNode);
