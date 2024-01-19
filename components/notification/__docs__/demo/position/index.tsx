import React from 'react';
import ReactDOM from 'react-dom';

import { Notification, Button } from '@alifd/next';

const openNotification = placement => {
    Notification.config({ placement });
    Notification.open({
        title: 'Notification Title',
        content:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
};

ReactDOM.render(
    <div className="button-row">
        <Button type="primary" onClick={() => openNotification('tl')}>
            Top Left
        </Button>
        <Button type="primary" onClick={() => openNotification('tr')}>
            Top Right
        </Button>
        <Button type="primary" onClick={() => openNotification('bl')}>
            Bottom Left
        </Button>
        <Button type="primary" onClick={() => openNotification('br')}>
            Bottom Right
        </Button>
    </div>,
    mountNode
);
