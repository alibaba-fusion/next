import React from 'react';
import ReactDOM from 'react-dom';
import { Tag, Icon } from '@alifd/next';

const { Group: TagGroup } = Tag;

ReactDOM.render(
    <div className="tag-list">
        <Tag type="normal">Normal Tag</Tag>
        <Tag type="primary">Primary Tag</Tag>
    </div>,
    mountNode
);
