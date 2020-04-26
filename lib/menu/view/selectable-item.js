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

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

var _util = require('../../util');

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bindCtx = _util.func.bindCtx;
var pickOthers = _util.obj.pickOthers;

/**
 * Menu.Item
 * @order 0
 */

var SelectableItem = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(SelectableItem, _Component);

    function SelectableItem(props) {
        (0, _classCallCheck3.default)(this, SelectableItem);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

        bindCtx(_this, ['handleKeyDown', 'handleClick']);
        return _this;
    }

    SelectableItem.prototype.getSelected = function getSelected() {
        var _props = this.props,
            _key = _props._key,
            root = _props.root,
            selected = _props.selected;
        var selectMode = root.props.selectMode;
        var selectedKeys = root.state.selectedKeys;

        return selected || !!selectMode && selectedKeys.indexOf(_key) > -1;
    };

    SelectableItem.prototype.handleSelect = function handleSelect(e) {
        var _props2 = this.props,
            _key = _props2._key,
            root = _props2.root,
            onSelect = _props2.onSelect;

        if (onSelect) {
            onSelect(!this.getSelected(), this, e);
        } else {
            root.handleSelect(_key, !this.getSelected(), this);
        }
    };

    SelectableItem.prototype.handleKeyDown = function handleKeyDown(e) {
        if (e.keyCode === _util.KEYCODE.SPACE && !this.props.disabled) {
            this.handleSelect(e);
        }

        this.props.onKeyDown && this.props.onKeyDown(e);
    };

    SelectableItem.prototype.handleClick = function handleClick(e) {
        this.handleSelect(e);

        this.props.onClick && this.props.onClick(e);
    };

    SelectableItem.prototype.renderSelectedIcon = function renderSelectedIcon(selected) {
        var _cx;

        var _props3 = this.props,
            root = _props3.root,
            inlineIndent = _props3.inlineIndent,
            needIndent = _props3.needIndent,
            hasSelectedIcon = _props3.hasSelectedIcon,
            isSelectIconRight = _props3.isSelectIconRight,
            type = _props3.type;
        var _root$props = root.props,
            prefix = _root$props.prefix,
            rootSelectedIcon = _root$props.hasSelectedIcon,
            rootSelectIconRight = _root$props.isSelectIconRight,
            icons = _root$props.icons;


        var iconsSelect = icons.select;

        if (!(0, _react.isValidElement)(icons.select) && icons.select) {
            iconsSelect = _react2.default.createElement(
                'span',
                null,
                icons.select
            );
        }

        var cls = (0, _classnames2.default)((_cx = {}, _cx[prefix + 'menu-icon-selected'] = true, _cx[prefix + 'menu-symbol-icon-selected'] = !iconsSelect, _cx[prefix + 'menu-icon-right'] = ('isSelectIconRight' in this.props ? isSelectIconRight : rootSelectIconRight) && type !== 'submenu', _cx));

        return ('hasSelectedIcon' in this.props ? hasSelectedIcon : rootSelectedIcon) && selected ? _react2.default.cloneElement(iconsSelect || _react2.default.createElement(_icon2.default, { type: 'select' }), {
            style: needIndent && inlineIndent > 0 ? { left: inlineIndent + 'px' } : null,
            className: cls
        }) : null;
    };

    SelectableItem.prototype.render = function render() {
        var _cx2;

        var _props4 = this.props,
            _key = _props4._key,
            root = _props4.root,
            className = _props4.className,
            disabled = _props4.disabled,
            helper = _props4.helper,
            children = _props4.children,
            needIndent = _props4.needIndent;
        var prefix = root.props.prefix;

        var others = pickOthers(Object.keys(SelectableItem.propTypes), this.props);
        var selected = this.getSelected();

        var newProps = (0, _extends3.default)({
            _key: _key,
            root: root,
            disabled: disabled,
            type: 'item',
            className: (0, _classnames2.default)((_cx2 = {}, _cx2[prefix + 'selected'] = selected, _cx2[className] = !!className, _cx2)),
            onKeyDown: this.handleKeyDown,
            onClick: !disabled ? this.handleClick : this.props.onClick,
            needIndent: needIndent
        }, others);

        var textProps = {};

        if ('selectMode' in root.props) {
            textProps['aria-selected'] = selected;
        }

        return _react2.default.createElement(
            _item2.default,
            newProps,
            this.renderSelectedIcon(selected),
            _react2.default.createElement(
                'span',
                (0, _extends3.default)({ className: prefix + 'menu-item-text' }, textProps),
                children
            ),
            helper ? _react2.default.createElement(
                'div',
                { className: prefix + 'menu-item-helper' },
                helper
            ) : null
        );
    };

    return SelectableItem;
}(_react.Component), _class.menuChildType = 'item', _class.propTypes = {
    _key: _propTypes2.default.string,
    root: _propTypes2.default.object,
    selected: _propTypes2.default.bool,
    onSelect: _propTypes2.default.func,
    inlineIndent: _propTypes2.default.number,
    /**
     * 是否禁用
     */
    disabled: _propTypes2.default.bool,
    /**
     * 帮助文本
     */
    helper: _propTypes2.default.node,
    /**
     * 菜单项标签内容
     */
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    onKeyDown: _propTypes2.default.func,
    onClick: _propTypes2.default.func,
    needIndent: _propTypes2.default.bool,
    hasSelectedIcon: _propTypes2.default.bool,
    isSelectIconRight: _propTypes2.default.bool,
    icons: _propTypes2.default.object
}, _class.defaultProps = {
    disabled: false,
    needIndent: true,
    icons: {}
}, _temp);
SelectableItem.displayName = 'SelectableItem';
exports.default = SelectableItem;
module.exports = exports['default'];