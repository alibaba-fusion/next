# 尺寸

- order: 2

组件尺寸，可以通过`size`属性设置，提供`medium`(默认)和`small`两种尺寸，
`small`尺寸的选项卡组件可以用在弹出框等较狭窄的容器内。

:::lang=en-us
# Size

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
            {tabs.map(item => <Tab.Item key={item.key} title={item.tab}>{item.content}</Tab.Item>)}
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
