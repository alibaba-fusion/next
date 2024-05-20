import React from 'react';
import ReactDOM from 'react-dom';

import { TreeSelect } from '@alifd/next';
import type { TreeSelectProps } from '@alifd/next/lib/tree-select';

const TreeNode = TreeSelect.Node;

class Demo extends React.Component {
    handleChange: TreeSelectProps['onChange'] = (value, data) => {
        console.log(value, data);
    };

    render() {
        return (
            <TreeSelect treeDefaultExpandAll onChange={this.handleChange} style={{ width: 200 }}>
                <TreeNode key="1" value="1" label="Component">
                    <TreeNode key="2" value="2" label="Form">
                        <TreeNode key="4" value="4" label="Input" />
                        <TreeNode key="5" value="5" label="Select" disabled />
                    </TreeNode>
                    <TreeNode key="3" value="3" label="Display">
                        <TreeNode key="6" value="6" label="Table" />
                    </TreeNode>
                </TreeNode>
            </TreeSelect>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
