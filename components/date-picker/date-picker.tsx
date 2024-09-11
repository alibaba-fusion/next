import React, { Component, type HTMLAttributes, type KeyboardEvent, type UIEvent } from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import moment, { type Moment } from 'moment';
import ConfigProvider from '../config-provider';
import Overlay from '../overlay';
import Input, { type InputProps } from '../input';
import Icon from '../icon';
import Calendar from '../calendar';
import TimePickerPanel from '../time-picker/panel';
import nextLocale from '../locale/zh-cn';
import { type ClassPropsWithDefault, func, obj } from '../util';
import {
    PANEL,
    resetValueTime,
    checkDateValue,
    formatDateValue,
    getDateTimeFormat,
    onDateKeydown,
    onTimeKeydown,
} from './util';
import PanelFooter from './module/panel-footer';
import type { DatePickerProps, DatePickerState } from './types';
import { type TimePickerProps } from '../time-picker';

const { Popup } = Overlay;

type InnerDatePickerProps = ClassPropsWithDefault<DatePickerProps, typeof DatePicker.defaultProps>;

/**
 * DatePicker
 */
class DatePicker extends Component<DatePickerProps, DatePickerState> {
    static propTypes = {
        ...ConfigProvider.propTypes,
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        label: PropTypes.node,
        state: PropTypes.oneOf(['success', 'loading', 'error']),
        placeholder: PropTypes.string,
        defaultVisibleMonth: PropTypes.func,
        onVisibleMonthChange: PropTypes.func,
        value: checkDateValue,
        defaultValue: checkDateValue,
        format: PropTypes.string,
        showTime: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
        resetTime: PropTypes.bool,
        disabledDate: PropTypes.func,
        footerRender: PropTypes.func,
        onChange: PropTypes.func,
        onOk: PropTypes.func,
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        disabled: PropTypes.bool,
        hasClear: PropTypes.bool,
        visible: PropTypes.bool,
        defaultVisible: PropTypes.bool,
        onVisibleChange: PropTypes.func,
        popupTriggerType: PropTypes.oneOf(['click', 'hover']),
        popupAlign: PropTypes.string,
        popupContainer: PropTypes.any,
        popupStyle: PropTypes.object,
        popupClassName: PropTypes.string,
        popupProps: PropTypes.object,
        followTrigger: PropTypes.bool,
        inputProps: PropTypes.object,
        dateCellRender: PropTypes.func,
        monthCellRender: PropTypes.func,
        yearCellRender: PropTypes.func,
        dateInputAriaLabel: PropTypes.string,
        timeInputAriaLabel: PropTypes.string,
        isPreview: PropTypes.bool,
        renderPreview: PropTypes.func,
        locale: PropTypes.object,
        className: PropTypes.string,
        name: PropTypes.string,
        popupComponent: PropTypes.elementType,
        popupContent: PropTypes.node,
        disableChangeMode: PropTypes.bool,
        yearRange: PropTypes.arrayOf(PropTypes.number),
    };

    static defaultProps = {
        prefix: 'next-',
        rtl: false,
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
        defaultVisible: false,
        onChange: func.noop,
        onVisibleChange: func.noop,
        onOk: func.noop,
    };

    static displayName = 'DatePicker';

    readonly props: InnerDatePickerProps;

    constructor(props: DatePickerProps) {
        super(props);
        const { format, timeFormat, dateTimeFormat } = getDateTimeFormat(
            props.format,
            props.showTime!
        );

        this.state = {
            value: formatDateValue(props.defaultValue, dateTimeFormat),
            dateInputStr: '',
            timeInputStr: '',
            inputing: false, // 当前是否处于输入状态
            visible: props.defaultVisible!,
            inputAsString: typeof props.defaultValue === 'string',
            panel: PANEL.DATE,
            format: format!,
            timeFormat,
            dateTimeFormat: dateTimeFormat!,
        };
    }

