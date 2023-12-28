"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var mixin_ui_state_1 = require("../mixin-ui-state");
var config_provider_1 = require("../config-provider");
var with_context_1 = require("./with-context");
var util_1 = require("../util");
var makeChain = util_1.func.makeChain, noop = util_1.func.noop;
/**
 * Radio
 * @order 1
 */
var Radio = /** @class */ (function (_super) {
    tslib_1.__extends(Radio, _super);
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
        var shallowEqual = util_1.obj.shallowEqual;
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
        /* eslint-disable no-unused-vars */
        var _d = this.props, id = _d.id, className = _d.className, children = _d.children, style = _d.style, label = _d.label, onMouseEnter = _d.onMouseEnter, onMouseLeave = _d.onMouseLeave, tabIndex = _d.tabIndex, rtl = _d.rtl, name = _d.name, isPreview = _d.isPreview, renderPreview = _d.renderPreview, value = _d.value, context = _d.context, otherProps = tslib_1.__rest(_d, ["id", "className", "children", "style", "label", "onMouseEnter", "onMouseLeave", "tabIndex", "rtl", "name", "isPreview", "renderPreview", "value", "context"]);
        var checked = !!this.state.checked;
        var disabled = this.disabled;
        var isButton = context.isButton;
        var prefix = context.prefix || this.props.prefix;
        var others = util_1.obj.pickOthers(Radio.propTypes, otherProps);
        var othersData = util_1.obj.pickAttrsWith(others, 'data-');
        if (isPreview) {
            var previewCls = (0, classnames_1.default)(className, "".concat(prefix, "form-preview"));
            if ('renderPreview' in this.props) {
                return (react_1.default.createElement("div", tslib_1.__assign({ id: id, dir: rtl ? 'rtl' : 'ltr' }, others, { className: previewCls }), renderPreview(checked, this.props)));
            }
            return (react_1.default.createElement("p", tslib_1.__assign({ id: id, dir: rtl ? 'rtl' : 'ltr' }, others, { className: previewCls }), checked && (children || label || value)));
        }
        var input = (react_1.default.createElement("input", tslib_1.__assign({}, util_1.obj.pickOthers(othersData, others), { name: name, id: id, tabIndex: tabIndex, disabled: disabled, checked: checked, type: "radio", onChange: this.onChange, "aria-checked": checked, className: "".concat(prefix, "radio-input"), ref: function (e) {
                _this.radioRef = e;
            } })));
        // disabled do not hove focus state
        if (!disabled) {
            input = this.getStateElement(input);
        }
        var cls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "radio")] = true,
            _a.checked = checked,
            _a.disabled = disabled,
            _a[this.getStateClassName()] = true,
            _a));
        var clsInner = (0, classnames_1.default)((_b = {},
            _b["".concat(prefix, "radio-inner")] = true,
            _b.press = checked,
            _b.unpress = !checked,
            _b));
        var clsWrapper = (0, classnames_1.default)((_c = {},
            _c["".concat(prefix, "radio-wrapper")] = true,
            _c[className] = !!className,
            _c.checked = checked,
            _c.disabled = disabled,
            _c[this.getStateClassName()] = true,
            _c));
        var childrenCls = "".concat(prefix, "radio-label");
        var radioComp = !isButton ? (react_1.default.createElement("span", { className: cls },
            react_1.default.createElement("span", { className: clsInner }),
            input)) : (react_1.default.createElement("span", { className: "".concat(prefix, "radio-single-input") }, input));
        return (react_1.default.createElement("label", tslib_1.__assign({}, othersData, { dir: rtl ? 'rtl' : 'ltr', style: style, "aria-checked": checked, "aria-disabled": disabled, className: clsWrapper, onMouseEnter: disabled ? onMouseEnter : makeChain(this._onUIMouseEnter, onMouseEnter), onMouseLeave: disabled ? onMouseLeave : makeChain(this._onUIMouseLeave, onMouseLeave) }),
            radioComp,
            [children, label].map(function (d, i) {
                return d !== undefined ? (react_1.default.createElement("span", { key: i, className: childrenCls }, d)) : null;
            })));
    };
    Radio.displayName = 'Radio';
    Radio.propTypes = tslib_1.__assign(tslib_1.__assign({}, config_provider_1.default.propTypes), { 
        /**
         * 自定义类名
         */
        className: prop_types_1.default.string, 
        /**
         * 组件input的id
         */
        id: prop_types_1.default.string, 
        /**
         * 自定义内敛样式
         */
        style: prop_types_1.default.object, 
        /**
         * 设置radio是否选中
         */
        checked: prop_types_1.default.bool, 
        /**
         * 设置radio是否默认选中
         */
        defaultChecked: prop_types_1.default.bool, 
        /**
         * 通过属性配置label
         */
        label: prop_types_1.default.node, 
        /**
         * 状态变化时触发的事件
         * @param {Boolean} checked 是否选中
         * @param {Event} e Dom 事件对象
         */
        onChange: prop_types_1.default.func, 
        /**
         * 鼠标进入enter事件
         * @param {Event} e Dom 事件对象
         */
        onMouseEnter: prop_types_1.default.func, 
        /**
         * 鼠标离开事件
         * @param {Event} e Dom 事件对象
         */
        onMouseLeave: prop_types_1.default.func, 
        /**
         * radio是否被禁用
         */
        disabled: prop_types_1.default.bool, 
        /**
         * radio 的value
         */
        value: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number, prop_types_1.default.bool]), 
        /**
         * name
         */
        name: prop_types_1.default.string, 
        /**
         * 是否为预览态
         */
        isPreview: prop_types_1.default.bool, 
        /**
         * 预览态模式下渲染的内容
         * @param {Boolean} checked 是否选中
         * @param {Object} props 所有传入的参数
         * @returns {reactNode} Element 渲染内容
         */
        renderPreview: prop_types_1.default.func });
    Radio.defaultProps = {
        onChange: noop,
        onMouseLeave: noop,
        onMouseEnter: noop,
        tabIndex: 0,
        prefix: 'next-',
        isPreview: false,
    };
    Radio.contextTypes = {
        onChange: prop_types_1.default.func,
        __group__: prop_types_1.default.bool,
        isButton: prop_types_1.default.bool,
        selectedValue: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number, prop_types_1.default.bool]),
        disabled: prop_types_1.default.bool,
    };
    return Radio;
}(mixin_ui_state_1.default));
exports.default = config_provider_1.default.config((0, with_context_1.default)((0, react_lifecycles_compat_1.polyfill)(Radio)));
