import React from 'react';
import ReactDOM from 'react-dom';
import { Message, Button } from '@alifd/next';

const key = 'updatable';

const openMessage = () => {
    Message.loading({ content: 'Loading...', key });
    setTimeout(() => {
        Message.success({ content: 'Loaded!', key, duration: 2000 });
    }, 1000);
};

ReactDOM.render(
    <Button type="primary" onClick={openMessage}>
        Open the message box
    </Button>,
    mountNode
);
