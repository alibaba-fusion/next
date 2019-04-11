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
import { checkDateValue, formatDateValue, onDateKeydown } from './util';

var Popup = Overlay.Popup;

/**
 * DatePicker.YearPicker
 */

var YearPicker = (_temp = _class = function (_Component) {
    _inherits(YearPicker, _Component);

    function YearPicker(props, context) {
        _classCallCheck(this, YearPicker);

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

    YearPicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
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

    YearPicker.prototype.render = function render() {
        var _classnames, _classnames2, _classnames3;

        var _props = this.props,
            prefix = _props.prefix,
            rtl = _props.rtl,
            locale = _props.locale,
            label = _props.label,
            state = _props.state,
            format = _props.format,
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
            inputProps = _props.inputProps,
            dateInputAriaLabel = _props.dateInputAriaLabel,
            others = _objectWithoutProperties(_props, ['prefix', 'rtl', 'locale', 'label', 'state', 'format', 'disabledDate', 'footerRender', 'placeholder', 'size', 'disabled', 'hasClear', 'popupTriggerType', 'popupAlign', 'popupContainer', 'popupStyle', 'popupClassName', 'popupProps', 'className', 'inputProps', 'dateInputAriaLabel']);

        var _state = this.state,
            visible = _state.visible,
            value = _state.value,
            dateInputStr = _state.dateInputStr,
            inputing = _state.inputing;


        var yearPickerCls = classnames((_classnames = {}, _classnames[prefix + 'year-picker'] = true, _classnames), className);

        var triggerInputCls = classnames((_classnames2 = {}, _classnames2[prefix + 'year-picker-input'] = true, _classnames2[prefix + 'error'] = false, _classnames2));

        var panelBodyClassName = classnames((_classnames3 = {}, _classnames3[prefix + 'year-picker-body'] = true, _classnames3));

        if (rtl) {
            others.dir = 'rtl';
        }

        var panelInputCls = prefix + 'year-picker-panel-input';

        var sharedInputProps = _extends({}, inputProps, {
            size: size,
            disabled: disabled,
            onChange: this.onDateInputChange,
            onBlur: this.onDateInputBlur,
            onPressEnter: this.onDateInputBlur,
            onKeyDown: this.onKeyDown
        });

        var dateInputValue = inputing ? dateInputStr : value && value.format(format) || '';
        var triggerInputValue = dateInputValue;

        var dateInput = React.createElement(Input, _extends({}, sharedInputProps, {
            'aria-label': dateInputAriaLabel,
            value: dateInputValue,
            placeholder: format,
            className: panelInputCls
        }));

        var datePanel = React.createElement(Calendar, {
            shape: 'panel',
            modes: ['year'],
            value: value,
            onSelect: this.onSelectCalendarPanel,
            disabledDate: disabledDate
        });

        var panelBody = datePanel;
        var panelFooter = footerRender();

        var allowClear = value && hasClear;
        var trigger = React.createElement(
            'div',
            { className: prefix + 'year-picker-trigger' },
            React.createElement(Input, _extends({}, sharedInputProps, {
                label: label,
                state: state,
                value: triggerInputValue,
                role: 'combobox',
                'aria-expanded': visible,
                readOnly: true,
                placeholder: placeholder || locale.yearPlaceholder,
                hint: 'calendar',
                hasClear: allowClear,
                className: triggerInputCls
            }))
        );

        return React.createElement(
            'div',
            _extends({}, obj.pickOthers(YearPicker.propTypes, others), {
                className: yearPickerCls
            }),
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
                    trigger: trigger
                }),
                React.createElement(
                    'div',
                    { dir: others.dir, className: panelBodyClassName },
                    React.createElement(
                        'div',
                        { className: prefix + 'year-picker-panel-header' },
                        dateInput
                    ),
                    panelBody,
                    panelFooter
                )
            )
        );
    };

    return YearPicker;
}(Component), _class.propTypes = {
    prefix: PropTypes.string,
    rtl: PropTypes.bool,
    /**
     * 输入框内置标签
     */
    label: PropTypes.node,
    /**
     * 输入框状态
     */
    state: PropTypes.oneOf(['success', 'loading', 'error']),
    /**
     * 输入提示
     */
    placeholder: PropTypes.string,
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
     * 日期值改变时的回调
     * @param {MomentObject|String} value 日期值
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
     * 输入框其他属性
     */
    inputProps: PropTypes.object,
    /**
     * 日期输入框的 aria-label 属性
     */
    dateInputAriaLabel: PropTypes.string,
    locale: PropTypes.object,
    className: PropTypes.string
}, _class.defaultProps = {
    prefix: 'next-',
    rtl: false,
    format: 'YYYY',
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
        var selectedMonth = value.clone().month(0).date(1).hour(0).minute(0).second(0);

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

            if (parsed.isValid() && !disabledDate(parsed, 'year')) {
                _this2.handleChange(parsed, _this2.state.value);
            }
        }
    };

    this.onKeyDown = function (e) {
        var format = _this2.props.format;
        var _state2 = _this2.state,
            dateInputStr = _state2.dateInputStr,
            value = _state2.value;

        var dateStr = onDateKeydown(e, { format: format, dateInputStr: dateInputStr, value: value }, 'year');
        if (!dateStr) return;
        _this2.onDateInputChange(dateStr);
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
            if (typeof callback === 'function') {
                return callback();
            }
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
YearPicker.displayName = 'YearPicker';


export default YearPicker;