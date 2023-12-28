"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var classnames_1 = require("classnames");
var PT = require("prop-types");
var prop_types_1 = require("./prop-types");
var zh_cn_1 = require("../locale/zh-cn");
var util_1 = require("../util");
var util_2 = require("./util");
var constant_1 = require("./constant");
var overlay_1 = require("../overlay");
var date_input_1 = require("./panels/date-input");
var date_panel_1 = require("./panels/date-panel");
var range_panel_1 = require("./panels/range-panel");
var footer_panel_1 = require("./panels/footer-panel");
var Popup = overlay_1.default.Popup;
var pickProps = util_1.obj.pickProps, pickOthers = util_1.obj.pickOthers;
var renderNode = util_1.func.renderNode, checkDate = util_1.func.checkDate, checkRangeDate = util_1.func.checkRangeDate;
var Picker = /** @class */ (function (_super) {
    tslib_1.__extends(Picker, _super);
    function Picker(props) {
        var _this = _super.call(this, props) || this;
        /**
         * 获取初始值
         */
        _this.getInitValue = function () {
            var props = _this.props;
            var type = props.type, value = props.value, defaultValue = props.defaultValue;
            var val = type === constant_1.DATE_PICKER_TYPE.RANGE ? [null, null] : null;
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
                inputType: _this.isEnabled(0) ? constant_1.DATE_INPUT_TYPE.BEGIN : constant_1.DATE_INPUT_TYPE.END,
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
            return _this.props.type === constant_1.DATE_PICKER_TYPE.RANGE
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
            util_1.func.invoke(_this.props, 'onPanelChange', [value, mode]);
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
                inputType: constant_1.DATE_INPUT_TYPE.BEGIN,
                justBeginInput: _this.isEnabled(),
            });
            _this.onCalendarChange(null);
        };
        _this.shouldSwitchInput = function (value) {
            var _a = _this.state, inputType = _a.inputType, justBeginInput = _a.justBeginInput;
            var idx = justBeginInput ? (0, util_2.switchInputType)(inputType) : value.indexOf(null);
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
                case util_1.KEYCODE.ENTER: {
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
                inputValue: (0, util_2.fmtValue)(v, format),
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
                        if ((0, util_2.isValueChanged)(v, preValue)) {
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
                inputValue: (0, util_2.fmtValue)(value, format),
            });
            util_1.func.invoke(_this.props, 'onChange', _this.getOutputArgs(state.value));
        };
        _this.onCalendarChange = function (values) {
            var _a = _this.props, format = _a.format, onCalendarChange = _a.onCalendarChange;
            if (onCalendarChange) {
                var startValue = values && values[0];
                var endValue = values && values[1];
                var startStr = startValue ? (0, util_2.fmtValue)(values[0], format) : '';
                var endStr = endValue ? (0, util_2.fmtValue)(values[1], format) : '';
                onCalendarChange(values, [startStr, endStr]);
            }
        };
        _this.onOk = function () {
            var inputValue = _this.state.inputValue;
            var checkedValue = _this.checkValue(inputValue, true, _this.props.format);
            util_1.func.invoke(_this.props, 'onOk', _this.getOutputArgs(checkedValue));
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
                return [(0, util_2.fmtValue)(value, outputFormat)];
            }
            return [value, (0, util_2.fmtValue)(value, format)];
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
            return react_1.default.createElement("div", { key: "arrow", className: "".concat(_this.props.prefix, "range-picker2-arrow"), style: { left: left } });
        };
        var prefix = props.prefix, type = props.type, format = props.format, mode = props.mode, defaultVisible = props.defaultVisible;
        _this.state = {
            panelMode: mode,
            visible: defaultVisible,
        };
        if (type === constant_1.DATE_PICKER_TYPE.RANGE) {
            var _a = _this.getInitRangeInputState(), inputType = _a.inputType, justBeginInput = _a.justBeginInput;
            _this.state = tslib_1.__assign({ inputType: inputType, justBeginInput: justBeginInput }, _this.state);
        }
        var value = _this.getInitValue();
        _this.state = tslib_1.__assign({ value: value, curValue: value, preValue: value, inputValue: (0, util_2.fmtValue)(value, format) }, _this.state);
        _this.prefixCls = "".concat(prefix, "date-picker2");
        _this.popupRef = react_1.default.createRef();
        return _this;
    }
    Picker.getDerivedStateFromProps = function (props, state) {
        var type = props.type, showTime = props.showTime, showOk = props.showOk, disabled = props.disabled, format = props.format, mode = props.mode;
        var isRange = type === constant_1.DATE_PICKER_TYPE.RANGE;
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
                var otherType = (0, util_2.switchInputType)(state.inputType);
                if (!_disabled[otherType]) {
                    inputType = otherType;
                }
            }
            newState.inputType = inputType;
        }
        if ('value' in props) {
            var value = isRange ? checkRangeDate(props.value, state.inputType, disabled) : checkDate(props.value);
            if ((0, util_2.isValueChanged)(value, state.preValue)) {
                newState = tslib_1.__assign(tslib_1.__assign({}, newState), { value: value, curValue: value, preValue: value, inputValue: (0, util_2.fmtValue)(value, format) });
            }
            if ('mode' in props) {
                if (mode !== state.panelMode) {
                    newState = tslib_1.__assign(tslib_1.__assign({}, newState), { panelMode: mode, inputValue: (0, util_2.fmtValue)(value, format) });
                }
            }
            if ('showTime' in props) {
                if (showTime !== state.showTime) {
                    newState = tslib_1.__assign(tslib_1.__assign({}, newState), { showTime: !!showTime, inputValue: (0, util_2.fmtValue)(value, format) });
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
            util_1.func.invoke(this.props, 'onVisibleChange', [visible]);
        }
    };
    Picker.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this, prefixCls = _b.prefixCls, handleChange = _b.handleChange, handleMouseDown = _b.handleMouseDown, handleVisibleChange = _b.handleVisibleChange, onOk = _b.onOk, onClick = _b.onClick, handleInput = _b.handleInput, onInputTypeChange = _b.onInputTypeChange, onPanelChange = _b.onPanelChange, onKeyDown = _b.onKeyDown, onCalendarChange = _b.onCalendarChange;
        var _c = this.props, rtl = _c.rtl, locale = _c.locale, prefix = _c.prefix, inputReadOnly = _c.inputReadOnly, showTime = _c.showTime, preset = _c.preset, mode = _c.mode, format = _c.format, trigger = _c.trigger, disabledDate = _c.disabledDate, extraFooterRender = _c.extraFooterRender, timePanelProps = _c.timePanelProps, resetTime = _c.resetTime, placeholder = _c.placeholder, disabledTime = _c.disabledTime, dateCellRender = _c.dateCellRender, disabled = _c.disabled, isPreview = _c.isPreview, className = _c.className, defaultPanelValue = _c.defaultPanelValue, renderPreview = _c.renderPreview, label = _c.label, restProps = tslib_1.__rest(_c, ["rtl", "locale", "prefix", "inputReadOnly", "showTime", "preset", "mode", "format", "trigger", "disabledDate", "extraFooterRender", "timePanelProps", "resetTime", "placeholder", "disabledTime", "dateCellRender", "disabled", "isPreview", "className", "defaultPanelValue", "renderPreview", "label"]);
        var _d = this.state, isRange = _d.isRange, inputType = _d.inputType, justBeginInput = _d.justBeginInput, panelMode = _d.panelMode, showOk = _d.showOk, align = _d.align;
        var _e = this.state, inputValue = _e.inputValue, curValue = _e.curValue;
        var _f = this.getPopupOffsetLeft(), arrowLeft = _f.arrowLeft, panelLeft = _f.panelLeft;
        // 预览态
        if (isPreview) {
            var previewCls = (0, classnames_1.default)(className, "".concat(prefix, "form-preview"));
            return (react_1.default.createElement("div", { className: previewCls }, renderNode(renderPreview, isRange ? inputValue.join('-') : inputValue, [curValue, this.props])));
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
        var inputProps = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, pickProps(date_input_1.default.propTypes, restProps)), sharedProps), { value: inputValue, label: label, isRange: isRange, disabled: disabled, placeholder: placeholder, onInputTypeChange: onInputTypeChange, focus: visible, onInput: handleInput, readOnly: inputReadOnly, inputProps: this.props.inputProps, ref: function (el) { return (_this.dateInput = el); } });
        // 禁用状态下 不允许清空
        if (!this.isEnabled()) {
            inputProps.hasClear = false;
        }
        var triggerNode = renderNode(trigger, react_1.default.createElement(date_input_1.default, tslib_1.__assign({}, inputProps)));
        // 日期
        var panelProps = tslib_1.__assign(tslib_1.__assign({}, sharedProps), { panelMode: panelMode, value: curValue, disabledDate: disabledDate, onPanelChange: onPanelChange, timePanelProps: timePanelProps, disabledTime: disabledTime, resetTime: resetTime, dateCellRender: dateCellRender, defaultPanelValue: defaultPanelValue, onSelect: handleChange });
        var DateNode = isRange ? (react_1.default.createElement(range_panel_1.default, tslib_1.__assign({ justBeginInput: justBeginInput, onCalendarChange: onCalendarChange }, panelProps))) : (react_1.default.createElement(date_panel_1.default, tslib_1.__assign({}, panelProps)));
        // 底部节点
        var oKable = !!(isRange ? inputValue && inputValue[inputType] : inputValue);
        var shouldShowFooter = showOk || preset || extraFooterRender;
        var footerNode = shouldShowFooter ? (react_1.default.createElement(footer_panel_1.default, { oKable: oKable, onOk: onOk, showOk: showOk, onChange: handleChange, preset: preset, locale: locale, prefix: prefix, extraRender: extraFooterRender })) : null;
        var triggerProps;
        if (!allDisabled) {
            triggerProps = { onKeyDown: onKeyDown, onClick: onClick };
        }
        // popup
        var _g = this.props, followTrigger = _g.followTrigger, popupTriggerType = _g.popupTriggerType, popupAlign = _g.popupAlign, popupContainer = _g.popupContainer, popupStyle = _g.popupStyle, popupClassName = _g.popupClassName, popupComponent = _g.popupComponent, popupProps = _g.popupProps;
        var popupCls = (0, classnames_1.default)(popupClassName || (popupProps && popupProps.className), (_a = {},
            _a["".concat(prefixCls, "-overlay")] = true,
            _a["".concat(prefixCls, "-").concat((align || []).join('-'))] = align,
            _a["".concat(prefixCls, "-overlay-range")] = isRange,
            _a));
        var PopupComp = popupComponent || Popup;
        return (react_1.default.createElement("div", tslib_1.__assign({}, pickOthers(Picker.propTypes, restProps), { dir: rtl ? 'rtl' : undefined, className: (0, classnames_1.default)(className, prefixCls), style: this.props.style }),
            react_1.default.createElement(PopupComp, tslib_1.__assign({ rtl: rtl, key: "date-picker-popup", visible: visible, align: popupAlign, container: popupContainer, followTrigger: followTrigger, triggerType: popupTriggerType, style: popupStyle, onVisibleChange: handleVisibleChange, disabled: allDisabled, trigger: react_1.default.createElement("div", tslib_1.__assign({}, triggerProps, { role: "button", tabIndex: "0", style: { width: '100%' } }), triggerNode), onPosition: this.getCurrentAlign, canCloseByTrigger: false }, popupProps, { className: popupCls }),
                react_1.default.createElement("div", { onMouseDown: handleMouseDown, style: { marginLeft: panelLeft } },
                    react_1.default.createElement("div", { dir: rtl ? 'rtl' : undefined, className: "".concat(prefixCls, "-wrapper"), ref: this.popupRef },
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
        mode: prop_types_1.default.mode,
        type: prop_types_1.default.type,
        value: prop_types_1.default.value,
        defaultValue: prop_types_1.default.value,
        defaultPanelValue: prop_types_1.default.date,
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
        extraFooterRender: prop_types_1.default.render,
        showOk: PT.bool,
        // input
        trigger: prop_types_1.default.render,
        hasBorder: PT.bool,
        inputProps: PT.object,
        hasClear: PT.bool,
        placeholder: prop_types_1.default.placeholder,
        disabled: prop_types_1.default.disabled,
        inputReadOnly: prop_types_1.default.readOnly,
        /**
         * 日期显示格式
         */
        format: prop_types_1.default.format,
        label: PT.node,
        separator: PT.node,
        /**
         * 输出格式：控制 onChange、onOk 事件的输出值格式
         *  - string 类型：根据时间格式进行转换
         *  - function 类型：((date: Dayjs, dateStr: string) => any)
         *
         * @version 1.23
         */
        outputFormat: prop_types_1.default.format,
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
        dateInputAriaLabel: prop_types_1.default.ariaLabel,
    };
    Picker.defaultProps = {
        rtl: false,
        prefix: 'next-',
        popupTriggerType: 'click',
        locale: zh_cn_1.default.DatePicker,
        defaultVisible: false,
        type: constant_1.DATE_PICKER_TYPE.DATE,
        mode: constant_1.DATE_PICKER_MODE.DATE,
        format: 'YYYY-MM-DD',
    };
    return Picker;
}(react_1.default.Component));
exports.default = (0, react_lifecycles_compat_1.polyfill)(Picker);
