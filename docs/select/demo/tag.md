# 标签

- order: 1

标签模式，输入的内容可以作为选项

:::lang=en-us
# Tag

- order: 1

Tag mode, can use input value as option

:::
---

````jsx
import { Select } from '@alifd/next';

const dataSource = [
    {value: '10001', label: 'Lucy King'},
    {value: 10002, label: 'Lily King'},
    {value: 10003, label: 'Tom Cat', disabled: true},
    {label: 'Special Group', children: [
        {value: -1, label: 'FALSE'},
        {value: 0, label: 'ZERO'}
    ]}
];

function handleChange(value) {
    console.log(value);
}

ReactDOM.render(<Select aria-label="tag mode" mode="tag" defaultValue={['10001']} onChange={handleChange} dataSource={dataSource} style={{width: 300}} />, mountNode);
````
