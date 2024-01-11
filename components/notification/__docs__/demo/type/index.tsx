import React from 'react';
import ReactDOM from 'react-dom';

import { Notification, Button } from '@alifd/next';

const openNotification = type => {
    Notification.open({
        title: 'Notification Title',
        content:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        type,
    });
};

ReactDOM.render(
    <div className="button-row">
        <Button type="primary" onClick={() => openNotification('success')}>
            success
        </Button>
        <Button type="primary" onClick={() => openNotification('warning')}>
            warning
        </Button>
        <Button type="primary" onClick={() => openNotification('error')}>
            error
        </Button>
        <Button type="primary" onClick={() => openNotification('notice')}>
            notice
        </Button>
        <Button type="primary" onClick={() => openNotification('help')}>
            help
        </Button>
    </div>,
    mountNode
);
