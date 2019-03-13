# 多选

- order: 2

多选模式

:::lang=en-us
# Multiple

- order: 2

multiple select

:::
---

````jsx
import { Select } from '@alifd/next';

const dataSource = [
    {value: '10001', label: 'Lucy King'},
    {value: 10002, label: 'Lily King'},
    {value: 10003, label: 'Tom Cat', disabled: true},
    {label: 'Special Group', children: [
        {value: new Date(), label: 'new Date()'},
        {value: 'false', label: 'FALSE'},
        {value: 0, label: 'ZERO'}
    ]}
];

function handleChange(value) {
    console.log(value);
}

ReactDOM.render(
    <div>
        <Select mode="multiple" onChange={handleChange} dataSource={dataSource} style={{width: 200}} />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Select hasSelectAll mode="multiple" onChange={handleChange} dataSource={dataSource} style={{width: 200}} />
    </div>
, mountNode);
````
