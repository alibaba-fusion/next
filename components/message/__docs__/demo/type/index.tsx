import React from 'react';
import ReactDOM from 'react-dom';
import { Message } from '@alifd/next';

ReactDOM.render(
    <div className="message-type-demo">
        <Message title="Success" type="success">
            Content Content Content Content
        </Message>
        <Message title="Warning" type="warning">
            Content Content Content Content
        </Message>
        <Message title="Error" type="error">
            Content Content Content Content
        </Message>
        <Message title="Notice" type="notice">
            Content Content Content Content
        </Message>
        <Message title="Help" type="help">
            Content Content Content Content
        </Message>
        <Message title="Loading" type="loading">
            Content Content Content Content
        </Message>
    </div>,
    mountNode
);