    static getDerivedStateFromProps(props: InnerDatePickerProps) {
        const formatStates = getDateTimeFormat(props.format, props.showTime);
        const states: Partial<DatePickerState> = {};

        if ('value' in props) {
            states.value = formatDateValue(props.value, formatStates.dateTimeFormat);
            if (typeof props.value === 'string') {
                states.inputAsString = true;
            }
            if (moment.isMoment(props.value)) {
                states.inputAsString = false;
            }
        }

        if ('visible' in props) {
            states.visible = props.visible;
        }

        return {
            ...states,
            ...formatStates,
        };
    }

    onValueChange = (newValue: Moment | null, handler: 'onOk' | 'onChange' = 'onChange') => {
        const ret =
            this.state.inputAsString && newValue
                ? newValue.format(this.state.dateTimeFormat)
                : newValue;
        this.props[handler](ret);
    };

    onSelectCalendarPanel = (value: Moment) => {
        const { showTime, resetTime } = this.props;

        const prevValue = this.state.value;
        let newValue = value;
        if (showTime) {
            if (!prevValue) {
                // 第一次选择日期值时，如果设置了默认时间，则使用该默认时间
                if ((showTime as TimePickerProps).defaultValue) {
                    const defaultTimeValue = formatDateValue(
                        (showTime as TimePickerProps).defaultValue,
                        this.state.timeFormat
                    );
                    newValue = resetValueTime(value, defaultTimeValue);
                }
            } else if (!resetTime) {
                // 非第一选择日期，如果开启了 resetTime 属性，则记住之前选择的时间值
                newValue = resetValueTime(value, prevValue);
            }
        }

        this.handleChange(newValue, prevValue, { inputing: false });

        if (!showTime) {
            this.onVisibleChange(false, 'calendarSelect');
        }
    };

    onSelectTimePanel = (value: Moment) => {
        this.handleChange(value, this.state.value, { inputing: false });
    };

    clearValue = () => {
        this.setState({
            dateInputStr: '',
            timeInputStr: '',
        });

        this.handleChange(null, this.state.value, { inputing: false });
    };

    onDateInputChange = (inputStr: string | null | undefined, e: UIEvent, eventType?: string) => {
        if (eventType === 'clear' || !inputStr) {
            e.stopPropagation();
            this.clearValue();
        } else {
            this.setState({
                dateInputStr: inputStr,
                inputing: 'date',
            });
        }
    };

    onTimeInputChange = (inputStr: string) => {
        this.setState({
            timeInputStr: inputStr,
            inputing: 'time',
        });
    };

    onDateInputBlur = () => {
        const { dateInputStr, value, format } = this.state;
        const { resetTime } = this.props;

        if (dateInputStr) {
            const { disabledDate } = this.props;
            let parsed = moment(dateInputStr, format, true);

            this.setState({
                dateInputStr: '',
                inputing: false,
            });
            if (parsed.isValid() && !disabledDate(parsed, 'date')) {
                parsed = resetTime ? parsed : resetValueTime(parsed, value);
                this.handleChange(parsed, value);
            }
        }
    };

    onTimeInputBlur = () => {
        const { value, timeInputStr, timeFormat } = this.state;
        if (timeInputStr) {
            const parsed = moment(timeInputStr, timeFormat, true);

            this.setState({
                timeInputStr: '',
                inputing: false,
            });

            if (parsed.isValid()) {
                const hour = parsed.hour();
                const minute = parsed.minute();
                const second = parsed.second();
                // @ts-expect-error 没有考虑 value 为 null 的情况
                const newValue = value.clone().hour(hour).minute(minute).second(second);

                this.handleChange(newValue, this.state.value);
            }
        }
    };

    onKeyDown = (e: KeyboardEvent) => {
        const { format } = this.props;
        const { dateInputStr, value } = this.state;
        const dateStr = onDateKeydown(e, { format, dateInputStr, value }, 'day');
        if (!dateStr) return;
        this.onDateInputChange(dateStr, e);
    };

