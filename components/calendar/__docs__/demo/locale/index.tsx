import React from 'react';
import ReactDOM from 'react-dom';
import { Calendar } from '@alifd/next';
import moment from 'moment';

// Setting moment locale to Chinese
moment.locale('zh-cn');

ReactDOM.render(<Calendar />, mountNode);
