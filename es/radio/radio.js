import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import UIState from '../mixin-ui-state';
import ConfigProvider from '../config-provider';
import withContext from './with-context';
import { obj, func } from '../util';
var makeChain = func.makeChain, noop = func.noop;
var Radio = /** @class */ (function (_super) {
    __extends(Radio, _super);
    function Radio(props) {
        var _this = _super.call(this, props) || this;
        var context = props.context;
        var checked;
        if (context.__group__) {
            checked = context.selectedValue === props.value;
        }
        else if ('checked' in props) {
            checked = props.checked;
        }
        else {
            checked = props.defaultChecked;
        }
        _this.state = { checked: checked };
        _this.radioRef = null;
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }
    Radio.getDerivedStateFromProps = function (nextProps) {
        var nextContext = nextProps.context;
        if (nextContext.__group__ && 'selectedValue' in nextContext) {
            return {
                checked: nextContext.selectedValue === nextProps.value,
            };
        }
        else if ('checked' in nextProps) {
            return {
                checked: nextProps.checked,
            };
        }
        return null;
    };
    Object.defineProperty(Radio.prototype, "disabled", {
        get: function () {
            var props = this.props;
            var context = props.context;
            var disabled = props.disabled || (context.__group__ && 'disabled' in context && context.disabled);
            return disabled;
        },
        enumerable: false,
        configurable: true
    });
    Radio.prototype.shouldComponentUpdate = function (nextProps, nextState, nextContext) {
        var shallowEqual = obj.shallowEqual;
        return (!shallowEqual(this.props, nextProps) ||
            !shallowEqual(this.state, nextState) ||
            !shallowEqual(this.context, nextContext));
    };
    Radio.prototype.componentDidUpdate = function () {
        // when disabled, reset UIState
        if (this.disabled) {
            // only class has an impact, no effect on visual
            this.resetUIState();
        }
    };
    Radio.prototype.onChange = function (e) {
        var checked = e.target.checked;
        var _a = this.props, context = _a.context, value = _a.value;
        if (context.__group__) {
            context.onChange(value, e);
        }
        else if (this.state.checked !== checked) {
            if (!('checked' in this.props)) {
                this.setState({
                    checked: checked,
                });
            }
            this.props.onChange(checked, e);
        }
    };
    Radio.prototype.focus = function () {
        if (this.radioRef) {
            this.radioRef.focus();
            this._onUIFocus();
        }
    };
    Radio.prototype.render = function () {
        var _a, _b, _c;
        var _this = this;
        var _d = this.props, id = _d.id, className = _d.className, children = _d.children, style = _d.style, label = _d.label, onMouseEnter = _d.onMouseEnter, onMouseLeave = _d.onMouseLeave, tabIndex = _d.tabIndex, rtl = _d.rtl, name = _d.name, isPreview = _d.isPreview, renderPreview = _d.renderPreview, value = _d.value, context = _d.context, otherProps = __rest(_d, ["id", "className", "children", "style", "label", "onMouseEnter", "onMouseLeave", "tabIndex", "rtl", "name", "isPreview", "renderPreview", "value", "context"]);
        var checked = !!this.state.checked;
        var disabled = this.disabled;
        var isButton = context.isButton;
        var prefix = this.props.prefix;
        var others = obj.pickOthers(Radio.propTypes, otherProps);
        var othersData = obj.pickAttrsWith(others, 'data-');
        if (isPreview) {
            var previewCls = classnames(className, "".concat(prefix, "form-preview"));
            if ('renderPreview' in this.props) {
                return (React.createElement("div", __assign({ id: id, dir: rtl ? 'rtl' : 'ltr' }, others, { className: previewCls }), renderPreview(checked, this.props)));
            }
            return (React.createElement("p", __assign({ id: id, dir: rtl ? 'rtl' : 'ltr' }, others, { className: previewCls }), checked && (children || label || value)));
        }
        var input = (React.createElement("input", __assign({}, obj.pickOthers(othersData, others), { name: name, id: id, tabIndex: tabIndex, disabled: disabled, checked: checked, type: "radio", onChange: this.onChange, "aria-checked": checked, className: "".concat(prefix, "radio-input"), ref: function (e) {
                _this.radioRef = e;
            } })));
        // disabled do not hove focus state
        if (!disabled) {
            input = this.getStateElement(input);
        }
        var cls = classnames((_a = {},
            _a["".concat(prefix, "radio")] = true,
            _a.checked = checked,
            _a.disabled = disabled,
            _a[this.getStateClassName()] = true,
            _a));
        var clsInner = classnames((_b = {},
            _b["".concat(prefix, "radio-inner")] = true,
            _b.press = checked,
            _b.unpress = !checked,
            _b));
        var clsWrapper = classnames(className, (_c = {},
            _c["".concat(prefix, "radio-wrapper")] = true,
            _c.checked = checked,
            _c.disabled = disabled,
            _c[this.getStateClassName()] = true,
            _c));
        var childrenCls = "".concat(prefix, "radio-label");
        var radioComp = !isButton ? (React.createElement("span", { className: cls },
            React.createElement("span", { className: clsInner }),
            input)) : (React.createElement("span", { className: "".concat(prefix, "radio-single-input") }, input));
        return (React.createElement("label", __assign({}, othersData, { dir: rtl ? 'rtl' : 'ltr', style: style, "aria-checked": checked, "aria-disabled": disabled, className: clsWrapper, onMouseEnter: 
            // @ts-expect-error _onUIMouseEnter is not defined
            disabled ? onMouseEnter : makeChain(this._onUIMouseEnter, onMouseEnter), onMouseLeave: 
            // @ts-expect-error _onUIMouseLeave is not defined
            disabled ? onMouseLeave : makeChain(this._onUIMouseLeave, onMouseLeave) }),
            radioComp,
            [children, label].map(function (d, i) {
                return d !== undefined ? (React.createElement("span", { key: i, className: childrenCls }, d)) : null;
            })));
    };
    Radio.displayName = 'Radio';
    Radio.propTypes = __assign(__assign({}, ConfigProvider.propTypes), { className: PropTypes.string, id: PropTypes.string, style: PropTypes.object, checked: PropTypes.bool, defaultChecked: PropTypes.bool, label: PropTypes.node, onChange: PropTypes.func, onMouseEnter: PropTypes.func, onMouseLeave: PropTypes.func, disabled: PropTypes.bool, value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]), name: PropTypes.string, isPreview: PropTypes.bool, renderPreview: PropTypes.func });
    Radio.defaultProps = {
        onChange: noop,
        onMouseLeave: noop,
        onMouseEnter: noop,
        tabIndex: 0,
        prefix: 'next-',
        isPreview: false,
    };
    Radio.contextTypes = {
        onChange: PropTypes.func,
        __group__: PropTypes.bool,
        isButton: PropTypes.bool,
        selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
        disabled: PropTypes.bool,
    };
    return Radio;
}(UIState));
export default ConfigProvider.config(withContext(polyfill(Radio)));