    onTimeKeyDown = (e: KeyboardEvent) => {
        const { showTime } = this.props;
        const { timeInputStr, timeFormat, value } = this.state;
        const {
            disabledMinutes,
            disabledSeconds,
            hourStep = 1,
            minuteStep = 1,
            secondStep = 1,
        } = typeof showTime === 'object' ? showTime : ({} as TimePickerProps);
        let unit: 'second' | 'minute' | 'hour' = 'second';

        if (disabledSeconds) {
            unit = disabledMinutes ? 'hour' : 'minute';
        }

        const timeStr = onTimeKeydown(
            e,
            {
                format: timeFormat,
                timeInputStr,
                value,
                steps: {
                    hour: hourStep,
                    minute: minuteStep,
                    second: secondStep,
                },
            },
            unit
        );

        if (!timeStr) return;

        this.onTimeInputChange(timeStr);
    };

    handleChange = (newValue: Moment | null, prevValue: Moment | null, others = {}) => {
        if (!('value' in this.props)) {
            this.setState({
                value: newValue,
                ...others,
            });
        } else {
            this.setState({
                ...others,
            });
        }

        const newValueOf = newValue ? newValue.valueOf() : null;
        const preValueOf = prevValue ? prevValue.valueOf() : null;

        if (newValueOf !== preValueOf) {
            this.onValueChange(newValue);
        }
    };

    onFoucsDateInput = () => {
        if (this.state.panel !== PANEL.DATE) {
            this.setState({
                panel: PANEL.DATE,
            });
        }
    };

    onFoucsTimeInput = () => {
        if (this.state.panel !== PANEL.TIME) {
            this.setState({
                panel: PANEL.TIME,
            });
        }
    };

    onVisibleChange = (visible: boolean, type: string) => {
        if (!('visible' in this.props)) {
            this.setState({
                visible,
            });
        }
        this.props.onVisibleChange(visible, type);
    };

    changePanel = (panel: DatePickerState['panel']) => {
        this.setState({
            panel,
        });
    };

    onOk = (value: undefined) => {
        this.onVisibleChange(false, 'okBtnClick');
        this.onValueChange(value || this.state.value, 'onOk');
    };

    renderPreview(others: HTMLAttributes<HTMLDivElement>) {
        const { prefix, className, renderPreview } = this.props;
        const { value, dateTimeFormat } = this.state;
        const previewCls = classnames(className, `${prefix}form-preview`);

        const label = value ? value.format(dateTimeFormat) : '';

        if (typeof renderPreview === 'function') {
            return (
                <div {...others} className={previewCls}>
                    {renderPreview(value, this.props)}
                </div>
            );
        }

        return (
            <p {...others} className={previewCls}>
                {label}
            </p>
        );
    }

