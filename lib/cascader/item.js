'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _menu = require('../menu');

var _menu2 = _interopRequireDefault(_menu);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bindCtx = _util.func.bindCtx;
var pickOthers = _util.obj.pickOthers;
var CascaderMenuItem = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(CascaderMenuItem, _Component);

    function CascaderMenuItem(props) {
        (0, _classCallCheck3.default)(this, CascaderMenuItem);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

        _this.state = {
            loading: false
        };

        bindCtx(_this, ['handleExpand', 'handleClick', 'handleMouseEnter', 'handleKeyDown', 'removeLoading']);
        return _this;
    }

    CascaderMenuItem.prototype.addLoading = function addLoading() {
        this.setState({
            loading: true
        });
    };

    CascaderMenuItem.prototype.removeLoading = function removeLoading() {
        this.setState({
            loading: false
        });
    };

    CascaderMenuItem.prototype.setLoadingIfNeed = function setLoadingIfNeed(p) {
        if (p && typeof p.then === 'function') {
            this.addLoading();
            p.then(this.removeLoading).catch(this.removeLoading);
        }
    };

    CascaderMenuItem.prototype.handleExpand = function handleExpand(focusedFirstChild) {
        this.setLoadingIfNeed(this.props.onExpand(focusedFirstChild));
    };

    CascaderMenuItem.prototype.handleClick = function handleClick() {
        this.handleExpand(false);
    };

    CascaderMenuItem.prototype.handleMouseEnter = function handleMouseEnter() {
        this.handleExpand(false);
    };

    CascaderMenuItem.prototype.handleKeyDown = function handleKeyDown(e) {
        if (!this.props.disabled) {
            if (e.keyCode === _util.KEYCODE.RIGHT || e.keyCode === _util.KEYCODE.ENTER) {
                if (this.props.canExpand) {
                    this.handleExpand(true);
                }
            } else if (e.keyCode === _util.KEYCODE.LEFT || e.keyCode === _util.KEYCODE.ESC) {
                this.props.onFold();
            } else if (e.keyCode === _util.KEYCODE.SPACE) {
                this.handleExpand(false);
            }
        }
    };

    CascaderMenuItem.prototype.render = function render() {
        var _cx;

        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            menu = _props.menu,
            disabled = _props.disabled,
            selected = _props.selected,
            onSelect = _props.onSelect,
            expanded = _props.expanded,
            canExpand = _props.canExpand,
            expandTriggerType = _props.expandTriggerType,
            checkable = _props.checkable,
            checked = _props.checked,
            indeterminate = _props.indeterminate,
            checkboxDisabled = _props.checkboxDisabled,
            onCheck = _props.onCheck,
            children = _props.children;

        var others = pickOthers(Object.keys(CascaderMenuItem.propTypes), this.props);
        var loading = this.state.loading;


        var itemProps = (0, _extends3.default)({
            className: (0, _classnames2.default)((_cx = {}, _cx[prefix + 'cascader-menu-item'] = true, _cx[prefix + 'expanded'] = expanded, _cx[className] = !!className, _cx)),
            disabled: disabled,
            menu: menu,
            onKeyDown: this.handleKeyDown,
            role: 'option'
        }, others);
        if (!disabled) {
            if (expandTriggerType === 'hover') {
                itemProps.onMouseEnter = this.handleMouseEnter;
            } else {
                itemProps.onClick = this.handleClick;
            }
        }

        var Item = void 0;
        if (checkable) {
            Item = _menu2.default.CheckboxItem;
            itemProps.checked = checked;
            itemProps.indeterminate = indeterminate;
            itemProps.checkboxDisabled = checkboxDisabled;
            itemProps.onChange = onCheck;
        } else {
            Item = _menu2.default.Item;
            itemProps.selected = selected;
            itemProps.onSelect = onSelect;
        }

        return _react2.default.createElement(
            Item,
            itemProps,
            children,
            canExpand ? loading ? _react2.default.createElement(_icon2.default, {
                className: prefix + 'cascader-menu-icon-right ' + prefix + 'cascader-menu-icon-loading',
                type: 'loading'
            }) : _react2.default.createElement(_icon2.default, {
                className: prefix + 'cascader-menu-icon-right ' + prefix + 'cascader-menu-icon-expand',
                type: 'arrow-right'
            }) : null
        );
    };

    return CascaderMenuItem;
}(_react.Component), _class.menuChildType = 'item', _class.propTypes = {
    prefix: _propTypes2.default.string,
    className: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    selected: _propTypes2.default.bool,
    onSelect: _propTypes2.default.func,
    expanded: _propTypes2.default.bool,
    canExpand: _propTypes2.default.bool,
    menu: _propTypes2.default.any,
    expandTriggerType: _propTypes2.default.oneOf(['click', 'hover']),
    onExpand: _propTypes2.default.func,
    onFold: _propTypes2.default.func,
    checkable: _propTypes2.default.bool,
    checked: _propTypes2.default.bool,
    indeterminate: _propTypes2.default.bool,
    checkboxDisabled: _propTypes2.default.bool,
    onCheck: _propTypes2.default.func,
    children: _propTypes2.default.node
}, _temp);
CascaderMenuItem.displayName = 'CascaderMenuItem';
exports.default = CascaderMenuItem;
module.exports = exports['default'];