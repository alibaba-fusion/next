# 无障碍

- order: 7

请参考`ARIA and KeyBoard`。


:::lang=en-us

Please refer to `ARIA and KeyBoard`.

# Addon

- order: 7

:::
---

````jsx
import { Radio } from '@alifd/next';

const RadioGroup = Radio.Group;
ReactDOM.render(<div>
    <RadioGroup>
        <Radio id="python" value="python">python</Radio>
        <Radio id="java" value="java">java</Radio>
        <Radio id="c" value="c">c</Radio>
    </RadioGroup>
</div>
    , mountNode);

````