    render() {
        const {
            prefix,
            rtl,
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
            popupComponent,
            popupContent,
            followTrigger,
            className,
            inputProps,
            dateCellRender,
            monthCellRender,
            yearCellRender,
            dateInputAriaLabel,
            timeInputAriaLabel,
            isPreview,
            disableChangeMode,
            yearRange,
            ...others
        } = this.props;

        const {
            visible,
            value,
            dateInputStr,
            timeInputStr,
            panel,
            inputing,
            format,
            timeFormat,
            dateTimeFormat,
        } = this.state;

        const datePickerCls = classnames(
            {
                [`${prefix}date-picker`]: true,
            },
            className
        );

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

        if (rtl) {
            others.dir = 'rtl';
        }

        if (isPreview) {
            // @ts-expect-error 应该使用 propTypes
            return this.renderPreview(obj.pickOthers(others, DatePicker.PropTypes));
        }

        const sharedInputProps = {
            ...inputProps,
            size,
            disabled,
            onChange: this.onDateInputChange as InputProps['onChange'],
            onBlur: this.onDateInputBlur,
            onPressEnter: this.onDateInputBlur,
            onKeyDown: this.onKeyDown,
        };

        const dateInputValue =
            inputing === 'date' ? dateInputStr : (value && value.format(format)) || '';
        let triggerInputValue = dateInputValue;

        const dateInput = (
            <Input
                {...sharedInputProps}
                aria-label={dateInputAriaLabel}
                value={dateInputValue}
                onFocus={this.onFoucsDateInput}
                placeholder={format}
                className={panelDateInputCls}
            />
        );

        const datePanel = (
            <Calendar
                shape="panel"
                value={value}
                format={format}
                dateCellRender={dateCellRender}
                monthCellRender={monthCellRender}
                yearCellRender={yearCellRender}
                onSelect={this.onSelectCalendarPanel}
                defaultVisibleMonth={defaultVisibleMonth}
                onVisibleMonthChange={onVisibleMonthChange}
                disabledDate={disabledDate}
                disableChangeMode={disableChangeMode}
                yearRange={yearRange}
            />
        );

        let panelFooter = footerRender();

        let timeInput = null;
        let timePanel = null;

        if (showTime) {
            const timeInputValue =
                inputing === 'time' ? timeInputStr : (value && value.format(timeFormat)) || '';
            triggerInputValue = (value && value.format(dateTimeFormat)) || '';

            const timePanelProps = typeof showTime === 'object' ? showTime : {};

            const showSecond = timeFormat.indexOf('s') > -1;
            const showMinute = timeFormat.indexOf('m') > -1;

            const panelTimeInputCls = classnames({
                [`${prefix}date-picker-panel-input`]: true,
                [`${prefix}focus`]: panel === PANEL.TIME,
            });

            timeInput = (
                <Input
                    placeholder={timeFormat}
                    value={timeInputValue}
                    size={size}
                    aria-label={timeInputAriaLabel}
                    disabled={disabled || !value}
                    onChange={this.onTimeInputChange}
                    onFocus={this.onFoucsTimeInput}
                    onBlur={this.onTimeInputBlur}
                    onPressEnter={this.onTimeInputBlur}
                    onKeyDown={this.onTimeKeyDown}
                    className={panelTimeInputCls}
                />
            );

            timePanel = (
                <TimePickerPanel
                    {...timePanelProps}
                    locale={locale}
                    className={`${prefix}date-picker-panel-time`}
                    showSecond={showSecond}
                    showMinute={showMinute}
                    disabled={disabled}
                    prefix={prefix}
                    value={value}
                    onSelect={this.onSelectTimePanel}
                />
            );

            panelFooter = panelFooter || (
                <PanelFooter
                    prefix={prefix}
                    locale={locale}
                    value={value}
                    panel={panel}
                    onPanelChange={this.changePanel}
                    onOk={this.onOk}
                />
            );
        }

        const panelBody = {
            [PANEL.DATE]: datePanel,
            [PANEL.TIME]: timePanel,
        }[panel];

        const allowClear = value && hasClear;
        const trigger = (
            <div className={`${prefix}date-picker-trigger`}>
                <Input
                    {...sharedInputProps}
                    label={label}
                    state={state}
                    value={triggerInputValue}
                    role="combobox"
                    aria-expanded={visible}
                    readOnly
                    placeholder={
                        placeholder || (showTime ? locale.datetimePlaceholder : locale.placeholder)
                    }
                    hint={
                        <Icon
                            type="calendar"
                            className={`${prefix}date-picker-symbol-calendar-icon`}
                        />
                    }
                    // @ts-expect-error allowClear 应该先做 boolean 化处理
                    hasClear={allowClear}
                    className={triggerInputCls}
                />
            </div>
        );
        const PopupComponent = popupComponent ? popupComponent : Popup;

        return (
            <div {...obj.pickOthers(DatePicker.propTypes, others)} className={datePickerCls}>
                <PopupComponent
                    autoFocus
                    align={popupAlign}
                    {...popupProps}
                    followTrigger={followTrigger}
                    disabled={disabled}
                    visible={visible}
                    onVisibleChange={this.onVisibleChange}
                    triggerType={popupTriggerType}
                    container={popupContainer}
                    style={popupStyle}
                    className={popupClassName}
                    trigger={trigger}
                >
                    {popupContent ? (
                        popupContent
                    ) : (
                        <div dir={others.dir} className={panelBodyClassName}>
                            <div className={`${prefix}date-picker-panel-header`}>
                                {dateInput}
                                {timeInput}
                            </div>
                            {panelBody}
                            {panelFooter}
                        </div>
                    )}
                </PopupComponent>
            </div>
        );
    }
}

export default polyfill(DatePicker);
