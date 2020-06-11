'use strict';

exports.__esModule = true;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _classnames8 = require('classnames');

var _classnames9 = _interopRequireDefault(_classnames8);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _overlay = require('../overlay');

var _overlay2 = _interopRequireDefault(_overlay);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _calendar = require('../calendar');

var _calendar2 = _interopRequireDefault(_calendar);

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

        _initialiseProps.call(_this);

        var _getDateTimeFormat = (0, _util2.getDateTimeFormat)(props.format, props.showTime, props.type),
            format = _getDateTimeFormat.format,
            timeFormat = _getDateTimeFormat.timeFormat,
            dateTimeFormat = _getDateTimeFormat.dateTimeFormat;

        var val = props.value || props.defaultValue;
        var values = getFormatValues(val, dateTimeFormat);

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
            panel: _util2.PANEL.DATE,
            format: format,
            timeFormat: timeFormat,
            dateTimeFormat: dateTimeFormat,
            inputAsString: val && (typeof val[0] === 'string' || typeof val[1] === 'string')
        };
        return _this;
    }

    RangePicker.getDerivedStateFromProps = function getDerivedStateFromProps(props) {
        var formatStates = (0, _util2.getDateTimeFormat)(props.format, props.showTime, props.type);
        var states = {};

        if ('value' in props) {
            var values = getFormatValues(props.value, formatStates.dateTimeFormat);
            states.startValue = values[0];
            states.endValue = values[1];
            states.inputAsString = props.value && (typeof props.value[0] === 'string' || typeof props.value[1] === 'string');
        }

        if ('visible' in props) {
            states.visible = props.visible;
        }

        return (0, _extends3.default)({}, states, formatStates);
    };

    // 如果用户没有给定时间禁用逻辑，则给默认到禁用逻辑


    RangePicker.prototype.renderPreview = function renderPreview(_ref, others) {
        var startValue = _ref[0],
            endValue = _ref[1];
        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            renderPreview = _props.renderPreview;
        var dateTimeFormat = this.state.dateTimeFormat;


        var previewCls = (0, _classnames9.default)(className, prefix + 'form-preview');
        var startLabel = startValue ? startValue.format(dateTimeFormat) : '';
        var endLabel = endValue ? endValue.format(dateTimeFormat) : '';

        if (typeof renderPreview === 'function') {
            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, others, { className: previewCls }),
                renderPreview([startValue, endValue], this.props)
            );
        }

        return _react2.default.createElement(
            'p',
            (0, _extends3.default)({}, others, { className: previewCls }),
            startLabel,
            ' - ',
            endLabel
        );
    };

    RangePicker.prototype.render = function render() {
        var _classnames,
            _classnames2,
            _classnames3,
            _classnames4,
            _classnames5,
            _this2 = this,
            _PANEL$DATE$PANEL$TIM;

        var _props2 = this.props,
            prefix = _props2.prefix,
            rtl = _props2.rtl,
            type = _props2.type,
            defaultVisibleMonth = _props2.defaultVisibleMonth,
            onVisibleMonthChange = _props2.onVisibleMonthChange,
            showTime = _props2.showTime,
            disabledDate = _props2.disabledDate,
            footerRender = _props2.footerRender,
            label = _props2.label,
            _props2$ranges = _props2.ranges,
            ranges = _props2$ranges === undefined ? {} : _props2$ranges,
            inputState = _props2.state,
            size = _props2.size,
            disabled = _props2.disabled,
            hasClear = _props2.hasClear,
            popupTriggerType = _props2.popupTriggerType,
            popupAlign = _props2.popupAlign,
            popupContainer = _props2.popupContainer,
            popupStyle = _props2.popupStyle,
            popupClassName = _props2.popupClassName,
            popupProps = _props2.popupProps,
            popupComponent = _props2.popupComponent,
            popupContent = _props2.popupContent,
            followTrigger = _props2.followTrigger,
            className = _props2.className,
            locale = _props2.locale,
            inputProps = _props2.inputProps,
            dateCellRender = _props2.dateCellRender,
            monthCellRender = _props2.monthCellRender,
            yearCellRender = _props2.yearCellRender,
            startDateInputAriaLabel = _props2.startDateInputAriaLabel,
            startTimeInputAriaLabel = _props2.startTimeInputAriaLabel,
            endDateInputAriaLabel = _props2.endDateInputAriaLabel,
            endTimeInputAriaLabel = _props2.endTimeInputAriaLabel,
            isPreview = _props2.isPreview,
            disableChangeMode = _props2.disableChangeMode,
            yearRange = _props2.yearRange,
            placeholder = _props2.placeholder,
            others = (0, _objectWithoutProperties3.default)(_props2, ['prefix', 'rtl', 'type', 'defaultVisibleMonth', 'onVisibleMonthChange', 'showTime', 'disabledDate', 'footerRender', 'label', 'ranges', 'state', 'size', 'disabled', 'hasClear', 'popupTriggerType', 'popupAlign', 'popupContainer', 'popupStyle', 'popupClassName', 'popupProps', 'popupComponent', 'popupContent', 'followTrigger', 'className', 'locale', 'inputProps', 'dateCellRender', 'monthCellRender', 'yearCellRender', 'startDateInputAriaLabel', 'startTimeInputAriaLabel', 'endDateInputAriaLabel', 'endTimeInputAriaLabel', 'isPreview', 'disableChangeMode', 'yearRange', 'placeholder']);


        var state = this.state;

        var classNames = (0, _classnames9.default)((_classnames = {}, _classnames[prefix + 'range-picker'] = true, _classnames['' + prefix + size] = size, _classnames[prefix + 'disabled'] = disabled, _classnames), className);

        var panelBodyClassName = (0, _classnames9.default)((_classnames2 = {}, _classnames2[prefix + 'range-picker-body'] = true, _classnames2[prefix + 'range-picker-body-show-time'] = showTime, _classnames2));

        var triggerCls = (0, _classnames9.default)((_classnames3 = {}, _classnames3[prefix + 'range-picker-trigger'] = true, _classnames3[prefix + 'error'] = inputState === 'error', _classnames3));

        var startDateInputCls = (0, _classnames9.default)((_classnames4 = {}, _classnames4[prefix + 'range-picker-panel-input-start-date'] = true, _classnames4[prefix + 'focus'] = state.activeDateInput === 'startValue', _classnames4));

        var endDateInputCls = (0, _classnames9.default)((_classnames5 = {}, _classnames5[prefix + 'range-picker-panel-input-end-date'] = true, _classnames5[prefix + 'focus'] = state.activeDateInput === 'endValue', _classnames5));

        if (rtl) {
            others.dir = 'rtl';
        }

        if (isPreview) {
            return this.renderPreview([state.startValue, state.endValue], _util.obj.pickOthers(others, RangePicker.PropTypes));
        }

        var startDateInputValue = state.inputing === 'startValue' ? state.startDateInputStr : state.startValue && state.startValue.format(state.format) || '';
        var endDateInputValue = state.inputing === 'endValue' ? state.endDateInputStr : state.endValue && state.endValue.format(state.format) || '';

        var startTriggerValue = startDateInputValue;
        var endTriggerValue = endDateInputValue;

        var sharedInputProps = (0, _extends3.default)({}, inputProps, {
            size: size,
            disabled: disabled,
            onChange: this.onDateInputChange,
            onBlur: this.onDateInputBlur,
            onPressEnter: this.onDateInputBlur,
            onKeyDown: this.onDateInputKeyDown
        });

        var startDateInput = _react2.default.createElement(_input2.default, (0, _extends3.default)({}, sharedInputProps, {
            'aria-label': startDateInputAriaLabel,
            placeholder: state.format,
            value: startDateInputValue,
            onFocus: function onFocus() {
                return _this2.onFocusDateInput('startValue');
            },
            className: startDateInputCls
        }));

        var endDateInput = _react2.default.createElement(_input2.default, (0, _extends3.default)({}, sharedInputProps, {
            'aria-label': endDateInputAriaLabel,
            placeholder: state.format,
            value: endDateInputValue,
            onFocus: function onFocus() {
                return _this2.onFocusDateInput('endValue');
            },
            className: endDateInputCls
        }));

        var shareCalendarProps = {
            showOtherMonth: true,
            dateCellRender: dateCellRender,
            monthCellRender: monthCellRender,
            yearCellRender: yearCellRender,
            format: state.format,
            defaultVisibleMonth: defaultVisibleMonth,
            onVisibleMonthChange: onVisibleMonthChange
        };

        var datePanel = type === 'date' ? _react2.default.createElement(_rangeCalendar2.default, (0, _extends3.default)({}, shareCalendarProps, {
            yearRange: yearRange,
            disableChangeMode: disableChangeMode,
            disabledDate: disabledDate,
            onSelect: this.onSelectCalendarPanel,
            startValue: state.startValue,
            endValue: state.endValue
        })) : _react2.default.createElement(
            'div',
            { className: prefix + 'range-picker-panel-body' },
            _react2.default.createElement(_calendar2.default, (0, _extends3.default)({
                shape: 'panel',
                modes: type === 'month' ? ['month', 'year'] : ['year']
            }, (0, _extends3.default)({}, shareCalendarProps), {
                disabledDate: function disabledDate(date) {
                    return state.endValue && date.isAfter(state.endValue, type);
                },
                onSelect: function onSelect(value) {
                    var selectedValue = value.clone().date(1).hour(0).minute(0).second(0);
                    if (type === 'year') {
                        selectedValue.month(0);
                    }
                    _this2.onSelectCalendarPanel(selectedValue, 'startValue');
                },
                value: state.startValue
            })),
            _react2.default.createElement(_calendar2.default, (0, _extends3.default)({
                shape: 'panel',
                modes: type === 'month' ? ['month', 'year'] : ['year']
            }, shareCalendarProps, {
                disabledDate: function disabledDate(date) {
                    return state.startValue && date.isBefore(state.startValue, type);
                },
                onSelect: function onSelect(value) {
                    var selectedValue = value.clone().hour(23).minute(59).second(59);
                    if (type === 'year') {
                        selectedValue.month(11).date(31);
                    } else {
                        selectedValue.date(selectedValue.daysInMonth());
                    }
                    _this2.onSelectCalendarPanel(selectedValue, 'endValue');
                },
                value: state.endValue
            }))
        );

        var startTimeInput = null;
        var endTimeInput = null;
        var timePanel = null;
        var panelFooter = footerRender();

        if (showTime) {
            var _classnames6, _classnames7;

            var startTimeInputValue = state.inputing === 'startTime' ? state.startTimeInputStr : state.startValue && state.startValue.format(state.timeFormat) || '';
            var endTimeInputValue = state.inputing === 'endTime' ? state.endTimeInputStr : state.endValue && state.endValue.format(state.timeFormat) || '';

            startTriggerValue = state.startValue && state.startValue.format(state.dateTimeFormat) || '';
            endTriggerValue = state.endValue && state.endValue.format(state.dateTimeFormat) || '';

            var sharedTimeInputProps = {
                size: size,
                placeholder: state.timeFormat,
                onFocus: this.onFocusTimeInput,
                onBlur: this.onTimeInputBlur,
                onPressEnter: this.onTimeInputBlur,
                onChange: this.onTimeInputChange,
                onKeyDown: this.onTimeInputKeyDown
            };

            var startTimeInputCls = (0, _classnames9.default)((_classnames6 = {}, _classnames6[prefix + 'range-picker-panel-input-start-time'] = true, _classnames6[prefix + 'focus'] = state.activeDateInput === 'startTime', _classnames6));

            startTimeInput = _react2.default.createElement(_input2.default, (0, _extends3.default)({}, sharedTimeInputProps, {
                value: startTimeInputValue,
                'aria-label': startTimeInputAriaLabel,
                disabled: disabled || !state.startValue,
                onFocus: function onFocus() {
                    return _this2.onFocusTimeInput('startTime');
                },
                className: startTimeInputCls
            }));

            var endTimeInputCls = (0, _classnames9.default)((_classnames7 = {}, _classnames7[prefix + 'range-picker-panel-input-end-time'] = true, _classnames7[prefix + 'focus'] = state.activeDateInput === 'endTime', _classnames7));

            endTimeInput = _react2.default.createElement(_input2.default, (0, _extends3.default)({}, sharedTimeInputProps, {
                value: endTimeInputValue,
                'aria-label': endTimeInputAriaLabel,
                disabled: disabled || !state.endValue,
                onFocus: function onFocus() {
                    return _this2.onFocusTimeInput('endTime');
                },
                className: endTimeInputCls
            }));

            var showSecond = state.timeFormat.indexOf('s') > -1;
            var showMinute = state.timeFormat.indexOf('m') > -1;

            var sharedTimePickerProps = (0, _extends3.default)({}, showTime, {
                prefix: prefix,
                locale: locale,
                disabled: disabled,
                showSecond: showSecond,
                showMinute: showMinute
            });

            var disabledTime = this.getDisabledTime(state);

            timePanel = _react2.default.createElement(
                'div',
                { className: prefix + 'range-picker-panel-time' },
                _react2.default.createElement(_panel2.default, (0, _extends3.default)({}, sharedTimePickerProps, {
                    disabled: disabled || !state.startValue,
                    className: prefix + 'range-picker-panel-time-start',
                    value: state.startValue,
                    onSelect: this.onSelectStartTime
                })),
                _react2.default.createElement(_panel2.default, (0, _extends3.default)({}, sharedTimePickerProps, disabledTime, {
                    disabled: disabled || !state.endValue,
                    className: prefix + 'range-picker-panel-time-end',
                    value: state.endValue,
                    onSelect: this.onSelectEndTime
                }))
            );
        }

        panelFooter = panelFooter || _react2.default.createElement(_panelFooter2.default, {
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

        var panelBody = (_PANEL$DATE$PANEL$TIM = {}, _PANEL$DATE$PANEL$TIM[_util2.PANEL.DATE] = datePanel, _PANEL$DATE$PANEL$TIM[_util2.PANEL.TIME] = timePanel, _PANEL$DATE$PANEL$TIM)[state.panel];

        var allowClear = state.startValue && state.endValue && hasClear;

        var _ref2 = placeholder || [],
            startPlaceholder = _ref2[0],
            endPlaceholder = _ref2[1];

        if (typeof placeholder === 'string') {
            startPlaceholder = placeholder;
            endPlaceholder = placeholder;
        }

        var trigger = _react2.default.createElement(
            'div',
            { className: triggerCls },
            _react2.default.createElement(_input2.default, (0, _extends3.default)({}, sharedInputProps, {
                readOnly: true,
                role: 'combobox',
                'aria-expanded': state.visible,
                label: label,
                placeholder: startPlaceholder || locale.startPlaceholder,
                value: startTriggerValue,
                hasBorder: false,
                className: prefix + 'range-picker-trigger-input',
                onFocus: function onFocus() {
                    return _this2.onFocusDateInput('startValue');
                }
            })),
            _react2.default.createElement(
                'span',
                { className: prefix + 'range-picker-trigger-separator' },
                '-'
            ),
            _react2.default.createElement(_input2.default, (0, _extends3.default)({}, sharedInputProps, {
                readOnly: true,
                role: 'combobox',
                'aria-expanded': state.visible,
                placeholder: endPlaceholder || locale.endPlaceholder,
                value: endTriggerValue,
                hasBorder: false,
                className: prefix + 'range-picker-trigger-input',
                onFocus: function onFocus() {
                    return _this2.onFocusDateInput('endValue');
                },
                hasClear: allowClear,
                hint: _react2.default.createElement(_icon2.default, {
                    type: 'calendar',
                    className: prefix + 'date-picker-symbol-calendar-icon'
                })
            }))
        );

        var PopupComponent = popupComponent ? popupComponent : Popup;

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({}, _util.obj.pickOthers(RangePicker.propTypes, others), {
                className: classNames
            }),
            _react2.default.createElement(
                PopupComponent,
                (0, _extends3.default)({
                    autoFocus: true,
                    align: popupAlign
                }, popupProps, {
                    followTrigger: followTrigger,
                    disabled: disabled,
                    visible: state.visible,
                    onVisibleChange: this.onVisibleChange,
                    triggerType: popupTriggerType,
                    container: popupContainer,
                    style: popupStyle,
                    className: popupClassName,
                    trigger: trigger
                }),
                popupContent ? popupContent : _react2.default.createElement(
                    'div',
                    { dir: others.dir, className: panelBodyClassName },
                    _react2.default.createElement(
                        'div',
                        {
                            className: prefix + 'range-picker-panel-header'
                        },
                        _react2.default.createElement(
                            'div',
                            {
                                className: prefix + 'range-picker-panel-input'
                            },
                            startDateInput,
                            startTimeInput,
                            _react2.default.createElement(
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
}(_react.Component), _class.propTypes = (0, _extends3.default)({}, _configProvider2.default.propTypes, {
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    /**
     * 日期范围类型
     */
    type: _propTypes2.default.oneOf(['date', 'month', 'year']),
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
     * @param {String} view 当前视图类型，year: 年， month: 月, date: 日
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
    state: _propTypes2.default.oneOf(['error', 'loading', 'success']),
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
     * @param {String} type 触发弹层显示和隐藏的来源 okBtnClick 表示由确认按钮触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发
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
    popupContainer: _propTypes2.default.any,
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
    /**
     * 是否跟随滚动
     */
    followTrigger: _propTypes2.default.bool,
    /**
     * 输入框其他属性
     */
    inputProps: _propTypes2.default.object,
    /**
     * 自定义日期单元格渲染
     */
    dateCellRender: _propTypes2.default.func,
    /**
     * 自定义月份渲染函数
     * @param {Object} calendarDate 对应 Calendar 返回的自定义日期对象
     * @returns {ReactNode}
     */
    monthCellRender: _propTypes2.default.func,
    yearCellRender: _propTypes2.default.func, // 兼容 0.x yearCellRender
    /**
     * 开始日期输入框的 aria-label 属性
     */
    startDateInputAriaLabel: _propTypes2.default.string,
    /**
     * 开始时间输入框的 aria-label 属性
     */
    startTimeInputAriaLabel: _propTypes2.default.string,
    /**
     * 结束日期输入框的 aria-label 属性
     */
    endDateInputAriaLabel: _propTypes2.default.string,
    /**
     * 结束时间输入框的 aria-label 属性
     */
    endTimeInputAriaLabel: _propTypes2.default.string,
    /**
     * 是否为预览态
     */
    isPreview: _propTypes2.default.bool,
    /**
     * 预览态模式下渲染的内容
     * @param {Array<MomentObject, MomentObject>} value 日期区间
     */
    renderPreview: _propTypes2.default.func,
    disableChangeMode: _propTypes2.default.bool,
    yearRange: _propTypes2.default.arrayOf(_propTypes2.default.number),
    ranges: _propTypes2.default.object, // 兼容0.x版本
    locale: _propTypes2.default.object,
    className: _propTypes2.default.string,
    name: _propTypes2.default.string,
    popupComponent: _propTypes2.default.elementType,
    popupContent: _propTypes2.default.node,
    placeholder: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.string), _propTypes2.default.string])
}), _class.defaultProps = {
    prefix: 'next-',
    rtl: false,
    type: 'date',
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
    locale: _zhCn2.default.DatePicker,
    disableChangeMode: false,
    onChange: _util.func.noop,
    onOk: _util.func.noop,
    onVisibleChange: _util.func.noop
}, _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.onValueChange = function (values) {
        var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'onChange';

        var ret = void 0;
        if (!values.length || !_this3.state.inputAsString) {
            ret = values;
        } else {
            ret = [values[0] ? values[0].format(_this3.state.dateTimeFormat) : null, values[1] ? values[1].format(_this3.state.dateTimeFormat) : null];
        }
        _this3.props[handler](ret);
    };

    this.onSelectCalendarPanel = function (value, active) {
        var _props3 = _this3.props,
            showTime = _props3.showTime,
            resetTime = _props3.resetTime;
        var _state = _this3.state,
            prevActiveDateInput = _state.activeDateInput,
            prevStartValue = _state.startValue,
            prevEndValue = _state.endValue,
            timeFormat = _state.timeFormat;


        var newState = {
            activeDateInput: active || prevActiveDateInput,
            inputing: false
        };

        var newValue = value;
        switch (active || prevActiveDateInput) {
            case 'startValue':
                {
                    if (!prevEndValue || value.valueOf() <= prevEndValue.valueOf()) {
                        newState.activeDateInput = 'endValue';
                    }

                    if (showTime) {
                        if (!prevStartValue) {
                            // 第一次选择，如果设置了时间默认值，则使用该默认时间
                            if (showTime.defaultValue) {
                                var defaultTimeValue = (0, _util2.formatDateValue)(Array.isArray(showTime.defaultValue) ? showTime.defaultValue[0] : showTime.defaultValue, timeFormat);
                                newValue = (0, _util2.resetValueTime)(value, defaultTimeValue);
                            }
                        } else if (!resetTime) {
                            // 非第一次选择，如果开启了 resetTime ，则记住之前选择的时间值
                            newValue = (0, _util2.resetValueTime)(value, prevStartValue);
                        }
                    }

                    newState.startValue = newValue;

                    // 如果起始日期大于结束日期
                    if (prevEndValue && value.valueOf() > prevEndValue.valueOf()) {
                        // 将结束日期设置为起始日期 如果需要的话保留时间
                        newState.endValue = resetTime ? newValue : (0, _util2.resetValueTime)(value, prevEndValue);

                        // 如果起始日期还是大于结束日期则清空结束日期
                        if (newState.startValue.valueOf() > newState.endValue.valueOf()) {
                            newState.endValue = null;
                        }
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
                            var _defaultTimeValue = (0, _util2.formatDateValue)(Array.isArray(showTime.defaultValue) ? showTime.defaultValue[1] || showTime.defaultValue[0] : showTime.defaultValue, timeFormat);
                            newValue = (0, _util2.resetValueTime)(value, _defaultTimeValue);
                        }
                    } else if (!resetTime) {
                        // 非第一次选择，如果开启了 resetTime ，则记住之前选择的时间值
                        newValue = (0, _util2.resetValueTime)(value, prevEndValue);
                    }
                }

                newState.endValue = newValue;

                // 选择了一个比开始日期更小的结束日期，此时表示用户重新选择了
                if (prevStartValue && value.valueOf() <= prevStartValue.valueOf()) {
                    newState.startValue = resetTime ? value : (0, _util2.resetValueTime)(value, prevStartValue);
                    newState.endValue = resetTime ? value : (0, _util2.resetValueTime)(value, prevEndValue);

                    // 如果结束日期不大于起始日期则清空结束日期
                    if (newState.endValue.valueOf() < newState.startValue.valueOf()) {
                        newState.endValue = null;
                    }
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
        var resetTime = _this3.props.resetTime;
        var activeDateInput = _this3.state.activeDateInput;

        var stateName = mapInputStateName(activeDateInput);
        var dateInputStr = _this3.state[stateName];

        if (dateInputStr) {
            var _this3$setState2;

            var _props4 = _this3.props,
                format = _props4.format,
                disabledDate = _props4.disabledDate;

            var parsed = (0, _moment2.default)(dateInputStr, format, true);

            _this3.setState((_this3$setState2 = {}, _this3$setState2[stateName] = '', _this3$setState2.inputing = false, _this3$setState2));

            if (parsed.isValid() && !disabledDate(parsed, 'date')) {
                var valueName = activeDateInput;
                var newValue = resetTime ? parsed : (0, _util2.resetValueTime)(parsed, _this3.state[activeDateInput]);

                _this3.handleChange(valueName, newValue);
            }
        }
    };

    this.onDateInputKeyDown = function (e) {
        var type = _this3.props.type;
        var _state2 = _this3.state,
            activeDateInput = _state2.activeDateInput,
            format = _state2.format;

        var stateName = mapInputStateName(activeDateInput);
        var dateInputStr = _this3.state[stateName];
        var dateStr = (0, _util2.onDateKeydown)(e, {
            format: format,
            value: _this3.state[activeDateInput],
            dateInputStr: dateInputStr
        }, type === 'date' ? 'day' : type);
        if (!dateStr) return;

        return _this3.onDateInputChange(dateStr);
    };

    this.onFocusDateInput = function (type) {
        if (type !== _this3.state.activeDateInput) {
            _this3.setState({
                activeDateInput: type
            });
        }
        if (_this3.state.panel !== _util2.PANEL.DATE) {
            _this3.setState({
                panel: _util2.PANEL.DATE
            });
        }
    };

    this.onFocusTimeInput = function (type) {
        if (type !== _this3.state.activeDateInput) {
            _this3.setState({
                activeDateInput: type
            });
        }

        if (_this3.state.panel !== _util2.PANEL.TIME) {
            _this3.setState({
                panel: _util2.PANEL.TIME
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

            var parsed = (0, _moment2.default)(timeInputStr, _this3.state.timeFormat, true);

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
        var _state3 = _this3.state,
            activeDateInput = _state3.activeDateInput,
            timeFormat = _state3.timeFormat;

        var stateName = mapInputStateName(activeDateInput);
        var timeInputStr = _this3.state[stateName];

        var _ref3 = (typeof showTime === 'undefined' ? 'undefined' : (0, _typeof3.default)(showTime)) === 'object' ? showTime : {},
            disabledMinutes = _ref3.disabledMinutes,
            disabledSeconds = _ref3.disabledSeconds,
            _ref3$hourStep = _ref3.hourStep,
            hourStep = _ref3$hourStep === undefined ? 1 : _ref3$hourStep,
            _ref3$minuteStep = _ref3.minuteStep,
            minuteStep = _ref3$minuteStep === undefined ? 1 : _ref3$minuteStep,
            _ref3$secondStep = _ref3.secondStep,
            secondStep = _ref3$secondStep === undefined ? 1 : _ref3$secondStep;

        var unit = 'second';

        if (disabledSeconds) {
            unit = disabledMinutes ? 'hour' : 'minute';
        }

        var timeStr = (0, _util2.onTimeKeydown)(e, {
            format: timeFormat,
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
        var values = ['startValue', 'endValue'].map(function (name) {
            return valueName === name ? newValue : _this3.state[name];
        });

        // 判断起始时间是否大于结束时间
        if (values[0] && values[1] && values[0].valueOf() > values[1].valueOf()) {
            return;
        }

        if (!('value' in _this3.props)) {
            var _this3$setState5;

            _this3.setState((_this3$setState5 = {}, _this3$setState5[valueName] = newValue, _this3$setState5));
        }

        _this3.onValueChange(values);
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
        var _state4 = _this3.state,
            startValue = _state4.startValue,
            endValue = _state4.endValue;

        _this3.setState({
            panel: panel,
            activeDateInput: panel === _util2.PANEL.DATE ? !!startValue && !endValue ? 'endValue' : 'startValue' : 'startTime'
        });
    };

    this.onOk = function (value) {
        _this3.onVisibleChange(false, 'okBtnClick');
        _this3.onValueChange(value || [_this3.state.startValue, _this3.state.endValue], 'onOk');
    };

    this.getDisabledTime = function (_ref4) {
        var startValue = _ref4.startValue,
            endValue = _ref4.endValue;

        var _ref5 = _this3.props.showTime || {},
            disabledHours = _ref5.disabledHours,
            disabledMinutes = _ref5.disabledMinutes,
            disabledSeconds = _ref5.disabledSeconds;

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
                if (isSameDay && startValue.hour() === endValue.hour() && startValue.minute() === endValue.minute() && index < startValue.second()) {
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
exports.default = (0, _reactLifecyclesCompat.polyfill)(RangePicker);
module.exports = exports['default'];