import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import cx from 'classnames';
import Icon from '../../icon';
import Checkbox from '../../checkbox';
import Animate from '../../animate';
import { func, obj, KEYCODE } from '../../util';
import TreeNodeInput from './tree-node-input';
import TreeNodeIndent from './tree-node-indent';
var Expand = Animate.Expand;
var bindCtx = func.bindCtx;
var isPromise = obj.isPromise, pickOthers = obj.pickOthers, pickAttrsWith = obj.pickAttrsWith;
var isRoot = function (pos) { return /^0-(\d)+$/.test(pos); };
/**
 * Tree.Node
 */
var TreeNode = /** @class */ (function (_super) {
    __extends(TreeNode, _super);
    function TreeNode(props) {
        var _this = _super.call(this, props) || this;
        _this.saveRef = function (ref) {
            _this.nodeEl = ref;
        };
        _this.saveLabelWrapperRef = function (ref) {
            _this.labelWrapperEl = ref;
        };
        _this.state = {
            editing: false,
            loading: false,
            label: props.label,
        };
        bindCtx(_this, [
            'handleExpand',
            'handleSelect',
            'handleCheck',
            'handleEditStart',
            'handleEditFinish',
            'handleRightClick',
            'handleDragStart',
            'handleDragEnter',
            'handleDragOver',
            'handleDragLeave',
            'handleDragEnd',
            'handleDrop',
            'handleInputKeyDown',
            'handleKeyDown',
        ]);
        return _this;
    }
    TreeNode.getDerivedStateFromProps = function (props) {
        if ('label' in props) {
            return {
                label: props.label,
            };
        }
        return null;
    };
    TreeNode.prototype.componentDidMount = function () {
        this.itemLabelWrapperNode = findDOMNode(this.labelWrapperEl);
        this.setFocus();
    };
    TreeNode.prototype.componentDidUpdate = function () {
        this.setFocus();
    };
    TreeNode.prototype.focusable = function () {
        var _a = this.props, root = _a.root, disabled = _a.disabled;
        var focusable = root.props.focusable;
        return focusable && !disabled;
    };
    TreeNode.prototype.getFocused = function () {
        var _a = this.props, _key = _a._key, root = _a.root;
        var focusedKey = root.state.focusedKey;
        return focusedKey === _key;
    };
    TreeNode.prototype.setFocus = function () {
        var focused = this.getFocused();
        if (focused && this.focusable()) {
            this.itemLabelWrapperNode.focus({ preventScroll: true });
        }
    };
    TreeNode.prototype.handleExpand = function (e) {
        var _this = this;
        var _a = this.props, root = _a.root, expanded = _a.expanded, eventKey = _a.eventKey;
        if (root.props.isNodeBlock) {
            e.stopPropagation();
        }
        var loading = this.state.loading;
        if (loading) {
            return;
        }
        var returnValue = root.handleExpand(!expanded, eventKey, this);
        if (isPromise(returnValue)) {
            this.setLoading(true);
            return returnValue.then(function () {
                _this.setLoading(false);
            }, function () {
                _this.setLoading(false);
            });
        }
    };
    TreeNode.prototype.setLoading = function (loading) {
        this.setState({ loading: loading });
    };
    TreeNode.prototype.handleSelect = function (e) {
        e.preventDefault();
        var _a = this.props, root = _a.root, selected = _a.selected, eventKey = _a.eventKey;
        root.handleSelect(!selected, eventKey, this, e);
        var checkable = typeof this.props.checkable !== 'undefined'
            ? this.props.checkable
            : root.props.checkable;
        var clickToCheck = typeof this.props.clickToCheck !== 'undefined'
            ? this.props.clickToCheck
            : root.props.clickToCheck;
        clickToCheck && checkable && this.handleCheck();
    };
    TreeNode.prototype.handleCheck = function () {
        var _a = this.props, root = _a.root, checked = _a.checked, eventKey = _a.eventKey;
        root.handleCheck(!checked, eventKey, this);
    };
    TreeNode.prototype.handleEditStart = function (e) {
        e.preventDefault();
        this.setState({
            editing: true,
        });
    };
    TreeNode.prototype.handleEditFinish = function (e) {
        var target = e.target;
        var label = target.value;
        this.setState({
            editing: false,
        });
        var _a = this.props, root = _a.root, eventKey = _a.eventKey;
        root.props.onEditFinish(eventKey, label, this);
    };
    TreeNode.prototype.handleRightClick = function (e) {
        this.props.root.props.onRightClick({
            event: e,
            node: this,
        });
    };
    TreeNode.prototype.handleDragStart = function (e) {
        e.stopPropagation();
        this.props.root.handleDragStart(e, this);
    };
    TreeNode.prototype.handleDragEnter = function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.root.handleDragEnter(e, this);
    };
    TreeNode.prototype.handleDragOver = function (e) {
        if (this.props.root.canDrop(this)) {
            e.preventDefault();
            this.props.root.handleDragOver(e, this);
        }
        e.stopPropagation();
    };
    TreeNode.prototype.handleDragLeave = function (e) {
        e.stopPropagation();
        this.props.root.handleDragLeave(e, this);
    };
    TreeNode.prototype.handleDragEnd = function (e) {
        e.stopPropagation();
        this.props.root.handleDragEnd(e, this);
    };
    TreeNode.prototype.handleDrop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.root.handleDrop(e, this);
    };
    TreeNode.prototype.handleInputKeyDown = function (e) {
        if (e.keyCode === KEYCODE.ENTER) {
            this.handleEditFinish(e);
        }
        e.stopPropagation();
    };
    TreeNode.prototype.handleKeyDown = function (e) {
        var _a = this.props, _key = _a._key, root = _a.root, disabled = _a.disabled;
        if (disabled) {
            return;
        }
        if (this.focusable()) {
            root.handleItemKeyDown(_key, this, e);
        }
        this.props.onKeyDown && this.props.onKeyDown(e);
    };
    TreeNode.prototype.addCallbacks = function (props) {
        var _a = this.props, disabled = _a.disabled, root = _a.root;
        var checkable = typeof this.props.checkable !== 'undefined'
            ? this.props.checkable
            : root.props.checkable;
        var clickToCheck = typeof this.props.clickToCheck !== 'undefined'
            ? this.props.clickToCheck
            : root.props.clickToCheck;
        if (!disabled) {
            var selectable = typeof this.props.selectable !== 'undefined'
                ? this.props.selectable
                : root.props.selectable;
            if (selectable) {
                props.onClick = this.handleSelect;
            }
            else if (clickToCheck && checkable) {
                props.onClick = this.handleCheck;
            }
            var editable = typeof this.props.editable !== 'undefined'
                ? this.props.editable
                : root.props.editable;
            if (editable) {
                props.onDoubleClick = this.handleEditStart;
            }
            var draggable = typeof this.props.draggable !== 'undefined'
                ? this.props.draggable
                : root.props.draggable;
            if (draggable) {
                props.draggable = true;
                props.onDragStart = this.handleDragStart;
                props.onDragEnd = this.handleDragEnd;
            }
            props.onContextMenu = this.handleRightClick;
        }
    };
    TreeNode.prototype.renderSwitcher = function (showLine) {
        var _a, _b;
        var _c = this.props, prefix = _c.prefix, disabled = _c.disabled, expanded = _c.expanded, root = _c.root;
        var loadData = root.props.loadData;
        var loading = this.state.loading;
        var lineState = showLine ? 'line' : 'noline';
        var className = cx((_a = {},
            _a["".concat(prefix, "tree-switcher")] = true,
            _a["".concat(prefix).concat(lineState)] = !loading,
            _a["".concat(prefix, "close")] = !loading && !showLine && !expanded,
            _a["".concat(prefix, "disabled")] = disabled,
            _a["".concat(prefix, "loading")] = loading,
            _a["".concat(prefix, "loading-").concat(lineState)] = loading,
            _a));
        var iconType = loadData && loading
            ? 'loading'
            : showLine
                ? expanded
                    ? 'minus'
                    : 'add'
                : 'arrow-down';
        var iconCls = cx((_b = {},
            _b["".concat(prefix, "tree-switcher-icon")] = true,
            _b["".concat(prefix, "tree-fold-icon")] = iconType === 'arrow-down',
            _b["".concat(prefix, "tree-switcher-fold-icon")] = showLine && !expanded,
            _b["".concat(prefix, "tree-switcher-unfold-icon")] = showLine && expanded,
            _b));
        return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        React.createElement("span", { className: className, onClick: disabled ? undefined : this.handleExpand },
            this.renderRightAngle(showLine),
            React.createElement(Icon, { className: iconCls, type: iconType })));
    };
    TreeNode.prototype.renderNoopSwitcher = function (showLine) {
        var _a;
        var _b = this.props, prefix = _b.prefix, pos = _b.pos;
        var lineState = showLine ? 'line' : 'noline';
        var className = cx((_a = {},
            _a["".concat(prefix, "tree-switcher")] = true,
            _a["".concat(prefix, "noop-").concat(lineState)] = true,
            _a["".concat(prefix, "noop-line-noroot")] = showLine && !isRoot(pos),
            _a));
        return React.createElement("span", { className: className }, this.renderRightAngle(showLine));
    };
    TreeNode.prototype.renderRightAngle = function (showLine) {
        var _a = this.props, prefix = _a.prefix, pos = _a.pos;
        return showLine && !isRoot(pos) ? React.createElement("span", { className: "".concat(prefix, "tree-right-angle") }) : null;
    };
    TreeNode.prototype.renderCheckbox = function () {
        var _a = this.props, checked = _a.checked, indeterminate = _a.indeterminate, disabled = _a.disabled, checkboxDisabled = _a.checkboxDisabled;
        var label = this.state.label;
        return (
        // @ts-expect-error aria-label should be undefined instead of null
        React.createElement(Checkbox, { "aria-label": typeof label === 'string' ? label : null, checked: checked, tabIndex: -1, indeterminate: indeterminate, disabled: disabled || checkboxDisabled, 
            // don't use onChange, fix https://github.com/alibaba-fusion/next/issues/3850
            onClick: this.handleCheck }));
    };
    TreeNode.prototype.renderLabel = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, root = _b.root, disabled = _b.disabled, icon = _b.icon, _key = _b._key;
        var isNodeBlock = root.props.isNodeBlock;
        var label = this.state.label;
        var selectable = typeof this.props.selectable !== 'undefined'
            ? this.props.selectable
            : root.props.selectable;
        var labelProps = {
            className: cx((_a = {},
                _a["".concat(prefix, "tree-node-label")] = true,
                _a["".concat(prefix, "tree-node-label-selectable")] = selectable && !disabled,
                _a)),
        };
        var labelWrapperProps = {
            onKeyDown: this.handleKeyDown,
            // @ts-expect-error should covert to number
            tabIndex: (root.tabbableKey === _key ? '0' : '-1'),
        };
        if (!isNodeBlock) {
            this.addCallbacks(labelProps);
        }
        var iconEl = typeof icon === 'string' ? React.createElement(Icon, { type: icon }) : icon;
        return (React.createElement("div", __assign({ className: "".concat(prefix, "tree-node-label-wrapper"), ref: this.saveLabelWrapperRef }, labelWrapperProps),
            React.createElement("div", __assign({}, labelProps),
                iconEl,
                label)));
    };
    TreeNode.prototype.renderInput = function () {
        var prefix = this.props.prefix;
        var label = this.state.label;
        return (React.createElement("div", { className: "".concat(prefix, "tree-node-label-wrapper"), ref: this.saveLabelWrapperRef },
            React.createElement(TreeNodeInput, { prefix: prefix, defaultValue: label, onBlur: this.handleEditFinish, onKeyDown: this.handleInputKeyDown })));
    };
    TreeNode.prototype.renderChildTree = function () {
        var _a = this.props, prefix = _a.prefix, children = _a.children;
        return (children &&
            this.addAnimationIfNeeded(React.createElement("ul", { role: "group", className: "".concat(prefix, "tree-child-tree") }, children)));
    };
    TreeNode.prototype.addAnimationIfNeeded = function (node) {
        var root = this.props.root;
        return root && root.props.animation ? (React.createElement(Expand, { animationAppear: false }, node)) : (node);
    };
    TreeNode.prototype.render = function () {
        var _a, _b, _c;
        var _d = this.props, prefix = _d.prefix, rtl = _d.rtl, className = _d.className, isLeaf = _d.isLeaf, level = _d.level, root = _d.root, selected = _d.selected, checked = _d.checked, disabled = _d.disabled, dragOver = _d.dragOver, dragOverGapTop = _d.dragOverGapTop, dragOverGapBottom = _d.dragOverGapBottom, _key = _d._key, size = _d.size, posinset = _d.posinset, children = _d.children, expanded = _d.expanded, isLastChild = _d.isLastChild;
        var _e = root.props, isNodeBlock = _e.isNodeBlock, showLine = _e.showLine, rootDraggable = _e.draggable, filterTreeNode = _e.filterTreeNode;
        var label = this.state.label;
        var ARIA_PREFIX = 'aria-';
        var ariaProps = pickAttrsWith(this.props, ARIA_PREFIX);
        var others = pickOthers(Object.keys(TreeNode.propTypes), this.props);
        var hasRenderChildNodes = root && root.props.renderChildNodes;
        var shouldShouldLine = !isNodeBlock && showLine && !hasRenderChildNodes;
        var useVirtual = root && root.props.useVirtual;
        // remove aria keys
        Object.keys(others).forEach(function (key) {
            if (key.match(ARIA_PREFIX)) {
                delete others[key];
            }
        });
        if (rootDraggable) {
            others.onDragEnter = this.handleDragEnter;
            others.onDragOver = this.handleDragOver;
            others.onDragLeave = this.handleDragLeave;
            others.onDrop = this.handleDrop;
        }
        var newClassName = cx((_a = {},
            _a["".concat(prefix, "tree-node")] = true,
            _a["".concat(prefix, "filtered")] = !!filterTreeNode && !!root.filterTreeNode(this),
            _a[className] = !!className,
            _a));
        var checkable = typeof this.props.checkable !== 'undefined'
            ? this.props.checkable
            : root.props.checkable;
        var innerClassName = cx((_b = {},
            _b["".concat(prefix, "tree-node-inner")] = true,
            _b["".concat(prefix, "selected")] = selected,
            _b["".concat(prefix, "disabled")] = disabled,
            _b["".concat(prefix, "drag-over")] = dragOver,
            _b["".concat(prefix, "drag-over-gap-top")] = dragOverGapTop,
            _b["".concat(prefix, "drag-over-gap-bottom")] = dragOverGapBottom,
            _b));
        var defaultPaddingLeft = typeof isNodeBlock === 'object'
            ? // @ts-expect-error should convert 0 to '0'
                parseInt(isNodeBlock.defaultPaddingLeft || 0)
            : 0;
        var paddingLeftProp = rtl ? 'paddingRight' : 'paddingLeft';
        var indent = 
        // @ts-expect-error should convert 24 to '24'
        typeof isNodeBlock === 'object' ? parseInt(isNodeBlock.indent || 24) : 24;
        var innerStyle = isNodeBlock
            ? (_c = {},
                _c[paddingLeftProp] = "".concat((useVirtual ? 0 : indent * (level - 1)) + defaultPaddingLeft, "px"),
                _c) : null;
        var innerProps = __assign({ className: innerClassName, style: innerStyle, onKeyDown: this.handleKeyDown }, ariaProps);
        if (isNodeBlock) {
            this.addCallbacks(innerProps);
        }
        var editing = this.state.editing;
        // @ts-expect-error should convert to number type
        innerProps.tabIndex = root.tabbableKey === _key ? '0' : '-1';
        if (rtl) {
            others.dir = 'rtl';
        }
        return this.addAnimationIfNeeded(React.createElement("li", __assign({ role: "presentation", className: newClassName }, others),
            React.createElement("div", __assign({ ref: this.saveRef, role: "treeitem", "aria-selected": selected, "aria-disabled": disabled, "aria-checked": checked, "aria-expanded": !isLeaf, "aria-label": typeof label === 'string' ? label : null, "aria-level": level, "aria-posinset": posinset, "aria-setsize": size }, innerProps),
                useVirtual && !hasRenderChildNodes && (React.createElement(TreeNodeIndent, { prefix: prefix, level: level, isLastChild: isLastChild, showLine: shouldShouldLine })),
                isLeaf
                    ? this.renderNoopSwitcher(shouldShouldLine)
                    : this.renderSwitcher(shouldShouldLine),
                checkable ? this.renderCheckbox() : null,
                editing ? this.renderInput() : this.renderLabel()),
            expanded && (hasRenderChildNodes ? children : this.renderChildTree())));
    };
    TreeNode.propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        _key: PropTypes.string,
        className: PropTypes.string,
        children: PropTypes.node,
        label: PropTypes.node,
        /**
         * 单独设置是否支持选中，覆盖 Tree 的 selectable
         */
        selectable: PropTypes.bool,
        /**
         * 单独设置是否出现复选框，覆盖 Tree 的 checkable
         */
        checkable: PropTypes.bool,
        /**
         * 单独设置是否支持编辑，覆盖 Tree 的 editable
         */
        editable: PropTypes.bool,
        /**
         * 单独设置是否支持拖拽，覆盖 Tree 的 draggable
         */
        draggable: PropTypes.bool,
        /**
         * 是否禁止节点响应
         */
        disabled: PropTypes.bool,
        /**
         * 是否禁止勾选节点复选框
         */
        checkboxDisabled: PropTypes.bool,
        /**
         * 是否是叶子节点，设置loadData时生效
         */
        isLeaf: PropTypes.bool,
        root: PropTypes.object,
        eventKey: PropTypes.string,
        pos: PropTypes.string,
        expanded: PropTypes.bool,
        selected: PropTypes.bool,
        checked: PropTypes.bool,
        indeterminate: PropTypes.bool,
        dragOver: PropTypes.bool,
        dragOverGapTop: PropTypes.bool,
        dragOverGapBottom: PropTypes.bool,
        parentNode: PropTypes.object,
        onKeyDown: PropTypes.func,
        size: PropTypes.number,
        posinset: PropTypes.number,
        // 是否是最后一个子节点，数组类型，包含对祖先节点的判断
        isLastChild: PropTypes.arrayOf(PropTypes.bool),
        /**
         * 自定义图标，可以使用 Icon 的 type，也可以使用组件 `<Icon type="icon type" />`
         * @version 1.21
         */
        icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    };
    TreeNode.defaultProps = {
        prefix: 'next-',
        label: '---',
        rtl: false,
        disabled: false,
        checkboxDisabled: false,
        size: 1,
        posinset: 1,
    };
    return TreeNode;
}(Component));
export { TreeNode };
export default polyfill(TreeNode);
