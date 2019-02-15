# 无障碍

- order: 15

组件已支持无障碍

:::lang=en-us
# Accessibility

- order: 15

Components already support accessibility
:::

---

````jsx
import { Tab } from '@alifd/next';

ReactDOM.render(
    <Tab>
        <Tab.Item title="Accessibility Check home" key="1">Home content</Tab.Item>
        <Tab.Item title="Accessibility Check Documentation" key="2">Doc content</Tab.Item>
        <Tab.Item title="Accessibility Check Help" key="3">Help Content</Tab.Item>
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