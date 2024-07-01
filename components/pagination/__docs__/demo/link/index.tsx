import React from 'react';
import ReactDOM from 'react-dom';
import Pagination from '../../../pagination';

const format = `${window.location.href}#/{page}`;

ReactDOM.render(<Pagination defaultCurrent={2} link={format} />, mountNode);
