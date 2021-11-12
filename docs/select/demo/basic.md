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

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Option = Select.Option;

const Demo = () => {
  const [value, setValue] = useState('jack');
  return <div>
    <Select
      value={value}
      onChange={(value) => {
        setValue(value);
      }}
      style={{ marginRight: 8 }}
    >
      <Option value="jack">Jack</Option>
      <Option value="frank">Frank</Option>
      <Option value="hugo">Hugo</Option>
    </Select>
  </div>
}

ReactDOM.render(
  <Demo />,
  mountNode
);

````
