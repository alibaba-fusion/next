# 超出时滑动

- order: 5

当 Tab 标签非常多时，组件会自动增加滑动支持。可以用过 `excessMode` 属性切换滑动模式，该属性仅在`tabPosition`为`top`或者`bottom`时生效。

:::lang=en-us
# Excess mode

- order: 5

If your Tab excess the range, you can setting `excessMode` to `dropdown` for vertical display, or `slide` for horizontal display, just note that this `excessMode` will only be effective when `tabPosition` is set to be `top` or `bottom`.

:::

---

````jsx
import { Tab } from '@alifd/next';

const tabs = [
    { tab: 'Home', key: 1 },
    { tab: 'Documnet', key: 2 },
    { tab: 'Setting', key: 3 },
    { tab: 'Help', key: 4 },
    { tab: 'Admin', key: 5 },
    { tab: 'More 1', key: 6 },
    { tab: 'More 2', key: 7 },
    { tab: 'More 3', key: 8 },
    { tab: 'More 4', key: 9 },
    { tab: 'More 5', key: 10 },
    { tab: 'More 6', key: 11 },
    { tab: 'More 7', key: 12 },
    { tab: 'More 8', key: 13 },
    { tab: 'More 9', key: 14 },
    { tab: 'More 10', key: 15 },
    { tab: 'More 11', key: 16 },
];

function onClick(key) {
    console.log(key);
}

ReactDOM.render(<div className="fusion-demo" style={{ maxWidth: '520px' }}>
    <div className="demo-item-title">Dropdown mode</div>
    <Tab excessMode="dropdown">
        {
            tabs.map(item => <Tab.Item key={item.key} title={item.tab} onClick={onClick}>{item.tab} content, content, content</Tab.Item>)
        }
    </Tab>

    <div className="demo-item-title">Slide mode</div>
    <Tab excessMode="slide">
        {
            tabs.map(item => <Tab.Item key={item.key} title={item.tab} onClick={onClick}>{item.tab} content, content, content</Tab.Item>)
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

.next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
}
````
