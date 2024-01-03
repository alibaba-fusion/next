import React from 'react';
import ReactDOM from 'react-dom';
import { Message, Button } from '@alifd/next';

const success = () => {
    Message.success({
        content: 'Message with custom className and style',
        className: 'custom-message',
        style: {
            marginTop: '50vh',
        },
    });
};

ReactDOM.render(
    <div>
        <Message className="custom-message" style={{ backgroundColor: 'rgba(3,193,253,.3)' }}>
            Customized Message
        </Message>
        <br />
        <br />
        <Button type="primary" onClick={success}>
            Customized style
        </Button>
    </div>,
    mountNode
);
