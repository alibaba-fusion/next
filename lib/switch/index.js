"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var util_1 = require("../util");
var icon_1 = tslib_1.__importDefault(require("../icon"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var zh_cn_1 = tslib_1.__importDefault(require("../locale/zh-cn"));
var Switch = /** @class */ (function (_super) {
    tslib_1.__extends(Switch, _super);
    function Switch(props) {
        var _this = _super.call(this, props) || this;
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
        var _c = this.props, prefix = _c.prefix, className = _c.className, disabled = _c.disabled, readOnly = _c.readOnly, size = _c.size, loading = _c.loading, autoWidth = _c.autoWidth, checkedChildren = _c.checkedChildren, unCheckedChildren = _c.unCheckedChildren, rtl = _c.rtl, isPreview = _c.isPreview, renderPreview = _c.renderPreview, locale = _c.locale, onChange = _c.onChange, others = tslib_1.__rest(_c, ["prefix", "className", "disabled", "readOnly", "size", "loading", "autoWidth", "checkedChildren", "unCheckedChildren", "rtl", "isPreview", "renderPreview", "locale", "onChange"]);
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
            _a), className);
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
            if (typeof renderPreview === 'function') {
                return (react_1.default.createElement("div", tslib_1.__assign({ className: previewCls }, others), renderPreview(checked, this.props)));
            }
            return (react_1.default.createElement("p", tslib_1.__assign({ className: previewCls }, others), children || locale[status]));
        }
        return (react_1.default.createElement("div", tslib_1.__assign({ role: "switch", dir: rtl ? 'rtl' : undefined, tabIndex: 0 }, others, { className: classes }, attrs, { "aria-checked": checked }),
            react_1.default.createElement("div", { className: "".concat(prefix, "switch-btn") }, loading && react_1.default.createElement(icon_1.default, { type: "loading", className: "".concat(prefix, "switch-inner-icon") })),
            react_1.default.createElement("div", { className: "".concat(prefix, "switch-children") }, children)));
    };
    Switch.displayName = 'Switch';
    Switch.propTypes = tslib_1.__assign(tslib_1.__assign({}, config_provider_1.default.propTypes), { name: prop_types_1.default.string, prefix: prop_types_1.default.string, rtl: prop_types_1.default.bool, pure: prop_types_1.default.bool, className: prop_types_1.default.string, style: prop_types_1.default.object, checkedChildren: prop_types_1.default.any, unCheckedChildren: prop_types_1.default.any, onChange: prop_types_1.default.func, checked: prop_types_1.default.bool, defaultChecked: prop_types_1.default.bool, disabled: prop_types_1.default.bool, loading: prop_types_1.default.bool, size: prop_types_1.default.oneOf(['medium', 'small']), onClick: prop_types_1.default.func, onKeyDown: prop_types_1.default.func, isPreview: prop_types_1.default.bool, renderPreview: prop_types_1.default.func, autoWidth: prop_types_1.default.bool, locale: prop_types_1.default.object });
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
