import React from 'react';
import ReactDOM from 'react-dom';
import { Calendar2 } from '@alifd/next';
import dayjs from 'dayjs';

ReactDOM.render(
    <div style={{ border: '1px solid #f0f0f0' }}>
        <Calendar2 shape="panel" defaultValue={dayjs().add(1, 'days')} />
    </div>,
    mountNode
);
