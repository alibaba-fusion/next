import { Tree } from '@alifd/next';
import React from 'react';
import ReactDOM from 'react-dom';
import type { TreeProps } from '@alifd/next/types/tree';

const TreeNode = Tree.Node;

class Demo extends React.Component {
    onSelect: TreeProps['onSelect'] = (keys, info) => {
        console.log('onSelect', keys, info);
    };

    onCheck: TreeProps['onCheck'] = (keys, info) => {
        console.log('onCheck', keys, info);
    };

    onEditFinish: TreeProps['onEditFinish'] = (key, label, node) => {
        console.log('onEditFinish', key, label, node);
    };

    onRightClick: TreeProps['onRightClick'] = info => {
        console.log('onRightClick', info);
    };

    render() {
        return (
            <Tree
                checkable
                editable
                defaultExpandedKeys={['2']}
                defaultCheckedKeys={['2', '4', '5']}
                onSelect={this.onSelect}
                onCheck={this.onCheck}
                onEditFinish={this.onEditFinish}
                onRightClick={this.onRightClick}
            >
                <TreeNode key="1" label="Component">
                    <TreeNode key="2" label="Form" selectable={false}>
                        <TreeNode key="4" label="Input" />
                        <TreeNode key="5" label="Select" disabled />
                    </TreeNode>
                    <TreeNode key="3" label="Display">
                        <TreeNode key="6" label="Table" />
                    </TreeNode>
                </TreeNode>
            </Tree>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
