import React from 'react';
import ReactDOM from 'react-dom';
import { Badge } from '@alifd/next';

ReactDOM.render(
    <div>
        <Badge count={5}>
            <a href="#" className="basic-example"></a>
        </Badge>
        <Badge count={0} showZero>
            <a href="#" className="basic-example"></a>
        </Badge>
    </div>,
    mountNode
);
