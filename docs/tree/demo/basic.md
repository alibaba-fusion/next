# 基本

- order: 0

最简单的用法，展示可展开，可选中，可勾选，可编辑，可右键，禁用，禁用勾选，默认展开，默认选中，默认勾选等功能。

:::lang=en-us
# Basic

- order: 0

the simplest usage: can be expanded, selectable, checkable, editable, can be right-clicked, disabled, disabled-checked, default expanded, selected by default, checked by default, etc.
:::

---

````jsx
import { Tree, Button, Icon } from '@alifd/next';

const TreeNode = Tree.Node;

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
                onRightClick={this.onRightClick}>
                <TreeNode key="1" label="Component" icon={<Icon type="smile"/>}>
                    <TreeNode key="2" label="Form" selectable={false} icon="smile">
                        <TreeNode key="4" label="Input" icon="smile"/>
                        <TreeNode key="5" label="Select" disabled  icon="cry"/>
                    </TreeNode>
                    <TreeNode key="3" label="Display" icon="smile">
                        <TreeNode key="6" label="Table" icon="smile"/>
                    </TreeNode>
                </TreeNode>
            </Tree>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````
