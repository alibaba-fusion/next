# 无障碍

- order: 8

请参考`ARIA and KeyBoard`。

:::lang=en-us

Please refer to `ARIA and KeyBoard`.

# Addon

- order: 8

:::
---

````jsx

import { Checkbox } from '@alifd/next';

const CheckboxGroup = () => (
    <div>
        <h4>Programming language：</h4>
        <Checkbox.Group itemDirection="pl">
            <Checkbox value="python">python</Checkbox>
            <Checkbox value="java">java</Checkbox>
            <Checkbox value="angular">angular</Checkbox>
            <Checkbox value="c">c</Checkbox>
            <Checkbox value="other">other</Checkbox>
        </Checkbox.Group>
    </div>
);

ReactDOM.render(<CheckboxGroup />, mountNode);

````
