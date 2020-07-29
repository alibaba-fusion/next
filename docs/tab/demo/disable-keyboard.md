# 禁止键盘事件

- order: 15

通过 `disabledKeyboard=true` 禁止 Tab 聚焦时的键盘 `↑`,`↓`,`←` ,`→` 切换

:::lang=en-us
# Disable Keyboard

- order: 15

disable `↑`,`↓`,`←` ,`→` keyboard event when tab is active

:::

---

````jsx
import { Tab } from '@alifd/next';

ReactDOM.render(
    <Tab disableKeyboard>
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
