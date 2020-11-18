# 无障碍支持

- order: 8

请参考后文[#无障碍键盘操作指南](#无障碍键盘操作指南)。


:::lang=en-us
# Accessibility

- order: 8

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
