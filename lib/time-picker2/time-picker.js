"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var classnames_1 = require("classnames");
var config_provider_1 = require("../config-provider");
var input_1 = require("../input");
var button_1 = require("../button");
var overlay_1 = require("../overlay");
var zh_cn_1 = require("../locale/zh-cn");
var util_1 = require("../util");
var panel_1 = require("./panel");
var utils_1 = require("./utils");
var prop_types_2 = require("./prop-types");
var util_2 = require("../date-picker2/util");
var footer_panel_1 = require("../date-picker2/panels/footer-panel");
var date_input_1 = require("./module/date-input");
var constant_1 = require("./constant");
var Popup = overlay_1.default.Popup;
var noop = util_1.func.noop, checkDate = util_1.func.checkDate, checkRangeDate = util_1.func.checkRangeDate;
var timePickerLocale = zh_cn_1.default.TimePicker;
var presetPropType = prop_types_1.default.shape(tslib_1.__assign({ label: prop_types_1.default.string, value: prop_types_1.default.oneOfType([prop_types_1.default.func, utils_1.checkDateValue]) }, button_1.default.propTypes));
var TimePicker2 = /** @class */ (function (_super) {
    tslib_1.__extends(TimePicker2, _super);
    function TimePicker2(props, context) {
        var _this = _super.call(this, props, context) || this;
        /**
         * 获取初始值
         */
        _this.getInitValue = function () {
            var props = _this.props;
            var type = props.type, value = props.value, defaultValue = props.defaultValue;
            var val = type === constant_1.TIME_PICKER_TYPE.RANGE ? [null, null] : null;
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
                inputType: _this.isEnabled(0) ? constant_1.TIME_INPUT_TYPE.BEGIN : constant_1.TIME_INPUT_TYPE.END,
            };
        };
        _this.onKeyDown = function (e) {
            if (e.keyCode === util_1.KEYCODE.ENTER) {
                var inputValue = _this.state.inputValue;
                _this.handleChange(inputValue, 'KEYDOWN_ENTER');
                _this.onClick();
                return;
            }
            var _a = _this.state, value = _a.value, inputStr = _a.inputStr, inputType = _a.inputType, isRange = _a.isRange;
            var _b = _this.props, format = _b.format, _c = _b.hourStep, hourStep = _c === void 0 ? 1 : _c, _d = _b.minuteStep, minuteStep = _d === void 0 ? 1 : _d, _e = _b.secondStep, secondStep = _e === void 0 ? 1 : _e, disabledMinutes = _b.disabledMinutes, disabledSeconds = _b.disabledSeconds;
            var unit = 'second';
            if (disabledSeconds) {
                unit = disabledMinutes ? 'hour' : 'minute';
            }
            var timeStr = (0, utils_1.onTimeKeydown)(e, {
                format: format,
                timeInputStr: isRange ? inputStr[inputType] : inputStr,
                steps: {
                    hour: hourStep,
                    minute: minuteStep,
                    second: secondStep,
                },
                value: value,
            }, unit);
            if (!timeStr)
                return;
            var newInputStr = timeStr;
            if (isRange) {
                newInputStr = inputStr;
                newInputStr[inputType] = timeStr;
            }
            _this.handleChange(newInputStr, 'KEYDOWN_CODE');
        };
        _this.onVisibleChange = function (visible, type) {
            if (!('visible' in _this.props)) {
                _this.setState({
                    visible: visible,
                });
            }
            _this.props.onVisibleChange(visible, type);
        };
        _this.onClick = function () {
            var _a = _this.state, visible = _a.visible, inputType = _a.inputType;
            if (!visible) {
                _this.onVisibleChange(true);
                _this.handleInputFocus(inputType);
            }
        };
        /**
         * 处理点击文档区域导致的弹层收起逻辑
         * @param {boolean} visible 是否可见
         * @param {string} type 事件类型
         */
        _this.handleVisibleChange = function (visible, targetType) {
            if (targetType === 'docClick') {
                // 弹层收起 触发 Change 逻辑
                if (!visible) {
                    _this.handleChange(_this.state.curValue, 'VISIBLE_CHANGE');
                }
                _this.onVisibleChange(visible);
            }
        };
        _this.handleInputFocus = function (inputType) {
            var inputEl = _this.dateInput && _this.dateInput.input;
            if (_this.state.isRange) {
                inputEl = inputEl && inputEl[inputType];
            }
            inputEl && inputEl.focus();
        };
        _this.onOk = function () {
            var curValue = _this.state.curValue;
            var checkedValue = _this.checkValue(curValue);
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
        _this.checkValue = function (value, strictly) {
            var inputType = _this.state.inputType;
            var formatter = function (v) { return (typeof v === 'string' ? (0, util_1.datejs)(v, 'HH:mm:ss') : v); };
            var formattedValue = Array.isArray(value) ? value.map(function (v) { return formatter(v); }) : formatter(value);
            return _this.props.type === constant_1.TIME_PICKER_TYPE.RANGE
                ? checkRangeDate(formattedValue, inputType, _this.props.disabled, strictly)
                : checkDate(formattedValue);
        };
        /**
         * 获取 `onChange` 和 `onOk` 方法的输出参数
         * @param {Dayjs} value
         * @returns 默认返回 `Dayjs` 实例和 `format` 格式化的值
         *          如果传了了 `outputFormat` 属性则返回 `outputFormat` 格式化的值
         */
        _this.getOutputArgs = function (value) {
            var format = _this.props.format;
            return [value, (0, util_2.fmtValue)(value, format)];
        };
        _this.onChange = function (v) {
            var _a = _this, state = _a.state, props = _a.props;
            var format = props.format;
            var nextValue = v === undefined ? state.value : v;
            var value = _this.checkValue(nextValue);
            _this.setState({
                curValue: value,
                preValue: value,
                inputStr: (0, util_2.fmtValue)(value, format),
                inputValue: (0, util_2.fmtValue)(value, format),
            });
            util_1.func.invoke(_this.props, 'onChange', _this.getOutputArgs(nextValue));
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
        _this.handleChange = function (v, eventType) {
            var format = _this.props.format;
            var _a = _this.state, isRange = _a.isRange, value = _a.value, preValue = _a.preValue;
            var forceEvents = ['KEYDOWN_ENTER', 'CLICK_PRESET', 'CLICK_OK', 'INPUT_CLEAR', 'VISIBLE_CHANGE'];
            var isTemporary = isRange && !forceEvents.includes(eventType);
            // 面板收起时候，将值设置为确认值
            v = eventType === 'VISIBLE_CHANGE' ? value : _this.checkValue(v, !isTemporary);
            var stringV = (0, util_2.fmtValue)(v, format);
            _this.setState({
                curValue: v,
                inputStr: stringV,
                inputValue: stringV,
                inputing: false,
                selecting: eventType === 'start' || eventType === 'end',
            });
            if (!isTemporary) {
                _this.setState({
                    value: v,
                }, function () {
                    // 判断当前选择结束，收起面板：
                    // 1. 非 Range 选择
                    // 2. 非 选择预设时间、面板收起、清空输入 操作
                    // 3. 不需要切换输入框
                    var shouldHidePanel = ['CLICK_PRESET', 'VISIBLE_CHANGE', 'KEYDOWN_ENTER', 'INPUT_CLEAR', 'CLICK_OK'].includes(eventType) ||
                        (isRange && !_this.shouldSwitchInput(v));
                    if (shouldHidePanel) {
                        _this.onVisibleChange(false);
                    }
                    if ((0, util_2.isValueChanged)(v, preValue)) {
                        _this.onChange(v);
                    }
                });
            }
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
        _this.handleClear = function () {
            /**
             * 清空输入之后 input 组件内部会让第二个输入框获得焦点
             * 所以这里需要设置 setTimeout 才能让第一个 input 获得焦点
             */
            _this.clearTimeoutId = setTimeout(function () {
                _this.handleInputFocus(0);
            });
            _this.setState({
                inputType: constant_1.TIME_INPUT_TYPE.BEGIN,
                justBeginInput: _this.isEnabled(),
            });
        };
        _this.handleInput = function (v, eventType) {
            var isRange = _this.state.isRange;
            if (eventType === 'clear') {
                _this.handleChange(v, 'INPUT_CLEAR');
                if (isRange) {
                    _this.handleClear();
                }
            }
            else {
                _this.setState({
                    inputStr: v,
                    inputValue: v,
                    curValue: _this.checkValue(v),
                    inputing: true,
                    visible: true,
                });
            }
        };
        var isRange = props.type === constant_1.TIME_PICKER_TYPE.RANGE;
        _this.state = {};
        if (isRange) {
            var _a = _this.getInitRangeInputState(), inputType = _a.inputType, justBeginInput = _a.justBeginInput;
            _this.state = {
                inputType: inputType,
                justBeginInput: justBeginInput,
            };
        }
        var _b = _this.props, format = _b.format, visible = _b.visible, defaultVisible = _b.defaultVisible, prefix = _b.prefix;
        var value = _this.getInitValue();
        // const value = formatInputTimeValue(props.value || props.defaultValue, props.format, isRange);
        _this.state = tslib_1.__assign(tslib_1.__assign({}, _this.state), { isRange: isRange, inputStr: '', // 输入框的输入值， string类型
            value: value, curValue: value, preValue: value, inputValue: (0, util_2.fmtValue)(value, format), inputing: false, visible: 'visible' in _this.props ? visible : defaultVisible });
        _this.prefixCls = "".concat(prefix, "time-picker2");
        return _this;
    }
    TimePicker2.getDerivedStateFromProps = function (props, prevState) {
        var disabled = props.disabled, type = props.type, format = props.format, propsValue = props.value;
        var isRange = type === constant_1.TIME_PICKER_TYPE.RANGE;
        var state = {
            isRange: isRange,
        };
        if ('value' in props) {
            // checkDate function doesn't support hh:mm:ss format, convert to valid dayjs value in advance
            var formatter_1 = function (v) { return (typeof v === 'string' ? (0, util_1.datejs)(v, format) : v); };
            var formattedValue = Array.isArray(propsValue)
                ? propsValue.map(function (v) { return formatter_1(v); })
                : formatter_1(propsValue);
            var value = isRange
                ? checkRangeDate(formattedValue, state.inputType, disabled)
                : checkDate(formattedValue);
            if ((0, util_2.isValueChanged)(value, state.preValue)) {
                state = tslib_1.__assign(tslib_1.__assign({}, state), { value: value, preValue: value });
                if (isRange && !prevState.selecting) {
                    state.inputValue = (0, util_2.fmtValue)(value, format);
                    state.curValue = formattedValue || [];
                }
            }
        }
        if ('visible' in props) {
            state.visible = props.visible;
        }
        return state;
    };
    TimePicker2.prototype.renderPreview = function (others) {
        var _a = this.props, prefix = _a.prefix, format = _a.format, className = _a.className, renderPreview = _a.renderPreview;
        var value = this.state.value;
        var previewCls = (0, classnames_1.default)(className, "".concat(prefix, "form-preview"));
        var label = '';
        if (value) {
            var valueArr = Array.isArray(value) ? value : [value];
            label = valueArr.map(function (v) { return (v ? v.format(format) : ''); }).join('-');
        }
        if (typeof renderPreview === 'function') {
            return (react_1.default.createElement("div", tslib_1.__assign({}, others, { className: previewCls }), renderPreview(value, this.props)));
        }
        return (react_1.default.createElement("p", tslib_1.__assign({}, others, { className: previewCls }), label));
    };
    TimePicker2.prototype.render = function () {
        var _a, _b;
        var _this = this;
        var _c = this.props, prefix = _c.prefix, label = _c.label, state = _c.state, placeholder = _c.placeholder, size = _c.size, format = _c.format, hasClear = _c.hasClear, hourStep = _c.hourStep, minuteStep = _c.minuteStep, secondStep = _c.secondStep, disabledHours = _c.disabledHours, disabledMinutes = _c.disabledMinutes, disabledSeconds = _c.disabledSeconds, renderTimeMenuItems = _c.renderTimeMenuItems, inputProps = _c.inputProps, popupAlign = _c.popupAlign, popupTriggerType = _c.popupTriggerType, popupContainer = _c.popupContainer, popupStyle = _c.popupStyle, popupClassName = _c.popupClassName, popupProps = _c.popupProps, popupComponent = _c.popupComponent, followTrigger = _c.followTrigger, disabled = _c.disabled, hasBorder = _c.hasBorder, className = _c.className, locale = _c.locale, rtl = _c.rtl, isPreview = _c.isPreview, preset = _c.preset, others = tslib_1.__rest(_c, ["prefix", "label", "state", "placeholder", "size", "format", "hasClear", "hourStep", "minuteStep", "secondStep", "disabledHours", "disabledMinutes", "disabledSeconds", "renderTimeMenuItems", "inputProps", "popupAlign", "popupTriggerType", "popupContainer", "popupStyle", "popupClassName", "popupProps", "popupComponent", "followTrigger", "disabled", "hasBorder", "className", "locale", "rtl", "isPreview", "preset"]);
        var _d = this.state, value = _d.value, inputStr = _d.inputStr, inputValue = _d.inputValue, curValue = _d.curValue, inputing = _d.inputing, visible = _d.visible, isRange = _d.isRange, inputType = _d.inputType;
        var triggerCls = (0, classnames_1.default)((_a = {},
            _a["".concat(this.prefixCls, "-trigger")] = true,
            _a));
        if (rtl) {
            others.dir = 'rtl';
        }
        if (isPreview) {
            return this.renderPreview(util_1.obj.pickOthers(others, TimePicker2.PropTypes));
        }
        var sharedInputProps = tslib_1.__assign(tslib_1.__assign({ prefix: prefix, locale: locale, label: label, state: state, placeholder: placeholder }, inputProps), { size: size, disabled: disabled, 
            // RangePicker 有临时输入态在 inputValue 里面
            value: inputing ? inputStr : isRange ? inputValue : (0, util_2.fmtValue)(value, format) || '', hasClear: value && hasClear, inputType: inputType, isRange: isRange, onInputTypeChange: this.onInputTypeChange, onInput: this.handleInput, onKeyDown: this.onKeyDown, ref: function (el) { return (_this.dateInput = el); } });
        var triggerInput = (react_1.default.createElement("div", { className: triggerCls },
            react_1.default.createElement(date_input_1.default, tslib_1.__assign({}, sharedInputProps, { label: label, state: state, onClick: this.onClick, hasBorder: hasBorder, placeholder: placeholder || locale.placeholder, className: (0, classnames_1.default)("".concat(this.prefixCls, "-input")) }))));
        var panelProps = {
            prefix: prefix,
            locale: locale,
            value: inputing ? this.checkValue(inputStr) : curValue,
            // value: curValue,
            isRange: isRange,
            disabled: disabled,
            showHour: format.indexOf('H') > -1,
            showSecond: format.indexOf('s') > -1,
            showMinute: format.indexOf('m') > -1,
            hourStep: hourStep,
            minuteStep: minuteStep,
            secondStep: secondStep,
            disabledHours: disabledHours,
            disabledMinutes: disabledMinutes,
            disabledSeconds: disabledSeconds,
            renderTimeMenuItems: renderTimeMenuItems,
            onSelect: this.handleChange,
        };
        var classNames = (0, classnames_1.default)((_b = {},
            _b["".concat(this.prefixCls)] = true,
            _b["".concat(this.prefixCls, "-").concat(size)] = size,
            _b["".concat(prefix, "disabled")] = disabled,
            _b), className);
        var PopupComponent = popupComponent ? popupComponent : Popup;
        var oKable = !!(isRange ? inputValue && inputValue[inputType] : inputValue);
        return (react_1.default.createElement("div", tslib_1.__assign({}, util_1.obj.pickOthers(TimePicker2.propTypes, others), { className: classNames }),
            react_1.default.createElement(PopupComponent, tslib_1.__assign({ align: popupAlign }, popupProps, { followTrigger: followTrigger, visible: visible, onVisibleChange: this.handleVisibleChange, trigger: triggerInput, container: popupContainer, disabled: disabled, triggerType: popupTriggerType, style: popupStyle, className: popupClassName }),
                react_1.default.createElement("div", { dir: others.dir, className: "".concat(this.prefixCls, "-wrapper") },
                    react_1.default.createElement("div", { className: "".concat(this.prefixCls, "-body") },
                        react_1.default.createElement(panel_1.default, tslib_1.__assign({}, panelProps)),
                        preset || isRange ? (react_1.default.createElement(footer_panel_1.default, { prefix: prefix, className: "".concat(this.prefixCls, "-footer"), showTime: true, locale: locale, oKable: oKable, showOk: isRange, onOk: this.onOk, onChange: this.handleChange, preset: preset })) : null)))));
    };
    TimePicker2.propTypes = tslib_1.__assign(tslib_1.__assign({}, config_provider_1.default.propTypes), { prefix: prop_types_1.default.string, rtl: prop_types_1.default.bool, 
        /**
         * 按钮的文案
         */
        label: prop_types_1.default.node, 
        /**
         * 输入框状态
         */
        state: prop_types_1.default.oneOf(['error', 'success']), 
        /**
         * 输入框提示
         */
        placeholder: prop_types_1.default.oneOfType([prop_types_1.default.arrayOf(prop_types_1.default.string), prop_types_1.default.string]), 
        /**
         * 时间值，dayjs格式或者2020-01-01字符串格式，受控状态使用
         */
        value: prop_types_2.default.value, 
        /**
         * 时间初值，dayjs格式或者2020-01-01字符串格式，非受控状态使用
         */
        defaultValue: prop_types_2.default.value, 
        /**
         * 时间选择框的尺寸
         */
        size: prop_types_1.default.oneOf(['small', 'medium', 'large']), 
        /**
         * 是否允许清空时间
         */
        hasClear: prop_types_1.default.bool, 
        /**
         * 时间的格式
         * https://dayjs.gitee.io/docs/zh-CN/display/format
         */
        format: prop_types_1.default.string, 
        /**
         * 小时选项步长
         */
        hourStep: prop_types_1.default.number, 
        /**
         * 分钟选项步长
         */
        minuteStep: prop_types_1.default.number, 
        /**
         * 秒钟选项步长
         */
        secondStep: prop_types_1.default.number, 
        /**
         * 禁用小时函数
         * @param {Number} index 时 0 - 23
         * @return {Boolean} 是否禁用
         */
        disabledHours: prop_types_1.default.func, 
        /**
         * 禁用分钟函数
         * @param {Number} index 分 0 - 59
         * @return {Boolean} 是否禁用
         */
        disabledMinutes: prop_types_1.default.func, 
        /**
         * 禁用秒钟函数
         * @param {Number} index 秒 0 - 59
         * @return {Boolean} 是否禁用
         */
        disabledSeconds: prop_types_1.default.func, 
        /**
         * 渲染的可选择时间列表
         * [{
         *  label: '01',
         *  value: 1
         * }]
         * @param {Array} list 默认渲染的列表
         * @param {String} mode 渲染的菜单 hour, minute, second
         * @param {dayjs} value 当前时间，可能为 null
         * @return {Array} 返回需要渲染的数据
         */
        renderTimeMenuItems: prop_types_1.default.func, 
        /**
         * 弹层是否显示（受控）
         */
        visible: prop_types_1.default.bool, 
        /**
         * 弹层默认是否显示（非受控）
         */
        defaultVisible: prop_types_1.default.bool, 
        /**
         * 弹层容器
         * @param {Object} target 目标节点
         * @return {ReactNode} 容器节点
         */
        popupContainer: prop_types_1.default.any, 
        /**
         * 弹层对齐方式, 详情见Overlay 文档
         */
        popupAlign: prop_types_1.default.string, 
        /**
         * 弹层触发方式
         */
        popupTriggerType: prop_types_1.default.oneOf(['click', 'hover']), 
        /**
         * 弹层展示状态变化时的回调
         * @param {Boolean} visible 弹层是否隐藏和显示
         * @param {String} type 触发弹层显示和隐藏的来源 fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发
         */
        onVisibleChange: prop_types_1.default.func, 
        /**
         * 弹层自定义样式
         */
        popupStyle: prop_types_1.default.object, 
        /**
         * 弹层自定义样式类
         */
        popupClassName: prop_types_1.default.string, 
        /**
         * 弹层属性
         */
        popupProps: prop_types_1.default.object, 
        /**
         * 是否跟随滚动
         */
        followTrigger: prop_types_1.default.bool, 
        /**
         * 是否禁用
         */
        disabled: prop_types_1.default.bool, 
        /**
         * 输入框是否有边框
         */
        hasBorder: prop_types_1.default.bool, 
        /**
         * 是否为预览态
         */
        isPreview: prop_types_1.default.bool, 
        /**
         * 预览态模式下渲染的内容
         * @param {DayjsObject|DayjsObject[]} value 时间
         */
        renderPreview: prop_types_1.default.func, 
        /**
         * 时间值改变时的回调
         * @param {DayjsObject} date dayjs时间对象
         * @param {Object|String} dateString 时间对象或时间字符串
         */
        onChange: prop_types_1.default.func, className: prop_types_1.default.string, name: prop_types_1.default.string, 
        /**
         * 预设值，会显示在时间面板下面
         */
        preset: prop_types_1.default.oneOfType([prop_types_1.default.arrayOf(presetPropType), presetPropType]), inputProps: prop_types_1.default.shape(input_1.default.propTypes), popupComponent: prop_types_1.default.elementType, type: prop_types_1.default.oneOf(['time', 'range']) });
    TimePicker2.defaultProps = {
        prefix: 'next-',
        rtl: false,
        locale: timePickerLocale,
        size: 'medium',
        format: 'HH:mm:ss',
        hasClear: true,
        disabled: false,
        hasBorder: true,
        type: 'time',
        popupAlign: 'tl bl',
        popupTriggerType: 'click',
        onChange: noop,
        onVisibleChange: noop,
    };
    return TimePicker2;
}(react_1.Component));
exports.default = (0, react_lifecycles_compat_1.polyfill)(TimePicker2);
