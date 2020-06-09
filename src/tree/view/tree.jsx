/* eslint-disable max-depth */
import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import cx from 'classnames';
import { func, dom, obj, KEYCODE } from '../../util';
import TreeNode from './tree-node';
import VirtualList from '../../virtual-list';
import {
    normalizeToArray,
    isDescendantOrSelf,
    isSiblingOrSelf,
    filterChildKey,
    filterParentKey,
    getAllCheckedKeys,
    forEachEnableNode,
    isNodeChecked,
    getAllDescendantKeys,
    convertChildren2Data,
} from './util';

const { bindCtx, noop } = func;
const { getOffset } = dom;
const { pickOthers, isPlainObject } = obj;

const getExpandedKeys = (props, willReceiveProps, _k2n, _p2n) => {
    let expandedKeys;

    if (!willReceiveProps && props.defaultExpandAll) {
        expandedKeys = Object.keys(_k2n).filter(key => {
            const children = _k2n[key].children;
            return children && children.length;
        });
    } else {
        expandedKeys =
            'expandedKeys' in props
                ? props.expandedKeys
                : willReceiveProps
                ? []
                : props.defaultExpandedKeys;
        expandedKeys = normalizeToArray(expandedKeys);

        if (props.autoExpandParent) {
            const newExpandedKeys = [];

            const expandedPoss = expandedKeys.reduce((ret, key) => {
                const pos = _k2n[key] && _k2n[key].pos;
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
                    const ancestorKey = _p2n[ancestorPos].key;
                    if (newExpandedKeys.indexOf(ancestorKey) === -1) {
                        newExpandedKeys.push(ancestorKey);
                    }
                }
            });

            return newExpandedKeys;
        }
    }

    return expandedKeys;
};

const getSelectedKeys = (props, willReceiveProps, _k2n) => {
    let selectedKeys =
        'selectedKeys' in props
            ? props.selectedKeys
            : willReceiveProps
            ? []
            : props.defaultSelectedKeys;
    selectedKeys = normalizeToArray(selectedKeys);

    return selectedKeys.filter(key => _k2n[key]);
};

const getIndeterminateKeys = (checkedKeys, checkStrictly, _k2n, _p2n) => {
    if (checkStrictly) {
        return [];
    }

    const indeterminateKeys = [];

    const poss = filterChildKey(
        checkedKeys
            .filter(key => !!_k2n[key])
            .filter(
                key =>
                    !_k2n[key].disabled &&
                    !_k2n[key].checkboxDisabled &&
                    _k2n[key].checkable !== false
            ),
        _k2n,
        _p2n
    ).map(key => _k2n[key].pos);

    poss.forEach(pos => {
        const nums = pos.split('-');
        for (let i = nums.length; i > 2; i--) {
            const parentPos = nums.slice(0, i - 1).join('-');
            const parent = _p2n[parentPos];
            if (parent.disabled || parent.checkboxDisabled) break;
            const parentKey = parent.key;
            if (indeterminateKeys.indexOf(parentKey) === -1) {
                indeterminateKeys.push(parentKey);
            }
        }
    });

    return indeterminateKeys;
};

const getCheckedKeys = (props, willReceiveProps, _k2n, _p2n) => {
    let checkedKeys = props.defaultCheckedKeys;
    let indeterminateKeys;

    if ('checkedKeys' in props) {
        checkedKeys = props.checkedKeys;
    } else if (willReceiveProps) {
        checkedKeys = [];
    }

    const { checkStrictly } = props; // TODO TEST
    if (checkStrictly) {
        if (isPlainObject(checkedKeys)) {
            const { checked, indeterminate } = checkedKeys;
            checkedKeys = normalizeToArray(checked);
            indeterminateKeys = normalizeToArray(indeterminate);
        } else {
            checkedKeys = normalizeToArray(checkedKeys);
        }

        checkedKeys = checkedKeys.filter(key => !!_k2n[key]);
    } else {
        checkedKeys = getAllCheckedKeys(checkedKeys, _k2n, _p2n);
        checkedKeys = checkedKeys.filter(key => !!_k2n[key]);

        indeterminateKeys = getIndeterminateKeys(
            checkedKeys,
            props.checkStrictly,
            _k2n,
            _p2n
        );
    }

    return { checkedKeys, indeterminateKeys };
};

