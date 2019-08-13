import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp, _initialiseProps;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';
import Input from '../input';
import Overlay from '../overlay';
import nextLocale from '../locale/zh-cn';
import { func, obj } from '../util';
import TimePickerPanel from './panel';
import { checkDateValue, formatDateValue } from './utils';
import { onTimeKeydown } from '../date-picker/util';

var Popup = Overlay.Popup;
var noop = func.noop;

var timePickerLocale = nextLocale.TimePicker;

/**
 * TimePicker
 */
var TimePicker = (_temp = _class = function (_Component) {
    _inherits(TimePicker, _Component);

    function TimePicker(props, context) {
        _classCallCheck(this, TimePicker);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _initialiseProps.call(_this);

        var value = formatDateValue(props.value || props.defaultValue, props.format);
        _this.inputAsString = typeof (props.value || props.defaultValue) === 'string';
        _this.state = {
            value: value,
            inputStr: '',
            inputing: false,
            visible: props.visible || props.defaultVisible
        };
        return _this;
    }

    TimePicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            var value = formatDateValue(nextProps.value, nextProps.format || this.props.format);
            this.setState({
                value: value
            });
        }

        if ('visible' in nextProps) {
            this.setState({
                visible: nextProps.visible
            });
        }
    };

    TimePicker.prototype.onValueChange = function onValueChange(newValue) {
        var ret = this.inputAsString && newValue ? newValue.format(this.props.format) : newValue;
        this.props.onChange(ret);
    };

    TimePicker.prototype.render = function render() {
        var _classnames, _classnames2;

        var _props = this.props,
            prefix = _props.prefix,
            label = _props.label,
            state = _props.state,
            placeholder = _props.placeholder,
            size = _props.size,
            format = _props.format,
            hasClear = _props.hasClear,
            hourStep = _props.hourStep,
            minuteStep = _props.minuteStep,
            secondStep = _props.secondStep,
            disabledHours = _props.disabledHours,
            disabledMinutes = _props.disabledMinutes,
            disabledSeconds = _props.disabledSeconds,
            renderTimeMenuItems = _props.renderTimeMenuItems,
            popupAlign = _props.popupAlign,
            popupTriggerType = _props.popupTriggerType,
            popupContainer = _props.popupContainer,
            popupStyle = _props.popupStyle,
            popupClassName = _props.popupClassName,
            popupProps = _props.popupProps,
            followTrigger = _props.followTrigger,
            disabled = _props.disabled,
            className = _props.className,
            locale = _props.locale,
            rtl = _props.rtl,
            others = _objectWithoutProperties(_props, ['prefix', 'label', 'state', 'placeholder', 'size', 'format', 'hasClear', 'hourStep', 'minuteStep', 'secondStep', 'disabledHours', 'disabledMinutes', 'disabledSeconds', 'renderTimeMenuItems', 'popupAlign', 'popupTriggerType', 'popupContainer', 'popupStyle', 'popupClassName', 'popupProps', 'followTrigger', 'disabled', 'className', 'locale', 'rtl']);

        var _state = this.state,
            value = _state.value,
            inputStr = _state.inputStr,
            inputing = _state.inputing,
            visible = _state.visible;


        var triggerCls = classnames((_classnames = {}, _classnames[prefix + 'time-picker-trigger'] = true, _classnames));

        if (rtl) {
            others.dir = 'rtl';
        }

        var inputValue = inputing ? inputStr : value && value.format(format) || '';
        var sharedInputProps = {
            size: size,
            disabled: disabled,
            value: inputValue,
            hasClear: value && hasClear,
            onChange: this.onInputChange,
            onBlur: this.onInputBlur,
            onPressEnter: this.onInputBlur,
            onKeyDown: this.onKeyown,
            hint: 'clock'
        };

        var triggerInput = React.createElement(
            'div',
            { className: triggerCls },
            React.createElement(Input, _extends({}, sharedInputProps, {
                label: label,
                state: state,
                placeholder: placeholder || locale.placeholder,
                className: prefix + 'time-picker-input'
            }))
        );

        var panelProps = {
            prefix: prefix,
            locale: locale,
            value: value,
            disabled: disabled,
            showHour: format.indexOf('H') > -1,
            showSecond: format.indexOf('s') > -1,
            hourStep: hourStep,
            minuteStep: minuteStep,
            secondStep: secondStep,
            disabledHours: disabledHours,
            disabledMinutes: disabledMinutes,
            disabledSeconds: disabledSeconds,
            renderTimeMenuItems: renderTimeMenuItems,
            onSelect: this.onTimePanelSelect
        };

        var classNames = classnames((_classnames2 = {}, _classnames2[prefix + 'time-picker'] = true, _classnames2[prefix + 'time-picker-' + size] = size, _classnames2[prefix + 'disabled'] = disabled, _classnames2), className);

        return React.createElement(
            'div',
            _extends({}, obj.pickOthers(TimePicker.propTypes, others), {
                className: classNames
            }),
            React.createElement(
                Popup,
                _extends({}, popupProps, {
                    followTrigger: followTrigger,
                    autoFocus: true,
                    visible: visible,
                    onVisibleChange: this.onVisibleChange,
                    trigger: triggerInput,
                    container: popupContainer,
                    disabled: disabled,
                    align: popupAlign,
                    triggerType: popupTriggerType,
                    style: popupStyle,
                    className: popupClassName
                }),
                React.createElement(
                    'div',
                    {
                        dir: others.dir,
                        className: prefix + 'time-picker-body'
                    },
                    React.createElement(
                        'div',
                        { className: prefix + 'time-picker-panel-header' },
                        React.createElement(Input, _extends({}, sharedInputProps, {
                            placeholder: format,
                            className: prefix + 'time-picker-panel-input'
                        }))
                    ),
                    React.createElement(TimePickerPanel, panelProps)
                )
            )
        );
    };

    return TimePicker;
}(Component), _class.propTypes = {
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
    placeholder: PropTypes.string,
    /**
     * 时间值（moment 对象或时间字符串，受控状态使用）
     */
    value: checkDateValue,
    /**
     * 时间初值（moment 对象或时间字符串，非受控状态使用）
     */
    defaultValue: checkDateValue,
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
     * https://momentjs.com/docs/#/parsing/string-format/
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
     * @param {moment} value 当前时间，可能为 null
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
    popupContainer: PropTypes.func,
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
     * 时间值改变时的回调
     * @param {Object|String} value 时间对象或时间字符串
     */
    onChange: PropTypes.func,
    className: PropTypes.string,
    name: PropTypes.string
}, _class.defaultProps = {
    prefix: 'next-',
    rtl: false,
    locale: timePickerLocale,
    size: 'medium',
    format: 'HH:mm:ss',
    hasClear: true,
    disabled: false,
    popupAlign: 'tl tl',
    popupTriggerType: 'click',
    onChange: noop,
    onVisibleChange: noop
}, _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.onClearValue = function () {
        _this2.setState({
            value: null
        });
        if (_this2.state.value) {
            _this2.onValueChange(null);
        }
    };

    this.onInputChange = function (inputValue, e, eventType) {
        if (!('value' in _this2.props)) {
            if (eventType === 'clear' || !inputValue) {
                e.stopPropagation();
                _this2.onClearValue();
            }

            _this2.setState({
                inputStr: inputValue,
                inputing: true
            });
        } else if (eventType === 'clear') {
            // 受控状态下用户点击 clear
            e.stopPropagation();
            _this2.onValueChange(null);
        }
    };

    this.onInputBlur = function () {
        var _state2 = _this2.state,
            value = _state2.value,
            inputStr = _state2.inputStr;

        if (!value && inputStr) {
            var format = _this2.props.format;

            var parsed = moment(inputStr, format, true);
            if (parsed.isValid()) {
                _this2.setState({
                    value: parsed,
                    inputStr: ''
                });
                _this2.onValueChange(parsed);
            }
            _this2.setState({
                inputing: false
            });
        }
    };

    this.onKeyown = function (e) {
        var _state3 = _this2.state,
            value = _state3.value,
            inputStr = _state3.inputStr;
        var _props2 = _this2.props,
            format = _props2.format,
            _props2$hourStep = _props2.hourStep,
            hourStep = _props2$hourStep === undefined ? 1 : _props2$hourStep,
            _props2$minuteStep = _props2.minuteStep,
            minuteStep = _props2$minuteStep === undefined ? 1 : _props2$minuteStep,
            _props2$secondStep = _props2.secondStep,
            secondStep = _props2$secondStep === undefined ? 1 : _props2$secondStep,
            disabledMinutes = _props2.disabledMinutes,
            disabledSeconds = _props2.disabledSeconds;


        var unit = 'second';

        if (disabledSeconds) {
            unit = disabledMinutes ? 'hour' : 'minute';
        }
        var timeStr = onTimeKeydown(e, {
            format: format,
            timeInputStr: inputStr,
            steps: {
                hour: hourStep,
                minute: minuteStep,
                second: secondStep
            },
            value: value
        }, unit);

        if (!timeStr) return;

        _this2.onInputChange(timeStr);
    };

    this.onTimePanelSelect = function (value) {
        if (!('value' in _this2.props)) {
            _this2.setState({
                value: value,
                inputing: false
            });
        }
        if (!_this2.state.value || value.valueOf() !== _this2.state.value.valueOf()) {
            _this2.onValueChange(value);
        }
    };

    this.onVisibleChange = function (visible, type) {
        if (!('visible' in _this2.props)) {
            _this2.setState({
                visible: visible
            });
        }
        _this2.props.onVisibleChange(visible, type);
    };
}, _temp);
TimePicker.displayName = 'TimePicker';
export { TimePicker as default };