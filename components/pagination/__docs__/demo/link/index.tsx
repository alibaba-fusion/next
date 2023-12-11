import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Pagination } from '@alifd/next';

const format = `${window.location.href}#/{page}`;

ReactDOM.render(<Pagination defaultCurrent={2} link={format} />, mountNode);
