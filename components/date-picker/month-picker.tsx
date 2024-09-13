import React, {
    Component,
    type HTMLAttributes,
    type SyntheticEvent,
    type KeyboardEvent,
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
import nextLocale from '../locale/zh-cn';
import { type ClassPropsWithDefault, func, obj } from '../util';
import { checkDateValue, formatDateValue, onDateKeydown } from './util';
import type { MonthPickerProps, MonthPickerState } from './types';

const { Popup } = Overlay;

type InnerMonthPickerProps = ClassPropsWithDefault<
    MonthPickerProps,
    typeof MonthPicker.defaultProps
>;

/**
 * DatePicker.MonthPicker
 */
class MonthPicker extends Component<MonthPickerProps, MonthPickerState> {
    static displayName = 'MonthPicker';
    static propTypes = {
        ...ConfigProvider.propTypes,
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        label: PropTypes.node,
        state: PropTypes.oneOf(['success', 'loading', 'error']),
        placeholder: PropTypes.string,
        defaultVisibleYear: PropTypes.func,
        value: checkDateValue,
        defaultValue: checkDateValue,
        format: PropTypes.string,
        disabledDate: PropTypes.func,
        footerRender: PropTypes.func,
        onChange: PropTypes.func,
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
        monthCellRender: PropTypes.func,
        yearCellRender: PropTypes.func,
        dateInputAriaLabel: PropTypes.string,
        isPreview: PropTypes.bool,
        renderPreview: PropTypes.func,
        locale: PropTypes.object,
        className: PropTypes.string,
        name: PropTypes.string,
        popupComponent: PropTypes.elementType,
        popupContent: PropTypes.node,
    };

    static defaultProps = {
        prefix: 'next-',
        rtl: false,
        format: 'YYYY-MM',
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

    readonly props: InnerMonthPickerProps;

    constructor(props: MonthPickerProps) {
        super(props);

        this.state = {
            value: formatDateValue(props.defaultValue, props.format),
            dateInputStr: '',
            inputing: false,
            visible: props.defaultVisible,
            inputAsString: typeof props.defaultValue === 'string',
        };
    }

    static getDerivedStateFromProps(props: InnerMonthPickerProps) {
        const states: Partial<MonthPickerState> = {};
        if ('value' in props) {
            states.value = formatDateValue(props.value, props.format);
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

        return states;
    }

    onValueChange = (newValue: Moment | null) => {
        const ret =
            this.state.inputAsString && newValue ? newValue.format(this.props.format) : newValue;
        this.props.onChange(ret);
    };

    onSelectCalendarPanel = (value: Moment) => {
        const prevSelectedMonth = this.state.value;
        const selectedMonth = value.clone().date(1).hour(0).minute(0).second(0);

        this.handleChange(selectedMonth, prevSelectedMonth, { inputing: false }, () => {
            this.onVisibleChange(false, 'calendarSelect');
        });
    };

    clearValue = () => {
        this.setState({
            dateInputStr: '',
        });

        this.handleChange(null, this.state.value);
    };

    onDateInputChange = (
        inputStr: string,
        e: SyntheticEvent<HTMLInputElement>,
        eventType?: string
    ) => {
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

            if (parsed.isValid() && !disabledDate(parsed, 'month')) {
                this.handleChange(parsed, this.state.value);
            }
        }
    };

    onKeyDown = (e: KeyboardEvent) => {
        const { format } = this.props;
        const { dateInputStr, value } = this.state;
        const dateStr = onDateKeydown(e, { format, dateInputStr, value }, 'month');
        if (!dateStr) return;
        // @ts-expect-error 应传入 e
        this.onDateInputChange(dateStr);
    };

    handleChange = (
        newValue: Moment | null,
        prevValue: Moment | null,
        others = {},
        callback?: () => void
    ) => {
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

    onVisibleChange = (visible: boolean, type: string) => {
        if (!('visible' in this.props)) {
            this.setState({
                visible,
            });
        }
        this.props.onVisibleChange(visible, type);
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

    render() {
        const {
            prefix,
            rtl,
            locale,
            label,
            state,
            format,
            defaultVisibleYear,
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
            dateInputAriaLabel,
            isPreview,
            ...others
        } = this.props;

        const { visible, value, dateInputStr, inputing } = this.state;

        const monthPickerCls = classnames(
            {
                [`${prefix}month-picker`]: true,
            },
            className
        );

        const triggerInputCls = classnames({
            [`${prefix}month-picker-input`]: true,
            [`${prefix}error`]: false,
        });

        const panelBodyClassName = classnames({
            [`${prefix}month-picker-body`]: true,
        });

        if (rtl) {
            others.dir = 'rtl';
        }

        if (isPreview) {
            // @ts-expect-error 应是 propTypes
            return this.renderPreview(obj.pickOthers(others, MonthPicker.PropTypes));
        }

        const panelInputCls = `${prefix}month-picker-panel-input`;

        const sharedInputProps = {
            ...inputProps,
            size,
            disabled,
            onChange: this.onDateInputChange,
            onBlur: this.onDateInputBlur,
            onPressEnter: this.onDateInputBlur,
            onKeyDown: this.onKeyDown,
        };

        const dateInputValue = inputing ? dateInputStr : (value && value.format(format)) || '';
        const triggerInputValue = dateInputValue;

        const dateInput = (
            <Input
                {...sharedInputProps}
                value={dateInputValue}
                aria-label={dateInputAriaLabel}
                // @ts-expect-error 没有 this.onFoucsDateInput
                onFocus={this.onFoucsDateInput}
                placeholder={format}
                className={panelInputCls}
            />
        );

        const datePanel = (
            <Calendar
                shape="panel"
                modes={['month', 'year']}
                monthCellRender={monthCellRender}
                yearCellRender={yearCellRender}
                value={value}
                onSelect={this.onSelectCalendarPanel}
                defaultVisibleMonth={defaultVisibleYear}
                disabledDate={disabledDate}
            />
        );

        const panelBody = datePanel;
        const panelFooter = footerRender();

        const allowClear = value && hasClear;
        const trigger = (
            <div className={`${prefix}month-picker-trigger`}>
                <Input
                    {...sharedInputProps}
                    label={label}
                    state={state}
                    readOnly
                    value={triggerInputValue}
                    placeholder={placeholder || locale.monthPlaceholder}
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
            <div {...obj.pickOthers(MonthPicker.propTypes, others)} className={monthPickerCls}>
                <PopupComponent
                    autoFocus
                    align={popupAlign}
                    {...popupProps}
                    followTrigger={followTrigger}
                    role="combobox"
                    aria-expanded={visible}
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
                        <div className={panelBodyClassName} dir={others.dir}>
                            <div className={`${prefix}month-picker-panel-header`}>{dateInput}</div>
                            {panelBody}
                            {panelFooter}
                        </div>
                    )}
                </PopupComponent>
            </div>
        );
    }
}

export default polyfill(MonthPicker);
