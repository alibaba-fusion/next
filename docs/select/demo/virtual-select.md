# 无限滚动

- order: 15

select 配合无限滚动

:::lang=en-us
# virtual-select

- order: 15

select with virtual list
:::
---

````jsx
import { Select } from '@alifd/next';

const Option = Select.Option;

const onChange = function (value) {
    console.log(value);
};

function generateItem(index) {
    return {label: `option${index}`, value: `option${index}`};
}

function generateOption(index) {
    return <Option key={`option${index}`} value={`option${index}`}>{`option${index}`}</Option>;
}

function generateData(len, isOption) {
    const data = [];

    for (let i = 0; i < len; i++) {
        isOption ? data.push(generateOption(i)) : data.push(generateItem(i));
    }

    return data;
}

ReactDOM.render(
    <div>
        <Select dataSource={generateData(100)} useVirtual onChange={onChange} defaultValue="option0" />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Select useVirtual onChange={onChange} defaultValue="option50">
            {generateData(100, true)}
        </Select>
        <br />
        <br />
        <Select style={{width: 300}} hasSelectAll tagInline mode="multiple" dataSource={generateData(100)} useVirtual onChange={onChange} defaultValue={["option0"]} />
    </div>
    , mountNode);
````
