import React from 'react';
import ReactDOM from 'react-dom';
import { Avatar, Badge } from '@alifd/next';

ReactDOM.render(
    <div>
        <span style={{ marginRight: 24 }}>
            <Badge count={1}>
                <Avatar shape="square" icon="account" />
            </Badge>
        </span>
        <span>
            <Badge dot>
                <Avatar shape="square" icon="account" />
            </Badge>
        </span>
    </div>,
    mountNode
);
