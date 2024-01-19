import React from 'react';
import ReactDOM from 'react-dom';

import { Icon } from '@alifd/next';

ReactDOM.render(
    <div>
        button: <br />
        <Icon type="atm" role="button" aria-label="icon atm" style={{ margin: '5px' }} />
        <Icon type="smile" role="button" aria-label="icon smile" style={{ margin: '5px' }} />
        <br />
        decoration: <br />
        <Icon type="success" aria-hidden style={{ margin: '5px' }} />
    </div>,
    mountNode
);
