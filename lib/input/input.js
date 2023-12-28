"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var icon_1 = require("../icon");
var util_1 = require("../util");
var base_1 = require("./base");
var group_1 = require("./group");
// preventDefault here can stop onBlur to keep focus state
function preventDefault(e) {
    e.preventDefault();
}
/** Input */
var Input = /** @class */ (function (_super) {
    tslib_1.__extends(Input, _super);
    function Input(props) {
        var _this = _super.call(this, props) || this;
        _this.handleKeyDown = function (e) {
            if (e.keyCode === 13) {
                _this.props.onPressEnter(e);
            }
            _this.onKeyDown(e);
        };
        _this.handleKeyDownFromClear = function (e) {
            if (e.keyCode === 13) {
                _this.onClear(e);
            }
        };
        var value;
        if ('value' in props) {
            value = props.value;
        }
        else {
            value = props.defaultValue;
        }
        _this.state = {
            value: typeof value === 'undefined' ? '' : value,
        };
        return _this;
    }
    // `Enter` was considered to be two chars in chrome , but one char in ie.
    // so we make all `Enter` to be two chars
    Input.prototype.getValueLength = function (value) {
        var nv = "".concat(value);
        var strLen = this.props.getValueLength(nv);
        if (typeof strLen !== 'number') {
            strLen = nv.length;
        }
        return strLen;
    };
    Input.prototype.renderControl = function () {
        var _a;
        var _this = this;
        var _b = this.props, hasClear = _b.hasClear, readOnly = _b.readOnly, state = _b.state, prefix = _b.prefix, hint = _b.hint, extra = _b.extra, locale = _b.locale, disabled = _b.disabled, hoverShowClear = _b.hoverShowClear;
        var lenWrap = this.renderLength();
        var stateWrap = null;
        if (state === 'success') {
            stateWrap = react_1.default.createElement(icon_1.default, { type: "success-filling", className: "".concat(prefix, "input-success-icon") });
        }
        else if (state === 'loading') {
            stateWrap = react_1.default.createElement(icon_1.default, { type: "loading", className: "".concat(prefix, "input-loading-icon") });
        }
        else if (state === 'warning') {
            stateWrap = react_1.default.createElement(icon_1.default, { type: "warning", className: "".concat(prefix, "input-warning-icon") });
        }
        var clearWrap = null;
        // showClear属性应该与disable属性为互斥状态
        var showClear = hasClear && !readOnly && !!"".concat(this.state.value) && !disabled;
        if (hint || showClear) {
            var hintIcon = null;
            if (hint) {
                if (typeof hint === 'string') {
                    hintIcon = react_1.default.createElement(icon_1.default, { type: hint, className: "".concat(prefix, "input-hint") });
                }
                else if ((0, react_1.isValidElement)(hint)) {
                    hintIcon = (0, react_1.cloneElement)(hint, {
                        className: (0, classnames_1.default)(hint.props.className, "".concat(prefix, "input-hint")),
                    });
                }
                else {
                    hintIcon = hint;
                }
            }
            else {
                var cls = (0, classnames_1.default)((_a = {},
                    _a["".concat(prefix, "input-hint")] = true,
                    _a["".concat(prefix, "input-clear-icon")] = true,
                    _a["".concat(prefix, "input-hover-show")] = hoverShowClear,
                    _a));
                hintIcon = (react_1.default.createElement(icon_1.default, { type: "delete-filling", role: "button", tabIndex: "0", className: cls, "aria-label": locale.clear, onClick: this.onClear.bind(this), onMouseDown: preventDefault, onKeyDown: this.handleKeyDownFromClear }));
            }
            clearWrap = (react_1.default.createElement("span", { className: "".concat(prefix, "input-hint-wrap") },
                hasClear && hint ? (react_1.default.createElement(icon_1.default, { type: "delete-filling", role: "button", tabIndex: "0", className: "".concat(prefix, "input-clear ").concat(prefix, "input-clear-icon"), "aria-label": locale.clear, onClick: this.onClear.bind(this), onMouseDown: preventDefault, onKeyDown: this.handleKeyDownFromClear })) : null,
                hintIcon));
        }
        if (state === 'loading') {
            clearWrap = null;
        }
        return clearWrap || lenWrap || stateWrap || extra ? (react_1.default.createElement("span", { onClick: function () { return _this.focus(); }, className: "".concat(prefix, "input-control") },
            clearWrap,
            lenWrap,
            stateWrap,
            extra)) : null;
    };
    Input.prototype.renderLabel = function () {
        var _a = this.props, label = _a.label, prefix = _a.prefix, id = _a.id;
        return label ? (react_1.default.createElement("label", { className: "".concat(prefix, "input-label"), htmlFor: id }, label)) : null;
    };
    Input.prototype.renderInner = function (inner, cls) {
        return inner ? react_1.default.createElement("span", { className: cls }, inner) : null;
    };
    Input.prototype.onClear = function (e) {
        if (this.props.disabled) {
            return;
        }
        // 非受控模式清空内部数据
        if (!('value' in this.props)) {
            this.setState({
                value: '',
            });
        }
        this.props.onChange('', e, 'clear');
        this.focus();
    };
    Input.prototype.render = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        var _h = this.props, size = _h.size, htmlType = _h.htmlType, htmlSize = _h.htmlSize, autoComplete = _h.autoComplete, autoFocus = _h.autoFocus, disabled = _h.disabled, style = _h.style, innerBefore = _h.innerBefore, innerAfter = _h.innerAfter, innerBeforeClassName = _h.innerBeforeClassName, innerAfterClassName = _h.innerAfterClassName, className = _h.className, hasBorder = _h.hasBorder, prefix = _h.prefix, isPreview = _h.isPreview, renderPreview = _h.renderPreview, addonBefore = _h.addonBefore, addonAfter = _h.addonAfter, addonTextBefore = _h.addonTextBefore, addonTextAfter = _h.addonTextAfter, inputRender = _h.inputRender, rtl = _h.rtl, composition = _h.composition;
        var hasAddon = addonBefore || addonAfter || addonTextBefore || addonTextAfter;
        var cls = (0, classnames_1.default)(this.getClass(), (_a = {},
            _a["".concat(prefix).concat(size)] = true,
            _a["".concat(prefix, "hidden")] = this.props.htmlType === 'hidden',
            _a["".concat(prefix, "noborder")] = !hasBorder || this.props.htmlType === 'file',
            _a["".concat(prefix, "input-group-auto-width")] = hasAddon,
            _a["".concat(prefix, "disabled")] = disabled,
            _a[className] = !!className && !hasAddon,
            _a));
        var innerCls = "".concat(prefix, "input-inner");
        var innerBeforeCls = (0, classnames_1.default)((_b = {},
            _b[innerCls] = true,
            _b["".concat(prefix, "before")] = true,
            _b[innerBeforeClassName] = innerBeforeClassName,
            _b));
        var innerAfterCls = (0, classnames_1.default)((_c = {},
            _c[innerCls] = true,
            _c["".concat(prefix, "after")] = true,
            _c["".concat(prefix, "input-inner-text")] = typeof innerAfter === 'string',
            _c[innerAfterClassName] = innerAfterClassName,
            _c));
        var previewCls = (0, classnames_1.default)((_d = {},
            _d["".concat(prefix, "form-preview")] = true,
            _d[className] = !!className,
            _d));
        var props = this.getProps();
        // custom data attributes are assigned to the top parent node
        // data-类自定义数据属性分配到顶层node节点
        var dataProps = util_1.obj.pickAttrsWith(this.props, 'data-');
        // Custom props are transparently transmitted to the core input node by default
        // 自定义属性默认透传到核心node节点：input
        var others = util_1.obj.pickOthers(Object.assign({}, dataProps, Input.propTypes), this.props);
        if (isPreview) {
            var value = props.value;
            var label = this.props.label;
            if (typeof renderPreview === 'function') {
                return (react_1.default.createElement("div", tslib_1.__assign({}, others, { className: previewCls }), renderPreview(value, this.props)));
            }
            return (react_1.default.createElement("div", tslib_1.__assign({}, others, { className: previewCls }),
                addonBefore || addonTextBefore,
                label,
                innerBefore,
                value,
                innerAfter,
                addonAfter || addonTextAfter));
        }
        var compositionProps = {};
        if (composition) {
            compositionProps.onCompositionStart = this.handleCompositionStart;
            compositionProps.onCompositionEnd = this.handleCompositionEnd;
        }
        var inputEl = (react_1.default.createElement("input", tslib_1.__assign({}, others, props, compositionProps, { height: "100%", type: htmlType, size: htmlSize, autoFocus: autoFocus, autoComplete: autoComplete, onKeyDown: this.handleKeyDown, ref: this.saveRef })));
        var inputWrap = (react_1.default.createElement("span", tslib_1.__assign({}, dataProps, { dir: rtl ? 'rtl' : undefined, className: cls, style: hasAddon ? undefined : style }),
            this.renderLabel(),
            this.renderInner(innerBefore, innerBeforeCls),
            inputRender(inputEl),
            this.renderInner(innerAfter, innerAfterCls),
            this.renderControl()));
        var groupCls = (0, classnames_1.default)((_e = {},
            _e["".concat(prefix, "input-group-text")] = true,
            _e["".concat(prefix).concat(size)] = !!size,
            _e["".concat(prefix, "disabled")] = disabled,
            _e));
        var addonBeforeCls = (0, classnames_1.default)((_f = {},
            _f[groupCls] = addonTextBefore,
            _f));
        var addonAfterCls = (0, classnames_1.default)((_g = {},
            _g[groupCls] = addonTextAfter,
            _g));
        if (hasAddon) {
            return (react_1.default.createElement(group_1.default, tslib_1.__assign({}, dataProps, { prefix: prefix, className: className, style: style, disabled: disabled, addonBefore: addonBefore || addonTextBefore, addonBeforeClassName: addonBeforeCls, addonAfter: addonAfter || addonTextAfter, addonAfterClassName: addonAfterCls }), inputWrap));
        }
        return inputWrap;
    };
    Input.displayName = 'Input';
    Input.getDerivedStateFromProps = base_1.default.getDerivedStateFromProps;
    Input.propTypes = tslib_1.__assign(tslib_1.__assign({}, base_1.default.propTypes), { 
        /**
         * label
         */
        label: prop_types_1.default.node, 
        /**
         * 是否出现clear按钮
         */
        hasClear: prop_types_1.default.bool, 
        /**
         * 是否有边框
         */
        hasBorder: prop_types_1.default.bool, 
        /**
         * 状态
         * @enumdesc 错误, 校验中, 成功, 警告
         */
        state: prop_types_1.default.oneOf(['error', 'loading', 'success', 'warning']), 
        /**
         * 按下回车的回调
         */
        onPressEnter: prop_types_1.default.func, 
        /**
         * 原生type
         */
        htmlType: prop_types_1.default.string, htmlSize: prop_types_1.default.string, 
        /**
         * 水印 (Icon的type类型，和hasClear占用一个地方)
         */
        hint: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.node]), 
        /**
         * 文字前附加内容
         */
        innerBefore: prop_types_1.default.node, 
        /**
         * 文字后附加内容
         */
        innerAfter: prop_types_1.default.node, 
        /**
         * 输入框前附加内容
         */
        addonBefore: prop_types_1.default.node, 
        /**
         * 输入框后附加内容
         */
        addonAfter: prop_types_1.default.node, 
        /**
         * 输入框前附加文字
         */
        addonTextBefore: prop_types_1.default.node, 
        /**
         * 输入框后附加文字
         */
        addonTextAfter: prop_types_1.default.node, 
        /**
         * (原生input支持)
         */
        autoComplete: prop_types_1.default.string, 
        /**
         * 自动聚焦(原生input支持)
         */
        autoFocus: prop_types_1.default.bool, inputRender: prop_types_1.default.func, extra: prop_types_1.default.node, innerBeforeClassName: prop_types_1.default.string, innerAfterClassName: prop_types_1.default.string, 
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
         * hover展示clear (配合 hasClear=true使用)
         * @version 1.24
         */
        hoverShowClear: prop_types_1.default.bool });
    Input.defaultProps = tslib_1.__assign(tslib_1.__assign({}, base_1.default.defaultProps), { autoComplete: 'off', hasBorder: true, isPreview: false, hoverShowClear: false, onPressEnter: util_1.func.noop, inputRender: function (el) { return el; } });
    return Input;
}(base_1.default));
exports.default = Input;
