import React, {
    Component,
    type HTMLAttributes,
    type KeyboardEvent,
    type SyntheticEvent,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import moment, { type Moment } from 'moment';
import { polyfill } from 'react-lifecycles-compat';
import Overlay from '../overlay';
import Input from '../input';
import Icon from '../icon';
import Calendar from '../calendar';
import ConfigProvider from '../config-provider';
import nextLocale from '../locale/zh-cn';
import { func, obj, KEYCODE, type ClassPropsWithDefault } from '../util';
import { checkDateValue, formatDateValue } from './util';
import type { WeekPickerProps, WeekPickerState } from './types';

const { Popup } = Overlay;

type InnerWeekPickerProps = ClassPropsWithDefault<WeekPickerProps, typeof WeekPicker.defaultProps>;

/**
 * DatePicker.WeekPicker
 */
class WeekPicker extends Component<WeekPickerProps, WeekPickerState> {
    static propTypes = {
        ...ConfigProvider.propTypes,
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
         * 默认展现的月
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
         * 禁用日期函数
         */
        disabledDate: PropTypes.func,
        /**
         * 自定义面板页脚
         */
        footerRender: PropTypes.func,
        /**
         * 日期值改变时的回调
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
         */
        onVisibleChange: PropTypes.func,
        /**
         * 弹层触发方式
         */
        popupTriggerType: PropTypes.oneOf(['click', 'hover']),
        /**
         * 弹层对齐方式，具体含义见 OverLay 文档
         */
        popupAlign: PropTypes.string,
        /**
         * 弹层容器
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
         * 自定义日期渲染函数
         */
        dateCellRender: PropTypes.func,
        /**
         * 自定义月份渲染函数
         */
        monthCellRender: PropTypes.func,
        /**
         * 是否为预览态
         */
        isPreview: PropTypes.bool,
        /**
         * 预览态模式下渲染的内容
         */
        renderPreview: PropTypes.func,
        yearCellRender: PropTypes.func, // 兼容 0.x yearCellRender
        locale: PropTypes.object,
        className: PropTypes.string,
        name: PropTypes.string,
        popupComponent: PropTypes.elementType,
        popupContent: PropTypes.node,
    };

    static defaultProps = {
        prefix: 'next-',
        rtl: false,
        format: 'GGGG-Wo',
        size: 'medium',
        disabledDate: () => false,
        footerRender: () => null,
        hasClear: true,
        popupTriggerType: 'click',
        popupAlign: 'tl tl',
        locale: nextLocale.DatePicker,
        defaultVisible: false,
        onChange: func.noop,
        onVisibleChange: func.noop,
    };

    readonly props: InnerWeekPickerProps;

    constructor(props: WeekPickerProps) {
        super(props);

        const value = formatDateValue(props.value || props.defaultValue, props.format);

        this.state = {
            value,
            visible: props.visible || props.defaultVisible,
        };
    }

    static getDerivedStateFromProps(props: InnerWeekPickerProps) {
        const st: Partial<WeekPickerState> = {};
        if ('value' in props) {
            st.value = formatDateValue(props.value, props.format);
        }

        if ('visible' in props) {
            st.visible = props.visible;
        }

        return st;
    }

    handleChange = (newValue: Moment | null, prevValue: Moment | null) => {
        if (!('value' in this.props)) {
            this.setState({
                value: newValue,
            });
        }

        const newValueOf = newValue ? newValue.valueOf() : null;
        const preValueOf = prevValue ? prevValue.valueOf() : null;

        if (newValueOf !== preValueOf) {
            this.props.onChange(newValue);
        }
    };

    onDateInputChange = (value: Moment | null, e: SyntheticEvent, eventType: string) => {
        if (eventType === 'clear' || !value) {
            e.stopPropagation();
            this.handleChange(null, this.state.value);
        }
    };

    onKeyDown = (e: KeyboardEvent) => {
        if (
            [KEYCODE.UP, KEYCODE.DOWN, KEYCODE.PAGE_UP, KEYCODE.PAGE_DOWN].indexOf(e.keyCode) === -1
        ) {
            return;
        }

        if (
            (e.altKey && [KEYCODE.PAGE_UP, KEYCODE.PAGE_DOWN].indexOf(e.keyCode) === -1) ||
            // @ts-expect-error 没有 controlKey，应该是 ctrlKey
            e.controlKey ||
            e.shiftKey
        ) {
            return;
        }

        let date = this.state.value;

        if (date && date.isValid()) {
            const stepUnit = e.altKey ? 'year' : 'month';
            switch (e.keyCode) {
                case KEYCODE.UP:
                    date.subtract(1, 'w');
                    break;
                case KEYCODE.DOWN:
                    date.add(1, 'w');
                    break;
                case KEYCODE.PAGE_UP:
                    date.subtract(1, stepUnit);
                    break;
                case KEYCODE.PAGE_DOWN:
                    date.add(1, stepUnit);
                    break;
            }
        } else {
            date = moment();
        }

        e.preventDefault();

        this.handleChange(date, this.state.value);
    };

    onVisibleChange = (visible: boolean, type: string) => {
        if (!('visible' in this.props)) {
            this.setState({
                visible,
            });
        }
        this.props.onVisibleChange(visible, type);
    };

    onSelectCalendarPanel = (value: Moment | null) => {
        this.handleChange(value, this.state.value);
        this.onVisibleChange(false, 'calendarSelect');
    };

    renderPreview(others: HTMLAttributes<HTMLDivElement>) {
        const { prefix, format, className, renderPreview } = this.props;
        const { value } = this.state;
        const previewCls = classnames(className, `${prefix}form-preview`);

        const label = value ? value.format(format) : '';

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

    dateRender = (value: Moment) => {
        const { prefix, dateCellRender } = this.props;
        const selectedValue = this.state.value;
        const content =
            dateCellRender && typeof dateCellRender === 'function'
                ? dateCellRender(value)
                : value.dates();
        if (
            selectedValue &&
            selectedValue.years() === value.years() &&
            selectedValue.weeks() === value.weeks()
        ) {
            const firstDay = moment.localeData().firstDayOfWeek();
            const endDay = firstDay - 1 < 0 ? 6 : firstDay - 1;
            return (
                <div
                    className={classnames(`${prefix}calendar-week-active-date`, {
                        [`${prefix}calendar-week-active-start`]:
                            value.days() === moment.localeData().firstDayOfWeek(),
                        [`${prefix}calendar-week-active-end`]: value.days() === endDay,
                    })}
                >
                    <span>{content}</span>
                </div>
            );
        }

        return content;
    };

    render() {
        const {
            prefix,
            rtl,
            locale,
            label,
            state,
            format,
            defaultVisibleMonth,
            onVisibleMonthChange,
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
            monthCellRender,
            yearCellRender,
            isPreview,
            ...others
        } = this.props;
        const { visible, value } = this.state;

        const sharedInputProps = {
            ...inputProps,
            size,
            disabled,
            onChange: this.onDateInputChange,
            onKeyDown: this.onKeyDown,
        };

        if (rtl) {
            others.dir = 'rtl';
        }

        if (isPreview) {
            // @ts-expect-error 应是 propTypes
            return this.renderPreview(obj.pickOthers(others, WeekPicker.PropTypes));
        }

        const trigger = (
            <div className={`${prefix}week-picker-trigger`}>
                <Input
                    {...sharedInputProps}
                    label={label}
                    state={state}
                    value={value ? value.format(format) : ''}
                    role="combobox"
                    aria-expanded={visible}
                    readOnly
                    placeholder={placeholder || locale.weekPlaceholder}
                    hint={
                        <Icon
                            type="calendar"
                            className={`${prefix}date-picker-symbol-calendar-icon`}
                        />
                    }
                    // @ts-expect-error allowClear 应该先做 boolean 化处理
                    hasClear={value && hasClear}
                    className={`${prefix}week-picker-input`}
                />
            </div>
        );

        const PopupComponent = popupComponent ? popupComponent : Popup;

        return (
            <div
                {...obj.pickOthers(WeekPicker.propTypes, others)}
                className={classnames(`${prefix}week-picker`, className)}
            >
                <PopupComponent
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
                        <div dir={others.dir} className={`${prefix}week-picker-body`}>
                            <Calendar
                                shape="panel"
                                value={value}
                                format={format}
                                className={`${prefix}calendar-week`}
                                dateCellRender={this.dateRender}
                                monthCellRender={monthCellRender}
                                yearCellRender={yearCellRender}
                                onSelect={this.onSelectCalendarPanel}
                                defaultVisibleMonth={defaultVisibleMonth}
                                onVisibleMonthChange={onVisibleMonthChange}
                                disabledDate={disabledDate}
                            />
                            {footerRender()}
                        </div>
                    )}
                </PopupComponent>
            </div>
        );
    }
}

export default polyfill(WeekPicker);
