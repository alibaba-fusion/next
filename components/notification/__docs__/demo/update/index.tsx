import React from 'react';
import ReactDOM from 'react-dom';

import { Notification, Button } from '@alifd/next';

const key = 'updatable';

const openNotification = () => {
    Notification.open({
        key,
        title: 'Notification Title',
        content: 'description.',
    });
    setTimeout(() => {
        Notification.open({
            key,
            title: 'New Title',
            content: 'New description.',
        });
    }, 1000);
};

ReactDOM.render(
    <Button type="primary" onClick={openNotification}>
        Open Notification
    </Button>,
    mountNode
);
