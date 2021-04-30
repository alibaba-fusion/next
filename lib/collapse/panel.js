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

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Collapse.Panel */
var Panel = (_temp2 = _class = function (_React$Component) {
    (0, _inherits3.default)(Panel, _React$Component);

    function Panel() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Panel);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onKeyDown = function (e) {
            var keyCode = e.keyCode;

            if (keyCode === _util.KEYCODE.SPACE) {
                var onClick = _this.props.onClick;

                e.preventDefault();
                onClick && onClick(e);
            }
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    } //

    Panel.prototype.render = function render() {
        var _classNames, _classNames2;

        var _props = this.props,
            title = _props.title,
            children = _props.children,
            className = _props.className,
            isExpanded = _props.isExpanded,
            disabled = _props.disabled,
            style = _props.style,
            prefix = _props.prefix,
            onClick = _props.onClick,
            id = _props.id,
            others = (0, _objectWithoutProperties3.default)(_props, ['title', 'children', 'className', 'isExpanded', 'disabled', 'style', 'prefix', 'onClick', 'id']);


        var cls = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'collapse-panel'] = true, _classNames[prefix + 'collapse-panel-hidden'] = !isExpanded, _classNames[prefix + 'collapse-panel-expanded'] = isExpanded, _classNames[prefix + 'collapse-panel-disabled'] = disabled, _classNames[className] = className, _classNames));

        var iconCls = (0, _classnames2.default)((_classNames2 = {}, _classNames2[prefix + 'collapse-panel-icon'] = true, _classNames2[prefix + 'collapse-panel-icon-expanded'] = isExpanded, _classNames2));

        // 为了无障碍 需要添加两个id
        var headingId = id ? id + '-heading' : undefined;
        var regionId = id ? id + '-region' : undefined;
        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({ className: cls, style: style, id: id }, others),
            _react2.default.createElement(
                'div',
                {
                    id: headingId,
                    className: prefix + 'collapse-panel-title',
                    onClick: onClick,
                    onKeyDown: this.onKeyDown,
                    tabIndex: '0',
                    'aria-disabled': disabled,
                    'aria-expanded': isExpanded,
                    'aria-controls': regionId,
                    role: 'button'
                },
                _react2.default.createElement(_icon2.default, {
                    type: 'arrow-right',
                    className: iconCls,
                    'aria-hidden': 'true'
                }),
                title
            ),
            _react2.default.createElement(
                'div',
                {
                    className: prefix + 'collapse-panel-content',
                    role: 'region',
                    id: regionId
                },
                children
            )
        );
    };

    return Panel;
}(_react2.default.Component), _class.propTypes = {
    /**
     * 样式类名的品牌前缀
     */
    prefix: _propTypes2.default.string,
    /**
     * 子组件接受行内样式
     */
    style: _propTypes2.default.object,
    children: _propTypes2.default.any,
    isExpanded: _propTypes2.default.bool,
    /**
     * 是否禁止用户操作
     */
    disabled: _propTypes2.default.bool,
    /**
     * 标题
     */
    title: _propTypes2.default.node,
    /**
     * 扩展class
     */
    className: _propTypes2.default.string,
    onClick: _propTypes2.default.func,
    id: _propTypes2.default.string
}, _class.defaultProps = {
    prefix: 'next-',
    isExpanded: false,
    onClick: _util.func.noop
}, _class.isNextPanel = true, _temp2);
Panel.displayName = 'Panel';
exports.default = _configProvider2.default.config(Panel);
module.exports = exports['default'];