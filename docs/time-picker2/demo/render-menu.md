# 自定义渲染时间选择菜单

- order: 7

可以通过 `renderTimeMenuItems` 来自定义渲染下拉菜单每一项。

:::lang=en-us
# Custom Render Time Menu

- order: 7

Render time menu by `renderTimeMenuItems`.

:::

---

````jsx
import { TimePicker2 } from '@alifd/next';

const renderTimeMenuItems = (list) => {
    return list.map(({ label, value }) => {
        return {
            value,
            label: value > 9 ? String(value) : `0${value}`
        };
    });
};

ReactDOM.render(<TimePicker2 renderTimeMenuItems={renderTimeMenuItems} />, mountNode);
````
