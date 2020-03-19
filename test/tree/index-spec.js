import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import assert from 'power-assert';
import ReactTestUtils from 'react-dom/test-utils';
import { dom, KEYCODE } from '../../src/util';
import Tree from '../../src/tree/index';
import '../../src/tree/style.js';



/* eslint-disable react/jsx-filename-extension, react/no-multi-comp */
/* global describe it beforeEach afterEach */

const TreeNode = Tree.Node;
const { hasClass, getOffset } = dom;

const dataSource = [
    {
        label: '服装',
        key: '1',
        children: [
            {
                label: '男装',
                key: '2',
                disabled: true,
                children: [
                    {
                        label: '外套',
                        key: '4',
                    },
                    {
                        label: '夹克',
                        key: '5',
                    },
                ],
            },
            {
                label: '女装',
                key: '3',
                children: [
                    {
                        label: '裙子',
                        key: '6',
                    }
                ],
            },
        ],
    },
];
const _k2n = createMap(dataSource);

class ExpandDemo extends Component {
    state = {
        expandedKeys: ['2'],
    };

    handleExpand = expandedKeys => {
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

    handleSelect = selectedKeys => {
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

class CheckDemo extends Component {
    state = {
        checkedKeys: ['4', '5', '6'],
    };

    handleCheck = checkedKeys => {
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
                    2: { disabled: false }
                })}
                onCheck={this.handleCheck}
                {...this.props}
            />
        );
    }
}

class DragDemo extends React.Component {
    static propTypes = {
        canDrop: propTypes.func
    }

    static defaultProps = {
        canDrop: () => true
    }
    
    constructor(props) {
        super(props);

        this.state = {
            gData: cloneData(dataSource)
        };
    }

    onDrop(info) {
        const dragKey = info.dragNode.props.eventKey;
        const dropKey = info.node.props.eventKey;
        const dropPosition = info.dropPosition;
        const loop = (data, key, callback) => {
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
        let dragObj;
        loop(data, dragKey, (item, index, arr) => {
            arr.splice(index, 1);
            dragObj = item;
        });
        if (info.dropPosition === 0) {
            loop(data, dropKey, item => {
                item.children = item.children || [];
                item.children.push(dragObj);
            });
        } else {
            let ar;
            let i;
            loop(data, dropKey, (item, index, arr) => {
                ar = arr;
                i = index;
            });
            if (dropPosition === -1) {
                ar.splice(i, 0, dragObj);
            } else {
                ar.splice(i + 1, 0, dragObj);
            }
        }
        this.setState({
            gData: data,
        });
    }

    render() {
        return (
            <Tree
                draggable
                selectable={false}
                defaultExpandAll
                dataSource={this.state.gData}
                onDrop={this.onDrop.bind(this)}
                canDrop={this.props.canDrop.bind(this)}
            />
        );
    }
}

class AsyncDemo extends Component {
    state = {
        data: [
            {
                label: '服装',
                key: '1',
            },
        ],
    };

