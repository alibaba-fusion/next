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
 * Input.Group
 */
var Group = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(Group, _React$Component);

    function Group() {
        (0, _classCallCheck3.default)(this, Group);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }

    Group.prototype.render = function render() {
        var _classNames, _classNames2, _classNames3;

        var _props = this.props,
            className = _props.className,
            style = _props.style,
            children = _props.children,
            prefix = _props.prefix,
            addonBefore = _props.addonBefore,
            addonAfter = _props.addonAfter,
            addonBeforeClassName = _props.addonBeforeClassName,
            addonAfterClassName = _props.addonAfterClassName,
            rtl = _props.rtl,
            others = (0, _objectWithoutProperties3.default)(_props, ['className', 'style', 'children', 'prefix', 'addonBefore', 'addonAfter', 'addonBeforeClassName', 'addonAfterClassName', 'rtl']);


        var cls = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'input-group'] = true, _classNames[className] = !!className, _classNames));

        var addonCls = prefix + 'input-group-addon';
        var beforeCls = (0, _classnames2.default)(addonCls, (_classNames2 = {}, _classNames2[prefix + 'before'] = true, _classNames2[addonBeforeClassName] = addonBeforeClassName, _classNames2));
        var afterCls = (0, _classnames2.default)(addonCls, (_classNames3 = {}, _classNames3[prefix + 'after'] = true, _classNames3[addonAfterClassName] = addonAfterClassName, _classNames3));

        var before = addonBefore ? _react2.default.createElement(
            'span',
            { className: beforeCls },
            addonBefore
        ) : null;

        var after = addonAfter ? _react2.default.createElement(
            'span',
            { className: afterCls },
            addonAfter
        ) : null;

        return _react2.default.createElement(
            'span',
            (0, _extends3.default)({}, others, {
                dir: rtl ? 'rtl' : undefined,
                className: cls,
                style: style
            }),
            before,
            children,
            after
        );
    };

    return Group;
}(_react2.default.Component), _class.propTypes = {
    /**
     * 样式前缀
     */
    prefix: _propTypes2.default.string,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    children: _propTypes2.default.node,
    /**
     * 输入框前附加内容
     */
    addonBefore: _propTypes2.default.node,
    /**
     * 输入框前附加内容css
     */
    addonBeforeClassName: _propTypes2.default.string,
    /**
     * 输入框后附加内容
     */
    addonAfter: _propTypes2.default.node,
    /**
     * 输入框后额外css
     */
    addonAfterClassName: _propTypes2.default.string,
    /**
     * rtl
     */
    rtl: _propTypes2.default.bool
}, _class.defaultProps = {
    prefix: 'next-'
}, _temp);
Group.displayName = 'Group';
exports.default = _configProvider2.default.config(Group);
module.exports = exports['default'];