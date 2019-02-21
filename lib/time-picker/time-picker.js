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

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _overlay = require('../overlay');

var _overlay2 = _interopRequireDefault(_overlay);

var _zhCn = require('../locale/zh-cn');

var _zhCn2 = _interopRequireDefault(_zhCn);

var _util = require('../util');

var _panel = require('./panel');

var _panel2 = _interopRequireDefault(_panel);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Popup = _overlay2.default.Popup;
var noop = _util.func.noop;

var timePickerLocale = _zhCn2.default.TimePicker;

/**
 * TimePicker
 */
var TimePicker = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(TimePicker, _Component);

    function TimePicker(props, context) {
        (0, _classCallCheck3.default)(this, TimePicker);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props, context));

        _initialiseProps.call(_this);

        var value = (0, _utils.formatDateValue)(props.value || props.defaultValue, props.format);
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
            var value = (0, _utils.formatDateValue)(nextProps.value, nextProps.format || this.props.format);
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
            popupAlign = _props.popupAlign,
            popupTriggerType = _props.popupTriggerType,
            popupContainer = _props.popupContainer,
            popupStyle = _props.popupStyle,
            popupClassName = _props.popupClassName,
            popupProps = _props.popupProps,
            disabled = _props.disabled,
            className = _props.className,
            locale = _props.locale,
            rtl = _props.rtl,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'label', 'state', 'placeholder', 'size', 'format', 'hasClear', 'hourStep', 'minuteStep', 'secondStep', 'disabledHours', 'disabledMinutes', 'disabledSeconds', 'popupAlign', 'popupTriggerType', 'popupContainer', 'popupStyle', 'popupClassName', 'popupProps', 'disabled', 'className', 'locale', 'rtl']);
        var _state = this.state,
            value = _state.value,
            inputStr = _state.inputStr,
            inputing = _state.inputing,
            visible = _state.visible;


        var triggerCls = (0, _classnames4.default)((_classnames = {}, _classnames[prefix + 'time-picker-trigger'] = true, _classnames));

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
            hint: 'clock'
        };

        var triggerInput = _react2.default.createElement(
            'div',
            { className: triggerCls },
            _react2.default.createElement(_input2.default, (0, _extends3.default)({}, sharedInputProps, {
                label: label,
                state: state,
                placeholder: placeholder || locale.placeholder,
                className: prefix + 'time-picker-input' }))
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
            onSelect: this.onTimePanelSelect
        };

        var classNames = (0, _classnames4.default)((_classnames2 = {}, _classnames2[prefix + 'time-picker'] = true, _classnames2[prefix + 'time-picker-' + size] = size, _classnames2[prefix + 'disabled'] = disabled, _classnames2), className);

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({}, _util.obj.pickOthers(TimePicker.propTypes, others), { className: classNames }),
            _react2.default.createElement(
                Popup,
                (0, _extends3.default)({}, popupProps, {
                    autoFocus: true,
                    visible: visible,
                    onVisibleChange: this.onVisibleChange,
                    trigger: triggerInput,
                    container: popupContainer,
                    disabled: disabled,
                    align: popupAlign,
                    triggerType: popupTriggerType,
                    style: popupStyle,
                    className: popupClassName }),
                _react2.default.createElement(
                    'div',
                    { dir: others.dir, className: prefix + 'time-picker-body' },
                    _react2.default.createElement(
                        'div',
                        { className: prefix + 'time-picker-panel-header' },
                        _react2.default.createElement(_input2.default, (0, _extends3.default)({}, sharedInputProps, {
                            placeholder: format,
                            className: prefix + 'time-picker-panel-input' }))
                    ),
                    _react2.default.createElement(_panel2.default, panelProps)
                )
            )
        );
    };

    return TimePicker;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    /**
     * 按钮的文案
     */
    label: _propTypes2.default.node,
    /**
     * 输入框状态
     */
    state: _propTypes2.default.oneOf(['error', 'success']),
    /**
     * 输入框提示
     */
    placeholder: _propTypes2.default.string,
    /**
     * 时间值（moment 对象或时间字符串，受控状态使用）
     */
    value: _utils.checkDateValue,
    /**
     * 时间初值（moment 对象或时间字符串，非受控状态使用）
     */
    defaultValue: _utils.checkDateValue,
    /**
     * 时间选择框的尺寸
     */
    size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
    /**
     * 是否允许清空时间
     */
    hasClear: _propTypes2.default.bool,
    /**
     * 时间的格式
     * https://momentjs.com/docs/#/parsing/string-format/
     */
    format: _propTypes2.default.string,
    /**
     * 小时选项步长
     */
    hourStep: _propTypes2.default.number,
    /**
     * 分钟选项步长
     */
    minuteStep: _propTypes2.default.number,
    /**
     * 秒钟选项步长
     */
    secondStep: _propTypes2.default.number,
    /**
     * 禁用小时函数
     * @param {Number} index 时 0 - 23
     * @return {Boolean} 是否禁用
     */
    disabledHours: _propTypes2.default.func,
    /**
     * 禁用分钟函数
     * @param {Number} index 分 0 - 59
     * @return {Boolean} 是否禁用
     */
    disabledMinutes: _propTypes2.default.func,
    /**
     * 禁用秒钟函数
     * @param {Number} index 秒 0 - 59
     * @return {Boolean} 是否禁用
     */
    disabledSeconds: _propTypes2.default.func,
    /**
     * 弹层是否显示（受控）
     */
    visible: _propTypes2.default.bool,
    /**
     * 弹层默认是否显示（非受控）
     */
    defaultVisible: _propTypes2.default.bool,
    /**
     * 弹层容器
     * @param {Object} target 目标节点
     * @return {ReactNode} 容器节点
     */
    popupContainer: _propTypes2.default.func,
    /**
     * 弹层对齐方式, 详情见Overlay 文档
     */
    popupAlign: _propTypes2.default.string,
    /**
     * 弹层触发方式
     */
    popupTriggerType: _propTypes2.default.oneOf(['click', 'hover']),
    /**
     * 弹层展示状态变化时的回调
     * @param {Boolean} visible 弹层是否隐藏和显示
     * @param {String} reason 触发弹层显示和隐藏的来源
     */
    onVisibleChange: _propTypes2.default.func,
    /**
     * 弹层自定义样式
     */
    popupStyle: _propTypes2.default.object,
    /**
     * 弹层自定义样式类
     */
    popupClassName: _propTypes2.default.string,
    /**
     * 弹层属性
     */
    popupProps: _propTypes2.default.object,
    /**
     * 是否禁用
     */
    disabled: _propTypes2.default.bool,
    /**
     * 时间值改变时的回调
     * @param {Object|String} value 时间对象或时间字符串
     */
    onChange: _propTypes2.default.func,
    className: _propTypes2.default.string
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

            var parsed = (0, _moment2.default)(inputStr, format, true);
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

    this.onVisibleChange = function (visible, reason) {
        if (!('visible' in _this2.props)) {
            _this2.setState({
                visible: visible
            });
        }
        _this2.props.onVisibleChange(visible, reason);
    };
}, _temp);
TimePicker.displayName = 'TimePicker';
exports.default = TimePicker;
module.exports = exports['default'];