import React from 'react';
import ReactDOM from 'react-dom';
import { Avatar, Icon } from '@alifd/next';

ReactDOM.render(
    <div className="avatar-demo">
        <Avatar icon="account" />
        <Avatar icon={<Icon type="smile" />} />
        <Avatar>U</Avatar>
        <Avatar src="https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png" />
        <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
        <Avatar style={{ backgroundColor: '#87d068' }} icon="account" />
    </div>,
    mountNode
);
