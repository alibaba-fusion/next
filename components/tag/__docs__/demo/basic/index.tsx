import React from 'react';
import ReactDOM from 'react-dom';
import { Tag } from '@alifd/next';

ReactDOM.render(
    <div className="tag-list">
        <Tag type="normal">Normal Tag</Tag>
        <Tag type="primary">Primary Tag</Tag>
    </div>,
    mountNode
);
