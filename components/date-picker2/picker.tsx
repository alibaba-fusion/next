import React, { type RefObject, type MouseEvent, type KeyboardEvent } from 'react';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import PT from 'prop-types';
import { type Dayjs } from 'dayjs';

import SharedPT from './prop-types';
import defaultLocale from '../locale/zh-cn';
import { func, KEYCODE, obj } from '../util';
import { switchInputType, fmtValue, isValueChanged } from './util';
import { DATE_PICKER_TYPE, DATE_INPUT_TYPE, DATE_PICKER_MODE } from './constant';

import type Input from '../input';
import Overlay, { type PopupProps } from '../overlay';
import DateInput from './panels/date-input';
import DatePanel from './panels/date-panel';
import RangePanel from './panels/range-panel';
import FooterPanel from './panels/footer-panel';
import type {
    DatePickerProps,
    DatePickerState,
    ModeType,
    DatePanelProps,
    RangePanelProps,
    InputNode,
} from './types';
import { getValueWithDayjs } from '../util/func';

const { Popup } = Overlay;
const { pickProps, pickOthers } = obj;
const { renderNode, checkDate, checkRangeDate } = func;

class Picker extends React.Component<DatePickerProps, DatePickerState> {
    static displayName = 'Picker';
    static propTypes = {
        rtl: PT.bool,
        prefix: PT.string,
        locale: PT.object,
        name: PT.string,

        // calendar
        mode: SharedPT.mode,
        type: SharedPT.type,
        value: SharedPT.value,
        defaultValue: SharedPT.value,
        defaultPanelValue: SharedPT.date,
        disabledDate: PT.func,
        visible: PT.bool,
        defaultVisible: PT.bool,
        dateCellRender: PT.func,

        // event
        onOk: PT.func,
        onChange: PT.func,
        onVisibleChange: PT.func,
        onPanelChange: PT.func,
        onCalendarChange: PT.func,

        // time
        showTime: PT.bool,
        resetTime: PT.bool,
        timePanelProps: PT.object,
        disabledTime: PT.object,

        // header
        titleRender: PT.func,

        // footer
        preset: PT.oneOfType([PT.array, PT.object]),
        extraFooterRender: SharedPT.render,
        showOk: PT.bool,

        // input
        trigger: SharedPT.render,
        hasBorder: PT.bool,
        inputProps: PT.object,
        hasClear: PT.bool,
        placeholder: SharedPT.placeholder,
        disabled: SharedPT.disabled,
        inputReadOnly: SharedPT.readOnly,
        /**
         * 日期显示格式
         */
        format: SharedPT.format,
        label: PT.node,
        separator: PT.node,
        /**
         * 输出格式：控制 onChange、onOk 事件的输出值格式
         *  - string 类型：根据时间格式进行转换
         *  - function 类型：((date: Dayjs, dateStr: string) =\> any)
         *
         * @version 1.23
         */
        outputFormat: SharedPT.format,

        // popup
        followTrigger: PT.bool,
        popupTriggerType: PT.oneOf(['click', 'hover']),
        popupAlign: PT.string,
        popupContainer: PT.any,
        popupStyle: PT.object,
        popupClassName: PT.string,
        popupComponent: PT.elementType,
        popupProps: PT.object,

        // preview
        isPreview: PT.bool,
        renderPreview: PT.func,

        // ariaLabel
        dateInputAriaLabel: SharedPT.ariaLabel,
    };

    static defaultProps = {
        rtl: false,
        prefix: 'next-',
        popupTriggerType: 'click',
        locale: defaultLocale.DatePicker,
        defaultVisible: false,
        type: DATE_PICKER_TYPE.DATE,
        mode: DATE_PICKER_MODE.DATE,
        format: 'YYYY-MM-DD',
    };

    popupRef: RefObject<HTMLDivElement>;
    prefixCls: string;
    clearTimeoutId: number;
    timeoutId: number | null;
    dateInput: InstanceType<typeof DateInput>;

