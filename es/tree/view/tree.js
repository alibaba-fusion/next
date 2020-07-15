import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _extends from 'babel-runtime/helpers/extends';

var _class, _temp;

/* eslint-disable max-depth */
import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import cx from 'classnames';
import { func, dom, obj, KEYCODE } from '../../util';
import TreeNode from './tree-node';
import VirtualList from '../../virtual-list';
import { normalizeToArray, isDescendantOrSelf, isSiblingOrSelf, filterChildKey, filterParentKey, getAllCheckedKeys, forEachEnableNode, isNodeChecked, getAllDescendantKeys, convertChildren2Data } from './util';

var bindCtx = func.bindCtx,
    noop = func.noop;
var getOffset = dom.getOffset;
var pickOthers = obj.pickOthers,
    isPlainObject = obj.isPlainObject;


var getExpandedKeys = function getExpandedKeys(props, willReceiveProps, _k2n, _p2n) {
    var expandedKeys = void 0;

    if (!willReceiveProps && props.defaultExpandAll) {
        expandedKeys = Object.keys(_k2n).filter(function (key) {
            var children = _k2n[key].children;
            return children && children.length;
        });
    } else {
        expandedKeys = 'expandedKeys' in props ? props.expandedKeys : willReceiveProps ? [] : props.defaultExpandedKeys;
        expandedKeys = normalizeToArray(expandedKeys);

        if (props.autoExpandParent) {
            var newExpandedKeys = [];

            var expandedPoss = expandedKeys.reduce(function (ret, key) {
                var pos = _k2n[key] && _k2n[key].pos;
                if (pos) {
                    ret.push(pos);
                    newExpandedKeys.push(key);
                }
                return ret;
            }, []);

            expandedPoss.forEach(function (pos) {
                var nums = pos.split('-');
                if (nums.length === 2) {
                    return;
                }
                for (var i = 1; i <= nums.length - 2; i++) {
                    var ancestorPos = nums.slice(0, i + 1).join('-');
                    var ancestorKey = _p2n[ancestorPos].key;
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

var getSelectedKeys = function getSelectedKeys(props, willReceiveProps, _k2n) {
    var selectedKeys = 'selectedKeys' in props ? props.selectedKeys : willReceiveProps ? [] : props.defaultSelectedKeys;
    selectedKeys = normalizeToArray(selectedKeys);

    return selectedKeys.filter(function (key) {
        return _k2n[key];
    });
};

var getIndeterminateKeys = function getIndeterminateKeys(checkedKeys, checkStrictly, _k2n, _p2n) {
    if (checkStrictly) {
        return [];
    }

    var indeterminateKeys = [];

    var poss = filterChildKey(checkedKeys.filter(function (key) {
        return !!_k2n[key];
    }).filter(function (key) {
        return !_k2n[key].disabled && !_k2n[key].checkboxDisabled && _k2n[key].checkable !== false;
    }), _k2n, _p2n).map(function (key) {
        return _k2n[key].pos;
    });

    poss.forEach(function (pos) {
        var nums = pos.split('-');
        for (var i = nums.length; i > 2; i--) {
            var parentPos = nums.slice(0, i - 1).join('-');
            var parent = _p2n[parentPos];
            if (parent.disabled || parent.checkboxDisabled) break;
            var parentKey = parent.key;
            if (indeterminateKeys.indexOf(parentKey) === -1) {
                indeterminateKeys.push(parentKey);
            }
        }
    });

    return indeterminateKeys;
};

var getCheckedKeys = function getCheckedKeys(props, willReceiveProps, _k2n, _p2n) {
    var checkedKeys = props.defaultCheckedKeys;
    var indeterminateKeys = void 0;

    if ('checkedKeys' in props) {
        checkedKeys = props.checkedKeys;
    } else if (willReceiveProps) {
        checkedKeys = [];
    }

    var checkStrictly = props.checkStrictly; // TODO TEST

    if (checkStrictly) {
        if (isPlainObject(checkedKeys)) {
            var _checkedKeys = checkedKeys,
                checked = _checkedKeys.checked,
                indeterminate = _checkedKeys.indeterminate;

            checkedKeys = normalizeToArray(checked);
            indeterminateKeys = normalizeToArray(indeterminate);
        } else {
            checkedKeys = normalizeToArray(checkedKeys);
        }

        checkedKeys = checkedKeys.filter(function (key) {
            return !!_k2n[key];
        });
    } else {
        checkedKeys = getAllCheckedKeys(checkedKeys, _k2n, _p2n);
        checkedKeys = checkedKeys.filter(function (key) {
            return !!_k2n[key];
        });

        indeterminateKeys = getIndeterminateKeys(checkedKeys, props.checkStrictly, _k2n, _p2n);
    }

    return { checkedKeys: checkedKeys, indeterminateKeys: indeterminateKeys };
};

var preHandleData = function preHandleData(dataSource, props) {
    var k2n = {};
    var p2n = {};

    var drill = function drill() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';
        var parent = arguments[3];
        return data.map(function (item, index) {
            // 为了兼容之前的实现 保留非法节点
            if (item.illegalFlag) {
                return item;
            }

            var children = item.children;

            var pos = prefix + '-' + index;
            var key = item.key;


            item.pos = pos;
            item.level = level;

            // 判断为叶子节点
            // - 指定isLeaf属性
            // - loadData模式下 没有指定isLeaf为true
            // - 存在children元素
            if (!('isLeaf' in item)) {
                item.isLeaf = !(children && children.length || props.loadData);
            }
            item.isLastChild = parent ? [].concat(parent.isLastChild || [], index === data.length - 1) : [];

            if (key === undefined || key === null) {
                item.key = key = pos;
            }

            !item.isLeaf && drill(children, level + 1, pos, item);

            k2n[key] = p2n[pos] = _extends({}, item);

            return item;
        });
    };

    return { dataSource: drill(dataSource), k2n: k2n, p2n: p2n };
};

var preHandleChildren = function preHandleChildren(props) {
    var k2n = {};
    var p2n = {};

    var loop = function loop(children) {
        var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0';
        var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        return Children.map(children, function (node, index) {
            if (!React.isValidElement(node)) {
                return;
            }
            var pos = prefix + '-' + index;
            var key = node.key;


            key = key || pos;

            var item = _extends({}, node.props, { key: key, pos: pos, level: level });
            var children = node.props.children;

            var hasChildren = children && Children.count(children);

            if (!('isLeaf' in item)) {
                item.isLeaf = !(hasChildren || props.loadData);
            }

            if (hasChildren) {
                item.children = loop(children, pos, level + 1);
            }

            k2n[key] = p2n[pos] = item;
            return item;
        });
    };
    loop(props.children);

    return { k2n: k2n, p2n: p2n };
};

var getData = function getData(props) {
    var dataSource = props.dataSource,
        renderChildNodes = props.renderChildNodes,
        _props$children = props.children,
        children = _props$children === undefined ? [] : _props$children,
        useVirtual = props.useVirtual;

    var data = dataSource;

    if ((renderChildNodes || useVirtual) && !(data && data.length)) {
        data = convertChildren2Data(children);
    }
    return data && data.length ? preHandleData(data, props) : preHandleChildren(props);
};

/**
 * Tree
 */
var Tree = (_temp = _class = function (_Component) {
    _inherits(Tree, _Component);

    function Tree(props) {
        _classCallCheck(this, Tree);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        var _getData = getData(props),
            _getData$dataSource = _getData.dataSource,
            dataSource = _getData$dataSource === undefined ? [] : _getData$dataSource,
            k2n = _getData.k2n,
            p2n = _getData.p2n;

        var _this$props = _this.props,
            focusable = _this$props.focusable,
            autoFocus = _this$props.autoFocus,
            focusedKey = _this$props.focusedKey;

        var willReceiveProps = false;

        var _getCheckedKeys = getCheckedKeys(props, willReceiveProps, k2n, p2n),
            checkedKeys = _getCheckedKeys.checkedKeys,
            _getCheckedKeys$indet = _getCheckedKeys.indeterminateKeys,
            indeterminateKeys = _getCheckedKeys$indet === undefined ? [] : _getCheckedKeys$indet;

        _this.state = {
            _k2n: k2n,
            _p2n: p2n,
            dataSource: dataSource,
            willReceiveProps: willReceiveProps,
            expandedKeys: getExpandedKeys(props, willReceiveProps, k2n, p2n),
            selectedKeys: getSelectedKeys(props, willReceiveProps, k2n, p2n),
            checkedKeys: checkedKeys,
            indeterminateKeys: indeterminateKeys
        };

        if (focusable) {
            _this.tabbableKey = _this.getFirstAvaliablelChildKey('0');
        }

        _this.state.focusedKey = 'focusedKey' in props ? focusedKey : focusable && autoFocus ? _this.tabbableKey : null;

        if (focusable) {
            _this.tabbableKey = _this.getFirstAvaliablelChildKey('0');
        }

        bindCtx(_this, ['handleExpand', 'handleSelect', 'handleCheck', 'handleBlur']);
        return _this;
    }

    Tree.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
        var _getData2 = getData(props),
            _getData2$dataSource = _getData2.dataSource,
            dataSource = _getData2$dataSource === undefined ? [] : _getData2$dataSource,
            k2n = _getData2.k2n,
            p2n = _getData2.p2n;

        var st = {};

        if (!state.willReceiveProps) {
            return {
                willReceiveProps: true,
                _k2n: k2n,
                _p2n: p2n
            };
        }

        if ('expandedKeys' in props) {
            st.expandedKeys = getExpandedKeys(props, state.willReceiveProps, k2n, p2n);
        }

        if ('selectedKeys' in props) {
            st.selectedKeys = getSelectedKeys(props, state.willReceiveProps, k2n);
        }

        if ('checkedKeys' in props) {
            var _getCheckedKeys2 = getCheckedKeys(props, state.willReceiveProps, k2n, p2n),
                checkedKeys = _getCheckedKeys2.checkedKeys;

            st.checkedKeys = checkedKeys;
        }

        st.indeterminateKeys = props.checkStrictly ? props.checkedKeys && props.checkedKeys.indeterminate || [] : getIndeterminateKeys(st.checkedKeys || state.checkedKeys || [], props.checkStrictly, k2n, p2n);

        return _extends({}, st, {
            dataSource: dataSource,
            _k2n: k2n,
            _p2n: p2n
        });
    };

    Tree.prototype.setFocusKey = function setFocusKey() {
        var _state$selectedKeys = this.state.selectedKeys,
            selectedKeys = _state$selectedKeys === undefined ? [] : _state$selectedKeys;

        this.setState({
            focusedKey: selectedKeys.length > 0 ? selectedKeys[0] : this.getFirstAvaliablelChildKey('0')
        });
    };

    Tree.prototype.getAvailableKey = function getAvailableKey(pos, prev) {
        var _this2 = this;

        var ps = Object.keys(this.state._p2n).filter(function (p) {
            return _this2.isAvailablePos(pos, p);
        });
        if (ps.length > 1) {
            var index = ps.indexOf(pos);
            var targetIndex = void 0;
            if (prev) {
                targetIndex = index === 0 ? ps.length - 1 : index - 1;
            } else {
                targetIndex = index === ps.length - 1 ? 0 : index + 1;
            }

            return this.state._p2n[ps[targetIndex]].key;
        }

        return null;
    };

    Tree.prototype.getFirstAvaliablelChildKey = function getFirstAvaliablelChildKey(parentPos) {
        var _this3 = this;

        var pos = Object.keys(this.state._p2n).find(function (p) {
            return _this3.isAvailablePos(parentPos + '-0', p);
        });
        return pos ? this.state._p2n[pos].key : null;
    };

    Tree.prototype.isAvailablePos = function isAvailablePos(refPos, targetPos) {
        var disabled = this.state._p2n[targetPos].disabled;


        return this.isSibling(refPos, targetPos) && !disabled;
    };

    Tree.prototype.isSibling = function isSibling(currentPos, targetPos) {
        var currentNums = currentPos.split('-').slice(0, -1);
        var targetNums = targetPos.split('-').slice(0, -1);

        return currentNums.length === targetNums.length && currentNums.every(function (num, index) {
            return num === targetNums[index];
        });
    };

    Tree.prototype.getParentKey = function getParentKey(pos) {
        return this.state._p2n[pos.slice(0, pos.length - 2)].key;
    };

    Tree.prototype.processKey = function processKey(keys, key, add) {
        var index = keys.indexOf(key);
        if (add && index === -1) {
            keys.push(key);
        } else if (!add && index > -1) {
            keys.splice(index, 1);
        }
        return keys;
    };

    /*eslint-disable max-statements*/


    Tree.prototype.handleItemKeyDown = function handleItemKeyDown(key, item, e) {
        if ([KEYCODE.UP, KEYCODE.DOWN, KEYCODE.RIGHT, KEYCODE.LEFT, KEYCODE.ENTER, KEYCODE.ESC, KEYCODE.SPACE].indexOf(e.keyCode) > -1) {
            e.preventDefault();
            e.stopPropagation();
        }

        var focusedKey = this.state.focusedKey;

        var node = this.state._k2n[key];
        var pos = this.state._k2n[key].pos;
        var level = pos.split('-').length - 1;
        switch (e.keyCode) {
            case KEYCODE.UP:
                {
                    var avaliableKey = this.getAvailableKey(pos, true);
                    if (avaliableKey) {
                        focusedKey = avaliableKey;
                    }
                    break;
                }
            case KEYCODE.DOWN:
                {
                    var _avaliableKey = this.getAvailableKey(pos, false);
                    if (_avaliableKey) {
                        focusedKey = _avaliableKey;
                    }
                    break;
                }
            case KEYCODE.RIGHT:
                {
                    this.handleExpand(true, key, node);
                    var _avaliableKey2 = this.getFirstAvaliablelChildKey(pos);
                    if (_avaliableKey2) {
                        focusedKey = _avaliableKey2;
                    }
                    break;
                }
            case KEYCODE.LEFT:
            case KEYCODE.ESC:
                {
                    if (level === 1) {
                        var _avaliableKey3 = this.getAvailableKey(pos, true);
                        if (_avaliableKey3) {
                            focusedKey = _avaliableKey3;
                        }
                    } else if (level > 1) {
                        var parentKey = this.getParentKey(pos);
                        this.handleExpand(false, parentKey, node);
                        focusedKey = parentKey;
                    }
                    break;
                }

            case KEYCODE.ENTER:
            case KEYCODE.SPACE:
                {
                    var checkable = item.props.checkable === true || this.props.checkable;
                    var selectable = item.props.selectable === true || this.props.selectable;

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
                    focusedKey: focusedKey
                });
            }
        }

        this.props.onItemKeyDown(focusedKey, item, e);
        this.props.onItemFocus(focusedKey, e);
    };

    Tree.prototype.handleBlur = function handleBlur(e) {
        this.setState({
            focusedKey: ''
        });

        this.props.onBlur && this.props.onBlur(e);
    };

    Tree.prototype.handleExpand = function handleExpand(expand, key, node) {
        var _this4 = this;

        var _props = this.props,
            onExpand = _props.onExpand,
            loadData = _props.loadData;

        var expandedKeys = this.state.expandedKeys; // 由于setState 是异步操作，所以去掉 [...this.state.expandedKeys]
        this.processKey(expandedKeys, key, expand);
        var setExpandedState = function setExpandedState() {
            if (!('expandedKeys' in _this4.props)) {
                _this4.setState({ expandedKeys: expandedKeys });
            }
            onExpand(expandedKeys, { expanded: expand, node: node });
        };

        if (expand && loadData) {
            return loadData(node).then(setExpandedState);
        } else {
            setExpandedState();
        }
    };

    Tree.prototype.handleSelect = function handleSelect(select, key, node, e) {
        var _props2 = this.props,
            multiple = _props2.multiple,
            onSelect = _props2.onSelect;

        var selectedKeys = [].concat(this.state.selectedKeys);
        if (multiple) {
            this.processKey(selectedKeys, key, select);
        } else {
            selectedKeys = select ? [key] : [];
        }

        if (!('selectedKeys' in this.props)) {
            this.setState({ selectedKeys: selectedKeys });
        }
        onSelect(selectedKeys, {
            selectedNodes: this.getNodes(selectedKeys),
            node: node,
            selected: select,
            event: e
        });
    };

    // eslint-disable-next-line max-statements


    Tree.prototype.handleCheck = function handleCheck(check, key, node) {
        var _this5 = this;

        var _props3 = this.props,
            checkStrictly = _props3.checkStrictly,
            checkedStrategy = _props3.checkedStrategy,
            onCheck = _props3.onCheck;
        var _state = this.state,
            _k2n = _state._k2n,
            _p2n = _state._p2n;

        var checkedKeys = [].concat(this.state.checkedKeys);

        if (checkStrictly) {
            this.processKey(checkedKeys, key, check);
            var _newCheckedKeys = isPlainObject(this.props.checkedKeys) ? {
                checked: checkedKeys,
                indeterminate: this.state.indeterminateKeys
            } : checkedKeys;

            onCheck(_newCheckedKeys, {
                checkedNodes: this.getNodes(checkedKeys),
                checkedNodesPositions: checkedKeys.map(function (key) {
                    if (!_k2n[key]) return null;
                    var _k2n$key = _k2n[key],
                        node = _k2n$key.node,
                        pos = _k2n$key.pos;

                    return { node: node, pos: pos };
                }).filter(function (v) {
                    return !!v;
                }),
                node: node,
                indeterminateKeys: this.state.indeterminateKeys,
                checked: check,
                key: key
            });

            return;
        }

        var pos = _k2n[key].pos;

        forEachEnableNode(_k2n[key], function (node) {
            if (node.checkable === false) return;
            _this5.processKey(checkedKeys, node.key, check);
        });

        var ps = Object.keys(_p2n);

        var currentPos = pos;
        var nums = pos.split('-');

        for (var i = nums.length; i > 2; i--) {
            var parentCheck = true;

            var parentPos = nums.slice(0, i - 1).join('-');
            if (_p2n[parentPos].disabled || _p2n[parentPos].checkboxDisabled || _p2n[parentPos].checkable === false) {
                currentPos = parentPos;
                continue;
            }
            var parentKey = _p2n[parentPos].key;
            var parentChecked = checkedKeys.indexOf(parentKey) > -1;
            if (!check && !parentChecked) {
                break;
            }

            for (var j = 0; j < ps.length; j++) {
                var p = ps[j];
                var pnode = _p2n[p];
                if (isSiblingOrSelf(currentPos, p) && !pnode.disabled && !pnode.checkboxDisabled) {
                    var k = pnode.key;
                    if (pnode.checkable === false) {
                        // eslint-disable-next-line max-depth
                        if (!pnode.children || pnode.children.length === 0) continue;

                        // eslint-disable-next-line max-depth
                        for (var m = 0; m < pnode.children.length; m++) {
                            if (!pnode.children.every(function (child) {
                                return isNodeChecked(child, checkedKeys);
                            })) {
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

        var indeterminateKeys = getIndeterminateKeys(checkedKeys, checkStrictly, _k2n, _p2n);
        if (!('checkedKeys' in this.props)) {
            this.setState({
                checkedKeys: checkedKeys,
                indeterminateKeys: indeterminateKeys
            });
        }

        var newCheckedKeys = void 0;
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
            checkedNodesPositions: newCheckedKeys.map(function (key) {
                if (!_k2n[key]) return null;
                var _k2n$key2 = _k2n[key],
                    node = _k2n$key2.node,
                    pos = _k2n$key2.pos;

                return { node: node, pos: pos };
            }).filter(function (v) {
                return !!v;
            }),
            node: node,
            indeterminateKeys: indeterminateKeys,
            checked: check,
            key: key
        });
    };

    Tree.prototype.getNodeProps = function getNodeProps(key) {
        var prefix = this.props.prefix;
        var _state2 = this.state,
            expandedKeys = _state2.expandedKeys,
            selectedKeys = _state2.selectedKeys,
            checkedKeys = _state2.checkedKeys,
            dragOverNodeKey = _state2.dragOverNodeKey,
            _k2n = _state2._k2n,
            indeterminateKeys = _state2.indeterminateKeys;
        var _k2n$key3 = _k2n[key],
            pos = _k2n$key3.pos,
            isLeaf = _k2n$key3.isLeaf,
            level = _k2n$key3.level;


        return {
            prefix: prefix,
            root: this,
            eventKey: key,
            pos: pos,
            isLeaf: isLeaf,
            level: level,
            expanded: expandedKeys.indexOf(key) > -1,
            selected: selectedKeys.indexOf(key) > -1,
            checked: checkedKeys.indexOf(key) > -1,
            indeterminate: indeterminateKeys.indexOf(key) > -1,
            dragOver: dragOverNodeKey === key && this.dropPosition === 0,
            dragOverGapTop: dragOverNodeKey === key && this.dropPosition === -1,
            dragOverGapBottom: dragOverNodeKey === key && this.dropPosition === 1
        };
    };

    Tree.prototype.getNodes = function getNodes(keys) {
        var _this6 = this;

        return keys.map(function (key) {
            return _this6.state._k2n[key] && _this6.state._k2n[key].node;
        }).filter(function (v) {
            return !!v;
        });
    };

    Tree.prototype.handleDragStart = function handleDragStart(e, node) {
        var _this7 = this;

        var dragNodeKey = node.props.eventKey;
        this.dragNode = node;
        this.dragNodesKeys = Object.keys(this.state._k2n).filter(function (k) {
            return isDescendantOrSelf(_this7.state._k2n[dragNodeKey].pos, _this7.state._k2n[k].pos);
        });

        var expandedKeys = this.processKey([].concat(this.state.expandedKeys), dragNodeKey, false);
        this.setState({ expandedKeys: expandedKeys });

        this.props.onDragStart({
            event: e,
            node: node,
            expandedKeys: expandedKeys
        });
    };

    Tree.prototype.handleDragEnter = function handleDragEnter(e, node) {
        var dragOverNodeKey = node.props.eventKey;
        this.dropPosition = this.getDropPosition(e, node);
        if (this.dragNode && this.dragNode.props.eventKey === dragOverNodeKey && this.dropPosition === 0) {
            this.setState({
                dragOverNodeKey: null
            });
            return;
        }

        var expandedKeys = this.processKey([].concat(this.state.expandedKeys), dragOverNodeKey, true);
        this.setState({
            dragOverNodeKey: dragOverNodeKey,
            expandedKeys: expandedKeys
        });

        this.props.onDragEnter({
            event: e,
            node: node,
            expandedKeys: expandedKeys
        });
    };

    Tree.prototype.getDropPosition = function getDropPosition(e, node) {
        var labelWrapperNode = node.labelWrapperEl;
        var offsetTop = getOffset(labelWrapperNode).top;
        var offsetHeight = labelWrapperNode.offsetHeight;
        var pageY = e.pageY;
        var gapHeight = 2;

        if (pageY > offsetTop + offsetHeight - gapHeight) {
            return 1;
        }
        if (pageY < offsetTop + gapHeight) {
            return -1;
        }
        return 0;
    };

    Tree.prototype.handleDragOver = function handleDragOver(e, node) {
        this.props.onDragOver({ event: e, node: node });
    };

    Tree.prototype.handleDragLeave = function handleDragLeave(e, node) {
        this.props.onDragLeave({ event: e, node: node });
    };

    Tree.prototype.handleDragEnd = function handleDragEnd(e, node) {
        this.setState({
            dragOverNodeKey: null
        });

        this.props.onDragEnd({ event: e, node: node });
    };

    Tree.prototype.handleDrop = function handleDrop(e, node) {
        if (this.dragNode && isDescendantOrSelf(this.state._k2n[this.dragNode.props.eventKey].pos, this.state._k2n[node.props.eventKey].pos)) {
            return;
        }

        this.setState({
            dragOverNodeKey: null
        });

        var params = this.generateDropParams(node);
        this.props.onDrop(_extends({
            event: e
        }, params));
    };

    Tree.prototype.canDrop = function canDrop(node) {
        var params = this.generateDropParams(node);
        return this.props.canDrop(params);
    };

    Tree.prototype.generateDropParams = function generateDropParams(node) {
        return {
            dragNode: this.dragNode,
            dragNodesKeys: [].concat(this.dragNodesKeys),
            node: node,
            dropPosition: this.dropPosition
        };
    };

    Tree.prototype.filterTreeNode = function filterTreeNode(node) {
        return this.props.filterTreeNode.call(this, node);
    };

    Tree.prototype.shouldNodeShow = function shouldNodeShow(nodeData) {
        var _state3 = this.state,
            expandedKeys = _state3.expandedKeys,
            _p2n = _state3._p2n;


        return getAllDescendantKeys(nodeData, _p2n).every(function (k) {
            return expandedKeys.includes(k);
        });
    };

    Tree.prototype.renderTreeNode = function renderTreeNode(props, childNodes) {
        var rtl = this.props.rtl;
        var key = props.key;

        var nodeProps = _extends({
            _key: key
        }, props, this.getNodeProps(key));

        return React.createElement(
            TreeNode,
            _extends({ rtl: rtl, key: key }, nodeProps),
            childNodes
        );
    };

    Tree.prototype.renderNodeList = function renderNodeList(dataSource) {
        var _this8 = this;

        var nodeList = [];
        var _k2n = this.state._k2n;

        var drill = function drill(list) {
            list.forEach(function (item) {
                // 为了兼容之前的实现 保留非法节点
                if (item.illegalFlag) {
                    nodeList.push(item);
                    return;
                }

                var children = item.children,
                    nodeProps = _objectWithoutProperties(item, ['children']);

                if (!_this8.shouldNodeShow(item)) {
                    return;
                }

                nodeList.push(nodeProps);
                children && children.length && drill(children);
            });
        };

        drill(dataSource);

        return nodeList.map(function (nodeProps, index) {
            // 为了兼容之前的实现 保留非法节点
            if (nodeProps.illegalFlag) {
                return nodeProps.node;
            }
            // aria props
            nodeProps.size = nodeList.length;
            nodeProps.posinset = index + 1;

            return _k2n[nodeProps.key].node = _this8.renderTreeNode(nodeProps);
        });
    };

    Tree.prototype.renderWithCustomChildNodes = function renderWithCustomChildNodes(dataSource) {
        var _this9 = this;

        var renderChildNodes = this.props.renderChildNodes;
        var _k2n = this.state._k2n;


        var drill = function drill(list) {
            return list.map(function (_ref, index) {
                var children = _ref.children,
                    nodeProps = _objectWithoutProperties(_ref, ['children']);

                var childNodes = void 0;

                if (children && children.length) {
                    childNodes = renderChildNodes(drill(children));
                }

                // aria props
                nodeProps.size = list.length;
                nodeProps.posinset = index + 1;

                return _k2n[nodeProps.key].node = _this9.renderTreeNode(nodeProps, childNodes);
            });
        };
        return drill(dataSource);
    };

    Tree.prototype.renderByDataSource = function renderByDataSource(dataSource) {
        var _this10 = this;

        var rtl = this.props.rtl;

        var drill = function drill(data) {
            var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0';

            return data.map(function (item, index) {
                // 为了兼容之前的实现 保留非法节点
                if (item.illegalFlag) {
                    return item.node;
                }

                var pos = prefix + '-' + index;

                var _item$key = item.key,
                    key = _item$key === undefined ? pos : _item$key,
                    children = item.children,
                    others = _objectWithoutProperties(item, ['key', 'children']);

                var props = _extends({}, others, _this10.getNodeProps('' + key), {
                    _key: key
                });
                if (children && children.length) {
                    props.children = drill(children, pos);
                }
                var node = React.createElement(TreeNode, _extends({
                    rtl: rtl,
                    key: key,
                    size: data.length
                }, props));
                // eslint-disable-next-line
                _this10.state._k2n[key].node = node;
                return node;
            });
        };

        return drill(dataSource);
    };

    Tree.prototype.renderByChildren = function renderByChildren() {
        var _this11 = this;

        var rtl = this.props.rtl;
        var _k2n = this.state._k2n;


        var loop = function loop(children) {
            var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0';

            return Children.map(children, function (child, index) {
                if (!React.isValidElement(child)) {
                    return;
                }
                var pos = prefix + '-' + index;
                var key = child.key || pos;
                var props = _this11.getNodeProps('' + key);
                if (child.props.children) {
                    props.children = loop(child.props.children, pos);
                }

                props._key = key;
                props.rtl = rtl;
                props.size = Children.count(children);

                var node = cloneElement(child, props);
                _k2n[key].node = node;
                return node;
            });
        };

        return loop(this.props.children);
    };

    Tree.prototype.render = function render() {
        var _cx,
            _this12 = this;

        var _props4 = this.props,
            prefix = _props4.prefix,
            rtl = _props4.rtl,
            className = _props4.className,
            showLine = _props4.showLine,
            isNodeBlock = _props4.isNodeBlock,
            isLabelBlock = _props4.isLabelBlock,
            multiple = _props4.multiple,
            useVirtual = _props4.useVirtual,
            renderChildNodes = _props4.renderChildNodes;
        var dataSource = this.state.dataSource;

        var _pickOthers = pickOthers(Object.keys(Tree.propTypes), this.props),
            style = _pickOthers.style,
            others = _objectWithoutProperties(_pickOthers, ['style']);

        if (rtl) {
            others.dir = 'rtl';
        }

        var newClassName = cx((_cx = {}, _cx[prefix + 'tree'] = true, _cx[prefix + 'label-block'] = isLabelBlock, _cx[prefix + 'node-block'] = isNodeBlock, _cx[prefix + 'node-indent'] = !isNodeBlock, _cx[prefix + 'show-line'] = !isNodeBlock && showLine, _cx[className] = !!className, _cx));

        var treeRender = function treeRender(items, ref) {
            return React.createElement(
                'ul',
                _extends({
                    role: 'tree',
                    ref: ref,
                    'aria-multiselectable': multiple,
                    onBlur: _this12.handleBlur,
                    className: newClassName,
                    style: useVirtual ? null : style
                }, others),
                items
            );
        };

        var virtualTreeRender = function virtualTreeRender(dataSource) {
            return React.createElement(
                'div',
                {
                    className: prefix + 'virtual-tree-container',
                    style: style
                },
                React.createElement(
                    VirtualList,
                    {
                        itemsRenderer: function itemsRenderer(items, ref) {
                            return treeRender(items, ref);
                        }
                    },
                    _this12.renderNodeList(dataSource)
                )
            );
        };

        return useVirtual ? virtualTreeRender(dataSource) : renderChildNodes ? treeRender(this.renderWithCustomChildNodes(dataSource)) : !this.props.dataSource ? treeRender(this.renderByChildren()) : treeRender(this.renderByDataSource(dataSource));
    };

    return Tree;
}(Component), _class.propTypes = {
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
    checkedKeys: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.object]),
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
    /**
     * 是否开启虚拟滚动
     */
    useVirtual: PropTypes.bool
}, _class.defaultProps = {
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
    canDrop: function canDrop() {
        return true;
    },
    onEditFinish: noop,
    onRightClick: noop,
    isLabelBlock: false,
    isNodeBlock: false,
    animation: true,
    focusable: true,
    autoFocus: false,
    onItemFocus: noop,
    onItemKeyDown: noop,
    useVirtual: false
}, _temp);
Tree.displayName = 'Tree';


export default polyfill(Tree);