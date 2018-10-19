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
import Calendar from '../calendar';
import nextLocale from '../locale/zh-cn';
import { func, obj } from '../util';
import { checkDateValue, formatDateValue } from './util';

var Popup = Overlay.Popup;

/**
 * DatePicker.MonthPicker
 */

var MonthPicker = (_temp = _class = function (_Component) {
    _inherits(MonthPicker, _Component);

    function MonthPicker(props, context) {
        _classCallCheck(this, MonthPicker);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _initialiseProps.call(_this);

        var value = formatDateValue(props.value || props.defaultValue, props.format);

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
            var value = formatDateValue(nextProps.value, nextProps.format || this.props.format);
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
            className = _props.className,
            others = _objectWithoutProperties(_props, ['prefix', 'locale', 'label', 'state', 'format', 'defaultVisibleYear', 'disabledDate', 'footerRender', 'placeholder', 'size', 'disabled', 'hasClear', 'popupTriggerType', 'popupAlign', 'popupContainer', 'popupStyle', 'popupClassName', 'popupProps', 'className']);

        var _state = this.state,
            visible = _state.visible,
            value = _state.value,
            dateInputStr = _state.dateInputStr,
            inputing = _state.inputing;


        var monthPickerCls = classnames((_classnames = {}, _classnames[prefix + 'month-picker'] = true, _classnames), className);

        var triggerInputCls = classnames((_classnames2 = {}, _classnames2[prefix + 'month-picker-input'] = true, _classnames2[prefix + 'error'] = false, _classnames2));

        var panelBodyClassName = classnames((_classnames3 = {}, _classnames3[prefix + 'month-picker-body'] = true, _classnames3));

        var panelInputCls = prefix + 'month-picker-panel-input';

        var sharedInputProps = {
            size: size,
            disabled: disabled,
            onChange: this.onDateInputChange,
            onBlur: this.onDateInputBlur,
            onPressEnter: this.onDateInputBlur
        };

        var dateInputValue = inputing ? dateInputStr : value && value.format(format) || '';
        var triggerInputValue = dateInputValue;

        var dateInput = React.createElement(Input, _extends({}, sharedInputProps, {
            value: dateInputValue,
            onFocus: this.onFoucsDateInput,
            placeholder: format,
            className: panelInputCls }));

        var datePanel = React.createElement(Calendar, {
            shape: 'panel',
            modes: ['month', 'year'],
            value: value,
            onSelect: this.onSelectCalendarPanel,
            defaultVisibleMonth: defaultVisibleYear,
            disabledDate: disabledDate });

        var panelBody = datePanel;
        var panelFooter = footerRender();

        var allowClear = value && hasClear;
        var trigger = React.createElement(
            'div',
            { className: prefix + 'month-picker-trigger' },
            React.createElement(Input, _extends({}, sharedInputProps, {
                label: label,
                state: state,
                value: triggerInputValue,
                placeholder: placeholder || locale.monthPlaceholder,
                hint: 'calendar',
                hasClear: allowClear,
                className: triggerInputCls }))
        );

        return React.createElement(
            'div',
            _extends({}, obj.pickOthers(MonthPicker.propTypes, others), { className: monthPickerCls }),
            React.createElement(
                Popup,
                _extends({}, popupProps, {
                    autoFocus: true,
                    disabled: disabled,
                    visible: visible,
                    onVisibleChange: this.onVisibleChange,
                    align: popupAlign,
                    triggerType: popupTriggerType,
                    container: popupContainer,
                    style: popupStyle,
                    className: popupClassName,
                    trigger: trigger }),
                React.createElement(
                    'div',
                    { className: panelBodyClassName },
                    React.createElement(
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
}(Component), _class.propTypes = {
    prefix: PropTypes.string,
    /**
     * 输入框内置标签
     */
    label: PropTypes.node,
    /**
     * 输入框状态
     */
    state: PropTypes.oneOf(['success', 'error']),
    /**
     * 输入提示
     */
    placeholder: PropTypes.string,
    /**
     * 默认展现的年
     * @return {MomentObject} 返回包含指定年份的 moment 对象实例
     */
    defaultVisibleYear: PropTypes.func,
    /**
     * 日期值（受控）moment 对象
     */
    value: checkDateValue,
    /**
     * 初始日期值，moment 对象
     */
    defaultValue: checkDateValue,
    /**
     * 日期值的格式（用于限定用户输入和展示）
     */
    format: PropTypes.string,
    /**
     * 禁用日期函数
     * @param {MomentObject} 日期值
     * @return {Boolean} 是否禁用
     */
    disabledDate: PropTypes.func,
    /**
     * 自定义面板页脚
     * @return {Node} 自定义的面板页脚组件
     */
    footerRender: PropTypes.func,
    /**
     * 日期值改变时的回调
     * @return {MomentObject|String} 日期值
     */
    onChange: PropTypes.func,
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
     * @param {String} reason 触发弹层显示和隐藏的来源
     */
    onVisibleChange: PropTypes.func,
    /**
     * 弹层触发方式
     */
    popupTriggerType: PropTypes.oneOf(['click', 'hover']),
    /**
     * 弹层对齐方式
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
    locale: PropTypes.object,
    className: PropTypes.string
}, _class.defaultProps = {
    prefix: 'next-',
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
    locale: nextLocale.DatePicker,
    onChange: func.noop,
    onVisibleChange: func.noop
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

            var parsed = moment(dateInputStr, format, true);

            _this2.setState({
                dateInputStr: '',
                inputing: false
            });

            if (parsed.isValid() && !disabledDate(parsed)) {
                _this2.handleChange(parsed, _this2.state.value);
            }
        }
    };

    this.handleChange = function (newValue, prevValue) {
        var others = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var callback = arguments[3];

        if (!('value' in _this2.props)) {
            _this2.setState(_extends({
                value: newValue
            }, others));
        }

        var format = _this2.props.format;


        var newValueOf = newValue ? newValue.format(format) : null;
        var preValueOf = prevValue ? prevValue.format(format) : null;

        if (newValueOf !== preValueOf) {
            _this2.onValueChange(newValue);
            typeof callback === 'function' && callback();
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
MonthPicker.displayName = 'MonthPicker';


export default MonthPicker;