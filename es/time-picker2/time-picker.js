import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _extends from 'babel-runtime/helpers/extends';

var _class, _temp, _initialiseProps;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import ConfigProvider from '../config-provider';
import Input from '../input';
import Button from '../button';
import Overlay from '../overlay';
import nextLocale from '../locale/zh-cn';
import { func, obj, datejs, KEYCODE } from '../util';
import TimePickerPanel from './panel';
import { checkDateValue, onTimeKeydown } from './utils';
import SharedPT from './prop-types';
import { switchInputType, fmtValue, isValueChanged } from '../date-picker2/util';
import FooterPanel from '../date-picker2/panels/footer-panel';
import DateInput from './module/date-input';
import { TIME_PICKER_TYPE, TIME_INPUT_TYPE } from './constant';

var Popup = Overlay.Popup;
var noop = func.noop,
    checkDate = func.checkDate,
    checkRangeDate = func.checkRangeDate;

var timePickerLocale = nextLocale.TimePicker;

var presetPropType = PropTypes.shape(_extends({
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.func, checkDateValue])
}, Button.propTypes));

var TimePicker2 = (_temp = _class = function (_Component) {
    _inherits(TimePicker2, _Component);

    function TimePicker2(props, context) {
        _classCallCheck(this, TimePicker2);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _initialiseProps.call(_this);

        var isRange = props.type === TIME_PICKER_TYPE.RANGE;

        _this.state = {};
        if (isRange) {
            var _this$getInitRangeInp = _this.getInitRangeInputState(),
                inputType = _this$getInitRangeInp.inputType,
                justBeginInput = _this$getInitRangeInp.justBeginInput;

            _this.state = {
                inputType: inputType,
                justBeginInput: justBeginInput
            };
        }

        var _this$props = _this.props,
            format = _this$props.format,
            visible = _this$props.visible,
            defaultVisible = _this$props.defaultVisible,
            prefix = _this$props.prefix;


        var value = _this.getInitValue();

        // const value = formatInputTimeValue(props.value || props.defaultValue, props.format, isRange);
        _this.state = _extends({}, _this.state, {
            isRange: isRange,
            inputStr: '', // 输入框的输入值， string类型
            value: value, // 确定值 dayjs类型
            curValue: value, // 临时值 dayjs类型
            preValue: value, // 上个值 dayjs类型
            inputValue: fmtValue(value, format),
            inputing: false,
            visible: 'visible' in _this.props ? visible : defaultVisible
        });
        _this.prefixCls = prefix + 'time-picker2';
        return _this;
    }

    TimePicker2.getDerivedStateFromProps = function getDerivedStateFromProps(props, prevState) {
        var disabled = props.disabled,
            type = props.type,
            format = props.format,
            propsValue = props.value;

        var isRange = type === TIME_PICKER_TYPE.RANGE;
        var state = {
            isRange: isRange
        };

        if ('value' in props) {
            // checkDate function doesn't support hh:mm:ss format, convert to valid dayjs value in advance
            var formatter = function formatter(v) {
                return typeof v === 'string' ? datejs(v, format) : v;
            };
            var formattedValue = Array.isArray(propsValue) ? propsValue.map(function (v) {
                return formatter(v);
            }) : formatter(propsValue);
            var value = isRange ? checkRangeDate(formattedValue, state.inputType, disabled) : checkDate(formattedValue);
            if (isValueChanged(value, state.preValue)) {
                state = _extends({}, state, {
                    value: value,
                    preValue: value
                });
                if (isRange && !prevState.selecting) {
                    state.inputValue = fmtValue(value, format);
                    state.curValue = formattedValue || [];
                }
            }
        }

        if ('visible' in props) {
            state.visible = props.visible;
        }

        return state;
    };

    /**
     * 获取初始值
     */


    /**
     * 获取 RangePicker 输入框初始输入状态
     * @returns {Object} inputState
     * @returns {boolean} inputState.justBeginInput 是否初始输入
     * @returns {number} inputState.inputType 当前输入框
     */

    /**
     * 处理点击文档区域导致的弹层收起逻辑
     * @param {boolean} visible 是否可见
     * @param {string} type 事件类型
     */


    /**
     * 获取 `onChange` 和 `onOk` 方法的输出参数
     * @param {Dayjs} value
     * @returns 默认返回 `Dayjs` 实例和 `format` 格式化的值
     *          如果传了了 `outputFormat` 属性则返回 `outputFormat` 格式化的值
     */


    /**
     * 获取输入框的禁用状态
     * @param {Number} idx
     * @returns {Boolean}
     */


    TimePicker2.prototype.renderPreview = function renderPreview(others) {
        var _props = this.props,
            prefix = _props.prefix,
            format = _props.format,
            className = _props.className,
            renderPreview = _props.renderPreview;
        var value = this.state.value;

        var previewCls = classnames(className, prefix + 'form-preview');

        var label = value ? value.format(format) : '';

        if (typeof renderPreview === 'function') {
            return React.createElement(
                'div',
                _extends({}, others, { className: previewCls }),
                renderPreview(value, this.props)
            );
        }

        return React.createElement(
            'p',
            _extends({}, others, { className: previewCls }),
            label
        );
    };

    TimePicker2.prototype.render = function render() {
        var _classnames,
            _this2 = this,
            _classnames2;

        var _props2 = this.props,
            prefix = _props2.prefix,
            label = _props2.label,
            state = _props2.state,
            placeholder = _props2.placeholder,
            size = _props2.size,
            format = _props2.format,
            hasClear = _props2.hasClear,
            hourStep = _props2.hourStep,
            minuteStep = _props2.minuteStep,
            secondStep = _props2.secondStep,
            disabledHours = _props2.disabledHours,
            disabledMinutes = _props2.disabledMinutes,
            disabledSeconds = _props2.disabledSeconds,
            renderTimeMenuItems = _props2.renderTimeMenuItems,
            inputProps = _props2.inputProps,
            popupAlign = _props2.popupAlign,
            popupTriggerType = _props2.popupTriggerType,
            popupContainer = _props2.popupContainer,
            popupStyle = _props2.popupStyle,
            popupClassName = _props2.popupClassName,
            popupProps = _props2.popupProps,
            popupComponent = _props2.popupComponent,
            followTrigger = _props2.followTrigger,
            disabled = _props2.disabled,
            hasBorder = _props2.hasBorder,
            className = _props2.className,
            locale = _props2.locale,
            rtl = _props2.rtl,
            isPreview = _props2.isPreview,
            preset = _props2.preset,
            others = _objectWithoutProperties(_props2, ['prefix', 'label', 'state', 'placeholder', 'size', 'format', 'hasClear', 'hourStep', 'minuteStep', 'secondStep', 'disabledHours', 'disabledMinutes', 'disabledSeconds', 'renderTimeMenuItems', 'inputProps', 'popupAlign', 'popupTriggerType', 'popupContainer', 'popupStyle', 'popupClassName', 'popupProps', 'popupComponent', 'followTrigger', 'disabled', 'hasBorder', 'className', 'locale', 'rtl', 'isPreview', 'preset']);

        var _state = this.state,
            value = _state.value,
            inputStr = _state.inputStr,
            inputValue = _state.inputValue,
            curValue = _state.curValue,
            inputing = _state.inputing,
            visible = _state.visible,
            isRange = _state.isRange,
            inputType = _state.inputType;

        var triggerCls = classnames((_classnames = {}, _classnames[this.prefixCls + '-trigger'] = true, _classnames));

        if (rtl) {
            others.dir = 'rtl';
        }

        if (isPreview) {
            return this.renderPreview(obj.pickOthers(others, TimePicker2.PropTypes));
        }

        var sharedInputProps = _extends({
            prefix: prefix,
            locale: locale,
            label: label,
            state: state,
            placeholder: placeholder
        }, inputProps, {
            size: size,
            disabled: disabled,
            // RangePicker 有临时输入态在 inputValue 里面
            value: inputing ? inputStr : isRange ? inputValue : fmtValue(value, format) || '',
            hasClear: value && hasClear,
            inputType: inputType,
            isRange: isRange,
            onInputTypeChange: this.onInputTypeChange,
            onInput: this.handleInput,
            onKeyDown: this.onKeyDown,
            ref: function ref(el) {
                return _this2.dateInput = el;
            }
        });

        var triggerInput = React.createElement(
            'div',
            { className: triggerCls },
            React.createElement(DateInput, _extends({}, sharedInputProps, {
                label: label,
                state: state,
                onClick: this.onClick,
                hasBorder: hasBorder,
                placeholder: placeholder || locale.placeholder,
                className: classnames(this.prefixCls + '-input')
            }))
        );

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
            onSelect: this.handleChange
        };

        var classNames = classnames((_classnames2 = {}, _classnames2['' + this.prefixCls] = true, _classnames2[this.prefixCls + '-' + size] = size, _classnames2[prefix + 'disabled'] = disabled, _classnames2), className);

        var PopupComponent = popupComponent ? popupComponent : Popup;
        var oKable = !!(isRange ? inputValue && inputValue[inputType] : inputValue);

        return React.createElement(
            'div',
            _extends({}, obj.pickOthers(TimePicker2.propTypes, others), { className: classNames }),
            React.createElement(
                PopupComponent,
                _extends({
                    align: popupAlign
                }, popupProps, {
                    followTrigger: followTrigger,
                    visible: visible,
                    onVisibleChange: this.handleVisibleChange,
                    trigger: triggerInput,
                    container: popupContainer,
                    disabled: disabled,
                    triggerType: popupTriggerType,
                    style: popupStyle,
                    className: popupClassName
                }),
                React.createElement(
                    'div',
                    { dir: others.dir, className: this.prefixCls + '-wrapper' },
                    React.createElement(
                        'div',
                        { className: this.prefixCls + '-body' },
                        React.createElement(TimePickerPanel, panelProps),
                        preset || isRange ? React.createElement(FooterPanel, {
                            prefix: prefix,
                            className: this.prefixCls + '-footer',
                            showTime: true,
                            oKable: oKable,
                            showOk: isRange,
                            onOk: this.onOk,
                            onChange: this.handleChange,
                            preset: preset
                        }) : null
                    )
                )
            )
        );
    };

    return TimePicker2;
}(Component), _class.propTypes = _extends({}, ConfigProvider.propTypes, {
    prefix: PropTypes.string,
    rtl: PropTypes.bool,
    /**
     * 按钮的文案
     */
    label: PropTypes.node,
    /**
     * 输入框状态
     */
    state: PropTypes.oneOf(['error', 'success']),
    /**
     * 输入框提示
     */
    placeholder: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
    /**
     * 时间值，dayjs格式或者2020-01-01字符串格式，受控状态使用
     */
    value: SharedPT.value,
    /**
     * 时间初值，dayjs格式或者2020-01-01字符串格式，非受控状态使用
     */
    defaultValue: SharedPT.value,
    /**
     * 时间选择框的尺寸
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * 是否允许清空时间
     */
    hasClear: PropTypes.bool,
    /**
     * 时间的格式
     * https://dayjs.gitee.io/docs/zh-CN/display/format
     */
    format: PropTypes.string,
    /**
     * 小时选项步长
     */
    hourStep: PropTypes.number,
    /**
     * 分钟选项步长
     */
    minuteStep: PropTypes.number,
    /**
     * 秒钟选项步长
     */
    secondStep: PropTypes.number,
    /**
     * 禁用小时函数
     * @param {Number} index 时 0 - 23
     * @return {Boolean} 是否禁用
     */
    disabledHours: PropTypes.func,
    /**
     * 禁用分钟函数
     * @param {Number} index 分 0 - 59
     * @return {Boolean} 是否禁用
     */
    disabledMinutes: PropTypes.func,
    /**
     * 禁用秒钟函数
     * @param {Number} index 秒 0 - 59
     * @return {Boolean} 是否禁用
     */
    disabledSeconds: PropTypes.func,
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
    renderTimeMenuItems: PropTypes.func,
    /**
     * 弹层是否显示（受控）
     */
    visible: PropTypes.bool,
    /**
     * 弹层默认是否显示（非受控）
     */
    defaultVisible: PropTypes.bool,
    /**
     * 弹层容器
     * @param {Object} target 目标节点
     * @return {ReactNode} 容器节点
     */
    popupContainer: PropTypes.any,
    /**
     * 弹层对齐方式, 详情见Overlay 文档
     */
    popupAlign: PropTypes.string,
    /**
     * 弹层触发方式
     */
    popupTriggerType: PropTypes.oneOf(['click', 'hover']),
    /**
     * 弹层展示状态变化时的回调
     * @param {Boolean} visible 弹层是否隐藏和显示
     * @param {String} type 触发弹层显示和隐藏的来源 fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发
     */
    onVisibleChange: PropTypes.func,
    /**
     * 弹层自定义样式
     */
    popupStyle: PropTypes.object,
    /**
     * 弹层自定义样式类
     */
    popupClassName: PropTypes.string,
    /**
     * 弹层属性
     */
    popupProps: PropTypes.object,
    /**
     * 是否跟随滚动
     */
    followTrigger: PropTypes.bool,
    /**
     * 是否禁用
     */
    disabled: PropTypes.bool,
    /**
     * 输入框是否有边框
     */
    hasBorder: PropTypes.bool,
    /**
     * 是否为预览态
     */
    isPreview: PropTypes.bool,
    /**
     * 预览态模式下渲染的内容
     * @param {DayjsObject} value 时间
     */
    renderPreview: PropTypes.func,
    /**
     * 时间值改变时的回调
     * @param {DayjsObject} date dayjs时间对象
     * @param {Object|String} dateString 时间对象或时间字符串
     */
    onChange: PropTypes.func,
    className: PropTypes.string,
    name: PropTypes.string,
    /**
     * 预设值，会显示在时间面板下面
     */
    preset: PropTypes.oneOfType([PropTypes.arrayOf(presetPropType), presetPropType]),
    inputProps: PropTypes.shape(Input.propTypes),
    popupComponent: PropTypes.elementType,
    type: PropTypes.oneOf(['time', 'range'])
}), _class.defaultProps = {
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
    onVisibleChange: noop
}, _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.getInitValue = function () {
        var props = _this3.props;
        var type = props.type,
            value = props.value,
            defaultValue = props.defaultValue;


        var val = type === TIME_PICKER_TYPE.RANGE ? [null, null] : null;

        val = 'value' in props ? value : 'defaultValue' in props ? defaultValue : val;

        return _this3.checkValue(val);
    };

    this.getInitRangeInputState = function () {
        return {
            justBeginInput: _this3.isEnabled(),
            inputType: _this3.isEnabled(0) ? TIME_INPUT_TYPE.BEGIN : TIME_INPUT_TYPE.END
        };
    };

    this.onKeyDown = function (e) {
        if (e.keyCode === KEYCODE.ENTER) {
            var inputValue = _this3.state.inputValue;

            _this3.handleChange(inputValue, 'KEYDOWN_ENTER');
            _this3.onClick();
            return;
        }

        var _state2 = _this3.state,
            value = _state2.value,
            inputStr = _state2.inputStr,
            inputType = _state2.inputType,
            isRange = _state2.isRange;
        var _props3 = _this3.props,
            format = _props3.format,
            _props3$hourStep = _props3.hourStep,
            hourStep = _props3$hourStep === undefined ? 1 : _props3$hourStep,
            _props3$minuteStep = _props3.minuteStep,
            minuteStep = _props3$minuteStep === undefined ? 1 : _props3$minuteStep,
            _props3$secondStep = _props3.secondStep,
            secondStep = _props3$secondStep === undefined ? 1 : _props3$secondStep,
            disabledMinutes = _props3.disabledMinutes,
            disabledSeconds = _props3.disabledSeconds;


        var unit = 'second';

        if (disabledSeconds) {
            unit = disabledMinutes ? 'hour' : 'minute';
        }

        var timeStr = onTimeKeydown(e, {
            format: format,
            timeInputStr: isRange ? inputStr[inputType] : inputStr,
            steps: {
                hour: hourStep,
                minute: minuteStep,
                second: secondStep
            },
            value: value
        }, unit);

        if (!timeStr) return;
        var newInputStr = timeStr;
        if (isRange) {
            newInputStr = inputStr;
            newInputStr[inputType] = timeStr;
        }

        _this3.handleChange(newInputStr, 'KEYDOWN_CODE');
    };

    this.onVisibleChange = function (visible, type) {
        if (!('visible' in _this3.props)) {
            _this3.setState({
                visible: visible
            });
        }
        _this3.props.onVisibleChange(visible, type);
    };

    this.onClick = function () {
        var _state3 = _this3.state,
            visible = _state3.visible,
            inputType = _state3.inputType;


        if (!visible) {
            _this3.onVisibleChange(true);
            _this3.handleInputFocus(inputType);
        }
    };

    this.handleVisibleChange = function (visible, targetType) {
        if (targetType === 'docClick') {
            // 弹层收起 触发 Change 逻辑
            if (!visible) {
                _this3.handleChange(_this3.state.curValue, 'VISIBLE_CHANGE');
            }
            _this3.onVisibleChange(visible);
        }
    };

    this.handleInputFocus = function (inputType) {
        var inputEl = _this3.dateInput && _this3.dateInput.input;

        if (_this3.state.isRange) {
            inputEl = inputEl && inputEl[inputType];
        }

        inputEl && inputEl.focus();
    };

    this.onOk = function () {
        var curValue = _this3.state.curValue;

        var checkedValue = _this3.checkValue(curValue);

        func.invoke(_this3.props, 'onOk', _this3.getOutputArgs(checkedValue));

        _this3.setState({ value: checkedValue });
        _this3.handleChange(checkedValue, 'CLICK_OK');
    };

    this.onInputTypeChange = function (idx) {
        var _state4 = _this3.state,
            inputType = _state4.inputType,
            visible = _state4.visible;


        if (idx !== inputType) {
            _this3.setState({
                inputType: idx,
                justBeginInput: !(idx !== null && visible)
            });
        }
    };

    this.checkValue = function (value, strictly) {
        var inputType = _this3.state.inputType;

        var formatter = function formatter(v) {
            return typeof v === 'string' ? datejs(v, 'HH:mm:ss') : v;
        };
        var formattedValue = Array.isArray(value) ? value.map(function (v) {
            return formatter(v);
        }) : formatter(value);

        return _this3.props.type === TIME_PICKER_TYPE.RANGE ? checkRangeDate(formattedValue, inputType, _this3.props.disabled, strictly) : checkDate(formattedValue);
    };

    this.getOutputArgs = function (value) {
        var format = _this3.props.format;

        return [value, fmtValue(value, format)];
    };

    this.onChange = function (v) {
        var state = _this3.state,
            props = _this3.props;
        var format = props.format;


        var nextValue = v === undefined ? state.value : v;
        var value = _this3.checkValue(nextValue);

        _this3.setState({
            curValue: value,
            preValue: value,
            inputStr: fmtValue(value, format),
            inputValue: fmtValue(value, format)
        });

        func.invoke(_this3.props, 'onChange', _this3.getOutputArgs(nextValue));
    };

    this.shouldSwitchInput = function (value) {
        var _state5 = _this3.state,
            inputType = _state5.inputType,
            justBeginInput = _state5.justBeginInput;

        var idx = justBeginInput ? switchInputType(inputType) : value.indexOf(null);

        if (idx !== -1 && _this3.isEnabled(idx)) {
            _this3.onInputTypeChange(idx);
            _this3.handleInputFocus(idx);
            return true;
        }

        return false;
    };

    this.handleChange = function (v, eventType) {
        var format = _this3.props.format;
        var _state6 = _this3.state,
            isRange = _state6.isRange,
            value = _state6.value,
            preValue = _state6.preValue;

        var forceEvents = ['KEYDOWN_ENTER', 'CLICK_PRESET', 'CLICK_OK', 'INPUT_CLEAR', 'VISIBLE_CHANGE'];
        var isTemporary = isRange && !forceEvents.includes(eventType);

        // 面板收起时候，将值设置为确认值
        v = eventType === 'VISIBLE_CHANGE' ? value : _this3.checkValue(v, !isTemporary);

        var stringV = fmtValue(v, format);

        _this3.setState({
            curValue: v,
            inputStr: stringV,
            inputValue: stringV,
            inputing: false,
            selecting: eventType === 'start' || eventType === 'end'
        });

        if (!isTemporary) {
            _this3.setState({
                value: v
            }, function () {
                // 判断当前选择结束，收起面板：
                // 1. 非 Range 选择
                // 2. 非 选择预设时间、面板收起、清空输入 操作
                // 3. 不需要切换输入框
                var shouldHidePanel = ['CLICK_PRESET', 'VISIBLE_CHANGE', 'KEYDOWN_ENTER', 'INPUT_CLEAR', 'CLICK_OK'].includes(eventType) || isRange && !_this3.shouldSwitchInput(v);
                if (shouldHidePanel) {
                    _this3.onVisibleChange(false);
                }

                if (isValueChanged(v, preValue)) {
                    _this3.onChange(v);
                }
            });
        }
    };

    this.isEnabled = function (idx) {
        var disabled = _this3.props.disabled;


        return Array.isArray(disabled) ? idx === undefined ? !disabled[0] && !disabled[1] : !disabled[idx] : !disabled;
    };

    this.handleClear = function () {
        /**
         * 清空输入之后 input 组件内部会让第二个输入框获得焦点
         * 所以这里需要设置 setTimeout 才能让第一个 input 获得焦点
         */
        _this3.clearTimeoutId = setTimeout(function () {
            _this3.handleInputFocus(0);
        });

        _this3.setState({
            inputType: TIME_INPUT_TYPE.BEGIN,
            justBeginInput: _this3.isEnabled()
        });
    };

    this.handleInput = function (v, eventType) {
        var isRange = _this3.state.isRange;

        if (eventType === 'clear') {
            _this3.handleChange(v, 'INPUT_CLEAR');

            if (isRange) {
                _this3.handleClear();
            }
        } else {
            _this3.setState({
                inputStr: v,
                inputValue: v,
                curValue: _this3.checkValue(v),
                inputing: true,
                visible: true
            });
        }
    };
}, _temp);
TimePicker2.displayName = 'TimePicker2';


export default polyfill(TimePicker2);