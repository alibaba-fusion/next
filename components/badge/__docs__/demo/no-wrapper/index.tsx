import React from 'react';
import ReactDOM from 'react-dom';
import { Badge } from '@alifd/next';

ReactDOM.render(
    <div>
        <Badge count={25} />
        <Badge
            count={4}
            style={{ backgroundColor: '#fff', color: '#999', border: '1px solid #d9d9d9' }}
        />
        <Badge count={109} style={{ backgroundColor: '#87d068' }} />
        <Badge dot />
        <Badge content="hot" style={{ backgroundColor: '#FC0E3D', color: '#FFFFFF' }} />
    </div>,
    mountNode
);
