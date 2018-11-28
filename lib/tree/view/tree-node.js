'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

var _checkbox = require('../../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _animate = require('../../animate');

var _animate2 = _interopRequireDefault(_animate);

var _util = require('../../util');

var _treeNodeInput = require('./tree-node-input');

var _treeNodeInput2 = _interopRequireDefault(_treeNodeInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Expand = _animate2.default.Expand;
var bindCtx = _util.func.bindCtx;
var isPromise = _util.obj.isPromise,
    pickOthers = _util.obj.pickOthers;

var isRoot = function isRoot(pos) {
    return (/^0-(\d)+$/.test(pos)
    );
};

/**
 * Tree.Node
 */
var TreeNode = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(TreeNode, _Component);

    function TreeNode(props) {
        (0, _classCallCheck3.default)(this, TreeNode);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

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
        if (e.keyCode === _util.KEYCODE.ENTER) {
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
        var className = (0, _classnames2.default)((_cx = {}, _cx[prefix + 'tree-switcher'] = true, _cx['' + prefix + lineState] = !loading, _cx[prefix + 'close'] = !loading && !showLine && !expanded, _cx[prefix + 'disabled'] = disabled, _cx[prefix + 'loading'] = loading, _cx[prefix + 'loading-' + lineState] = loading, _cx));
        var iconType = loadData && loading ? 'loading' : showLine ? expanded ? 'minus' : 'add' : 'arrow-down';

        return _react2.default.createElement(
            'span',
            { className: className, onClick: disabled ? null : this.handleExpand },
            this.renderRightAngle(),
            _react2.default.createElement(_icon2.default, { className: prefix + 'tree-switcher-icon', type: iconType })
        );
    };

    TreeNode.prototype.renderNoopSwitcher = function renderNoopSwitcher() {
        var _cx2;

        var _props7 = this.props,
            prefix = _props7.prefix,
            pos = _props7.pos;

        var showLine = this.showLine;

        var lineState = showLine ? 'line' : 'noline';
        var className = (0, _classnames2.default)((_cx2 = {}, _cx2[prefix + 'tree-switcher'] = true, _cx2[prefix + 'noop-' + lineState] = true, _cx2[prefix + 'noop-line-noroot'] = showLine && !isRoot(pos), _cx2));

        return _react2.default.createElement(
            'span',
            { className: className },
            this.renderRightAngle()
        );
    };

    TreeNode.prototype.renderRightAngle = function renderRightAngle() {
        var _props8 = this.props,
            prefix = _props8.prefix,
            pos = _props8.pos;

        return this.showLine && !isRoot(pos) ? _react2.default.createElement('span', { className: prefix + 'tree-right-angle' }) : null;
    };

    TreeNode.prototype.renderCheckbox = function renderCheckbox() {
        var _props9 = this.props,
            checked = _props9.checked,
            indeterminate = _props9.indeterminate,
            disabled = _props9.disabled,
            checkboxDisabled = _props9.checkboxDisabled;


        return _react2.default.createElement(_checkbox2.default, { checked: checked, indeterminate: indeterminate, disabled: disabled || checkboxDisabled, onChange: this.handleCheck });
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

        return _react2.default.createElement(
            'div',
            { className: prefix + 'tree-node-label-wrapper', ref: 'labelWrapper' },
            _react2.default.createElement(
                'div',
                labelProps,
                label
            )
        );
    };

    TreeNode.prototype.renderInput = function renderInput() {
        var prefix = this.props.prefix;
        var label = this.state.label;

        return _react2.default.createElement(
            'div',
            { className: prefix + 'tree-node-label-wrapper', ref: 'labelWrapper' },
            _react2.default.createElement(_treeNodeInput2.default, { prefix: prefix, defaultValue: label, onBlur: this.handleEditFinish, onKeyDown: this.handleInputKeyDown })
        );
    };

    TreeNode.prototype.renderChildTree = function renderChildTree(hasChildTree) {
        var _props11 = this.props,
            prefix = _props11.prefix,
            children = _props11.children,
            expanded = _props11.expanded,
            root = _props11.root;
        var animation = root.props.animation;


        var childTree = expanded && hasChildTree ? _react2.default.createElement(
            'ul',
            { className: prefix + 'tree-child-tree' },
            children
        ) : null;
        if (animation) {
            childTree = _react2.default.createElement(
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
        var newClassName = (0, _classnames2.default)((_cx3 = {}, _cx3[prefix + 'tree-node'] = true, _cx3[prefix + 'filtered'] = !!filterTreeNode && !!root.filterTreeNode(this), _cx3[className] = !!className, _cx3));

        var innerClassName = (0, _classnames2.default)((_cx4 = {}, _cx4[prefix + 'tree-node-inner'] = true, _cx4[prefix + 'selected'] = selected, _cx4[prefix + 'disabled'] = disabled, _cx4[prefix + 'drag-over'] = dragOver, _cx4[prefix + 'drag-over-gap-top'] = dragOverGapTop, _cx4[prefix + 'drag-over-gap-bottom'] = dragOverGapBottom, _cx4));
        var defaultPaddingLeft = (typeof isNodeBlock === 'undefined' ? 'undefined' : (0, _typeof3.default)(isNodeBlock)) === 'object' ? parseInt(isNodeBlock.defaultPaddingLeft || 0) : 0;
        var indent = (typeof isNodeBlock === 'undefined' ? 'undefined' : (0, _typeof3.default)(isNodeBlock)) === 'object' ? parseInt(isNodeBlock.indent || 24) : 24;
        var level = pos.split('-').length - 2;
        var innerStyle = isNodeBlock ? { paddingLeft: indent * level + defaultPaddingLeft + 'px' } : null;
        var innerProps = {
            className: innerClassName,
            style: innerStyle
        };
        if (isNodeBlock) {
            this.addCallbacks(innerProps);
        }

        var hasChildTree = children && _react.Children.count(children);
        var canExpand = hasChildTree || loadData && !isLeaf;
        var checkable = typeof this.props.checkable !== 'undefined' ? this.props.checkable : root.props.checkable;
        var editing = this.state.editing;


        return _react2.default.createElement(
            'li',
            (0, _extends3.default)({ className: newClassName }, others),
            _react2.default.createElement(
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
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    className: _propTypes2.default.string,
    /**
     * 树节点
     */
    children: _propTypes2.default.node,
    /**
     * 节点文本内容
     */
    label: _propTypes2.default.node,
    /**
     * 单独设置是否支持选中，覆盖 Tree 的 selectable
     */
    selectable: _propTypes2.default.bool,
    /**
     * 单独设置是否出现复选框，覆盖 Tree 的 checkable
     */
    checkable: _propTypes2.default.bool,
    /**
     * 单独设置是否支持编辑，覆盖 Tree 的 editable
     */
    editable: _propTypes2.default.bool,
    /**
     * 单独设置是否支持拖拽，覆盖 Tree 的 draggable
     */
    draggable: _propTypes2.default.bool,
    /**
     * 是否禁止节点响应
     */
    disabled: _propTypes2.default.bool,
    /**
     * 是否禁止勾选节点复选框
     */
    checkboxDisabled: _propTypes2.default.bool,
    /**
     * 是否是叶子节点，设置loadData时生效
     */
    isLeaf: _propTypes2.default.bool,
    root: _propTypes2.default.object,
    eventKey: _propTypes2.default.string,
    pos: _propTypes2.default.string,
    expanded: _propTypes2.default.bool,
    selected: _propTypes2.default.bool,
    checked: _propTypes2.default.bool,
    indeterminate: _propTypes2.default.bool,
    dragOver: _propTypes2.default.bool,
    dragOverGapTop: _propTypes2.default.bool,
    dragOverGapBottom: _propTypes2.default.bool,
    parentNode: _propTypes2.default.object
}, _class.defaultProps = {
    label: '---',
    disabled: false,
    checkboxDisabled: false,
    isLeaf: false
}, _temp);
TreeNode.displayName = 'TreeNode';
exports.default = TreeNode;
module.exports = exports['default'];