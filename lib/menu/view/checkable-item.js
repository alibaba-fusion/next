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

var _checkbox = require('../../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _radio = require('../../radio');

var _radio2 = _interopRequireDefault(_radio);

var _util = require('../../util');

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = {};
var bindCtx = _util.func.bindCtx;
var pickOthers = _util.obj.pickOthers;
var CheckableItem = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(CheckableItem, _Component);

    function CheckableItem(props) {
        (0, _classCallCheck3.default)(this, CheckableItem);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

        bindCtx(_this, ['stopPropagation', 'handleKeyDown', 'handleClick']);
        _this.id = _util.htmlId.escapeForId('checkable-item-' + (props.id || props._key));
        return _this;
    }

    CheckableItem.prototype.stopPropagation = function stopPropagation(e) {
        e.stopPropagation();
    };

    CheckableItem.prototype.handleCheck = function handleCheck(e) {
        var _props = this.props,
            checkType = _props.checkType,
            checked = _props.checked,
            onChange = _props.onChange;

        if (!(checkType === 'radio' && checked)) {
            onChange(!checked, e);
        }
    };

    CheckableItem.prototype.handleKeyDown = function handleKeyDown(e) {
        if (e.keyCode === _util.KEYCODE.SPACE && !this.props.checkDisabled) {
            this.handleCheck(e);
        }

        this.props.onKeyDown && this.props.onKeyDown(e);
    };

    CheckableItem.prototype.handleClick = function handleClick(e) {
        this.handleCheck(e);

        this.props.onClick && this.props.onClick(e);
    };

    CheckableItem.prototype.renderCheck = function renderCheck() {
        var _props2 = this.props,
            root = _props2.root,
            checked = _props2.checked,
            indeterminate = _props2.indeterminate,
            disabled = _props2.disabled,
            checkType = _props2.checkType,
            checkDisabled = _props2.checkDisabled,
            onChange = _props2.onChange;
        var labelToggleChecked = root.props.labelToggleChecked;

        var Check = checkType === 'radio' ? _radio2.default : _checkbox2.default;

        var checkProps = {
            tabIndex: '-1',
            checked: checked,
            disabled: disabled || checkDisabled
        };
        if (checkType === 'checkbox') {
            checkProps.indeterminate = indeterminate;
        }
        if (!labelToggleChecked) {
            checkProps.onChange = onChange;
            checkProps.onClick = this.stopPropagation;
        }

        return _react2.default.createElement(Check, (0, _extends3.default)({ 'aria-labelledby': this.id }, checkProps));
    };

    CheckableItem.prototype.render = function render() {
        var _props3 = this.props,
            _key = _props3._key,
            root = _props3.root,
            checked = _props3.checked,
            disabled = _props3.disabled,
            onClick = _props3.onClick,
            helper = _props3.helper,
            children = _props3.children;
        var _root$props = root.props,
            prefix = _root$props.prefix,
            labelToggleChecked = _root$props.labelToggleChecked;

        var others = pickOthers(Object.keys(CheckableItem.propTypes), this.props);

        var newProps = (0, _extends3.default)({
            _key: _key,
            root: root,
            disabled: disabled,
            type: 'item',
            onClick: onClick,
            onKeyDown: this.handleKeyDown
        }, others);
        if (labelToggleChecked && !disabled) {
            newProps.onClick = this.handleClick;
        }

        return _react2.default.createElement(
            _item2.default,
            (0, _extends3.default)({ 'aria-checked': checked }, newProps),
            this.renderCheck(),
            _react2.default.createElement(
                'span',
                { className: prefix + 'menu-item-text', id: this.id },
                children
            ),
            helper ? _react2.default.createElement(
                'div',
                { className: prefix + 'menu-item-helper' },
                helper
            ) : null
        );
    };

    return CheckableItem;
}(_react.Component), _class.propTypes = {
    _key: _propTypes2.default.string,
    root: _propTypes2.default.object,
    disabled: _propTypes2.default.bool,
    inlineIndent: _propTypes2.default.number,
    checked: _propTypes2.default.bool,
    indeterminate: _propTypes2.default.bool,
    onChange: _propTypes2.default.func,
    checkType: _propTypes2.default.oneOf(['checkbox', 'radio']),
    checkDisabled: _propTypes2.default.bool,
    helper: _propTypes2.default.node,
    children: _propTypes2.default.node,
    onKeyDown: _propTypes2.default.func,
    onClick: _propTypes2.default.func,
    id: _propTypes2.default.string
}, _class.defaultProps = {
    disabled: false,
    checked: false,
    indeterminate: false,
    checkType: 'checkbox',
    checkDisabled: false,
    onChange: noop
}, _temp);
CheckableItem.displayName = 'CheckableItem';
exports.default = CheckableItem;
module.exports = exports['default'];