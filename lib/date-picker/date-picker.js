'use strict';

exports.__esModule = true;
exports.default = undefined;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames6 = require('classnames');

var _classnames7 = _interopRequireDefault(_classnames6);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _overlay = require('../overlay');

var _overlay2 = _interopRequireDefault(_overlay);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _calendar = require('../calendar');

var _calendar2 = _interopRequireDefault(_calendar);

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

/**
 * DatePicker
 */

var DatePicker = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(DatePicker, _Component);

    function DatePicker(props, context) {
        (0, _classCallCheck3.default)(this, DatePicker);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props, context));

        _initialiseProps.call(_this);

        var dateTimeFormat = (0, _util2.getDateTimeFormat)(props.format, props.showTime);
        (0, _util2.extend)(dateTimeFormat, _this);

        var value = (0, _util2.formatDateValue)(props.value || props.defaultValue, _this.dateTimeFormat);
        _this.inputAsString = typeof (props.value || props.defaultValue) === 'string'; // 判断用户输入是否是字符串
        _this.state = {
            value: value,
            dateInputStr: '',
            timeInputStr: '',
            inputing: false, // 当前是否处于输入状态
            visible: props.visible || props.defaultVisible,
            panel: _util2.PANEL.DATE
        };
        return _this;
    }

    DatePicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('showTime' in nextProps) {
            var dateTimeFormat = (0, _util2.getDateTimeFormat)(nextProps.format || this.props.format, nextProps.showTime);
            (0, _util2.extend)(dateTimeFormat, this);
        }

        if ('value' in nextProps) {
            var value = (0, _util2.formatDateValue)(nextProps.value, this.dateTimeFormat);
            this.setState({
                value: value
            });
            this.inputAsString = typeof nextProps.value === 'string';
        }

        if ('visible' in nextProps) {
            this.setState({
                visible: nextProps.visible
            });
        }
    };

    DatePicker.prototype.render = function render() {
        var _classnames, _classnames2, _classnames3, _classnames4, _PANEL$DATE$PANEL$TIM;

        var _props = this.props,
            prefix = _props.prefix,
            rtl = _props.rtl,
            locale = _props.locale,
            label = _props.label,
            state = _props.state,
            defaultVisibleMonth = _props.defaultVisibleMonth,
            onVisibleMonthChange = _props.onVisibleMonthChange,
            showTime = _props.showTime,
            disabledDate = _props.disabledDate,
            footerRender = _props.footerRender,
            placeholder = _props.placeholder,
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
            inputProps = _props.inputProps,
            dateCellRender = _props.dateCellRender,
            monthCellRender = _props.monthCellRender,
            yearCellRender = _props.yearCellRender,
            dateInputAriaLabel = _props.dateInputAriaLabel,
            timeInputAriaLabel = _props.timeInputAriaLabel,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'rtl', 'locale', 'label', 'state', 'defaultVisibleMonth', 'onVisibleMonthChange', 'showTime', 'disabledDate', 'footerRender', 'placeholder', 'size', 'disabled', 'hasClear', 'popupTriggerType', 'popupAlign', 'popupContainer', 'popupStyle', 'popupClassName', 'popupProps', 'followTrigger', 'className', 'inputProps', 'dateCellRender', 'monthCellRender', 'yearCellRender', 'dateInputAriaLabel', 'timeInputAriaLabel']);
        var _state = this.state,
            visible = _state.visible,
            value = _state.value,
            dateInputStr = _state.dateInputStr,
            timeInputStr = _state.timeInputStr,
            panel = _state.panel,
            inputing = _state.inputing;


        var datePickerCls = (0, _classnames7.default)((_classnames = {}, _classnames[prefix + 'date-picker'] = true, _classnames), className);

        var triggerInputCls = (0, _classnames7.default)((_classnames2 = {}, _classnames2[prefix + 'date-picker-input'] = true, _classnames2[prefix + 'error'] = false, _classnames2));

        var panelBodyClassName = (0, _classnames7.default)((_classnames3 = {}, _classnames3[prefix + 'date-picker-body'] = true, _classnames3[prefix + 'date-picker-body-show-time'] = showTime, _classnames3));

        var panelDateInputCls = (0, _classnames7.default)((_classnames4 = {}, _classnames4[prefix + 'date-picker-panel-input'] = true, _classnames4[prefix + 'focus'] = panel === _util2.PANEL.DATE, _classnames4));

        if (rtl) {
            others.dir = 'rtl';
        }

        var sharedInputProps = (0, _extends3.default)({}, inputProps, {
            size: size,
            disabled: disabled,
            onChange: this.onDateInputChange,
            onBlur: this.onDateInputBlur,
            onPressEnter: this.onDateInputBlur,
            onKeyDown: this.onKeyDown
        });

        var dateInputValue = inputing === 'date' ? dateInputStr : value && value.format(this.format) || '';
        var triggerInputValue = dateInputValue;

        var dateInput = _react2.default.createElement(_input2.default, (0, _extends3.default)({}, sharedInputProps, {
            'aria-label': dateInputAriaLabel,
            value: dateInputValue,
            onFocus: this.onFoucsDateInput,
            placeholder: this.format,
            className: panelDateInputCls
        }));

        var datePanel = _react2.default.createElement(_calendar2.default, {
            shape: 'panel',
            value: value,
            format: this.format,
            dateCellRender: dateCellRender,
            monthCellRender: monthCellRender,
            yearCellRender: yearCellRender,
            onSelect: this.onSelectCalendarPanel,
            defaultVisibleMonth: defaultVisibleMonth,
            onVisibleMonthChange: onVisibleMonthChange,
            disabledDate: disabledDate
        });

        var panelFooter = footerRender();

        var timeInput = null;
        var timePanel = null;

        if (showTime) {
            var _classnames5;

            var timeInputValue = inputing === 'time' ? timeInputStr : value && value.format(this.timeFormat) || '';
            triggerInputValue = value && value.format(this.dateTimeFormat) || '';

            var timePanelProps = (typeof showTime === 'undefined' ? 'undefined' : (0, _typeof3.default)(showTime)) === 'object' ? showTime : {};

            var showSecond = this.timeFormat.indexOf('s') > -1;

            var panelTimeInputCls = (0, _classnames7.default)((_classnames5 = {}, _classnames5[prefix + 'date-picker-panel-input'] = true, _classnames5[prefix + 'focus'] = panel === _util2.PANEL.TIME, _classnames5));

            timeInput = _react2.default.createElement(_input2.default, {
                placeholder: this.timeFormat,
                value: timeInputValue,
                size: size,
                'aria-label': timeInputAriaLabel,
                disabled: disabled || !value,
                onChange: this.onTimeInputChange,
                onFocus: this.onFoucsTimeInput,
                onBlur: this.onTimeInputBlur,
                onPressEnter: this.onTimeInputBlur,
                onKeyDown: this.onTimeKeyDown,
                className: panelTimeInputCls
            });

            timePanel = _react2.default.createElement(_panel2.default, (0, _extends3.default)({}, timePanelProps, {
                locale: locale,
                className: prefix + 'date-picker-panel-time',
                showSecond: showSecond,
                disabled: disabled,
                prefix: prefix,
                value: value,
                onSelect: this.onSelectTimePanel
            }));

            panelFooter = panelFooter || _react2.default.createElement(_panelFooter2.default, {
                prefix: prefix,
                locale: locale,
                value: value,
                panel: panel,
                onPanelChange: this.changePanel,
                onOk: this.onOk
            });
        }

        var panelBody = (_PANEL$DATE$PANEL$TIM = {}, _PANEL$DATE$PANEL$TIM[_util2.PANEL.DATE] = datePanel, _PANEL$DATE$PANEL$TIM[_util2.PANEL.TIME] = timePanel, _PANEL$DATE$PANEL$TIM)[panel];

        var allowClear = value && hasClear;
        var trigger = _react2.default.createElement(
            'div',
            { className: prefix + 'date-picker-trigger' },
            _react2.default.createElement(_input2.default, (0, _extends3.default)({}, sharedInputProps, {
                label: label,
                state: state,
                value: triggerInputValue,
                role: 'combobox',
                'aria-expanded': visible,
                readOnly: true,
                placeholder: placeholder || (showTime ? locale.datetimePlaceholder : locale.placeholder),
                hint: 'calendar',
                hasClear: allowClear,
                className: triggerInputCls
            }))
        );
        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({}, _util.obj.pickOthers(DatePicker.propTypes, others), {
                className: datePickerCls
            }),
            _react2.default.createElement(
                Popup,
                (0, _extends3.default)({}, popupProps, {
                    followTrigger: followTrigger,
                    autoFocus: true,
                    disabled: disabled,
                    visible: visible,
                    onVisibleChange: this.onVisibleChange,
                    align: popupAlign,
                    triggerType: popupTriggerType,
                    container: popupContainer,
                    style: popupStyle,
                    className: popupClassName,
                    trigger: trigger
                }),
                _react2.default.createElement(
                    'div',
                    { dir: others.dir, className: panelBodyClassName },
                    _react2.default.createElement(
                        'div',
                        { className: prefix + 'date-picker-panel-header' },
                        dateInput,
                        timeInput
                    ),
                    panelBody,
                    panelFooter
                )
            )
        );
    };

    return DatePicker;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    /**
     * 输入框内置标签
     */
    label: _propTypes2.default.node,
    /**
     * 输入框状态
     */
    state: _propTypes2.default.oneOf(['success', 'loading', 'error']),
    /**
     * 输入提示
     */
    placeholder: _propTypes2.default.string,
    /**
     * 默认展现的月
     * @return {MomentObject} 返回包含指定月份的 moment 对象实例
     */
    defaultVisibleMonth: _propTypes2.default.func,
    onVisibleMonthChange: _propTypes2.default.func,
    /**
     * 日期值（受控）moment 对象
     */
    value: _util2.checkDateValue,
    /**
     * 初始日期值，moment 对象
     */
    defaultValue: _util2.checkDateValue,
    /**
     * 日期值的格式（用于限定用户输入和展示）
     */
    format: _propTypes2.default.string,
    /**
     * 是否使用时间控件，传入 TimePicker 的属性 { defaultValue, format, ... }
     */
    showTime: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),
    /**
     * 每次选择日期时是否重置时间（仅在 showTime 开启时有效）
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
     * 日期值改变时的回调
     * @param {MomentObject|String} value 日期值
     */
    onChange: _propTypes2.default.func,
    /**
     * 点击确认按钮时的回调
     * @return {MomentObject|String} 日期值
     */
    onOk: _propTypes2.default.func,
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
     * @param {String} type 触发弹层显示和隐藏的来源 calendarSelect 表示由日期表盘的选择触发； okBtnClick 表示由确认按钮触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发
     */
    onVisibleChange: _propTypes2.default.func,
    /**
     * 弹层触发方式
     */
    popupTriggerType: _propTypes2.default.oneOf(['click', 'hover']),
    /**
     * 弹层对齐方式,具体含义见 OverLay文档
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
    /**
     * 是否跟随滚动
     */
    followTrigger: _propTypes2.default.bool,
    /**
     * 输入框其他属性
     */
    inputProps: _propTypes2.default.object,
    /**
     * 自定义日期渲染函数
     * @param {Object} value 日期值（moment对象）
     * @returns {ReactNode}
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
     * 日期输入框的 aria-label 属性
     */
    dateInputAriaLabel: _propTypes2.default.string,
    /**
     * 时间输入框的 aria-label 属性
     */
    timeInputAriaLabel: _propTypes2.default.string,
    locale: _propTypes2.default.object,
    className: _propTypes2.default.string,
    name: _propTypes2.default.string
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
    popupTriggerType: 'click',
    popupAlign: 'tl tl',
    locale: _zhCn2.default.DatePicker,
    defaultVisible: false,
    onChange: _util.func.noop,
    onVisibleChange: _util.func.noop,
    onOk: _util.func.noop
}, _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.onValueChange = function (newValue) {
        var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'onChange';

        var ret = _this2.inputAsString && newValue ? newValue.format(_this2.dateTimeFormat) : newValue;
        _this2.props[handler](ret);
    };

    this.onSelectCalendarPanel = function (value) {
        var _props2 = _this2.props,
            showTime = _props2.showTime,
            resetTime = _props2.resetTime;


        var prevValue = _this2.state.value;
        var newValue = value;
        if (showTime) {
            if (!prevValue) {
                // 第一次选择日期值时，如果设置了默认时间，则使用该默认时间
                if (showTime.defaultValue) {
                    var defaultTimeValue = (0, _util2.formatDateValue)(showTime.defaultValue, _this2.timeFormat);
                    newValue = (0, _util2.resetValueTime)(value, defaultTimeValue);
                }
            } else if (!resetTime) {
                // 非第一选择日期，如果开启了 resetTime 属性，则记住之前选择的时间值
                newValue = (0, _util2.resetValueTime)(value, prevValue);
            }
        }

        _this2.handleChange(newValue, prevValue, { inputing: false });

        if (!showTime) {
            _this2.onVisibleChange(false, 'calendarSelect');
        }
    };

    this.onSelectTimePanel = function (value) {
        _this2.handleChange(value, _this2.state.value, { inputing: false });
    };

    this.clearValue = function () {
        _this2.setState({
            dateInputStr: '',
            timeInputStr: ''
        });

        _this2.handleChange(null, _this2.state.value, { inputing: false });
    };

    this.onDateInputChange = function (inputStr, e, eventType) {
        if (eventType === 'clear' || !inputStr) {
            e.stopPropagation();
            _this2.clearValue();
        } else {
            _this2.setState({
                dateInputStr: inputStr,
                inputing: 'date'
            });
        }
    };

    this.onTimeInputChange = function (inputStr) {
        _this2.setState({
            timeInputStr: inputStr,
            inputing: 'time'
        });
    };

    this.onDateInputBlur = function () {
        var dateInputStr = _this2.state.dateInputStr;

        if (dateInputStr) {
            var disabledDate = _this2.props.disabledDate;

            var parsed = (0, _moment2.default)(dateInputStr, _this2.format, true);

            _this2.setState({
                dateInputStr: '',
                inputing: false
            });

            if (parsed.isValid() && !disabledDate(parsed, 'date')) {
                _this2.handleChange(parsed, _this2.state.value);
            }
        }
    };

    this.onTimeInputBlur = function () {
        var _state2 = _this2.state,
            value = _state2.value,
            timeInputStr = _state2.timeInputStr;

        if (timeInputStr) {
            var parsed = (0, _moment2.default)(timeInputStr, _this2.timeFormat, true);

            _this2.setState({
                timeInputStr: '',
                inputing: false
            });

            if (parsed.isValid()) {
                var hour = parsed.hour();
                var minute = parsed.minute();
                var second = parsed.second();
                var newValue = value.clone().hour(hour).minute(minute).second(second);

                _this2.handleChange(newValue, _this2.state.value);
            }
        }
    };

    this.onKeyDown = function (e) {
        var format = _this2.props.format;
        var _state3 = _this2.state,
            dateInputStr = _state3.dateInputStr,
            value = _state3.value;

        var dateStr = (0, _util2.onDateKeydown)(e, { format: format, dateInputStr: dateInputStr, value: value }, 'day');
        if (!dateStr) return;
        _this2.onDateInputChange(dateStr);
    };

    this.onTimeKeyDown = function (e) {
        var showTime = _this2.props.showTime;
        var _state4 = _this2.state,
            timeInputStr = _state4.timeInputStr,
            value = _state4.value;

        var _ref = (typeof showTime === 'undefined' ? 'undefined' : (0, _typeof3.default)(showTime)) === 'object' ? showTime : {},
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

        var timeStr = (0, _util2.onTimeKeydown)(e, {
            format: _this2.timeFormat,
            timeInputStr: timeInputStr,
            value: value,
            steps: {
                hour: hourStep,
                minute: minuteStep,
                second: secondStep
            }
        }, unit);

        if (!timeStr) return;

        _this2.onTimeInputChange(timeStr);
    };

    this.handleChange = function (newValue, prevValue) {
        var others = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        if (!('value' in _this2.props)) {
            _this2.setState((0, _extends3.default)({
                value: newValue
            }, others));
        } else {
            _this2.setState((0, _extends3.default)({}, others));
        }

        var newValueOf = newValue ? newValue.valueOf() : null;
        var preValueOf = prevValue ? prevValue.valueOf() : null;

        if (newValueOf !== preValueOf) {
            _this2.onValueChange(newValue);
        }
    };

    this.onFoucsDateInput = function () {
        if (_this2.state.panel !== _util2.PANEL.DATE) {
            _this2.setState({
                panel: _util2.PANEL.DATE
            });
        }
    };

    this.onFoucsTimeInput = function () {
        if (_this2.state.panel !== _util2.PANEL.TIME) {
            _this2.setState({
                panel: _util2.PANEL.TIME
            });
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

    this.changePanel = function (panel) {
        _this2.setState({
            panel: panel
        });
    };

    this.onOk = function () {
        _this2.onVisibleChange(false, 'okBtnClick');
        _this2.onValueChange(_this2.state.value, 'onOk');
    };
}, _temp);
DatePicker.displayName = 'DatePicker';
exports.default = DatePicker;
module.exports = exports['default'];