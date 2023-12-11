import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Badge, Icon } from '@alifd/next';

ReactDOM.render(
    <div>
        <Badge dot>
            <Icon type="email" />
        </Badge>
        <Badge count={0} dot>
            <Icon type="email" />
        </Badge>
        <Badge dot>
            <a href="#">A Link</a>
        </Badge>
    </div>,
    mountNode
);
