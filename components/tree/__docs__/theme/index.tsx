import React from 'react';
import ReactDOM from 'react-dom';
import '../../../demo-helper/style';
import '../../style';
import { Demo, type DemoFunctionDefineForObject, DemoGroup, initDemo } from '../../../demo-helper';
import Tree from '../../index';
import type { TreeProps } from '../../types';

const TreeNode = Tree.Node;

const i18nMap = {
    'zh-cn': {
        trunk: '树干',
        branch: '数枝',
        leaf: '叶子',
    },
    'en-us': {
        trunk: 'Trunk',
        branch: 'Branch',
        leaf: 'Leaf',
    },
};

interface FunctionGroupButtonProps {
    i18n: Record<string, string>;
}
class FunctionDemo extends React.Component<
    FunctionGroupButtonProps,
    {
        demoFunction: Record<string, DemoFunctionDefineForObject>;
        selectedKeys: string[];
        checkedKeys: string[];
    }
> {
    constructor(props: FunctionGroupButtonProps) {
        super(props);
        this.state = {
            demoFunction: {
                checkable: {
                    label: '复选框',
                    value: 'false',
                    enum: [
                        {
                            label: '显示',
                            value: 'true',
                        },
                        {
                            label: '隐藏',
                            value: 'false',
                        },
                    ],
                },
                isNodeBlock: {
                    label: '节点占满一行',
                    value: 'false',
                    enum: [
                        {
                            label: '是',
                            value: 'true',
                        },
                        {
                            label: '否',
                            value: 'false',
                        },
                    ],
                },
            },
            selectedKeys: ['2'],
            checkedKeys: [],
        };

        this.onFunctionChange = this.onFunctionChange.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onCheck = this.onCheck.bind(this);
    }

    onFunctionChange(demoFunction: Record<string, DemoFunctionDefineForObject>) {
        const st = { demoFunction } as {
            demoFunction: Record<string, DemoFunctionDefineForObject>;
            selectedKeys: string[];
            checkedKeys: string[];
        };
        if (demoFunction.checkable.value === 'true') {
            st.selectedKeys = [];
            st.checkedKeys = ['2'];
        } else {
            st.checkedKeys = [];
            st.selectedKeys = ['2'];
        }

        this.setState(st);
    }

    onSelect(selectedKeys: string[]) {
        this.setState({
            selectedKeys,
        });
    }

    onCheck(checkedKeys: string[]) {
        this.setState({
            checkedKeys,
        });
    }

    render() {
        const { i18n } = this.props;
        const { demoFunction, selectedKeys, checkedKeys } = this.state;
        const checkable = demoFunction.checkable.value === 'true';
        const selectable = !checkable;
        const isNodeBlock = demoFunction.isNodeBlock.value === 'true';

        const treeProps: TreeProps = {
            style: {
                width: '300px',
            },
            defaultExpandAll: true,
            selectable,
            selectedKeys,
            onSelect: this.onSelect,
            checkable,
            checkedKeys,
            onCheck: this.onCheck,
        };
        if (isNodeBlock) {
            treeProps.isNodeBlock = { defaultPaddingLeft: '40px' };
        } else {
            treeProps.style!.paddingLeft = '40px';
        }

        return (
            <Demo
                title="Basic"
                demoFunction={demoFunction}
                onFunctionChange={this.onFunctionChange}
            >
                <DemoGroup label="Normal">
                    <Tree {...treeProps}>
                        {/* --------- this is for config platform ----------- */}
                        <TreeNode
                            style={{ display: 'none' }}
                            label={<div className="next-tree-unfold-icon" />}
                            key="0-extra"
                        />
                        {/* --------- this is for config platform ----------- */}
                        <TreeNode label={i18n.trunk} key="0">
                            <TreeNode label={i18n.branch} disabled key="1">
                                <TreeNode label={i18n.branch} key="2">
                                    <TreeNode label={i18n.leaf} key="3" />
                                </TreeNode>
                                <TreeNode label={i18n.leaf} key="4" />
                            </TreeNode>
                            <TreeNode label={i18n.branch} key="5">
                                <TreeNode label={i18n.leaf} key="6" />
                                <TreeNode label={i18n.leaf} key="7" />
                            </TreeNode>
                        </TreeNode>
                    </Tree>
                </DemoGroup>
            </Demo>
        );
    }
}

