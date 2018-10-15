import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';
import Overlay from '../overlay';
import Input from '../input';
import RangeCalendar from '../calendar/range-calendar';
import TimePickerPanel from '../time-picker/panel';
import nextLocale from '../locale/zh-cn';
import { func, obj } from '../util';
import { PANEL, resetValueTime, formatDateValue, extend, getDateTimeFormat, isFunction } from './util';
import PanelFooter from './module/panel-footer';

const { Popup } = Overlay;

function mapInputStateName(name) {
    return ({
        startValue: 'startDateInputStr',
        endValue: 'endDateInputStr',
        startTime: 'startTimeInputStr',
        endTime: 'endTimeInputStr',
    })[name];
}

function mapTimeToValue(name) {
    return ({
        startTime: 'startValue',
        endTime: 'endValue',
    })[name];
}

function getFormatValues(values, format) {
    if (!Array.isArray(values)) {
        return [null, null];
    }
    return [
        formatDateValue(values[0], format),
        formatDateValue(values[1], format),
    ];
}

/**
 * DatePicker.RangePicker
*/
export default class RangePicker extends Component {

    static propTypes = {
        prefix: PropTypes.string,
        /**
         * 默认展示的起始月份
         * @return {MomentObject} 返回包含指定月份的 moment 对象实例
         */
        defaultVisibleMonth: PropTypes.func,
        onVisibleMonthChange: PropTypes.func,
        /**
         * 日期范围值数组 [moment, moment]
         */
        value: PropTypes.array,
        /**
         * 初始的日期范围值数组 [moment, moment]
         */
        defaultValue: PropTypes.array,
        /**
         * 日期格式
         */
        format: PropTypes.string,
        /**
         * 是否使用时间控件，支持传入 TimePicker 的属性
         */
        showTime: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
        /**
         * 每次选择是否重置时间（仅在 showTime 开启时有效）
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
         * 日期范围值改变时的回调
         * @return {MomentObject|String} 日期值
         */
        onChange: PropTypes.func,
        /**
         * 点击确认按钮时的回调 返回开始时间和结束时间`[ MomentObject|String, MomentObject|String ]`
         * @return {Array} 日期范围
         */
        onOk: PropTypes.func,
        /**
         * 输入框内置标签
         */
        label: PropTypes.node,
        /**
         * 输入框状态
         */
        state: PropTypes.oneOf(['error', 'success']),
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
        onOk: func.noop,
        onVisibleChange: func.noop,
    }

