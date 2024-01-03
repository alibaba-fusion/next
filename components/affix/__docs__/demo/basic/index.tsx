import React from 'react';
import ReactDOM from 'react-dom';
import { Affix, Button } from '@alifd/next';

ReactDOM.render(
    <div>
        <Affix>
            <Button type="secondary">Basic Affixed Button</Button>
        </Affix>
        <br />
        <span>Scroll window to see button affixed.</span>
    </div>,
    mountNode
);
