import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';
import Overlay from '../overlay';
import Input from '../input';
import Calendar from '../calendar';
import TimePickerPanel from '../time-picker/panel';
import nextLocale from '../locale/zh-cn';
import { func, obj } from '../util';
import { PANEL, resetValueTime, checkDateValue, formatDateValue, getDateTimeFormat, extend } from './util';
import PanelFooter from './module/panel-footer';

const { Popup } = Overlay;

/**
 * DatePicker
 */
export default class DatePicker extends Component {

    static propTypes = {
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
         * 默认展现的月
         * @return {MomentObject} 返回包含指定月份的 moment 对象实例
         */
        defaultVisibleMonth: PropTypes.func,
        onVisibleMonthChange: PropTypes.func,
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
         * 是否使用时间控件，传入 TimePicker 的属性 { defaultValue, format, ... }
         */
        showTime: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
        /**
         * 每次选择日期时是否重置时间（仅在 showTime 开启时有效）
         */
        resetTime: PropTypes.bool,
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
         * @param {MomentObject|String} value 日期值
         * @return void
         */
        onChange: PropTypes.func,
        /**
         * 点击确认按钮时的回调
         * @return {MomentObject|String} 日期值
         */
        onOk: PropTypes.func,
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
         * 弹层对齐方式,具体含义见 OverLay文档
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
        className: PropTypes.string,
    }

    static defaultProps = {
        prefix: 'next-',
        format: 'YYYY-MM-DD',
        size: 'medium',
        showTime: false,
        resetTime: false,
        disabledDate: () => false,
        footerRender: () => null,
        hasClear: true,
        popupTriggerType: 'click',
        popupAlign: 'tl tl',
        locale: nextLocale.DatePicker,
        onChange: func.noop,
        onVisibleChange: func.noop,
        onOk: func.noop,
    }

    constructor(props, context) {
        super(props, context);
        const dateTimeFormat = getDateTimeFormat(props.format, props.showTime);
        extend(dateTimeFormat, this);

        const value = formatDateValue(props.value || props.defaultValue, this.dateTimeFormat);
        this.inputAsString = (typeof (props.value || props.defaultValue) === 'string'); // 判断用户输入是否是字符串
        this.state = {
            value,
            dateInputStr: '',
            timeInputStr: '',
            inputing: false, // 当前是否处于输入状态
            visible: props.visible || props.defaultVisible,
            panel: PANEL.DATE,
        };
    }

