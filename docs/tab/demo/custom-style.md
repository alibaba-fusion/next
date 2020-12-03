# 自定义样式

- order: 9

在 Tab 已有样式的基础上，可以通过 `contentStyle`, `contentClassName` 等属性自由的进行样式自定义。

:::lang=en-us
# Custom style

- order: 9

Customize Tab style by `contentStyle`, `contentClassName`.

:::

---

````jsx
import { Tab } from '@alifd/next';

const panes = [
    {
        tab: 'Todo Tasks',
        key: 0
    },
    {
        tab: 'Finished Tasks',
        key: 1
    },
    {
        tab: 'Unread Messages',
        key: 2
    },
    {
        tab: 'Past Messages',
        key: 3
    },
    {
        tab: 'All Messages',
        key: 4
    }
];

const detachedContentStyle = {
    border: '1px solid #DCDEE3',
    padding: '20px'
};

ReactDOM.render(<div className="fusion-demo">
    <div className="demo-item-title">Customize with contentStyle or contentClassName</div>
    <Tab shape="wrapped" contentStyle={detachedContentStyle}>
        {
            panes.map(pane => <Tab.Item title={pane.tab} key={pane.key}>{pane.tab}</Tab.Item>)
        }
    </Tab>

    <div className="demo-item-title">Setting className and style in Tab.Item</div>
    <Tab shape="wrapped" navStyle={{ background: '#DEE8FF' }}>
        {
            panes.map(pane => {
                return (<Tab.Item
                    title={pane.tab}
                    key={pane.key}
                    className="custom-tab-item"
                    style={{background: '#FFF'}}>{pane.tab}</Tab.Item>
                );
            })
        }
    </Tab>

    <div className="demo-item-title">Tabs with same width</div>
    <Tab shape="capsule">
        {
            panes.map(pane => <Tab.Item title={pane.tab} key={pane.key} className="justify-tabs-tab">{pane.tab}</Tab.Item>)
        }
    </Tab>
</div>
    , mountNode);
````

````css
.fusion-demo .demo-item-title {
    font-size: 16px;
    color: #333;
    padding: 8px;
    margin: 14px 0;
}

.custom-content {
    padding: 15px;
}

.next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
}

.custom-tab-item {
    margin-right: -1px !important;
}

.justify-tabs-tab {
    width: 140px;
    text-align: center;
}
````
