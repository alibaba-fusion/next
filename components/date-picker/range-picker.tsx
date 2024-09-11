import React, {
    Component,
    createRef,
    type HTMLAttributes,
    type KeyboardEvent,
    type SyntheticEvent,
} from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import moment, { type Moment } from 'moment';
import ConfigProvider from '../config-provider';
import Overlay from '../overlay';
import Input from '../input';
import Icon from '../icon';
import Calendar from '../calendar';
import RangeCalendar from '../calendar/range-calendar';
import TimePickerPanel from '../time-picker/panel';
import nextLocale from '../locale/zh-cn';
import { type ClassPropsWithDefault, func, obj } from '../util';
import {
    PANEL,
    resetValueTime,
    formatDateValue,
    getDateTimeFormat,
    isFunction,
    onDateKeydown,
    onTimeKeydown,
} from './util';
import PanelFooter from './module/panel-footer';
import type { PanelFooterProps, PanelType, RangePickerProps, RangePickerState } from './types';
import { type TimePickerProps } from '../time-picker';

const { Popup } = Overlay;

function mapInputStateName(name: string) {
    return (
        {
            startValue: 'startDateInputStr',
            endValue: 'endDateInputStr',
            startTime: 'startTimeInputStr',
            endTime: 'endTimeInputStr',
        } as const
    )[name];
}

function mapTimeToValue(name: string) {
    return (
        {
            startTime: 'startValue',
            endTime: 'endValue',
        } as const
    )[name];
}

function getFormatValues(values: RangePickerProps['value'] | null | undefined, format?: string) {
    if (!Array.isArray(values)) {
        return [null, null];
    }
    return [formatDateValue(values[0], format), formatDateValue(values[1], format)];
}

type InnerRangePickerProps = ClassPropsWithDefault<
    RangePickerProps,
    typeof RangePicker.defaultProps
>;

/**
 * DatePicker.RangePicker
 */
class RangePicker extends Component<RangePickerProps, RangePickerState> {
    static propTypes = {
        ...ConfigProvider.propTypes,
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        type: PropTypes.oneOf(['date', 'month', 'year']),
        defaultVisibleMonth: PropTypes.func,
        onVisibleMonthChange: PropTypes.func,
        value: PropTypes.array,
        defaultValue: PropTypes.array,
        format: PropTypes.string,
        showTime: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
        resetTime: PropTypes.bool,
        disabledDate: PropTypes.func,
        footerRender: PropTypes.func,
        onChange: PropTypes.func,
        onOk: PropTypes.func,
        label: PropTypes.node,
        state: PropTypes.oneOf(['error', 'loading', 'success']),
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
        startDateInputAriaLabel: PropTypes.string,
        startTimeInputAriaLabel: PropTypes.string,
        endDateInputAriaLabel: PropTypes.string,
        endTimeInputAriaLabel: PropTypes.string,
        isPreview: PropTypes.bool,
        renderPreview: PropTypes.func,
        disableChangeMode: PropTypes.bool,
        yearRange: PropTypes.arrayOf(PropTypes.number),
        ranges: PropTypes.object,
        locale: PropTypes.object,
        className: PropTypes.string,
        name: PropTypes.string,
        popupComponent: PropTypes.elementType,
        popupContent: PropTypes.node,
        placeholder: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
    };

    static defaultProps = {
        prefix: 'next-',
        rtl: false,
        type: 'date',
        size: 'medium',
        showTime: false,
        resetTime: false,
        disabledDate: () => false,
        footerRender: () => null,
        hasClear: true,
        defaultVisible: false,
        popupTriggerType: 'click',
        popupAlign: 'tl tl',
        locale: nextLocale.DatePicker,
        disableChangeMode: false,
        onChange: func.noop,
        onOk: func.noop,
        onVisibleChange: func.noop,
    };

    readonly props: InnerRangePickerProps;

    startDateInputRef = createRef<InstanceType<typeof Input>>();
    endDateInputRef = createRef<InstanceType<typeof Input>>();
    autoSwitchDateInput = false;

