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
import Input, { type InputProps } from '../input';
import Icon from '../icon';
import Overlay from '../overlay';
import nextLocale from '../locale/zh-cn';
import { type ClassPropsWithDefault, func, obj } from '../util';
import TimePickerPanel from './panel';
import { checkDateValue, formatDateValue } from './utils';
import { onTimeKeydown } from '../date-picker/util';
import type { TimePickerProps, TimePickerState } from './types';

const { Popup } = Overlay;
const { noop } = func;
const timePickerLocale = nextLocale.TimePicker;

type InnerTimePickerProps = ClassPropsWithDefault<TimePickerProps, typeof TimePicker.defaultProps>;

/**
 * TimePicker
 */
class TimePicker extends Component<TimePickerProps, TimePickerState> {
    static propTypes = {
        ...ConfigProvider.propTypes,
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        label: PropTypes.node,
        state: PropTypes.oneOf(['error', 'success']),
        placeholder: PropTypes.string,
        value: checkDateValue,
        defaultValue: checkDateValue,
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        hasClear: PropTypes.bool,
        format: PropTypes.string,
        hourStep: PropTypes.number,
        minuteStep: PropTypes.number,
        secondStep: PropTypes.number,
        disabledHours: PropTypes.func,
        disabledMinutes: PropTypes.func,
        disabledSeconds: PropTypes.func,
        renderTimeMenuItems: PropTypes.func,
        visible: PropTypes.bool,
        defaultVisible: PropTypes.bool,
        popupContainer: PropTypes.any,
        popupAlign: PropTypes.string,
        popupTriggerType: PropTypes.oneOf(['click', 'hover']),
        onVisibleChange: PropTypes.func,
        popupStyle: PropTypes.object,
        popupClassName: PropTypes.string,
        popupProps: PropTypes.object,
        followTrigger: PropTypes.bool,
        disabled: PropTypes.bool,
        isPreview: PropTypes.bool,
        renderPreview: PropTypes.func,
        onChange: PropTypes.func,
        className: PropTypes.string,
        name: PropTypes.string,
        inputProps: PropTypes.object,
        popupComponent: PropTypes.elementType,
        popupContent: PropTypes.node,
    };

    static defaultProps = {
        prefix: 'next-',
        rtl: false,
        locale: timePickerLocale,
        size: 'medium',
        format: 'HH:mm:ss',
        hasClear: true,
        disabled: false,
        popupAlign: 'tl tl',
        popupTriggerType: 'click',
        onChange: noop,
        onVisibleChange: noop,
    };

    static displayName = 'TimePicker';

    inputAsString: boolean;

    readonly props: InnerTimePickerProps;

    constructor(props: TimePickerProps) {
        super(props);
        const value = formatDateValue(props.value || props.defaultValue, props.format!);
        this.inputAsString = typeof (props.value || props.defaultValue) === 'string';
        this.state = {
            value,
            inputStr: '',
            inputing: false,
            visible: props.visible || props.defaultVisible,
        };
    }

    static getDerivedStateFromProps(props: InnerTimePickerProps) {
        const state: Partial<TimePickerState> = {};

        if ('value' in props) {
            state.value = formatDateValue(props.value, props.format);
        }

        if ('visible' in props) {
            state.visible = props.visible;
        }

        return state;
    }

    onValueChange(newValue: Moment | null) {
        const ret = this.inputAsString && newValue ? newValue.format(this.props.format) : newValue;
        this.props.onChange(ret);
    }

    onClearValue = () => {
        this.setState({
            value: null,
        });
        if (this.state.value) {
            this.onValueChange(null);
        }
    };

    onInputChange = (inputValue: string, e?: SyntheticEvent, eventType?: string) => {
        if (!('value' in this.props)) {
            if (eventType === 'clear' || !inputValue) {
                e!.stopPropagation();
                this.onClearValue();
            }

            this.setState({
                inputStr: inputValue,
                inputing: true,
            });
        } else if (eventType === 'clear') {
            // 受控状态下用户点击 clear
            e!.stopPropagation();
            this.onValueChange(null);
        }
    };

    onInputBlur = () => {
        const { inputStr } = this.state;
        if (inputStr) {
            const { format } = this.props;
            const parsed = moment(inputStr, format, true);
            if (parsed.isValid()) {
                this.setState({
                    value: parsed,
                    inputStr: '',
                });
                this.onValueChange(parsed);
            }
            this.setState({
                inputing: false,
            });
        }
    };

