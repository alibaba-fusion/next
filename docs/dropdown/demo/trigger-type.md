# 触发的事件类型

- order: 1

使用 triggerType 设置触发的事件类型。

:::lang=en-us
# Close the Overlay from Outside

- order: 1

You can set event type which trigger overlay by `triggerType` attribute.

:::
---

````jsx
import { Dropdown, Menu } from '@alifd/next';

const menu = (
    <Menu>
        <Menu.Item>Option 1</Menu.Item>
        <Menu.Item>Option 2</Menu.Item>
        <Menu.Item>Option 3</Menu.Item>
        <Menu.Item>Option 4</Menu.Item>
    </Menu>
);

ReactDOM.render(
    <Dropdown trigger={<a>Click me</a>} triggerType="click">
        {menu}
    </Dropdown>, mountNode);
````
