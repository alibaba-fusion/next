import { __assign, __extends, __read, __spreadArray } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import ConfigProvider from '../config-provider';
import { func } from '../util';
import zhCN from '../locale/zh-cn';
var Base = /** @class */ (function (_super) {
    __extends(Base, _super);
    function Base() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
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
        _this.handleKeyDownFromClear = function (e) {
            if (e.keyCode === 13) {
                _this.onClear(e);
            }
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
            // @ts-expect-error 兼容 IE
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
    /**
     * abstract
     */
    Base.prototype.getValueLength = function (value) {
        return 0;
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
                ((len === maxLength || len === maxLength + 1) &&
                    e.keyCode !== 8 &&
                    e.keyCode !== 46))) {
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
    Base.prototype.onClear = function (e) {
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
    Base.prototype.renderLength = function () {
        var _a;
        var _b = this.props, maxLength = _b.maxLength, showLimitHint = _b.showLimitHint, prefix = _b.prefix, rtl = _b.rtl;
        var len = maxLength > 0 && this.state.value ? this.getValueLength(this.state.value) : 0;
        var classesLenWrap = classNames((_a = {},
            _a["".concat(prefix, "input-len")] = true,
            _a["".concat(prefix, "error")] = len > maxLength,
            _a));
        var content = rtl ? "".concat(maxLength, "/").concat(len) : "".concat(len, "/").concat(maxLength);
        return maxLength && showLimitHint ? (React.createElement("span", { className: classesLenWrap }, content)) : null;
    };
    Base.prototype.getClass = function () {
        var _a;
        var _b = this.props, disabled = _b.disabled, state = _b.state, prefix = _b.prefix;
        return classNames((_a = {},
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
    Base.propTypes = __assign(__assign({}, ConfigProvider.propTypes), { value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), onChange: PropTypes.func, onKeyDown: PropTypes.func, disabled: PropTypes.bool, maxLength: PropTypes.number, showLimitHint: PropTypes.bool, cutString: PropTypes.bool, readOnly: PropTypes.bool, trim: PropTypes.bool, placeholder: PropTypes.string, onFocus: PropTypes.func, onBlur: PropTypes.func, getValueLength: PropTypes.func, inputStyle: PropTypes.object, className: PropTypes.string, style: PropTypes.object, htmlType: PropTypes.string, name: PropTypes.string, rtl: PropTypes.bool, state: PropTypes.oneOf(['error', 'loading', 'success', 'warning']), locale: PropTypes.object, isPreview: PropTypes.bool, renderPreview: PropTypes.func, size: PropTypes.oneOf(['small', 'medium', 'large']), composition: PropTypes.bool, onCompositionStart: PropTypes.func, onCompositionEnd: PropTypes.func });
    Base.defaultProps = {
        disabled: false,
        prefix: 'next-',
        size: 'medium',
        maxLength: undefined,
        showLimitHint: false,
        cutString: true,
        readOnly: false,
        isPreview: false,
        trim: false,
        composition: false,
        onFocus: func.noop,
        onBlur: func.noop,
        onChange: func.noop,
        onKeyDown: func.noop,
        getValueLength: func.noop,
        onCompositionStart: func.noop,
        onCompositionEnd: func.noop,
        locale: zhCN.Input,
    };
    return Base;
}(React.Component));
export default polyfill(Base);
