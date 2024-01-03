import React from 'react';
import ReactDOM from 'react-dom';
import { Message, Button } from '@alifd/next';

const show = () => {
    Message.show({
        type: 'loading',
        content: 'Will be closed after 3 seconds or manually click on the close button',
        afterClose: () => console.log('Closed the toast'),
    });
};
const hide = () => Message.hide();

ReactDOM.render(
    <div className="message-toast-demo">
        <Button type="primary" onClick={show}>
            Show
        </Button>
        <Button type="primary" onClick={hide}>
            Hide
        </Button>
    </div>,
    mountNode
);
