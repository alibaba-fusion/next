# 简单用法

- order: 0

使用 Tab 最简单的例子。

:::lang=en-us
# Basic

- order: 0

A simple case.

:::

---

````jsx
import { Tab } from '@alifd/next';

ReactDOM.render(
    <Tab>
        <Tab.Item title="Home" key="1">Home content</Tab.Item>
        <Tab.Item title="Documentation" key="2">Doc content</Tab.Item>
        <Tab.Item title="Help" key="3">Help Content</Tab.Item>
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
