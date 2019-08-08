# 自定义渲染时间选择菜单

- order: 5

可以通过 `renderTimeMenuItems` 来自定义渲染下拉菜单每一项。

:::lang=en-us
# Custom Render Time Menu

- order: 5

Render time menu by `renderTimeMenuItems`.

:::

---

````jsx
import { TimePicker } from '@alifd/next';

const renderTimeMenuItems = (list) => {
    return list.map(({ label, value }) => {
        return {
            value,
            label: value > 9 ? String(value) : `0${value}`
        };
    });
}

ReactDOM.render(<TimePicker renderTimeMenuItems={renderTimeMenuItems} />, mountNode);
````
