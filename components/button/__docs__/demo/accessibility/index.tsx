import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Icon } from '@alifd/next';

ReactDOM.render(
    <div>
        <Button.Group>
            <Button type="primary" aria-label="prompt button">
                <Icon type="prompt" />
            </Button>
            <Button type="primary" aria-label="clock button">
                <Icon type="clock" />
            </Button>
            <Button type="primary" aria-label="set button">
                <Icon type="set" />
            </Button>
        </Button.Group>
    </div>,
    mountNode
);
