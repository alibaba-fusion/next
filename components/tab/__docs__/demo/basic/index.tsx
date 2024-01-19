import React from 'react';
import ReactDOM from 'react-dom';
import { Tab } from '@alifd/next';

ReactDOM.render(
    <Tab>
        <Tab.Item title="Home" key="1">
            Home content
        </Tab.Item>
        <Tab.Item title="Documentation" key="2">
            Doc content
        </Tab.Item>
        <Tab.Item title="Help" key="3">
            Help Content
        </Tab.Item>
    </Tab>,
    mountNode
);
