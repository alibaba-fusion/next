import React from 'react';
import ReactDOM from 'react-dom';
import { Badge } from '@alifd/next';

ReactDOM.render(
    <div>
        <Badge count={99}>
            <a href="#" className="head-example"></a>
        </Badge>
        <Badge count={100}>
            <a href="#" className="head-example"></a>
        </Badge>
        <Badge count={100} overflowCount={10}>
            <a href="#" className="head-example"></a>
        </Badge>
        <Badge count={1000} overflowCount={999}>
            <a href="#" className="head-example"></a>
        </Badge>
    </div>,
    mountNode
);
