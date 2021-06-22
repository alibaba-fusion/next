# 标签尺寸

- order: 3

标签模式或多选模式下通过 `tagSize` 显式设置标签尺寸。

:::lang=en-us
# Tag size 

- order: 3

use `tagSize` to set size of tag when mode is `multiple` or `tag`

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
        <Select mode="multiple" value={['10001']} tagSize={'small'} dataSource={dataSource} style={style} />
        <Select mode="multiple" value={['10001']} tagSize={'medium'} dataSource={dataSource} style={style} />
    </div>
, mountNode);
````
