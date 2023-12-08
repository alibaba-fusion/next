# 调整标签尺寸

- order: 3
- debug: true

标签尺寸是否和`Select`尺寸保持一致（仅在`多选/标签`模式下生效），默认false。

:::lang=en-us
# Adjust Tag Size 

- order: 3
- debug: true

Set if the size of tag should be the same as select when mode is `multiple` or `tag`

:::
---

````jsx
import { Select } from '@alifd/next';

const dataSource = [
    {value: '10001', label: 'Lucy King'},
    {value: 10002, label: 'Lily King'},
    {value: 10003, label: 'Tom Cat'},
];

const style= { width: 200, marginRight: 8 };

ReactDOM.render(
    <div style={{display: 'flex', alignItems: 'flex-start'}}>
        <Select mode="multiple" value={['10001']} size={'small'} adjustTagSize dataSource={dataSource} style={style} />
        <Select mode="multiple" value={['10001']} adjustTagSize dataSource={dataSource} style={style} />
    </div>
, mountNode);
````
