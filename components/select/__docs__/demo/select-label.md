# 前后缀

- order: 7

Select 增加前后缀

:::lang=en-us
# prefix and suffix

- order: 7

add prefix or suffix to select
:::
---

````jsx
import { Select } from '@alifd/next';

const dataSource = [
    {label: '1', value: 1},
    {label: '10', value: 10},
    {label: '50', value: 50},
    {label: '100', value: 100}
];

const handleChange = value => {
    console.log('handleChange: ', value);
};

ReactDOM.render(<Select label="size:" innerAfter={<span style={{color: '#999', marginRight: 4}}>GB</span>} dataSource={dataSource} onChange={handleChange} />, mountNode);
````

