"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = exports.treeNodeProps = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_dom_1 = require("react-dom");
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var lodash_1 = require("lodash");
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var util_1 = require("../../util");
var tree_node_1 = tslib_1.__importDefault(require("./tree-node"));
var virtual_list_1 = tslib_1.__importDefault(require("../../virtual-list"));
var util_2 = require("./util");
var bindCtx = util_1.func.bindCtx, noop = util_1.func.noop;
var getOffset = util_1.dom.getOffset;
var pickOthers = util_1.obj.pickOthers, pickProps = util_1.obj.pickProps, isPlainObject = util_1.obj.isPlainObject;
exports.treeNodeProps = [
    'key',
    'label',
    'selectable',
    'checkable',
    'editable',
    'draggable',
    'disabled',
    'checkboxDisabled',
    'isLeaf',
    'icon',
];
var getExpandedKeys = function (props, willReceiveProps, _k2n, _p2n) {
    var expandedKeys;
    if (!willReceiveProps && props.defaultExpandAll) {
        expandedKeys = Object.keys(_k2n).filter(function (key) {
            var children = _k2n[key].children;
            return children && children.length;
        });
    }
    else {
        expandedKeys =
            'expandedKeys' in props
                ? props.expandedKeys
                : willReceiveProps
                    ? []
                    : props.defaultExpandedKeys;
        expandedKeys = (0, util_2.normalizeToArray)(expandedKeys);
        if (props.autoExpandParent) {
            var newExpandedKeys_1 = [];
            var expandedPoss = expandedKeys.reduce(function (ret, key) {
                var pos = _k2n[key] && _k2n[key].pos;
                if (pos) {
                    ret.push(pos);
                    newExpandedKeys_1.push(key);
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
                    if (newExpandedKeys_1.indexOf(ancestorKey) === -1) {
                        newExpandedKeys_1.push(ancestorKey);
                    }
                }
            });
            return newExpandedKeys_1;
        }
    }
    return expandedKeys;
};
var getSelectedKeys = function (props, willReceiveProps, _k2n, _p2n) {
    var selectedKeys = 'selectedKeys' in props
        ? props.selectedKeys
        : willReceiveProps
            ? []
            : props.defaultSelectedKeys;
    selectedKeys = (0, util_2.normalizeToArray)(selectedKeys);
    return selectedKeys.filter(function (key) { return _k2n[key]; });
};
var getIndeterminateKeys = function (checkedKeys, checkStrictly, _k2n, _p2n) {
    if (checkStrictly) {
        return [];
    }
    var indeterminateKeys = [];
    var poss = (0, util_2.filterChildKey)(checkedKeys
        .filter(function (key) { return !!_k2n[key]; })
        .filter(function (key) {
        return !_k2n[key].disabled &&
            !_k2n[key].checkboxDisabled &&
            _k2n[key].checkable !== false;
    }), _k2n, _p2n).map(function (key) { return _k2n[key].pos; });
    poss.forEach(function (pos) {
        var nums = pos.split('-');
        for (var i = nums.length; i > 2; i--) {
            var parentPos = nums.slice(0, i - 1).join('-');
            var parent_1 = _p2n[parentPos];
            if (parent_1.disabled || parent_1.checkboxDisabled)
                break;
            var parentKey = parent_1.key;
            if (indeterminateKeys.indexOf(parentKey) === -1) {
                indeterminateKeys.push(parentKey);
            }
        }
    });
    return indeterminateKeys;
};
var getCheckedKeys = function (props, willReceiveProps, _k2n, _p2n) {
    var checkedKeys = props.defaultCheckedKeys;
    var indeterminateKeys;
    if ('checkedKeys' in props) {
        checkedKeys = props.checkedKeys;
    }
    else if (willReceiveProps) {
        checkedKeys = [];
    }
    var checkStrictly = props.checkStrictly; // TODO TEST
    if (checkStrictly) {
        if (isPlainObject(checkedKeys)) {
            var checked = checkedKeys.checked, indeterminate = checkedKeys.indeterminate;
            checkedKeys = (0, util_2.normalizeToArray)(checked);
            indeterminateKeys = (0, util_2.normalizeToArray)(indeterminate);
        }
        else {
            checkedKeys = (0, util_2.normalizeToArray)(checkedKeys);
        }
        checkedKeys = checkedKeys.filter(function (key) { return !!_k2n[key]; });
    }
    else {
        // @ts-expect-error must be Key[] type, but it's maybe be a object type
        checkedKeys = (0, util_2.getAllCheckedKeys)(checkedKeys, _k2n, _p2n);
        checkedKeys = checkedKeys.filter(function (key) { return !!_k2n[key]; });
        indeterminateKeys = getIndeterminateKeys(checkedKeys, props.checkStrictly, _k2n, _p2n);
    }
    // @ts-expect-error need to assign default value to indeterminateKeys
    return { checkedKeys: checkedKeys, indeterminateKeys: indeterminateKeys };
};
var preHandleData = function (dataSource, props) {
    var k2n = {};
    var p2n = {};
    var keyList = [];
    var drill = function (data, level, prefix, parent) {
        if (data === void 0) { data = []; }
        if (level === void 0) { level = 1; }
        if (prefix === void 0) { prefix = '0'; }
        return data.map(function (item, index) {
            // 为了兼容之前的实现 保留非法节点
            if (item.illegalFlag) {
                return item;
            }
            var children = item.children;
            var pos = "".concat(prefix, "-").concat(index);
            var key = item.key;
            item.pos = pos;
            item.level = level;
            // 判断为叶子节点
            // - 指定isLeaf属性
            // - loadData模式下 没有指定isLeaf为true
            // - 存在children元素
            if (!('isLeaf' in item)) {
                item.isLeaf = !((children && children.length) || props.loadData);
            }
            item.isLastChild = parent
                ? [].concat(parent.isLastChild || [], index === data.length - 1)
                : [];
            if (key === undefined || key === null) {
                item.key = key = pos;
            }
            keyList.push(key);
            !item.isLeaf && drill(children, level + 1, pos, item);
            k2n[key] = p2n[pos] = tslib_1.__assign({}, item);
            return item;
        });
    };
    return { dataSource: drill(dataSource), k2n: k2n, p2n: p2n, keyList: keyList };
};
var preHandleChildren = function (props) {
    var k2n = {};
    var p2n = {};
    var keyList = [];
    var loop = function (children, prefix, level) {
        if (prefix === void 0) { prefix = '0'; }
        if (level === void 0) { level = 1; }
        return react_1.Children.map(children, function (node, index) {
            if (!react_1.default.isValidElement(node)) {
                return;
            }
            var pos = "".concat(prefix, "-").concat(index);
            var key = node.key;
            key = key || pos;
            var item = tslib_1.__assign(tslib_1.__assign({}, node.props), { key: key, pos: pos, level: level });
            var children = node.props.children;
            var hasChildren = children && react_1.Children.count(children);
            if (!('isLeaf' in item)) {
                item.isLeaf = !(hasChildren || props.loadData);
            }
            keyList.push(key);
            if (hasChildren) {
                item.children = loop(children, pos, level + 1);
            }
            k2n[key] = p2n[pos] = item;
            return item;
        });
    };
    loop(props.children);
    return { k2n: k2n, p2n: p2n, keyList: keyList };
};
var getData = function (props) {
    var dataSource = props.dataSource, renderChildNodes = props.renderChildNodes, _a = props.children, children = _a === void 0 ? [] : _a, useVirtual = props.useVirtual, immutable = props.immutable;
    var data = immutable ? (0, lodash_1.cloneDeep)(dataSource) : dataSource;
    if ((renderChildNodes || useVirtual) && !('dataSource' in props)) {
        data = (0, util_2.convertChildren2Data)(children);
    }
    if (data) {
        try {
            return preHandleData(data, props);
        }
        catch (err) {
            if ((err.message || '').match('object is not extensible')) {
                // eslint-disable-next-line no-console
                console.error(err.message, 'try to set immutable to true to allow immutable dataSource');
            }
            else {
                throw err;
            }
        }
    }
    else {
        return preHandleChildren(props);
    }
};
/**
 * Tree
 */
