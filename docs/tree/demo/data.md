# 使用数据直接生成

- order: 1

使用 dataSource 生成树结构，除设置 key, label, children 属性外，还可传入 TreeNode 的其他属性，包括 selectable，disabled，checkable, checkboxDisabled, isLeaf 等。

:::lang=en-us
# Render by dataSource

- order: 1

Using the dataSource generate tree structure, in addition to setting the key, label, and children properties, you can pass in other TreeNode properties, including selectable, disabled, checked, checkboxDisabled, and isLeaf.
:::

---

````jsx
import { Tree } from '@alifd/next';

const data = Object.freeze([{
    label: 'Component',
    key: '1',
    children: [Object.freeze({
        label: 'Form',
        key: '2',
        selectable: false,
        children: [{
            label: 'Input',
            key: '4'
        }, {
            label: 'Select',
            key: '5',
            disabled: true
        }]
    }), {
        label: 'Display',
        key: '3',
        children: [{
            label: 'Table',
            key: '6'
        }]
    }]
}]);

class Demo extends React.Component {
    onSelect(keys, info) {
        console.log('onSelect', keys, info);
    }

    onCheck(keys, info) {
        console.log('onCheck', keys, info);
    }

    onEditFinish(key, label, node) {
        console.log('onEditFinish', key, label, node);
    }

    onRightClick(info) {
        console.log('onRightClick', info);
    }

    render() {
        return (
            <Tree checkable editable
                defaultExpandedKeys={['2']}
                defaultCheckedKeys={['2', '4', '5']}
                onSelect={this.onSelect}
                onCheck={this.onCheck}
                onEditFinish={this.onEditFinish}
                onRightClick={this.onRightClick}
                dataSource={data} />
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````