    constructor(props: RangePickerProps) {
        super(props);
        const { format, timeFormat, dateTimeFormat } = getDateTimeFormat(
            props.format,
            props.showTime!,
            props.type
        );

        const val = props.value || props.defaultValue;
        const values = getFormatValues(val, dateTimeFormat);

        this.state = {
            visible: props.visible || props.defaultVisible,
            startValue: values[0],
            endValue: values[1],
            startDateInputStr: '',
            endDateInputStr: '',
            activeDateInput: 'startValue',
            startTimeInputStr: '',
            endTimeInputStr: '',
            inputing: false, // 当前是否处于输入状态
            panel: PANEL.DATE,
            format,
            timeFormat,
            dateTimeFormat,
            inputAsString: val && (typeof val[0] === 'string' || typeof val[1] === 'string'),
        };
    }
    static getDerivedStateFromProps(props: InnerRangePickerProps) {
        const formatStates = getDateTimeFormat(props.format, props.showTime, props.type);
        const states: Partial<RangePickerState> = {};

        if ('value' in props) {
            const values = getFormatValues(props.value, formatStates.dateTimeFormat);
            states.startValue = values[0];
            states.endValue = values[1];
            if (
                props.value &&
                (typeof props.value[0] === 'string' || typeof props.value[1] === 'string')
            ) {
                states.inputAsString = true;
            }
            if (
                props.value &&
                (moment.isMoment(props.value[0]) || moment.isMoment(props.value[1]))
            ) {
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

    onValueChange = (
        values: [start?: Moment | null, end?: Moment | null],
        handler: 'onOk' | 'onChange' = 'onChange'
    ) => {
        let ret: [start?: Moment | string | null, end?: Moment | string | null];
        if (!values.length || !this.state.inputAsString) {
            ret = values;
        } else {
            ret = [
                values[0] ? values[0].format(this.state.dateTimeFormat) : null,
                values[1] ? values[1].format(this.state.dateTimeFormat) : null,
            ];
        }
        this.props[handler](ret);
    };

    onSelectCalendarPanel = (value: Moment, active?: RangePickerState['activeDateInput']) => {
        const { showTime, resetTime } = this.props;
        const {
            activeDateInput: prevActiveDateInput,
            startValue: prevStartValue,
            endValue: prevEndValue,
            timeFormat,
        } = this.state;

        const newState: Partial<RangePickerState> = {
            activeDateInput: active || prevActiveDateInput,
            inputing: false,
        };

        let newValue = value;

        switch (active || prevActiveDateInput) {
            case 'startValue': {
                if (!prevEndValue || this.autoSwitchDateInput) {
                    newState.activeDateInput = 'endValue';
                }

                if (showTime) {
                    if (!prevStartValue) {
                        // 第一次选择，如果设置了时间默认值，则使用该默认时间
                        if (typeof showTime === 'object' && showTime.defaultValue) {
                            const defaultTimeValue = formatDateValue(
                                Array.isArray(showTime.defaultValue)
                                    ? showTime.defaultValue[0]
                                    : showTime.defaultValue,
                                timeFormat
                            );
                            newValue = resetValueTime(value, defaultTimeValue);
                        }
                    } else if (!resetTime) {
                        // 非第一次选择，如果开启了 resetTime，则记住之前选择的时间值
                        newValue = resetValueTime(value, prevStartValue);
                    }
                }

                newState.startValue = newValue;

                // 如果起始日期大于结束日期
                if (prevEndValue && newValue.valueOf() > prevEndValue.valueOf()) {
                    // 将结束日期设置为起始日期 如果需要的话保留时间
                    newState.endValue = resetTime ? newValue : resetValueTime(value, prevEndValue);

                    // 如果结束日期不大于起始日期则将结束日期设置为等于开始日期
                    if (newState.endValue.valueOf() < newState.startValue.valueOf()) {
                        newState.endValue = moment(newState.startValue);
                    }
                    newState.activeDateInput = 'endValue';
                }
                break;
            }

            case 'endValue':
                if (!prevStartValue || this.autoSwitchDateInput) {
                    newState.activeDateInput = 'startValue';
                }

                if (showTime) {
                    if (!prevEndValue) {
                        // 第一次选择，如果设置了时间默认值，则使用该默认时间
                        if (typeof showTime === 'object' && showTime.defaultValue) {
                            const defaultTimeValue = formatDateValue(
                                Array.isArray(showTime.defaultValue)
                                    ? showTime.defaultValue[1] || showTime.defaultValue[0]
                                    : showTime.defaultValue,
                                timeFormat
                            );
                            newValue = resetValueTime(value, defaultTimeValue);
                        }
                    } else if (!resetTime) {
                        // 非第一次选择，如果开启了 resetTime ，则记住之前选择的时间值
                        newValue = resetValueTime(value, prevEndValue);
                    }
                }

                newState.endValue = newValue;

                // 选择了一个比开始日期更小的结束日期，此时表示用户重新选择了
                if (prevStartValue && newValue.valueOf() <= prevStartValue.valueOf()) {
                    newState.startValue = resetTime ? value : resetValueTime(value, prevStartValue);
                    newState.endValue = resetTime ? value : resetValueTime(value, prevEndValue);

                    // 如果结束日期不大于起始日期则将结束日期设置为等于开始日期
                    if (newState.endValue.valueOf() < newState.startValue.valueOf()) {
                        newState.endValue = moment(newState.startValue);
                    }
                }
                break;
        }

        const newStartValue = 'startValue' in newState ? newState.startValue : prevStartValue;
        const newEndValue = 'endValue' in newState ? newState.endValue : prevEndValue;

        // 每当 input 发生了自动切换，则关闭自动切换
        if (newState.activeDateInput !== prevActiveDateInput) {
            this.autoSwitchDateInput = false;
        }

        // 受控状态选择不更新值
        if ('value' in this.props) {
            delete newState.startValue;
            delete newState.endValue;
        }

        this.setState(newState as RangePickerState);

        this.onValueChange([newStartValue, newEndValue]);
    };

    clearRange = () => {
        this.setState({
            startDateInputStr: '',
            endDateInputStr: '',
            startTimeInputStr: '',
            endTimeInputStr: '',
        });

        if (!('value' in this.props)) {
            this.setState({
                startValue: null,
                endValue: null,
            });
        }

        this.onValueChange([]);
    };

    onDateInputChange = (inputStr: string, e: SyntheticEvent, eventType?: string) => {
        if (eventType === 'clear' || !inputStr) {
            e.stopPropagation();
            this.clearRange();
        } else {
            const stateName = mapInputStateName(this.state.activeDateInput!);
            this.setState({
                [stateName!]: inputStr,
                inputing: this.state.activeDateInput,
            });
        }
    };

    onDateInputBlur = () => {
        const { resetTime } = this.props;
        const { activeDateInput } = this.state;
        const stateName = mapInputStateName(activeDateInput!);
        const dateInputStr = this.state[stateName!];

        if (dateInputStr) {
            const { format, disabledDate } = this.props;
            const parsed = moment(dateInputStr, format, true);

            this.setState({
                [stateName!]: '',
                inputing: false,
            });

            if (parsed.isValid() && !disabledDate(parsed, 'date')) {
                const valueName = activeDateInput as 'startValue' | 'endValue';
                const newValue = resetTime
                    ? parsed
                    : resetValueTime(parsed, this.state[activeDateInput!]);

                this.handleChange(valueName, newValue);
            }
        }
    };

    onDateInputKeyDown = (e: KeyboardEvent) => {
        const { type } = this.props;
        const { activeDateInput, format } = this.state;
        const stateName = mapInputStateName(activeDateInput!);
        const dateInputStr = this.state[stateName!];
        const dateStr = onDateKeydown(
            e,
            {
                format,
                value: this.state[activeDateInput!],
                dateInputStr: dateInputStr!,
            },
            type === 'date' ? 'day' : type
        );
        if (!dateStr) return;

        // @ts-expect-error 应该传入 e
        return this.onDateInputChange(dateStr);
    };

    onFocusDateInput = (type: RangePickerState['activeDateInput']) => {
        if (type !== this.state.activeDateInput) {
            this.setState({
                activeDateInput: type,
            });
        }
        if (this.state.panel !== PANEL.DATE) {
            this.setState({
                panel: PANEL.DATE,
            });
        }
    };

    onFocusTimeInput = (type: RangePickerState['activeDateInput']) => {
        if (type !== this.state.activeDateInput) {
            this.setState({
                activeDateInput: type,
            });
        }

        if (this.state.panel !== PANEL.TIME) {
            this.setState({
                panel: PANEL.TIME,
            });
        }
    };

    onSelectStartTime = (value: Moment) => {
        if (!('value' in this.props)) {
            this.setState({
                startValue: value,
                inputing: false,
                activeDateInput: 'startTime',
            });
        }
        // @ts-expect-error 未考虑 startValue 为 null 的情况
        if (value.valueOf() !== this.state.startValue.valueOf()) {
            this.onValueChange([value, this.state.endValue]);
        }
    };

    onSelectEndTime = (value: Moment) => {
        if (!('value' in this.props)) {
            this.setState({
                endValue: value,
                inputing: false,
                activeDateInput: 'endTime',
            });
        }
        // @ts-expect-error 未考虑 endValue 为 null 的情况
        if (value.valueOf() !== this.state.endValue.valueOf()) {
            this.onValueChange([this.state.startValue, value]);
        }
    };

    onTimeInputChange = (inputStr: string) => {
        const stateName = mapInputStateName(this.state.activeDateInput!);
        this.setState({
            [stateName!]: inputStr,
            inputing: this.state.activeDateInput,
        });
    };

    onTimeInputBlur = () => {
        const stateName = mapInputStateName(this.state.activeDateInput!);
        const timeInputStr = this.state[stateName!];

        const parsed = moment(timeInputStr, this.state.timeFormat, true);

        this.setState({
            [stateName!]: '',
            inputing: false,
        });

        if (parsed.isValid()) {
            const hour = parsed.hour();
            const minute = parsed.minute();
            const second = parsed.second();
            const valueName = mapTimeToValue(this.state.activeDateInput!);
            // @ts-expect-error 未考虑 startValue 为 null 的情况
            const newValue = this.state[valueName!]
                .clone()
                .hour(hour)
                .minute(minute)
                .second(second);

            this.handleChange(valueName!, newValue);
        }
    };

    onTimeInputKeyDown = (e: KeyboardEvent) => {
        const { showTime } = this.props;
        const { activeDateInput, timeFormat } = this.state;
        const stateName = mapInputStateName(activeDateInput!);
        const timeInputStr = this.state[stateName!];
        const {
            disabledMinutes,
            disabledSeconds,
            hourStep = 1,
            minuteStep = 1,
            secondStep = 1,
        } = typeof showTime === 'object' ? showTime : ({} as TimePickerProps);
        let unit: 'hour' | 'minute' | 'second' = 'second';

        if (disabledSeconds) {
            unit = disabledMinutes ? 'hour' : 'minute';
        }

        const timeStr = onTimeKeydown(
            e,
            {
                format: timeFormat!,
                timeInputStr: timeInputStr!,
                value: this.state[activeDateInput!.indexOf('start') ? 'startValue' : 'endValue'],
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

    handleChange = (valueName: 'startValue' | 'endValue', newValue?: Moment | null) => {
        const values = (['startValue', 'endValue'] as const).map(name =>
            valueName === name ? newValue : this.state[name]
        ) as [start?: Moment | null, end?: Moment | null];

        // 判断起始时间是否大于结束时间
        if (values[0] && values[1] && values[0].valueOf() > values[1].valueOf()) {
            return;
        }

        if (!('value' in this.props)) {
            this.setState({
                [valueName]: newValue,
            });
        }

        this.onValueChange(values);
    };

    onVisibleChange = (visible: boolean, type: string) => {
        if (!('visible' in this.props)) {
            this.setState({
                visible,
            });
        }
        this.props.onVisibleChange(visible, type);
    };

    changePanel = (panel: PanelType) => {
        const { startValue, endValue } = this.state;
        this.setState({
            panel,
            activeDateInput:
                panel === PANEL.DATE
                    ? !!startValue && !endValue
                        ? 'endValue'
                        : 'startValue'
                    : 'startTime',
        });
    };

    onOk = (value?: [start?: Moment | null, end?: Moment | null]) => {
        this.onVisibleChange(false, 'okBtnClick');
        this.onValueChange(value || [this.state.startValue, this.state.endValue], 'onOk');
    };

    // 如果用户没有给定时间禁用逻辑，则给默认到禁用逻辑
    getDisabledTime = ({
        startValue,
        endValue,
    }: { startValue?: Moment | null; endValue?: Moment | null } & Record<string, unknown>) => {
        const { disabledHours, disabledMinutes, disabledSeconds } = (this.props.showTime ||
            {}) as TimePickerProps;

        let disabledTime = {};

        if (startValue && endValue) {
            const isSameDay = startValue.format('L') === endValue.format('L');
            const newDisabledHours = isFunction(disabledHours)
                ? disabledHours
                : (index: number) => {
                      if (isSameDay && index < startValue.hour()) {
                          return true;
                      }
                  };

            const newDisabledMinutes = isFunction(disabledMinutes)
                ? disabledMinutes
                : (index: number) => {
                      if (
                          isSameDay &&
                          startValue.hour() === endValue.hour() &&
                          index < startValue.minute()
                      ) {
                          return true;
                      }
                  };

            const newDisabledSeconds = isFunction(disabledSeconds)
                ? disabledSeconds
                : (index: number) => {
                      if (
                          isSameDay &&
                          startValue.hour() === endValue.hour() &&
                          startValue.minute() === endValue.minute() &&
                          index < startValue.second()
                      ) {
                          return true;
                      }
                  };
            disabledTime = {
                disabledHours: newDisabledHours,
                disabledMinutes: newDisabledMinutes,
                disabledSeconds: newDisabledSeconds,
            };
        }

        return disabledTime;
    };

    enableAutoSwitchDateInput = () => {
        this.autoSwitchDateInput = true;
    };

    afterOpen = () => {
        // autoFocus 逻辑手动处理
        switch (this.state.activeDateInput) {
            case 'startValue': {
                if (this.startDateInputRef.current) {
                    this.startDateInputRef.current.getInstance().focus();
                }
                break;
            }
            case 'endValue': {
                if (this.endDateInputRef.current) {
                    this.endDateInputRef.current.getInstance().focus();
                }
                break;
            }
        }
    };

    renderPreview(
        [startValue, endValue]: [Moment | null, Moment | null],
        others: HTMLAttributes<HTMLDivElement>
    ) {
        const { prefix, className, renderPreview } = this.props;
        const { dateTimeFormat } = this.state;

        const previewCls = classnames(className, `${prefix}form-preview`);
        const startLabel = startValue ? startValue.format(dateTimeFormat) : '';
        const endLabel = endValue ? endValue.format(dateTimeFormat) : '';

        if (typeof renderPreview === 'function') {
            return (
                <div {...others} className={previewCls}>
                    {renderPreview([startValue, endValue], this.props)}
                </div>
            );
        }

        return (
            <p {...others} className={previewCls}>
                {startLabel} - {endLabel}
            </p>
        );
    }

    render() {
        const {
            prefix,
            rtl,
            type,
            defaultVisibleMonth,
            onVisibleMonthChange,
            showTime,
            disabledDate,
            footerRender,
            label,
            ranges = {}, // 兼容 0.x ranges 属性
            state: inputState,
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
            locale,
            inputProps,
            dateCellRender,
            monthCellRender,
            yearCellRender,
            startDateInputAriaLabel,
            startTimeInputAriaLabel,
            endDateInputAriaLabel,
            endTimeInputAriaLabel,
            isPreview,
            disableChangeMode,
            yearRange,
            placeholder,
            ...others
        } = this.props;

        const state = this.state;

        const classNames = classnames(
            {
                [`${prefix}range-picker`]: true,
                [`${prefix}${size}`]: size,
                [`${prefix}disabled`]: disabled,
            },
            className
        );

        const panelBodyClassName = classnames({
            [`${prefix}range-picker-body`]: true,
            [`${prefix}range-picker-body-show-time`]: showTime,
        });

        const triggerCls = classnames({
            [`${prefix}range-picker-trigger`]: true,
            [`${prefix}error`]: inputState === 'error',
        });

        const startDateInputCls = classnames({
            [`${prefix}range-picker-panel-input-start-date`]: true,
            [`${prefix}focus`]: state.activeDateInput === 'startValue',
        });

        const endDateInputCls = classnames({
            [`${prefix}range-picker-panel-input-end-date`]: true,
            [`${prefix}focus`]: state.activeDateInput === 'endValue',
        });

        if (rtl) {
            others.dir = 'rtl';
        }

        if (isPreview) {
            return this.renderPreview(
                [state.startValue!, state.endValue!],
                // @ts-expect-error 应为 propTypes
                obj.pickOthers(others, RangePicker.PropTypes)
            );
        }

        const startDateInputValue =
            state.inputing === 'startValue'
                ? state.startDateInputStr
                : (state.startValue && state.startValue.format(state.format)) || '';
        const endDateInputValue =
            state.inputing === 'endValue'
                ? state.endDateInputStr
                : (state.endValue && state.endValue.format(state.format)) || '';

        let startTriggerValue = startDateInputValue;
        let endTriggerValue = endDateInputValue;

        const sharedInputProps = {
            ...inputProps,
            size,
            disabled,
            onChange: this.onDateInputChange,
            onBlur: this.onDateInputBlur,
            onPressEnter: this.onDateInputBlur,
            onKeyDown: this.onDateInputKeyDown,
        };

        const startDateInput = (
            <Input
                {...sharedInputProps}
                aria-label={startDateInputAriaLabel}
                placeholder={state.format}
                value={startDateInputValue}
                onFocus={() => this.onFocusDateInput('startValue')}
                className={startDateInputCls}
                ref={this.startDateInputRef}
                onClick={func.makeChain(this.enableAutoSwitchDateInput, sharedInputProps.onClick)}
            />
        );

        const endDateInput = (
            <Input
                {...sharedInputProps}
                aria-label={endDateInputAriaLabel}
                placeholder={state.format}
                value={endDateInputValue}
                onFocus={() => this.onFocusDateInput('endValue')}
                className={endDateInputCls}
                ref={this.endDateInputRef}
                onClick={func.makeChain(this.enableAutoSwitchDateInput, sharedInputProps.onClick)}
            />
        );

        const shareCalendarProps = {
            showOtherMonth: true,
            dateCellRender: dateCellRender,
            monthCellRender: monthCellRender,
            yearCellRender: yearCellRender,
            format: state.format,
            defaultVisibleMonth: defaultVisibleMonth,
            onVisibleMonthChange: onVisibleMonthChange,
        };

        const datePanel =
            type === 'date' ? (
                <RangeCalendar
                    {...shareCalendarProps}
                    yearRange={yearRange}
                    disableChangeMode={disableChangeMode}
                    disabledDate={disabledDate}
                    onSelect={this.onSelectCalendarPanel}
                    startValue={state.startValue}
                    endValue={state.endValue}
                />
            ) : (
                <div className={`${prefix}range-picker-panel-body`}>
                    <Calendar
                        shape="panel"
                        modes={type === 'month' ? ['month', 'year'] : ['year']}
                        {...{ ...shareCalendarProps }}
                        disabledDate={(date, ...args) => {
                            return (
                                (state.endValue && date.isAfter(state.endValue, type)) ||
                                (disabledDate && disabledDate(date, ...args))
                            );
                        }}
                        onSelect={value => {
                            const selectedValue = value.clone().date(1).hour(0).minute(0).second(0);
                            if (type === 'year') {
                                selectedValue.month(0);
                            }
                            this.onSelectCalendarPanel(selectedValue, 'startValue');
                        }}
                        value={state.startValue}
                    />
                    <Calendar
                        shape="panel"
                        modes={type === 'month' ? ['month', 'year'] : ['year']}
                        {...shareCalendarProps}
                        disabledDate={(date, ...args) => {
                            return (
                                (state.startValue && date.isBefore(state.startValue, type)) ||
                                (disabledDate && disabledDate(date, ...args))
                            );
                        }}
                        onSelect={value => {
                            const selectedValue = value.clone().hour(23).minute(59).second(59);
                            if (type === 'year') {
                                selectedValue.month(11).date(31);
                            } else {
                                selectedValue.date(selectedValue.daysInMonth());
                            }
                            this.onSelectCalendarPanel(selectedValue, 'endValue');
                        }}
                        value={state.endValue}
                    />
                </div>
            );

        let startTimeInput = null;
        let endTimeInput = null;
        let timePanel = null;
        let panelFooter = footerRender();

        if (showTime) {
            const startTimeInputValue =
                state.inputing === 'startTime'
                    ? state.startTimeInputStr
                    : (state.startValue && state.startValue.format(state.timeFormat)) || '';
            const endTimeInputValue =
                state.inputing === 'endTime'
                    ? state.endTimeInputStr
                    : (state.endValue && state.endValue.format(state.timeFormat)) || '';

            startTriggerValue =
                (state.startValue && state.startValue.format(state.dateTimeFormat)) || '';
            endTriggerValue = (state.endValue && state.endValue.format(state.dateTimeFormat)) || '';

            const sharedTimeInputProps = {
                size,
                placeholder: state.timeFormat,
                onFocus: this.onFocusTimeInput,
                onBlur: this.onTimeInputBlur,
                onPressEnter: this.onTimeInputBlur,
                onChange: this.onTimeInputChange,
                onKeyDown: this.onTimeInputKeyDown,
            };

            const startTimeInputCls = classnames({
                [`${prefix}range-picker-panel-input-start-time`]: true,
                [`${prefix}focus`]: state.activeDateInput === 'startTime',
            });

            startTimeInput = (
                <Input
                    {...sharedTimeInputProps}
                    value={startTimeInputValue}
                    aria-label={startTimeInputAriaLabel}
                    disabled={disabled || !state.startValue}
                    onFocus={() => this.onFocusTimeInput('startTime')}
                    className={startTimeInputCls}
                />
            );

            const endTimeInputCls = classnames({
                [`${prefix}range-picker-panel-input-end-time`]: true,
                [`${prefix}focus`]: state.activeDateInput === 'endTime',
            });

            endTimeInput = (
                <Input
                    {...sharedTimeInputProps}
                    value={endTimeInputValue}
                    aria-label={endTimeInputAriaLabel}
                    disabled={disabled || !state.endValue}
                    onFocus={() => this.onFocusTimeInput('endTime')}
                    className={endTimeInputCls}
                />
            );

            const showSecond = state.timeFormat!.indexOf('s') > -1;
            const showMinute = state.timeFormat!.indexOf('m') > -1;

            const sharedTimePickerProps = {
                ...(showTime as TimePickerProps),
                prefix,
                locale,
                disabled,
                showSecond,
                showMinute,
            };

            const disabledTime = this.getDisabledTime(state);

            timePanel = (
                <div className={`${prefix}range-picker-panel-time`}>
                    <TimePickerPanel
                        {...sharedTimePickerProps}
                        disabled={disabled || !state.startValue}
                        className={`${prefix}range-picker-panel-time-start`}
                        value={state.startValue!}
                        onSelect={this.onSelectStartTime}
                    />
                    <TimePickerPanel
                        {...sharedTimePickerProps}
                        {...disabledTime}
                        disabled={disabled || !state.endValue}
                        className={`${prefix}range-picker-panel-time-end`}
                        value={state.endValue!}
                        onSelect={this.onSelectEndTime}
                    />
                </div>
            );
        }

        panelFooter = panelFooter || (
            <PanelFooter
                prefix={prefix}
                value={state.startValue || state.endValue}
                ranges={Object.keys(ranges).map(key => ({
                    label: key,
                    value: ranges[key],
                    onChange: (values: [Moment, Moment]) => {
                        this.setState({
                            startValue: values[0],
                            endValue: values[1],
                        });
                        this.onValueChange(values);
                    },
                }))}
                disabledOk={
                    !state.startValue ||
                    !state.endValue ||
                    state.startValue.valueOf() > state.endValue.valueOf()
                }
                locale={locale}
                panel={state.panel!}
                onPanelChange={showTime ? this.changePanel : null}
                onOk={this.onOk as PanelFooterProps['onOk']}
            />
        );

        const panelBody = {
            [PANEL.DATE]: datePanel,
            [PANEL.TIME]: timePanel,
        }[state.panel!];

        const allowClear = (state.startValue || state.endValue) && hasClear;
        let [startPlaceholder, endPlaceholder] = placeholder || [];

        if (typeof placeholder === 'string') {
            startPlaceholder = placeholder;
            endPlaceholder = placeholder;
        }

        const trigger = (
            <div className={triggerCls}>
                <Input
                    {...sharedInputProps}
                    readOnly
                    role="combobox"
                    aria-expanded={state.visible}
                    label={label}
                    placeholder={startPlaceholder || locale.startPlaceholder}
                    value={startTriggerValue}
                    hasBorder={false}
                    className={`${prefix}range-picker-trigger-input`}
                    onFocus={() => this.onFocusDateInput('startValue')}
                />
                <span className={`${prefix}range-picker-trigger-separator`}>-</span>
                <Input
                    {...sharedInputProps}
                    readOnly
                    role="combobox"
                    aria-expanded={state.visible}
                    placeholder={endPlaceholder || locale.endPlaceholder}
                    value={endTriggerValue}
                    hasBorder={false}
                    className={`${prefix}range-picker-trigger-input`}
                    onFocus={() => this.onFocusDateInput('endValue')}
                    // @ts-expect-error allowClear 应先进行 boolean 转换
                    hasClear={allowClear}
                    hint={
                        <Icon
                            type="calendar"
                            className={`${prefix}date-picker-symbol-calendar-icon`}
                        />
                    }
                />
            </div>
        );

        const PopupComponent = popupComponent ? popupComponent : Popup;

        return (
            <div {...obj.pickOthers(RangePicker.propTypes, others)} className={classNames}>
                <PopupComponent
                    align={popupAlign}
                    {...popupProps}
                    followTrigger={followTrigger}
                    disabled={disabled}
                    visible={state.visible}
                    onVisibleChange={this.onVisibleChange}
                    beforeOpen={func.makeChain(
                        this.enableAutoSwitchDateInput,
                        popupProps && popupProps.beforeOpen
                    )}
                    afterOpen={func.makeChain(this.afterOpen, popupProps && popupProps.afterOpen)}
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
                            <div className={`${prefix}range-picker-panel-header`}>
                                <div className={`${prefix}range-picker-panel-input`}>
                                    {startDateInput}
                                    {startTimeInput}
                                    <span className={`${prefix}range-picker-panel-input-separator`}>
                                        -
                                    </span>
                                    {endDateInput}
                                    {endTimeInput}
                                </div>
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

export default polyfill(RangePicker);
