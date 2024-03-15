import React from 'react';
import ReactDOM from 'react-dom';
import { Checkbox, Tree } from '@alifd/next';
import type { TreeProps } from '@alifd/next/lib/tree';

const data = [
    {
        label: 'Component',
        key: '1',
        children: [
            {
                label: 'Form',
                key: '2',
                selectable: false,
                children: [
                    {
                        label: 'Input',
                        key: '4',
                    },
                    {
                        label: 'Select',
                        key: '5',
                        disabled: true,
                    },
                ],
            },
            {
                label: 'Display',
                key: '3',
                children: [
                    {
                        label: 'Table',
                        key: '6',
                    },
                ],
            },
        ],
    },
];
class Demo extends React.Component {
    state = {
        checkedKeys: [],
        checkStrictly: false,
    };

    handleCheck: TreeProps['onCheck'] = (keys, extra) => {
        console.log(keys, extra);

        this.setState({
            checkedKeys: keys,
        });
    };

    handleCheckStrictly = () => {
        this.setState({
            checkStrictly: !this.state.checkStrictly,
            checkedKeys: [],
        });
    };

    render() {
        const { checkedKeys, checkStrictly } = this.state;

        return (
            <div className="control-check-demo">
                <label className="strictly-check">
                    <Checkbox checked={checkStrictly} onChange={this.handleCheckStrictly} />
                    <span className="strictly-text">取消选中关联</span>
                </label>
                <Tree
                    defaultExpandAll
                    checkable
                    checkStrictly={checkStrictly}
                    checkedKeys={checkedKeys}
                    onCheck={this.handleCheck}
                    dataSource={data}
                />
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
