'use strict';

exports.__esModule = true;

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

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

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

var _treeNodeIndent = require('./tree-node-indent');

var _treeNodeIndent2 = _interopRequireDefault(_treeNodeIndent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Expand = _animate2.default.Expand;
var bindCtx = _util.func.bindCtx;
var isPromise = _util.obj.isPromise,
    pickOthers = _util.obj.pickOthers,
    pickAttrsWith = _util.obj.pickAttrsWith;

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

        _this.saveRef = function (ref) {
            _this.nodeEl = ref;
        };

        _this.saveLabelWrapperRef = function (ref) {
            _this.labelWrapperEl = ref;
        };

        _this.state = {
            editing: false,
            loading: false,
            label: props.label
        };

        bindCtx(_this, ['handleExpand', 'handleSelect', 'handleCheck', 'handleEditStart', 'handleEditFinish', 'handleRightClick', 'handleDragStart', 'handleDragEnter', 'handleDragOver', 'handleDragLeave', 'handleDragEnd', 'handleDrop', 'handleInputKeyDown', 'handleKeyDown']);
        return _this;
    }

    TreeNode.getDerivedStateFromProps = function getDerivedStateFromProps(props) {
        if ('label' in props) {
            return {
                label: props.label
            };
        }

        return null;
    };

    TreeNode.prototype.componentDidMount = function componentDidMount() {
        this.itemNode = (0, _reactDom.findDOMNode)(this.nodeEl);
        this.setFocus();
    };

    TreeNode.prototype.componentDidUpdate = function componentDidUpdate() {
        this.setFocus();
    };

    TreeNode.prototype.getParentNode = function getParentNode() {
        return this.props.root.getParentNode(this.props.pos);
    };

    TreeNode.prototype.focusable = function focusable() {
        var _props = this.props,
            root = _props.root,
            disabled = _props.disabled;
        var focusable = root.props.focusable;

        return focusable && !disabled;
    };

    TreeNode.prototype.getFocused = function getFocused() {
        var _props2 = this.props,
            _key = _props2._key,
            root = _props2.root;
        var focusedKey = root.state.focusedKey;

        return focusedKey === _key;
    };

    TreeNode.prototype.setFocus = function setFocus() {
        var focused = this.getFocused();
        if (focused && this.focusable()) {
            this.itemNode.focus({ preventScroll: true });
        }
    };

    TreeNode.prototype.handleExpand = function handleExpand(e) {
        var _this2 = this;

        var _props3 = this.props,
            root = _props3.root,
            expanded = _props3.expanded,
            eventKey = _props3.eventKey;


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

        var _props4 = this.props,
            root = _props4.root,
            selected = _props4.selected,
            eventKey = _props4.eventKey;

        root.handleSelect(!selected, eventKey, this, e);
    };

    TreeNode.prototype.handleCheck = function handleCheck() {
        var _props5 = this.props,
            root = _props5.root,
            checked = _props5.checked,
            eventKey = _props5.eventKey;

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
            editing: false
        });

        var _props6 = this.props,
            root = _props6.root,
            eventKey = _props6.eventKey;

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

            this.props.root.handleDragOver(e, this);
        }
        e.stopPropagation();
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
        e.stopPropagation();
    };

    TreeNode.prototype.handleKeyDown = function handleKeyDown(e) {
        var _props7 = this.props,
            _key = _props7._key,
            root = _props7.root,
            disabled = _props7.disabled;

        if (disabled) {
            return;
        }

        if (this.focusable()) {
            root.handleItemKeyDown(_key, this, e);
        }

        this.props.onKeyDown && this.props.onKeyDown(e);
    };

    TreeNode.prototype.addCallbacks = function addCallbacks(props) {
        var _props8 = this.props,
            disabled = _props8.disabled,
            root = _props8.root;

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

    TreeNode.prototype.renderSwitcher = function renderSwitcher(showLine) {
        var _cx, _cx2;

        var _props9 = this.props,
            prefix = _props9.prefix,
            disabled = _props9.disabled,
            expanded = _props9.expanded,
            root = _props9.root;
        var loadData = root.props.loadData;
        var loading = this.state.loading;


        var lineState = showLine ? 'line' : 'noline';
        var className = (0, _classnames2.default)((_cx = {}, _cx[prefix + 'tree-switcher'] = true, _cx['' + prefix + lineState] = !loading, _cx[prefix + 'close'] = !loading && !showLine && !expanded, _cx[prefix + 'disabled'] = disabled, _cx[prefix + 'loading'] = loading, _cx[prefix + 'loading-' + lineState] = loading, _cx));
        var iconType = loadData && loading ? 'loading' : showLine ? expanded ? 'minus' : 'add' : 'arrow-down';
        var iconCls = (0, _classnames2.default)((_cx2 = {}, _cx2[prefix + 'tree-switcher-icon'] = true, _cx2[prefix + 'tree-fold-icon'] = iconType === 'arrow-down', _cx2[prefix + 'tree-switcher-fold-icon'] = showLine && !expanded, _cx2[prefix + 'tree-switcher-unfold-icon'] = showLine && expanded, _cx2));

        return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            _react2.default.createElement(
                'span',
                { className: className, onClick: disabled ? null : this.handleExpand },
                this.renderRightAngle(showLine),
                _react2.default.createElement(_icon2.default, { className: iconCls, type: iconType })
            )
        );
    };

    TreeNode.prototype.renderNoopSwitcher = function renderNoopSwitcher(showLine) {
        var _cx3;

        var _props10 = this.props,
            prefix = _props10.prefix,
            pos = _props10.pos;


        var lineState = showLine ? 'line' : 'noline';
        var className = (0, _classnames2.default)((_cx3 = {}, _cx3[prefix + 'tree-switcher'] = true, _cx3[prefix + 'noop-' + lineState] = true, _cx3[prefix + 'noop-line-noroot'] = showLine && !isRoot(pos), _cx3));

        return _react2.default.createElement(
            'span',
            { className: className },
            this.renderRightAngle(showLine)
        );
    };

    TreeNode.prototype.renderRightAngle = function renderRightAngle(showLine) {
        var _props11 = this.props,
            prefix = _props11.prefix,
            pos = _props11.pos;


        return showLine && !isRoot(pos) ? _react2.default.createElement('span', { className: prefix + 'tree-right-angle' }) : null;
    };

    TreeNode.prototype.renderCheckbox = function renderCheckbox() {
        var _props12 = this.props,
            checked = _props12.checked,
            indeterminate = _props12.indeterminate,
            disabled = _props12.disabled,
            checkboxDisabled = _props12.checkboxDisabled;
        var label = this.state.label;


        return _react2.default.createElement(_checkbox2.default, {
            'aria-label': typeof label === 'string' ? label : null,
            checked: checked,
            tabIndex: -1,
            indeterminate: indeterminate,
            disabled: disabled || checkboxDisabled,
            onChange: this.handleCheck
        });
    };

    TreeNode.prototype.renderLabel = function renderLabel() {
        var _cx4;

        var _props13 = this.props,
            prefix = _props13.prefix,
            root = _props13.root,
            disabled = _props13.disabled,
            icon = _props13.icon;
        var isNodeBlock = root.props.isNodeBlock;
        var label = this.state.label;

        var selectable = typeof this.props.selectable !== 'undefined' ? this.props.selectable : root.props.selectable;
        var labelProps = {
            className: (0, _classnames2.default)((_cx4 = {}, _cx4[prefix + 'tree-node-label'] = true, _cx4[prefix + 'tree-node-label-selectable'] = selectable && !disabled, _cx4))
        };

        if (!isNodeBlock) {
            this.addCallbacks(labelProps);
        }

        var iconEl = typeof icon === 'string' ? _react2.default.createElement(_icon2.default, { type: icon }) : icon;

        return _react2.default.createElement(
            'div',
            { className: prefix + 'tree-node-label-wrapper', ref: this.saveLabelWrapperRef },
            _react2.default.createElement(
                'div',
                labelProps,
                iconEl,
                label
            )
        );
    };

    TreeNode.prototype.renderInput = function renderInput() {
        var prefix = this.props.prefix;
        var label = this.state.label;

        return _react2.default.createElement(
            'div',
            { className: prefix + 'tree-node-label-wrapper', ref: this.saveLabelWrapperRef },
            _react2.default.createElement(_treeNodeInput2.default, {
                prefix: prefix,
                defaultValue: label,
                onBlur: this.handleEditFinish,
                onKeyDown: this.handleInputKeyDown
            })
        );
    };

    TreeNode.prototype.renderChildTree = function renderChildTree() {
        var _props14 = this.props,
            prefix = _props14.prefix,
            children = _props14.children;


        return children && this.addAnimationIfNeeded(_react2.default.createElement(
            'ul',
            { role: 'group', className: prefix + 'tree-child-tree' },
            children
        ));
    };

    TreeNode.prototype.addAnimationIfNeeded = function addAnimationIfNeeded(node) {
        var root = this.props.root;


        return root && root.props.animation ? _react2.default.createElement(
            Expand,
            { animationAppear: false },
            node
        ) : node;
    };

    TreeNode.prototype.render = function render() {
        var _cx5, _cx6, _ref;

        var _props15 = this.props,
            prefix = _props15.prefix,
            rtl = _props15.rtl,
            className = _props15.className,
            isLeaf = _props15.isLeaf,
            level = _props15.level,
            root = _props15.root,
            selected = _props15.selected,
            checked = _props15.checked,
            disabled = _props15.disabled,
            dragOver = _props15.dragOver,
            dragOverGapTop = _props15.dragOverGapTop,
            dragOverGapBottom = _props15.dragOverGapBottom,
            _key = _props15._key,
            size = _props15.size,
            posinset = _props15.posinset,
            children = _props15.children,
            expanded = _props15.expanded,
            isLastChild = _props15.isLastChild;
        var _root$props = root.props,
            isNodeBlock = _root$props.isNodeBlock,
            showLine = _root$props.showLine,
            rootDraggable = _root$props.draggable,
            filterTreeNode = _root$props.filterTreeNode;
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
        var newClassName = (0, _classnames2.default)((_cx5 = {}, _cx5[prefix + 'tree-node'] = true, _cx5[prefix + 'filtered'] = !!filterTreeNode && !!root.filterTreeNode(this), _cx5[className] = !!className, _cx5));

        var innerClassName = (0, _classnames2.default)((_cx6 = {}, _cx6[prefix + 'tree-node-inner'] = true, _cx6[prefix + 'selected'] = selected, _cx6[prefix + 'disabled'] = disabled, _cx6[prefix + 'drag-over'] = dragOver, _cx6[prefix + 'drag-over-gap-top'] = dragOverGapTop, _cx6[prefix + 'drag-over-gap-bottom'] = dragOverGapBottom, _cx6));

        var defaultPaddingLeft = (typeof isNodeBlock === 'undefined' ? 'undefined' : (0, _typeof3.default)(isNodeBlock)) === 'object' ? parseInt(isNodeBlock.defaultPaddingLeft || 0) : 0;
        var paddingLeftProp = rtl ? 'paddingRight' : 'paddingLeft';

        var indent = (typeof isNodeBlock === 'undefined' ? 'undefined' : (0, _typeof3.default)(isNodeBlock)) === 'object' ? parseInt(isNodeBlock.indent || 24) : 24;
        var innerStyle = isNodeBlock ? (_ref = {}, _ref[paddingLeftProp] = (useVirtual ? 0 : indent * (level - 1)) + defaultPaddingLeft + 'px', _ref) : null;

        var innerProps = (0, _extends3.default)({
            className: innerClassName,
            style: innerStyle,
            onKeyDown: this.handleKeyDown
        }, ariaProps);

        if (isNodeBlock) {
            this.addCallbacks(innerProps);
        }

        var checkable = typeof this.props.checkable !== 'undefined' ? this.props.checkable : root.props.checkable;

        var editing = this.state.editing;


        innerProps.tabIndex = root.tabbableKey === _key ? '0' : '-1';

        if (rtl) {
            others.dir = 'rtl';
        }

        return this.addAnimationIfNeeded(_react2.default.createElement(
            'li',
            (0, _extends3.default)({ role: 'presentation', className: newClassName }, others),
            _react2.default.createElement(
                'div',
                (0, _extends3.default)({
                    ref: this.saveRef,
                    role: 'treeitem',
                    'aria-selected': selected,
                    'aria-disabled': disabled,
                    'aria-checked': checked,
                    'aria-expanded': !isLeaf,
                    'aria-label': typeof label === 'string' ? label : null,
                    'aria-level': level,
                    'aria-posinset': posinset,
                    'aria-setsize': size
                }, innerProps),
                useVirtual && !hasRenderChildNodes && _react2.default.createElement(_treeNodeIndent2.default, {
                    prefix: prefix,
                    level: level,
                    isLastChild: isLastChild,
                    showLine: shouldShouldLine
                }),
                isLeaf ? this.renderNoopSwitcher(shouldShouldLine) : this.renderSwitcher(shouldShouldLine),
                checkable ? this.renderCheckbox() : null,
                editing ? this.renderInput() : this.renderLabel()
            ),
            expanded && (hasRenderChildNodes ? children : this.renderChildTree(children))
        ));
    };

    return TreeNode;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    _key: _propTypes2.default.string,
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
    parentNode: _propTypes2.default.object,
    onKeyDown: _propTypes2.default.func,
    // 无障碍化属性：aria-setsize
    size: _propTypes2.default.number,
    // 无障碍化属性：aria-posinset
    posinset: _propTypes2.default.number,
    // 是否是最后一个子节点，数组类型，包含对祖先节点的判断
    isLastChild: _propTypes2.default.arrayOf(_propTypes2.default.bool),
    /**
     * 自定义图标，可以使用 Icon 的 type，也可以使用组件 `<Icon type="icon type" />`
     * @version 1.21
     */
    icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node])
}, _class.defaultProps = {
    label: '---',
    rtl: false,
    disabled: false,
    checkboxDisabled: false,
    size: 1,
    posinset: 1
}, _temp);
TreeNode.displayName = 'TreeNode';
exports.default = (0, _reactLifecyclesCompat.polyfill)(TreeNode);
module.exports = exports['default'];