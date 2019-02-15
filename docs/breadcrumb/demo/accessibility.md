# 无障碍

- order: 3

组件已支持无障碍。

:::lang=en-us
# Accessibility

- order: 3

Components already support accessibility.
:::

---

````jsx
import { Breadcrumb } from '@alifd/next';

ReactDOM.render(
    <Breadcrumb>
        <Breadcrumb.Item link="javascript:void(0);">Home</Breadcrumb.Item>
        <Breadcrumb.Item link="javascript:void(0);">Accessibility rule</Breadcrumb.Item>
        <Breadcrumb.Item link="javascript:void(0);">Accessibility practice</Breadcrumb.Item>
    </Breadcrumb>,
    mountNode);
````