    loadData = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                this.setState({
                    data: [
                        {
                            label: '服装',
                            key: '1',
                            children: [
                                {
                                    label: '男装',
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
    let mountNode;

    beforeEach(() => {
        mountNode = document.createElement('div');
        document.body.appendChild(mountNode);
    });

    afterEach(() => {
        ReactDOM.unmountComponentAtNode(mountNode);
        document.body.removeChild(mountNode);
    });

    it('should render by children', () => {
        const loop = data =>
            data.map((item, index) => {
                return (
                    <TreeNode {...item} key={index}>
                        {item.children ? loop(item.children) : null}
                    </TreeNode>
                );
            });

        assertTree({ children: loop(dataSource) }, mountNode);
    });

    it('should ignore children contain null or string', () => {
        ReactDOM.render(
            <Tree
                checkable
                editable
                defaultExpandAll
                defaultSelectedKeys={['1']}
                defaultCheckedKeys={['3']}
            >
                <TreeNode key="1" label="Component">
                    <TreeNode key="2" label="Form" selectable={false}>
                        <TreeNode key="4" label="Input" />
                        <TreeNode aria-label="select one" key="5" label="Select" disabled />
                    </TreeNode>
                    <TreeNode key="3" label="Display">
                        <TreeNode key="6" label="Table" />
                    </TreeNode>
                </TreeNode>
            </Tree>,
            mountNode
        );

        assert(
            hasClass(
                findTreeNodeByKey('5').querySelector('.next-checkbox-wrapper'),
                'disabled'
            )
        );
    });

    it('should render by dataSource', () => {
        assertTree({ dataSource }, mountNode);
    });

    it('should support render child nodes', () => {
        ReactDOM.render(
            <Tree
                checkable
                editable
                defaultExpandAll
                defaultSelectedKeys={['1']}
                defaultCheckedKeys={['3']}
                renderChildNodes={(nodes) => {
                    if (
                        nodes.filter(
                            (node) => !node.props.children ||
                                node.props.children.length === 0
                        ).length !== nodes.length) {
                        return <ul role="group" className={`next-tree-child-tree`}>{nodes}</ul>;
                    }
                    return <ul className="custom-child-tree">{nodes}</ul>;
                }}
            >
                <TreeNode key="1" label="Component">
                    <TreeNode key="2" label="Form" selectable={false}>
                        <TreeNode key="4" label="Input" />
                        <TreeNode aria-label="select one" key="5" label="Select" disabled />
                    </TreeNode>
                    <TreeNode key="3" label="Display">
                        <TreeNode key="6" label="Table" />
                    </TreeNode>
                </TreeNode>
            </Tree>,
            mountNode
        );

        assert(!!document.querySelector('.custom-child-tree'));
    })

    it('should support defaultExpandedKeys and onExpand', () => {
        let called = false;
        const handleExpand = (expandedKeys, extra) => {
            called = true;
            assert(expandedKeys.indexOf('3') > -1);
            assert(extra.node.props.eventKey === '3');
            assert(extra.expanded);
        };

        ReactDOM.render(
            <Tree
                defaultExpandedKeys={['2']}
                dataSource={dataSource}
                onExpand={handleExpand}
            />,
            mountNode
        );
        assertExpanded('2', true);
        assertExpanded('3', false);

        expandChildTree('2');
        assert(!called);
        assertExpanded('2', true);
        assertExpanded('3', false);

        expandChildTree('3');
        assert(called);
        assertExpanded('2', true);
        assertExpanded('3', true);
    });

    it('should support expandedKeys and onExpand', () => {
        ReactDOM.render(<ExpandDemo />, mountNode);
        assertExpanded('2', true);
        assertExpanded('3', false);

        expandChildTree('3');
        assertExpanded('2', true);
        assertExpanded('3', true);
    });

    it('should support defaultSelectedKeys and onSelect', () => {
        let called = false;
        const handleSelect = (selectedKeys, extra) => {
            if (!called) {
                assert.deepEqual(selectedKeys, ['3']);
                assert(extra.selectedNodes[0].props.eventKey === '3');
                assert(extra.node.props.eventKey === '3');
                assert(extra.selected);
            }

            called = true;
        };

        const newDataSource = cloneData(dataSource, {
            5: { selectable: false },
        });
        ReactDOM.render(
            <Tree
                defaultExpandAll
                defaultSelectedKeys={['1']}
                dataSource={newDataSource}
                onSelect={handleSelect}
            />,
            mountNode
        );
        assertSelected('1', true);

        selectTreeNode('2');
        assert(!called);
        assertSelected('1', true);
        assertSelected('2', false);

        selectTreeNode('5');
        assert(!called);
        assertSelected('1', true);
        assertSelected('5', false);

        selectTreeNode('3');
        assert(called);
        assertSelected('1', false);
        assertSelected('3', true);

        selectTreeNode('3');
        assertSelected('3', false);
    });

    it('should support selectedKeys and onSelect', () => {
        ReactDOM.render(<SelectDemo multiple />, mountNode);
        assertSelected('1', true);

        selectTreeNode('1');
        assertSelected('1', false);

        selectTreeNode('3');
        assertSelected('3', true);

        selectTreeNode('4');
        assertSelected('3', true);
        assertSelected('4', true);
    });

    it('should support defaultCheckedKeys and onCheck', () => {
        let called = false;
        const handleCheck = (checkedKeys, extra) => {
            called = true;
            assert.deepEqual(checkedKeys, []);
            assert(extra.indeterminateKeys.length === 0);
            assert(extra.node.props.eventKey, '6');
            assert(!extra.checked);
        };

        const newDataSource = cloneData(dataSource, {
            4: { checkboxDisabled: true },
            5: { checkable: false },
        });

        ReactDOM.render(
            <Tree
                checkable
                defaultExpandAll
                defaultCheckedKeys={['3']}
                dataSource={newDataSource}
                onCheck={handleCheck}
            />,
            mountNode
        );
        assertChecked('3', true);
        assertChecked('6', true);
        assertChecked('1', true);
        assertIndeterminate('1', false);
        assert(
            hasClass(
                findTreeNodeByKey('4').querySelector('.next-checkbox-wrapper'),
                'disabled'
            )
        );
        assert(
            !findTreeNodeByKey('5')
                .querySelector('.next-tree-node-inner')
                .querySelector('.next-checkbox-wrapper')
        );

        checkTreeNode('2');
        assert(!called);
        assertChecked('2', false);

        checkTreeNode('4');
        assert(!called);
        assertChecked('4', false);

        checkTreeNode('6');
        assert(called);
        assertChecked('6', false);
        assertChecked('3', false);
        assertChecked('1', false);
        assertIndeterminate('1', false);
    });

    it('should support setting checkedStrategy to all', () => {
        let called = false;
        const handleCheck = checkedKeys => {
            called = true;
            assert.deepEqual(checkedKeys, ['6', '3']);
        };

        ReactDOM.render(
            <Tree
                checkable
                defaultExpandAll
                dataSource={cloneData(dataSource, {
                    2: { disabled: false }
                })}
                onCheck={handleCheck}
            />,
            mountNode
        );

        checkTreeNode('6');
        assert(called);
    });

    it('should support setting checkedStrategy to parent', () => {
        let called = false;
        const handleCheck = checkedKeys => {
            called = true;
            assert.deepEqual(checkedKeys, ['3']);
        };

        ReactDOM.render(
            <Tree
                checkable
                checkedStrategy="parent"
                defaultExpandAll
                dataSource={cloneData(dataSource, {
                    2: { disabled: false }
                })}
                onCheck={handleCheck}
            />,
            mountNode
        );

        checkTreeNode('6');
        assert(called);
    });

    it('should support setting checkedStrategy to child', () => {
        let called = false;
        const handleCheck = checkedKeys => {
            called = true;
            assert.deepEqual(checkedKeys, ['6']);
        };

        ReactDOM.render(
            <Tree
                checkable
                checkedStrategy="child"
                defaultExpandAll
                dataSource={dataSource}
                onCheck={handleCheck}
            />,
            mountNode
        );

        checkTreeNode('6');
        assert(called);
    });

    it('should support checkedKeys and onCheck', () => {
        ReactDOM.render(<CheckDemo />, mountNode);
        ['1', '2', '3', '4', '5', '6'].forEach(key => assertChecked(key, true));

        checkTreeNode('1');
        ['1', '2', '3', '4', '5', '6'].forEach(key =>
            assertChecked(key, false)
        );

        checkTreeNode('5');
        assertChecked('5', true);
        assertChecked('2', false);
        assertIndeterminate('2', true);
        assertChecked('1', false);
        assertIndeterminate('1', true);

        checkTreeNode('1');
        ['1', '2', '3', '4', '5', '6'].forEach(key => assertChecked(key, true));

        checkTreeNode('6');
        assertChecked('6', false);
        assertChecked('3', false);
        assertIndeterminate('3', false);
        assertChecked('1', false);
        assertIndeterminate('1', true);
    });

    it('should support checkStrictly', () => {
        ReactDOM.render(<CheckDemo checkStrictly />, mountNode);
        ['1', '2', '3'].forEach(key => assertChecked(key, false));
        ['1', '2', '3'].forEach(key => assertIndeterminate(key, false));
        ['4', '5', '6'].forEach(key => assertChecked(key, true));

        checkTreeNode('1');
        ['2', '3'].forEach(key => assertChecked(key, false));
        ['2', '3'].forEach(key => assertIndeterminate(key, false));
        ['1', '4', '5', '6'].forEach(key => assertChecked(key, true));

        checkTreeNode('4');
        ['2', '3', '4'].forEach(key => assertChecked(key, false));
        ['2', '3', '4'].forEach(key => assertChecked(key, false));
        ['2', '3', '4'].forEach(key => assertIndeterminate(key, false));
        ['1', '5', '6'].forEach(key => assertChecked(key, true));
    });

    it('should support editing node', () => {
        let called = false;
        const handleEditFinish = (key, label, node) => {
            called = true;
            assert(key === '3');
            assert(label === '童装');
            assert(node.props.eventKey === '3');
        };

        const newDataSource = cloneData(dataSource, {
            5: { editable: false },
        });

        ReactDOM.render(
            <Tree
                defaultExpandAll
                editable
                dataSource={newDataSource}
                onEditFinish={handleEditFinish}
            />,
            mountNode
        );
        const treeNode3 = findTreeNodeByKey('3');

        editTreeNode('2');
        assertEditing('2', false);

        editTreeNode('5');
        assertEditing('5', false);

        editTreeNode('3');
        assertEditing('3', true);
        let input = treeNode3.querySelector('.next-tree-node-input input');
        ReactTestUtils.Simulate.change(input, { target: { value: '童装' } });
        ReactTestUtils.Simulate.keyDown(input, { keyCode: KEYCODE.ENTER });
        assert(called);

        editTreeNode('3');
        input = treeNode3.querySelector('.next-tree-node-input input');
        ReactTestUtils.Simulate.change(input, { target: { value: '童装' } });
        ReactTestUtils.Simulate.blur(input);
    });

    it('should support right clicking node', () => {
        let called = false;
        const handleRightClick = info => {
            called = true;
            assert('target' in info.event);
            assert(info.node.props.eventKey === '3');
        };

        ReactDOM.render(
            <Tree
                defaultExpandAll
                dataSource={dataSource}
                onRightClick={handleRightClick}
            />,
            mountNode
        );

        rightClickTreeNode('2');
        assert(!called);
        rightClickTreeNode('3');
        assert(called);
    });

    it('should support dragging node into dropNode', () => {
        ReactDOM.render(<DragDemo />, mountNode);

        dragTreeNode('6', '2', 0);
        assert(
            findChild(findTreeNodeByKey('2'), 'next-tree-child-tree')
                .children[2].querySelector('.next-tree-node-label')
                .textContent.trim() === '裙子'
        );
    });

    it('should support dragging node before drop node', () => {
        ReactDOM.render(<DragDemo />, mountNode);

        dragTreeNode('6', '2', -1);
        assert(
            findChild(findTreeNodeByKey('1'), 'next-tree-child-tree')
                .children[0].querySelector('.next-tree-node-label')
                .textContent.trim() === '裙子'
        );
    });

    it('should support dragging node after drop node', () => {
        ReactDOM.render(<DragDemo />, mountNode);

        dragTreeNode('6', '2', 1);
        assert(
            findChild(findTreeNodeByKey('1'), 'next-tree-child-tree')
                .children[1].querySelector('.next-tree-node-label')
                .textContent.trim() === '裙子'
        );
    });

    it('should stop dragover event propagation whatever could drop or not', () => {
        let isCanDrop = false

        function canDrop({node}) {
            assert(node.props.eventKey === '2')
            return isCanDrop
        }
        ReactDOM.render(<DragDemo canDrop={canDrop} />, mountNode);
        
        // 禁止拖拽
        dragTreeNode('6', '2', 1, isCanDrop);
        // 允许拖拽
        isCanDrop = true
        dragTreeNode('6', '2', 1, isCanDrop);
    });

    it('should load data asynchronously', done => {
        ReactDOM.render(<AsyncDemo />, mountNode);
        expandChildTree('1');
        assert(
            hasClass(
                findTreeNodeByKey('1').querySelector('.next-tree-switcher'),
                'next-loading'
            )
        );

        setTimeout(() => {
            assert(
                !hasClass(
                    findTreeNodeByKey('1').querySelector('.next-tree-switcher'),
                    'next-loading'
                )
            );
            assertExpanded('1', true);
            done();
        }, 500);
    });

    it('should support showLine', () => {
        ReactDOM.render(<Tree showLine dataSource={dataSource} />, mountNode);
        assert(
            hasClass(document.querySelector('.next-tree'), 'next-show-line')
        );
    });

    it('should support isLabelBlock and isNodeBlock', () => {
        ReactDOM.render(
            <Tree isLabelBlock isNodeBlock dataSource={dataSource} />,
            mountNode
        );
        assert(
            hasClass(document.querySelector('.next-tree'), 'next-node-block')
        );
        assert(
            hasClass(document.querySelector('.next-tree'), 'next-label-block')
        );
    });

    it('should support filterTreeNode', () => {
        ReactDOM.render(
            <Tree
                dataSource={dataSource}
                filterTreeNode={node => node.props.label === '服装'}
            />,
            mountNode
        );

        assert(hasClass(findTreeNodeByKey('1'), 'next-filtered'));
    });

    it('should support disabled', () => {
        ReactDOM.render(
            <Tree
                dataSource={dataSource}
                defaultExpandAll
                checkable
                defaultCheckedKeys={['3']}
            />,
            mountNode
        );

        ['1', '3', '6'].forEach(key => assertChecked(key, true));
        checkTreeNode('6');
        checkTreeNode('4');
        ['1', '3', '6'].forEach(key => assertChecked(key, false));
        assertChecked('4', true);
    })

    it('should support checkable = false', () => {
        ReactDOM.render(
            <Tree
                dataSource={cloneData(dataSource, {
                    2: {
                        disabled: false,
                        checkable: false
                    }
                })}
                defaultExpandAll
                checkable
                defaultCheckedKeys={['3']}
            />,
            mountNode
        );
        ['3', '6'].forEach(key => assertChecked(key, true));
        assertIndeterminate('1', true);
        checkTreeNode('4');
        checkTreeNode('5');
        ['1', '3', '6'].forEach(key => assertChecked(key, true));
        assertIndeterminate('1', false);
    });

    it('should test defaultCheckKeys in disabled node',  () => {
        ReactDOM.render(
            <Tree
                dataSource={cloneData(dataSource, {
                    2: {
                        disabled: false,
                        checkable: true
                    },
                    5: {
                        disabled: true
                    }
                })}
                defaultExpandAll
                checkable
                defaultCheckedKeys={['2', '4', '5']}
            />,
            mountNode
        );

        ['2', '4', '5'].forEach(key => assertChecked(key, true));
        checkTreeNode('4');
        ['2', '4'].forEach(key => assertChecked(key, false));
        assertChecked('5', true)
    })

    it('should support keyboard', () => {
        ReactDOM.render(
            <Tree
                dataSource={cloneData(dataSource, {
                    2: {
                        disabled: false,
                    },
                })}
            />,
            mountNode
        );
        const item00 = findRealItem(0, 0);
        item00.focus();
        assert(document.activeElement === item00);
        const assertAE = assertActiveElement();
        assertAE(KEYCODE.RIGHT, () => findRealItem(1, 0));
        assertAE(KEYCODE.DOWN, () => findRealItem(1, 1));
        assertAE(KEYCODE.DOWN, () => findRealItem(1, 0));
        assertAE(KEYCODE.LEFT, () => findRealItem(0, 0));
    });

    it('should support rtl', () => {
        ReactDOM.render(
            <Tree
                rtl
                dataSource={cloneData(dataSource, {
                    2: {
                        disabled: false,
                    },
                })}
            />,
            mountNode
        );
        assert(document.querySelector('.next-tree').dir === 'rtl');
    });
});

function assertTree(props, mountNode) {
    ReactDOM.render(
        <Tree
            checkable
            editable
            defaultExpandAll
            defaultSelectedKeys={['1']}
            defaultCheckedKeys={['3']}
            {...props}
        />,
        mountNode
    );

    assertDataAndNodes(dataSource);
    assert(
        hasClass(
            findTreeNodeByKey('2').querySelector('.next-tree-node-inner'),
            'next-disabled'
        )
    );
}

function assertDataAndNodes(dataSource) {
    const loop = (data, nodes) =>
        data.forEach((item, index) => {
            const node = nodes[index];
            const labelElement = findChild(node, 'next-tree-node-inner');
            assert(labelElement.textContent.trim() === item.label);

            if (item.children) {
                const childTree = findChild(node, 'next-tree-child-tree');
                loop(item.children, childTree.children);
            }
        });
    loop(dataSource, document.querySelector('.next-tree').children);
}

function findChild(node, className) {
    for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (hasClass(child, className)) {
            return child;
        }
    }
}

function findTreeNodeByPos(pos) {
    return pos
        .split('-')
        .slice(1)
        .reduce((ret, num, i) => {
            return ret.querySelector(
                i === 0 ? '.next-tree' : '.next-tree-child-tree'
            ).children[num];
        }, document);
}

function findTreeNodeByKey(key) {
    return findTreeNodeByPos(_k2n[key].pos);
}

function createMap(data) {
    const map = {};

    const loop = (data, prefix = '0') =>
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

function cloneData(data, keyMap = {}) {
    const loop = data =>
        data.map(item => {
            let newItem;

            if (item.key in keyMap) {
                newItem = { ...item, ...keyMap[item.key] };
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

function expandChildTree(key) {
    ReactTestUtils.Simulate.click(
        findTreeNodeByKey(key).querySelector('.next-tree-switcher')
    );
}

function selectTreeNode(key) {
    ReactTestUtils.Simulate.click(
        findTreeNodeByKey(key).querySelector('.next-tree-node-label')
    );
}

function checkTreeNode(key) {
    const input = findTreeNodeByKey(key).querySelector('.next-checkbox input');
    ReactTestUtils.Simulate.change(input, {
        target: { checked: input.checked },
    });
}

function editTreeNode(key) {
    ReactTestUtils.Simulate.doubleClick(
        findTreeNodeByKey(key).querySelector('.next-tree-node-label')
    );
}

function rightClickTreeNode(key) {
    ReactTestUtils.Simulate.contextMenu(
        findTreeNodeByKey(key).querySelector('.next-tree-node-label')
    );
}

function dragTreeNode(dragKey, dropKey, dropPosition, isCanDrop=true) {
    const dragNodeLabel = findTreeNodeByKey(dragKey).querySelector(
        '.next-tree-node-label'
    );
    const dropNode = findTreeNodeByKey(dropKey);
    const dropNodeLabelWrapper = dropNode.querySelector(
        '.next-tree-node-label-wrapper'
    );
    const extra = dropPosition === -1 ? 0 : dropPosition === 0 ? 12 : 24;
    const pageY = getOffset(dropNodeLabelWrapper).top + extra;

    ReactTestUtils.Simulate.dragStart(dragNodeLabel);
    ReactTestUtils.Simulate.dragEnter(dropNode, { pageY });
    ReactTestUtils.Simulate.dragOver(dropNode);
    // 禁止拖拽的情况 不需要模拟drop dragEnd方法
    if (isCanDrop) {
        ReactTestUtils.Simulate.drop(dropNode);
        ReactTestUtils.Simulate.dragEnd(dragNodeLabel);
    }
}

function assertExpanded(key, expanded) {
    assert(
        !!findTreeNodeByKey(key).querySelector('.next-tree-child-tree') ===
            expanded
    );
}

function assertSelected(key, selected) {
    assert(
        hasClass(
            findTreeNodeByKey(key).querySelector('.next-tree-node-inner'),
            'next-selected'
        ) === selected
    );
}

function assertChecked(key, checked) {
    assert(
        hasClass(
            findTreeNodeByKey(key).querySelector('.next-checkbox-wrapper'),
            'checked'
        ) === checked
    );
}

function assertIndeterminate(key, indeterminate) {
    assert(
        hasClass(
            findTreeNodeByKey(key).querySelector('.next-checkbox-wrapper'),
            'indeterminate'
        ) === indeterminate
    );
}

function assertEditing(key, editing) {
    const treeNode = findTreeNodeByKey(key);
    const label = _k2n[key].label;

    if (editing) {
        const input = treeNode.querySelector('.next-tree-node-input input');
        assert(
            !!input && input.value === label && document.activeElement === input
        );
    } else {
        assert(findTreeNodeByKey(key).querySelector('.next-tree-node-label'));
    }
}

function assertActiveElement() {
    let activeElement = document.activeElement;

    return (keyCode, next) => {
        ReactTestUtils.Simulate.keyDown(activeElement, { keyCode });
        next = typeof next === 'function' ? next() : next;
        assert(document.activeElement === next);
        activeElement = next;
    };
}

function getTreePath(listIndex, path = '') {
    if (listIndex === 0) {
        return `.next-tree ${path}`;
    }

    return getTreePath(
        listIndex - 1,
        ` > .next-tree-node > .next-tree-child-tree ${path}`
    );
}

function findRealItem(listIndex, itemIndex) {
    return document.querySelectorAll(
        `${getTreePath(listIndex)} > .next-tree-node > .next-tree-node-inner`
    )[itemIndex];
}
