'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames8 = require('classnames');

var _classnames9 = _interopRequireDefault(_classnames8);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _overlay = require('../overlay');

var _overlay2 = _interopRequireDefault(_overlay);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _rangeCalendar = require('../calendar/range-calendar');

var _rangeCalendar2 = _interopRequireDefault(_rangeCalendar);

var _panel = require('../time-picker/panel');

var _panel2 = _interopRequireDefault(_panel);

var _zhCn = require('../locale/zh-cn');

var _zhCn2 = _interopRequireDefault(_zhCn);

var _util = require('../util');

var _util2 = require('./util');

var _panelFooter = require('./module/panel-footer');

var _panelFooter2 = _interopRequireDefault(_panelFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Popup = _overlay2.default.Popup;


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
    return [(0, _util2.formatDateValue)(values[0], format), (0, _util2.formatDateValue)(values[1], format)];
}

/**
 * DatePicker.RangePicker
*/
var RangePicker = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(RangePicker, _Component);

    function RangePicker(props, context) {
        (0, _classCallCheck3.default)(this, RangePicker);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props, context));

        _this.onSelectCalendarPanel = function (value) {
            var _this$props = _this.props,
                showTime = _this$props.showTime,
                resetTime = _this$props.resetTime;
            var _this$state = _this.state,
                prevActiveDateInput = _this$state.activeDateInput,
                prevStartValue = _this$state.startValue,
                prevEndValue = _this$state.endValue;

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
                                    var defaultTimeValue = (0, _util2.formatDateValue)(showTime.defaultValue, _this.timeFormat);
                                    newValue = (0, _util2.resetValueTime)(value, defaultTimeValue);
                                }
                            } else if (!resetTime) {
                                // 非第一次选择，如果开启了 resetTime ，则记住之前选择的时间值
                                newValue = (0, _util2.resetValueTime)(value, prevStartValue);
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
                                var _defaultTimeValue = (0, _util2.formatDateValue)(showTime.defaultValue, _this.timeFormat);
                                newValue = (0, _util2.resetValueTime)(value, _defaultTimeValue);
                            }
                        } else if (!resetTime) {
                            // 非第一次选择，如果开启了 resetTime ，则记住之前选择的时间值
                            newValue = (0, _util2.resetValueTime)(value, prevEndValue);
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
            if ('value' in _this.props) {
                delete newState.startValue;
                delete newState.endValue;
            }

            _this.setState(newState);

            _this.onValueChange([newStartValue, newEndValue]);
        };

        _this.clearRange = function () {

            _this.setState({
                startDateInputStr: '',
                endDateInputStr: '',
                startTimeInputStr: '',
                endTimeInputStr: ''
            });

            if (!('value' in _this.props)) {
                _this.setState({
                    startValue: null,
                    endValue: null
                });
            }

            _this.onValueChange([]);
        };

        _this.onDateInputChange = function (inputStr, e, eventType) {
            if (eventType === 'clear' || !inputStr) {
                e.stopPropagation();
                _this.clearRange();
            } else {
                var _this$setState;

                var stateName = mapInputStateName(_this.state.activeDateInput);
                _this.setState((_this$setState = {}, _this$setState[stateName] = inputStr, _this$setState.inputing = _this.state.activeDateInput, _this$setState));
            }
        };

        _this.onDateInputBlur = function () {
            var stateName = mapInputStateName(_this.state.activeDateInput);
            var dateInputStr = _this.state[stateName];
            if (dateInputStr) {
                var _this$setState2;

                var _this$props2 = _this.props,
                    format = _this$props2.format,
                    disabledDate = _this$props2.disabledDate;

                var parsed = (0, _moment2.default)(dateInputStr, format, true);

                _this.setState((_this$setState2 = {}, _this$setState2[stateName] = '', _this$setState2.inputing = false, _this$setState2));

                if (parsed.isValid() && !disabledDate(parsed)) {

                    var valueName = _this.state.activeDateInput;
                    var newValue = parsed;

                    _this.handleChange(valueName, newValue);
                }
            }
        };

        _this.onFocusDateInput = function (type) {
            if (type !== _this.state.activeDateInput) {
                _this.setState({
                    activeDateInput: type
                });
            }
            if (_this.state.panel !== _util2.PANEL.DATE) {
                _this.setState({
                    panel: _util2.PANEL.DATE
                });
            }
        };

        _this.onFocusTimeInput = function (type) {
            if (type !== _this.state.activeDateInput) {
                _this.setState({
                    activeDateInput: type
                });
            }

            if (_this.state.panel !== _util2.PANEL.TIME) {
                _this.setState({
                    panel: _util2.PANEL.TIME
                });
            }
        };

        _this.onSelectStartTime = function (value) {
            if (!('value' in _this.props)) {
                _this.setState({
                    startValue: value,
                    inputing: false,
                    activeDateInput: 'startTime'
                });
            }
            if (value.valueOf() !== _this.state.startValue.valueOf()) {
                _this.onValueChange([value, _this.state.endValue]);
            }
        };

        _this.onSelectEndTime = function (value) {
            if (!('value' in _this.props)) {
                _this.setState({
                    endValue: value,
                    inputing: false,
                    activeDateInput: 'endTime'
                });
            }
            if (value.valueOf() !== _this.state.endValue.valueOf()) {
                _this.onValueChange([_this.state.startValue, value]);
            }
        };

        _this.onTimeInputChange = function (inputStr) {
            var _this$setState3;

            var stateName = mapInputStateName(_this.state.activeDateInput);
            _this.setState((_this$setState3 = {}, _this$setState3[stateName] = inputStr, _this$setState3.inputing = _this.state.activeDateInput, _this$setState3));
        };

        _this.onTimeInputBlur = function () {
            var stateName = mapInputStateName(_this.state.activeDateInput);
            var timeInputStr = _this.state[stateName];
            if (timeInputStr) {
                var _this$setState4;

                var parsed = (0, _moment2.default)(timeInputStr, _this.timeFormat, true);

                _this.setState((_this$setState4 = {}, _this$setState4[stateName] = '', _this$setState4.inputing = false, _this$setState4));

                if (parsed.isValid()) {
                    var hour = parsed.hour();
                    var minute = parsed.minute();
                    var second = parsed.second();
                    var valueName = mapTimeToValue(_this.state.activeDateInput);
                    var newValue = _this.state[valueName].clone().hour(hour).minute(minute).second(second);

                    _this.handleChange(valueName, newValue);
                }
            }
        };

        _this.handleChange = function (valueName, newValue) {
            if (!('value' in _this.props)) {
                var _this$setState5;

                _this.setState((_this$setState5 = {}, _this$setState5[valueName] = newValue, _this$setState5));
            }

            var startValue = valueName === 'startValue' ? newValue : _this.state.startValue;
            var endValue = valueName === 'endValue' ? newValue : _this.state.endValue;

            _this.onValueChange([startValue, endValue]);
        };

        _this.onVisibleChange = function (visible, reason) {
            if (!('visible' in _this.props)) {
                _this.setState({
                    visible: visible
                });
            }
            _this.props.onVisibleChange(visible, reason);
        };

        _this.changePanel = function (panel) {
            _this.setState({
                panel: panel,
                activeDateInput: panel === _util2.PANEL.DATE ? 'startValue' : 'startTime'
            });
        };

        _this.onOk = function () {
            _this.onVisibleChange(false, 'okBtnClick');
            _this.onValueChange([_this.state.startValue, _this.state.endValue], 'onOk');
        };

        _this.getDisabledTime = function (_ref) {
            var startValue = _ref.startValue,
                endValue = _ref.endValue;

            var _ref2 = _this.props.showTime || {},
                disabledHours = _ref2.disabledHours,
                disabledMinutes = _ref2.disabledMinutes,
                disabledSeconds = _ref2.disabledSeconds;

            var disabledTime = {};

            if (startValue && endValue) {
                var isSameDay = startValue.format('L') === endValue.format('L');
                var newDisabledHours = (0, _util2.isFunction)(disabledHours) ? disabledHours : function (index) {
                    if (isSameDay && index < startValue.hour()) {
                        return true;
                    }
                };

                var newDisabledMinutes = (0, _util2.isFunction)(disabledMinutes) ? disabledMinutes : function (index) {
                    if (isSameDay && startValue.hour() === endValue.hour() && index < startValue.minute()) {
                        return true;
                    }
                };

                var newDisabledSeconds = (0, _util2.isFunction)(disabledSeconds) ? disabledSeconds : function (index) {
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

        var dateTimeFormat = (0, _util2.getDateTimeFormat)(props.format, props.showTime);
        (0, _util2.extend)(dateTimeFormat, _this);

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
            panel: _util2.PANEL.DATE
        };
        return _this;
    }

    RangePicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('showTime' in nextProps) {
            var dateTimeFormat = (0, _util2.getDateTimeFormat)(nextProps.format || this.props.format, nextProps.showTime);
            (0, _util2.extend)(dateTimeFormat, this);
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

    RangePicker.prototype.onValueChange = function onValueChange(values) {
        var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'onChange';

        var ret = void 0;
        if (!values.length || !this.inputAsString) {
            ret = values;
        } else {
            ret = [values[0] ? values[0].format(this.dateTimeFormat) : null, values[1] ? values[1].format(this.dateTimeFormat) : null];
        }
        this.props[handler](ret);
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
            defaultVisibleMonth = _props.defaultVisibleMonth,
            onVisibleMonthChange = _props.onVisibleMonthChange,
            showTime = _props.showTime,
            disabledDate = _props.disabledDate,
            footerRender = _props.footerRender,
            label = _props.label,
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
            className = _props.className,
            locale = _props.locale,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'defaultVisibleMonth', 'onVisibleMonthChange', 'showTime', 'disabledDate', 'footerRender', 'label', 'state', 'size', 'disabled', 'hasClear', 'popupTriggerType', 'popupAlign', 'popupContainer', 'popupStyle', 'popupClassName', 'popupProps', 'className', 'locale']);


        var state = this.state;

        var classNames = (0, _classnames9.default)((_classnames = {}, _classnames[prefix + 'range-picker'] = true, _classnames['' + prefix + size] = size, _classnames[prefix + 'disabled'] = disabled, _classnames), className);

        var panelBodyClassName = (0, _classnames9.default)((_classnames2 = {}, _classnames2[prefix + 'range-picker-body'] = true, _classnames2[prefix + 'range-picker-body-show-time'] = showTime, _classnames2));

        var triggerCls = (0, _classnames9.default)((_classnames3 = {}, _classnames3[prefix + 'range-picker-trigger'] = true, _classnames3[prefix + 'error'] = inputState === 'error', _classnames3));

        var startDateInputCls = (0, _classnames9.default)((_classnames4 = {}, _classnames4[prefix + 'range-picker-panel-input-start-date'] = true, _classnames4[prefix + 'focus'] = state.activeDateInput === 'startValue', _classnames4));

        var endDateInputCls = (0, _classnames9.default)((_classnames5 = {}, _classnames5[prefix + 'range-picker-panel-input-end-date'] = true, _classnames5[prefix + 'focus'] = state.activeDateInput === 'endValue', _classnames5));

        var startDateInputValue = state.inputing === 'startValue' ? state.startDateInputStr : state.startValue && state.startValue.format(this.format) || '';
        var endDateInputValue = state.inputing === 'endValue' ? state.endDateInputStr : state.endValue && state.endValue.format(this.format) || '';

        var startTriggerValue = startDateInputValue;
        var endTriggerValue = endDateInputValue;

        var sharedInputProps = {
            size: size,
            disabled: disabled,
            onChange: this.onDateInputChange,
            onBlur: this.onDateInputBlur,
            onPressEnter: this.onDateInputBlur
        };

        var startDateInput = _react2.default.createElement(_input2.default, (0, _extends3.default)({}, sharedInputProps, {
            placeholder: this.format,
            value: startDateInputValue,
            onFocus: function onFocus() {
                return _this2.onFocusDateInput('startValue');
            },
            className: startDateInputCls }));

        var endDateInput = _react2.default.createElement(_input2.default, (0, _extends3.default)({}, sharedInputProps, {
            placeholder: this.format,
            value: endDateInputValue,
            onFocus: function onFocus() {
                return _this2.onFocusDateInput('endValue');
            },
            className: endDateInputCls }));

        var datePanel = _react2.default.createElement(_rangeCalendar2.default, {
            showOtherMonth: true,
            format: this.format,
            defaultVisibleMonth: defaultVisibleMonth,
            onVisibleMonthChange: onVisibleMonthChange,
            disabledDate: disabledDate,
            onSelect: this.onSelectCalendarPanel,
            startValue: state.startValue,
            endValue: state.endValue });

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
                onChange: this.onTimeInputChange
            };

            var startTimeInputCls = (0, _classnames9.default)((_classnames6 = {}, _classnames6[prefix + 'range-picker-panel-input-start-time'] = true, _classnames6[prefix + 'focus'] = state.activeDateInput === 'startTime', _classnames6));

            startTimeInput = _react2.default.createElement(_input2.default, (0, _extends3.default)({}, sharedTimeInputProps, {
                value: startTimeInputValue,
                disabled: disabled || !state.startValue || !state.endValue,
                onFocus: function onFocus() {
                    return _this2.onFocusTimeInput('startTime');
                },
                className: startTimeInputCls
            }));

            var endTimeInputCls = (0, _classnames9.default)((_classnames7 = {}, _classnames7[prefix + 'range-picker-panel-input-end-time'] = true, _classnames7[prefix + 'focus'] = state.activeDateInput === 'endTime', _classnames7));

            endTimeInput = _react2.default.createElement(_input2.default, (0, _extends3.default)({}, sharedTimeInputProps, {
                value: endTimeInputValue,
                disabled: disabled || !state.endValue || !state.startValue,
                onFocus: function onFocus() {
                    return _this2.onFocusTimeInput('endTime');
                },
                className: endTimeInputCls
            }));

            var showSecond = this.timeFormat.indexOf('s') > -1;

            var sharedTimePickerProps = (0, _extends3.default)({}, showTime, {
                prefix: prefix,
                locale: locale,
                disabled: disabled,
                showSecond: showSecond
            });

            var disabledTime = this.getDisabledTime(state);

            timePanel = _react2.default.createElement(
                'div',
                { className: prefix + 'range-picker-panel-time' },
                _react2.default.createElement(_panel2.default, (0, _extends3.default)({}, sharedTimePickerProps, { className: prefix + 'range-picker-panel-time-start', value: state.startValue, onSelect: this.onSelectStartTime })),
                _react2.default.createElement(_panel2.default, (0, _extends3.default)({}, sharedTimePickerProps, disabledTime, { className: prefix + 'range-picker-panel-time-end', value: state.endValue, onSelect: this.onSelectEndTime }))
            );
        }

        panelFooter = panelFooter || _react2.default.createElement(_panelFooter2.default, {
            prefix: prefix,
            value: state.startValue && state.endValue,
            locale: locale,
            panel: state.panel,
            onPanelChange: showTime ? this.changePanel : null,
            onOk: this.onOk
        });

        var panelBody = (_PANEL$DATE$PANEL$TIM = {}, _PANEL$DATE$PANEL$TIM[_util2.PANEL.DATE] = datePanel, _PANEL$DATE$PANEL$TIM[_util2.PANEL.TIME] = timePanel, _PANEL$DATE$PANEL$TIM)[state.panel];

        var allowClear = state.startValue && state.endValue && hasClear;
        var trigger = _react2.default.createElement(
            'div',
            { className: triggerCls },
            _react2.default.createElement(_input2.default, (0, _extends3.default)({}, sharedInputProps, {
                label: label,
                placeholder: locale.startPlaceholder,
                value: startTriggerValue,
                hasBorder: false,
                className: prefix + 'range-picker-trigger-input',
                onFocus: function onFocus() {
                    return _this2.onFocusDateInput('startValue');
                } })),
            _react2.default.createElement(
                'span',
                { className: prefix + 'range-picker-trigger-separator' },
                '-'
            ),
            _react2.default.createElement(_input2.default, (0, _extends3.default)({}, sharedInputProps, {
                placeholder: locale.endPlaceholder,
                value: endTriggerValue,
                hasBorder: false,
                className: prefix + 'range-picker-trigger-input',
                onFocus: function onFocus() {
                    return _this2.onFocusDateInput('endValue');
                },
                hasClear: allowClear,
                hint: 'calendar' }))
        );

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({}, _util.obj.pickOthers(RangePicker.propTypes, others), { className: classNames }),
            _react2.default.createElement(
                Popup,
                (0, _extends3.default)({}, popupProps, {
                    autoFoucs: true,
                    disabled: disabled,
                    visible: state.visible,
                    onVisibleChange: this.onVisibleChange,
                    align: popupAlign,
                    triggerType: popupTriggerType,
                    container: popupContainer,
                    style: popupStyle,
                    className: popupClassName,
                    trigger: trigger }),
                _react2.default.createElement(
                    'div',
                    { className: panelBodyClassName },
                    _react2.default.createElement(
                        'div',
                        { className: prefix + 'range-picker-panel-header' },
                        _react2.default.createElement(
                            'div',
                            { className: prefix + 'range-picker-panel-input' },
                            startDateInput,
                            startTimeInput,
                            _react2.default.createElement(
                                'span',
                                { className: prefix + 'range-picker-panel-input-separator' },
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
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    /**
     * 默认展示的起始月份
     * @return {MomentObject} 返回包含指定月份的 moment 对象实例
     */
    defaultVisibleMonth: _propTypes2.default.func,
    onVisibleMonthChange: _propTypes2.default.func,
    /**
     * 日期范围值数组 [moment, moment]
     */
    value: _propTypes2.default.array,
    /**
     * 初始的日期范围值数组 [moment, moment]
     */
    defaultValue: _propTypes2.default.array,
    /**
     * 日期格式
     */
    format: _propTypes2.default.string,
    /**
     * 是否使用时间控件，支持传入 TimePicker 的属性
     */
    showTime: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),
    /**
     * 每次选择是否重置时间（仅在 showTime 开启时有效）
     */
    resetTime: _propTypes2.default.bool,
    /**
     * 禁用日期函数
     * @param {MomentObject} 日期值
     * @return {Boolean} 是否禁用
     */
    disabledDate: _propTypes2.default.func,
    /**
     * 自定义面板页脚
     * @return {Node} 自定义的面板页脚组件
     */
    footerRender: _propTypes2.default.func,
    /**
     * 日期范围值改变时的回调 [ MomentObject|String, MomentObject|String ]
     * @param {Array<MomentObject|String>} value 日期值
     * @return void
     */
    onChange: _propTypes2.default.func,
    /**
     * 点击确认按钮时的回调 返回开始时间和结束时间`[ MomentObject|String, MomentObject|String ]`
     * @return {Array} 日期范围
     */
    onOk: _propTypes2.default.func,
    /**
     * 输入框内置标签
     */
    label: _propTypes2.default.node,
    /**
     * 输入框状态
     */
    state: _propTypes2.default.oneOf(['error', 'success']),
    /**
     * 输入框尺寸
     */
    size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
    /**
     * 是否禁用
     */
    disabled: _propTypes2.default.bool,
    /**
     * 是否显示清空按钮
     */
    hasClear: _propTypes2.default.bool,
    /**
     * 弹层显示状态
     */
    visible: _propTypes2.default.bool,
    /**
     * 弹层默认是否显示
     */
    defaultVisible: _propTypes2.default.bool,
    /**
     * 弹层展示状态变化时的回调
     * @param {Boolean} visible 弹层是否显示
     * @param {String} reason 触发弹层显示和隐藏的来源
     */
    onVisibleChange: _propTypes2.default.func,
    /**
     * 弹层触发方式
     */
    popupTriggerType: _propTypes2.default.oneOf(['click', 'hover']),
    /**
     * 弹层对齐方式, 具体含义见 OverLay文档
     */
    popupAlign: _propTypes2.default.string,
    /**
     * 弹层容器
     * @param {Element} target 目标元素
     * @return {Element} 弹层的容器元素
     */
    popupContainer: _propTypes2.default.func,
    /**
     * 弹层自定义样式
     */
    popupStyle: _propTypes2.default.object,
    /**
     * 弹层自定义样式类
     */
    popupClassName: _propTypes2.default.string,
    /**
     * 弹层其他属性
     */
    popupProps: _propTypes2.default.object,
    locale: _propTypes2.default.object,
    className: _propTypes2.default.string
}, _class.defaultProps = {
    prefix: 'next-',
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
    popupTriggerType: 'click',
    popupAlign: 'tl tl',
    locale: _zhCn2.default.DatePicker,
    onChange: _util.func.noop,
    onOk: _util.func.noop,
    onVisibleChange: _util.func.noop
}, _temp);
RangePicker.displayName = 'RangePicker';
exports.default = RangePicker;
module.exports = exports['default'];