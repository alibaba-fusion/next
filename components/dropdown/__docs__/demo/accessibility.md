# 无障碍支持

- order: 3

若要使用无障碍的Dropdown，推荐使用`<Dropdown triggerType={["click", "hover"]}>` (请勿使用triggerType="focus")。菜单类元素需要由用户确认后再展开才是一种无障碍友好的实践。

:::lang=en-us
# Accessibility

- order: 3

Use `<Dropdown triggerType={["click", "hover"]}>` to make Dropdown better accessibility.

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
    <div>
        <Dropdown trigger={<button>Hello dropdown</button>}  triggerType={["click", "hover"]} afterOpen={() => console.log('after open')}>
            {menu}
        </Dropdown>
    </div>
, mountNode);
````
