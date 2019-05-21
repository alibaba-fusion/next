# 无障碍

- order: 7

请参考`ARIA and KeyBoard`。


:::lang=en-us
# Accessibility

- order: 7

Please refer to `ARIA and KeyBoard`.

:::
---

````jsx
import { Radio } from '@alifd/next';

const RadioGroup = Radio.Group;
ReactDOM.render(
    <div>
        <span id="radio-a11y">Programming language ：</span>
        <RadioGroup aria-labelledby="radio-a11y">
            <Radio id="python" value="python">python</Radio>
            <Radio id="java" value="java">java</Radio>
            <Radio id="c" value="c">c</Radio>
        </RadioGroup>
    </div>
    , mountNode);

````
