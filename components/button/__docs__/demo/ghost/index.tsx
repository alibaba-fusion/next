import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@alifd/next';

ReactDOM.render(
    <div style={{ clear: 'both' }}>
        <div className="ghost-light-background">
            <Button ghost="light">Ghost light</Button>
        </div>
        <div className="ghost-dark-background">
            <Button ghost="dark">Ghost dark</Button>
        </div>
    </div>,
    mountNode
);