    constructor(props, context) {
        super(props, context);
        const dateTimeFormat = getDateTimeFormat(props.format, props.showTime);
        extend(dateTimeFormat, this);

        const val = props.value || props.defaultValue;
        const values = getFormatValues(val, this.dateTimeFormat);
        this.inputAsString = val && (typeof val[0] === 'string' || typeof val[1] === 'string');
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
        };
    }

    componentWillReceiveProps(nextProps) {
        if ('showTime' in nextProps) {
            const dateTimeFormat = getDateTimeFormat(nextProps.format || this.props.format, nextProps.showTime);
            extend(dateTimeFormat, this);
        }

        if ('value' in nextProps) {
            const values = getFormatValues(nextProps.value, this.dateTimeFormat);
            this.setState({
                startValue: values[0],
                endValue: values[1],
            });
            this.inputAsString = nextProps.value && (typeof nextProps.value[0] === 'string' || typeof nextProps.value[1] === 'string');
        }

        if ('visible' in nextProps) {
            this.setState({
                visible: nextProps.visible,
            });
        }
    }

    onValueChange(values, handler = 'onChange') {
        let ret;
        if (!values.length || !this.inputAsString) {
            ret = values;
        } else {
            ret = [
                values[0] ? values[0].format(this.dateTimeFormat) : null,
                values[1] ? values[1].format(this.dateTimeFormat) : null,
            ];
        }
        this.props[handler](ret);
    }

    onSelectCalendarPanel = (value) => {
        const { showTime, resetTime } = this.props;
        const { activeDateInput: prevActiveDateInput, startValue: prevStartValue, endValue: prevEndValue } = this.state;
        const newState = {
            activeDateInput: prevActiveDateInput,
            inputing: false,
        };

        let newValue = value;
        switch (prevActiveDateInput) {
            case 'startValue': {
                if (!prevEndValue || value.valueOf() <= prevEndValue.valueOf()) {
                    newState.activeDateInput = 'endValue';
                }

                if (showTime) {
                    if (!prevStartValue) {
                        // 第一次选择，如果设置了时间默认值，则使用该默认时间
                        if (showTime.defaultValue) {
                            const defaultTimeValue = formatDateValue(showTime.defaultValue, this.timeFormat);
                            newValue = resetValueTime(value, defaultTimeValue);
                        }
                    } else if (!resetTime) {
                        // 非第一次选择，如果开启了 resetTime ，则记住之前选择的时间值
                        newValue = resetValueTime(value, prevStartValue);
                    }
                }

                newState.startValue = newValue;

                if (prevEndValue && value.valueOf() > prevEndValue.valueOf()) {
                    newState.endValue = null;
                    newState.activeDateInput = 'endValue';
                }
                break;
            }

            case 'endValue':
                if (!prevStartValue) {
                    newState.activeDateInput = 'startValue';
                }

                if (showTime) {
                    if (!prevEndValue) {
                        // 第一次选择，如果设置了时间默认值，则使用该默认时间
                        if (showTime.defaultValue) {
                            const defaultTimeValue = formatDateValue(showTime.defaultValue, this.timeFormat);
                            newValue = resetValueTime(value, defaultTimeValue);
                        }
                    } else if (!resetTime) {
                        // 非第一次选择，如果开启了 resetTime ，则记住之前选择的时间值
                        newValue = resetValueTime(value, prevEndValue);
                    }
                }

                newState.endValue = newValue;

                // 选择了一个比开始日期更小的结束日期，此时表示用户重新选择了
                if (prevStartValue && value.valueOf() < prevStartValue.valueOf()) {
                    newState.startValue = value;
                    newState.endValue = null;
                }
                break;
        }

        const newStartValue = 'startValue' in newState ? newState.startValue : prevStartValue;
        const newEndValue = 'endValue' in newState ? newState.endValue : prevEndValue;

        // 受控状态选择不更新值
        if ('value' in this.props) {
            delete newState.startValue;
            delete newState.endValue;
        }

        this.setState(newState);

        this.onValueChange([ newStartValue, newEndValue ]);
    }

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
    }

    onDateInputChange = (inputStr, e, eventType) => {
        if (eventType === 'clear' || !inputStr) {
            e.stopPropagation();
            this.clearRange();
        } else {
            const stateName = mapInputStateName(this.state.activeDateInput);
            this.setState({
                [stateName]: inputStr,
                inputing: this.state.activeDateInput,
            });
        }
    }

    onDateInputBlur = () => {
        const stateName = mapInputStateName(this.state.activeDateInput);
        const dateInputStr = this.state[stateName];
        if (dateInputStr) {
            const { format, disabledDate } = this.props;
            const parsed = moment(dateInputStr, format, true);

            this.setState({
                [stateName]: '',
                inputing: false,
            });

            if (parsed.isValid() && !disabledDate(parsed)) {

                const valueName = this.state.activeDateInput;
                const newValue = parsed;

                this.handleChange(valueName, newValue);
            }
        }
    }

    onFocusDateInput = (type) => {
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
    }

    onFocusTimeInput = (type) => {
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
    }

    onSelectStartTime = (value) => {
        if (!('value' in this.props)) {
            this.setState({
                startValue: value,
                inputing: false,
                activeDateInput: 'startTime',
            });
        }
        if (value.valueOf() !== this.state.startValue.valueOf()) {
            this.onValueChange([value, this.state.endValue]);
        }
    }

    onSelectEndTime = (value) => {
        if (!('value' in this.props)) {
            this.setState({
                endValue: value,
                inputing: false,
                activeDateInput: 'endTime',
            });
        }
        if (value.valueOf() !== this.state.endValue.valueOf()) {
            this.onValueChange([this.state.startValue, value]);
        }
    }

    onTimeInputChange = (inputStr) => {
        const stateName = mapInputStateName(this.state.activeDateInput);
        this.setState({
            [stateName]: inputStr,
            inputing: this.state.activeDateInput,
        });
    }

    onTimeInputBlur = () => {
        const stateName = mapInputStateName(this.state.activeDateInput);
        const timeInputStr = this.state[stateName];
        if (timeInputStr) {
            const parsed = moment(timeInputStr, this.timeFormat, true);

            this.setState({
                [stateName]: '',
                inputing: false,
            });

            if (parsed.isValid()) {
                const hour = parsed.hour();
                const minute = parsed.minute();
                const second = parsed.second();
                const valueName = mapTimeToValue(this.state.activeDateInput);
                const newValue = this.state[valueName].clone().hour(hour).minute(minute).second(second);

                this.handleChange(valueName, newValue);
            }
        }
    }

    handleChange = (valueName, newValue) => {
        if (!('value' in this.props)) {
            this.setState({
                [valueName]: newValue,
            });
        }

        const startValue = valueName === 'startValue' ? newValue : this.state.startValue;
        const endValue = valueName === 'endValue' ? newValue : this.state.endValue;

        this.onValueChange([startValue, endValue]);
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
            activeDateInput: panel === PANEL.DATE ? 'startValue' : 'startTime',
        });
    }

    onOk = () => {
        this.onVisibleChange(false, 'okBtnClick');
        this.onValueChange([this.state.startValue, this.state.endValue], 'onOk');
    }

    // 如果用户没有给定时间禁用逻辑，则给默认到禁用逻辑，即如果是同一天，则时间不能是同样的
    getDisabledTime = ({ startValue, endValue }) => {
        const { disabledHours, disabledMinutes, disabledSeconds } = this.props;

        let disabledTime = {};

        if (startValue && endValue) {
            const isSameDay = startValue.format('L') === endValue.format('L');

            const newDisabledHours = isFunction(disabledHours) ?
                disabledHours : (index) => {
                    if (isSameDay && index < startValue.hour()) {
                        return true;
                    }
                };

            const newDisabledMinutes = isFunction(disabledMinutes) ?
                disabledMinutes : (index) => {
                    if (isSameDay && startValue.hour() === endValue.hour() && index < startValue.minute()) {
                        return true;
                    }
                };

            const newDisabledSeconds = isFunction(disabledSeconds) ?
                disabledSeconds : (index) => {
                    if (isSameDay && startValue.hour() === endValue.hour() && startValue.minute() === endValue.minute() && index <= startValue.second()) {
                        return true;
                    }
                };
            disabledTime = {
                disabledHours: newDisabledHours,
                disabledMinutes: newDisabledMinutes,
                disabledSeconds: newDisabledSeconds
            };
        }

        return disabledTime;
    }

    render() {
        const {
            prefix,
            defaultVisibleMonth,
            onVisibleMonthChange,
            showTime,
            disabledDate,
            footerRender,
            label,
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
            className,
            locale,
            ...others
        } = this.props;

        const state = this.state;

        const classNames = classnames({
            [`${prefix}range-picker`]: true,
            [`${prefix}${size}`]: size,
            [`${prefix}disabled`]: disabled,
        }, className);

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

        const startDateInputValue = (state.inputing === 'startValue') ?
            state.startDateInputStr : ((state.startValue && state.startValue.format(this.format)) || '');
        const endDateInputValue = (state.inputing === 'endValue') ?
            state.endDateInputStr : ((state.endValue && state.endValue.format(this.format)) || '');

        let startTriggerValue = startDateInputValue;
        let endTriggerValue = endDateInputValue;

        const sharedInputProps = {
            size,
            disabled,
            onChange: this.onDateInputChange,
            onBlur: this.onDateInputBlur,
            onPressEnter: this.onDateInputBlur,
        };

        const startDateInput = (<Input
            {...sharedInputProps}
            placeholder={this.format}
            value={startDateInputValue}
            onFocus={() => this.onFocusDateInput('startValue')}
            className={startDateInputCls} />);

        const endDateInput = (<Input
            {...sharedInputProps}
            placeholder={this.format}
            value={endDateInputValue}
            onFocus={() => this.onFocusDateInput('endValue')}
            className={endDateInputCls} />);

        const datePanel = (<RangeCalendar
            showOtherMonth
            defaultVisibleMonth={defaultVisibleMonth}
            onVisibleMonthChange={onVisibleMonthChange}
            disabledDate={disabledDate}
            onSelect={this.onSelectCalendarPanel}
            startValue={state.startValue}
            endValue={state.endValue} />);

        let startTimeInput = null;
        let endTimeInput = null;
        let timePanel = null;
        let panelFooter = footerRender();

        if (showTime) {
            const startTimeInputValue = (state.inputing === 'startTime') ?
                state.startTimeInputStr : ((state.startValue && state.startValue.format(this.timeFormat)) || '');
            const endTimeInputValue = (state.inputing === 'endTime') ?
                state.endTimeInputStr : ((state.endValue && state.endValue.format(this.timeFormat)) || '');

            startTriggerValue = state.startValue && state.startValue.format(this.dateTimeFormat) || '';
            endTriggerValue = state.endValue && state.endValue.format(this.dateTimeFormat) || '';

            const sharedTimeInputProps = {
                size,
                placeholder: this.timeFormat,
                onFocus: this.onFocusTimeInput,
                onBlur: this.onTimeInputBlur,
                onPressEnter: this.onTimeInputBlur,
                onChange: this.onTimeInputChange,
            };

            const startTimeInputCls = classnames({
                [`${prefix}range-picker-panel-input-start-time`]: true,
                [`${prefix}focus`]: state.activeDateInput === 'startTime',
            });

            startTimeInput = (<Input
                {...sharedTimeInputProps}
                value={startTimeInputValue}
                disabled={disabled || !state.startValue || !state.endValue}
                onFocus={() => this.onFocusTimeInput('startTime')}
                className={startTimeInputCls}
            />);

            const endTimeInputCls = classnames({
                [`${prefix}range-picker-panel-input-end-time`]: true,
                [`${prefix}focus`]: state.activeDateInput === 'endTime',
            });

            endTimeInput = (<Input
                {...sharedTimeInputProps}
                value={endTimeInputValue}
                disabled={disabled || !state.endValue || !state.startValue}
                onFocus={() => this.onFocusTimeInput('endTime')}
                className={endTimeInputCls}
            />);

            const showSecond = this.timeFormat.indexOf('s') > -1;

            const sharedTimePickerProps = {
                ...showTime,
                prefix,
                locale,
                disabled,
                showSecond,
            };

            const disabledTime = this.getDisabledTime(state);

            timePanel = (<div className={`${prefix}range-picker-panel-time`}>
                <TimePickerPanel {...sharedTimePickerProps} className={`${prefix}range-picker-panel-time-start`} value={state.startValue} onSelect={this.onSelectStartTime} />
                <TimePickerPanel {...sharedTimePickerProps} {...disabledTime} className={`${prefix}range-picker-panel-time-end`} value={state.endValue} onSelect={this.onSelectEndTime} />
            </div>);
        }

        panelFooter = panelFooter || (<PanelFooter
            prefix={prefix}
            value={state.startValue && state.endValue}
            locale={locale}
            panel={state.panel}
            onPanelChange={showTime ? this.changePanel : null}
            onOk={this.onOk}
        />);

        const panelBody = ({
            [PANEL.DATE]: datePanel,
            [PANEL.TIME]: timePanel,
        })[state.panel];

        const allowClear = state.startValue && state.endValue && hasClear;
        const trigger = (<div className={triggerCls}>
            <Input
                {...sharedInputProps}
                label={label}
                placeholder={locale.startPlaceholder}
                value={startTriggerValue}
                hasBorder={false}
                className={`${prefix}range-picker-trigger-input`}
                onFocus={() => this.onFocusDateInput('startValue')} />
            <span className={`${prefix}range-picker-trigger-separator`}>-</span>
            <Input
                {...sharedInputProps}
                placeholder={locale.endPlaceholder}
                value={endTriggerValue}
                hasBorder={false}
                className={`${prefix}range-picker-trigger-input`}
                onFocus={() => this.onFocusDateInput('endValue')}
                hasClear={allowClear}
                hint="calendar" />
        </div>);

        return (<div {...obj.pickOthers(RangePicker.propTypes, others)} className={classNames}>
            <Popup
                {...popupProps}
                autoFoucs
                disabled={disabled}
                visible={state.visible}
                onVisibleChange={this.onVisibleChange}
                align={popupAlign}
                triggerType={popupTriggerType}
                container={popupContainer}
                style={popupStyle}
                className={popupClassName}
                trigger={trigger}>
                <div className={panelBodyClassName}>
                    <div className={`${prefix}range-picker-panel-header`}>
                        <div className={`${prefix}range-picker-panel-input`}>
                            {startDateInput}
                            {startTimeInput}
                            <span className={`${prefix}range-picker-panel-input-separator`}>-</span>
                            {endDateInput}
                            {endTimeInput}
                        </div>
                    </div>
                    {panelBody}
                    {panelFooter}
                </div>
            </Popup>
        </div>);
    }
}
