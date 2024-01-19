import React from 'react';
import ReactDOM from 'react-dom';
import { Message, Button } from '@alifd/next';

const notice = () => {
    Message.notice('This is a Toast Message Notice');
};

ReactDOM.render(
    <div>
        <Message type="notice">This is an Inline Message Notice</Message>
        <br />
        <Button type="primary" onClick={notice}>
            Display Toast Message Notice
        </Button>
    </div>,
    mountNode
);
