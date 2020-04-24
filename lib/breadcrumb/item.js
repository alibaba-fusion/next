'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Breadcrumb.Item
 */
var Item = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Item, _Component);

    function Item() {
        (0, _classCallCheck3.default)(this, Item);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    // stateless separator component
    Item.Separator = function Separator(_ref) {
        var prefix = _ref.prefix,
            children = _ref.children;

        return _react2.default.createElement(
            'span',
            { className: prefix + 'breadcrumb-separator' },
            children
        );
    };

    Item.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            rtl = _props.rtl,
            className = _props.className,
            children = _props.children,
            link = _props.link,
            activated = _props.activated,
            separator = _props.separator,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'rtl', 'className', 'children', 'link', 'activated', 'separator']);

        var clazz = (0, _classnames2.default)(prefix + 'breadcrumb-text', className, {
            activated: activated
        });

        return _react2.default.createElement(
            'li',
            { dir: rtl ? 'rtl' : null, className: prefix + 'breadcrumb-item' },
            link ? _react2.default.createElement(
                'a',
                (0, _extends3.default)({ href: link, className: clazz }, others),
                children
            ) : _react2.default.createElement(
                'span',
                (0, _extends3.default)({ className: clazz }, others),
                children
            ),
            activated ? null : Item.Separator({ prefix: prefix, children: separator })
        );
    };

    return Item;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    /**
     * 面包屑节点链接，如果设置这个属性，则该节点为`<a />` ，否则是`<span />`
     */
    link: _propTypes2.default.string,
    activated: _propTypes2.default.bool,
    separator: _propTypes2.default.node,
    className: _propTypes2.default.any,
    children: _propTypes2.default.node
}, _class.defaultProps = {
    prefix: 'next-'
}, _class._typeMark = 'breadcrumb_item', _temp);
Item.displayName = 'Item';
exports.default = _configProvider2.default.config(Item);
module.exports = exports['default'];