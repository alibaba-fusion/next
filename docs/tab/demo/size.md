# 小号尺寸

- order: 2

可以通过 `size=small` 设置小号尺寸，一般用于弹出框等较狭窄的容器内。

:::lang=en-us
# small Size

- order: 2

Change the Tab size by `size`.

:::

---

````jsx
import { Tab } from '@alifd/next';

const tabs = [
    { tab: 'Home', key: 'home', content: 'This is home page' },
    { tab: 'Document', key: 'doc', content: 'This is document page' },
    { tab: 'API', key: 'api', content: 'This is api page' }
];

ReactDOM.render(
    <div>
        <Tab size="small">
            {tabs.map(item => <Tab.Item key={item.key} title={item.tab}>{item.content}</Tab.Item>)}
        </Tab>
        <br />
        <Tab size="small" shape="wrapped">
            {tabs.map(item => <Tab.Item key={item.key} title={item.tab}>{item.content}</Tab.Item>)}
        </Tab>
        <br />
        <Tab size="small" shape="text">
            {tabs.map(item => <Tab.Item key={item.key} title={item.tab}>{item.content}</Tab.Item>)}
        </Tab>
        <br />
        <Tab size="small" shape="capsule">
            {tabs.map(item => <Tab.TabPane key={item.key} title={item.tab}>{item.content}</Tab.TabPane>)}
        </Tab>

    </div>, mountNode);
````

````css
.next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
}
````
