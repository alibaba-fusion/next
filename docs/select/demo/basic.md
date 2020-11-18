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

const onToggleHighlightItem = function (item, type) {
    console.log(item, type);
};

const onFocus = () => {
  console.log('focus');
};

const onBlur = () => {
  console.log('blur');
};

ReactDOM.render(
  <div>
    <Select
      id="basic-demo"
      onChange={onChange}
      onToggleHighlightItem={onToggleHighlightItem}
      defaultValue="jack"
      onFocus={onFocus}
      onBlur={onBlur}
      aria-label="name is"
      style={{marginRight: 8}}
    >
      <Option value="jack">Jack</Option>
      <Option value="frank">Frank</Option>
      <Option value="hugo">Hugo</Option>
    </Select>


    <Select
      defaultValue="hugo"
      hasClear
      style={{marginRight: 8}}
    >
      <Option value="jack">Jack</Option>
      <Option value="frank">Frank</Option>
      <Option value="hugo">Hugo</Option>
    </Select>

    <Select
      placeholder="show search"
      showSearch
      hasClear
      style={{marginRight: 8}}
    >
      <Option value="jack">Jack</Option>
      <Option value="frank">Frank</Option>
      <Option value="hugo">Hugo</Option>
    </Select>
    
    <Select
      disabled
      defaultValue="frank"
      style={{marginRight: 8}}
    >
      <Option value="jack">Jack</Option>
      <Option value="frank">Frank</Option>
      <Option value="hugo">Hugo</Option>
    </Select>

  </div>,
  mountNode
);
````
