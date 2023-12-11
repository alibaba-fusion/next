import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Switch } from '@alifd/next';

ReactDOM.render(
    <div>
        <Switch autoWidth loading defaultChecked={false} /> <Switch loading defaultChecked />
    </div>,
    mountNode
);