    componentWillReceiveProps(nextProps) {
        if ('showTime' in nextProps) {
            const dateTimeFormat = getDateTimeFormat(nextProps.format || this.props.format, nextProps.showTime);
            extend(dateTimeFormat, this);
        }

        if ('value' in nextProps) {
            const value = formatDateValue(nextProps.value, this.dateTimeFormat);
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

    onValueChange = (newValue, handler = 'onChange') => {
        const ret = (this.inputAsString && newValue) ? newValue.format(this.dateTimeFormat) : newValue;
        this.props[handler](ret);
    }

    onSelectCalendarPanel = (value) => {
        const { showTime, resetTime } = this.props;

        const prevValue = this.state.value;
        let newValue = value;
        if (showTime) {
            if (!prevValue) {
                // 第一次选择日期值时，如果设置了默认时间，则使用该默认时间
                if (showTime.defaultValue) {
                    const defaultTimeValue = formatDateValue(showTime.defaultValue, this.timeFormat);
                    newValue = resetValueTime(value, defaultTimeValue);
                }
            } else if (!resetTime) {
                // 非第一选择日期，如果开启了 resetTime 属性，则记住之前选择的时间值
                newValue = resetValueTime(value, prevValue);
            }
        }

        this.handleChange(newValue, prevValue, {inputing: false});

        if (!showTime) {
            this.onVisibleChange(false, 'calendarSelect');
        }
    }

    onSelectTimePanel = (value) => {
        this.handleChange(value, this.state.value, {inputing: false});
    }

    clearValue = () => {
        this.setState({
            dateInputStr: '',
            timeInputStr: '',
        });

        this.handleChange(null, this.state.value, {inputing: false});
    }

    onDateInputChange = (inputStr, e, eventType) => {
        if (eventType === 'clear' || !inputStr) {
            e.stopPropagation();
            this.clearValue();
        } else {
            this.setState({
                dateInputStr: inputStr,
                inputing: 'date',
            });
        }
    }

    onTimeInputChange = (inputStr) => {
        this.setState({
            timeInputStr: inputStr,
            inputing: 'time',
        });
    }

    onDateInputBlur = () => {
        const { dateInputStr } = this.state;
        if (dateInputStr) {
            const { disabledDate } = this.props;
            const parsed = moment(dateInputStr, this.format, true);

            this.setState({
                dateInputStr: '',
                inputing: false,
            });

            if (parsed.isValid() && !disabledDate(parsed)) {
                this.handleChange(parsed, this.state.value);
            }
        }
    }

    onTimeInputBlur = () => {
        const { value, timeInputStr } = this.state;
        if (timeInputStr) {
            const parsed = moment(timeInputStr, this.timeFormat, true);

            this.setState({
                timeInputStr: '',
                inputing: false,
            });

            if (parsed.isValid()) {
                const hour = parsed.hour();
                const minute = parsed.minute();
                const second = parsed.second();
                const newValue = value.clone().hour(hour).minute(minute).second(second);

                this.handleChange(newValue, this.state.value);
            }
        }
    }

    handleChange = (newValue, prevValue, others = {}) => {
        if (!('value' in this.props)) {
            this.setState({
                value: newValue,
                ...others
            });
        }

        const newValueOf = newValue ? newValue.valueOf() : null;
        const preValueOf = prevValue ? prevValue.valueOf() : null;

        if (newValueOf !== preValueOf) {
            this.onValueChange(newValue);
        }
    }

    onFoucsDateInput = () => {
        if (this.state.panel !== PANEL.DATE) {
            this.setState({
                panel: PANEL.DATE,
            });
        }
    }

    onFoucsTimeInput = () => {
        if (this.state.panel !== PANEL.TIME) {
            this.setState({
                panel: PANEL.TIME,
            });
        }
    }

    onVisibleChange = (visible, reason) => {
        if (!('visible' in this.props)) {
            this.setState({
                visible,
            });
        }
        this.props.onVisibleChange(visible, reason);
    }

    changePanel = (panel) => {
        this.setState({
            panel,
        });
    }

    onOk = () => {
        this.onVisibleChange(false, 'okBtnClick');
        this.onValueChange(this.state.value, 'onOk');
    }

    render() {
        const {
            prefix,
            locale,
            label,
            state,
            defaultVisibleMonth,
            onVisibleMonthChange,
            showTime,
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
            ...others
        } = this.props;

        const { visible, value, dateInputStr, timeInputStr, panel, inputing } = this.state;

        const datePickerCls = classnames({
            [`${prefix}date-picker`]: true,
        }, className);

        const triggerInputCls = classnames({
            [`${prefix}date-picker-input`]: true,
            [`${prefix}error`]: false,
        });

        const panelBodyClassName = classnames({
            [`${prefix}date-picker-body`]: true,
            [`${prefix}date-picker-body-show-time`]: showTime,
        });

        const panelDateInputCls = classnames({
            [`${prefix}date-picker-panel-input`]: true,
            [`${prefix}focus`]: panel === PANEL.DATE,
        });

        const sharedInputProps = {
            size,
            disabled,
            onChange: this.onDateInputChange,
            onBlur: this.onDateInputBlur,
            onPressEnter: this.onDateInputBlur,
        };

        const dateInputValue = inputing === 'date' ? dateInputStr : ((value && value.format(this.format)) || '');
        let triggerInputValue = dateInputValue;

        const dateInput = (<Input
            {...sharedInputProps}
            value={dateInputValue}
            onFocus={this.onFoucsDateInput}
            placeholder={this.format}
            className={panelDateInputCls} />);

        const datePanel = (<Calendar
            shape="panel"
            value={value}
            format={this.format}
            onSelect={this.onSelectCalendarPanel}
            defaultVisibleMonth={defaultVisibleMonth}
            onVisibleMonthChange={onVisibleMonthChange}
            disabledDate={disabledDate} />);

        let panelFooter = footerRender();

        let timeInput = null;
        let timePanel = null;

        if (showTime) {
            const timeInputValue = inputing === 'time' ? timeInputStr : ((value && value.format(this.timeFormat)) || '');
            triggerInputValue = value && value.format(this.dateTimeFormat) || '';

            const timePanelProps = typeof showTime === 'object' ? showTime : {};

            const showSecond = this.timeFormat.indexOf('s') > -1;

            const panelTimeInputCls = classnames({
                [`${prefix}date-picker-panel-input`]: true,
                [`${prefix}focus`]: panel === PANEL.TIME,
            });

            timeInput = (<Input
                placeholder={this.timeFormat}
                value={timeInputValue}
                size={size}
                disabled={disabled || !value}
                onChange={this.onTimeInputChange}
                onFocus={this.onFoucsTimeInput}
                onBlur={this.onTimeInputBlur}
                onPressEnter={this.onTimeInputBlur}
                className={panelTimeInputCls} />);

            timePanel = (<TimePickerPanel
                {...timePanelProps}
                locale={locale}
                className={`${prefix}date-picker-panel-time`}
                showSecond={showSecond}
                disabled={disabled}
                prefix={prefix}
                value={value}
                onSelect={this.onSelectTimePanel} />);

            panelFooter = panelFooter || (<PanelFooter
                prefix={prefix}
                locale={locale}
                value={value}
                panel={panel}
                onPanelChange={this.changePanel}
                onOk={this.onOk} />);
        }

        const panelBody = ({
            [PANEL.DATE]: datePanel,
            [PANEL.TIME]: timePanel,
        })[panel];

        const allowClear = value && hasClear;
        const trigger = (<div className={`${prefix}date-picker-trigger`}>
            <Input
                {...sharedInputProps}
                label={label}
                state={state}
                value={triggerInputValue}
                placeholder={placeholder || (showTime ? locale.datetimePlaceholder : locale.placeholder)}
                hint="calendar"
                hasClear={allowClear}
                className={triggerInputCls} />
        </div>);

        return (<div {...obj.pickOthers(DatePicker.propTypes, others)} className={datePickerCls}>
            <Popup
                {...popupProps}
                disabled={disabled}
                visible={visible}
                onVisibleChange={this.onVisibleChange}
                align={popupAlign}
                triggerType={popupTriggerType}
                container={popupContainer}
                style={popupStyle}
                className={popupClassName}
                trigger={trigger}>
                <div className={panelBodyClassName}>
                    <div className={`${prefix}date-picker-panel-header`}>
                        {dateInput}
                        {timeInput}
                    </div>
                    {panelBody}
                    {panelFooter}
                </div>
            </Popup>
        </div>);
    }
}
