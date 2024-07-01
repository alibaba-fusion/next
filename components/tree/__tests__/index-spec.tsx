import React, { Component, createRef, useState } from 'react';
import propTypes from 'prop-types';
import { KEYCODE } from '../../util';
import Tree from '../index';
import Button from '../../button/index';
import Icon from '../../icon/index';
import '../style';
import type { DataNode, Key, NodeInstance, TreeProps } from '../types';

const TreeNode = Tree.Node;

const dataSource: DataNode[] = [
    {
        label: '服装',
        key: '1',
        className: 'k-1',
        icon: 'cry',
        children: [
            {
                label: '男装',
                key: '2',
                className: 'k-2',
                disabled: true,
                icon: <Icon type="smile" />,
                children: [
                    {
                        label: '外套',
                        className: 'k-4',
                        selectable: false,
                        key: '4',
                    },
                    {
                        label: '夹克',
                        className: 'k-5',
                        key: '5',
                    },
                ],
            },
            {
                label: '女装',
                className: 'k-3',
                key: '3',
                children: [
                    {
                        label: '裙子',
                        className: 'k-6',
                        key: '6',
                    },
                ],
            },
        ],
    },
];

function createMap(data: DataNode[]) {
    const map: Record<Key, DataNode> = {};

    const loop = (data: DataNode[], prefix = '0') =>
        data.forEach((item, index) => {
            const { key, children } = item;
            const pos = `${prefix}-${index}`;
            map[key] = { ...item, pos };
            if (children && children.length) {
                loop(children, pos);
            }
        });
    loop(data);

    return map;
}
const _k2n = createMap(dataSource);

function cloneData(data: DataNode[], keyMap: Record<number, Partial<DataNode>> = {}) {
    const loop = (data: DataNode[]) =>
        data.map(item => {
            let newItem;

            if (item.key in keyMap) {
                newItem = { ...item, ...keyMap[Number(item.key)] };
            } else {
                newItem = { ...item };
            }
            if (newItem.children) {
                newItem.children = loop(newItem.children);
            }

            return newItem;
        });

    return loop(data);
}

function flattenData(dataSource: DataNode[]) {
    const flattenList: DataNode[] = [];
    const drill = (data: DataNode[]) => {
        data.forEach(item => {
            const { children, ...newItem } = item;
            flattenList.push(newItem);
            children && children.length && drill(children);
        });
    };

    drill(dataSource);

    return flattenList;
}

function getAllLabels() {
    return cy.get('li.next-tree-node .next-tree-node-label');
}

function findTreeNodeByKey(key: Key) {
    return cy.get(`.k-${key}`);
}

function shouldTree(props: Pick<TreeProps, 'dataSource' | 'children' | 'immutable'>) {
    cy.mount(
        <Tree
            checkable
            editable
            defaultExpandAll
            defaultSelectedKeys={['1']}
            defaultCheckedKeys={['3']}
            {...props}
        />
    );
    const labels = flattenData(props.dataSource!).map(({ label }) => label);
    getAllLabels().then($labels => {
        labels.map((lable, index) => expect($labels.eq(index).text()).to.equal(lable));
    });

    findTreeNodeByKey('2').find('.next-tree-node-inner').should('have.class', 'next-disabled');
}

function shouldExpanded(key: Key, expanded: boolean, childrenKeys?: Key[]) {
    const children = _k2n[key].children;
    const keys = childrenKeys || (children && children.map(({ key }) => key)) || [];

    keys.every(key => findTreeNodeByKey(key).should(expanded ? 'exist' : 'not.exist'));
}

function expandChildTree(key: Key) {
    findTreeNodeByKey(key).find('.next-tree-switcher').first().click();
}

function shouldSelected(key: Key, selected: boolean) {
    findTreeNodeByKey(key)
        .find('.next-tree-node-inner')
        .first()
        .should(selected ? 'have.class' : 'not.have.class', 'next-selected');
}

function selectTreeNode(key: Key) {
    findTreeNodeByKey(key).find('.next-tree-node-label').first().click();
}

function shouldChecked(key: Key, checked: boolean) {
    findTreeNodeByKey(key)
        .find('.next-checkbox-wrapper')
        .first()
        .should(checked ? 'have.class' : 'not.have.class', 'checked');
}

function checkTreeNode(key: Key) {
    findTreeNodeByKey(key).find('.next-checkbox-wrapper').first().click();
}

function shouldIndeterminate(key: Key, indeterminate: boolean) {
    findTreeNodeByKey(key)
        .find('.next-checkbox-wrapper')
        .first()
        .should(indeterminate ? 'have.class' : 'not.have.class', 'indeterminate');
}

function createDataSource(level = 2, count = 3) {
    const dataSource = [];

    const drill = (children: DataNode[], _level: number, _count: number) => {
        children.forEach(child => {
            child.children = new Array(_count).fill(null).map((__, k) => {
                const key = `${child.key}-${k}`;
                return {
                    key,
                    label: key,
                };
            });
            _level > 0 && drill(child.children, _level - 1, count);
        });
    };

    dataSource.push({
        label: '0-0',
        key: '0-0',
    });
    drill(dataSource, level, count);
    return dataSource;
}