    constructor(props: DatePickerProps) {
        super(props);

        const { prefix, type, format, mode, defaultVisible } = props;

        this.state = {
            panelMode: mode,
            visible: defaultVisible,
        };

        if (type === DATE_PICKER_TYPE.RANGE) {
            const { inputType, justBeginInput } = this.getInitRangeInputState();

            this.state = {
                inputType,
                justBeginInput,
                ...this.state,
            };
        }

        const value = this.getInitValue();

        this.state = {
            value, // 确定值
            curValue: value, // 临时值
            preValue: value, // 上个值
            inputValue: fmtValue(value, format),
            ...this.state,
        };

        this.prefixCls = `${prefix}date-picker2`;

        this.popupRef = React.createRef();
    }

    static getDerivedStateFromProps(props: DatePickerProps, state: DatePickerState) {
        const { type, showTime, showOk, disabled, format, mode } = props;
        const isRange = type === DATE_PICKER_TYPE.RANGE;

        let newState: Partial<DatePickerState> = {
            isRange,
            showOk: !!(showOk || showTime),
        };

        /**
         * 如果当前输入框可能被 disabled
         * 且另一个输入框非 disabled 则切换到另一个输入框
         */
        if (isRange) {
            let { inputType } = state;

            const _disabled = Array.isArray(disabled) ? disabled : [disabled, disabled];

            if (_disabled[inputType!]) {
                const otherType = switchInputType(state.inputType!);

                if (!_disabled[otherType]) {
                    inputType = otherType;
                }
            }

            newState.inputType = inputType;
        }

        if ('value' in props) {
            let value = getValueWithDayjs(props.value, format as string) as
                | Dayjs
                | [Dayjs | null, Dayjs | null]
                | null
                | undefined;

            value = isRange
                ? checkRangeDate(value, state.inputType!, disabled)
                : checkDate(value as Dayjs | null);

            if (isValueChanged(value, state.preValue!)) {
                newState = {
                    ...newState,
                    value,
                    curValue: value,
                    preValue: value,
                    inputValue: fmtValue(value, format),
                };
            }

            if ('mode' in props) {
                if (mode !== state.panelMode) {
                    newState = {
                        ...newState,
                        panelMode: mode,
                        inputValue: fmtValue(value, format),
                    };
                }
            }

            if ('showTime' in props) {
                if (showTime !== state.showTime) {
                    newState = {
                        ...newState,
                        showTime: !!showTime,
                        inputValue: fmtValue(value, format),
                    };
                }
            }
        }

        return newState;
    }

    componentWillUnmount() {
        [this.clearTimeoutId, this.timeoutId].forEach(id => id && clearTimeout(id));
    }

    /**
     * 获取初始值
     */
    getInitValue = () => {
        const { props } = this;
        const { type, value, defaultValue, format } = props;

        let val: DatePickerProps['value'] = type === DATE_PICKER_TYPE.RANGE ? [null, null] : null;

        val = 'value' in props ? value! : 'defaultValue' in props ? defaultValue! : val;

        val = getValueWithDayjs(val, format as string);

        return this.checkValue(val);
    };

    /**
     * 获取 RangePicker 输入框初始输入状态
     * @returns inputState -Object
     * @returns inputState.justBeginInput -boolean 是否初始输入
     * @returns inputState.inputType -number 当前输入框
     */
    getInitRangeInputState = () => {
        return {
            justBeginInput: this.isEnabled(),
            inputType: this.isEnabled(0) ? DATE_INPUT_TYPE.BEGIN : DATE_INPUT_TYPE.END,
        };
    };

