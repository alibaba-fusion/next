import React from 'react';
import ReactDOM from 'react-dom';
import { Tag } from '@alifd/next';

ReactDOM.render(
    <div className="tag-list">
        <Tag size="small">小</Tag>
        <Tag size="medium">中</Tag>
        <Tag size="large">大</Tag>
    </div>,
    mountNode
);
