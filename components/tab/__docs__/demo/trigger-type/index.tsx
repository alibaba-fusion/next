import React from 'react';
import ReactDOM from 'react-dom';
import { Tab } from '@alifd/next';

const tabs = [
    { tab: 'Home', key: 0, content: 'This is home page' },
    { tab: 'Document', key: 1, content: 'This is document page' },
    { tab: 'API', key: 2, content: 'This is api page' },
];

function onChange(key) {
    console.log('change', key);
}

function handleClick(key) {
    console.log('click', key);
}

function onMouseEnter(key, e) {
    console.log('enter', e.target, key);
}

function onMouseLeave(key, e) {
    console.log('leave', e.target, key);
}

ReactDOM.render(
    <div className="fusion-demo">
        <div className="demo-item-title">Click to change</div>
        <Tab triggerType="click" onChange={onChange}>
            {tabs.map(item => (
                <Tab.Item key={item.key} title={item.tab} onClick={handleClick}>
                    {item.content}
                </Tab.Item>
            ))}
        </Tab>
        <div className="demo-item-title">Hover to change</div>
        <Tab triggerType="hover" onChange={onChange}>
            {tabs.map(item => (
                <Tab.Item
                    key={item.key}
                    title={item.tab}
                    onClick={handleClick}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {item.content}
                </Tab.Item>
            ))}
        </Tab>
    </div>,
    mountNode
);
