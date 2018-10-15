# 按需加载和自动卸载

- order: 3

默认情况 Tab 不会提前渲染好所有的内容，而是根据 Tab 的激活情况依次进行渲染。某些时候，如果你想一次渲染好所有内容，可以设置 `lazyLoad={false}` 进行关闭。此外，某些时候，如果你想每次切换选项卡时自动卸载未激活的 Tab，可以设置 `unmountInactiveTabs` 开启。

:::lang=en-us
# LazyLoad and AutoUnmount

- order: 3

Disable lazy load by setting `lazyLoad={false}`, and enable auto unmount inactive tabs by setting `unmountInactiveTabs`.

:::

---

````jsx
import { Tab } from '@alifd/next';

const tabs = [
    { tab: 'Home', key: 0, content: 'This is home page' },
    { tab: 'Document', key: 1, content: 'This is document page' },
    { tab: 'API', key: 2, content: 'This is api page' },
];

ReactDOM.render(
    <div>
        <div>Render all tab contents</div>
        <Tab lazyLoad={false}>
            {
                tabs.map(item => <Tab.Item key={item.key} title={item.tab}>{item.content}</Tab.Item>)
            }
        </Tab>

        <div>Unmount inactive tabs</div>
        <Tab unmountInactiveTabs>
            {
                tabs.map(item => <Tab.Item key={item.key} title={item.tab}>{item.content}</Tab.Item>)
            }
        </Tab>
    </div>
    , mountNode);
````

````css
.next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
}
````
