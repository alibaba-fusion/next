import React from 'react';
import ReactDOM from 'react-dom';
import { Tree } from '@alifd/next';

const TreeNode = Tree.Node;

ReactDOM.render(
    <Tree
        defaultExpandAll
        isNodeBlock={{ defaultPaddingLeft: 50 }}
        defaultSelectedKeys={['1']}
        style={{ width: '300px' }}
    >
        <TreeNode label="Component" key="0">
            <TreeNode label="Form" key="1" disabled>
                <TreeNode label="Select" key="2">
                    <TreeNode label="TreeSelect" key="3" />
                </TreeNode>
                <TreeNode label="Input" key="4" />
            </TreeNode>
            <TreeNode label="Display" key="5">
                <TreeNode label="Card" key="6" />
                <TreeNode label="Table" key="7" />
            </TreeNode>
        </TreeNode>
    </Tree>,
    mountNode
);
