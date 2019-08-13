'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _menu = require('../menu');

var _menu2 = _interopRequireDefault(_menu);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _balloon = require('../balloon');

var _balloon2 = _interopRequireDefault(_balloon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tooltip = _balloon2.default.Tooltip;

/**
 * Nav.Item
 * @description 继承自 `Menu.Item` 的能力请查看 `Menu.Item` 文档
 */

var Item = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Item, _Component);

    function Item() {
        (0, _classCallCheck3.default)(this, Item);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    Item.prototype.render = function render() {
        var _context = this.context,
            prefix = _context.prefix,
            iconOnly = _context.iconOnly,
            hasTooltip = _context.hasTooltip;
        var _props = this.props,
            icon = _props.icon,
            children = _props.children,
            others = (0, _objectWithoutProperties3.default)(_props, ['icon', 'children']);

        var iconEl = typeof icon === 'string' ? _react2.default.createElement(_icon2.default, { className: prefix + 'nav-icon', type: icon }) : icon;

        var item = _react2.default.createElement(
            _menu2.default.Item,
            others,
            iconEl,
            children
        );

        if (iconOnly && hasTooltip && others.parentMode !== 'popup') {
            return _react2.default.createElement(
                Tooltip,
                { align: 'r', trigger: item },
                children
            );
        }

        return item;
    };

    return Item;
}(_react.Component), _class.menuChildType = 'item', _class.propTypes = {
    /**
     * 自定义图标，可以使用 Icon 的 type，也可以使用组件 `<Icon type="icon type" />`
     */
    icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
    /**
     * 导航内容
     */
    children: _propTypes2.default.node,
    parentMode: _propTypes2.default.oneOf(['inline', 'popup'])
}, _class.contextTypes = {
    prefix: _propTypes2.default.string,
    iconOnly: _propTypes2.default.bool,
    hasTooltip: _propTypes2.default.bool
}, _temp);
Item.displayName = 'Item';
exports.default = Item;
module.exports = exports['default'];