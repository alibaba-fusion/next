import React from 'react';
import ReactDOM from 'react-dom';
import { Tab } from '@alifd/next';

const tabs = [
    { tab: 'Home', key: 'home', content: 'This is home page' },
    { tab: 'Document', key: 'doc', content: 'This is document page' },
    { tab: 'API', key: 'api', content: 'This is api page' },
];

ReactDOM.render(
    <div>
        <Tab size="small">
            {tabs.map(item => (
                <Tab.Item key={item.key} title={item.tab}>
                    {item.content}
                </Tab.Item>
            ))}
        </Tab>
        <br />
        <Tab size="small" shape="wrapped">
            {tabs.map(item => (
                <Tab.Item key={item.key} title={item.tab}>
                    {item.content}
                </Tab.Item>
            ))}
        </Tab>
        <br />
        <Tab size="small" shape="text">
            {tabs.map(item => (
                <Tab.Item key={item.key} title={item.tab}>
                    {item.content}
                </Tab.Item>
            ))}
        </Tab>
        <br />
        <Tab size="small" shape="capsule">
            {tabs.map(item => (
                <Tab.Item key={item.key} title={item.tab}>
                    {item.content}
                </Tab.Item>
            ))}
        </Tab>
    </div>,
    mountNode
);
