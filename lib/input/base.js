"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var config_provider_1 = require("../config-provider");
var util_1 = require("../util");
var zh_cn_1 = require("../locale/zh-cn");
var Base = /** @class */ (function (_super) {
    tslib_1.__extends(Base, _super);
    function Base() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.handleCompositionStart = function (e) {
            _this.setState({
                composition: true,
            });
            _this.props.onCompositionStart(e);
        };
        _this.handleCompositionEnd = function (e) {
            _this.setState({
                composition: false,
            });
            _this.props.onCompositionEnd(e);
            var value = e.target.value;
            _this.props.onChange(value, e);
        };
        _this.saveRef = function (input) {
            _this.inputRef = input;
        };
        return _this;
    }
    Base.getDerivedStateFromProps = function (nextProps, prevState) {
        if ('value' in nextProps && nextProps.value !== prevState.value && !prevState.composition) {
            var value = nextProps.value;
            return {
                value: value === undefined || value === null ? '' : value,
            };
        }
        return null;
    };
    Base.prototype.ieHack = function (value) {
        return value;
    };
    Base.prototype.onChange = function (e) {
        if ('stopPropagation' in e) {
            e.stopPropagation();
        }
        else if ('cancelBubble' in e) {
            e.cancelBubble();
        }
        var value = e.target.value;
        if (this.props.trim) {
            value = value.trim();
        }
        value = this.ieHack(value);
        // not controlled
        if (!('value' in this.props) || this.state.composition) {
            this.setState({
                value: value,
            });
        }
        if (this.state.composition) {
            return;
        }
        // Number('') = 0
        if (value && this.props.htmlType === 'number') {
            value = Number(value);
        }
        this.props.onChange(value, e);
    };
    Base.prototype.onKeyDown = function (e) {
        var value = e.target.value;
        var maxLength = this.props.maxLength;
        var len = maxLength > 0 && value ? this.getValueLength(value) : 0;
        var opts = {};
        // has enable trim and has input whitespace
        if (this.props.trim && e.keyCode === 32) {
            opts.beTrimed = true;
        }
        // has defined maxLength and has over max length and has not input backspace and delete
        if (maxLength > 0 &&
            (len > maxLength + 1 ||
                ((len === maxLength || len === maxLength + 1) && e.keyCode !== 8 && e.keyCode !== 46))) {
            opts.overMaxLength = true;
        }
        this.props.onKeyDown(e, opts);
    };
    Base.prototype.onFocus = function (e) {
        this.setState({
            focus: true,
        });
        this.props.onFocus(e);
    };
    Base.prototype.onBlur = function (e) {
        this.setState({
            focus: false,
        });
        this.props.onBlur(e);
    };
    Base.prototype.renderLength = function () {
        var _a;
        var _b = this.props, maxLength = _b.maxLength, showLimitHint = _b.showLimitHint, prefix = _b.prefix, rtl = _b.rtl;
        var len = maxLength > 0 && this.state.value ? this.getValueLength(this.state.value) : 0;
        var classesLenWrap = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "input-len")] = true,
            _a["".concat(prefix, "error")] = len > maxLength,
            _a));
        var content = rtl ? "".concat(maxLength, "/").concat(len) : "".concat(len, "/").concat(maxLength);
        return maxLength && showLimitHint ? react_1.default.createElement("span", { className: classesLenWrap }, content) : null;
    };
    Base.prototype.renderControl = function () {
        var _this = this;
        var lenWrap = this.renderLength();
        return lenWrap ? (react_1.default.createElement("span", { onClick: function () { return _this.focus(); }, className: "".concat(this.props.prefix, "input-control") }, lenWrap)) : null;
    };
    Base.prototype.getClass = function () {
        var _a;
        var _b = this.props, disabled = _b.disabled, state = _b.state, prefix = _b.prefix;
        return (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "input")] = true,
            _a["".concat(prefix, "disabled")] = !!disabled,
            _a["".concat(prefix, "error")] = state === 'error',
            _a["".concat(prefix, "warning")] = state === 'warning',
            _a["".concat(prefix, "focus")] = this.state.focus,
            _a));
    };
    Base.prototype.getProps = function () {
        var _a = this.props, placeholder = _a.placeholder, inputStyle = _a.inputStyle, disabled = _a.disabled, readOnly = _a.readOnly, cutString = _a.cutString, maxLength = _a.maxLength, name = _a.name, onCompositionStart = _a.onCompositionStart, onCompositionEnd = _a.onCompositionEnd;
        var props = {
            style: inputStyle,
            placeholder: placeholder,
            disabled: disabled,
            readOnly: readOnly,
            name: name,
            maxLength: cutString ? maxLength : undefined,
            value: this.state.value,
            onChange: this.onChange.bind(this),
            onBlur: this.onBlur.bind(this),
            onFocus: this.onFocus.bind(this),
            onCompositionStart: onCompositionStart,
            onCompositionEnd: onCompositionEnd,
        };
        // fix accessibility：auto process status of aria disabled
        if (disabled) {
            props['aria-disabled'] = disabled;
        }
        return props;
    };
    Base.prototype.getInputNode = function () {
        return this.inputRef;
    };
    Base.prototype.focus = function (start, end, preventScroll) {
        if (preventScroll === void 0) { preventScroll = false; }
        this.inputRef.focus({ preventScroll: preventScroll });
        if (typeof start === 'number') {
            this.inputRef.selectionStart = start;
        }
        if (typeof end === 'number') {
            this.inputRef.selectionEnd = end;
        }
    };
    Base.propTypes = tslib_1.__assign(tslib_1.__assign({}, config_provider_1.default.propTypes), { 
        /**
         * 当前值
         */
        value: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]), 
        /**
         * 初始化值
         */
        defaultValue: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]), 
        /**
         * 发生改变的时候触发的回调
         * @param {String} value 数据
         * @param {Event} e DOM事件对象
         */
        onChange: prop_types_1.default.func, 
        /**
         * 键盘按下的时候触发的回调
         * @param {Event} e DOM事件对象
         * @param {Object} opts 可扩展的附加信息：<br> - opts.overMaxLength: {Boolean} 已超出最大长度<br> - opts.beTrimed: {Boolean} 输入的空格被清理
         */
        onKeyDown: prop_types_1.default.func, 
        /**
         * 禁用状态
         */
        disabled: prop_types_1.default.bool, 
        /**
         * 最大长度
         */
        maxLength: prop_types_1.default.number, 
        /**
         * 是否展现最大长度样式（旧版本为 hasLimitHint，目前仍兼容旧用法，将在2.x直接废弃）
         */
        showLimitHint: prop_types_1.default.bool, 
        /**
         * 当设置了maxLength时，是否截断超出字符串
         */
        cutString: prop_types_1.default.bool, 
        /**
         * 只读
         */
        readOnly: prop_types_1.default.bool, 
        /**
         * onChange返回会自动去除头尾空字符
         */
        trim: prop_types_1.default.bool, 
        /**
         * 输入提示
         */
        placeholder: prop_types_1.default.string, 
        /**
         * 获取焦点时候触发的回调
         * @param {Event} e DOM事件对象
         */
        onFocus: prop_types_1.default.func, 
        /**
         * 失去焦点时候触发的回调
         * @param {Event} e DOM事件对象
         */
        onBlur: prop_types_1.default.func, 
        /**
         * 自定义字符串计算长度方式
         * @param {String} value 数据
         * @returns {Number} 自定义长度
         */
        getValueLength: prop_types_1.default.func, inputStyle: prop_types_1.default.object, 
        /**
         * 自定义class
         */
        className: prop_types_1.default.string, 
        /**
         * 自定义内联样式
         */
        style: prop_types_1.default.object, 
        /**
         * 原生type
         */
        htmlType: prop_types_1.default.string, 
        /**
         * name
         */
        name: prop_types_1.default.string, rtl: prop_types_1.default.bool, state: prop_types_1.default.oneOf(['error', 'loading', 'success', 'warning']), locale: prop_types_1.default.object, 
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
         * 尺寸
         * @enumdesc 小, 中, 大
         */
        size: prop_types_1.default.oneOf(['small', 'medium', 'large']), 
        /**
         * 开启后会过滤输入法中间字母状态，文字输入完成后才会触发 onChange
         * @version 1.23
         */
        composition: prop_types_1.default.bool, onCompositionStart: prop_types_1.default.func, onCompositionEnd: prop_types_1.default.func });
    Base.defaultProps = {
        disabled: false,
        prefix: 'next-',
        size: 'medium',
        maxLength: null,
        showLimitHint: false,
        cutString: true,
        readOnly: false,
        isPreview: false,
        trim: false,
        composition: false,
        onFocus: util_1.func.noop,
        onBlur: util_1.func.noop,
        onChange: util_1.func.noop,
        onKeyDown: util_1.func.noop,
        getValueLength: util_1.func.noop,
        onCompositionStart: util_1.func.noop,
        onCompositionEnd: util_1.func.noop,
        locale: zh_cn_1.default.Input,
    };
    return Base;
}(react_1.default.Component));
exports.default = (0, react_lifecycles_compat_1.polyfill)(Base);
