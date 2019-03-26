# 基本使用

- order: 0

简单

:::lang=en-us
# Basic

- order: 0

simple usage
:::
---

````jsx
import { Select } from '@alifd/next';

const Option = Select.Option;

const onChange = function (value) {
    console.log(value);
};
const onBlur = function (e) {
    console.log(/onblur/,e);
};

const onToggleHighlightItem = function (item, type) {
    console.log(item, type);
};

ReactDOM.render(<Select id="basic-demo" onChange={onChange} onBlur={onBlur} onToggleHighlightItem={onToggleHighlightItem} defaultValue="jack" aria-label="name is" showSearch hasClear>
    <Option value="jack">Jack</Option>
    <Option value="frank">Frank</Option>
    <Option value="hugo">Hugo</Option>
</Select>, mountNode);
````
