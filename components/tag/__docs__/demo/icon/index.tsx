import React from 'react';
import ReactDOM from 'react-dom';
import { Tag, Icon } from '@alifd/next';

const { Group: TagGroup } = Tag;

ReactDOM.render(
    <div className="tag-list">
        <Tag>
            <Icon type="add" />
            tag 1
        </Tag>
        <Tag>
            <Icon type="account" />
            tag 2
        </Tag>
        <Tag>
            <Icon type="smile" />
            tag 3
        </Tag>
    </div>,
    mountNode
);
