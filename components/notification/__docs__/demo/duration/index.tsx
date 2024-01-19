import React from 'react';
import ReactDOM from 'react-dom';

import { Notification, Button, NumberPicker } from '@alifd/next';

let duration = 4500;
const openNotification = () => {
    const args = {
        title: 'Notification Title',
        content:
            'I will never close automatically. I will be close automatically. I will never close automatically.',
        duration,
    };
    Notification.open(args);
};

ReactDOM.render(
    <div>
        <NumberPicker defaultValue={duration} onChange={v => (duration = v || 0)} />
        <Button type="primary" onClick={openNotification} style={{ marginLeft: 20 }}>
            Open Notification
        </Button>
    </div>,
    mountNode
);
