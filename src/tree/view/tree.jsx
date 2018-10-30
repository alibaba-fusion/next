import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ConfigProvider from '../../config-provider';
import { func, dom, obj } from '../../util';
import TreeNode from './tree-node';
import { normalizeToArray, isDescendantOrSelf, isSiblingOrSelf, filterChildKey, filterParentKey, getAllCheckedKeys } from './util';

const { bindCtx } = func;
const { getOffset } = dom;
const { pickOthers, isPlainObject } = obj;

/**
 * Tree
 */
class Tree extends Component {
    static propTypes = {
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        className: PropTypes.string,
        /**
         * 树节点
         */
        children: PropTypes.node,
        /**
         * 数据源，该属性优先级高于 children
         */
        dataSource: PropTypes.array,
        /**
         * 是否显示树的线
         */
        showLine: PropTypes.bool,
        /**
         * 是否支持选中节点
         */
        selectable: PropTypes.bool,
        /**
         * （用于受控）当前选中节点 key 的数组
         */
        selectedKeys: PropTypes.arrayOf(PropTypes.string),
        /**
         * （用于非受控）默认选中节点 key 的数组
         */
        defaultSelectedKeys: PropTypes.arrayOf(PropTypes.string),
        /**
         * 选中或取消选中节点时触发的回调函数
         * @param {Array} selectedKeys 选中节点key的数组
         * @param {Object} extra 额外参数
         * @param {Array} extra.selectedNodes 选中节点的数组
         * @param {Object} extra.node 当前操作的节点
         * @param {Boolean} extra.selected 当前操作是否是选中
         */
        onSelect: PropTypes.func,
        /**
         * 是否支持多选
         */
        multiple: PropTypes.bool,
        /**
         * 是否支持勾选节点的复选框
         */
        checkable: PropTypes.bool,
        /**
         * （用于受控）当前勾选复选框节点 key 的数组或 `{checked: Array, indeterminate: Array}` 的对象
         */
        checkedKeys: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.string),
            PropTypes.object,
        ]),
        /**
         * （用于非受控）默认勾选复选框节点 key 的数组
         */
        defaultCheckedKeys: PropTypes.arrayOf(PropTypes.string),
        /**
         * 勾选节点复选框是否完全受控（父子节点选中状态不再关联）
         */
        checkStrictly: PropTypes.bool,
        /**
         * 定义选中时回填的方式
         * @enumdesc 返回所有选中的节点, 父子节点都选中时只返回父节点, 父子节点都选中时只返回子节点
         */
        checkedStrategy: PropTypes.oneOf(['all', 'parent', 'child']),
        /**
         * 勾选或取消勾选复选框时触发的回调函数
         * @param {Array} checkedKeys 勾选复选框节点key的数组
         * @param {Object} extra 额外参数
         * @param {Array} extra.checkedNodes 勾选复选框节点的数组
         * @param {Array} extra.checkedNodesPositions 包含有勾选复选框节点和其位置的对象的数组
         * @param {Array} extra.indeterminateKeys 半选复选框节点 key 的数组
         * @param {Object} extra.node 当前操作的节点
         * @param {Boolean} extra.checked 当前操作是否是勾选
         */
        onCheck: PropTypes.func,
        /**
         * （用于受控）当前展开的节点 key 的数组
         */
        expandedKeys: PropTypes.arrayOf(PropTypes.string),
        /**
         * （用于非受控）默认展开的节点 key 的数组
         */
        defaultExpandedKeys: PropTypes.arrayOf(PropTypes.string),
        /**
         * 是否默认展开所有节点
         */
        defaultExpandAll: PropTypes.bool,
        /**
         * 是否自动展开父节点
         */
        autoExpandParent: PropTypes.bool,
        /**
         * 展开或收起节点时触发的回调函数
         * @param {Array} expandedKeys 展开的节点key的数组
         * @param {Object} extra 额外参数
         * @param {Object} extra.node 当前操作的节点
         * @param {Boolean} extra.expanded 当前操作是否是展开
         */
        onExpand: PropTypes.func,
        /**
         * 是否支持编辑节点内容
         */
        editable: PropTypes.bool,
        /**
         * 编辑节点内容完成时触发的回调函数
         * @param {String} key 编辑节点的 key
         * @param {String} label 编辑节点完成时节点的文本
         * @param {Object} node 当前编辑的节点
         */
        onEditFinish: PropTypes.func,
        /**
         * 是否支持拖拽节点
         */
        draggable: PropTypes.bool,
        /**
         * 开始拖拽节点时触发的回调函数
         * @param {Object} info 拖拽信息
         * @param {Object} info.event 事件对象
         * @param {Object} info.node 拖拽的节点
         */
        onDragStart: PropTypes.func,
        /**
         * 拖拽节点进入目标节点时触发的回调函数
         * @param {Object} info 拖拽信息
         * @param {Object} info.event 事件对象
         * @param {Object} info.node 目标节点
         * @param {Array} info.expandedKeys 当前展开的节点key的数组
         */
        onDragEnter: PropTypes.func,
        /**
         * 拖拽节点在目标节点上移动的时候触发的回调函数
         * @param {Object} info 拖拽信息
         * @param {Object} info.event 事件对象
         * @param {Object} info.node 目标节点
         */
        onDragOver: PropTypes.func,
        /**
         * 拖拽节点离开目标节点时触发的回调函数
         * @param {Object} info 拖拽信息
         * @param {Object} info.event 事件对象
         * @param {Object} info.node 目标节点
         */
        onDragLeave: PropTypes.func,
        /**
         * 拖拽节点拖拽结束时触发的回调函数
         * @param {Object} info 拖拽信息
         * @param {Object} info.event 事件对象
         * @param {Object} info.node 目标节点
         */
        onDragEnd: PropTypes.func,
        /**
         * 拖拽节点放入目标节点内或前后触发的回调函数
         * @param {Object} info 拖拽信息
         * @param {Object} info.event 事件对象
         * @param {Object} info.node 目标节点
         * @param {Object} info.dragNode 拖拽的节点
         * @param {Array} info.dragNodesKeys 拖拽的节点和其子节点 key 的数组
         * @param {Number} info.dropPosition 放置位置，-1代表当前节点前，0代表当前节点里，1代表当前节点后
         */
        onDrop: PropTypes.func,
        /**
         * 节点是否可被作为拖拽的目标节点
         * @param {Object} info 拖拽信息
         * @param {Object} info.node 目标节点
         * @param {Object} info.dragNode 拖拽的节点
         * @param {Array} info.dragNodesKeys 拖拽的节点和其子节点 key 的数组
         * @param {Number} info.dropPosition 放置位置，-1代表当前节点前，0代表当前节点里，1代表当前节点后
         * @return {Boolean} 是否可以被当作目标节点
         */
        canDrop: PropTypes.func,
        /**
         * 异步加载数据的函数
         * @param {Object} node 被点击展开的节点
         */
        loadData: PropTypes.func,
        /**
         * 按需筛选高亮节点
         * @param {Object} node 待筛选的节点
         * @return {Boolean} 是否被筛选中
         */
        filterTreeNode: PropTypes.func,
        /**
         * 右键点击节点时触发的回调函数
         * @param {Object} info 信息对象
         * @param {Object} info.event 事件对象
         * @param {Object} info.node 点击的节点
         */
        onRightClick: PropTypes.func,
        /**
         * 设置节点是否占满剩余空间，一般用于统一在各节点右侧添加元素(借助 flex 实现，暂时只支持 ie10+)
         */
        isLabelBlock: PropTypes.bool,
        /**
         * 设置节点是否占满一行
         */
        isNodeBlock: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        /**
         * 是否开启展开收起动画
         */
        animation: PropTypes.bool
    };

    static defaultProps = {
        prefix: 'next-',
        pure: false,
        showLine: false,
        selectable: true,
        editable: false,
        multiple: false,
        checkable: false,
        checkStrictly: false,
        checkedStrategy: 'all',
        draggable: false,
        autoExpandParent: true,
        defaultExpandAll: false,
        defaultExpandedKeys: [],
        defaultCheckedKeys: [],
        defaultSelectedKeys: [],
        onExpand: () => {},
        onCheck: () => {},
        onSelect: () => {},
        onDragStart: () => {},
        onDragEnter: () => {},
        onDragOver: () => {},
        onDragLeave: () => {},
        onDragEnd: () => {},
        onDrop: () => {},
        canDrop: () => true,
        onEditFinish: () => {},
        onRightClick: () => {},
        isLabelBlock: false,
        isNodeBlock: false,
        animation: true
    };

    constructor(props) {
        super(props);

        this.updateCache(props);

        this.indeterminateKeys = [];
        this.state = {
            expandedKeys: this.getExpandedKeys(props),
            selectedKeys: this.getSelectedKeys(props),
            checkedKeys: this.getCheckedKeys(props)
        };

        bindCtx(this, ['handleExpand', 'handleSelect', 'handleCheck']);
    }

    componentWillReceiveProps(nextProps) {
        this.updateCache(nextProps);

        const st = {};

        if ('expandedKeys' in nextProps) {
            st.expandedKeys = this.getExpandedKeys(nextProps, true);
        }
        if ('selectedKeys' in nextProps) {
            st.selectedKeys = this.getSelectedKeys(nextProps, true);
        }
        if ('checkedKeys' in nextProps) {
            st.checkedKeys = this.getCheckedKeys(nextProps, true);
        }

        if (Object.keys(st).length) {
            this.setState(st);
        }
    }

    updateCache(props) {
        this._k2n = {};
        this._p2n = {};

        if ('dataSource' in props) {
            const loop = (data, prefix = '0') => data.forEach((item, index) => {
                const pos = `${prefix}-${index}`;
                let { key } = item;
                key = key || pos;
                const newItem = { ...item, key, pos };
                const { children } = item;
                if (children && children.length) {
                    loop(children, pos);
                }
                this._k2n[key] = this._p2n[pos] = newItem;
            });
            loop(props.dataSource);
        } else if ('children' in props) {
            const loop = (children, prefix = '0') => Children.map(children, (node, index) => {
                const pos = `${prefix}-${index}`;
                let { key } = node;
                key = key || pos;
                const newItem = { ...node.props, key, pos };

                const { children } = node.props;
                if (children && Children.count(children)) {
                    newItem.children = loop(children, pos);
                }
                this._k2n[key] = this._p2n[pos] = newItem;
                return newItem;
            });
            loop(props.children);
        }
    }

    getExpandedKeys(props, willReceiveProps) {
        let expandedKeys;

        if (!willReceiveProps && props.defaultExpandAll) {
            expandedKeys = Object.keys(this._k2n).filter(key => {
                const children = this._k2n[key].children;
                return children && children.length;
            });
        } else {
            expandedKeys = 'expandedKeys' in props ?
                props.expandedKeys :
                willReceiveProps ? [] : props.defaultExpandedKeys;
            expandedKeys = normalizeToArray(expandedKeys);

            if (props.autoExpandParent) {
                const newExpandedKeys = [];

                const expandedPoss = expandedKeys.reduce((ret, key) => {
                    const pos = this._k2n[key] && this._k2n[key].pos;
                    if (pos) {
                        ret.push(pos);
                        newExpandedKeys.push(key);
                    }
                    return ret;
                }, []);

                expandedPoss.forEach(pos => {
                    const nums = pos.split('-');
                    if (nums.length === 2) {
                        return;
                    }
                    for (let i = 1; i <= nums.length - 2; i++) {
                        const ancestorPos = nums.slice(0, i + 1).join('-');
                        const ancestorKey = this._p2n[ancestorPos].key;
                        if (newExpandedKeys.indexOf(ancestorKey) === -1) {
                            newExpandedKeys.push(ancestorKey);
                        }
                    }
                });

                return newExpandedKeys;
            }
        }

        return expandedKeys;
    }

    getSelectedKeys(props, willReceiveProps) {
        let selectedKeys = 'selectedKeys' in props ?
            props.selectedKeys :
            willReceiveProps ? [] : props.defaultSelectedKeys;
        selectedKeys = normalizeToArray(selectedKeys);

        const newSelectKeys = selectedKeys.filter(key => {
            return this._k2n[key];
        });
        return newSelectKeys;
    }

    getCheckedKeys(props, willReceiveProps) {
        let checkedKeys = 'checkedKeys' in props ?
            props.checkedKeys :
            willReceiveProps ? [] : props.defaultCheckedKeys;

        const { checkStrictly } = this.props;
        if (checkStrictly) {
            if (isPlainObject(checkedKeys)) {
                const { checked, indeterminate } = checkedKeys;
                checkedKeys = normalizeToArray(checked);
                this.indeterminateKeys = normalizeToArray(indeterminate);
            } else {
                checkedKeys = normalizeToArray(checkedKeys);
            }
        } else {
            checkedKeys = getAllCheckedKeys(checkedKeys, this._k2n, this._p2n);
            this.indeterminateKeys = this.getIndeterminateKeys(checkedKeys);
        }

        return checkedKeys;
    }

    processKey(keys, key, add) {
        const index = keys.indexOf(key);
        if (add && index === -1) {
            keys.push(key);
        } else if (!add && index > -1) {
            keys.splice(index, 1);
        }
        return keys;
    }

    handleExpand(expand, key, node) {
        const { onExpand, loadData } = this.props;
        const expandedKeys = [...this.state.expandedKeys];
        this.processKey(expandedKeys, key, expand);
        const setExpandedState = () => {
            if (!('expandedKeys' in this.props)) {
                this.setState({ expandedKeys });
            }
            onExpand(expandedKeys, { expanded: expand, node });
        };

        if (expand && loadData) {
            return loadData(node).then(setExpandedState);
        } else {
            setExpandedState();
        }
    }

    handleSelect(select, key, node) {
        const { multiple, onSelect } = this.props;
        let selectedKeys = [...this.state.selectedKeys];
        if (multiple) {
            this.processKey(selectedKeys, key, select);
        } else if (select) {
            selectedKeys = [key];
        } else {
            selectedKeys = [];
        }

        if (!('selectedKeys' in this.props)) {
            this.setState({ selectedKeys });
        }
        onSelect(selectedKeys, {
            selectedNodes: this.getNodes(selectedKeys),
            node,
            selected: select
        });
    }

    handleCheck(check, key, node) {
        const { checkStrictly, checkedStrategy, onCheck } = this.props;
        const checkedKeys = [...this.state.checkedKeys];

        if (checkStrictly) {
            this.processKey(checkedKeys, key, check);
            const newCheckedKeys = isPlainObject(this.props.checkedKeys) ? {
                checked: checkedKeys,
                indeterminate: this.indeterminateKeys
            } : checkedKeys;

            onCheck(newCheckedKeys, {
                checkedNodes: this.getNodes(checkedKeys),
                checkedNodesPositions: checkedKeys.map(key => {
                    const { node, pos } = this._k2n[key];
                    return { node, pos };
                }),
                node,
                indeterminateKeys: this.indeterminateKeys,
                checked: check
            });

            return;
        }

        const pos = this._k2n[key].pos;

        const ps = Object.keys(this._p2n);
        ps.forEach(p => {
            if (isDescendantOrSelf(pos, p)) {
                this.processKey(checkedKeys, this._p2n[p].key, check);
            }
        });

        let currentPos = pos;
        const nums = pos.split('-');
        for (let i = nums.length; i > 2; i--) {
            let parentCheck = true;

            const parentPos = nums.slice(0, i - 1).join('-');
            const parentKey = this._p2n[parentPos].key;
            const parentChecked = checkedKeys.indexOf(parentKey) > -1;
            if (!check && !parentChecked) {
                break;
            }

            for (let j = 0; j < ps.length; j++) {
                const p = ps[j];
                if (isSiblingOrSelf(currentPos, p)) {
                    const k = this._p2n[p].key;
                    if (checkedKeys.indexOf(k) === -1) {
                        parentCheck = false;
                        break;
                    }
                }
            }

            this.processKey(checkedKeys, parentKey, parentCheck);

            currentPos = parentPos;
        }

        const indeterminateKeys = this.getIndeterminateKeys(checkedKeys);
        if (!('checkedKeys' in this.props)) {
            this.setState({
                checkedKeys
            });
            this.indeterminateKeys = indeterminateKeys;
        }

        let newCheckedKeys;
        switch (checkedStrategy) {
            case 'parent':
                newCheckedKeys = filterChildKey(checkedKeys, this._k2n);
                break;
            case 'child':
                newCheckedKeys = filterParentKey(checkedKeys, this._k2n);
                break;
            default:
                newCheckedKeys = checkedKeys;
                break;
        }

        onCheck(newCheckedKeys, {
            checkedNodes: this.getNodes(newCheckedKeys),
            checkedNodesPositions: newCheckedKeys.map(key => {
                const { node, pos } = this._k2n[key];
                return { node, pos };
            }),
            node,
            indeterminateKeys,
            checked: check
        });
    }

    getNodeProps(key) {
        const { prefix } = this.props;
        const { expandedKeys, selectedKeys, checkedKeys, dragOverNodeKey } = this.state;
        const pos = this._k2n[key].pos;

        return {
            prefix,
            root: this,
            eventKey: key,
            pos,
            expanded: expandedKeys.indexOf(key) > -1,
            selected: selectedKeys.indexOf(key) > -1,
            checked: checkedKeys.indexOf(key) > -1,
            indeterminate: this.indeterminateKeys.indexOf(key) > -1,
            dragOver: dragOverNodeKey === key && this.dropPosition === 0,
            dragOverGapTop: dragOverNodeKey === key && this.dropPosition === -1,
            dragOverGapBottom: dragOverNodeKey === key && this.dropPosition === 1
        };
    }

    getParentNode(pos) {
        const parentPos = pos.split('-').slice(0, -1).join('-');
        if (parentPos.length === 1) {
            return null;
        }

        return this._p2n[parentPos].node;
    }

    getNodes(keys) {
        return keys.map(key => this._k2n[key].node);
    }

    getIndeterminateKeys(checkedKeys) {
        const indeterminateKeys = [];

        const poss = filterChildKey(checkedKeys, this._k2n).map(key => this._k2n[key].pos);
        poss.forEach(pos => {
            const nums = pos.split('-');
            for (let i = nums.length; i > 2; i--) {
                const parentPos = nums.slice(0, i - 1).join('-');
                const parentKey = this._p2n[parentPos].key;
                if (indeterminateKeys.indexOf(parentKey) === -1) {
                    indeterminateKeys.push(parentKey);
                }
            }
        });

        return indeterminateKeys;
    }

    handleDragStart(e, node) {
        const dragNodeKey = node.props.eventKey;
        this.dragNode = node;
        this.dragNodesKeys = Object.keys(this._k2n).filter(k => {
            return isDescendantOrSelf(this._k2n[dragNodeKey].pos, this._k2n[k].pos);
        });

        const expandedKeys = this.processKey([...this.state.expandedKeys], dragNodeKey, false);
        this.setState({ expandedKeys });

        this.props.onDragStart({
            event: e,
            node,
            expandedKeys
        });
    }

    handleDragEnter(e, node) {
        const dragOverNodeKey = node.props.eventKey;
        this.dropPosition = this.getDropPosition(e, node);
        if (this.dragNode.props.eventKey === dragOverNodeKey && this.dropPosition === 0) {
            this.setState({
                dragOverNodeKey: null
            });
            return;
        }

        const expandedKeys = this.processKey([...this.state.expandedKeys], dragOverNodeKey, true);
        this.setState({
            dragOverNodeKey,
            expandedKeys
        });

        this.props.onDragEnter({
            event: e,
            node,
            expandedKeys
        });
    }

    getDropPosition(e, node) {
        const labelWrapperNode = node.refs.labelWrapper;
        const offsetTop = getOffset(labelWrapperNode).top;
        const offsetHeight = labelWrapperNode.offsetHeight;
        const pageY = e.pageY;
        const gapHeight = 2;

        if (pageY > offsetTop + offsetHeight - gapHeight) {
            return 1;
        }
        if (pageY < offsetTop + gapHeight) {
            return -1;
        }
        return 0;
    }

    handleDragOver(e, node) {
        this.props.onDragOver({ event: e, node: node });
    }

    handleDragLeave(e, node) {
        this.props.onDragLeave({ event: e, node: node });
    }

    handleDragEnd(e, node) {
        this.setState({
            dragOverNodeKey: null
        });

        this.props.onDragEnd({ event: e, node: node });
    }

    handleDrop(e, node) {
        if (isDescendantOrSelf(this._k2n[this.dragNode.props.eventKey].pos, this._k2n[node.props.eventKey].pos)) {
            return;
        }

        this.setState({
            dragOverNodeKey: null
        });

        const params = this.generateDropParams(node);
        this.props.onDrop({
            event: e,
            ...params
        });
    }

    canDrop(node) {
        const params = this.generateDropParams(node);
        return this.props.canDrop(params);
    }

    generateDropParams(node) {
        return {
            dragNode: this.dragNode,
            dragNodesKeys: [...this.dragNodesKeys],
            node,
            dropPosition: this.dropPosition
        };
    }

    filterTreeNode(node) {
        return this.props.filterTreeNode.call(this, node);
    }

    renderByDataSource() {
        const loop = (data, prefix = '0') => {
            return data.map((item, index) => {
                const pos = `${prefix}-${index}`;
                const { key = pos, children, ...others } = item;
                const props = {
                    ...others,
                    ...this.getNodeProps(`${key}`)
                };
                if (children && children.length) {
                    props.children = loop(children, pos);
                }
                const node = <TreeNode key={key} {...props} />;
                this._k2n[key].node = node;
                return node;
            });
        };

        return loop(this.props.dataSource);
    }

    renderByChildren() {
        const loop = (children, prefix = '0') => {
            return Children.map(children, (child, index) => {
                const pos = `${prefix}-${index}`;
                const key = child.key || pos;
                const props = this.getNodeProps(`${key}`);
                if (child.props.children) {
                    props.children = loop(child.props.children, pos);
                }

                const node = cloneElement(child, props);
                this._k2n[key].node = node;
                return node;
            });
        };

        return loop(this.props.children);
    }

    render() {
        const { prefix, className, dataSource, showLine, isNodeBlock, isLabelBlock } = this.props;
        const others = pickOthers(Object.keys(Tree.propTypes), this.props);

        const newClassName = cx({
            [`${prefix}tree`]: true,
            [`${prefix}label-block`]: isLabelBlock,
            [`${prefix}node-block`]: isNodeBlock,
            [`${prefix}node-indent`]: !isNodeBlock,
            [`${prefix}show-line`]: !isNodeBlock && showLine,
            [className]: !!className
        });

        return (
            <ul className={newClassName} {...others}>
                {dataSource ? this.renderByDataSource() : this.renderByChildren()}
            </ul>
        );
    }
}

export default ConfigProvider.config(Tree);
