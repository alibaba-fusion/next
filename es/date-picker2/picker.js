import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import * as PT from 'prop-types';
import SharedPT from './prop-types';
import defaultLocale from '../locale/zh-cn';
import { func, KEYCODE, obj } from '../util';
import { switchInputType, fmtValue, isValueChanged } from './util';
import { DATE_PICKER_TYPE, DATE_INPUT_TYPE, DATE_PICKER_MODE } from './constant';
import Overlay from '../overlay';
import DateInput from './panels/date-input';
import DatePanel from './panels/date-panel';
import RangePanel from './panels/range-panel';
import FooterPanel from './panels/footer-panel';
var Popup = Overlay.Popup;
var pickProps = obj.pickProps, pickOthers = obj.pickOthers;
var renderNode = func.renderNode, checkDate = func.checkDate, checkRangeDate = func.checkRangeDate;
var Picker = /** @class */ (function (_super) {
    __extends(Picker, _super);
    function Picker(props) {
        var _this = _super.call(this, props) || this;
        /**
         * 获取初始值
         */
        _this.getInitValue = function () {
            var props = _this.props;
            var type = props.type, value = props.value, defaultValue = props.defaultValue;
            var val = type === DATE_PICKER_TYPE.RANGE ? [null, null] : null;
            val = 'value' in props ? value : 'defaultValue' in props ? defaultValue : val;
            return _this.checkValue(val);
        };
        /**
         * 获取 RangePicker 输入框初始输入状态
         * @returns {Object} inputState
         * @returns {boolean} inputState.justBeginInput 是否初始输入
         * @returns {number} inputState.inputType 当前输入框
         */
        _this.getInitRangeInputState = function () {
            return {
                justBeginInput: _this.isEnabled(),
                inputType: _this.isEnabled(0) ? DATE_INPUT_TYPE.BEGIN : DATE_INPUT_TYPE.END,
            };
        };
        /**
         * 处理点击文档区域导致的弹层收起逻辑
         * @param {boolean} visible 是否可见
         * @param {string} type 事件类型
         */
        _this.handleVisibleChange = function (visible, targetType) {
            if (['docClick', 'fromTrigger'].indexOf(targetType) > -1) {
                // 弹层收起 触发 Change 逻辑
                if (!visible) {
                    _this.handleChange(_this.state.curValue, 'VISIBLE_CHANGE');
                }
                _this.onVisibleChange(visible);
            }
        };
        _this.checkValue = function (value, strictly, format) {
            return _this.props.type === DATE_PICKER_TYPE.RANGE
                ? checkRangeDate(value, _this.state.inputType, _this.props.disabled, strictly, format)
                : checkDate(value, format);
        };
        _this.handleInputFocus = function (inputType) {
            var inputEl = _this.dateInput && _this.dateInput.input;
            if (_this.state.isRange) {
                inputEl = inputEl && inputEl[inputType];
            }
            inputEl && inputEl.focus();
        };
        _this.handleMouseDown = function (e) {
            e.preventDefault();
        };
        _this.handleInput = function (v, eventType) {
            if (eventType === 'clear') {
                _this.handleChange(v, 'INPUT_CLEAR');
                if (_this.state.isRange) {
                    _this.handleClear();
                }
            }
            else {
                var newState = {
                    inputValue: v,
                    visible: true,
                };
                var curValue = _this.checkValue(v, true, _this.props.format);
                if (curValue !== null) {
                    newState.curValue = curValue;
                }
                _this.setState(newState);
            }
        };
        _this.onPanelChange = function (value, mode) {
            _this.setState({
                panelMode: mode,
            });
            func.invoke(_this.props, 'onPanelChange', [value, mode]);
        };
        _this.handleClear = function () {
            /**
             * 清空输入之后 input 组件内部会让第二个输入框获得焦点
             * 所以这里需要设置 setTimeout 才能让第一个 input 获得焦点
             */
            _this.clearTimeoutId = setTimeout(function () {
                _this.handleInputFocus(0);
            });
            _this.setState({
                inputType: DATE_INPUT_TYPE.BEGIN,
                justBeginInput: _this.isEnabled(),
            });
            _this.onCalendarChange(null);
        };
        _this.shouldSwitchInput = function (value) {
            var _a = _this.state, inputType = _a.inputType, justBeginInput = _a.justBeginInput;
            var idx = justBeginInput ? switchInputType(inputType) : value.indexOf(null);
            if (idx !== -1 && _this.isEnabled(idx)) {
                _this.onInputTypeChange(idx);
                _this.handleInputFocus(idx);
                return true;
            }
            return false;
        };
        /**
         * 获取输入框的禁用状态
         * @param {Number} idx
         * @returns {Boolean}
         */
        _this.isEnabled = function (idx) {
            var disabled = _this.props.disabled;
            return Array.isArray(disabled)
                ? idx === undefined
                    ? !disabled[0] && !disabled[1]
                    : !disabled[idx]
                : !disabled;
        };
        /**
         * check if value has disabled value
         *
         * @param {string|string[]|Dayjs|Dayjs[]} val
         * @returns {Boolean}
         */
        _this.checkValueDisabled = function (val) {
            var disabledDate = _this.props.disabledDate;
            var panelMode = _this.state.panelMode;
            var values = (Array.isArray(val) ? val : [val]).map(function (value) {
                return checkDate(value);
            });
            if (!disabledDate) {
                return false;
            }
            return values.some(function (value) {
                return disabledDate(value, panelMode);
            });
        };
        _this.onKeyDown = function (e) {
            switch (e.keyCode) {
                case KEYCODE.ENTER: {
                    var inputValue = _this.state.inputValue;
                    _this.onClick();
                    if (_this.checkValueDisabled(inputValue)) {
                        // reset inputValue when current inputValue is disabled
                        _this.handleChange(inputValue, 'VISIBLE_CHANGE');
                        return;
                    }
                    _this.handleChange(inputValue, 'KEYDOWN_ENTER');
                    break;
                }
                default:
                    return;
            }
        };
        _this.handleChange = function (v, eventType) {
            var format = _this.props.format;
            var _a = _this.state, isRange = _a.isRange, showOk = _a.showOk, value = _a.value, preValue = _a.preValue;
            var forceEvents = ['KEYDOWN_ENTER', 'CLICK_PRESET', 'CLICK_OK', 'INPUT_CLEAR', 'VISIBLE_CHANGE'];
            var isTemporary = showOk && !forceEvents.includes(eventType);
            // 面板收起时候，将值设置为确认值
            v = eventType === 'VISIBLE_CHANGE' ? value : _this.checkValue(v, !isTemporary);
            _this.setState({
                curValue: v,
                inputValue: fmtValue(v, format),
            });
            if (!isTemporary) {
                _this.setState({
                    value: v,
                }, function () {
                    // 判断当前选择结束，收起面板：
                    // 1. 非 Range 选择
                    // 2. 非 选择预设时间、面板收起、清空输入 操作
                    // 3. 不需要切换输入框
                    var shouldHidePanel = !isRange ||
                        ['CLICK_PRESET', 'VISIBLE_CHANGE', 'INPUT_CLEAR'].includes(eventType) ||
                        !_this.shouldSwitchInput(v);
                    if (shouldHidePanel) {
                        _this.onVisibleChange(false);
                        if (isValueChanged(v, preValue)) {
                            _this.onChange();
                        }
                    }
                });
            }
        };
        _this.onChange = function () {
            var _a = _this, state = _a.state, props = _a.props;
            var format = props.format;
            var value = _this.checkValue('value' in props ? props.value : state.value);
            _this.setState({
                curValue: value,
                preValue: value,
                inputValue: fmtValue(value, format),
            });
            func.invoke(_this.props, 'onChange', _this.getOutputArgs(state.value));
        };
        _this.onCalendarChange = function (values) {
            var _a = _this.props, format = _a.format, onCalendarChange = _a.onCalendarChange;
            if (onCalendarChange) {
                var startValue = values && values[0];
                var endValue = values && values[1];
                var startStr = startValue ? fmtValue(values[0], format) : '';
                var endStr = endValue ? fmtValue(values[1], format) : '';
                onCalendarChange(values, [startStr, endStr]);
            }
        };
        _this.onOk = function () {
            var inputValue = _this.state.inputValue;
            var checkedValue = _this.checkValue(inputValue, true, _this.props.format);
            func.invoke(_this.props, 'onOk', _this.getOutputArgs(checkedValue));
            _this.setState({ value: checkedValue });
            _this.handleChange(checkedValue, 'CLICK_OK');
        };
        _this.onInputTypeChange = function (idx) {
            var _a = _this.state, inputType = _a.inputType, visible = _a.visible;
            if (idx !== inputType) {
                _this.setState({
                    inputType: idx,
                    justBeginInput: !(idx !== null && visible),
                });
            }
        };
        _this.onClick = function () {
            var _a = _this.state, visible = _a.visible, inputType = _a.inputType;
            if (!visible) {
                _this.handleInputFocus(inputType);
            }
        };
        /**
         * 获取 `onChange` 和 `onOk` 方法的输出参数
         * @param {Dayjs} value
         * @returns 默认返回 `Dayjs` 实例和 `format` 格式化的值
         *          如果传了了 `outputFormat` 属性则返回 `outputFormat` 格式化的值
         */
        _this.getOutputArgs = function (value) {
            var _a = _this.props, outputFormat = _a.outputFormat, format = _a.format;
            if (outputFormat) {
                return [fmtValue(value, outputFormat)];
            }
            return [value, fmtValue(value, format)];
        };
        _this.getCurrentAlign = function (_a) {
            var align = _a.align;
            _this.setState({
                align: align,
            });
        };
        _this.getRangeInputOffsetLeft = function () {
            var left = _this.dateInput &&
                _this.dateInput.input &&
                _this.dateInput.input[_this.state.inputType] &&
                _this.dateInput.input[_this.state.inputType].getInputNode().offsetLeft;
            return left;
        };
        _this.getPopupOffsetLeft = function () {
            var inputOffsetLeft = _this.getRangeInputOffsetLeft();
            var popupElement = _this.popupRef.current;
            var popupElementWidth = popupElement ? popupElement.offsetWidth : 0;
            // 弹层宽度大于输入元素长度，只偏移 arrow
            if (popupElementWidth > 1.2 * inputOffsetLeft) {
                return {
                    arrowLeft: inputOffsetLeft,
                    panelLeft: 0,
                };
            }
            else {
                // 否则 panel 整体偏移，arrow 随 panel 整体偏移
                return {
                    arrowLeft: 0,
                    panelLeft: inputOffsetLeft,
                };
            }
        };
        _this.renderArrow = function (left) {
            return React.createElement("div", { key: "arrow", className: "".concat(_this.props.prefix, "range-picker2-arrow"), style: { left: left } });
        };
        var prefix = props.prefix, type = props.type, format = props.format, mode = props.mode, defaultVisible = props.defaultVisible;
        _this.state = {
            panelMode: mode,
            visible: defaultVisible,
        };
        if (type === DATE_PICKER_TYPE.RANGE) {
            var _a = _this.getInitRangeInputState(), inputType = _a.inputType, justBeginInput = _a.justBeginInput;
            _this.state = __assign({ inputType: inputType, justBeginInput: justBeginInput }, _this.state);
        }
        var value = _this.getInitValue();
        _this.state = __assign({ value: value, curValue: value, preValue: value, inputValue: fmtValue(value, format) }, _this.state);
        _this.prefixCls = "".concat(prefix, "date-picker2");
        _this.popupRef = React.createRef();
        return _this;
    }
    Picker.getDerivedStateFromProps = function (props, state) {
        var type = props.type, showTime = props.showTime, showOk = props.showOk, disabled = props.disabled, format = props.format, mode = props.mode;
        var isRange = type === DATE_PICKER_TYPE.RANGE;
        var newState = {
            isRange: isRange,
            showOk: !!(showOk || showTime),
        };
        /**
         * 如果当前输入框可能被 disabled
         * 且另一个输入框非 disabled 则切换到另一个输入框
         */
        if (isRange) {
            var inputType = state.inputType;
            var _disabled = Array.isArray(disabled) ? disabled : [disabled, disabled];
            if (_disabled[inputType]) {
                var otherType = switchInputType(state.inputType);
                if (!_disabled[otherType]) {
                    inputType = otherType;
                }
            }
            newState.inputType = inputType;
        }
        if ('value' in props) {
            var value = isRange ? checkRangeDate(props.value, state.inputType, disabled) : checkDate(props.value);
            if (isValueChanged(value, state.preValue)) {
                newState = __assign(__assign({}, newState), { value: value, curValue: value, preValue: value, inputValue: fmtValue(value, format) });
            }
            if ('mode' in props) {
                if (mode !== state.panelMode) {
                    newState = __assign(__assign({}, newState), { panelMode: mode, inputValue: fmtValue(value, format) });
                }
            }
            if ('showTime' in props) {
                if (showTime !== state.showTime) {
                    newState = __assign(__assign({}, newState), { showTime: !!showTime, inputValue: fmtValue(value, format) });
                }
            }
        }
        return newState;
    };
    Picker.prototype.componentWillUnmount = function () {
        [this.clearTimeoutId, this.timeoutId].forEach(function (id) { return id && clearTimeout(id); });
    };
    Picker.prototype.onVisibleChange = function (visible) {
        var _this = this;
        if (visible !== this.state.visible) {
            var callback = function () {
                _this.setState({
                    visible: visible,
                    justBeginInput: _this.isEnabled(),
                });
            };
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
                this.timeoutId = null;
            }
            if (visible) {
                callback();
            }
            else {
                this.timeoutId = setTimeout(callback, 0);
            }
            func.invoke(this.props, 'onVisibleChange', [visible]);
        }
    };
    Picker.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this, prefixCls = _b.prefixCls, handleChange = _b.handleChange, handleMouseDown = _b.handleMouseDown, handleVisibleChange = _b.handleVisibleChange, onOk = _b.onOk, onClick = _b.onClick, handleInput = _b.handleInput, onInputTypeChange = _b.onInputTypeChange, onPanelChange = _b.onPanelChange, onKeyDown = _b.onKeyDown, onCalendarChange = _b.onCalendarChange;
        var _c = this.props, rtl = _c.rtl, locale = _c.locale, prefix = _c.prefix, inputReadOnly = _c.inputReadOnly, showTime = _c.showTime, preset = _c.preset, mode = _c.mode, format = _c.format, trigger = _c.trigger, disabledDate = _c.disabledDate, extraFooterRender = _c.extraFooterRender, timePanelProps = _c.timePanelProps, resetTime = _c.resetTime, placeholder = _c.placeholder, disabledTime = _c.disabledTime, dateCellRender = _c.dateCellRender, disabled = _c.disabled, isPreview = _c.isPreview, className = _c.className, defaultPanelValue = _c.defaultPanelValue, renderPreview = _c.renderPreview, label = _c.label, restProps = __rest(_c, ["rtl", "locale", "prefix", "inputReadOnly", "showTime", "preset", "mode", "format", "trigger", "disabledDate", "extraFooterRender", "timePanelProps", "resetTime", "placeholder", "disabledTime", "dateCellRender", "disabled", "isPreview", "className", "defaultPanelValue", "renderPreview", "label"]);
        var _d = this.state, isRange = _d.isRange, inputType = _d.inputType, justBeginInput = _d.justBeginInput, panelMode = _d.panelMode, showOk = _d.showOk, align = _d.align;
        var _e = this.state, inputValue = _e.inputValue, curValue = _e.curValue;
        var _f = this.getPopupOffsetLeft(), arrowLeft = _f.arrowLeft, panelLeft = _f.panelLeft;
        // 预览态
        if (isPreview) {
            var previewCls = classnames(className, "".concat(prefix, "form-preview"));
            return (React.createElement("div", { className: previewCls }, renderNode(renderPreview, isRange ? inputValue.join('-') : inputValue, [curValue, this.props])));
        }
        var visible = 'visible' in this.props ? this.props.visible : this.state.visible;
        var allDisabled = isRange && Array.isArray(disabled) ? disabled.every(function (v) { return v; }) : disabled;
        var sharedProps = {
            rtl: rtl,
            prefix: prefix,
            locale: locale,
            mode: mode,
            format: format,
            showTime: showTime,
            inputType: inputType,
        };
        // 输入框
        var inputProps = __assign(__assign(__assign({}, pickProps(DateInput.propTypes, restProps)), sharedProps), { value: inputValue, label: label, isRange: isRange, disabled: disabled, placeholder: placeholder, onInputTypeChange: onInputTypeChange, focus: visible, onInput: handleInput, readOnly: inputReadOnly, inputProps: this.props.inputProps, ref: function (el) { return (_this.dateInput = el); } });
        // 禁用状态下 不允许清空
        if (!this.isEnabled()) {
            inputProps.hasClear = false;
        }
        var triggerNode = renderNode(trigger, React.createElement(DateInput, __assign({}, inputProps)));
        // 日期
        var panelProps = __assign(__assign({}, sharedProps), { panelMode: panelMode, value: curValue, disabledDate: disabledDate, onPanelChange: onPanelChange, timePanelProps: timePanelProps, disabledTime: disabledTime, resetTime: resetTime, dateCellRender: dateCellRender, defaultPanelValue: defaultPanelValue, onSelect: handleChange });
        var DateNode = isRange ? (React.createElement(RangePanel, __assign({ justBeginInput: justBeginInput, onCalendarChange: onCalendarChange }, panelProps))) : (React.createElement(DatePanel, __assign({}, panelProps)));
        // 底部节点
        var oKable = !!(isRange ? inputValue && inputValue[inputType] : inputValue);
        var shouldShowFooter = showOk || preset || extraFooterRender;
        var footerNode = shouldShowFooter ? (React.createElement(FooterPanel, { oKable: oKable, onOk: onOk, showOk: showOk, onChange: handleChange, preset: preset, locale: locale, prefix: prefix, extraRender: extraFooterRender })) : null;
        var triggerProps;
        if (!allDisabled) {
            triggerProps = { onKeyDown: onKeyDown, onClick: onClick };
        }
        // popup
        var _g = this.props, followTrigger = _g.followTrigger, popupTriggerType = _g.popupTriggerType, popupAlign = _g.popupAlign, popupContainer = _g.popupContainer, popupStyle = _g.popupStyle, popupClassName = _g.popupClassName, popupComponent = _g.popupComponent, popupProps = _g.popupProps;
        var popupCls = classnames(popupClassName || (popupProps && popupProps.className), (_a = {},
            _a["".concat(prefixCls, "-overlay")] = true,
            _a["".concat(prefixCls, "-").concat((align || []).join('-'))] = align,
            _a["".concat(prefixCls, "-overlay-range")] = isRange,
            _a));
        var PopupComp = popupComponent || Popup;
        return (React.createElement("div", __assign({}, pickOthers(Picker.propTypes, restProps), { dir: rtl ? 'rtl' : undefined, className: classnames(className, prefixCls), style: this.props.style }),
            React.createElement(PopupComp, __assign({ rtl: rtl, key: "date-picker-popup", visible: visible, align: popupAlign, container: popupContainer, followTrigger: followTrigger, triggerType: popupTriggerType, style: popupStyle, onVisibleChange: handleVisibleChange, disabled: allDisabled, trigger: React.createElement("div", __assign({}, triggerProps, { role: "button", tabIndex: "0", style: { width: '100%' } }), triggerNode), onPosition: this.getCurrentAlign, canCloseByTrigger: false }, popupProps, { className: popupCls }),
                React.createElement("div", { onMouseDown: handleMouseDown, style: { marginLeft: panelLeft } },
                    React.createElement("div", { dir: rtl ? 'rtl' : undefined, className: "".concat(prefixCls, "-wrapper"), ref: this.popupRef },
                        isRange ? this.renderArrow(arrowLeft) : null,
                        DateNode,
                        this.state.panelMode !== this.props.mode ? null : footerNode)))));
    };
    Picker.propTypes = {
        rtl: PT.bool,
        prefix: PT.string,
        locale: PT.object,
        name: PT.string,
        // calendar
        mode: SharedPT.mode,
        type: SharedPT.type,
        value: SharedPT.value,
        defaultValue: SharedPT.value,
        defaultPanelValue: SharedPT.date,
        disabledDate: PT.func,
        visible: PT.bool,
        defaultVisible: PT.bool,
        dateCellRender: PT.func,
        // event
        onOk: PT.func,
        onChange: PT.func,
        onVisibleChange: PT.func,
        onPanelChange: PT.func,
        onCalendarChange: PT.func,
        // time
        showTime: PT.bool,
        resetTime: PT.bool,
        timePanelProps: PT.object,
        disabledTime: PT.object,
        // header
        titleRender: PT.func,
        // footer
        preset: PT.oneOfType([PT.array, PT.object]),
        extraFooterRender: SharedPT.render,
        showOk: PT.bool,
        // input
        trigger: SharedPT.render,
        hasBorder: PT.bool,
        inputProps: PT.object,
        hasClear: PT.bool,
        placeholder: SharedPT.placeholder,
        disabled: SharedPT.disabled,
        inputReadOnly: SharedPT.readOnly,
        /**
         * 日期显示格式
         */
        format: SharedPT.format,
        label: PT.node,
        separator: PT.node,
        /**
         * 输出格式：控制 onChange、onOk 事件的输出值格式
         *  - string 类型：根据时间格式进行转换
         *  - function 类型：((date: Dayjs, dateStr: string) => any)
         *
         * @version 1.23
         */
        outputFormat: SharedPT.format,
        // popup
        followTrigger: PT.bool,
        popupTriggerType: PT.oneOf(['click', 'hover']),
        popupAlign: PT.string,
        popupContainer: PT.any,
        popupStyle: PT.object,
        popupClassName: PT.string,
        popupComponent: PT.elementType,
        popupProps: PT.object,
        // preview
        isPreview: PT.bool,
        renderPreview: PT.func,
        // ariaLabel
        dateInputAriaLabel: SharedPT.ariaLabel,
    };
    Picker.defaultProps = {
        rtl: false,
        prefix: 'next-',
        popupTriggerType: 'click',
        locale: defaultLocale.DatePicker,
        defaultVisible: false,
        type: DATE_PICKER_TYPE.DATE,
        mode: DATE_PICKER_MODE.DATE,
        format: 'YYYY-MM-DD',
    };
    return Picker;
}(React.Component));
export default polyfill(Picker);
