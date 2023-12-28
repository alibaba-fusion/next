"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames_1 = require("classnames");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var util_1 = require("../util");
var icon_1 = require("../icon");
var config_provider_1 = require("../config-provider");
var zh_cn_1 = require("../locale/zh-cn");
/** Switch*/
var Switch = /** @class */ (function (_super) {
    tslib_1.__extends(Switch, _super);
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
        if (e.keyCode === util_1.KEYCODE.ENTER || e.keyCode === util_1.KEYCODE.SPACE) {
            this.onChange(e);
        }
        this.props.onKeyDown && this.props.onKeyDown(e);
    };
    Switch.prototype.render = function () {
        var _a, _b;
        var _c = this.props, prefix = _c.prefix, className = _c.className, disabled = _c.disabled, readOnly = _c.readOnly, size = _c.size, loading = _c.loading, autoWidth = _c.autoWidth, checkedChildren = _c.checkedChildren, unCheckedChildren = _c.unCheckedChildren, rtl = _c.rtl, isPreview = _c.isPreview, renderPreview = _c.renderPreview, locale = _c.locale, others = tslib_1.__rest(_c, ["prefix", "className", "disabled", "readOnly", "size", "loading", "autoWidth", "checkedChildren", "unCheckedChildren", "rtl", "isPreview", "renderPreview", "locale"]);
        var checked = this.state.checked;
        var status = checked ? 'on' : 'off';
        var children = checked ? checkedChildren : unCheckedChildren;
        var _size = size;
        if (_size !== 'small' && _size !== 'medium') {
            _size = 'medium';
        }
        var classes = (0, classnames_1.default)((_a = {},
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
            var previewCls = (0, classnames_1.default)(className, (_b = {},
                _b["".concat(prefix, "form-preview")] = true,
                _b));
            if ('renderPreview' in this.props) {
                return (react_1.default.createElement("div", tslib_1.__assign({ className: previewCls }, others), renderPreview(checked, this.props)));
            }
            return (react_1.default.createElement("p", tslib_1.__assign({ className: previewCls }, others), children || locale[status]));
        }
        return (react_1.default.createElement("div", tslib_1.__assign({ role: "switch", dir: rtl ? 'rtl' : undefined, tabIndex: "0" }, others, { className: classes }, attrs, { "aria-checked": checked }),
            react_1.default.createElement("div", { className: "".concat(prefix, "switch-btn") }, loading && react_1.default.createElement(icon_1.default, { type: "loading", className: "".concat(prefix, "switch-inner-icon") })),
            react_1.default.createElement("div", { className: "".concat(prefix, "switch-children") }, children)));
    };
    Switch.contextTypes = {
        prefix: prop_types_1.default.string,
    };
    Switch.propTypes = {
        prefix: prop_types_1.default.string,
        rtl: prop_types_1.default.bool,
        pure: prop_types_1.default.bool,
        /**
         * 自定义类名
         */
        className: prop_types_1.default.string,
        /**
         * 自定义内敛样式
         */
        style: prop_types_1.default.object,
        /**
         * 打开时的内容
         */
        checkedChildren: prop_types_1.default.any,
        /**
         * 关闭时的内容
         */
        unCheckedChildren: prop_types_1.default.any,
        /**
         * 开关状态改变是触发此事件
         * @param {Boolean} checked 是否为打开状态
         * @param {Event} e DOM事件对象
         */
        onChange: prop_types_1.default.func,
        /**
         * 开关当前的值(针对受控组件)
         */
        checked: prop_types_1.default.bool,
        /**
         * 开关默认值 (针对非受控组件)
         */
        defaultChecked: prop_types_1.default.bool,
        /**
         * 表示开关被禁用
         */
        disabled: prop_types_1.default.bool,
        /**
         * loading
         */
        loading: prop_types_1.default.bool,
        /**
         * switch的尺寸
         * @enumdesc 正常大小, 缩小版大小
         */
        size: prop_types_1.default.oneOf(['medium', 'small']),
        /**
         * 鼠标点击事件
         * @param {Event} e DOM事件对象
         */
        onClick: prop_types_1.default.func,
        /**
         * 键盘按键事件
         * @param {Event} e DOM事件对象
         */
        onKeyDown: prop_types_1.default.func,
        /**
         * 是否为预览态
         */
        isPreview: prop_types_1.default.bool,
        /**
         * 预览态模式下渲染的内容
         * @param {number} value 评分值
         */
        renderPreview: prop_types_1.default.func,
        /**
         * 开启后宽度根据内容自适应
         * @version 1.23
         */
        autoWidth: prop_types_1.default.bool,
        /**
         * 国际化配置
         */
        locale: prop_types_1.default.object,
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
        locale: zh_cn_1.default.Switch,
    };
    return Switch;
}(react_1.default.Component));
exports.default = config_provider_1.default.config((0, react_lifecycles_compat_1.polyfill)(Switch));
