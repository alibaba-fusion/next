import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Switch } from '@alifd/next';

ReactDOM.render(
    <div>
        <Switch autoWidth />
        <br />
        <Switch autoWidth size="small" />
    </div>,
    mountNode
);
