# 对象数据

- order: 8

`useDetailValue` 把 `value` `onChange` 第一个参数 从字符串变成对象

:::lang=en-us
# useDetailValue

- order: 8

`useDetailValue` change `value` `onChange` from string to object

:::
---

````jsx
import { Select } from '@alifd/next';

const dataSource = [
    {value: '10001', label: 'Lucy King'},
    {value: 10002, label: 'Lily King'},
    {value: 10003, label: 'Tom Cat', disabled: true},
];

function handleChange(value) {
    console.log(value);
}

ReactDOM.render(<Select useDetailValue defaultValue={{value: '10001', label: 'Lucy King'}} onChange={handleChange} dataSource={dataSource} style={{width: 150}} />, mountNode);
````
