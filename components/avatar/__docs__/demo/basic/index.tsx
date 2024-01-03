import React from 'react';
import ReactDOM from 'react-dom';
import { Avatar } from '@alifd/next';

ReactDOM.render(
    <div>
        <div className="avatar-demo">
            <Avatar size={64} icon="account" />
            <Avatar size="large" icon="account" />
            <Avatar size="medium" icon="account" />
            <Avatar size="small" icon="account" />
        </div>
        <div className="avatar-demo">
            <Avatar shape="square" size={64} icon="account" />
            <Avatar shape="square" size="large" icon="account" />
            <Avatar shape="square" size="medium" icon="account" />
            <Avatar shape="square" size="small" icon="account" />
        </div>
    </div>,
    mountNode
);
