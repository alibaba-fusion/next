import React from 'react';
import ReactDOM from 'react-dom';
import { Overlay, Button, Input } from '@alifd/next';

const { Popup } = Overlay;

ReactDOM.render(
    <div>
        <Popup v2 trigger={<Button>Open</Button>} triggerType="click">
            <span className="overlay-demo">Hello World From Popup!</span>
        </Popup>
        <br />
        <br />
        <Popup
            v2
            trigger={<Input placeholder="Use Down Arrow to open" />}
            triggerType="click"
            triggerClickKeycode={[32, 40]}
        >
            <span className="overlay-demo">Hello World From Popup!</span>
        </Popup>
    </div>,
    mountNode
);
