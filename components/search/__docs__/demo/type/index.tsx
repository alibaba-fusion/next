import React from 'react';
import ReactDOM from 'react-dom';
import { Search } from '@alifd/next';

ReactDOM.render(
    <div>
        <h2>Normal</h2>
        <Search type="primary" placeholder="primary" />
        <br /> <br />
        <Search type="secondary" placeholder="Secondary" />
        <br /> <br />
        <Search type="normal" placeholder="normal" />
        <br /> <br />
        <div style={{ background: '#333', padding: 20 }}>
            <Search type="dark" placeholder="dark" />
        </div>
        <h2>Simple</h2>
        <Search type="normal" shape="simple" placeholder="normal" />
        <br /> <br />
        <div style={{ background: '#333', padding: 20 }}>
            <Search shape="simple" type="dark" placeholder="dark" />
        </div>
    </div>,
    mountNode
);
