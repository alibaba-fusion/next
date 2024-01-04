import React from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '@alifd/next';

ReactDOM.render(
    <div>
        <div className="icon-style-demo">
            <Icon type="success" style={{ color: '#1DC11D', marginRight: '10px' }} />
            This is a success message!
        </div>
        <div className="icon-style-demo">
            <Icon type="warning" style={{ color: '#FFA003', marginRight: '10px' }} />
            This is a warning message!
        </div>
        <div className="icon-style-demo">
            <Icon type="error" style={{ color: '#FF3333', marginRight: '10px' }} />
            This is a failure message!
        </div>
    </div>,
    mountNode
);
