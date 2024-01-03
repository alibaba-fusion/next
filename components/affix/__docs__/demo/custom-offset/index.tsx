import React from 'react';
import ReactDOM from 'react-dom';
import { Affix, Button } from '@alifd/next';

ReactDOM.render(
    <Affix offsetBottom={0}>
        <Button type="secondary">Custom Offset Affixed</Button>
    </Affix>,
    mountNode
);
