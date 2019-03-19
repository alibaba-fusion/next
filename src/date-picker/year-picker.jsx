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

const { Popup } = Overlay;

/**
 * DatePicker.YearPicker
 */
class YearPicker extends Component {
    static propTypes = {
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
        className: PropTypes.string,
    };

    static defaultProps = {
        prefix: 'next-',
        rtl: false,
        format: 'YYYY',
        size: 'medium',
        disabledDate: () => false,
        footerRender: () => null,
        hasClear: true,
        popupTriggerType: 'click',
        popupAlign: 'tl tl',
        locale: nextLocale.DatePicker,
        onChange: func.noop,
        onVisibleChange: func.noop,
    };

    constructor(props, context) {
        super(props, context);

        const value = formatDateValue(
            props.value || props.defaultValue,
            props.format
        );

        this.inputAsString =
            typeof (props.value || props.defaultValue) === 'string'; // 判断用户输入是否是字符串
        this.state = {
            value,
            dateInputStr: '',
            inputing: false,
            visible: props.visible || props.defaultVisible,
        };
    }

    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            const value = formatDateValue(
                nextProps.value,
                nextProps.format || this.props.format
            );
            this.setState({
                value,
            });
            this.inputAsString = typeof nextProps.value === 'string';
        }

        if ('visible' in nextProps) {
            this.setState({
                visible: nextProps.visible,
            });
        }
    }

    onValueChange = newValue => {
        const ret =
            this.inputAsString && newValue
                ? newValue.format(this.props.format)
                : newValue;
        this.props.onChange(ret);
    };

    onSelectCalendarPanel = value => {
        // const { format } = this.props;
        const prevSelectedMonth = this.state.value;
        const selectedMonth = value
            .clone()
            .month(0)
            .date(1)
            .hour(0)
            .minute(0)
            .second(0);

        this.handleChange(
            selectedMonth,
            prevSelectedMonth,
            { inputing: false },
            () => {
                this.onVisibleChange(false, 'calendarSelect');
            }
        );
    };

    clearValue = () => {
        this.setState({
            dateInputStr: '',
        });

        this.handleChange(null, this.state.value);
    };

    onDateInputChange = (inputStr, e, eventType) => {
        if (eventType === 'clear' || !inputStr) {
            e.stopPropagation();
            this.clearValue();
        } else {
            this.setState({
                dateInputStr: inputStr,
                inputing: true,
            });
        }
    };

    onDateInputBlur = () => {
        const { dateInputStr } = this.state;
        if (dateInputStr) {
            const { disabledDate, format } = this.props;
            const parsed = moment(dateInputStr, format, true);

            this.setState({
                dateInputStr: '',
                inputing: false,
            });

            if (parsed.isValid() && !disabledDate(parsed, 'year')) {
                this.handleChange(parsed, this.state.value);
            }
        }
    };

    onKeyDown = e => {
        const dateStr = onDateKeydown(e, this.props, this.state, 'year');
        if (!dateStr) return;
        this.onDateInputChange(dateStr);
    };

    handleChange = (newValue, prevValue, others = {}, callback) => {
        if (!('value' in this.props)) {
            this.setState({
                value: newValue,
                ...others,
            });
        }

        const { format } = this.props;

        const newValueOf = newValue ? newValue.format(format) : null;
        const preValueOf = prevValue ? prevValue.format(format) : null;

        if (newValueOf !== preValueOf) {
            this.onValueChange(newValue);
            if (typeof callback === 'function') {
                return callback();
            }
        }
    };

    onVisibleChange = (visible, reason) => {
        if (!('visible' in this.props)) {
            this.setState({
                visible,
            });
        }
        this.props.onVisibleChange(visible, reason);
    };

    render() {
        const {
            prefix,
            rtl,
            locale,
            label,
            state,
            format,
            disabledDate,
            footerRender,
            placeholder,
            size,
            disabled,
            hasClear,
            popupTriggerType,
            popupAlign,
            popupContainer,
            popupStyle,
            popupClassName,
            popupProps,
            className,
            inputProps,
            dateInputAriaLabel,
            ...others
        } = this.props;

        const { visible, value, dateInputStr, inputing } = this.state;

        const yearPickerCls = classnames(
            {
                [`${prefix}year-picker`]: true,
            },
            className
        );

        const triggerInputCls = classnames({
            [`${prefix}year-picker-input`]: true,
            [`${prefix}error`]: false,
        });

        const panelBodyClassName = classnames({
            [`${prefix}year-picker-body`]: true,
        });

        if (rtl) {
            others.dir = 'rtl';
        }

        const panelInputCls = `${prefix}year-picker-panel-input`;

        const sharedInputProps = {
            ...inputProps,
            size,
            disabled,
            onChange: this.onDateInputChange,
            onBlur: this.onDateInputBlur,
            onPressEnter: this.onDateInputBlur,
            onKeyDown: this.onKeyDown,
        };

        const dateInputValue = inputing
            ? dateInputStr
            : (value && value.format(format)) || '';
        const triggerInputValue = dateInputValue;

        const dateInput = (
            <Input
                {...sharedInputProps}
                aria-label={dateInputAriaLabel}
                value={dateInputValue}
                placeholder={format}
                className={panelInputCls}
            />
        );

        const datePanel = (
            <Calendar
                shape="panel"
                modes={['year']}
                value={value}
                onSelect={this.onSelectCalendarPanel}
                disabledDate={disabledDate}
            />
        );

        const panelBody = datePanel;
        const panelFooter = footerRender();

        const allowClear = value && hasClear;
        const trigger = (
            <div className={`${prefix}year-picker-trigger`}>
                <Input
                    {...sharedInputProps}
                    label={label}
                    state={state}
                    value={triggerInputValue}
                    role="combobox"
                    aria-expanded={visible}
                    readOnly
                    placeholder={placeholder || locale.yearPlaceholder}
                    hint="calendar"
                    hasClear={allowClear}
                    className={triggerInputCls}
                />
            </div>
        );

        return (
            <div
                {...obj.pickOthers(YearPicker.propTypes, others)}
                className={yearPickerCls}
            >
                <Popup
                    {...popupProps}
                    autoFocus
                    disabled={disabled}
                    visible={visible}
                    onVisibleChange={this.onVisibleChange}
                    align={popupAlign}
                    triggerType={popupTriggerType}
                    container={popupContainer}
                    style={popupStyle}
                    className={popupClassName}
                    trigger={trigger}
                >
                    <div dir={others.dir} className={panelBodyClassName}>
                        <div className={`${prefix}year-picker-panel-header`}>
                            {dateInput}
                        </div>
                        {panelBody}
                        {panelFooter}
                    </div>
                </Popup>
            </div>
        );
    }
}

export default YearPicker;
