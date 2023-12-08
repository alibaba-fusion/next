# 数据直接生成

-   order: 1

使用 dataSource 生成树结构，除设置 `key`, `label`, `children` 属性外，还可传入 `TreeNode` 的其他属性，详细见[TreeNode API](../tree#Tree.Node)，推荐使用该方式生成 Tree 组件。

:::lang=en-us

# Render by dataSource

-   order: 1

Using the dataSource generate tree structure, in addition to setting the key, label, and children properties, you can pass in other TreeNode properties, including selectable, disabled, checked, checkboxDisabled, and isLeaf. It is recommended to use `dataSource` instead of manually generate a tree, which is easier to use and better performance.
:::

---

````jsx
import { TreeSelect } from '@alifd/next';

const treeData = [
    {
        label: 'Component',
        value: '1',
        children: [
            {
                label: 'Form',
                value: '2',
                children: [
                    {
                        label: 'Input',
                        value: '4',
                    },
                    {
                        label: 'Select',
                        value: '5',
                        disabled: true,
                    },
                ],
            },
            {
                label: 'Display',
                value: '3',
                children: [
                    {
                        label: 'Table',
                        value: '6',
                    },
                ],
            },
        ],
    },
];
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
            <TreeSelect
                treeDefaultExpandAll
                dataSource={treeData}
                onChange={this.handleChange}
                style={{ width: 200 }}
            />
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````
