# 分组

- order: 5

使用 OptionGroup 针对选项进行分组，也可以使用原生的 html 标签 optgroup

:::lang=en-us
# Group

- order: 5

use OptionGroup
:::
---

````jsx
import { Select } from '@alifd/next';

const {Option, OptionGroup} = Select;

const dataSource = [{
    label: 'label1',
    children: [{
        label: 'label1-1',
        value: 'text1-1'
    }]
}, {
    label: 'label2',
    children: [{
        label: 'label2-1',
        value: 'text2-1'
    }]
}];

ReactDOM.render(
    <div className="demo-container">
        <Select placeholder="OptionGroup">
            <OptionGroup label="group1">
                <Option value="small">Small</Option>
                <Option value="medium">Medium</Option>
                <Option value="large">Large</Option>
            </OptionGroup>
            <OptionGroup label="group2">
                <Option value="small2">Small2</Option>
                <Option value="medium2">Medium2</Option>
                <Option value="large2">Large2</Option>
            </OptionGroup>
        </Select>
        <Select placeholder="optgroup">
            <option value="apple">Apple</option>
            <option value="orange">Orange</option>
            <option value="banana">Banana</option>
            <optgroup label="Pets Group">
                <option value="cat">Cat</option>
                <option value="rabbit">Rabbit</option>
                <option value="dog" disabled>Dog</option>
            </optgroup>
        </Select>
        <Select placeholder="item.children" dataSource={dataSource}/>
    </div>,
    mountNode
);
````

````css
.next-select {
    margin-right:10px;
}

.demo-container {
    background-color: #F8F8F8;
    padding: 16px;
}
````