function freeze(dataSource: DataNode[]) {
    return dataSource.map(item => {
        const { children } = item;
        children && freeze(children);
        return Object.freeze({ ...item });
    });
}

function editTreeNode(key: Key) {
    findTreeNodeByKey(key).find('.next-tree-node-label').first().dblclick();
}

function rightClickTreeNode(key: Key) {
    findTreeNodeByKey(key).find('.next-tree-node-label').first().rightclick();
}

function dragTreeNode(dragKey: Key, dropKey: Key, dropPosition: number, isCanDrop = true) {
    const dropNode = findTreeNodeByKey(dropKey);
    const dragNodeLabel = findTreeNodeByKey(dragKey).find('.next-tree-node-label').first();
    const dropNodeLabelWrapper = dropNode.find('.next-tree-node-label-wrapper').first();

    dragNodeLabel.trigger('dragstart');
    dropNodeLabelWrapper.trigger(
        'dragenter',
        dropPosition === 0 ? 'center' : dropPosition === -1 ? 'top' : 'bottom'
    );
    dropNodeLabelWrapper.trigger('dragover');
    if (isCanDrop) {
        dropNodeLabelWrapper.trigger('drop');
    }
}

function shouldEditing(key: Key, editing: boolean) {
    const treeNode = findTreeNodeByKey(key);
    const label = _k2n[key].label;

    if (editing) {
        treeNode
            .find('.next-tree-node-input input')
            .first()
            .should('exist')
            .and('have.value', label)
            .and('be.focused');
    } else {
        findTreeNodeByKey(key).find('.next-tree-node-label').first().should('exist');
    }
}

function findInnerNodeByKey(key: Key) {
    return findTreeNodeByKey(key).find('.next-tree-node-inner').first();
}

function findInnerNodeLabelWrapperByKey(key: Key) {
    return findInnerNodeByKey(key).find('.next-tree-node-label-wrapper').first();
}
function walk(
    dataSource: DataNode[],
    enter: (item: DataNode, level: number, index: number) => void,
    level = 1
) {
    dataSource.forEach((item, index) => {
        enter(item, level, index);
        const { children } = item;
        if (children && children.length) {
            walk(children, enter, level + 1);
        }
    });
}

function renderTreeNodeWithData(dataSource: DataNode[]) {
    const drill = (items: DataNode[]) => {
        if (items && items.length) {
            return items.map(({ key, children, ...others }) => (
                <TreeNode {...others} key={key}>
                    {children && drill(children)}
                </TreeNode>
            ));
        }
    };
    return drill(dataSource);
}

class ExpandDemo extends Component {
    state = {
        expandedKeys: ['2'],
    };

    handleExpand = (expandedKeys: Key[]) => {
        this.setState({
            expandedKeys,
        });
    };

    render() {
        return (
            <Tree
                expandedKeys={this.state.expandedKeys}
                dataSource={dataSource}
                onExpand={this.handleExpand}
            />
        );
    }
}
class SelectDemo extends Component {
    state = {
        selectedKeys: ['1'],
    };

    handleSelect = (selectedKeys: Key[]) => {
        this.setState({
            selectedKeys,
        });
    };

    render() {
        return (
            <Tree
                defaultExpandAll
                multiple
                selectedKeys={this.state.selectedKeys}
                dataSource={dataSource}
                onSelect={this.handleSelect}
                {...this.props}
            />
        );
    }
}
class CheckDemo extends Component<{ checkStrictly?: boolean }> {
    state = {
        checkedKeys: ['4', '5', '6'],
    };

    handleCheck = (checkedKeys: Key[]) => {
        this.setState({
            checkedKeys,
        });
    };

    render() {
        return (
            <Tree
                defaultExpandAll
                checkable
                checkedKeys={this.state.checkedKeys}
                dataSource={cloneData(dataSource, {
                    2: { disabled: false },
                })}
                onCheck={this.handleCheck}
                {...this.props}
            />
        );
    }
}
class DragDemo extends React.Component {
    static propTypes = {
        canDrop: propTypes.func,
    };

    static defaultProps = {
        canDrop: () => true,
    };

    props: {
        canDrop?: TreeProps['canDrop'];
    };

    state: {
        gData: ReturnType<typeof cloneData>;
    } = {
        gData: cloneData(dataSource),
    };

    onDrop = (info: {
        event: React.MouseEvent;
        node: NodeInstance;
        dragNode: NodeInstance;
        dragNodesKeys: Array<string>;
        dropPosition: number;
    }) => {
        const dragKey = info.dragNode.props.eventKey!;
        const dropKey = info.node.props.eventKey!;
        const dropPosition = info.dropPosition;
        const loop = (
            data: DataNode[],
            key: Key,
            callback: (item: DataNode, index: number, arr: DataNode[]) => void
        ) => {
            data.forEach((item, index, arr) => {
                if (item.key === key) {
                    return callback(item, index, arr);
                }
                if (item.children) {
                    return loop(item.children, key, callback);
                }
            });
        };
        const data = [...this.state.gData];
        let dragObj: DataNode | undefined;
        loop(data, dragKey, (item, index, arr) => {
            arr.splice(index, 1);
            dragObj = item;
        });
        if (info.dropPosition === 0) {
            loop(data, dropKey, item => {
                item.children = item.children || [];
                item.children.push(dragObj!);
            });
        } else {
            let ar: DataNode[] = [];
            let i: number = 0;
            loop(data, dropKey, (item, index, arr) => {
                ar = arr;
                i = index;
            });
            if (dropPosition === -1) {
                ar.splice(i, 0, dragObj!);
            } else {
                ar.splice(i + 1, 0, dragObj!);
            }
        }
        this.setState({
            gData: data,
        });
    };