const preHandleData = (dataSource, props) => {
    const k2n = {};
    const p2n = {};

    const drill = (data = [], level = 1, prefix = '0', parent) =>
        data.map((item, index) => {
            // 为了兼容之前的实现 保留非法节点
            if (item.illegalFlag) {
                return item;
            }

            const { children } = item;
            const pos = `${prefix}-${index}`;
            let { key } = item;

            item.pos = pos;
            item.level = level;

            // 判断为叶子节点
            // - 指定isLeaf属性
            // - loadData模式下 没有指定isLeaf为true
            // - 存在children元素
            if (!('isLeaf' in item)) {
                item.isLeaf = !(
                    (children && children.length) ||
                    props.loadData
                );
            }
            item.isLastChild = parent
                ? [].concat(parent.isLastChild || [], index === data.length - 1)
                : [];

            if (key === undefined || key === null) {
                item.key = key = pos;
            }

            !item.isLeaf && drill(children, level + 1, pos, item);

            k2n[key] = p2n[pos] = { ...item };

            return item;
        });

    return { dataSource: drill(dataSource), k2n, p2n };
};

const preHandleChildren = props => {
    const k2n = {};
    const p2n = {};

    const loop = (children, prefix = '0', level = 1) =>
        Children.map(children, (node, index) => {
            if (!React.isValidElement(node)) {
                return;
            }
            const pos = `${prefix}-${index}`;
            let { key } = node;

            key = key || pos;

            const item = { ...node.props, key, pos, level };
            const { children } = node.props;
            const hasChildren = children && Children.count(children);

            if (!('isLeaf' in item)) {
                item.isLeaf = !(hasChildren || props.loadData);
            }

            if (hasChildren) {
                item.children = loop(children, pos, level + 1);
            }

            k2n[key] = p2n[pos] = item;
            return item;
        });
    loop(props.children);

    return { k2n, p2n };
};

const getData = props => {
    const { dataSource, renderChildNodes, children = [], useVirtual } = props;
    let data = dataSource;

    if ((renderChildNodes || useVirtual) && !(data && data.length)) {
        data = convertChildren2Data(children);
    }
    return data && data.length
        ? preHandleData(data, props)
        : preHandleChildren(props);
};

/**
 * Tree
 */
