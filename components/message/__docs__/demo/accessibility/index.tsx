import React from 'react';
import ReactDOM from 'react-dom';
import { Message, Button } from '@alifd/next';

const showSuccess = () => Message.success('success');
ReactDOM.render(
    <div className="message-toast-quick-demo">
        <Button type="primary" onClick={showSuccess}>
            success
        </Button>
    </div>,
    mountNode
);
