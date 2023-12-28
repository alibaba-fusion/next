import { __assign, __extends, __rest } from "tslib";
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import { KEYCODE } from '../util';
import Icon from '../icon';
import ConfigProvider from '../config-provider';
import zhCN from '../locale/zh-cn';
/** Switch*/
var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    function Switch(props, context) {
        var _this = _super.call(this, props, context) || this;
        var checked = props.checked || props.defaultChecked;
        _this.onChange = _this.onChange.bind(_this);
        _this.onKeyDown = _this.onKeyDown.bind(_this);
        _this.state = {
            checked: checked,
        };
        return _this;
    }
    Switch.getDerivedStateFromProps = function (props, state) {
        if ('checked' in props && props.checked !== state.checked) {
            return {
                checked: !!props.checked,
            };
        }
        return null;
    };
    Switch.prototype.onChange = function (ev) {
        var checked = !this.state.checked;
        if (!('checked' in this.props)) {
            this.setState({
                checked: checked,
            });
        }
        this.props.onChange(checked, ev);
        this.props.onClick && this.props.onClick(ev);
    };
    Switch.prototype.onKeyDown = function (e) {
        if (e.keyCode === KEYCODE.ENTER || e.keyCode === KEYCODE.SPACE) {
            this.onChange(e);
        }
        this.props.onKeyDown && this.props.onKeyDown(e);
    };
    Switch.prototype.render = function () {
        var _a, _b;
        var _c = this.props, prefix = _c.prefix, className = _c.className, disabled = _c.disabled, readOnly = _c.readOnly, size = _c.size, loading = _c.loading, autoWidth = _c.autoWidth, checkedChildren = _c.checkedChildren, unCheckedChildren = _c.unCheckedChildren, rtl = _c.rtl, isPreview = _c.isPreview, renderPreview = _c.renderPreview, locale = _c.locale, others = __rest(_c, ["prefix", "className", "disabled", "readOnly", "size", "loading", "autoWidth", "checkedChildren", "unCheckedChildren", "rtl", "isPreview", "renderPreview", "locale"]);
        var checked = this.state.checked;
        var status = checked ? 'on' : 'off';
        var children = checked ? checkedChildren : unCheckedChildren;
        var _size = size;
        if (_size !== 'small' && _size !== 'medium') {
            _size = 'medium';
        }
        var classes = classNames((_a = {},
            _a["".concat(prefix, "switch")] = true,
            _a["".concat(prefix, "switch-loading")] = loading,
            _a["".concat(prefix, "switch-").concat(status)] = true,
            _a["".concat(prefix, "switch-").concat(_size)] = true,
            _a["".concat(prefix, "switch-auto-width")] = autoWidth,
            _a[className] = className,
            _a));
        var attrs;
        var isDisabled = disabled || readOnly;
        if (!isDisabled) {
            attrs = {
                onClick: this.onChange,
                tabIndex: 0,
                onKeyDown: this.onKeyDown,
                disabled: false,
            };
        }
        else {
            attrs = {
                disabled: true,
                onClick: undefined,
            };
        }
        if (isPreview) {
            var previewCls = classNames(className, (_b = {},
                _b["".concat(prefix, "form-preview")] = true,
                _b));
            if ('renderPreview' in this.props) {
                return (React.createElement("div", __assign({ className: previewCls }, others), renderPreview(checked, this.props)));
            }
            return (React.createElement("p", __assign({ className: previewCls }, others), children || locale[status]));
        }
        return (React.createElement("div", __assign({ role: "switch", dir: rtl ? 'rtl' : undefined, tabIndex: "0" }, others, { className: classes }, attrs, { "aria-checked": checked }),
            React.createElement("div", { className: "".concat(prefix, "switch-btn") }, loading && React.createElement(Icon, { type: "loading", className: "".concat(prefix, "switch-inner-icon") })),
            React.createElement("div", { className: "".concat(prefix, "switch-children") }, children)));
    };
    Switch.contextTypes = {
        prefix: PropTypes.string,
    };
    Switch.propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        pure: PropTypes.bool,
        /**
         * 自定义类名
         */
        className: PropTypes.string,
        /**
         * 自定义内敛样式
         */
        style: PropTypes.object,
        /**
         * 打开时的内容
         */
        checkedChildren: PropTypes.any,
        /**
         * 关闭时的内容
         */
        unCheckedChildren: PropTypes.any,
        /**
         * 开关状态改变是触发此事件
         * @param {Boolean} checked 是否为打开状态
         * @param {Event} e DOM事件对象
         */
        onChange: PropTypes.func,
        /**
         * 开关当前的值(针对受控组件)
         */
        checked: PropTypes.bool,
        /**
         * 开关默认值 (针对非受控组件)
         */
        defaultChecked: PropTypes.bool,
        /**
         * 表示开关被禁用
         */
        disabled: PropTypes.bool,
        /**
         * loading
         */
        loading: PropTypes.bool,
        /**
         * switch的尺寸
         * @enumdesc 正常大小, 缩小版大小
         */
        size: PropTypes.oneOf(['medium', 'small']),
        /**
         * 鼠标点击事件
         * @param {Event} e DOM事件对象
         */
        onClick: PropTypes.func,
        /**
         * 键盘按键事件
         * @param {Event} e DOM事件对象
         */
        onKeyDown: PropTypes.func,
        /**
         * 是否为预览态
         */
        isPreview: PropTypes.bool,
        /**
         * 预览态模式下渲染的内容
         * @param {number} value 评分值
         */
        renderPreview: PropTypes.func,
        /**
         * 开启后宽度根据内容自适应
         * @version 1.23
         */
        autoWidth: PropTypes.bool,
        /**
         * 国际化配置
         */
        locale: PropTypes.object,
    };
    Switch.defaultProps = {
        prefix: 'next-',
        size: 'medium',
        disabled: false,
        defaultChecked: false,
        isPreview: false,
        loading: false,
        readOnly: false,
        autoWidth: false,
        onChange: function () { },
        locale: zhCN.Switch,
    };
    return Switch;
}(React.Component));
export default ConfigProvider.config(polyfill(Switch));
