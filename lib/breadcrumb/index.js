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

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Breadcrumb
 */
var Breadcrumb = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Breadcrumb, _Component);

    function Breadcrumb() {
        (0, _classCallCheck3.default)(this, Breadcrumb);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    Breadcrumb.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            maxNode = _props.maxNode,
            children = _props.children,
            separator = _props.separator,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'className', 'maxNode', 'children', 'separator']);

        var clazz = (0, _classnames2.default)(prefix + 'breadcrumb', className);
        var items = void 0;
        var length = _react.Children.count(children);

        if (maxNode > 1 && length > maxNode) {
            var breakpointer = length - maxNode + 1;
            items = [];

            _react.Children.forEach(children, function (item, i) {
                if (i && i === breakpointer) {
                    items.push(_react2.default.cloneElement(item, {
                        separator: separator,
                        prefix: prefix,
                        key: i,
                        activated: i === length - 1,
                        className: prefix + 'breadcrumb-text-ellipsis'
                    }, '...'));
                } else if (!i || i > breakpointer) {
                    items.push(_react2.default.cloneElement(item, {
                        separator: separator,
                        prefix: prefix,
                        key: i,
                        activated: i === length - 1
                    }));
                }
            });
        } else {
            items = _react.Children.map(children, function (item, i) {
                return _react2.default.cloneElement(item, {
                    separator: separator,
                    prefix: prefix,
                    activated: i === length - 1,
                    key: i
                });
            });
        }

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({ className: clazz }, others),
            items
        );
    };

    return Breadcrumb;
}(_react.Component), _class.Item = _item2.default, _class.propTypes = {
    /**
     * 样式类名的品牌前缀
     */
    prefix: _propTypes2.default.string,
    /**
     * 面包屑子节点，需传入 Breadcrumb.Item
     */
    children: function children(props, propName) {
        _react.Children.forEach(props[propName], function (child) {
            if (!(child && typeof child.type === 'function' && child.type._typeMark === 'breadcrumb_item')) {
                throw new Error('Breadcrumb\'s children must be Breadcrumb.Item!');
            }
        });
    },
    /**
     * 面包屑最多显示个数，超出部分会被隐藏
     */
    maxNode: _propTypes2.default.number,
    /**
     * 分隔符，可以是文本或 Icon
     */
    separator: _propTypes2.default.node,
    className: _propTypes2.default.any
}, _class.defaultProps = {
    prefix: 'next-',
    maxNode: 100,
    separator: _react2.default.createElement(_icon2.default, { type: 'arrow-right' })
}, _temp);
Breadcrumb.displayName = 'Breadcrumb';
exports.default = _configProvider2.default.config(Breadcrumb);
module.exports = exports['default'];