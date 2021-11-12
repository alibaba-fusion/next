# 基本使用

- order: 0

最基本的使用、带清除、搜索功能的展示

:::lang=en-us
# Basic

- order: 0

simple usage, has clear, show search
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
      defaultValue="clear"
      hasClear
      style={{marginRight: 8}}
    >
      <Option value="jack">Jack</Option>
      <Option value="frank">Frank</Option>
      <Option value="clear">clear</Option>
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
