import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import { KEYCODE } from '../util';
import Icon from '../icon';
import ConfigProvider from '../config-provider';
import zhCN from '../locale/zh-cn';
var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
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
        if (e.keyCode === KEYCODE.ENTER || e.keyCode === KEYCODE.SPACE) {
            this.onChange(e);
        }
        this.props.onKeyDown && this.props.onKeyDown(e);
    };
    Switch.prototype.render = function () {
        var _a, _b;
        var _c = this.props, prefix = _c.prefix, className = _c.className, disabled = _c.disabled, readOnly = _c.readOnly, size = _c.size, loading = _c.loading, autoWidth = _c.autoWidth, checkedChildren = _c.checkedChildren, unCheckedChildren = _c.unCheckedChildren, rtl = _c.rtl, isPreview = _c.isPreview, renderPreview = _c.renderPreview, locale = _c.locale, onChange = _c.onChange, others = __rest(_c, ["prefix", "className", "disabled", "readOnly", "size", "loading", "autoWidth", "checkedChildren", "unCheckedChildren", "rtl", "isPreview", "renderPreview", "locale", "onChange"]);
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
            var previewCls = classNames(className, (_b = {},
                _b["".concat(prefix, "form-preview")] = true,
                _b));
            if (typeof renderPreview === 'function') {
                return (React.createElement("div", __assign({ className: previewCls }, others), renderPreview(checked, this.props)));
            }
            return (React.createElement("p", __assign({ className: previewCls }, others), children || locale[status]));
        }
        return (React.createElement("div", __assign({ role: "switch", dir: rtl ? 'rtl' : undefined, tabIndex: 0 }, others, { className: classes }, attrs, { "aria-checked": checked }),
            React.createElement("div", { className: "".concat(prefix, "switch-btn") }, loading && React.createElement(Icon, { type: "loading", className: "".concat(prefix, "switch-inner-icon") })),
            React.createElement("div", { className: "".concat(prefix, "switch-children") }, children)));
    };
    Switch.displayName = 'Switch';
    Switch.propTypes = __assign(__assign({}, ConfigProvider.propTypes), { name: PropTypes.string, prefix: PropTypes.string, rtl: PropTypes.bool, pure: PropTypes.bool, className: PropTypes.string, style: PropTypes.object, checkedChildren: PropTypes.any, unCheckedChildren: PropTypes.any, onChange: PropTypes.func, checked: PropTypes.bool, defaultChecked: PropTypes.bool, disabled: PropTypes.bool, loading: PropTypes.bool, size: PropTypes.oneOf(['medium', 'small']), onClick: PropTypes.func, onKeyDown: PropTypes.func, isPreview: PropTypes.bool, renderPreview: PropTypes.func, autoWidth: PropTypes.bool, locale: PropTypes.object });
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
