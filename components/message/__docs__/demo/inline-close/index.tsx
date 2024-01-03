import React from 'react';
import ReactDOM from 'react-dom';
import { Message } from '@alifd/next';

const onClose = () => console.log('onClose triggered!');
const afterClose = () => console.log('afterClose triggered!');

ReactDOM.render(
    <div>
        <Message title="title" closeable onClose={onClose} afterClose={afterClose}>
            Content Content Content Content
        </Message>
    </div>,
    mountNode
);
