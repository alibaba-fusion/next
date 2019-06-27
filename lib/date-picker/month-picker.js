'use strict';

exports.__esModule = true;

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

var _classnames4 = require('classnames');

var _classnames5 = _interopRequireDefault(_classnames4);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _overlay = require('../overlay');

var _overlay2 = _interopRequireDefault(_overlay);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _calendar = require('../calendar');

var _calendar2 = _interopRequireDefault(_calendar);

var _zhCn = require('../locale/zh-cn');

var _zhCn2 = _interopRequireDefault(_zhCn);

var _util = require('../util');

var _util2 = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Popup = _overlay2.default.Popup;

/**
 * DatePicker.MonthPicker
 */

var MonthPicker = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(MonthPicker, _Component);

    function MonthPicker(props, context) {
        (0, _classCallCheck3.default)(this, MonthPicker);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props, context));

        _initialiseProps.call(_this);

        var value = (0, _util2.formatDateValue)(props.value || props.defaultValue, props.format);

        _this.inputAsString = typeof (props.value || props.defaultValue) === 'string'; // 判断用户输入是否是字符串
        _this.state = {
            value: value,
            dateInputStr: '',
            inputing: false,
            visible: props.visible || props.defaultVisible
        };
        return _this;
    }

    MonthPicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            var value = (0, _util2.formatDateValue)(nextProps.value, nextProps.format || this.props.format);
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

    MonthPicker.prototype.render = function render() {
        var _classnames, _classnames2, _classnames3;

        var _props = this.props,
            prefix = _props.prefix,
            rtl = _props.rtl,
            locale = _props.locale,
            label = _props.label,
            state = _props.state,
            format = _props.format,
            defaultVisibleYear = _props.defaultVisibleYear,
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
            monthCellRender = _props.monthCellRender,
            yearCellRender = _props.yearCellRender,
            dateInputAriaLabel = _props.dateInputAriaLabel,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'rtl', 'locale', 'label', 'state', 'format', 'defaultVisibleYear', 'disabledDate', 'footerRender', 'placeholder', 'size', 'disabled', 'hasClear', 'popupTriggerType', 'popupAlign', 'popupContainer', 'popupStyle', 'popupClassName', 'popupProps', 'followTrigger', 'className', 'inputProps', 'monthCellRender', 'yearCellRender', 'dateInputAriaLabel']);
        var _state = this.state,
            visible = _state.visible,
            value = _state.value,
            dateInputStr = _state.dateInputStr,
            inputing = _state.inputing;


        var monthPickerCls = (0, _classnames5.default)((_classnames = {}, _classnames[prefix + 'month-picker'] = true, _classnames), className);

        var triggerInputCls = (0, _classnames5.default)((_classnames2 = {}, _classnames2[prefix + 'month-picker-input'] = true, _classnames2[prefix + 'error'] = false, _classnames2));

        var panelBodyClassName = (0, _classnames5.default)((_classnames3 = {}, _classnames3[prefix + 'month-picker-body'] = true, _classnames3));

        if (rtl) {
            others.dir = 'rtl';
        }

        var panelInputCls = prefix + 'month-picker-panel-input';

        var sharedInputProps = (0, _extends3.default)({}, inputProps, {
            size: size,
            disabled: disabled,
            onChange: this.onDateInputChange,
            onBlur: this.onDateInputBlur,
            onPressEnter: this.onDateInputBlur,
            onKeyDown: this.onKeyDown
        });

        var dateInputValue = inputing ? dateInputStr : value && value.format(format) || '';
        var triggerInputValue = dateInputValue;

        var dateInput = _react2.default.createElement(_input2.default, (0, _extends3.default)({}, sharedInputProps, {
            value: dateInputValue,
            'aria-label': dateInputAriaLabel,
            onFocus: this.onFoucsDateInput,
            placeholder: format,
            className: panelInputCls
        }));

        var datePanel = _react2.default.createElement(_calendar2.default, {
            shape: 'panel',
            modes: ['month', 'year'],
            monthCellRender: monthCellRender,
            yearCellRender: yearCellRender,
            value: value,
            onSelect: this.onSelectCalendarPanel,
            defaultVisibleMonth: defaultVisibleYear,
            disabledDate: disabledDate
        });

        var panelBody = datePanel;
        var panelFooter = footerRender();

        var allowClear = value && hasClear;
        var trigger = _react2.default.createElement(
            'div',
            { className: prefix + 'month-picker-trigger' },
            _react2.default.createElement(_input2.default, (0, _extends3.default)({}, sharedInputProps, {
                label: label,
                state: state,
                readOnly: true,
                value: triggerInputValue,
                placeholder: placeholder || locale.monthPlaceholder,
                hint: 'calendar',
                hasClear: allowClear,
                className: triggerInputCls
            }))
        );
        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({}, _util.obj.pickOthers(MonthPicker.propTypes, others), {
                className: monthPickerCls
            }),
            _react2.default.createElement(
                Popup,
                (0, _extends3.default)({}, popupProps, {
                    followTrigger: followTrigger,
                    autoFocus: true,
                    role: 'combobox',
                    'aria-expanded': visible,
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
                    { className: panelBodyClassName, dir: others.dir },
                    _react2.default.createElement(
                        'div',
                        { className: prefix + 'month-picker-panel-header' },
                        dateInput
                    ),
                    panelBody,
                    panelFooter
                )
            )
        );
    };

    return MonthPicker;
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
     * 默认展现的年
     * @return {MomentObject} 返回包含指定年份的 moment 对象实例
     */
    defaultVisibleYear: _propTypes2.default.func,
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
     * @param {String} type 触发弹层显示和隐藏的来源 calendarSelect 表示由日期表盘的选择触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发
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
    /**
     * 是否跟随滚动
     */
    followTrigger: _propTypes2.default.bool,
    /**
     * 输入框其他属性
     */
    inputProps: _propTypes2.default.object,
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
    locale: _propTypes2.default.object,
    className: _propTypes2.default.string
}, _class.defaultProps = {
    prefix: 'next-',
    rtl: false,
    format: 'YYYY-MM',
    size: 'medium',
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
    onVisibleChange: _util.func.noop
}, _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.onValueChange = function (newValue) {
        var ret = _this2.inputAsString && newValue ? newValue.format(_this2.props.format) : newValue;
        _this2.props.onChange(ret);
    };

    this.onSelectCalendarPanel = function (value) {
        // const { format } = this.props;
        var prevSelectedMonth = _this2.state.value;
        var selectedMonth = value.clone().date(1).hour(0).minute(0).second(0);

        _this2.handleChange(selectedMonth, prevSelectedMonth, { inputing: false }, function () {
            _this2.onVisibleChange(false, 'calendarSelect');
        });
    };

    this.clearValue = function () {
        _this2.setState({
            dateInputStr: ''
        });

        _this2.handleChange(null, _this2.state.value);
    };

    this.onDateInputChange = function (inputStr, e, eventType) {
        if (eventType === 'clear' || !inputStr) {
            e.stopPropagation();
            _this2.clearValue();
        } else {
            _this2.setState({
                dateInputStr: inputStr,
                inputing: true
            });
        }
    };

    this.onDateInputBlur = function () {
        var dateInputStr = _this2.state.dateInputStr;

        if (dateInputStr) {
            var _props2 = _this2.props,
                disabledDate = _props2.disabledDate,
                format = _props2.format;

            var parsed = (0, _moment2.default)(dateInputStr, format, true);

            _this2.setState({
                dateInputStr: '',
                inputing: false
            });

            if (parsed.isValid() && !disabledDate(parsed, 'month')) {
                _this2.handleChange(parsed, _this2.state.value);
            }
        }
    };

    this.onKeyDown = function (e) {
        var format = _this2.props.format;
        var _state2 = _this2.state,
            dateInputStr = _state2.dateInputStr,
            value = _state2.value;

        var dateStr = (0, _util2.onDateKeydown)(e, { format: format, dateInputStr: dateInputStr, value: value }, 'month');
        if (!dateStr) return;
        _this2.onDateInputChange(dateStr);
    };

    this.handleChange = function (newValue, prevValue) {
        var others = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var callback = arguments[3];

        if (!('value' in _this2.props)) {
            _this2.setState((0, _extends3.default)({
                value: newValue
            }, others));
        } else {
            _this2.setState((0, _extends3.default)({}, others));
        }

        var format = _this2.props.format;


        var newValueOf = newValue ? newValue.format(format) : null;
        var preValueOf = prevValue ? prevValue.format(format) : null;

        if (newValueOf !== preValueOf) {
            _this2.onValueChange(newValue);
            if (typeof callback === 'function') {
                return callback();
            }
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
MonthPicker.displayName = 'MonthPicker';
exports.default = MonthPicker;
module.exports = exports['default'];