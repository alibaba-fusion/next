# 无障碍

- order: 3

组件内置了部分支持无障碍, 但是额外需要开发者手动设置才能完整支持无障碍: 给Collapse传入一个id, 组件会根据Collapse的id自动给每一个Panel生成Id。如果你想指定Panel的Id也可以, 给某个Panel传入Id属性,就会覆盖根据CollapseId生成的Id。

:::lang=en-us
# Accessibility

- order: 3

To Support accessibility, you shoud assign an id prop to Collapse and it will generate id for Panels. or you can assign an id prop to Panel to overwrite generated id.
:::

---

````jsx
import { Dropdown, Menu } from '@alifd/next';

const menu = (
    <Menu>
        <Menu.Item>Option 1</Menu.Item>
        <Menu.Item>Option 2</Menu.Item>
    </Menu>
);

ReactDOM.render(
    <Dropdown trigger={<a>test accessibility dropdown</a>} afterOpen={() => console.log('after open')}>
        {menu}
    </Dropdown>, mountNode);
````
