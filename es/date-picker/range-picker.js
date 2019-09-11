import _typeof from 'babel-runtime/helpers/typeof';
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
import Overlay from '../overlay';
import Input from '../input';
import RangeCalendar from '../calendar/range-calendar';
import TimePickerPanel from '../time-picker/panel';
import nextLocale from '../locale/zh-cn';
import { func, obj } from '../util';
import { PANEL, resetValueTime, formatDateValue, extend, getDateTimeFormat, isFunction, onDateKeydown, onTimeKeydown } from './util';
import PanelFooter from './module/panel-footer';

var Popup = Overlay.Popup;


function mapInputStateName(name) {
    return {
        startValue: 'startDateInputStr',
        endValue: 'endDateInputStr',
        startTime: 'startTimeInputStr',
        endTime: 'endTimeInputStr'
    }[name];
}

function mapTimeToValue(name) {
    return {
        startTime: 'startValue',
        endTime: 'endValue'
    }[name];
}

function getFormatValues(values, format) {
    if (!Array.isArray(values)) {
        return [null, null];
    }
    return [formatDateValue(values[0], format), formatDateValue(values[1], format)];
}

/**
 * DatePicker.RangePicker
 */
var RangePicker = (_temp = _class = function (_Component) {
    _inherits(RangePicker, _Component);

    function RangePicker(props, context) {
        _classCallCheck(this, RangePicker);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _initialiseProps.call(_this);

        var dateTimeFormat = getDateTimeFormat(props.format, props.showTime);
        extend(dateTimeFormat, _this);

        var val = props.value || props.defaultValue;
        var values = getFormatValues(val, _this.dateTimeFormat);
        _this.inputAsString = val && (typeof val[0] === 'string' || typeof val[1] === 'string');
        _this.state = {
            visible: props.visible || props.defaultVisible,
            startValue: values[0],
            endValue: values[1],
            startDateInputStr: '',
            endDateInputStr: '',
            activeDateInput: 'startValue',
            startTimeInputStr: '',
            endTimeInputStr: '',
            inputing: false, // 当前是否处于输入状态
            panel: PANEL.DATE
        };
        return _this;
    }

    RangePicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('showTime' in nextProps) {
            var dateTimeFormat = getDateTimeFormat(nextProps.format || this.props.format, nextProps.showTime);
            extend(dateTimeFormat, this);
        }

        if ('value' in nextProps) {
            var values = getFormatValues(nextProps.value, this.dateTimeFormat);
            this.setState({
                startValue: values[0],
                endValue: values[1]
            });
            this.inputAsString = nextProps.value && (typeof nextProps.value[0] === 'string' || typeof nextProps.value[1] === 'string');
        }

        if ('visible' in nextProps) {
            this.setState({
                visible: nextProps.visible
            });
        }
    };

    // 如果用户没有给定时间禁用逻辑，则给默认到禁用逻辑，即如果是同一天，则时间不能是同样的


    RangePicker.prototype.render = function render() {
        var _classnames,
            _classnames2,
            _classnames3,
            _classnames4,
            _classnames5,
            _this2 = this,
            _PANEL$DATE$PANEL$TIM;

        var _props = this.props,
            prefix = _props.prefix,
            rtl = _props.rtl,
            defaultVisibleMonth = _props.defaultVisibleMonth,
            onVisibleMonthChange = _props.onVisibleMonthChange,
            showTime = _props.showTime,
            disabledDate = _props.disabledDate,
            footerRender = _props.footerRender,
            label = _props.label,
            _props$ranges = _props.ranges,
            ranges = _props$ranges === undefined ? {} : _props$ranges,
            inputState = _props.state,
            size = _props.size,
            disabled = _props.disabled,
            hasClear = _props.hasClear,
            popupTriggerType = _props.popupTriggerType,
            popupAlign = _props.popupAlign,
            popupContainer = _props.popupContainer,
            popupStyle = _props.popupStyle,
            popupClassName = _props.popupClassName,
            popupProps = _props.popupProps,
            followTrigger = _props.followTrigger,
            className = _props.className,
            locale = _props.locale,
            inputProps = _props.inputProps,
            dateCellRender = _props.dateCellRender,
            monthCellRender = _props.monthCellRender,
            yearCellRender = _props.yearCellRender,
            startDateInputAriaLabel = _props.startDateInputAriaLabel,
            startTimeInputAriaLabel = _props.startTimeInputAriaLabel,
            endDateInputAriaLabel = _props.endDateInputAriaLabel,
            endTimeInputAriaLabel = _props.endTimeInputAriaLabel,
            others = _objectWithoutProperties(_props, ['prefix', 'rtl', 'defaultVisibleMonth', 'onVisibleMonthChange', 'showTime', 'disabledDate', 'footerRender', 'label', 'ranges', 'state', 'size', 'disabled', 'hasClear', 'popupTriggerType', 'popupAlign', 'popupContainer', 'popupStyle', 'popupClassName', 'popupProps', 'followTrigger', 'className', 'locale', 'inputProps', 'dateCellRender', 'monthCellRender', 'yearCellRender', 'startDateInputAriaLabel', 'startTimeInputAriaLabel', 'endDateInputAriaLabel', 'endTimeInputAriaLabel']);

        var state = this.state;

        var classNames = classnames((_classnames = {}, _classnames[prefix + 'range-picker'] = true, _classnames['' + prefix + size] = size, _classnames[prefix + 'disabled'] = disabled, _classnames), className);

        var panelBodyClassName = classnames((_classnames2 = {}, _classnames2[prefix + 'range-picker-body'] = true, _classnames2[prefix + 'range-picker-body-show-time'] = showTime, _classnames2));

        var triggerCls = classnames((_classnames3 = {}, _classnames3[prefix + 'range-picker-trigger'] = true, _classnames3[prefix + 'error'] = inputState === 'error', _classnames3));

        var startDateInputCls = classnames((_classnames4 = {}, _classnames4[prefix + 'range-picker-panel-input-start-date'] = true, _classnames4[prefix + 'focus'] = state.activeDateInput === 'startValue', _classnames4));

        var endDateInputCls = classnames((_classnames5 = {}, _classnames5[prefix + 'range-picker-panel-input-end-date'] = true, _classnames5[prefix + 'focus'] = state.activeDateInput === 'endValue', _classnames5));

        if (rtl) {
            others.dir = 'rtl';
        }

        var startDateInputValue = state.inputing === 'startValue' ? state.startDateInputStr : state.startValue && state.startValue.format(this.format) || '';
        var endDateInputValue = state.inputing === 'endValue' ? state.endDateInputStr : state.endValue && state.endValue.format(this.format) || '';

        var startTriggerValue = startDateInputValue;
        var endTriggerValue = endDateInputValue;

        var sharedInputProps = _extends({}, inputProps, {
            size: size,
            disabled: disabled,
            onChange: this.onDateInputChange,
            onBlur: this.onDateInputBlur,
            onPressEnter: this.onDateInputBlur,
            onKeyDown: this.onDateInputKeyDown
        });

        var startDateInput = React.createElement(Input, _extends({}, sharedInputProps, {
            'aria-label': startDateInputAriaLabel,
            placeholder: this.format,
            value: startDateInputValue,
            onFocus: function onFocus() {
                return _this2.onFocusDateInput('startValue');
            },
            className: startDateInputCls
        }));

        var endDateInput = React.createElement(Input, _extends({}, sharedInputProps, {
            'aria-label': endDateInputAriaLabel,
            placeholder: this.format,
            value: endDateInputValue,
            onFocus: function onFocus() {
                return _this2.onFocusDateInput('endValue');
            },
            className: endDateInputCls
        }));

        var datePanel = React.createElement(RangeCalendar, {
            showOtherMonth: true,
            dateCellRender: dateCellRender,
            monthCellRender: monthCellRender,
            yearCellRender: yearCellRender,
            format: this.format,
            defaultVisibleMonth: defaultVisibleMonth,
            onVisibleMonthChange: onVisibleMonthChange,
            disabledDate: disabledDate,
            onSelect: this.onSelectCalendarPanel,
            startValue: state.startValue,
            endValue: state.endValue
        });

        var startTimeInput = null;
        var endTimeInput = null;
        var timePanel = null;
        var panelFooter = footerRender();

        if (showTime) {
            var _classnames6, _classnames7;

            var startTimeInputValue = state.inputing === 'startTime' ? state.startTimeInputStr : state.startValue && state.startValue.format(this.timeFormat) || '';
            var endTimeInputValue = state.inputing === 'endTime' ? state.endTimeInputStr : state.endValue && state.endValue.format(this.timeFormat) || '';

            startTriggerValue = state.startValue && state.startValue.format(this.dateTimeFormat) || '';
            endTriggerValue = state.endValue && state.endValue.format(this.dateTimeFormat) || '';

            var sharedTimeInputProps = {
                size: size,
                placeholder: this.timeFormat,
                onFocus: this.onFocusTimeInput,
                onBlur: this.onTimeInputBlur,
                onPressEnter: this.onTimeInputBlur,
                onChange: this.onTimeInputChange,
                onKeyDown: this.onTimeInputKeyDown
            };

            var startTimeInputCls = classnames((_classnames6 = {}, _classnames6[prefix + 'range-picker-panel-input-start-time'] = true, _classnames6[prefix + 'focus'] = state.activeDateInput === 'startTime', _classnames6));

            startTimeInput = React.createElement(Input, _extends({}, sharedTimeInputProps, {
                value: startTimeInputValue,
                'aria-label': startTimeInputAriaLabel,
                disabled: disabled || !state.startValue,
                onFocus: function onFocus() {
                    return _this2.onFocusTimeInput('startTime');
                },
                className: startTimeInputCls
            }));

            var endTimeInputCls = classnames((_classnames7 = {}, _classnames7[prefix + 'range-picker-panel-input-end-time'] = true, _classnames7[prefix + 'focus'] = state.activeDateInput === 'endTime', _classnames7));

            endTimeInput = React.createElement(Input, _extends({}, sharedTimeInputProps, {
                value: endTimeInputValue,
                'aria-label': endTimeInputAriaLabel,
                disabled: disabled || !state.endValue,
                onFocus: function onFocus() {
                    return _this2.onFocusTimeInput('endTime');
                },
                className: endTimeInputCls
            }));

            var showSecond = this.timeFormat.indexOf('s') > -1;

            var sharedTimePickerProps = _extends({}, showTime, {
                prefix: prefix,
                locale: locale,
                disabled: disabled,
                showSecond: showSecond
            });

            var disabledTime = this.getDisabledTime(state);

            timePanel = React.createElement(
                'div',
                { className: prefix + 'range-picker-panel-time' },
                React.createElement(TimePickerPanel, _extends({}, sharedTimePickerProps, {
                    disabled: disabled || !state.startValue,
                    className: prefix + 'range-picker-panel-time-start',
                    value: state.startValue,
                    onSelect: this.onSelectStartTime
                })),
                React.createElement(TimePickerPanel, _extends({}, sharedTimePickerProps, disabledTime, {
                    disabled: disabled || !state.endValue,
                    className: prefix + 'range-picker-panel-time-end',
                    value: state.endValue,
                    onSelect: this.onSelectEndTime
                }))
            );
        }

        panelFooter = panelFooter || React.createElement(PanelFooter, {
            prefix: prefix,
            value: state.startValue || state.endValue,
            ranges: Object.keys(ranges).map(function (key) {
                return {
                    label: key,
                    value: ranges[key],
                    onChange: function onChange(values) {
                        _this2.setState({
                            startValue: values[0],
                            endValue: values[1]
                        });
                        _this2.onValueChange(values);
                    }
                };
            }),
            disabledOk: !state.startValue || !state.endValue || state.startValue.valueOf() > state.endValue.valueOf(),
            locale: locale,
            panel: state.panel,
            onPanelChange: showTime ? this.changePanel : null,
            onOk: this.onOk
        });

        var panelBody = (_PANEL$DATE$PANEL$TIM = {}, _PANEL$DATE$PANEL$TIM[PANEL.DATE] = datePanel, _PANEL$DATE$PANEL$TIM[PANEL.TIME] = timePanel, _PANEL$DATE$PANEL$TIM)[state.panel];

        var allowClear = state.startValue && state.endValue && hasClear;
        var trigger = React.createElement(
            'div',
            { className: triggerCls },
            React.createElement(Input, _extends({}, sharedInputProps, {
                readOnly: true,
                role: 'combobox',
                'aria-expanded': state.visible,
                label: label,
                placeholder: locale.startPlaceholder,
                value: startTriggerValue,
                hasBorder: false,
                className: prefix + 'range-picker-trigger-input',
                onFocus: function onFocus() {
                    return _this2.onFocusDateInput('startValue');
                }
            })),
            React.createElement(
                'span',
                { className: prefix + 'range-picker-trigger-separator' },
                '-'
            ),
            React.createElement(Input, _extends({}, sharedInputProps, {
                readOnly: true,
                role: 'combobox',
                'aria-expanded': state.visible,
                placeholder: locale.endPlaceholder,
                value: endTriggerValue,
                hasBorder: false,
                className: prefix + 'range-picker-trigger-input',
                onFocus: function onFocus() {
                    return _this2.onFocusDateInput('endValue');
                },
                hasClear: allowClear,
                hint: 'calendar'
            }))
        );

        return React.createElement(
            'div',
            _extends({}, obj.pickOthers(RangePicker.propTypes, others), {
                className: classNames
            }),
            React.createElement(
                Popup,
                _extends({
                    autoFocus: true
                }, popupProps, {
                    followTrigger: followTrigger,
                    disabled: disabled,
                    visible: state.visible,
                    onVisibleChange: this.onVisibleChange,
                    align: popupAlign,
                    triggerType: popupTriggerType,
                    container: popupContainer,
                    style: popupStyle,
                    className: popupClassName,
                    trigger: trigger
                }),
                React.createElement(
                    'div',
                    { dir: others.dir, className: panelBodyClassName },
                    React.createElement(
                        'div',
                        { className: prefix + 'range-picker-panel-header' },
                        React.createElement(
                            'div',
                            {
                                className: prefix + 'range-picker-panel-input'
                            },
                            startDateInput,
                            startTimeInput,
                            React.createElement(
                                'span',
                                {
                                    className: prefix + 'range-picker-panel-input-separator'
                                },
                                '-'
                            ),
                            endDateInput,
                            endTimeInput
                        )
                    ),
                    panelBody,
                    panelFooter
                )
            )
        );
    };

    return RangePicker;
}(Component), _class.propTypes = {
    prefix: PropTypes.string,
    rtl: PropTypes.bool,
    /**
     * 默认展示的起始月份
     * @return {MomentObject} 返回包含指定月份的 moment 对象实例
     */
    defaultVisibleMonth: PropTypes.func,
    onVisibleMonthChange: PropTypes.func,
    /**
     * 日期范围值数组 [moment, moment]
     */
    value: PropTypes.array,
    /**
     * 初始的日期范围值数组 [moment, moment]
     */
    defaultValue: PropTypes.array,
    /**
     * 日期格式
     */
    format: PropTypes.string,
    /**
     * 是否使用时间控件，支持传入 TimePicker 的属性
     */
    showTime: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    /**
     * 每次选择是否重置时间（仅在 showTime 开启时有效）
     */
    resetTime: PropTypes.bool,
    /**
     * 禁用日期函数
     * @param {MomentObject} 日期值
     * @param {String} view 当前视图类型，year: 年， month: 月, date: 日
     * @return {Boolean} 是否禁用
     */
    disabledDate: PropTypes.func,
    /**
     * 自定义面板页脚
     * @return {Node} 自定义的面板页脚组件
     */
    footerRender: PropTypes.func,
    /**
     * 日期范围值改变时的回调 [ MomentObject|String, MomentObject|String ]
     * @param {Array<MomentObject|String>} value 日期值
     */
    onChange: PropTypes.func,
    /**
     * 点击确认按钮时的回调 返回开始时间和结束时间`[ MomentObject|String, MomentObject|String ]`
     * @return {Array} 日期范围
     */
    onOk: PropTypes.func,
    /**
     * 输入框内置标签
     */
    label: PropTypes.node,
    /**
     * 输入框状态
     */
    state: PropTypes.oneOf(['error', 'loading', 'success']),
    /**
     * 输入框尺寸
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * 是否禁用
     */
    disabled: PropTypes.bool,
    /**
     * 是否显示清空按钮
     */
    hasClear: PropTypes.bool,
    /**
     * 弹层显示状态
     */
    visible: PropTypes.bool,
    /**
     * 弹层默认是否显示
     */
    defaultVisible: PropTypes.bool,
    /**
     * 弹层展示状态变化时的回调
     * @param {Boolean} visible 弹层是否显示
     * @param {String} type 触发弹层显示和隐藏的来源 okBtnClick 表示由确认按钮触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发
     */
    onVisibleChange: PropTypes.func,
    /**
     * 弹层触发方式
     */
    popupTriggerType: PropTypes.oneOf(['click', 'hover']),
    /**
     * 弹层对齐方式, 具体含义见 OverLay文档
     */
    popupAlign: PropTypes.string,
    /**
     * 弹层容器
     * @param {Element} target 目标元素
     * @return {Element} 弹层的容器元素
     */
    popupContainer: PropTypes.func,
    /**
     * 弹层自定义样式
     */
    popupStyle: PropTypes.object,
    /**
     * 弹层自定义样式类
     */
    popupClassName: PropTypes.string,
    /**
     * 弹层其他属性
     */
    popupProps: PropTypes.object,
    /**
     * 是否跟随滚动
     */
    followTrigger: PropTypes.bool,
    /**
     * 输入框其他属性
     */
    inputProps: PropTypes.object,
    /**
     * 自定义日期单元格渲染
     */
    dateCellRender: PropTypes.func,
    /**
     * 自定义月份渲染函数
     * @param {Object} calendarDate 对应 Calendar 返回的自定义日期对象
     * @returns {ReactNode}
     */
    monthCellRender: PropTypes.func,
    yearCellRender: PropTypes.func, // 兼容 0.x yearCellRender
    /**
     * 开始日期输入框的 aria-label 属性
     */
    startDateInputAriaLabel: PropTypes.string,
    /**
     * 开始时间输入框的 aria-label 属性
     */
    startTimeInputAriaLabel: PropTypes.string,
    /**
     * 结束日期输入框的 aria-label 属性
     */
    endDateInputAriaLabel: PropTypes.string,
    /**
     * 结束时间输入框的 aria-label 属性
     */
    endTimeInputAriaLabel: PropTypes.string,
    ranges: PropTypes.object,
    locale: PropTypes.object,
    className: PropTypes.string,
    name: PropTypes.string
}, _class.defaultProps = {
    prefix: 'next-',
    rtl: false,
    format: 'YYYY-MM-DD',
    size: 'medium',
    showTime: false,
    resetTime: false,
    disabledDate: function disabledDate() {
        return false;
    },
    footerRender: function footerRender() {
        return null;
    },
    hasClear: true,
    defaultVisible: false,
    popupTriggerType: 'click',
    popupAlign: 'tl tl',
    locale: nextLocale.DatePicker,
    onChange: func.noop,
    onOk: func.noop,
    onVisibleChange: func.noop
}, _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.onValueChange = function (values) {
        var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'onChange';

        var ret = void 0;
        if (!values.length || !_this3.inputAsString) {
            ret = values;
        } else {
            ret = [values[0] ? values[0].format(_this3.dateTimeFormat) : null, values[1] ? values[1].format(_this3.dateTimeFormat) : null];
        }
        _this3.props[handler](ret);
    };

    this.onSelectCalendarPanel = function (value) {
        var _props2 = _this3.props,
            showTime = _props2.showTime,
            resetTime = _props2.resetTime;
        var _state = _this3.state,
            prevActiveDateInput = _state.activeDateInput,
            prevStartValue = _state.startValue,
            prevEndValue = _state.endValue;

        var newState = {
            activeDateInput: prevActiveDateInput,
            inputing: false
        };

        var newValue = value;
        switch (prevActiveDateInput) {
            case 'startValue':
                {
                    if (!prevEndValue || value.valueOf() <= prevEndValue.valueOf()) {
                        newState.activeDateInput = 'endValue';
                    }

                    if (showTime) {
                        if (!prevStartValue) {
                            // 第一次选择，如果设置了时间默认值，则使用该默认时间
                            if (showTime.defaultValue) {
                                var defaultTimeValue = formatDateValue(Array.isArray(showTime.defaultValue) ? showTime.defaultValue[0] : showTime.defaultValue, _this3.timeFormat);
                                newValue = resetValueTime(value, defaultTimeValue);
                            }
                        } else if (!resetTime) {
                            // 非第一次选择，如果开启了 resetTime ，则记住之前选择的时间值
                            newValue = resetValueTime(value, prevStartValue);
                        }
                    }

                    newState.startValue = newValue;

                    if (prevEndValue && value.valueOf() > prevEndValue.valueOf()) {
                        newState.endValue = null;
                        newState.activeDateInput = 'endValue';
                    }
                    break;
                }

            case 'endValue':
                if (!prevStartValue) {
                    newState.activeDateInput = 'startValue';
                }

                if (showTime) {
                    if (!prevEndValue) {
                        // 第一次选择，如果设置了时间默认值，则使用该默认时间
                        if (showTime.defaultValue) {
                            var _defaultTimeValue = formatDateValue(Array.isArray(showTime.defaultValue) ? showTime.defaultValue[1] || showTime.defaultValue[0] : showTime.defaultValue, _this3.timeFormat);
                            newValue = resetValueTime(value, _defaultTimeValue);
                        }
                    } else if (!resetTime) {
                        // 非第一次选择，如果开启了 resetTime ，则记住之前选择的时间值
                        newValue = resetValueTime(value, prevEndValue);
                    }
                }

                newState.endValue = newValue;

                // 选择了一个比开始日期更小的结束日期，此时表示用户重新选择了
                if (prevStartValue && value.valueOf() < prevStartValue.valueOf()) {
                    newState.startValue = value;
                    newState.endValue = null;
                }
                break;
        }

        var newStartValue = 'startValue' in newState ? newState.startValue : prevStartValue;
        var newEndValue = 'endValue' in newState ? newState.endValue : prevEndValue;

        // 受控状态选择不更新值
        if ('value' in _this3.props) {
            delete newState.startValue;
            delete newState.endValue;
        }

        _this3.setState(newState);

        _this3.onValueChange([newStartValue, newEndValue]);
    };

    this.clearRange = function () {
        _this3.setState({
            startDateInputStr: '',
            endDateInputStr: '',
            startTimeInputStr: '',
            endTimeInputStr: ''
        });

        if (!('value' in _this3.props)) {
            _this3.setState({
                startValue: null,
                endValue: null
            });
        }

        _this3.onValueChange([]);
    };

    this.onDateInputChange = function (inputStr, e, eventType) {
        if (eventType === 'clear' || !inputStr) {
            e.stopPropagation();
            _this3.clearRange();
        } else {
            var _this3$setState;

            var stateName = mapInputStateName(_this3.state.activeDateInput);
            _this3.setState((_this3$setState = {}, _this3$setState[stateName] = inputStr, _this3$setState.inputing = _this3.state.activeDateInput, _this3$setState));
        }
    };

    this.onDateInputBlur = function () {
        var stateName = mapInputStateName(_this3.state.activeDateInput);
        var dateInputStr = _this3.state[stateName];
        if (dateInputStr) {
            var _this3$setState2;

            var _props3 = _this3.props,
                format = _props3.format,
                disabledDate = _props3.disabledDate;

            var parsed = moment(dateInputStr, format, true);

            _this3.setState((_this3$setState2 = {}, _this3$setState2[stateName] = '', _this3$setState2.inputing = false, _this3$setState2));

            if (parsed.isValid() && !disabledDate(parsed, 'date')) {
                var valueName = _this3.state.activeDateInput;
                var newValue = parsed;

                _this3.handleChange(valueName, newValue);
            }
        }
    };

    this.onDateInputKeyDown = function (e) {
        var activeDateInput = _this3.state.activeDateInput;

        var stateName = mapInputStateName(activeDateInput);
        var dateInputStr = _this3.state[stateName];
        var format = _this3.props.format;

        var dateStr = onDateKeydown(e, { format: format, value: _this3.state[activeDateInput], dateInputStr: dateInputStr }, 'day');
        if (!dateStr) return;

        return _this3.onDateInputChange(dateStr);
    };

    this.onFocusDateInput = function (type) {
        if (type !== _this3.state.activeDateInput) {
            _this3.setState({
                activeDateInput: type
            });
        }
        if (_this3.state.panel !== PANEL.DATE) {
            _this3.setState({
                panel: PANEL.DATE
            });
        }
    };

    this.onFocusTimeInput = function (type) {
        if (type !== _this3.state.activeDateInput) {
            _this3.setState({
                activeDateInput: type
            });
        }

        if (_this3.state.panel !== PANEL.TIME) {
            _this3.setState({
                panel: PANEL.TIME
            });
        }
    };

    this.onSelectStartTime = function (value) {
        if (!('value' in _this3.props)) {
            _this3.setState({
                startValue: value,
                inputing: false,
                activeDateInput: 'startTime'
            });
        }
        if (value.valueOf() !== _this3.state.startValue.valueOf()) {
            _this3.onValueChange([value, _this3.state.endValue]);
        }
    };

    this.onSelectEndTime = function (value) {
        if (!('value' in _this3.props)) {
            _this3.setState({
                endValue: value,
                inputing: false,
                activeDateInput: 'endTime'
            });
        }
        if (value.valueOf() !== _this3.state.endValue.valueOf()) {
            _this3.onValueChange([_this3.state.startValue, value]);
        }
    };

    this.onTimeInputChange = function (inputStr) {
        var _this3$setState3;

        var stateName = mapInputStateName(_this3.state.activeDateInput);
        _this3.setState((_this3$setState3 = {}, _this3$setState3[stateName] = inputStr, _this3$setState3.inputing = _this3.state.activeDateInput, _this3$setState3));
    };

    this.onTimeInputBlur = function () {
        var stateName = mapInputStateName(_this3.state.activeDateInput);
        var timeInputStr = _this3.state[stateName];
        if (timeInputStr) {
            var _this3$setState4;

            var parsed = moment(timeInputStr, _this3.timeFormat, true);

            _this3.setState((_this3$setState4 = {}, _this3$setState4[stateName] = '', _this3$setState4.inputing = false, _this3$setState4));

            if (parsed.isValid()) {
                var hour = parsed.hour();
                var minute = parsed.minute();
                var second = parsed.second();
                var valueName = mapTimeToValue(_this3.state.activeDateInput);
                var newValue = _this3.state[valueName].clone().hour(hour).minute(minute).second(second);

                _this3.handleChange(valueName, newValue);
            }
        }
    };

    this.onTimeInputKeyDown = function (e) {
        var showTime = _this3.props.showTime;
        var activeDateInput = _this3.state.activeDateInput;

        var stateName = mapInputStateName(activeDateInput);
        var timeInputStr = _this3.state[stateName];

        var _ref = (typeof showTime === 'undefined' ? 'undefined' : _typeof(showTime)) === 'object' ? showTime : {},
            disabledMinutes = _ref.disabledMinutes,
            disabledSeconds = _ref.disabledSeconds,
            _ref$hourStep = _ref.hourStep,
            hourStep = _ref$hourStep === undefined ? 1 : _ref$hourStep,
            _ref$minuteStep = _ref.minuteStep,
            minuteStep = _ref$minuteStep === undefined ? 1 : _ref$minuteStep,
            _ref$secondStep = _ref.secondStep,
            secondStep = _ref$secondStep === undefined ? 1 : _ref$secondStep;

        var unit = 'second';

        if (disabledSeconds) {
            unit = disabledMinutes ? 'hour' : 'minute';
        }

        var timeStr = onTimeKeydown(e, {
            format: _this3.timeFormat,
            timeInputStr: timeInputStr,
            value: _this3.state[activeDateInput.indexOf('start') ? 'startValue' : 'endValue'],
            steps: {
                hour: hourStep,
                minute: minuteStep,
                second: secondStep
            }
        }, unit);

        if (!timeStr) return;

        _this3.onTimeInputChange(timeStr);
    };

    this.handleChange = function (valueName, newValue) {
        if (!('value' in _this3.props)) {
            var _this3$setState5;

            _this3.setState((_this3$setState5 = {}, _this3$setState5[valueName] = newValue, _this3$setState5));
        }

        var startValue = valueName === 'startValue' ? newValue : _this3.state.startValue;
        var endValue = valueName === 'endValue' ? newValue : _this3.state.endValue;

        _this3.onValueChange([startValue, endValue]);
    };

    this.onVisibleChange = function (visible, type) {
        if (!('visible' in _this3.props)) {
            _this3.setState({
                visible: visible
            });
        }
        _this3.props.onVisibleChange(visible, type);
    };

    this.changePanel = function (panel) {
        var _state2 = _this3.state,
            startValue = _state2.startValue,
            endValue = _state2.endValue;

        _this3.setState({
            panel: panel,
            activeDateInput: panel === PANEL.DATE ? !!startValue && !endValue ? 'endValue' : 'startValue' : 'startTime'
        });
    };

    this.onOk = function () {
        _this3.onVisibleChange(false, 'okBtnClick');
        _this3.onValueChange([_this3.state.startValue, _this3.state.endValue], 'onOk');
    };

    this.getDisabledTime = function (_ref2) {
        var startValue = _ref2.startValue,
            endValue = _ref2.endValue;

        var _ref3 = _this3.props.showTime || {},
            disabledHours = _ref3.disabledHours,
            disabledMinutes = _ref3.disabledMinutes,
            disabledSeconds = _ref3.disabledSeconds;

        var disabledTime = {};

        if (startValue && endValue) {
            var isSameDay = startValue.format('L') === endValue.format('L');
            var newDisabledHours = isFunction(disabledHours) ? disabledHours : function (index) {
                if (isSameDay && index < startValue.hour()) {
                    return true;
                }
            };

            var newDisabledMinutes = isFunction(disabledMinutes) ? disabledMinutes : function (index) {
                if (isSameDay && startValue.hour() === endValue.hour() && index < startValue.minute()) {
                    return true;
                }
            };

            var newDisabledSeconds = isFunction(disabledSeconds) ? disabledSeconds : function (index) {
                if (isSameDay && startValue.hour() === endValue.hour() && startValue.minute() === endValue.minute() && index <= startValue.second()) {
                    return true;
                }
            };
            disabledTime = {
                disabledHours: newDisabledHours,
                disabledMinutes: newDisabledMinutes,
                disabledSeconds: newDisabledSeconds
            };
        }

        return disabledTime;
    };
}, _temp);
RangePicker.displayName = 'RangePicker';
export { RangePicker as default };