class Tree extends Component {
    static propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
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
         * 是否自动展开父节点，建议受控时设置为false
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
        animation: PropTypes.bool,
        /**
         * 当前获得焦点的子菜单或菜单项 key 值
         */
        focusedKey: PropTypes.string,
        /**
         * 渲染子节点
         * @param {Array<ReactNode>} nodes 所有的子节点
         * @return {ReactNode} 返回节点
         */
        renderChildNodes: PropTypes.func,
        focusable: PropTypes.bool,
        autoFocus: PropTypes.bool,
        onItemFocus: PropTypes.func,
        onBlur: PropTypes.func,
        onItemKeyDown: PropTypes.func,
        useVirtual: PropTypes.bool,
    };

    static defaultProps = {
        prefix: 'next-',
        rtl: false,
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
        onExpand: noop,
        onCheck: noop,
        onSelect: noop,
        onDragStart: noop,
        onDragEnter: noop,
        onDragOver: noop,
        onDragLeave: noop,
        onDragEnd: noop,
        onDrop: noop,
        canDrop: () => true,
        onEditFinish: noop,
        onRightClick: noop,
        isLabelBlock: false,
        isNodeBlock: false,
        animation: true,
        focusable: true,
        autoFocus: false,
        onItemFocus: noop,
        onItemKeyDown: noop,
        useVirtual: false,
    };

    constructor(props) {
        super(props);

        const { dataSource = [], k2n, p2n } = getData(props);
        const { focusable, autoFocus, focusedKey } = this.props;
        const willReceiveProps = false;
        const { checkedKeys, indeterminateKeys = [] } = getCheckedKeys(
            props,
            willReceiveProps,
            k2n,
            p2n
        );

        this.state = {
            _k2n: k2n,
            _p2n: p2n,
            dataSource,
            willReceiveProps,
            expandedKeys: getExpandedKeys(props, willReceiveProps, k2n, p2n),
            selectedKeys: getSelectedKeys(props, willReceiveProps, k2n, p2n),
            checkedKeys,
            indeterminateKeys,
        };

        if (focusable) {
            this.tabbableKey = this.getFirstAvaliablelChildKey('0');
        }

        this.state.focusedKey =
            'focusedKey' in props
                ? focusedKey
                : focusable && autoFocus
                ? this.tabbableKey
                : null;

        if (focusable) {
            this.tabbableKey = this.getFirstAvaliablelChildKey('0');
        }

        bindCtx(this, [
            'handleExpand',
            'handleSelect',
            'handleCheck',
            'handleBlur',
        ]);
    }

    static getDerivedStateFromProps(props, state) {
        const { dataSource = [], k2n, p2n } = getData(props);
        const st = {};

        if (!state.willReceiveProps) {
            return {
                willReceiveProps: true,
                _k2n: k2n,
                _p2n: p2n,
            };
        }

        if ('expandedKeys' in props) {
            st.expandedKeys = getExpandedKeys(
                props,
                state.willReceiveProps,
                k2n,
                p2n
            );
        }

        if ('selectedKeys' in props) {
            st.selectedKeys = getSelectedKeys(
                props,
                state.willReceiveProps,
                k2n
            );
        }

        if ('checkedKeys' in props) {
            const { checkedKeys } = getCheckedKeys(
                props,
                state.willReceiveProps,
                k2n,
                p2n
            );
            st.checkedKeys = checkedKeys;
        }

        st.indeterminateKeys = props.checkStrictly
            ? (props.checkedKeys && props.checkedKeys.indeterminate) || []
            : getIndeterminateKeys(
                  st.checkedKeys || state.checkedKeys || [],
                  props.checkStrictly,
                  k2n,
                  p2n
              );

        return {
            ...st,
            dataSource,
            _k2n: k2n,
            _p2n: p2n,
        };
    }

    setFocusKey() {
        const { selectedKeys = [] } = this.state;
        this.setState({
            focusedKey:
                selectedKeys.length > 0
                    ? selectedKeys[0]
                    : this.getFirstAvaliablelChildKey('0'),
        });
    }

    getAvailableKey(pos, prev) {
        const ps = Object.keys(this.state._p2n).filter(p =>
            this.isAvailablePos(pos, p)
        );
        if (ps.length > 1) {
            const index = ps.indexOf(pos);
            let targetIndex;
            if (prev) {
                targetIndex = index === 0 ? ps.length - 1 : index - 1;
            } else {
                targetIndex = index === ps.length - 1 ? 0 : index + 1;
            }

            return this.state._p2n[ps[targetIndex]].key;
        }

        return null;
    }

    getFirstAvaliablelChildKey(parentPos) {
        const pos = Object.keys(this.state._p2n).find(p =>
            this.isAvailablePos(`${parentPos}-0`, p)
        );
        return pos ? this.state._p2n[pos].key : null;
    }

    isAvailablePos(refPos, targetPos) {
        const { disabled } = this.state._p2n[targetPos];

        return this.isSibling(refPos, targetPos) && !disabled;
    }

    isSibling(currentPos, targetPos) {
        const currentNums = currentPos.split('-').slice(0, -1);
        const targetNums = targetPos.split('-').slice(0, -1);

        return (
            currentNums.length === targetNums.length &&
            currentNums.every((num, index) => {
                return num === targetNums[index];
            })
        );
    }

    getParentKey(pos) {
        return this.state._p2n[pos.slice(0, pos.length - 2)].key;
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

    /*eslint-disable max-statements*/
    handleItemKeyDown(key, item, e) {
        if (
            [
                KEYCODE.UP,
                KEYCODE.DOWN,
                KEYCODE.RIGHT,
                KEYCODE.LEFT,
                KEYCODE.ENTER,
                KEYCODE.ESC,
                KEYCODE.SPACE,
            ].indexOf(e.keyCode) > -1
        ) {
            e.preventDefault();
            e.stopPropagation();
        }

        let focusedKey = this.state.focusedKey;

        const node = this.state._k2n[key];
        const pos = this.state._k2n[key].pos;
        const level = pos.split('-').length - 1;
        switch (e.keyCode) {
            case KEYCODE.UP: {
                const avaliableKey = this.getAvailableKey(pos, true);
                if (avaliableKey) {
                    focusedKey = avaliableKey;
                }
                break;
            }
            case KEYCODE.DOWN: {
                const avaliableKey = this.getAvailableKey(pos, false);
                if (avaliableKey) {
                    focusedKey = avaliableKey;
                }
                break;
            }
            case KEYCODE.RIGHT: {
                this.handleExpand(true, key, node);
                const avaliableKey = this.getFirstAvaliablelChildKey(pos);
                if (avaliableKey) {
                    focusedKey = avaliableKey;
                }
                break;
            }
            case KEYCODE.LEFT:
            case KEYCODE.ESC: {
                if (level === 1) {
                    const avaliableKey = this.getAvailableKey(pos, true);
                    if (avaliableKey) {
                        focusedKey = avaliableKey;
                    }
                } else if (level > 1) {
                    const parentKey = this.getParentKey(pos);
                    this.handleExpand(false, parentKey, node);
                    focusedKey = parentKey;
                }
                break;
            }

            case KEYCODE.ENTER:
            case KEYCODE.SPACE: {
                const checkable =
                    item.props.checkable === true || this.props.checkable;
                const selectable =
                    item.props.selectable === true || this.props.selectable;

                if (checkable) {
                    this.handleCheck(!item.props.checked, key, node);
                } else if (selectable) {
                    this.handleSelect(!item.props.selected, key, node, e);
                }
                break;
            }
            case KEYCODE.TAB:
                focusedKey = null;
                break;
            default:
                break;
        }

        if (focusedKey !== this.state.focusedKey) {
            if (!('focusedKey' in this.props)) {
                this.setState({
                    focusedKey,
                });
            }
        }

        this.props.onItemKeyDown(focusedKey, item, e);
        this.props.onItemFocus(focusedKey, e);
    }

    handleBlur(e) {
        this.setState({
            focusedKey: '',
        });

        this.props.onBlur && this.props.onBlur(e);
    }

    handleExpand(expand, key, node) {
        const { onExpand, loadData } = this.props;
        const expandedKeys = this.state.expandedKeys; // 由于setState 是异步操作，所以去掉 [...this.state.expandedKeys]
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

    handleSelect(select, key, node, e) {
        const { multiple, onSelect } = this.props;
        let selectedKeys = [...this.state.selectedKeys];
        if (multiple) {
            this.processKey(selectedKeys, key, select);
        } else {
            selectedKeys = select ? [key] : [];
        }

        if (!('selectedKeys' in this.props)) {
            this.setState({ selectedKeys });
        }
        onSelect(selectedKeys, {
            selectedNodes: this.getNodes(selectedKeys),
            node,
            selected: select,
            event: e,
        });
    }

    // eslint-disable-next-line max-statements
    handleCheck(check, key, node) {
        const { checkStrictly, checkedStrategy, onCheck } = this.props;
        const { _k2n, _p2n } = this.state;
        const checkedKeys = [...this.state.checkedKeys];

        if (checkStrictly) {
            this.processKey(checkedKeys, key, check);
            const newCheckedKeys = isPlainObject(this.props.checkedKeys)
                ? {
                      checked: checkedKeys,
                      indeterminate: this.state.indeterminateKeys,
                  }
                : checkedKeys;

            onCheck(newCheckedKeys, {
                checkedNodes: this.getNodes(checkedKeys),
                checkedNodesPositions: checkedKeys
                    .map(key => {
                        if (!_k2n[key]) return null;
                        const { node, pos } = _k2n[key];
                        return { node, pos };
                    })
                    .filter(v => !!v),
                node,
                indeterminateKeys: this.state.indeterminateKeys,
                checked: check,
                key,
            });

            return;
        }

        const pos = _k2n[key].pos;

        forEachEnableNode(_k2n[key], node => {
            if (node.checkable === false) return;
            this.processKey(checkedKeys, node.key, check);
        });

        const ps = Object.keys(_p2n);

        let currentPos = pos;
        const nums = pos.split('-');

        for (let i = nums.length; i > 2; i--) {
            let parentCheck = true;

            const parentPos = nums.slice(0, i - 1).join('-');
            if (
                _p2n[parentPos].disabled ||
                _p2n[parentPos].checkboxDisabled ||
                _p2n[parentPos].checkable === false
            ) {
                currentPos = parentPos;
                continue;
            }
            const parentKey = _p2n[parentPos].key;
            const parentChecked = checkedKeys.indexOf(parentKey) > -1;
            if (!check && !parentChecked) {
                break;
            }

            for (let j = 0; j < ps.length; j++) {
                const p = ps[j];
                const pnode = _p2n[p];
                if (
                    isSiblingOrSelf(currentPos, p) &&
                    !pnode.disabled &&
                    !pnode.checkboxDisabled
                ) {
                    const k = pnode.key;
                    if (pnode.checkable === false) {
                        // eslint-disable-next-line max-depth
                        if (!pnode.children || pnode.children.length === 0)
                            continue;

                        // eslint-disable-next-line max-depth
                        for (let m = 0; m < pnode.children.length; m++) {
                            if (
                                !pnode.children.every(child =>
                                    isNodeChecked(child, checkedKeys)
                                )
                            ) {
                                parentCheck = false;
                                break;
                            }
                        }
                    } else if (checkedKeys.indexOf(k) === -1) {
                        parentCheck = false;
                    }

                    if (!parentCheck) break;
                }
            }

            this.processKey(checkedKeys, parentKey, parentCheck);

            currentPos = parentPos;
        }

        const indeterminateKeys = getIndeterminateKeys(
            checkedKeys,
            checkStrictly,
            _k2n,
            _p2n
        );
        if (!('checkedKeys' in this.props)) {
            this.setState({
                checkedKeys,
                indeterminateKeys,
            });
        }

        let newCheckedKeys;
        switch (checkedStrategy) {
            case 'parent':
                newCheckedKeys = filterChildKey(checkedKeys, _k2n, _p2n);
                break;
            case 'child':
                newCheckedKeys = filterParentKey(checkedKeys, _k2n, _p2n);
                break;
            default:
                newCheckedKeys = checkedKeys;
                break;
        }

        onCheck(newCheckedKeys, {
            checkedNodes: this.getNodes(newCheckedKeys),
            checkedNodesPositions: newCheckedKeys
                .map(key => {
                    if (!_k2n[key]) return null;
                    const { node, pos } = _k2n[key];
                    return { node, pos };
                })
                .filter(v => !!v),
            node,
            indeterminateKeys,
            checked: check,
            key,
        });
    }

    getNodeProps(key) {
        const { prefix } = this.props;
        const {
            expandedKeys,
            selectedKeys,
            checkedKeys,
            dragOverNodeKey,
            _k2n,
            indeterminateKeys,
        } = this.state;

        const { pos, isLeaf, level } = _k2n[key];

        return {
            prefix,
            root: this,
            eventKey: key,
            pos,
            isLeaf,
            level,
            expanded: expandedKeys.indexOf(key) > -1,
            selected: selectedKeys.indexOf(key) > -1,
            checked: checkedKeys.indexOf(key) > -1,
            indeterminate: indeterminateKeys.indexOf(key) > -1,
            dragOver: dragOverNodeKey === key && this.dropPosition === 0,
            dragOverGapTop: dragOverNodeKey === key && this.dropPosition === -1,
            dragOverGapBottom:
                dragOverNodeKey === key && this.dropPosition === 1,
        };
    }

    getNodes(keys) {
        return keys
            .map(key => this.state._k2n[key] && this.state._k2n[key].node)
            .filter(v => !!v);
    }

    handleDragStart(e, node) {
        const dragNodeKey = node.props.eventKey;
        this.dragNode = node;
        this.dragNodesKeys = Object.keys(this.state._k2n).filter(k => {
            return isDescendantOrSelf(
                this.state._k2n[dragNodeKey].pos,
                this.state._k2n[k].pos
            );
        });

        const expandedKeys = this.processKey(
            [...this.state.expandedKeys],
            dragNodeKey,
            false
        );
        this.setState({ expandedKeys });

        this.props.onDragStart({
            event: e,
            node,
            expandedKeys,
        });
    }

    handleDragEnter(e, node) {
        const dragOverNodeKey = node.props.eventKey;
        this.dropPosition = this.getDropPosition(e, node);
        if (
            this.dragNode &&
            this.dragNode.props.eventKey === dragOverNodeKey &&
            this.dropPosition === 0
        ) {
            this.setState({
                dragOverNodeKey: null,
            });
            return;
        }

        const expandedKeys = this.processKey(
            [...this.state.expandedKeys],
            dragOverNodeKey,
            true
        );
        this.setState({
            dragOverNodeKey,
            expandedKeys,
        });

        this.props.onDragEnter({
            event: e,
            node,
            expandedKeys,
        });
    }

    getDropPosition(e, node) {
        const labelWrapperNode = node.labelWrapperEl;
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
            dragOverNodeKey: null,
        });

        this.props.onDragEnd({ event: e, node: node });
    }

    handleDrop(e, node) {
        if (
            this.dragNode &&
            isDescendantOrSelf(
                this.state._k2n[this.dragNode.props.eventKey].pos,
                this.state._k2n[node.props.eventKey].pos
            )
        ) {
            return;
        }

        this.setState({
            dragOverNodeKey: null,
        });

        const params = this.generateDropParams(node);
        this.props.onDrop({
            event: e,
            ...params,
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
            dropPosition: this.dropPosition,
        };
    }

    filterTreeNode(node) {
        return this.props.filterTreeNode.call(this, node);
    }

    shouldNodeShow(nodeData) {
        const { expandedKeys, _p2n } = this.state;

        return getAllDescendantKeys(nodeData, _p2n).every(k =>
            expandedKeys.includes(k)
        );
    }

    renderTreeNode(props, childNodes) {
        const { rtl } = this.props;
        const { key } = props;
        const nodeProps = {
            _key: key,
            ...props,
            ...this.getNodeProps(key),
        };

        return (
            <TreeNode rtl={rtl} key={key} {...nodeProps}>
                {childNodes}
            </TreeNode>
        );
    }

    renderNodeList(dataSource) {
        const nodeList = [];
        const { _k2n } = this.state;
        const drill = list => {
            list.forEach(item => {
                // 为了兼容之前的实现 保留非法节点
                if (item.illegalFlag) {
                    nodeList.push(item);
                    return;
                }

                const { children, ...nodeProps } = item;

                if (!this.shouldNodeShow(item)) {
                    return;
                }

                nodeList.push(nodeProps);
                children && children.length && drill(children);
            });
        };

        drill(dataSource);

        return nodeList.map((nodeProps, index) => {
            // 为了兼容之前的实现 保留非法节点
            if (nodeProps.illegalFlag) {
                return nodeProps.node;
            }
            // aria props
            nodeProps.size = nodeList.length;
            nodeProps.posinset = index + 1;

            return (_k2n[nodeProps.key].node = this.renderTreeNode(nodeProps));
        });
    }

    renderWithCustomChildNodes(dataSource) {
        const { renderChildNodes } = this.props;
        const { _k2n } = this.state;

        const drill = list =>
            list.map(({ children, ...nodeProps }, index) => {
                let childNodes;

                if (children && children.length) {
                    childNodes = renderChildNodes(drill(children));
                }

                // aria props
                nodeProps.size = list.length;
                nodeProps.posinset = index + 1;

                return (_k2n[nodeProps.key].node = this.renderTreeNode(
                    nodeProps,
                    childNodes
                ));
            });
        return drill(dataSource);
    }

    renderByDataSource(dataSource) {
        const { rtl } = this.props;
        const drill = (data, prefix = '0') => {
            return data.map((item, index) => {
                // 为了兼容之前的实现 保留非法节点
                if (item.illegalFlag) {
                    return item.node;
                }

                const pos = `${prefix}-${index}`;
                const { key = pos, children, ...others } = item;
                const props = {
                    ...others,
                    ...this.getNodeProps(`${key}`),
                    _key: key,
                };
                if (children && children.length) {
                    props.children = drill(children, pos);
                }
                const node = (
                    <TreeNode
                        rtl={rtl}
                        key={key}
                        size={data.length}
                        {...props}
                    />
                );
                // eslint-disable-next-line
                this.state._k2n[key].node = node;
                return node;
            });
        };

        return drill(dataSource);
    }

    renderByChildren() {
        const { rtl } = this.props;
        const { _k2n } = this.state;

        const loop = (children, prefix = '0') => {
            return Children.map(children, (child, index) => {
                if (!React.isValidElement(child)) {
                    return;
                }
                const pos = `${prefix}-${index}`;
                const key = child.key || pos;
                const props = this.getNodeProps(`${key}`);
                if (child.props.children) {
                    props.children = loop(child.props.children, pos);
                }

                props._key = key;
                props.rtl = rtl;
                props.size = Children.count(children);

                const node = cloneElement(child, props);
                _k2n[key].node = node;
                return node;
            });
        };

        return loop(this.props.children);
    }
    render() {
        const {
            prefix,
            rtl,
            className,
            showLine,
            isNodeBlock,
            isLabelBlock,
            multiple,
            useVirtual,
            renderChildNodes,
        } = this.props;
        const { dataSource } = this.state;
        const { style, ...others } = pickOthers(
            Object.keys(Tree.propTypes),
            this.props
        );

        if (rtl) {
            others.dir = 'rtl';
        }

        const newClassName = cx({
            [`${prefix}tree`]: true,
            [`${prefix}label-block`]: isLabelBlock,
            [`${prefix}node-block`]: isNodeBlock,
            [`${prefix}node-indent`]: !isNodeBlock,
            [`${prefix}show-line`]: !isNodeBlock && showLine,
            [className]: !!className,
        });

        const treeRender = (items, ref) => {
            return (
                <ul
                    role="tree"
                    ref={ref}
                    aria-multiselectable={multiple}
                    onBlur={this.handleBlur}
                    className={newClassName}
                    style={useVirtual ? null : style}
                    {...others}
                >
                    {items}
                </ul>
            );
        };

        const virtualTreeRender = dataSource => {
            return (
                <div
                    className={`${prefix}virtual-tree-container`}
                    style={style}
                >
                    <VirtualList
                        itemsRenderer={(items, ref) => treeRender(items, ref)}
                    >
                        {this.renderNodeList(dataSource)}
                    </VirtualList>
                </div>
            );
        };

        return useVirtual
            ? virtualTreeRender(dataSource)
            : renderChildNodes
            ? treeRender(this.renderWithCustomChildNodes(dataSource))
            : !this.props.dataSource
            ? treeRender(this.renderByChildren())
            : treeRender(this.renderByDataSource(dataSource));
    }
}

export default polyfill(Tree);
