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

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */

/** Paragraph */
var Paragraph = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(Paragraph, _React$Component);

    function Paragraph(props) {
        (0, _classCallCheck3.default)(this, Paragraph);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

        _util.log.warning('[Paragraph] is deprecated, please use Typography.Paragraph instead!');
        return _this;
    }

    Paragraph.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            type = _props.type,
            size = _props.size,
            rtl = _props.rtl,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'className', 'type', 'size', 'rtl']);


        var cls = (0, _classnames2.default)(prefix + 'paragraph', type === 'short' ? prefix + 'paragraph-short' : prefix + 'paragraph-long', size === 'small' ? prefix + 'paragraph-small' : prefix + 'paragraph-medium', className);
        if (rtl) {
            others.dir = 'rtl';
        }

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({}, others, { className: cls }),
            this.props.children
        );
    };

    return Paragraph;
}(_react2.default.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    /**
     * 额外的样式名 会附加到 root dom 上
     */
    className: _propTypes2.default.string,
    /**
     * 什么方式展示段落
     * @enumdesc 展示所有文本, 展示三行以内（非强制）
     */
    type: _propTypes2.default.oneOf(['long', 'short']),
    /**
     * 组件大小。
     * @enumdesc 中号, 小号
     */
    size: _propTypes2.default.oneOf(['medium', 'small']),
    rtl: _propTypes2.default.bool
}, _class.defaultProps = {
    prefix: 'next-',
    type: 'long',
    size: 'medium'
}, _temp);
Paragraph.displayName = 'Paragraph';
exports.default = _configProvider2.default.config(Paragraph);
module.exports = exports['default'];