    /**
     * 处理点击文档区域导致的弹层收起逻辑
     * @param visible -boolean 是否可见
     * @param type -string 事件类型
     */
    handleVisibleChange = (visible: boolean, targetType: string) => {
        if (['docClick', 'fromTrigger'].indexOf(targetType) > -1) {
            // 弹层收起 触发 Change 逻辑
            if (!visible) {
                this.handleChange(this.state.curValue!, 'VISIBLE_CHANGE');
            }
            this.onVisibleChange(visible);
        }
    };

    checkValue = (
        value: DatePickerProps['value'],
        strictly?: boolean,
        format?: string | ((value: Dayjs) => string)
    ) => {
        return this.props.type === DATE_PICKER_TYPE.RANGE
            ? checkRangeDate(
                  value,
                  this.state.inputType!,
                  this.props.disabled,
                  strictly,
                  format as string
              )
            : checkDate(value as Dayjs | string | null, format as string);
    };

    handleInputFocus = (inputType: number) => {
        let inputEl = this.dateInput && this.dateInput.input;

        if (this.state.isRange) {
            inputEl = inputEl && (inputEl as InstanceType<typeof Input>[])[inputType];
        }

        inputEl && (inputEl as InstanceType<typeof Input>).focus();
    };

    handleMouseDown = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
    };

    onVisibleChange(visible: boolean) {
        if (visible !== this.state.visible) {
            const callback = () => {
                this.setState({
                    visible,
                    justBeginInput: this.isEnabled(),
                });
            };

            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
                this.timeoutId = null;
            }

            if (visible) {
                callback();
            } else {
                this.timeoutId = window.setTimeout(callback, 0);
            }

            func.invoke(this.props, 'onVisibleChange', [visible]);
        }
    }

    handleInput = (v: string, eventType: string) => {
        if (eventType === 'clear') {
            this.handleChange(v, 'INPUT_CLEAR');

            if (this.state.isRange) {
                this.handleClear();
            }
        } else {
            const newState: Partial<DatePickerState> = {
                inputValue: v,
                visible: true,
            };
            const curValue = this.checkValue(v, true, this.props.format);
            if (curValue !== null) {
                newState.curValue = curValue;
            }
            this.setState(newState);
        }
    };

    onPanelChange = (value: Dayjs | Dayjs[], mode: ModeType) => {
        this.setState({
            panelMode: mode,
        });
        func.invoke(this.props, 'onPanelChange', [value, mode]);
    };

    handleClear = () => {
        /**
         * 清空输入之后 input 组件内部会让第二个输入框获得焦点
         * 所以这里需要设置 setTimeout 才能让第一个 input 获得焦点
         */
        this.clearTimeoutId = window.setTimeout(() => {
            this.handleInputFocus(0);
        });

        this.setState({
            inputType: DATE_INPUT_TYPE.BEGIN,
            justBeginInput: this.isEnabled(),
        });

        this.onCalendarChange(null);
    };

    shouldSwitchInput = (value: (Dayjs | null)[]) => {
        const { inputType, justBeginInput } = this.state;
        const idx = justBeginInput ? switchInputType(inputType!) : value.indexOf(null);

        if (idx !== -1 && this.isEnabled(idx)) {
            this.onInputTypeChange(idx);
            this.handleInputFocus(idx);
            return true;
        }

        return false;
    };

    /**
     * 获取输入框的禁用状态
     * @param idx -number | undefined
     * @returns 是否可用状态-Boolean
     */
    isEnabled = (idx?: number) => {
        const { disabled } = this.props;

        return Array.isArray(disabled)
            ? idx === undefined
                ? !disabled[0] && !disabled[1]
                : !disabled[idx]
            : !disabled;
    };

    /**
     * check if value has disabled value
     *
     * @param val - string | string[] | Dayjs | Dayjs[]
     * @returns -boolean
     */
    checkValueDisabled = (val: string | string[] | Dayjs | Dayjs[]) => {
        const { disabledDate } = this.props;
        const { panelMode } = this.state;
        const values = (Array.isArray(val) ? val : [val]).map(value => {
            return checkDate(value);
        });

        if (!disabledDate) {
            return false;
        }

        const valuesFiltered = values.filter(value => !!value);

        if (!valuesFiltered.length) {
            return false;
        }

        return valuesFiltered.some(value => {
            return disabledDate(value!, panelMode!);
        });
    };

    onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        switch (e.keyCode) {
            case KEYCODE.ENTER: {
                const { inputValue } = this.state;
                this.onClick();
                if (this.checkValueDisabled(inputValue!)) {
                    // reset inputValue when current inputValue is disabled
                    this.handleChange(inputValue!, 'VISIBLE_CHANGE');
                    return;
                }
                this.handleChange(inputValue!, 'KEYDOWN_ENTER');
                break;
            }
            case KEYCODE.SPACE: {
                const { inputValue, isRange, inputType } = this.state;
                this.onClick();
                if (isRange) {
                    const updatedInputValue = [...inputValue!];
                    updatedInputValue[inputType!] = updatedInputValue[inputType!] + ' ';
                    this.setState({ inputValue: updatedInputValue });
                } else {
                    this.setState({
                        inputValue: inputValue + ' ',
                    });
                }
                break;
            }
            default:
                return;
        }
    };

    handleChange = (v: Dayjs | (Dayjs | null)[] | string | null | string[], eventType?: string) => {
        const { format } = this.props;
        const { isRange, showOk, value, preValue } = this.state;
        const forceEvents = [
            'KEYDOWN_ENTER',
            'CLICK_PRESET',
            'CLICK_OK',
            'INPUT_CLEAR',
            'VISIBLE_CHANGE',
        ];
        const isTemporary = showOk && !forceEvents.includes(eventType!);

        // 面板收起时候，将值设置为确认值
        v = eventType === 'VISIBLE_CHANGE' ? value! : this.checkValue(v, !isTemporary, format);

        this.setState({
            curValue: v as Dayjs | [Dayjs | null, Dayjs | null] | null,
            inputValue: fmtValue(v, format),
        });

        if (!isTemporary) {
            this.setState(
                {
                    value: v as Dayjs | [Dayjs | null, Dayjs | null] | null,
                },
                () => {
                    // 判断当前选择结束，收起面板：
                    // 1. 非 Range 选择
                    // 2. 非 选择预设时间、面板收起、清空输入 操作
                    // 3. 不需要切换输入框
                    const shouldHidePanel =
                        !isRange ||
                        ['CLICK_PRESET', 'VISIBLE_CHANGE', 'INPUT_CLEAR'].includes(eventType!) ||
                        !this.shouldSwitchInput(v as (Dayjs | null)[]);
                    if (shouldHidePanel) {
                        this.onVisibleChange(false);

                        if (isValueChanged(v, preValue!)) {
                            this.onChange();
                        }
                    }
                }
            );
        }
    };

    onChange = () => {
        const { state, props } = this;
        const { format } = props;

        const value = this.checkValue('value' in props ? props.value : state.value);

        this.setState({
            curValue: value,
            preValue: value,
            inputValue: fmtValue(value, format),
        });

        func.invoke(this.props, 'onChange', this.getOutputArgs(state.value!));
    };

    onCalendarChange = (values: Dayjs[] | null) => {
        const { format, onCalendarChange } = this.props;

        if (onCalendarChange) {
            const startValue = values && values[0];
            const endValue = values && values[1];
            const startStr = startValue ? fmtValue(values[0], format) : '';
            const endStr = endValue ? fmtValue(values[1], format) : '';

            onCalendarChange(values, [startStr as string, endStr as string]);
        }
    };

    onOk = () => {
        const { inputValue } = this.state;
        const checkedValue = this.checkValue(inputValue, true, this.props.format);

        func.invoke(this.props, 'onOk', this.getOutputArgs(checkedValue!));

        this.setState({ value: checkedValue });
        this.handleChange(checkedValue, 'CLICK_OK');
    };

    onInputTypeChange = (idx: number) => {
        const { inputType, visible } = this.state;

        if (idx !== inputType) {
            this.setState({
                inputType: idx,
                justBeginInput: !(idx !== null && visible),
            });
        }
    };

    onClick = () => {
        const { visible, inputType } = this.state;

        if (!visible) {
            this.handleInputFocus(inputType!);
        }
    };

    /**
     * 获取 `onChange` 和 `onOk` 方法的输出参数
     * @param value -Dayjs
     * @returns 默认返回 `Dayjs` 实例和 `format` 格式化的值
     *          如果传了了 `outputFormat` 属性则返回 `outputFormat` 格式化的值
     */
    getOutputArgs = (value: Dayjs | [Dayjs | null, Dayjs | null] | null) => {
        const { outputFormat, format } = this.props;

        if (outputFormat) {
            return [fmtValue(value, outputFormat)];
        }
        return [value, fmtValue(value, format)];
    };

    getCurrentAlign = ({ align }: { align: string[]; [prop: string]: unknown }) => {
        this.setState({
            align,
        });
    };

    getRangeInputOffsetLeft = (): number | undefined => {
        const left =
            this.dateInput &&
            this.dateInput.input &&
            (this.dateInput.input as InputNode[])[this.state.inputType!] &&
            (this.dateInput.input as InputNode[])[this.state.inputType!].getInputNode().offsetLeft;

        return left;
    };

    getPopupOffsetLeft = () => {
        const inputOffsetLeft = this.getRangeInputOffsetLeft();
        const popupElement = this.popupRef.current;
        const popupElementWidth = popupElement ? popupElement.offsetWidth : 0;

        // 弹层宽度大于输入元素长度，只偏移 arrow
        if (popupElementWidth > 1.2 * inputOffsetLeft!) {
            return {
                arrowLeft: inputOffsetLeft,
                panelLeft: 0,
            };
        } else {
            // 否则 panel 整体偏移，arrow 随 panel 整体偏移
            return {
                arrowLeft: 0,
                panelLeft: inputOffsetLeft,
            };
        }
    };

    renderArrow = (left: number) => {
        return (
            <div
                key="arrow"
                className={`${this.props.prefix}range-picker2-arrow`}
                style={{ left }}
            />
        );
    };

    render() {
        const {
            prefixCls,
            handleChange,
            handleMouseDown,
            handleVisibleChange,
            onOk,
            onClick,
            handleInput,
            onInputTypeChange,
            onPanelChange,
            onKeyDown,
            onCalendarChange,
        } = this;

        const {
            rtl,
            locale,
            prefix,
            inputReadOnly,
            showTime,
            preset,
            mode,
            format,
            trigger,
            disabledDate,
            extraFooterRender,
            timePanelProps,
            resetTime,
            placeholder,
            disabledTime,
            dateCellRender,
            disabled,
            isPreview,
            className,
            defaultPanelValue,
            renderPreview,
            label,
            ...restProps
        } = this.props;
        const { isRange, inputType, justBeginInput, panelMode, showOk, align } = this.state;
        const { inputValue, curValue } = this.state;

        const { arrowLeft, panelLeft } = this.getPopupOffsetLeft();

        // 预览态
        if (isPreview) {
            const previewCls = classnames(className, `${prefix}form-preview`);

            return (
                <div className={previewCls}>
                    {renderNode(
                        renderPreview,
                        isRange ? (inputValue as string[]).join('-') : inputValue,
                        [curValue, this.props]
                    )}
                </div>
            );
        }

        const visible = 'visible' in this.props ? this.props.visible : this.state.visible;
        const allDisabled = isRange && Array.isArray(disabled) ? disabled.every(v => v) : disabled;
        const sharedProps = {
            rtl,
            prefix,
            locale,
            mode,
            format,
            showTime,
            inputType,
        };

        // 输入框
        const inputProps = {
            ...pickProps(DateInput.propTypes, restProps),
            ...sharedProps,
            value: inputValue,
            label: label,
            isRange,
            disabled,
            placeholder,
            onInputTypeChange,
            focus: visible,
            onInput: handleInput,
            readOnly: inputReadOnly,
            inputProps: this.props.inputProps,
            ref: (el: InstanceType<typeof DateInput>) => (this.dateInput = el),
        };

        // 禁用状态下 不允许清空
        if (!this.isEnabled()) {
            inputProps.hasClear = false;
        }

        const triggerNode = renderNode(trigger, <DateInput {...inputProps} />, inputProps);

        // 日期
        const panelProps = {
            ...sharedProps,
            panelMode,
            value: curValue,
            disabledDate,
            onPanelChange,
            timePanelProps,
            disabledTime,
            resetTime,
            dateCellRender,
            defaultPanelValue,
            onSelect: handleChange,
        };

        const DateNode = isRange ? (
            <RangePanel
                justBeginInput={justBeginInput}
                onCalendarChange={onCalendarChange}
                {...(panelProps as RangePanelProps)}
            />
        ) : (
            <DatePanel {...(panelProps as DatePanelProps)} />
        );

        // 底部节点
        const oKable = !!(
            !this.checkValueDisabled(inputValue!) &&
            (isRange ? inputValue && inputValue[inputType!] : inputValue)
        );
        const shouldShowFooter = showOk || preset || extraFooterRender;

        const footerNode = shouldShowFooter ? (
            <FooterPanel
                oKable={oKable}
                onOk={onOk}
                showOk={showOk}
                onChange={handleChange}
                preset={preset}
                locale={locale}
                prefix={prefix}
                extraRender={extraFooterRender}
            />
        ) : null;

        let triggerProps;
        if (!allDisabled) {
            triggerProps = { onKeyDown, onClick };
        }

        // popup
        const {
            followTrigger,
            popupTriggerType,
            popupAlign,
            popupContainer,
            popupStyle,
            popupClassName,
            popupComponent,
            popupProps,
        } = this.props;

        const popupCls = classnames(popupClassName || (popupProps && popupProps.className), {
            [`${prefixCls}-overlay`]: true,
            [`${prefixCls}-${(align || []).join('-')}`]: align,
            [`${prefixCls}-overlay-range`]: isRange,
        });
        const PopupComp = (popupComponent || Popup) as React.ComponentType<PopupProps>;

        return (
            <div
                {...pickOthers(Picker.propTypes, restProps)}
                dir={rtl ? 'rtl' : undefined}
                className={classnames(className, prefixCls)}
                style={this.props.style}
            >
                <PopupComp
                    rtl={rtl}
                    key="date-picker-popup"
                    visible={visible}
                    align={popupAlign}
                    container={popupContainer}
                    followTrigger={followTrigger}
                    triggerType={popupTriggerType}
                    style={popupStyle}
                    onVisibleChange={handleVisibleChange}
                    disabled={allDisabled as boolean}
                    trigger={
                        <div {...triggerProps} role="button" tabIndex={0} style={{ width: '100%' }}>
                            {triggerNode}
                        </div>
                    }
                    onPosition={this.getCurrentAlign}
                    canCloseByTrigger={false}
                    {...popupProps}
                    className={popupCls}
                >
                    {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                    <div onMouseDown={handleMouseDown} style={{ marginLeft: panelLeft }}>
                        <div
                            dir={rtl ? 'rtl' : undefined}
                            className={`${prefixCls}-wrapper`}
                            ref={this.popupRef}
                        >
                            {isRange ? this.renderArrow(arrowLeft!) : null}
                            {DateNode}
                            {this.state.panelMode !== this.props.mode ? null : footerNode}
                        </div>
                    </div>
                </PopupComp>
            </div>
        );
    }
}

export default polyfill(Picker);
