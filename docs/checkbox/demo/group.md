# 分组

- order: 1

使用 `<Checkbox.Group>` 渲染 `<Checkbox>` 分组。

:::lang=en-us
# Grouping

- order: 0

Grouping `<Checkbox>` with `<Checkbox.Group>`.
:::

---

````jsx
import { Checkbox } from '@alifd/next';

const CheckboxGroup = () => (
    <div>
        <h4>Horizonal direction</h4>
        <p>
            <Checkbox.Group itemDirection="hoz">
                <Checkbox value="react">React</Checkbox>
                <Checkbox value="vue">Vue</Checkbox>
                <Checkbox value="angular">Angular</Checkbox>
            </Checkbox.Group>
        </p>
        <h4>Vertical direction</h4>
        <p>
            <Checkbox.Group itemDirection="ver">
                <Checkbox value="react">React</Checkbox>
                <Checkbox value="vue">Vue</Checkbox>
                <Checkbox value="angular">Angular</Checkbox>
            </Checkbox.Group>
        </p>
    </div>
);

ReactDOM.render(<CheckboxGroup />, mountNode);
````