class FunctionDemoLine extends React.Component<
    FunctionGroupButtonProps,
    {
        demoFunction: Record<string, DemoFunctionDefineForObject>;
        selectedKeys: string[];
        checkedKeys: string[];
    }
> {
    constructor(props: FunctionGroupButtonProps) {
        super(props);
        this.state = {
            demoFunction: {
                checkable: {
                    label: '复选框',
                    value: 'false',
                    enum: [
                        {
                            label: '显示',
                            value: 'true',
                        },
                        {
                            label: '隐藏',
                            value: 'false',
                        },
                    ],
                },
            },
            selectedKeys: ['2'],
            checkedKeys: [],
        };

        this.onFunctionChange = this.onFunctionChange.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onCheck = this.onCheck.bind(this);
    }

    onFunctionChange(demoFunction: Record<string, DemoFunctionDefineForObject>) {
        const st = { demoFunction } as {
            demoFunction: Record<string, DemoFunctionDefineForObject>;
            selectedKeys: string[];
            checkedKeys: string[];
        };
        if (demoFunction.checkable.value === 'true') {
            st.selectedKeys = [];
            st.checkedKeys = ['2'];
        } else {
            st.checkedKeys = [];
            st.selectedKeys = ['2'];
        }

        this.setState(st);
    }

    onSelect(selectedKeys: string[]) {
        this.setState({
            selectedKeys,
        });
    }

    onCheck(checkedKeys: string[]) {
        this.setState({
            checkedKeys,
        });
    }

    render() {
        const { i18n } = this.props;
        const { demoFunction, selectedKeys, checkedKeys } = this.state;
        const checkable = demoFunction.checkable.value === 'true';
        const selectable = !checkable;

        const treeProps = {
            showLine: true,
            style: {
                width: '300px',
                paddingLeft: '40px',
            },
            defaultExpandAll: true,
            selectable,
            selectedKeys,
            onSelect: this.onSelect,
            checkable,
            checkedKeys,
            onCheck: this.onCheck,
        };

        return (
            <Demo
                title="ShowLine"
                demoFunction={demoFunction}
                onFunctionChange={this.onFunctionChange}
            >
                <DemoGroup label="Normal">
                    <Tree {...treeProps}>
                        {/* --------- this is for config platform ----------- */}
                        <TreeNode
                            style={{ display: 'none' }}
                            label={
                                <div className="next-tree-switcher next-line">
                                    <i className="next-tree-switcher-fold-icon"></i>
                                </div>
                            }
                            key="0-extra"
                        />

                        <TreeNode label={i18n.trunk} key="0">
                            <TreeNode label={i18n.branch} disabled key="1">
                                <TreeNode label={i18n.branch} key="2">
                                    <TreeNode label={i18n.leaf} key="3" />
                                </TreeNode>
                                <TreeNode label={i18n.leaf} key="4" />
                            </TreeNode>
                            <TreeNode label={i18n.branch} key="5">
                                <TreeNode label={i18n.leaf} key="6" />
                                <TreeNode label={i18n.leaf} key="7" />
                            </TreeNode>
                        </TreeNode>
                    </Tree>
                </DemoGroup>
            </Demo>
        );
    }
}

function render(i18n: any) {
    ReactDOM.render(
        <div className="demo-container">
            <FunctionDemo i18n={i18n} />
            <FunctionDemoLine i18n={i18n} />
        </div>,
        document.getElementById('container')
    );
}

window.renderDemo = function (lang = 'en-us') {
    render(i18nMap[lang]);
};

window.renderDemo();

initDemo('tree');