var Tree = /** @class */ (function (_super) {
    tslib_1.__extends(Tree, _super);
    function Tree(props) {
        var _this = _super.call(this, props) || this;
        var _a = getData(props), _b = _a.dataSource, dataSource = _b === void 0 ? [] : _b, k2n = _a.k2n, p2n = _a.p2n, keyList = _a.keyList;
        var _c = _this.props, focusable = _c.focusable, autoFocus = _c.autoFocus, focusedKey = _c.focusedKey;
        var willReceiveProps = false;
        var _d = getCheckedKeys(props, willReceiveProps, k2n, p2n), checkedKeys = _d.checkedKeys, _e = _d.indeterminateKeys, indeterminateKeys = _e === void 0 ? [] : _e;
        _this.state = {
            _k2n: k2n,
            _p2n: p2n,
            _keyList: keyList,
            dataSource: dataSource,
            willReceiveProps: willReceiveProps,
            expandedKeys: getExpandedKeys(props, willReceiveProps, k2n, p2n),
            selectedKeys: getSelectedKeys(props, willReceiveProps, k2n, p2n),
            checkedKeys: checkedKeys,
            indeterminateKeys: indeterminateKeys,
            focusedKey: 'focusedKey' in props
                ? focusedKey
                : focusable && autoFocus
                    ? _this.tabbableKey
                    : null,
        };
        if (focusable) {
            _this.tabbableKey = _this.getFirstAvaliablelChildKey('0');
        }
        if (focusable) {
            _this.tabbableKey = _this.getFirstAvaliablelChildKey('0');
        }
        bindCtx(_this, ['handleExpand', 'handleSelect', 'handleCheck', 'handleBlur', 'setListRef']);
        _this.normalListRef = (0, react_1.createRef)();
        _this.virtualListRef = (0, react_1.createRef)();
        return _this;
    }
    Tree.getDerivedStateFromProps = function (props, state) {
        var _a = getData(props), _b = _a.dataSource, dataSource = _b === void 0 ? [] : _b, k2n = _a.k2n, p2n = _a.p2n, keyList = _a.keyList;
        var st = {};
        if (!state.willReceiveProps) {
            return {
                willReceiveProps: true,
                _k2n: k2n,
                _p2n: p2n,
                _keyList: keyList,
            };
        }
        if ('expandedKeys' in props) {
            st.expandedKeys = getExpandedKeys(props, state.willReceiveProps, k2n, p2n);
        }
        if ('selectedKeys' in props) {
            st.selectedKeys = getSelectedKeys(props, state.willReceiveProps, k2n, undefined);
        }
        if ('checkedKeys' in props) {
            var checkedKeys = getCheckedKeys(props, state.willReceiveProps, k2n, p2n).checkedKeys;
            st.checkedKeys = checkedKeys;
        }
        st.indeterminateKeys = props.checkStrictly
            ? (props.checkedKeys &&
                props.checkedKeys.indeterminate) ||
                []
            : getIndeterminateKeys(st.checkedKeys || state.checkedKeys || [], props.checkStrictly, k2n, p2n);
        return tslib_1.__assign(tslib_1.__assign({}, st), { dataSource: dataSource, _k2n: k2n, _p2n: p2n });
    };
    Tree.prototype.scrollFilterNodeIntoView = function (arg) {
        var _a;
        var prefix = this.props.prefix;
        try {
            var treeNode = (0, react_dom_1.findDOMNode)(this.normalListRef.current);
            var itemNode = treeNode.querySelector(".".concat(prefix, "tree-node.").concat(prefix, "filtered"));
            if (!itemNode)
                return;
            itemNode.scrollIntoViewIfNeeded
                ? itemNode.scrollIntoViewIfNeeded(arg)
                : (_a = itemNode.scrollIntoView) === null || _a === void 0 ? void 0 : _a.call(itemNode, arg);
        }
        catch (ex) {
            // eslint-disable-next-line no-console
            console.warn(ex);
        }
    };
    Tree.prototype.setFocusKey = function () {
        var _a = this.state.selectedKeys, selectedKeys = _a === void 0 ? [] : _a;
        this.setState({
            focusedKey: selectedKeys.length > 0 ? selectedKeys[0] : this.getFirstAvaliablelChildKey('0'),
        });
    };
    Tree.prototype.getAvailableKey = function (pos, prev) {
        var _this = this;
        var ps = Object.keys(this.state._p2n).filter(function (p) { return _this.isAvailablePos(pos, p); });
        if (ps.length > 1) {
            var index = ps.indexOf(pos);
            var targetIndex = void 0;
            if (prev) {
                targetIndex = index === 0 ? ps.length - 1 : index - 1;
            }
            else {
                targetIndex = index === ps.length - 1 ? 0 : index + 1;
            }
            return this.state._p2n[ps[targetIndex]].key;
        }
        return null;
    };
    Tree.prototype.getFirstAvaliablelChildKey = function (parentPos) {
        var _this = this;
        var pos = Object.keys(this.state._p2n).find(function (p) {
            return _this.isAvailablePos("".concat(parentPos, "-0"), p);
        });
        return pos ? this.state._p2n[pos].key : null;
    };
    Tree.prototype.isAvailablePos = function (refPos, targetPos) {
        var disabled = this.state._p2n[targetPos].disabled;
        return this.isSibling(refPos, targetPos) && !disabled;
    };
    Tree.prototype.isSibling = function (currentPos, targetPos) {
        var currentNums = currentPos.split('-').slice(0, -1);
        var targetNums = targetPos.split('-').slice(0, -1);
        return (currentNums.length === targetNums.length &&
            currentNums.every(function (num, index) {
                return num === targetNums[index];
            }));
    };
    Tree.prototype.getParentKey = function (pos) {
        return this.state._p2n[pos.slice(0, pos.length - 2)].key;
    };
    Tree.prototype.processKey = function (keys, key, add) {
        var index = keys.indexOf(key);
        if (add && index === -1) {
            keys.push(key);
        }
        else if (!add && index > -1) {
            keys.splice(index, 1);
        }
        return keys;
    };
    /*eslint-disable max-statements*/
    Tree.prototype.handleItemKeyDown = function (key, item, e) {
        if ([
            util_1.KEYCODE.UP,
            util_1.KEYCODE.DOWN,
            util_1.KEYCODE.RIGHT,
            util_1.KEYCODE.LEFT,
            util_1.KEYCODE.ENTER,
            util_1.KEYCODE.ESC,
            util_1.KEYCODE.SPACE,
        ].indexOf(e.keyCode) > -1) {
            e.preventDefault();
            e.stopPropagation();
        }
        var focusedKey = this.state.focusedKey;
        var node = item;
        var pos = this.state._k2n[key].pos;
        var level = pos.split('-').length - 1;
        switch (e.keyCode) {
            case util_1.KEYCODE.UP: {
                var avaliableKey = this.getAvailableKey(pos, true);
                if (avaliableKey) {
                    focusedKey = avaliableKey;
                }
                break;
            }
            case util_1.KEYCODE.DOWN: {
                var avaliableKey = this.getAvailableKey(pos, false);
                if (avaliableKey) {
                    focusedKey = avaliableKey;
                }
                break;
            }
            case util_1.KEYCODE.RIGHT: {
                this.handleExpand(true, key, node);
                var avaliableKey = this.getFirstAvaliablelChildKey(pos);
                if (avaliableKey) {
                    focusedKey = avaliableKey;
                }
                break;
            }
            case util_1.KEYCODE.LEFT:
            case util_1.KEYCODE.ESC: {
                if (level === 1) {
                    var avaliableKey = this.getAvailableKey(pos, true);
                    if (avaliableKey) {
                        focusedKey = avaliableKey;
                    }
                }
                else if (level > 1) {
                    var parentKey = this.getParentKey(pos);
                    this.handleExpand(false, parentKey, node);
                    focusedKey = parentKey;
                }
                break;
            }
            case util_1.KEYCODE.ENTER:
            case util_1.KEYCODE.SPACE: {
                var checkable = 'checkable' in item.props ? item.props.checkable : this.props.checkable;
                var selectable = 'selectable' in item.props ? item.props.selectable : this.props.selectable;
                if (checkable) {
                    this.handleCheck(!item.props.checked, key, node);
                }
                else if (selectable) {
                    this.handleSelect(!item.props.selected, key, node, e);
                }
                break;
            }
            case util_1.KEYCODE.TAB:
                focusedKey = null;
                break;
            default:
                break;
        }
        if (focusedKey !== this.state.focusedKey) {
            if (!('focusedKey' in this.props)) {
                this.setState({
                    focusedKey: focusedKey,
                });
            }
        }
        this.props.onItemKeyDown(focusedKey, item, e);
        this.props.onItemFocus(focusedKey, e);
    };
    Tree.prototype.handleBlur = function (e) {
        this.setState({
            focusedKey: null,
        });
        this.props.onBlur && this.props.onBlur(e);
    };
    Tree.prototype.handleExpand = function (expand, key, node) {
        var _this = this;
        var _a = this.props, onExpand = _a.onExpand, loadData = _a.loadData;
        var expandedKeys = this.state.expandedKeys; // 由于setState 是异步操作，所以去掉 [...this.state.expandedKeys]
        this.processKey(expandedKeys, key, expand);
        var setExpandedState = function () {
            if (!('expandedKeys' in _this.props)) {
                _this.setState({ expandedKeys: expandedKeys });
            }
            onExpand(expandedKeys, { expanded: expand, node: node });
        };
        if (expand && loadData) {
            return loadData(node).then(setExpandedState);
        }
        else {
            setExpandedState();
        }
    };
    Tree.prototype.handleSelect = function (select, key, node, e) {
        var _a = this.props, multiple = _a.multiple, onSelect = _a.onSelect;
        var selectedKeys = tslib_1.__spreadArray([], tslib_1.__read(this.state.selectedKeys), false);
        if (multiple) {
            this.processKey(selectedKeys, key, select);
        }
        else {
            selectedKeys = select ? [key] : [];
        }
        if (!('selectedKeys' in this.props)) {
            this.setState({ selectedKeys: selectedKeys });
        }
        onSelect(selectedKeys, {
            // @ts-expect-error must be NodeInstance type, but it's maybe be DataNode type.
            selectedNodes: this.getNodes(selectedKeys),
            node: node,
            selected: select,
            event: e,
        });
    };
    // eslint-disable-next-line max-statements
    Tree.prototype.handleCheck = function (check, key, node) {
        var _this = this;
        var _a = this.props, checkStrictly = _a.checkStrictly, checkedStrategy = _a.checkedStrategy, onCheck = _a.onCheck;
        var _b = this.state, _k2n = _b._k2n, _p2n = _b._p2n;
        var checkedKeys = tslib_1.__spreadArray([], tslib_1.__read(this.state.checkedKeys), false);
        if (checkStrictly) {
            this.processKey(checkedKeys, key, check);
            var newCheckedKeys_1 = isPlainObject(this.props.checkedKeys)
                ? {
                    checked: checkedKeys,
                    indeterminate: this.state.indeterminateKeys,
                }
                : checkedKeys;
            // @ts-expect-error must be Key[], but it's maybe be object
            onCheck(newCheckedKeys_1, {
                checkedNodes: this.getNodes(checkedKeys),
                checkedNodesPositions: checkedKeys
                    .map(function (key) {
                    if (!_k2n[key])
                        return null;
                    var _a = _k2n[key], node = _a.node, pos = _a.pos;
                    return { node: node, pos: pos };
                })
                    .filter(function (v) { return !!v; }),
                node: node,
                indeterminateKeys: this.state.indeterminateKeys,
                checked: check,
                key: key,
            });
            return;
        }
        var pos = _k2n[key].pos;
        (0, util_2.forEachEnableNode)(_k2n[key], function (node) {
            if (node.checkable === false)
                return;
            _this.processKey(checkedKeys, node.key, check);
        });
        var ps = Object.keys(_p2n);
        var currentPos = pos;
        var nums = pos.split('-');
        for (var i = nums.length; i > 2; i--) {
            var parentCheck = true;
            var parentPos = nums.slice(0, i - 1).join('-');
            if (_p2n[parentPos].disabled ||
                _p2n[parentPos].checkboxDisabled ||
                _p2n[parentPos].checkable === false) {
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
                if ((0, util_2.isSiblingOrSelf)(currentPos, p) && !pnode.disabled && !pnode.checkboxDisabled) {
                    var k = pnode.key;
                    if (pnode.checkable === false) {
                        // eslint-disable-next-line max-depth
                        if (!pnode.children || pnode.children.length === 0)
                            continue;
                        // eslint-disable-next-line max-depth
                        for (var m = 0; m < pnode.children.length; m++) {
                            if (!pnode.children.every(function (child) { return (0, util_2.isNodeChecked)(child, checkedKeys); })) {
                                parentCheck = false;
                                break;
                            }
                        }
                    }
                    else if (checkedKeys.indexOf(k) === -1) {
                        parentCheck = false;
                    }
                    if (!parentCheck)
                        break;
                }
            }
            this.processKey(checkedKeys, parentKey, parentCheck);
            currentPos = parentPos;
        }
        var indeterminateKeys = getIndeterminateKeys(checkedKeys, checkStrictly, _k2n, _p2n);
        if (!('checkedKeys' in this.props)) {
            this.setState({
                checkedKeys: checkedKeys,
                indeterminateKeys: indeterminateKeys,
            });
        }
        var newCheckedKeys;
        switch (checkedStrategy) {
            case 'parent':
                newCheckedKeys = (0, util_2.filterChildKey)(checkedKeys, _k2n, _p2n);
                break;
            case 'child':
                newCheckedKeys = (0, util_2.filterParentKey)(checkedKeys, _k2n, _p2n);
                break;
            default:
                newCheckedKeys = checkedKeys;
                break;
        }
        onCheck(newCheckedKeys, {
            // @ts-expect-error must be NodeInstance type, but it's maybe be DataNode type.
            checkedNodes: this.getNodes(newCheckedKeys),
            // @ts-expect-error must be NodeInstance type, but it's maybe be DataNode type.
            checkedNodesPositions: newCheckedKeys
                .map(function (key) {
                if (!_k2n[key])
                    return null;
                var _a = _k2n[key], node = _a.node, pos = _a.pos;
                return { node: node, pos: pos };
            })
                .filter(function (v) { return !!v; }),
            node: node,
            indeterminateKeys: indeterminateKeys,
            checked: check,
            key: key,
        });
    };
    Tree.prototype.getNodeProps = function (key) {
        var prefix = this.props.prefix;
        var _a = this.state, expandedKeys = _a.expandedKeys, selectedKeys = _a.selectedKeys, checkedKeys = _a.checkedKeys, dragOverNodeKey = _a.dragOverNodeKey, _k2n = _a._k2n, indeterminateKeys = _a.indeterminateKeys;
        var _b = _k2n[key], pos = _b.pos, isLeaf = _b.isLeaf, level = _b.level;
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
            dragOverGapBottom: dragOverNodeKey === key && this.dropPosition === 1,
        };
    };
    Tree.prototype.getNodes = function (keys) {
        var _this = this;
        return keys.map(function (key) { return _this.state._k2n[key] && _this.state._k2n[key].node; }).filter(function (v) { return !!v; });
    };
    Tree.prototype.handleDragStart = function (e, node) {
        var _this = this;
        var dragNodeKey = node.props.eventKey;
        this.dragNode = node;
        this.dragNodesKeys = Object.keys(this.state._k2n).filter(function (k) {
            return (0, util_2.isDescendantOrSelf)(_this.state._k2n[dragNodeKey].pos, _this.state._k2n[k].pos);
        });
        var expandedKeys = this.processKey(tslib_1.__spreadArray([], tslib_1.__read(this.state.expandedKeys), false), dragNodeKey, false);
        this.setState({ expandedKeys: expandedKeys });
        this.props.onDragStart({
            event: e,
            node: node,
            expandedKeys: expandedKeys,
        });
    };
    Tree.prototype.handleDragEnter = function (e, node) {
        var dragOverNodeKey = node.props.eventKey;
        this.dropPosition = this.getDropPosition(e, node);
        if (this.dragNode &&
            this.dragNode.props.eventKey === dragOverNodeKey &&
            this.dropPosition === 0) {
            this.setState({
                dragOverNodeKey: null,
            });
            return;
        }
        var expandedKeys = this.processKey(tslib_1.__spreadArray([], tslib_1.__read(this.state.expandedKeys), false), dragOverNodeKey, true);
        this.setState({
            dragOverNodeKey: dragOverNodeKey,
            expandedKeys: expandedKeys,
        });
        this.props.onDragEnter({
            event: e,
            node: node,
            expandedKeys: expandedKeys,
        });
    };
    Tree.prototype.getDropPosition = function (e, node) {
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
    Tree.prototype.handleDragOver = function (e, node) {
        var dragOverNodeKey = node.props.eventKey;
        if (this.state.dragOverNodeKey !== dragOverNodeKey) {
            this.setState({
                dragOverNodeKey: dragOverNodeKey,
            });
        }
        this.props.onDragOver({ event: e, node: node });
    };
    Tree.prototype.handleDragLeave = function (e, node) {
        var eventKey = node.props.eventKey;
        var _keyList = this.state._keyList;
        var firstKey = _keyList[0];
        var lastKey = _keyList[_keyList.length - 1];
        // 只针对树的边界节点（第一个和最后一个）做处理
        if (eventKey === firstKey || eventKey === lastKey) {
            this.setState({
                dragOverNodeKey: null,
            });
        }
        this.props.onDragLeave({ event: e, node: node });
    };
    Tree.prototype.handleDragEnd = function (e, node) {
        this.setState({
            dragOverNodeKey: null,
        });
        this.props.onDragEnd({ event: e, node: node });
        this.dragNode = null;
    };
    Tree.prototype.handleDrop = function (e, node) {
        if (this.dragNode &&
            (0, util_2.isDescendantOrSelf)(this.state._k2n[this.dragNode.props.eventKey].pos, this.state._k2n[node.props.eventKey].pos)) {
            return;
        }
        this.setState({
            dragOverNodeKey: null,
        });
        var params = this.generateDropParams(node);
        this.props.onDrop(tslib_1.__assign({ event: e }, params));
        this.dragNode = null;
    };
    Tree.prototype.canDrop = function (node) {
        var params = this.generateDropParams(node);
        return this.props.canDrop(params);
    };
    Tree.prototype.generateDropParams = function (node) {
        return {
            dragNode: this.dragNode,
            dragNodesKeys: tslib_1.__spreadArray([], tslib_1.__read(this.dragNodesKeys), false),
            node: node,
            dropPosition: this.dropPosition,
        };
    };
    Tree.prototype.filterTreeNode = function (node) {
        return this.props.filterTreeNode.call(this, node);
    };
    Tree.prototype.shouldNodeShow = function (nodeData) {
        var _a = this.state, expandedKeys = _a.expandedKeys, _p2n = _a._p2n;
        return (!(nodeData.style && nodeData.style.display === 'none') &&
            (0, util_2.getAllDescendantKeys)(nodeData, _p2n).every(function (k) { return expandedKeys.includes(k); }));
    };
    Tree.prototype.renderTreeNode = function (props, childNodes) {
        var _a = this.props, rtl = _a.rtl, labelRender = _a.labelRender;
        var key = props.key;
        var nodeProps = tslib_1.__assign(tslib_1.__assign({ _key: key }, props), this.getNodeProps(key));
        if (labelRender) {
            nodeProps.label = labelRender(pickProps(exports.treeNodeProps, props));
        }
        return (
        // @ts-expect-error DataNode is conflict with TreeNodeProps, should fix this.
        react_1.default.createElement(tree_node_1.default, tslib_1.__assign({ rtl: rtl, key: key }, nodeProps), childNodes));
    };
    Tree.prototype.renderNodeList = function (dataSource) {
        var _this = this;
        var nodeList = [];
        var _k2n = this.state._k2n;
        var drill = function (list) {
            list.forEach(function (item) {
                // 为了兼容之前的实现 保留非法节点
                if (item.illegalFlag) {
                    nodeList.push(item);
                    return;
                }
                var children = item.children, nodeProps = tslib_1.__rest(item, ["children"]);
                if (!_this.shouldNodeShow(item)) {
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
            // @ts-expect-error must pass second param
            return (_k2n[nodeProps.key].node = _this.renderTreeNode(nodeProps));
        });
    };
    Tree.prototype.renderWithCustomChildNodes = function (dataSource) {
        var _this = this;
        var renderChildNodes = this.props.renderChildNodes;
        var _k2n = this.state._k2n;
        var drill = function (list) {
            return list.map(function (_a, index) {
                var children = _a.children, nodeProps = tslib_1.__rest(_a, ["children"]);
                var childNodes;
                if (children && children.length) {
                    childNodes = renderChildNodes(drill(children));
                }
                // aria props
                nodeProps.size = list.length;
                nodeProps.posinset = index + 1;
                return (_k2n[nodeProps.key].node = _this.renderTreeNode(nodeProps, childNodes));
            });
        };
        return drill(dataSource);
    };
    Tree.prototype.renderByDataSource = function (dataSource) {
        var _this = this;
        var drill = function (data, prefix) {
            if (prefix === void 0) { prefix = '0'; }
            return data.map(function (item, index) {
                // 为了兼容之前的实现 保留非法节点
                if (item.illegalFlag) {
                    return item.node;
                }
                var pos = "".concat(prefix, "-").concat(index);
                var _a = item.key, key = _a === void 0 ? pos : _a, children = item.children, others = tslib_1.__rest(item, ["key", "children"]);
                var props = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({ size: data.length }, others), _this.getNodeProps("".concat(key))), { _key: key, key: key });
                if (children && children.length) {
                    props.children = drill(children, pos);
                }
                var node = _this.renderTreeNode(props, props.children);
                // eslint-disable-next-line
                _this.state._k2n[key].node = node;
                return node;
            });
        };
        return drill(dataSource);
    };
    Tree.prototype.renderByChildren = function () {
        var _this = this;
        var rtl = this.props.rtl;
        var _k2n = this.state._k2n;
        var loop = function (children, prefix) {
            if (prefix === void 0) { prefix = '0'; }
            return react_1.Children.map(children, function (child, index) {
                if (!react_1.default.isValidElement(child)) {
                    return;
                }
                var pos = "".concat(prefix, "-").concat(index);
                var key = child.key || pos;
                var props = _this.getNodeProps("".concat(key));
                if (child.props.children) {
                    props.children = loop(child.props.children, pos);
                }
                props._key = key;
                props.rtl = rtl;
                props.size = react_1.Children.count(children);
                var node = (0, react_1.cloneElement)(child, props);
                _k2n[key].node = node;
                return node;
            });
        };
        return loop(this.props.children);
    };
    Tree.prototype.setListRef = function (ref) {
        var _this = this;
        return function (c) {
            if (typeof ref === 'function') {
                ref(c);
            }
            _this.normalListRef.current = c;
        };
    };
    Tree.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.props, prefix = _b.prefix, rtl = _b.rtl, className = _b.className, showLine = _b.showLine, isNodeBlock = _b.isNodeBlock, isLabelBlock = _b.isLabelBlock, multiple = _b.multiple, useVirtual = _b.useVirtual, renderChildNodes = _b.renderChildNodes, virtualListProps = _b.virtualListProps;
        var dataSource = this.state.dataSource;
        var _c = pickOthers(Object.keys(Tree.propTypes), this.props), style = _c.style, others = tslib_1.__rest(_c, ["style"]);
        if (rtl) {
            others.dir = 'rtl';
        }
        var newClassName = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "tree")] = true,
            _a["".concat(prefix, "label-block")] = isLabelBlock,
            _a["".concat(prefix, "node-block")] = isNodeBlock,
            _a["".concat(prefix, "node-indent")] = !isNodeBlock,
            _a["".concat(prefix, "show-line")] = !isNodeBlock && showLine,
            _a[className] = !!className,
            _a));
        var treeRender = function (items, ref) {
            return (react_1.default.createElement("ul", tslib_1.__assign({ role: "tree", ref: _this.setListRef(ref), "aria-multiselectable": multiple, onBlur: _this.handleBlur, className: newClassName, 
                // @ts-expect-error should not be null
                style: useVirtual ? null : style }, others), items));
        };
        var virtualTreeRender = function (dataSource) {
            return (react_1.default.createElement("div", { className: "".concat(prefix, "virtual-tree-container"), style: style },
                react_1.default.createElement(virtual_list_1.default, tslib_1.__assign({ ref: _this.virtualListRef, itemsRenderer: function (items, ref) { return treeRender(items, ref); } }, virtualListProps), _this.renderNodeList(dataSource))));
        };
        return useVirtual
            ? virtualTreeRender(dataSource)
            : renderChildNodes
                ? treeRender(this.renderWithCustomChildNodes(dataSource))
                : !this.props.dataSource
                    ? treeRender(this.renderByChildren())
                    : treeRender(this.renderByDataSource(dataSource));
    };
    Tree.propTypes = {
        prefix: prop_types_1.default.string,
        rtl: prop_types_1.default.bool,
        pure: prop_types_1.default.bool,
        className: prop_types_1.default.string,
        children: prop_types_1.default.node,
        dataSource: prop_types_1.default.array,
        showLine: prop_types_1.default.bool,
        selectable: prop_types_1.default.bool,
        selectedKeys: prop_types_1.default.arrayOf(prop_types_1.default.string),
        defaultSelectedKeys: prop_types_1.default.arrayOf(prop_types_1.default.string),
        onSelect: prop_types_1.default.func,
        multiple: prop_types_1.default.bool,
        checkable: prop_types_1.default.bool,
        checkedKeys: prop_types_1.default.oneOfType([prop_types_1.default.arrayOf(prop_types_1.default.string), prop_types_1.default.object]),
        defaultCheckedKeys: prop_types_1.default.arrayOf(prop_types_1.default.string),
        checkStrictly: prop_types_1.default.bool,
        checkedStrategy: prop_types_1.default.oneOf(['all', 'parent', 'child']),
        onCheck: prop_types_1.default.func,
        expandedKeys: prop_types_1.default.arrayOf(prop_types_1.default.string),
        defaultExpandedKeys: prop_types_1.default.arrayOf(prop_types_1.default.string),
        defaultExpandAll: prop_types_1.default.bool,
        autoExpandParent: prop_types_1.default.bool,
        onExpand: prop_types_1.default.func,
        editable: prop_types_1.default.bool,
        onEditFinish: prop_types_1.default.func,
        draggable: prop_types_1.default.bool,
        onDragStart: prop_types_1.default.func,
        onDragEnter: prop_types_1.default.func,
        onDragOver: prop_types_1.default.func,
        onDragLeave: prop_types_1.default.func,
        onDragEnd: prop_types_1.default.func,
        onDrop: prop_types_1.default.func,
        canDrop: prop_types_1.default.func,
        loadData: prop_types_1.default.func,
        filterTreeNode: prop_types_1.default.func,
        onRightClick: prop_types_1.default.func,
        isLabelBlock: prop_types_1.default.bool,
        isNodeBlock: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.object]),
        animation: prop_types_1.default.bool,
        focusedKey: prop_types_1.default.string,
        renderChildNodes: prop_types_1.default.func,
        focusable: prop_types_1.default.bool,
        autoFocus: prop_types_1.default.bool,
        onItemFocus: prop_types_1.default.func,
        onBlur: prop_types_1.default.func,
        onItemKeyDown: prop_types_1.default.func,
        labelRender: prop_types_1.default.func,
        useVirtual: prop_types_1.default.bool,
        immutable: prop_types_1.default.bool,
        virtualListProps: prop_types_1.default.object,
        clickToCheck: prop_types_1.default.bool,
    };
    Tree.defaultProps = {
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
        canDrop: function () { return true; },
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
        immutable: false,
        virtualListProps: {},
        clickToCheck: false,
    };
    return Tree;
}(react_1.Component));
exports.Tree = Tree;
exports.default = (0, react_lifecycles_compat_1.polyfill)(Tree);