    render() {
        return (
            <Tree
                draggable
                selectable={false}
                defaultExpandAll
                dataSource={this.state.gData}
                onDrop={this.onDrop}
                canDrop={this.props.canDrop}
            />
        );
    }
}

class AsyncDemo extends Component {
    state = {
        data: [
            {
                label: '服装',
                className: 'k-1',
                key: '1',
            },
        ],
    };

    loadData = () => {
        return new Promise<void>(resolve => {
            setTimeout(() => {
                this.setState({
                    data: [
                        {
                            label: '服装',
                            className: 'k-1',
                            key: '1',
                            children: [
                                {
                                    label: '男装',
                                    className: 'k-2',
                                    key: '2',
                                    isLeaf: true,
                                },
                            ],
                        },
                    ],
                });
                resolve();
            }, 200);
        });
    };

    render() {
        return <Tree dataSource={this.state.data} loadData={this.loadData} />;
    }
}

describe('Tree', () => {
    it('should render by children', () => {
        const loop = (data: DataNode[]) =>
            data.map(item => {
                const { key, ...rest } = item;
                return (
                    <TreeNode key={key} {...rest} className={`k-${item.key}`}>
                        {item.children ? loop(item.children) : null}
                    </TreeNode>
                );
            });

        shouldTree({ children: loop(dataSource), dataSource });
    });

    it('should switcher ignore flex when node is long text', () => {
        cy.mount(
            <Tree selectable={false} isLabelBlock defaultExpandedKeys={['0-0', '0-0-0', '0-0-0-0']}>
                <TreeNode
                    key="2"
                    className="long-text-node"
                    label={<div style={{ width: '200vw' }}>long text</div>}
                />
            </Tree>
        );
        cy.get('.long-text-node .next-tree-switcher').first().should('be.visible');
    });

    it('should ignore children contain null or string', () => {
        cy.mount(
            <Tree
                checkable
                editable
                defaultExpandAll
                defaultSelectedKeys={['1']}
                defaultCheckedKeys={['3']}
            >
                <TreeNode key="1" className="k-1" label="Component">
                    <TreeNode key="2" className="k-2" label="Form" selectable={false}>
                        <TreeNode key="4" className="k-4" label="Input" />
                        <TreeNode
                            aria-label="select one"
                            key="5"
                            className="k-5"
                            label="Select"
                            disabled
                        />
                    </TreeNode>
                    <TreeNode key="3" className="k-3" label="Display">
                        <TreeNode key="6" className="k-6" label="Table" />
                    </TreeNode>
                </TreeNode>
            </Tree>
        );

        findTreeNodeByKey('5').find('.next-checkbox-wrapper').should('have.class', 'disabled');
    });

    it('should render by dataSource', () => {
        shouldTree({ dataSource });
    });

    it('should support render child node', () => {
        cy.mount(
            <Tree
                defaultExpandedKeys={['2']}
                dataSource={dataSource}
                labelRender={nodeData => {
                    return <div className="custom-child-title">{nodeData.label}</div>;
                }}
            />
        );

        cy.get('.custom-child-title').should('exist');
    });

    it('should support render child nodes', () => {
        cy.mount(
            <Tree
                checkable
                editable
                defaultExpandAll
                defaultSelectedKeys={['1']}
                defaultCheckedKeys={['3']}
                renderChildNodes={nodes => {
                    if (
                        nodes.filter(
                            node =>
                                !node.props.children ||
                                (node.props.children as React.ReactElement[]).length === 0
                        ).length !== nodes.length
                    ) {
                        return (
                            <ul role="group" className={`next-tree-child-tree`}>
                                {nodes}
                            </ul>
                        );
                    }
                    return <ul className="custom-child-tree">{nodes}</ul>;
                }}
            >
                <TreeNode key="1" className="k-1" label="Component">
                    <TreeNode key="2" className="k-2" label="Form" selectable={false}>
                        <TreeNode key="4" className="k-4" label="Input" />
                        <TreeNode
                            aria-label="select one"
                            key="5"
                            className="5-1"
                            label="Select"
                            disabled
                        />
                    </TreeNode>
                    <TreeNode key="3" className="k-3" label="Display">
                        <TreeNode key="6" className="k-6" label="Table" />
                    </TreeNode>
                </TreeNode>
            </Tree>
        );

        cy.get('.custom-child-tree').should('exist');
    });

    it('should support defaultExpandedKeys and onExpand', () => {
        const onClick = cy.spy();

        const handleExpand = (
            expandedKeys: Key[],
            extra: {
                node: NodeInstance;
                expanded: boolean;
            }
        ) => {
            onClick();

            expect(expandedKeys.indexOf('3') > -1).to.be.true;
            expect(extra.node.props.eventKey).equal('3');
            expect(extra.expanded).to.be.true;
        };

        cy.mount(
            <Tree defaultExpandedKeys={['2']} dataSource={dataSource} onExpand={handleExpand} />
        );
        shouldExpanded('2', true);
        shouldExpanded('3', false);

        expandChildTree('2');
        cy.wrap(onClick).should('not.be.called');
        shouldExpanded('2', true);
        shouldExpanded('3', false);

        expandChildTree('3');
        shouldExpanded('2', true);
        shouldExpanded('3', true);

        cy.wrap(onClick).should('be.calledOnce');
    });

    it('should support expandedKeys and onExpand', () => {
        cy.mount(<ExpandDemo />);
        shouldExpanded('2', true);
        shouldExpanded('3', false);

        expandChildTree('3');
        shouldExpanded('2', true);
        shouldExpanded('3', true);
    });

    it('should support defaultSelectedKeys and onSelect', () => {
        const onClick = cy.spy().as('onClick');

        const handleSelect = (
            selectedKeys: Key[],
            extra: {
                selectedNodes: Array<NodeInstance>;
                node: NodeInstance;
                selected: boolean;
                event: React.KeyboardEvent;
            }
        ) => {
            onClick();

            if (onClick.callCount === 1) {
                expect(selectedKeys).to.deep.equal(['3']);
                expect(extra.selectedNodes[0].props.eventKey).to.equal('3');
                expect(extra.node.props.eventKey).to.equal('3');
                expect(extra.selected).to.be.true;
            }
        };

        const newDataSource = cloneData(dataSource, {
            5: { selectable: false },
        });
        cy.mount(
            <Tree
                defaultExpandAll
                defaultSelectedKeys={['1']}
                dataSource={newDataSource}
                onSelect={handleSelect}
            />
        );
        shouldSelected('1', true);

        selectTreeNode('2');
        cy.get('@onClick').should('not.be.called');
        shouldSelected('1', true);
        shouldSelected('2', false);

        selectTreeNode('5');
        cy.get('@onClick').should('not.be.called');
        shouldSelected('1', true);
        shouldSelected('5', false);

        selectTreeNode('3');
        cy.get('@onClick').should('be.calledOnce');
        shouldSelected('1', false);
        shouldSelected('3', true);

        selectTreeNode('3');
        cy.get('@onClick').should('be.calledTwice');
        shouldSelected('3', false);
    });

    it('should support selectedKeys and onSelect', () => {
        cy.mount(<SelectDemo />);
        shouldSelected('1', true);

        selectTreeNode('1');
        shouldSelected('1', false);

        selectTreeNode('3');
        shouldSelected('3', true);
        selectTreeNode('4');
        shouldSelected('3', true);

        findTreeNodeByKey('3').find('.next-tree-node-label').first().trigger('keydown', {
            keyCode: KEYCODE.ENTER,
        });
        shouldSelected('3', false);

        findTreeNodeByKey('4').find('.next-tree-node-label').first().trigger('keydown', {
            keyCode: KEYCODE.ENTER,
        });
        shouldSelected('4', false);
    });

    it('should keep click and key events consistent', () => {
        const node: NodeInstance[] = [];
        const handleSelect = (
            selectedKeys: Key[],
            extra: {
                selectedNodes: Array<NodeInstance>;
                node: NodeInstance;
                selected: boolean;
                event: React.KeyboardEvent;
            }
        ) => {
            node.push(extra.node);
        };
        cy.mount(<Tree defaultExpandAll dataSource={dataSource} onSelect={handleSelect} />);
        selectTreeNode('1');
        shouldSelected('1', true);
        selectTreeNode('1');
        shouldSelected('1', false);
        findTreeNodeByKey('1').find('.next-tree-node-label').first().trigger('keydown', {
            keyCode: KEYCODE.ENTER,
        });
        shouldSelected('1', true);
        cy.then(() => {
            expect(node.length).equal(3);
            expect(node[0]).to.deep.equal(node[2]);
        });
    });

    it('should support defaultCheckedKeys and onCheck', () => {
        const onClick = cy.spy();
        const handleCheck = (
            checkedKeys: Key[],
            extra: {
                checkedNodes: Array<NodeInstance>;
                checkedNodesPositions: Array<NodeInstance>;
                indeterminateKeys: Array<Key>;
                node: NodeInstance;
                checked: boolean;
                key: Key;
            }
        ) => {
            onClick();
            expect(checkedKeys).deep.equal([]);
            expect(extra.indeterminateKeys.length).equal(0);
            expect(extra.node.props.eventKey).equal('6');
            expect(extra.checked).to.be.false;
        };

        const newDataSource = cloneData(dataSource, {
            4: { checkboxDisabled: true },
            5: { checkable: false },
        });

        cy.mount(
            <Tree
                checkable
                defaultExpandAll
                defaultCheckedKeys={['3']}
                dataSource={newDataSource}
                onCheck={handleCheck}
            />
        );
        shouldChecked('3', true);
        shouldChecked('6', true);
        shouldChecked('1', true);
        shouldIndeterminate('1', false);
        findTreeNodeByKey('4')
            .find('.next-checkbox-wrapper')
            .first()
            .should('have.class', 'disabled');
        findTreeNodeByKey('5')
            .find('.next-tree-node-inner')
            .find('.next-checkbox-wrapper')
            .should('not.exist');

        checkTreeNode('2');
        cy.wrap(onClick).should('not.be.called');

        shouldChecked('2', false);

        checkTreeNode('4');
        cy.wrap(onClick).should('not.be.called');

        shouldChecked('4', false);

        checkTreeNode('6');
        cy.wrap(onClick).should('be.calledOnce');

        shouldChecked('6', false);
        shouldChecked('3', false);
        shouldChecked('1', false);
        shouldIndeterminate('1', false);
    });

    it('should support setting checkedStrategy to all', () => {
        const onClick = cy.spy();
        const handleCheck = (checkedKeys: Key[]) => {
            onClick();
            expect(checkedKeys).deep.equal(['6', '3']);
        };
        cy.mount(
            <Tree
                checkable
                defaultExpandAll
                checkedStrategy="all"
                dataSource={cloneData(dataSource, {
                    2: { disabled: false },
                })}
                onCheck={handleCheck}
            />
        );

        checkTreeNode('6');
        cy.wrap(onClick).should('be.calledOnce');
    });

    it('should support setting checkedStrategy to parent', () => {
        const onClick = cy.spy();
        const handleCheck = (checkedKeys: Key[]) => {
            onClick();
            expect(checkedKeys).deep.equal(['3']);
        };
        cy.mount(
            <Tree
                checkable
                defaultExpandAll
                checkedStrategy="parent"
                dataSource={cloneData(dataSource, {
                    2: { disabled: false },
                })}
                onCheck={handleCheck}
            />
        );
        checkTreeNode('6');
        cy.wrap(onClick).should('be.calledOnce');
    });

    it('should support setting checkedStrategy to child', () => {
        const onClick = cy.spy();
        const handleCheck = (checkedKeys: Key[]) => {
            onClick();
            expect(checkedKeys).deep.equal(['6']);
        };
        cy.mount(
            <Tree
                checkable
                defaultExpandAll
                checkedStrategy="child"
                dataSource={dataSource}
                onCheck={handleCheck}
            />
        );
        checkTreeNode('6');
        cy.wrap(onClick).should('be.calledOnce');
    });

    it('should support checkedKeys and onCheck', () => {
        cy.mount(<CheckDemo />);
        ['1', '2', '3', '4', '5', '6'].forEach(key => shouldChecked(key, true));

        checkTreeNode('1');
        ['1', '2', '3', '4', '5', '6'].forEach(key => shouldChecked(key, false));

        checkTreeNode('5');
        shouldChecked('5', true);
        shouldChecked('2', false);
        shouldIndeterminate('2', true);
        shouldChecked('1', false);
        shouldIndeterminate('1', true);

        checkTreeNode('1');
        ['1', '2', '3', '4', '5', '6'].forEach(key => shouldChecked(key, true));

        checkTreeNode('6');
        shouldChecked('6', false);
        shouldChecked('3', false);
        shouldIndeterminate('3', false);
        shouldChecked('1', false);
        shouldIndeterminate('1', true);
    });

    it('should support checkStrictly', () => {
        cy.mount(<CheckDemo checkStrictly />);
        ['1', '2', '3'].forEach(key => shouldChecked(key, false));
        ['1', '2', '3'].forEach(key => shouldIndeterminate(key, false));
        ['4', '5', '6'].forEach(key => shouldChecked(key, true));
        checkTreeNode('1');
        ['2', '3'].forEach(key => shouldChecked(key, false));
        ['2', '3'].forEach(key => shouldIndeterminate(key, false));
        ['1', '4', '5', '6'].forEach(key => shouldChecked(key, true));
        checkTreeNode('4');
        ['2', '3', '4'].forEach(key => shouldChecked(key, false));
        ['2', '3', '4'].forEach(key => shouldIndeterminate(key, false));
        ['1', '5', '6'].forEach(key => shouldChecked(key, true));
    });

    it('should support setting indeterminate key when checkStrictly true', () => {
        class Demo extends Component {
            state = {
                checkedKeys: {
                    checked: ['1', '2', '3'],
                    indeterminate: ['4', '5', '6'],
                },
            };
            render() {
                return (
                    <Tree
                        defaultExpandAll
                        checkable
                        checkStrictly
                        checkedKeys={this.state.checkedKeys}
                        dataSource={cloneData(dataSource, {
                            2: { disabled: false },
                        })}
                    />
                );
            }
        }
        const ref = createRef<InstanceType<typeof Demo>>();
        cy.mount(<Demo ref={ref} />).then(() => {
            ['1', '2', '3'].forEach(key => shouldChecked(key, true));
            ['4', '5', '6'].forEach(key => shouldIndeterminate(key, true));
            cy.then(() => {
                const instance = ref.current!;
                instance.setState({ checkedKeys: [] });
                ['4', '5', '6'].forEach(key => shouldChecked(key, false));
                cy.then(() => {
                    instance.setState({
                        checkedKeys: {
                            checked: '1',
                            indeterminate: '2',
                        },
                    });

                    shouldChecked('1', true);
                    shouldIndeterminate('2', true);
                });
            });
        });
    });

    it('should support update indeterninate key when dataSource change', () => {
        class Demo extends Component {
            state = {
                data: cloneData(dataSource, {
                    2: { disabled: false },
                }),
            };

            render() {
                return <Tree defaultExpandAll checkable dataSource={this.state.data} />;
            }
        }
        const ref = createRef<InstanceType<typeof Demo>>();
        cy.mount(<Demo ref={ref} />);
        cy.then(() => {
            ['1', '2', '3'].forEach(key => shouldChecked(key, false));

            checkTreeNode('5');
            shouldIndeterminate('2', true);
            const instance = ref.current!;

            cy.then(() => {
                instance.state.data[0].children![0].children!.length = 1;
                instance.setState({ data: instance.state.data });
                shouldIndeterminate('2', false);
            });
        });
    });

    it('should support editing node', () => {
        const spy = cy.spy();

        const handleEditFinish = (key: Key, label: string, node: NodeInstance) => {
            spy();
            expect(key).to.equal('3');
            expect(label).to.equal('童装');
            expect(node.props.eventKey).to.equal('3');
        };

        const newDataSource = cloneData(dataSource, {
            5: { editable: false },
        });

        cy.mount(
            <Tree
                defaultExpandAll
                editable
                dataSource={newDataSource}
                onEditFinish={handleEditFinish}
            />
        );
        const treeNode3 = findTreeNodeByKey('3');

        editTreeNode('2');
        shouldEditing('2', false);

        editTreeNode('5');
        shouldEditing('5', false);

        editTreeNode('3');
        shouldEditing('3', true);
        treeNode3
            .find('.next-tree-node-input input')
            .first()
            .invoke('val', '童装')
            .trigger('change')
            .trigger('keydown', {
                keyCode: KEYCODE.ENTER,
            });
        cy.wrap(spy).should('be.calledOnce');
        editTreeNode('3');
        findTreeNodeByKey('3')
            .find('.next-tree-node-input input')
            .first()
            .invoke('val', '童装')
            .trigger('change')
            .trigger('blur');
    });

    // fix： https://github.com/alibaba-fusion/next/issues/1942
    it('should stop stopPropagation keyboard event when editing node', () => {
        cy.mount(<Tree defaultExpandAll editable dataSource={dataSource} />);
        editTreeNode('3');
        findTreeNodeByKey('3').find('.next-tree-node-input input').first().trigger('keydown', {
            keyCode: KEYCODE.LEFT,
        });
        findTreeNodeByKey('3').should('exist');
    });

    it('should support right clicking node', () => {
        const spy = cy.spy();
        const handleRightClick = (info: { event: React.MouseEvent; node: NodeInstance }) => {
            spy();
            expect(info.event.target).instanceOf(HTMLElement);
            expect(info.node.props.eventKey).to.equal('3');
        };
        cy.mount(<Tree defaultExpandAll dataSource={dataSource} onRightClick={handleRightClick} />);
        rightClickTreeNode('2');
        cy.wrap(spy).should('not.be.called');
        rightClickTreeNode('3');
        cy.wrap(spy).should('be.calledOnce');
    });

    it('should support dragging node into dropNode', () => {
        cy.mount(<DragDemo />);

        getAllLabels().then($labels => {
            expect($labels.get(4).innerText).to.equal('女装');
            expect($labels.get(5).innerText).to.equal('裙子');
        });
        dragTreeNode('6', '2', 0);
        getAllLabels().then($labels => {
            expect($labels.get(4).innerText).to.equal('裙子');
            expect($labels.get(5).innerText).to.equal('女装');
        });
    });

    it('should support dragging node before drop node', () => {
        cy.mount(<DragDemo />);

        getAllLabels().then($labels => {
            expect($labels.get(5).innerText).to.equal('裙子');
        });
        dragTreeNode('6', '2', -1);

        getAllLabels().then($labels => {
            expect($labels.get(1).innerText).to.equal('裙子');
        });
    });

    it('should support dragging node after drop node', () => {
        cy.mount(<DragDemo />);
        getAllLabels().then($labels => {
            expect($labels.get(5).innerText).to.equal('裙子');
        });
        dragTreeNode('6', '2', 1);
        getAllLabels().then($labels => {
            expect($labels.get(4).innerText).to.equal('裙子');
        });
    });
    it('should stop dragover event propagation whatever could drop or not', () => {
        let isCanDrop = false;
        function canDrop({ node }: { node: NodeInstance }) {
            expect(node.props.eventKey).to.equal('2');
            return isCanDrop;
        }
        cy.mount(<DragDemo canDrop={canDrop} />);
        // 禁止拖拽
        dragTreeNode('6', '2', 1, isCanDrop);
        getAllLabels().then($labels => {
            expect($labels.get(4).innerText).to.equal('女装');
        });
        // 允许拖拽
        isCanDrop = true;
        dragTreeNode('6', '2', 1, isCanDrop);
        getAllLabels().then($labels => {
            expect($labels.get(4).innerText).to.equal('裙子');
        });
    });
    it('should load data asynchronously', () => {
        cy.mount(<AsyncDemo />);

        expandChildTree('1');

        findTreeNodeByKey('1')
            .find('.next-tree-switcher')
            .first()
            .should('has.class', 'next-loading');

        cy.then(() => {
            findTreeNodeByKey('1')
                .find('.next-tree-switcher')
                .first()
                .should('not.has.class', 'next-loading');
            shouldExpanded('1', true, ['2']);
        });
    });
    it('should support showLine', () => {
        cy.mount(<Tree showLine defaultExpandedKeys={['1']} dataSource={dataSource} />);

        cy.get('.next-tree').first().should('has.class', 'next-show-line');

        // icon '+'
        cy.get('.next-tree-switcher-fold-icon').then($el => {
            const beforeStyle = window.getComputedStyle($el[0], '::before');
            const contentValue = beforeStyle.getPropertyValue('content');
            expect(contentValue.replace('"', '').charCodeAt(0)).to.eq(58965);
        });
        // icon '-'
        cy.get('.next-tree-switcher-unfold-icon').then($el => {
            const beforeStyle = window.getComputedStyle($el[0], '::before');
            const contentValue = beforeStyle.getPropertyValue('content');
            expect(contentValue.replace('"', '').charCodeAt(0)).to.eq(58881);
        });
    });

    it('should support icon', () => {
        cy.mount(<Tree defaultExpandAll dataSource={dataSource} />);
        cy.get('.next-tree-node-label .next-icon').should('have.length', 2);
    });

    it('should support isLabelBlock and isNodeBlock', () => {
        cy.mount(<Tree isLabelBlock isNodeBlock dataSource={dataSource} />);
        cy.get('.next-tree').first().should('has.class', 'next-node-block');
        cy.get('.next-tree').first().should('has.class', 'next-label-block');
    });

    it('should support filterTreeNode', () => {
        cy.mount(
            <Tree dataSource={dataSource} filterTreeNode={node => node.props.label === '服装'} />
        );

        findTreeNodeByKey('1').first().should('has.class', 'next-filtered');
    });

    it('should support disabled', () => {
        cy.mount(
            <Tree dataSource={dataSource} defaultExpandAll checkable defaultCheckedKeys={['3']} />
        );

        ['1', '3', '6'].forEach(key => shouldChecked(key, true));
        checkTreeNode('6');
        checkTreeNode('4');
        ['1', '3', '6'].forEach(key => shouldChecked(key, false));
        shouldChecked('4', true);
    });

    it('should auto set parent checked', () => {
        cy.mount(
            <Tree
                checkable
                defaultCheckedKeys={['2062867', '1068832']}
                dataSource={[
                    {
                        children: [
                            {
                                label: '来访目的',
                                key: '1068832',
                            },
                        ],
                        label: '系统设置',
                        key: '106638',
                        className: 'k-106638',
                    },
                    {
                        label: '来访人员管理',
                        key: '2062867',
                    },
                ]}
            />
        );

        shouldChecked('106638', true);
    });

    it('should support checkable = false', () => {
        cy.mount(
            <Tree
                dataSource={cloneData(dataSource, {
                    2: {
                        disabled: false,
                        checkable: false,
                    },
                })}
                defaultExpandAll
                checkable
                defaultCheckedKeys={['3']}
            />
        );
        ['3', '6'].forEach(key => shouldChecked(key, true));
        shouldIndeterminate('1', true);
        checkTreeNode('4');
        checkTreeNode('5');
        ['1', '3', '6'].forEach(key => shouldChecked(key, true));
        shouldIndeterminate('1', false);
    });

    it('should test defaultCheckKeys in disabled node', () => {
        cy.mount(
            <Tree
                dataSource={cloneData(dataSource, {
                    2: {
                        disabled: false,
                        checkable: true,
                    },
                    5: {
                        disabled: true,
                    },
                })}
                defaultExpandAll
                checkable
                defaultCheckedKeys={['2', '4', '5']}
            />
        );

        ['2', '4', '5'].forEach(key => shouldChecked(key, true));
        checkTreeNode('4');
        ['2', '4'].forEach(key => shouldChecked(key, false));
        shouldChecked('5', true);
    });

    it('should support keyboard', () => {
        const shouldActiveElement = (keycode: number, key: string) => {
            cy.document().then(doc => {
                cy.wrap(doc.activeElement).trigger('keydown', {
                    keyCode: keycode,
                });
                findInnerNodeLabelWrapperByKey(key).then($el => {
                    cy.document().its('activeElement').should('eq', $el[0]);
                });
            });
        };
        cy.mount(
            <Tree
                dataSource={cloneData(dataSource, {
                    2: {
                        disabled: false,
                    },
                })}
            />
        );
        findInnerNodeLabelWrapperByKey('1').then($el => {
            $el[0].focus();
            cy.document().its('activeElement').should('eq', $el[0]);
            shouldActiveElement(KEYCODE.RIGHT, '2');
            shouldActiveElement(KEYCODE.DOWN, '3');
            shouldActiveElement(KEYCODE.DOWN, '2');
            shouldActiveElement(KEYCODE.LEFT, '1');
        });
    });
    it('should support useVirtual', () => {
        const height = 180;

        cy.mount(
            <Tree
                defaultExpandAll
                useVirtual
                style={{ height: `${height}px`, overflow: 'auto' }}
                dataSource={createDataSource()}
            />
        );
        cy.get('.next-tree-node').then($el => {
            // 100px is virtual-list`s threshold
            expect($el.length).eq((height + 100) / $el[0].offsetHeight);
            // node-indent-unit
            $el.each((index, el) => {
                if (Number(el.getAttribute('level')!) - 1 === 0) {
                    cy.wrap(el).find('.next-tree-node-indent-unit').should('not.exist');
                } else {
                    cy.wrap(el)
                        .find('.next-tree-node-indent-unit')
                        .then($el => {
                            return $el.length;
                        })
                        .should('eq', Number(el.getAttribute('level')!) - 1);
                }
            });
        });
    });

    it('should keep illegal node', () => {
        cy.mount(
            <Tree defaultExpandAll className="my-tree">
                <TreeNode label="Form" key="1" disabled>
                    <TreeNode label="Select" key="2">
                        <TreeNode label="TreeSelect" key="3" />
                    </TreeNode>
                    <TreeNode label="Input" key="4">
                        dasdfa
                        <div className="illegal-div" />
                        <Button className="illegal-bt">dasd</Button>
                    </TreeNode>
                </TreeNode>
            </Tree>
        );
        cy.get('.my-tree').then($el => {
            expect($el[0].textContent?.indexOf('dasdfa')).eq(-1);
            expect($el[0].querySelectorAll('.illegal-bt').length).eq(1);
            expect($el[0].querySelectorAll('.illegal-div').length).eq(1);
        });
    });
    // fix: https://github.com/alibaba-fusion/next/issues/1914
    it('fix bug on isLeaf', () => {
        const shouldIsLeaf = (node: React.ReactNode) => {
            cy.mount(node);
            cy.get('.leaf-node .tree-switcher-icon').should('have.length', 0);
        };
        shouldIsLeaf(
            <Tree key={0} defaultExpandAll loadData={() => Promise.resolve([])}>
                <TreeNode label="Form" key="1">
                    <TreeNode label="Input" key="2" isLeaf className="leaf-node" />
                    <TreeNode label="TreeSelect" key="3" className="leaf-node" />
                </TreeNode>
            </Tree>
        );

        shouldIsLeaf(
            <Tree
                key={1}
                defaultExpandAll
                loadData={() => Promise.resolve([])}
                dataSource={[
                    {
                        label: 'Form',
                        key: '1',
                        children: [
                            {
                                label: 'Input',
                                key: '2',
                                className: 'leaf-node',
                                isLeaf: true,
                            },
                            {
                                label: 'TreeSelect',
                                key: '3',
                                className: 'leaf-node',
                                isLeaf: true,
                            },
                        ],
                    },
                ]}
            />
        );
    });

    it('fix bug on level', () => {
        cy.mount(<Tree key={0} dataSource={dataSource} defaultExpandAll isNodeBlock useVirtual />);
        cy.get('.next-tree-node').then(() => {
            walk(dataSource, (item, level) => {
                cy.get(`.${item.className}`).should('have.attr', 'level').and('eq', String(level));
            });
        });
        cy.mount(
            <Tree key={1} defaultExpandAll isNodeBlock useVirtual>
                {renderTreeNodeWithData(dataSource)}
            </Tree>
        );
        cy.get('.next-tree-node').then(() => {
            walk(dataSource, (item, level) => {
                cy.get(`.${item.className}`).should('have.attr', 'level').and('eq', String(level));
            });
        });
    });

    it('fix error when dataSource is empty', () => {
        function App() {
            const [dataSource, setDataSource] = useState([]);

            setTimeout(() => {
                setDataSource([]);
            });
            return <Tree defaultExpandAll className="my-tree" dataSource={dataSource} />;
        }
        cy.mount(<App />);
    });

    it('should support immutable', () => {
        shouldTree({ dataSource: freeze(dataSource), immutable: true });
    });

    it('should support rtl', () => {
        cy.mount(
            <Tree
                rtl
                dataSource={cloneData(dataSource, {
                    2: {
                        disabled: false,
                    },
                })}
            />
        );
        cy.get('.next-tree').first().should('have.attr', 'dir').and('eq', 'rtl');
    });

    it('should support virtualListProps', () => {
        const ref = React.createRef<InstanceType<typeof Tree>>();
        const jumpIndex = 40;
        const itemSizeGetter = () => 20;

        cy.mount(
            <Tree
                ref={ref}
                defaultExpandAll
                useVirtual
                dataSource={createDataSource()}
                virtualListProps={{ jumpIndex, itemSizeGetter }}
            />
        );

        cy.then(() => {
            const instance = ref.current!.getInstance();
            const { jumpIndex, itemSizeGetter } = instance.virtualListRef.current!.props;
            expect(jumpIndex).to.equal(40);
            expect(itemSizeGetter).to.equal(itemSizeGetter);
        });
    });
});
