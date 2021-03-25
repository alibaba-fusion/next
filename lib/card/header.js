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
 * Card.Header
 * @order 2
 */
var CardHeader = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(CardHeader, _Component);

    function CardHeader() {
        (0, _classCallCheck3.default)(this, CardHeader);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    CardHeader.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            title = _props.title,
            subTitle = _props.subTitle,
            extra = _props.extra,
            className = _props.className,
            Component = _props.component,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'title', 'subTitle', 'extra', 'className', 'component']);


        return _react2.default.createElement(
            Component,
            (0, _extends3.default)({}, others, {
                className: (0, _classnames2.default)(prefix + 'card-header', className)
            }),
            extra && _react2.default.createElement(
                'div',
                { className: prefix + 'card-header-extra' },
                extra
            ),
            _react2.default.createElement(
                'div',
                { className: prefix + 'card-header-titles' },
                title && _react2.default.createElement(
                    'div',
                    { className: prefix + 'card-header-title' },
                    title
                ),
                subTitle && _react2.default.createElement(
                    'div',
                    { className: prefix + 'card-header-subtitle' },
                    subTitle
                )
            )
        );
    };

    return CardHeader;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    /**
     * 卡片的标题
     */
    title: _propTypes2.default.node,
    /**
     * 卡片的副标题
     */
    subTitle: _propTypes2.default.node,
    /**
     * 标题区域的用户自定义内容
     */
    extra: _propTypes2.default.node,
    /**
     * 设置标签类型
     */
    component: _propTypes2.default.elementType,
    className: _propTypes2.default.string
}, _class.defaultProps = {
    prefix: 'next-',
    component: 'div'
}, _temp);
CardHeader.displayName = 'CardHeader';
exports.default = _configProvider2.default.config(CardHeader);
module.exports = exports['default'];