    onKeyown = (e: KeyboardEvent<HTMLInputElement>) => {
        const { value, inputStr } = this.state;
        const {
            format,
            hourStep = 1,
            minuteStep = 1,
            secondStep = 1,
            disabledMinutes,
            disabledSeconds,
        } = this.props;

        let unit: 'hour' | 'minute' | 'second' = 'second';

        if (disabledSeconds) {
            unit = disabledMinutes ? 'hour' : 'minute';
        }
        const timeStr = onTimeKeydown(
            e,
            {
                format,
                timeInputStr: inputStr,
                steps: {
                    hour: hourStep,
                    minute: minuteStep,
                    second: secondStep,
                },
                value,
            },
            unit
        );

        if (!timeStr) return;

        this.onInputChange(timeStr);
    };

    onTimePanelSelect = (value: Moment) => {
        if (!('value' in this.props)) {
            this.setState({
                value,
                inputing: false,
            });
        }
        if (!this.state.value || value.valueOf() !== this.state.value.valueOf()) {
            this.onValueChange(value);
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
            label,
            state,
            placeholder,
            size,
            format,
            hasClear,
            hourStep,
            minuteStep,
            secondStep,
            disabledHours,
            disabledMinutes,
            disabledSeconds,
            renderTimeMenuItems,
            inputProps,
            popupAlign,
            popupTriggerType,
            popupContainer,
            popupStyle,
            popupClassName,
            popupProps,
            popupComponent,
            popupContent,
            followTrigger,
            disabled,
            className,
            locale,
            rtl,
            isPreview,
            ...others
        } = this.props;

        const { value, inputStr, inputing, visible } = this.state;

        const triggerCls = classnames({
            [`${prefix}time-picker-trigger`]: true,
        });

        if (rtl) {
            others.dir = 'rtl';
        }

        if (isPreview) {
            // @ts-expect-error TimePicker 上没有 PropTypes，应该是 propTypes
            return this.renderPreview(obj.pickOthers(others, TimePicker.PropTypes));
        }

        const inputValue = inputing ? inputStr : (value && value.format(format)) || '';
        const sharedInputProps: InputProps = {
            ...inputProps,
            size,
            disabled,
            value: inputValue,
            // @ts-expect-error value 应该先做 bool 转化
            hasClear: value && hasClear,
            onChange: this.onInputChange,
            onBlur: this.onInputBlur,
            onPressEnter: this.onInputBlur,
            onKeyDown: this.onKeyown,
            hint: <Icon type="clock" className={`${prefix}time-picker-symbol-clock-icon`} />,
        };

        const triggerInput = (
            <div className={triggerCls}>
                <Input
                    {...sharedInputProps}
                    label={label}
                    state={state}
                    placeholder={placeholder || locale.placeholder}
                    className={`${prefix}time-picker-input`}
                />
            </div>
        );

        const panelProps = {
            prefix,
            locale,
            value,
            disabled,
            showHour: format.indexOf('H') > -1,
            showSecond: format.indexOf('s') > -1,
            showMinute: format.indexOf('m') > -1,
            hourStep,
            minuteStep,
            secondStep,
            disabledHours,
            disabledMinutes,
            disabledSeconds,
            renderTimeMenuItems,
            onSelect: this.onTimePanelSelect,
        };

        const classNames = classnames(
            {
                [`${prefix}time-picker`]: true,
                [`${prefix}time-picker-${size}`]: size,
                [`${prefix}disabled`]: disabled,
            },
            className
        );

        const PopupComponent = popupComponent ? popupComponent : Popup;

        return (
            <div {...obj.pickOthers(TimePicker.propTypes, others)} className={classNames}>
                <PopupComponent
                    autoFocus
                    align={popupAlign}
                    {...popupProps}
                    followTrigger={followTrigger}
                    visible={visible}
                    onVisibleChange={this.onVisibleChange}
                    trigger={triggerInput}
                    container={popupContainer}
                    disabled={disabled}
                    triggerType={popupTriggerType}
                    style={popupStyle}
                    className={popupClassName}
                >
                    {popupContent ? (
                        popupContent
                    ) : (
                        <div dir={others.dir} className={`${prefix}time-picker-body`}>
                            <div className={`${prefix}time-picker-panel-header`}>
                                <Input
                                    {...sharedInputProps}
                                    placeholder={format}
                                    className={`${prefix}time-picker-panel-input`}
                                />
                            </div>
                            <TimePickerPanel {...panelProps} />
                        </div>
                    )}
                </PopupComponent>
            </div>
        );
    }
}

export default polyfill(TimePicker);
