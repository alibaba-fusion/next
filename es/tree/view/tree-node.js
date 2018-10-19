import _extends from 'babel-runtime/helpers/extends';
import _typeof from 'babel-runtime/helpers/typeof';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../../icon';
import Checkbox from '../../checkbox';
import Animate from '../../animate';
import { func, obj, KEYCODE } from '../../util';
import TreeNodeInput from './tree-node-input';

var Expand = Animate.Expand;
var bindCtx = func.bindCtx;
var isPromise = obj.isPromise,
    pickOthers = obj.pickOthers;

var isRoot = function isRoot(pos) {
    return (/^0-(\d)+$/.test(pos)
    );
};

/**
 * Tree.Node
 */
var TreeNode = (_temp = _class = function (_Component) {
    _inherits(TreeNode, _Component);

    function TreeNode(props) {
        _classCallCheck(this, TreeNode);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            editing: false,
            loading: false,
            label: props.label
        };

        bindCtx(_this, ['handleExpand', 'handleSelect', 'handleCheck', 'handleEditStart', 'handleEditFinish', 'handleRightClick', 'handleDragStart', 'handleDragEnter', 'handleDragOver', 'handleDragLeave', 'handleDragEnd', 'handleDrop', 'handleInputKeyDown']);
        return _this;
    }

    TreeNode.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('label' in nextProps) {
            this.setState({
                label: nextProps.label
            });
        }
    };

    TreeNode.prototype.getParentNode = function getParentNode() {
        return this.props.root.getParentNode(this.props.pos);
    };

    TreeNode.prototype.handleExpand = function handleExpand(e) {
        var _this2 = this;

        var _props = this.props,
            root = _props.root,
            expanded = _props.expanded,
            eventKey = _props.eventKey;


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
                _this2.setLoading(false);
            }, function () {
                _this2.setLoading(false);
            });
        }
    };

    TreeNode.prototype.setLoading = function setLoading(loading) {
        this.setState({ loading: loading });
    };

    TreeNode.prototype.handleSelect = function handleSelect(e) {
        e.preventDefault();

        var _props2 = this.props,
            root = _props2.root,
            selected = _props2.selected,
            eventKey = _props2.eventKey;

        root.handleSelect(!selected, eventKey, this);
    };

    TreeNode.prototype.handleCheck = function handleCheck() {
        var _props3 = this.props,
            root = _props3.root,
            checked = _props3.checked,
            eventKey = _props3.eventKey;

        root.handleCheck(!checked, eventKey, this);
    };

    TreeNode.prototype.handleEditStart = function handleEditStart(e) {
        e.preventDefault();

        this.setState({
            editing: true
        });
    };

    TreeNode.prototype.handleEditFinish = function handleEditFinish(e) {
        var label = e.target.value;

        this.setState({
            editing: false,
            label: label
        });

        var _props4 = this.props,
            root = _props4.root,
            eventKey = _props4.eventKey;

        root.props.onEditFinish(eventKey, label, this);
    };

    TreeNode.prototype.handleRightClick = function handleRightClick(e) {
        this.props.root.props.onRightClick({
            event: e,
            node: this
        });
    };

    TreeNode.prototype.handleDragStart = function handleDragStart(e) {
        e.stopPropagation();

        this.props.root.handleDragStart(e, this);
    };

    TreeNode.prototype.handleDragEnter = function handleDragEnter(e) {
        e.preventDefault();
        e.stopPropagation();

        this.props.root.handleDragEnter(e, this);
    };

    TreeNode.prototype.handleDragOver = function handleDragOver(e) {
        if (this.props.root.canDrop(this)) {
            e.preventDefault();
            e.stopPropagation();

            this.props.root.handleDragOver(e, this);
        }
    };

    TreeNode.prototype.handleDragLeave = function handleDragLeave(e) {
        e.stopPropagation();

        this.props.root.handleDragLeave(e, this);
    };

    TreeNode.prototype.handleDragEnd = function handleDragEnd(e) {
        e.stopPropagation();

        this.props.root.handleDragEnd(e, this);
    };

    TreeNode.prototype.handleDrop = function handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();

        this.props.root.handleDrop(e, this);
    };

    TreeNode.prototype.handleInputKeyDown = function handleInputKeyDown(e) {
        if (e.keyCode === KEYCODE.ENTER) {
            this.handleEditFinish(e);
        }
    };

    TreeNode.prototype.addCallbacks = function addCallbacks(props) {
        var _props5 = this.props,
            disabled = _props5.disabled,
            root = _props5.root;

        if (!disabled) {
            var selectable = typeof this.props.selectable !== 'undefined' ? this.props.selectable : root.props.selectable;
            if (selectable) {
                props.onClick = this.handleSelect;
            }
            var editable = typeof this.props.editable !== 'undefined' ? this.props.editable : root.props.editable;
            if (editable) {
                props.onDoubleClick = this.handleEditStart;
            }
            var draggable = typeof this.props.draggable !== 'undefined' ? this.props.draggable : root.props.draggable;
            if (draggable) {
                props.draggable = true;
                props.onDragStart = this.handleDragStart;
                props.onDragEnd = this.handleDragEnd;
            }
            props.onContextMenu = this.handleRightClick;
        }
    };

    TreeNode.prototype.renderSwitcher = function renderSwitcher() {
        var _cx;

        var _props6 = this.props,
            prefix = _props6.prefix,
            disabled = _props6.disabled,
            expanded = _props6.expanded,
            root = _props6.root;
        var loadData = root.props.loadData;
        var loading = this.state.loading;

        var showLine = this.showLine;

        var lineState = showLine ? 'line' : 'noline';
        var className = cx((_cx = {}, _cx[prefix + 'tree-switcher'] = true, _cx['' + prefix + lineState] = !loading, _cx[prefix + 'close'] = !loading && !showLine && !expanded, _cx[prefix + 'disabled'] = disabled, _cx[prefix + 'loading'] = loading, _cx[prefix + 'loading-' + lineState] = loading, _cx));
        var iconType = loadData && loading ? 'loading' : showLine ? expanded ? 'minus' : 'add' : 'arrow-down';

        return React.createElement(
            'span',
            { className: className, onClick: disabled ? null : this.handleExpand },
            this.renderRightAngle(),
            React.createElement(Icon, { className: prefix + 'tree-switcher-icon', type: iconType })
        );
    };

    TreeNode.prototype.renderNoopSwitcher = function renderNoopSwitcher() {
        var _cx2;

        var _props7 = this.props,
            prefix = _props7.prefix,
            pos = _props7.pos;

        var showLine = this.showLine;

        var lineState = showLine ? 'line' : 'noline';
        var className = cx((_cx2 = {}, _cx2[prefix + 'tree-switcher'] = true, _cx2[prefix + 'noop-' + lineState] = true, _cx2[prefix + 'noop-line-noroot'] = showLine && !isRoot(pos), _cx2));

        return React.createElement(
            'span',
            { className: className },
            this.renderRightAngle()
        );
    };

    TreeNode.prototype.renderRightAngle = function renderRightAngle() {
        var _props8 = this.props,
            prefix = _props8.prefix,
            pos = _props8.pos;

        return this.showLine && !isRoot(pos) ? React.createElement('span', { className: prefix + 'tree-right-angle' }) : null;
    };

    TreeNode.prototype.renderCheckbox = function renderCheckbox() {
        var _props9 = this.props,
            checked = _props9.checked,
            indeterminate = _props9.indeterminate,
            disabled = _props9.disabled,
            checkboxDisabled = _props9.checkboxDisabled;


        return React.createElement(Checkbox, { checked: checked, indeterminate: indeterminate, disabled: disabled || checkboxDisabled, onChange: this.handleCheck });
    };

    TreeNode.prototype.renderLabel = function renderLabel() {
        var _props10 = this.props,
            prefix = _props10.prefix,
            root = _props10.root;
        var isNodeBlock = root.props.isNodeBlock;
        var label = this.state.label;

        var labelProps = { className: prefix + 'tree-node-label' };
        if (!isNodeBlock) {
            this.addCallbacks(labelProps);
        }

        return React.createElement(
            'div',
            { className: prefix + 'tree-node-label-wrapper', ref: 'labelWrapper' },
            React.createElement(
                'div',
                labelProps,
                label
            )
        );
    };

    TreeNode.prototype.renderInput = function renderInput() {
        var prefix = this.props.prefix;
        var label = this.state.label;

        return React.createElement(
            'div',
            { className: prefix + 'tree-node-label-wrapper', ref: 'labelWrapper' },
            React.createElement(TreeNodeInput, { prefix: prefix, defaultValue: label, onBlur: this.handleEditFinish, onKeyDown: this.handleInputKeyDown })
        );
    };

    TreeNode.prototype.renderChildTree = function renderChildTree(hasChildTree) {
        var _props11 = this.props,
            prefix = _props11.prefix,
            children = _props11.children,
            expanded = _props11.expanded,
            root = _props11.root;
        var animation = root.props.animation;


        var childTree = expanded && hasChildTree ? React.createElement(
            'ul',
            { className: prefix + 'tree-child-tree' },
            children
        ) : null;
        if (animation) {
            childTree = React.createElement(
                Expand,
                { animationAppear: false },
                childTree
            );
        }

        return childTree;
    };

    TreeNode.prototype.render = function render() {
        var _cx3, _cx4;

        var _props12 = this.props,
            prefix = _props12.prefix,
            className = _props12.className,
            children = _props12.children,
            isLeaf = _props12.isLeaf,
            root = _props12.root,
            pos = _props12.pos,
            selected = _props12.selected,
            disabled = _props12.disabled,
            dragOver = _props12.dragOver,
            dragOverGapTop = _props12.dragOverGapTop,
            dragOverGapBottom = _props12.dragOverGapBottom;
        var _root$props = root.props,
            loadData = _root$props.loadData,
            isNodeBlock = _root$props.isNodeBlock,
            showLine = _root$props.showLine,
            rootDraggable = _root$props.draggable,
            filterTreeNode = _root$props.filterTreeNode;

        this.showLine = !isNodeBlock && showLine;

        var others = pickOthers(Object.keys(TreeNode.propTypes), this.props);
        if (rootDraggable) {
            others.onDragEnter = this.handleDragEnter;
            others.onDragOver = this.handleDragOver;
            others.onDragLeave = this.handleDragLeave;
            others.onDrop = this.handleDrop;
        }
        var newClassName = cx((_cx3 = {}, _cx3[prefix + 'tree-node'] = true, _cx3[prefix + 'filtered'] = !!filterTreeNode && !!root.filterTreeNode(this), _cx3[className] = !!className, _cx3));

        var innerClassName = cx((_cx4 = {}, _cx4[prefix + 'tree-node-inner'] = true, _cx4[prefix + 'selected'] = selected, _cx4[prefix + 'disabled'] = disabled, _cx4[prefix + 'drag-over'] = dragOver, _cx4[prefix + 'drag-over-gap-top'] = dragOverGapTop, _cx4[prefix + 'drag-over-gap-bottom'] = dragOverGapBottom, _cx4));
        var defaultPaddingLeft = (typeof isNodeBlock === 'undefined' ? 'undefined' : _typeof(isNodeBlock)) === 'object' ? parseInt(isNodeBlock.defaultPaddingLeft || 0) : 0;
        var indent = (typeof isNodeBlock === 'undefined' ? 'undefined' : _typeof(isNodeBlock)) === 'object' ? parseInt(isNodeBlock.indent || 24) : 24;
        var level = pos.split('-').length - 2;
        var innerStyle = isNodeBlock ? { paddingLeft: indent * level + defaultPaddingLeft + 'px' } : null;
        var innerProps = {
            className: innerClassName,
            style: innerStyle
        };
        if (isNodeBlock) {
            this.addCallbacks(innerProps);
        }

        var hasChildTree = children && Children.count(children);
        var canExpand = hasChildTree || loadData && !isLeaf;
        var checkable = typeof this.props.checkable !== 'undefined' ? this.props.checkable : root.props.checkable;
        var editing = this.state.editing;


        return React.createElement(
            'li',
            _extends({ className: newClassName }, others),
            React.createElement(
                'div',
                innerProps,
                canExpand ? this.renderSwitcher() : this.renderNoopSwitcher(),
                checkable ? this.renderCheckbox() : null,
                editing ? this.renderInput() : this.renderLabel()
            ),
            this.renderChildTree(hasChildTree)
        );
    };

    return TreeNode;
}(Component), _class.propTypes = {
    prefix: PropTypes.string,
    className: PropTypes.string,
    /**
     * 树节点
     */
    children: PropTypes.node,
    /**
     * 节点文本内容
     */
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
    parentNode: PropTypes.object
}, _class.defaultProps = {
    label: '---',
    disabled: false,
    checkboxDisabled: false,
    isLeaf: false
}, _temp);
TreeNode.displayName = 'TreeNode';
export { TreeNode as default };