# 使用数据直接生成

- order: 1

使用 `dataSource` 生成树结构，除设置 label, value, key, children 属性外，还可传入 TreeNode 的其他属性，包括 selectable, disabled, checkboxDisabled, isLeaf，推荐使用 `dataSource` 而不是手动生成 `TreeNode` 的方式生成树，这样使用更简单，性能更好。

:::lang=en-us
# Render by dataSource

- order: 1

Using the dataSource generate tree structure, in addition to setting the key, label, and children properties, you can pass in other TreeNode properties, including selectable, disabled, checked, checkboxDisabled, and isLeaf. It is recommended to use `dataSource` instead of manually generate a tree, which is easier to use and better performance.
:::

---

````jsx
import { TreeSelect } from '@alifd/next';

const treeData = [{
    label: 'Component',
    value: '1',
    children: [{
        label: 'Form',
        value: '2',
        children: [{
            label: 'Input',
            value: '4'
        }, {
            label: 'Select',
            value: '5',
            disabled: true
        }]
    }, {
        label: 'Display',
        value: '3',
        children: [{
            label: 'Table',
            value: '6'
        }]
    }]
}];
class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value, data) {
        console.log(value, data);
    }

    render() {
        return (
            <TreeSelect treeDefaultExpandAll dataSource={treeData} onChange={this.handleChange} style={{ width: 200 }} />
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````
