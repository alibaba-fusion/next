# 自定义 value

- order: 6

Select 的 value 可以是任意非空类型的值，但是要保证 toString() 后是唯一的。

:::lang=en-us
# custom value

- order: 6

value of Select could be any type, but it should be unique after `toString()`
:::
---

````jsx
import { Select } from '@alifd/next';

const dataSource = [
    {value: 'Lilith', age: 22, gender: 'F'},
    {value: 'Tom Cat', age: 28, gender: 'M'},
    {value: 'Jim Green', age: 18, gender: 'M'},
    {value: 'Monkey King', age: 999, gender: 'M'}
];

const handleChange = value => {
    console.log('handleChange: ', value);
};

const valueRender = v => {
    return `${v.value} / ${v.gender} / ${v.age}`;
};

ReactDOM.render(<Select mode="multiple" placeholder="custom value" valueRender={valueRender} dataSource={dataSource} onChange={handleChange} />, mountNode);
````

