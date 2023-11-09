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

var _text = require('./text');

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Typography.Paragraph
 * @description 继承 Typography.Text 的 API
 * @order 2
 */
var Paragraph = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(Paragraph, _React$Component);

    function Paragraph() {
        (0, _classCallCheck3.default)(this, Paragraph);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }

    Paragraph.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            component = _props.component,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'className', 'component']);


        var cls = (0, _classnames2.default)(prefix + 'typography-paragraph', className);

        return _react2.default.createElement(_text2.default, (0, _extends3.default)({}, others, { className: cls, component: component }));
    };

    return Paragraph;
}(_react2.default.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    /**
     * 设置标签类型
     */
    component: _propTypes2.default.elementType
}, _class.defaultProps = {
    prefix: 'next-',
    type: 'long',
    size: 'medium',
    component: 'p'
}, _temp);
Paragraph.displayName = 'Paragraph';
exports.default = _configProvider2.default.config(Paragraph);
module.exports = exports['default'];