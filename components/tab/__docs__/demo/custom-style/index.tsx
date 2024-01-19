import React from 'react';
import ReactDOM from 'react-dom';
import { Tab } from '@alifd/next';

const panes = [
    {
        tab: 'Todo Tasks',
        key: 0,
    },
    {
        tab: 'Finished Tasks',
        key: 1,
    },
    {
        tab: 'Unread Messages',
        key: 2,
    },
    {
        tab: 'Past Messages',
        key: 3,
    },
    {
        tab: 'All Messages',
        key: 4,
    },
];

const detachedContentStyle = {
    padding: '20px',
};

ReactDOM.render(
    <div className="fusion-demo">
        <div className="demo-item-title">Customize with contentStyle or contentClassName</div>
        <Tab shape="wrapped" contentStyle={detachedContentStyle}>
            {panes.map(pane => (
                <Tab.Item title={pane.tab} key={pane.key}>
                    {pane.tab}
                </Tab.Item>
            ))}
        </Tab>

        <div className="demo-item-title">Setting className and style in Tab.Item</div>
        <Tab shape="wrapped" navStyle={{ background: '#DEE8FF' }}>
            {panes.map(pane => {
                return (
                    <Tab.Item
                        title={pane.tab}
                        key={pane.key}
                        className="custom-tab-item"
                        style={{ background: '#FFF' }}
                    >
                        {pane.tab}
                    </Tab.Item>
                );
            })}
        </Tab>

        <div className="demo-item-title">Tabs with same width</div>
        <Tab shape="capsule">
            {panes.map(pane => (
                <Tab.Item title={pane.tab} key={pane.key} className="justify-tabs-tab">
                    {pane.tab}
                </Tab.Item>
            ))}
        </Tab>
    </div>,
    mountNode
);
