import React from 'react';
import ReactDOM from 'react-dom';
import { Badge } from '@alifd/next';

ReactDOM.render(
    <div>
        <Badge count={5}>
            <a href="#" className="basic-example">
                <span className="next-sr-only">unread messages</span>
            </a>
        </Badge>
    </div>,
    mountNode
);
