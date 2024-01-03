import React from 'react';
import ReactDOM from 'react-dom';
import { Badge } from '@alifd/next';

ReactDOM.render(
    <a href="#">
        <Badge count={5}>
            <span className="basic-example"></span>
        </Badge>
    </a>,
    mountNode
);
