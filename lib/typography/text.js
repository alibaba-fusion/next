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

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Typography.Text
 * @order 3
 */
var Text = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Text, _Component);

    function Text() {
        (0, _classCallCheck3.default)(this, Text);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    Text.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            component = _props.component,
            strong = _props.strong,
            underline = _props.underline,
            deleteProp = _props.delete,
            code = _props.code,
            mark = _props.mark,
            rtl = _props.rtl,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'className', 'component', 'strong', 'underline', 'delete', 'code', 'mark', 'rtl']);


        var Tag = component;
        var children = this.props.children;

        if (strong) {
            children = _react2.default.createElement(
                'strong',
                null,
                children
            );
        }

        if (underline) {
            children = _react2.default.createElement(
                'u',
                null,
                children
            );
        }

        if (deleteProp) {
            children = _react2.default.createElement(
                'del',
                null,
                children
            );
        }

        if (code) {
            children = _react2.default.createElement(
                'code',
                null,
                children
            );
        }

        if (mark) {
            children = _react2.default.createElement(
                'mark',
                null,
                children
            );
        }

        if (rtl) {
            others.dir = 'rtl';
        }

        return _react2.default.createElement(
            Tag,
            (0, _extends3.default)({}, others, {
                className: (className || '') + ' ' + prefix + 'typography'
            }),
            children
        );
    };

    return Text;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    /**
     * 添加删除线样式
     */
    delete: _propTypes2.default.bool,
    /**
     * 添加标记样式
     */
    mark: _propTypes2.default.bool,
    /**
     * 添加下划线样式
     */
    underline: _propTypes2.default.bool,
    /**
     * 是否加粗
     */
    strong: _propTypes2.default.bool,
    /**
     * 添加代码样式
     */
    code: _propTypes2.default.bool,
    /**
     * 设置标签类型
     */
    component: _propTypes2.default.elementType,
    children: _propTypes2.default.node,
    rtl: _propTypes2.default.bool
}, _class.defaultProps = {
    prefix: 'next-',
    delete: false,
    mark: false,
    underline: false,
    strong: false,
    code: false,
    component: 'span',
    rtl: false
}, _temp);
Text.displayName = 'Text';
exports.default = _configProvider2.default.config(Text);
module.exports = exports['default'];