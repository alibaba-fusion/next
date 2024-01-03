import React from 'react';
import ReactDOM from 'react-dom';
import { Tab } from '@alifd/next';

ReactDOM.render(
    <Tab>
        <Tab.Item title="Tab 1" disabled key="1">
            Tab 1 content
        </Tab.Item>
        <Tab.Item title="Tab 2" key="2">
            Tab 2 content
        </Tab.Item>
        <Tab.Item title="Tab 3" key="3">
            Tab 3 content
        </Tab.Item>
    </Tab>,
    mountNode
);
