import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import moment from 'moment';
import ConfigProvider from '../config-provider';
import Overlay from '../overlay';
import Input from '../input';
import Icon from '../icon';
import Calendar from '../calendar';
import nextLocale from '../locale/zh-cn';
import { func, obj } from '../util';
import { checkDateValue, formatDateValue, onDateKeydown } from './util';

var Popup = Overlay.Popup;

/**
 * DatePicker.MonthPicker
 */

var MonthPicker = (_temp = _class = function (_Component) {
    _inherits(MonthPicker, _Component);

    function MonthPicker(props, context) {
        _classCallCheck(this, MonthPicker);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.onValueChange = function (newValue) {
            var ret = _this.state.inputAsString && newValue ? newValue.format(_this.props.format) : newValue;
            _this.props.onChange(ret);
        };

        _this.onSelectCalendarPanel = function (value) {
            // const { format } = this.props;
            var prevSelectedMonth = _this.state.value;
            var selectedMonth = value.clone().date(1).hour(0).minute(0).second(0);

            _this.handleChange(selectedMonth, prevSelectedMonth, { inputing: false }, function () {
                _this.onVisibleChange(false, 'calendarSelect');
            });
        };

        _this.clearValue = function () {
            _this.setState({
                dateInputStr: ''
            });

            _this.handleChange(null, _this.state.value);
        };

        _this.onDateInputChange = function (inputStr, e, eventType) {
            if (eventType === 'clear' || !inputStr) {
                e.stopPropagation();
                _this.clearValue();
            } else {
                _this.setState({
                    dateInputStr: inputStr,
                    inputing: true
                });
            }
        };

        _this.onDateInputBlur = function () {
            var dateInputStr = _this.state.dateInputStr;

            if (dateInputStr) {
                var _this$props = _this.props,
                    disabledDate = _this$props.disabledDate,
                    format = _this$props.format;

                var parsed = moment(dateInputStr, format, true);

                _this.setState({
                    dateInputStr: '',
                    inputing: false
                });

                if (parsed.isValid() && !disabledDate(parsed, 'month')) {
                    _this.handleChange(parsed, _this.state.value);
                }
            }
        };

        _this.onKeyDown = function (e) {
            var format = _this.props.format;
            var _this$state = _this.state,
                dateInputStr = _this$state.dateInputStr,
                value = _this$state.value;

            var dateStr = onDateKeydown(e, { format: format, dateInputStr: dateInputStr, value: value }, 'month');
            if (!dateStr) return;
            _this.onDateInputChange(dateStr);
        };

        _this.handleChange = function (newValue, prevValue) {
            var others = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var callback = arguments[3];

            if (!('value' in _this.props)) {
                _this.setState(_extends({
                    value: newValue
                }, others));
            } else {
                _this.setState(_extends({}, others));
            }

            var format = _this.props.format;


            var newValueOf = newValue ? newValue.format(format) : null;
            var preValueOf = prevValue ? prevValue.format(format) : null;

            if (newValueOf !== preValueOf) {
                _this.onValueChange(newValue);
                if (typeof callback === 'function') {
                    return callback();
                }
            }
        };

        _this.onVisibleChange = function (visible, type) {
            if (!('visible' in _this.props)) {
                _this.setState({
                    visible: visible
                });
            }
            _this.props.onVisibleChange(visible, type);
        };

        _this.state = {
            value: formatDateValue(props.defaultValue, props.format),
            dateInputStr: '',
            inputing: false,
            visible: props.defaultVisible,
            inputAsString: typeof props.defaultValue === 'string'
        };
        return _this;
    }

    MonthPicker.getDerivedStateFromProps = function getDerivedStateFromProps(props) {
        var states = {};
        if ('value' in props) {
            states.value = formatDateValue(props.value, props.format);
            states.inputAsString = typeof props.value === 'string';
        }

        if ('visible' in props) {
            states.visible = props.visible;
        }

        return states;
    };

    MonthPicker.prototype.renderPreview = function renderPreview(others) {
        var _props = this.props,
            prefix = _props.prefix,
            format = _props.format,
            className = _props.className,
            renderPreview = _props.renderPreview;
        var value = this.state.value;

        var previewCls = classnames(className, prefix + 'form-preview');

        var label = value ? value.format(format) : '';

        if (typeof renderPreview === 'function') {
            return React.createElement(
                'div',
                _extends({}, others, { className: previewCls }),
                renderPreview(value, this.props)
            );
        }

        return React.createElement(
            'p',
            _extends({}, others, { className: previewCls }),
            label
        );
    };

    MonthPicker.prototype.render = function render() {
        var _classnames, _classnames2, _classnames3;

        var _props2 = this.props,
            prefix = _props2.prefix,
            rtl = _props2.rtl,
            locale = _props2.locale,
            label = _props2.label,
            state = _props2.state,
            format = _props2.format,
            defaultVisibleYear = _props2.defaultVisibleYear,
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
            monthCellRender = _props2.monthCellRender,
            yearCellRender = _props2.yearCellRender,
            dateInputAriaLabel = _props2.dateInputAriaLabel,
            isPreview = _props2.isPreview,
            others = _objectWithoutProperties(_props2, ['prefix', 'rtl', 'locale', 'label', 'state', 'format', 'defaultVisibleYear', 'disabledDate', 'footerRender', 'placeholder', 'size', 'disabled', 'hasClear', 'popupTriggerType', 'popupAlign', 'popupContainer', 'popupStyle', 'popupClassName', 'popupProps', 'popupComponent', 'popupContent', 'followTrigger', 'className', 'inputProps', 'monthCellRender', 'yearCellRender', 'dateInputAriaLabel', 'isPreview']);

        var _state = this.state,
            visible = _state.visible,
            value = _state.value,
            dateInputStr = _state.dateInputStr,
            inputing = _state.inputing;


        var monthPickerCls = classnames((_classnames = {}, _classnames[prefix + 'month-picker'] = true, _classnames), className);

        var triggerInputCls = classnames((_classnames2 = {}, _classnames2[prefix + 'month-picker-input'] = true, _classnames2[prefix + 'error'] = false, _classnames2));

        var panelBodyClassName = classnames((_classnames3 = {}, _classnames3[prefix + 'month-picker-body'] = true, _classnames3));

        if (rtl) {
            others.dir = 'rtl';
        }

        if (isPreview) {
            return this.renderPreview(obj.pickOthers(others, MonthPicker.PropTypes));
        }

        var panelInputCls = prefix + 'month-picker-panel-input';

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
            value: dateInputValue,
            'aria-label': dateInputAriaLabel,
            onFocus: this.onFoucsDateInput,
            placeholder: format,
            className: panelInputCls
        }));

        var datePanel = React.createElement(Calendar, {
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
        var trigger = React.createElement(
            'div',
            { className: prefix + 'month-picker-trigger' },
            React.createElement(Input, _extends({}, sharedInputProps, {
                label: label,
                state: state,
                readOnly: true,
                value: triggerInputValue,
                placeholder: placeholder || locale.monthPlaceholder,
                hint: React.createElement(Icon, {
                    type: 'calendar',
                    className: prefix + 'date-picker-symbol-calendar-icon'
                }),
                hasClear: allowClear,
                className: triggerInputCls
            }))
        );

        var PopupComponent = popupComponent ? popupComponent : Popup;

        return React.createElement(
            'div',
            _extends({}, obj.pickOthers(MonthPicker.propTypes, others), {
                className: monthPickerCls
            }),
            React.createElement(
                PopupComponent,
                _extends({
                    autoFocus: true,
                    align: popupAlign
                }, popupProps, {
                    followTrigger: followTrigger,
                    role: 'combobox',
                    'aria-expanded': visible,
                    disabled: disabled,
                    visible: visible,
                    onVisibleChange: this.onVisibleChange,
                    triggerType: popupTriggerType,
                    container: popupContainer,
                    style: popupStyle,
                    className: popupClassName,
                    trigger: trigger
                }),
                popupContent ? popupContent : React.createElement(
                    'div',
                    { className: panelBodyClassName, dir: others.dir },
                    React.createElement(
                        'div',
                        {
                            className: prefix + 'month-picker-panel-header'
                        },
                        dateInput
                    ),
                    panelBody,
                    panelFooter
                )
            )
        );
    };

    return MonthPicker;
}(Component), _class.propTypes = _extends({}, ConfigProvider.propTypes, {
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
     * @param {String} type 触发弹层显示和隐藏的来源 calendarSelect 表示由日期表盘的选择触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发
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
    popupContainer: PropTypes.any,
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
     * 自定义月份渲染函数
     * @param {Object} calendarDate 对应 Calendar 返回的自定义日期对象
     * @returns {ReactNode}
     */
    monthCellRender: PropTypes.func,
    yearCellRender: PropTypes.func, // 兼容 0.x yearCellRender
    /**
     * 日期输入框的 aria-label 属性
     */
    dateInputAriaLabel: PropTypes.string,
    /**
     * 是否为预览态
     */
    isPreview: PropTypes.bool,
    /**
     * 预览态模式下渲染的内容
     * @param {MomentObject} value 月份
     */
    renderPreview: PropTypes.func,
    locale: PropTypes.object,
    className: PropTypes.string,
    name: PropTypes.string,
    popupComponent: PropTypes.elementType,
    popupContent: PropTypes.node
}), _class.defaultProps = {
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
    locale: nextLocale.DatePicker,
    onChange: func.noop,
    onVisibleChange: func.noop
}, _temp);
MonthPicker.displayName = 'MonthPicker';


export default polyfill(MonthPicker);