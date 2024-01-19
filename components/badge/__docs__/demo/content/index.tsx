import React from 'react';
import ReactDOM from 'react-dom';
import { Badge, Icon } from '@alifd/next';

ReactDOM.render(
    <div>
        <Badge content="hot" style={{ backgroundColor: '#FC0E3D', color: '#FFFFFF' }}>
            <a href="#" className="head-example"></a>
        </Badge>
        <Badge
            content={<Icon type="error" />}
            style={{ backgroundColor: 'transparent', color: 'red', padding: 0 }}
        >
            <a href="#" className="head-example"></a>
        </Badge>
    </div>,
    mountNode
);
