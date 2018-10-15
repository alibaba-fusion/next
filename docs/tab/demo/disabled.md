# 禁用

- order: 8

可以通过 `disabled` 属性禁用某一个选型卡。

:::lang=en-us
# Disable

- order: 8

Disable tabs by passing `disabled` to `Tab.Item`.

:::

---

````jsx
import { Tab } from '@alifd/next';

ReactDOM.render(
    <Tab>
        <Tab.Item title="Tab 1" disabled>Tab 1 content</Tab.Item>
        <Tab.Item title="Tab 2">Tab 2 content</Tab.Item>
        <Tab.Item title="Tab 3">Tab 3 content</Tab.Item>
    </Tab>
    , mountNode);
````

````css
.next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
}
````
