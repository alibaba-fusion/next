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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _util = require('../util');

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _zhCn = require('../locale/zh-cn');

var _zhCn2 = _interopRequireDefault(_zhCn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Switch*/
var Switch = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(Switch, _React$Component);

    function Switch(props, context) {
        (0, _classCallCheck3.default)(this, Switch);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props, context));

        var checked = props.checked || props.defaultChecked;
        _this.onChange = _this.onChange.bind(_this);
        _this.onKeyDown = _this.onKeyDown.bind(_this);
        _this.state = {
            checked: checked
        };
        return _this;
    }

    Switch.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
        if ('checked' in props && props.checked !== state.checked) {
            return {
                checked: !!props.checked
            };
        }

        return null;
    };

    Switch.prototype.onChange = function onChange(ev) {
        var checked = !this.state.checked;

        if (!('checked' in this.props)) {
            this.setState({
                checked: checked
            });
        }
        this.props.onChange(checked, ev);
        this.props.onClick && this.props.onClick(ev);
    };

    Switch.prototype.onKeyDown = function onKeyDown(e) {
        if (e.keyCode === _util.KEYCODE.ENTER || e.keyCode === _util.KEYCODE.SPACE) {
            this.onChange(e);
        }
        this.props.onKeyDown && this.props.onKeyDown(e);
    };

    Switch.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            disabled = _props.disabled,
            readOnly = _props.readOnly,
            size = _props.size,
            checkedChildren = _props.checkedChildren,
            unCheckedChildren = _props.unCheckedChildren,
            rtl = _props.rtl,
            isPreview = _props.isPreview,
            renderPreview = _props.renderPreview,
            locale = _props.locale,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'className', 'disabled', 'readOnly', 'size', 'checkedChildren', 'unCheckedChildren', 'rtl', 'isPreview', 'renderPreview', 'locale']);
        var checked = this.state.checked;

        var status = checked ? 'on' : 'off';
        var children = checked ? checkedChildren : unCheckedChildren;

        var _size = size;
        if (_size !== 'small' && _size !== 'medium') {
            _size = 'medium';
        }

        var classes = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'switch'] = true, _classNames[prefix + 'switch-' + status] = true, _classNames[prefix + 'switch-' + _size] = true, _classNames[className] = className, _classNames));
        var attrs = void 0;
        var isDisabled = disabled || readOnly;

        if (!isDisabled) {
            attrs = {
                onClick: this.onChange,
                tabIndex: 0,
                onKeyDown: this.onKeyDown,
                disabled: false
            };
        } else {
            attrs = {
                disabled: true
            };
        }

        if (isPreview) {
            var _classNames2;

            var previewCls = (0, _classnames2.default)(className, (_classNames2 = {}, _classNames2[prefix + 'form-preview'] = true, _classNames2));

            if ('renderPreview' in this.props) {
                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: previewCls }, others),
                    renderPreview(checked, this.props)
                );
            }

            return _react2.default.createElement(
                'p',
                (0, _extends3.default)({ className: previewCls }, others),
                locale[status]
            );
        }

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({
                role: 'switch',
                dir: rtl ? 'rtl' : undefined,
                tabIndex: '0'
            }, others, {
                className: classes
            }, attrs, {
                'aria-checked': checked
            }),
            _react2.default.createElement(
                'div',
                { className: prefix + 'switch-children' },
                children
            )
        );
    };

    return Switch;
}(_react2.default.Component), _class.contextTypes = {
    prefix: _propTypes2.default.string
}, _class.propTypes = {
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    pure: _propTypes2.default.bool,
    /**
     * 自定义类名
     */
    className: _propTypes2.default.string,
    /**
     * 自定义内敛样式
     */
    style: _propTypes2.default.object,
    /**
     * 打开时的内容
     */
    checkedChildren: _propTypes2.default.any,
    /**
     * 关闭时的内容
     */
    unCheckedChildren: _propTypes2.default.any,
    /**
     * 开关状态改变是触发此事件
     * @param {Boolean} checked 是否为打开状态
     * @param {Event} e DOM事件对象
     */
    onChange: _propTypes2.default.func,
    /**
     * 开关当前的值(针对受控组件)
     */
    checked: _propTypes2.default.bool,
    /**
     * 开关默认值 (针对非受控组件)
     */
    defaultChecked: _propTypes2.default.bool,
    /**
     * 表示开关被禁用
     */
    disabled: _propTypes2.default.bool,
    /**
     * switch的尺寸
     * @enumdesc 正常大小, 缩小版大小
     */
    size: _propTypes2.default.oneOf(['medium', 'small']),
    /**
     * 鼠标点击事件
     * @param {Event} e DOM事件对象
     */
    onClick: _propTypes2.default.func,
    /**
     * 键盘按键事件
     * @param {Event} e DOM事件对象
     */
    onKeyDown: _propTypes2.default.func,
    /**
     * 是否为预览态
     */
    isPreview: _propTypes2.default.bool,
    /**
     * 预览态模式下渲染的内容
     * @param {number} value 评分值
     */
    renderPreview: _propTypes2.default.func,
    /**
     * 国际化配置
     */
    locale: _propTypes2.default.object
}, _class.defaultProps = {
    prefix: 'next-',
    size: 'medium',
    disabled: false,
    defaultChecked: false,
    isPreview: false,
    readOnly: false,
    onChange: function onChange() {},
    locale: _zhCn2.default.Switch
}, _temp);
Switch.displayName = 'Switch';
exports.default = _configProvider2.default.config((0, _reactLifecyclesCompat.polyfill)(Switch));
module.exports = exports['default'];