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
import { Select, Balloon } from '@alifd/next';

const { Tooltip } = Balloon;

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


class Demo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: []
    };
  }

  handleChange = (value) => {
    this.setState({value});
  }

  render() {
    return (
    <Select hasSelectAll value={this.state.value}  mode="multiple" onChange={this.handleChange} dataSource={dataSource} style={{width: 200}} />);
  }
}

const maxTagPlaceholder = (selectedValues, totalValues) => {
    const trigger = <span>{`已选择 ${selectedValues.length}/${totalValues.length} 项`}</span>;
    const labels = selectedValues.map(obj => obj.label);

    return <Tooltip trigger={trigger}>{ labels.join(', ') }</Tooltip>
}

ReactDOM.render(
    <div>
        <Select mode="multiple" onChange={handleChange} dataSource={dataSource} style={{width: 200}} />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        受控写法 <Demo /><br /><br />
        设置最大显示Tag数 (maxTagCount) <br />
        <Select maxTagCount={2} mode="multiple" onChange={handleChange} dataSource={dataSource} style={{width: 200}} /> <br /><br />
        设置最大显示Tag数，并自定义超出显示内容 (maxTagCount + maxTagPlaceholder) <br />
        <Select maxTagCount={2} maxTagPlaceholder={maxTagPlaceholder} mode="multiple" onChange={handleChange} dataSource={dataSource} style={{width: 200}} /><br /><br />
        设置一行展示 (tagInline) <br />
        <Select maxTagCount={2} tagInline mode="multiple" onChange={handleChange} dataSource={dataSource} style={{width: 200}} /><br /><br />
        设置一行展示，并自定义超出显示内容 (tagInline + maxTagPlaceholder) <br />
        <Select maxTagCount={2} tagInline maxTagPlaceholder={maxTagPlaceholder} mode="multiple" onChange={handleChange} dataSource={dataSource} style={{width: 200}} /><br /><br />
    </div>
, mountNode);
````
