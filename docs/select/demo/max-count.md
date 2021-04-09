# 最大数量

- order: 3

多选模式下通过 `maxTagCount` 控制选择的个数，通过 `maxTagPlaceholder` 控制选择的 hover 样式

:::lang=en-us
# max count

- order: 3

multiple select

:::
---

````jsx
import { Select, Balloon } from '@alifd/next';

const { Tooltip } = Balloon;

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

const maxTagPlaceholder = (selectedValues, totalValues) => {
    const trigger = <span>{`${selectedValues.length}/${totalValues.length}`}</span>;
    const labels = selectedValues.map(obj => obj.label);

    return <Tooltip trigger={trigger}>{ labels.join(', ') }</Tooltip>;
};

const style= { width: 200, marginRight: 8 };

ReactDOM.render(
    <div style={{display: 'flex', alignItems: 'flex-start'}}>
        <Select placeholder="select all" hasSelectAll mode="multiple" onChange={handleChange} dataSource={dataSource} style={style} />

        <Select maxTagCount={2} defaultValue={['10001', '10002', '-1']} mode="multiple" onChange={handleChange} dataSource={dataSource} style={style}  /> 
        
        <Select maxTagCount={2} maxTagPlaceholder={maxTagPlaceholder} defaultValue={['10001', '10002', '-1']} mode="multiple" onChange={handleChange} dataSource={dataSource} style={style}  /> 
        
        <Select maxTagCount={2} tagInline mode="multiple" defaultValue={['10001', '10002', '-1']}  onChange={handleChange} dataSource={dataSource} style={style} /><br /><br />
    </div>
, mountNode);
````
