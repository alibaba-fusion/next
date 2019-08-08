'use strict';

exports.__esModule = true;

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

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _util = require('../util');

var _sup = require('./sup');

var _sup2 = _interopRequireDefault(_sup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Badge
 */
var Badge = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Badge, _Component);

    function Badge() {
        (0, _classCallCheck3.default)(this, Badge);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    Badge.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            prefix = _props.prefix,
            dot = _props.dot,
            className = _props.className,
            children = _props.children,
            content = _props.content,
            style = _props.style,
            rtl = _props.rtl,
            originCount = _props.count,
            showZero = _props.showZero,
            originOverflowCount = _props.overflowCount;

        var count = parseInt(originCount, 10);
        var overflowCount = parseInt(originOverflowCount, 10);
        var others = _util.obj.pickOthers(Badge.propTypes, this.props);

        // 如果是数字，则添加默认的 title
        if (count || count === 0 && showZero) {
            others.title = others.title || '' + count;
        }

        var classes = (0, _classnames2.default)(prefix + 'badge', (_classNames = {}, _classNames[prefix + 'badge-not-a-wrapper'] = !children, _classNames), className);

        return _react2.default.createElement(
            'span',
            (0, _extends3.default)({ dir: rtl ? 'rtl' : undefined, className: classes }, others),
            children,
            _react2.default.createElement(_sup2.default, {
                prefix: prefix,
                content: content,
                count: count,
                showZero: showZero,
                overflowCount: overflowCount,
                dot: dot,
                style: style
            })
        );
    };

    return Badge;
}(_react.Component), _class.propTypes = {
    // 样式类名的品牌前缀
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    // 自定义类名
    className: _propTypes2.default.string,
    // 自定义内联样式
    style: _propTypes2.default.object,
    /**
     * 徽章依托的内容
     */
    children: _propTypes2.default.node,
    /**
     * 展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时默认隐藏
     */
    count: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    /**
     * 当count为0时，是否显示count
     */
    showZero: _propTypes2.default.bool,
    /**
     * 自定义节点内容
     */
    content: _propTypes2.default.node,
    /**
     * 展示的封顶的数字
     */
    overflowCount: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    /**
     * 不展示数字，只展示一个小红点
     */
    dot: _propTypes2.default.bool
}, _class.defaultProps = {
    prefix: 'next-',
    count: 0,
    showZero: false,
    overflowCount: 99,
    dot: false
}, _temp);
Badge.displayName = 'Badge';
exports.default = _configProvider2.default.config(Badge);
module.exports = exports['default'];