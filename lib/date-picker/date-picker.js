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

var _classnames6 = require('classnames');

var _classnames7 = _interopRequireDefault(_classnames6);

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

        var _getDateTimeFormat = (0, _util2.getDateTimeFormat)(props.format, props.showTime),
            format = _getDateTimeFormat.format,
            timeFormat = _getDateTimeFormat.timeFormat,
            dateTimeFormat = _getDateTimeFormat.dateTimeFormat;

        _this.state = {
            value: (0, _util2.formatDateValue)(props.defaultValue, dateTimeFormat),
            dateInputStr: '',
            timeInputStr: '',
            inputing: false, // 当前是否处于输入状态
            visible: props.defaultVisible,
            inputAsString: typeof props.defaultValue === 'string',
            panel: _util2.PANEL.DATE,
            format: format,
            timeFormat: timeFormat,
            dateTimeFormat: dateTimeFormat
        };
        return _this;
    }

    DatePicker.getDerivedStateFromProps = function getDerivedStateFromProps(props) {
        var formatStates = (0, _util2.getDateTimeFormat)(props.format, props.showTime);
        var states = {};

        if ('value' in props) {
            states.value = (0, _util2.formatDateValue)(props.value, formatStates.dateTimeFormat);
            states.inputAsString = typeof props.value === 'string';
        }

        if ('visible' in props) {
            states.visible = props.visible;
        }

        return (0, _extends3.default)({}, states, formatStates);
    };

    DatePicker.prototype.renderPreview = function renderPreview(others) {
        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            renderPreview = _props.renderPreview;
        var _state = this.state,
            value = _state.value,
            dateTimeFormat = _state.dateTimeFormat;

        var previewCls = (0, _classnames7.default)(className, prefix + 'form-preview');

        var label = value ? value.format(dateTimeFormat) : '';

        if (typeof renderPreview === 'function') {
            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, others, { className: previewCls }),
                renderPreview(value, this.props)
            );
        }

        return _react2.default.createElement(
            'p',
            (0, _extends3.default)({}, others, { className: previewCls }),
            label
        );
    };

    DatePicker.prototype.render = function render() {
        var _classnames, _classnames2, _classnames3, _classnames4, _PANEL$DATE$PANEL$TIM;

        var _props2 = this.props,
            prefix = _props2.prefix,
            rtl = _props2.rtl,
            locale = _props2.locale,
            label = _props2.label,
            state = _props2.state,
            defaultVisibleMonth = _props2.defaultVisibleMonth,
            onVisibleMonthChange = _props2.onVisibleMonthChange,
            showTime = _props2.showTime,
            disabledDate = _props2.disabledDate,
            footerRender = _props2.footerRender,
            placeholder = _props2.placeholder,
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
            inputProps = _props2.inputProps,
            dateCellRender = _props2.dateCellRender,
            monthCellRender = _props2.monthCellRender,
            yearCellRender = _props2.yearCellRender,
            dateInputAriaLabel = _props2.dateInputAriaLabel,
            timeInputAriaLabel = _props2.timeInputAriaLabel,
            isPreview = _props2.isPreview,
            disableChangeMode = _props2.disableChangeMode,
            yearRange = _props2.yearRange,
            others = (0, _objectWithoutProperties3.default)(_props2, ['prefix', 'rtl', 'locale', 'label', 'state', 'defaultVisibleMonth', 'onVisibleMonthChange', 'showTime', 'disabledDate', 'footerRender', 'placeholder', 'size', 'disabled', 'hasClear', 'popupTriggerType', 'popupAlign', 'popupContainer', 'popupStyle', 'popupClassName', 'popupProps', 'popupComponent', 'popupContent', 'followTrigger', 'className', 'inputProps', 'dateCellRender', 'monthCellRender', 'yearCellRender', 'dateInputAriaLabel', 'timeInputAriaLabel', 'isPreview', 'disableChangeMode', 'yearRange']);
        var _state2 = this.state,
            visible = _state2.visible,
            value = _state2.value,
            dateInputStr = _state2.dateInputStr,
            timeInputStr = _state2.timeInputStr,
            panel = _state2.panel,
            inputing = _state2.inputing,
            format = _state2.format,
            timeFormat = _state2.timeFormat,
            dateTimeFormat = _state2.dateTimeFormat;


        var datePickerCls = (0, _classnames7.default)((_classnames = {}, _classnames[prefix + 'date-picker'] = true, _classnames), className);

        var triggerInputCls = (0, _classnames7.default)((_classnames2 = {}, _classnames2[prefix + 'date-picker-input'] = true, _classnames2[prefix + 'error'] = false, _classnames2));

        var panelBodyClassName = (0, _classnames7.default)((_classnames3 = {}, _classnames3[prefix + 'date-picker-body'] = true, _classnames3[prefix + 'date-picker-body-show-time'] = showTime, _classnames3));

        var panelDateInputCls = (0, _classnames7.default)((_classnames4 = {}, _classnames4[prefix + 'date-picker-panel-input'] = true, _classnames4[prefix + 'focus'] = panel === _util2.PANEL.DATE, _classnames4));

        if (rtl) {
            others.dir = 'rtl';
        }

        if (isPreview) {
            return this.renderPreview(_util.obj.pickOthers(others, DatePicker.PropTypes));
        }

        var sharedInputProps = (0, _extends3.default)({}, inputProps, {
            size: size,
            disabled: disabled,
            onChange: this.onDateInputChange,
            onBlur: this.onDateInputBlur,
            onPressEnter: this.onDateInputBlur,
            onKeyDown: this.onKeyDown
        });

        var dateInputValue = inputing === 'date' ? dateInputStr : value && value.format(format) || '';
        var triggerInputValue = dateInputValue;

        var dateInput = _react2.default.createElement(_input2.default, (0, _extends3.default)({}, sharedInputProps, {
            'aria-label': dateInputAriaLabel,
            value: dateInputValue,
            onFocus: this.onFoucsDateInput,
            placeholder: format,
            className: panelDateInputCls
        }));

        var datePanel = _react2.default.createElement(_calendar2.default, {
            shape: 'panel',
            value: value,
            format: format,
            dateCellRender: dateCellRender,
            monthCellRender: monthCellRender,
            yearCellRender: yearCellRender,
            onSelect: this.onSelectCalendarPanel,
            defaultVisibleMonth: defaultVisibleMonth,
            onVisibleMonthChange: onVisibleMonthChange,
            disabledDate: disabledDate,
            disableChangeMode: disableChangeMode,
            yearRange: yearRange
        });

        var panelFooter = footerRender();

        var timeInput = null;
        var timePanel = null;

        if (showTime) {
            var _classnames5;

            var timeInputValue = inputing === 'time' ? timeInputStr : value && value.format(timeFormat) || '';
            triggerInputValue = value && value.format(dateTimeFormat) || '';

            var timePanelProps = (typeof showTime === 'undefined' ? 'undefined' : (0, _typeof3.default)(showTime)) === 'object' ? showTime : {};

            var showSecond = timeFormat.indexOf('s') > -1;
            var showMinute = timeFormat.indexOf('m') > -1;

            var panelTimeInputCls = (0, _classnames7.default)((_classnames5 = {}, _classnames5[prefix + 'date-picker-panel-input'] = true, _classnames5[prefix + 'focus'] = panel === _util2.PANEL.TIME, _classnames5));

            timeInput = _react2.default.createElement(_input2.default, {
                placeholder: timeFormat,
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
                showMinute: showMinute,
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
                hint: _react2.default.createElement(_icon2.default, { type: 'calendar', className: prefix + 'date-picker-symbol-calendar-icon' }),
                hasClear: allowClear,
                className: triggerInputCls
            }))
        );
        var PopupComponent = popupComponent ? popupComponent : Popup;

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({}, _util.obj.pickOthers(DatePicker.propTypes, others), { className: datePickerCls }),
            _react2.default.createElement(
                PopupComponent,
                (0, _extends3.default)({
                    autoFocus: true,
                    align: popupAlign
                }, popupProps, {
                    followTrigger: followTrigger,
                    disabled: disabled,
                    visible: visible,
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
}(_react.Component), _class.propTypes = (0, _extends3.default)({}, _configProvider2.default.propTypes, {
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
    /**
     * 是否为预览态
     */
    isPreview: _propTypes2.default.bool,
    /**
     * 预览态模式下渲染的内容
     * @param {MomentObject} value 日期
     */
    renderPreview: _propTypes2.default.func,
    locale: _propTypes2.default.object,
    className: _propTypes2.default.string,
    name: _propTypes2.default.string,
    popupComponent: _propTypes2.default.elementType,
    popupContent: _propTypes2.default.node,
    disableChangeMode: _propTypes2.default.bool,
    yearRange: _propTypes2.default.arrayOf(_propTypes2.default.number)
}), _class.defaultProps = {
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

        var ret = _this2.state.inputAsString && newValue ? newValue.format(_this2.state.dateTimeFormat) : newValue;
        _this2.props[handler](ret);
    };

    this.onSelectCalendarPanel = function (value) {
        var _props3 = _this2.props,
            showTime = _props3.showTime,
            resetTime = _props3.resetTime;


        var prevValue = _this2.state.value;
        var newValue = value;
        if (showTime) {
            if (!prevValue) {
                // 第一次选择日期值时，如果设置了默认时间，则使用该默认时间
                if (showTime.defaultValue) {
                    var defaultTimeValue = (0, _util2.formatDateValue)(showTime.defaultValue, _this2.state.timeFormat);
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
        var _state3 = _this2.state,
            dateInputStr = _state3.dateInputStr,
            value = _state3.value,
            format = _state3.format;
        var resetTime = _this2.props.resetTime;


        if (dateInputStr) {
            var disabledDate = _this2.props.disabledDate;

            var parsed = (0, _moment2.default)(dateInputStr, format, true);

            _this2.setState({
                dateInputStr: '',
                inputing: false
            });
            if (parsed.isValid() && !disabledDate(parsed, 'date')) {
                parsed = resetTime ? parsed : (0, _util2.resetValueTime)(parsed, value);
                _this2.handleChange(parsed, value);
            }
        }
    };

    this.onTimeInputBlur = function () {
        var _state4 = _this2.state,
            value = _state4.value,
            timeInputStr = _state4.timeInputStr,
            timeFormat = _state4.timeFormat;

        if (timeInputStr) {
            var parsed = (0, _moment2.default)(timeInputStr, timeFormat, true);

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
        var _state5 = _this2.state,
            dateInputStr = _state5.dateInputStr,
            value = _state5.value;

        var dateStr = (0, _util2.onDateKeydown)(e, { format: format, dateInputStr: dateInputStr, value: value }, 'day');
        if (!dateStr) return;
        _this2.onDateInputChange(dateStr);
    };

    this.onTimeKeyDown = function (e) {
        var showTime = _this2.props.showTime;
        var _state6 = _this2.state,
            timeInputStr = _state6.timeInputStr,
            timeFormat = _state6.timeFormat,
            value = _state6.value;

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
            format: timeFormat,
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

    this.onOk = function (value) {
        _this2.onVisibleChange(false, 'okBtnClick');
        _this2.onValueChange(value || _this2.state.value, 'onOk');
    };
}, _temp);
DatePicker.displayName = 'DatePicker';
exports.default = (0, _reactLifecyclesCompat.polyfill)(DatePicker);
module.exports = exports['default'];