import React from 'react';
import ReactDOM from 'react-dom';

import { Calendar } from '@alifd/next';
import moment from 'moment';

ReactDOM.render(
    <div>
        <Calendar shape="panel" defaultValue={moment().add(1, 'days')} />
    </div>,
    mountNode
);
