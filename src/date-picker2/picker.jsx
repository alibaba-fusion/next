import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import * as PT from 'prop-types';

import SharedPT from './prop-types';
import defaultLocale from '../locale/zh-cn';
import { func, datejs, KEYCODE, obj } from '../util';
import { switchInputType, fmtValue, isValueChanged } from './util';
import { DATE_PICKER_TYPE, DATE_INPUT_TYPE, DATE_PICKER_MODE } from './constant';

import Overlay from '../overlay';
import DateInput from './panels/date-input';
import DatePanel from './panels/date-panel';
import RangePanel from './panels/range-panel';
import FooterPanel from './panels/footer-panel';

const { Popup } = Overlay;
const { renderNode } = func;
const { pickProps, pickOthers } = obj;

/**
 * 日期检验：无效值返回 null
 * @param {dayjs.ConfigType} value
 * @returns {Dayjs | null}
 */
function checkDate(value) {
    /**
     * 因为 datejs(undefined) 表示当前时间
     * 但是这里期望的是一个空值，即用户不输入值的时候显示为空
     */
    if (value === undefined) {
        value = null;
    }

    value = datejs(value);
    return value.isValid() ? value : null;
}

/**
 * Range 日期检验
 * @param {dayjs.ConfigType[]} value 日期值
 * @param {number} inputType 输入框类型：开始时间输入框/结束时间输入框
 * @param {boolean} disabled 是否禁用
 * @param {boolean} strictly 是否严格校验：严格模式下不允许开始时间大于结束时间，在显示确认按键的，用户输入过程可不严格校验
 * @returns {Dayjs[] | null[]}
 */
function checkRangeDate(value, inputType, disabled, strictly = true) {
    const [begin, end] = Array.isArray(value) ? [0, 1].map(i => checkDate(value[i])) : [null, null];
    const [disabledBegin, disabledEnd] = Array.isArray(disabled) ? disabled : [disabled, disabled];

    /**
     * 需要清除其中一个时间，优先清除结束时间，下面情况清除开始时间：
     * 1. 结束时间被 disabled 而开始时间没有被 disabled
     * 2. 开始时间和结束时间都没被 disabled 且当前正在输入是结束时间
     */
    if (strictly && begin && end && begin.isAfter(end)) {
        if (
            (!disabledBegin && disabledEnd) ||
            (!disabledBegin && !disabledBegin && inputType === DATE_INPUT_TYPE.END)
        ) {
            return [null, end];
        }

        return [begin, null];
    }

    return [begin, end];
}

class Picker extends React.Component {
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
         *  - function 类型：((date: Dayjs, dateStr: string) => any)
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
        locale: defaultLocale.DatePicker,
        defaultVisible: false,
        type: DATE_PICKER_TYPE.DATE,
        mode: DATE_PICKER_MODE.DATE,
        format: 'YYYY-MM-DD',
    };

    constructor(props) {
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
    }

    static getDerivedStateFromProps(props, state) {
        const { type, showTime, showOk, disabled, format } = props;
        const isRange = type === DATE_PICKER_TYPE.RANGE;

        let newState = {
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

            if (_disabled[inputType]) {
                const otherType = switchInputType(state.inputType);

                if (!_disabled[otherType]) {
                    inputType = otherType;
                }
            }

            newState.inputType = inputType;
        }

        if ('value' in props) {
            const value = isRange ? checkRangeDate(props.value, state.inputType, disabled) : checkDate(props.value);

            if (isValueChanged(value, state.preValue)) {
                newState = {
                    ...newState,
                    value,
                    curValue: value,
                    preValue: value,
                    inputValue: fmtValue(value, format),
                };
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
        const { type, value, defaultValue } = props;

        let val = type === DATE_PICKER_TYPE.RANGE ? [null, null] : null;

        val = 'value' in props ? value : 'defaultValue' in props ? defaultValue : val;

        return this.checkValue(val);
    };

    /**
     * 获取 RangePicker 输入框初始输入状态
     * @returns {Object} inputState
     * @returns {boolean} inputState.justBeginInput 是否初始输入
     * @returns {number} inputState.inputType 当前输入框
     */
    getInitRangeInputState = () => {
        return {
            justBeginInput: this.isEnabled(),
            inputType: this.isEnabled(0) ? DATE_INPUT_TYPE.BEGIN : DATE_INPUT_TYPE.END,
        };
    };

    /**
     * 处理点击文档区域导致的弹层收起逻辑
     * @param {boolean} visible 是否可见
     * @param {string} type 事件类型
     */
    handleVisibleChange = (visible, type) => {
        if (type === 'docClick') {
            // 弹层收起 触发 Change 逻辑
            if (!visible) {
                this.handleChange(this.state.curValue, 'VISIBLE_CHANGE');
            }
            this.onVisibleChange(visible);
        }
    };

    checkValue = (value, strictly) => {
        return this.props.type === DATE_PICKER_TYPE.RANGE
            ? checkRangeDate(value, this.state.inputType, this.props.disabled, strictly)
            : checkDate(value);
    };

    handleInputFocus = inputType => {
        let inputEl = this.dateInput && this.dateInput.input;

        if (this.state.isRange) {
            inputEl = inputEl && inputEl[inputType];
        }

        inputEl && inputEl.focus();
    };

    handleMouseDown = e => {
        e.preventDefault();
    };

    onVisibleChange(visible) {
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
                this.timeoutId = setTimeout(callback, 0);
            }

            func.invoke(this.props, 'onVisibleChange', [visible]);
        }
    }

    handleInput = (v, eventType) => {
        if (eventType === 'clear') {
            this.handleChange(v, 'INPUT_CLEAR');

            if (this.state.isRange) {
                this.handleClear();
            }
        } else {
            this.setState({
                inputValue: v,
                visible: true,
            });
        }
    };

    onPanelChange = (value, mode) => {
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
        this.clearTimeoutId = setTimeout(() => {
            this.handleInputFocus(0);
        });

        this.setState({
            inputType: DATE_INPUT_TYPE.BEGIN,
            justBeginInput: this.isEnabled(),
        });
    };

    shouldSwitchInput = value => {
        const { inputType, justBeginInput } = this.state;
        const idx = justBeginInput ? switchInputType(inputType) : value.indexOf(null);

        if (idx !== -1 && this.isEnabled(idx)) {
            this.onInputTypeChange(idx);
            this.handleInputFocus(idx);
            return true;
        }

        return false;
    };

    /**
     * 获取输入框的禁用状态
     * @param {Number} idx
     * @returns {Boolean}
     */
    isEnabled = idx => {
        const { disabled } = this.props;

        return Array.isArray(disabled)
            ? idx === undefined
                ? !disabled[0] && !disabled[1]
                : !disabled[idx]
            : !disabled;
    };

    onKeyDown = e => {
        switch (e.keyCode) {
            case KEYCODE.ENTER: {
                const { inputValue } = this.state;
                this.onClick();
                this.handleChange(inputValue, 'KEYDOWN_ENTER');
                break;
            }
            default:
                return;
        }
    };

    handleChange = (v, eventType) => {
        const { format } = this.props;
        const { isRange, showOk, value, preValue } = this.state;
        const forceEvents = ['KEYDOWN_ENTER', 'CLICK_PRESET', 'CLICK_OK', 'INPUT_CLEAR', 'VISIBLE_CHANGE'];
        const isTemporary = showOk && !forceEvents.includes(eventType);

        // 面板收起时候，将值设置为确认值
        v = eventType === 'VISIBLE_CHANGE' ? value : this.checkValue(v, !isTemporary);

        this.setState({
            curValue: v,
            inputValue: fmtValue(v, format),
        });

        if (!isTemporary) {
            this.setState(
                {
                    value: v,
                },
                () => {
                    // 判断当前选择结束，收起面板：
                    // 1. 非 Range 选择
                    // 2. 非 选择预设时间、面板收起、清空输入 操作
                    // 3. 不需要切换输入框
                    const shouldHidePanel =
                        !isRange ||
                        ['CLICK_PRESET', 'VISIBLE_CHANGE', 'INPUT_CLEAR'].includes(eventType) ||
                        !this.shouldSwitchInput(v);

                    if (shouldHidePanel) {
                        this.onVisibleChange(false);

                        if (isValueChanged(v, preValue)) {
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

        func.invoke(this.props, 'onChange', this.getOutputArgs(state.value));
    };

    onOk = () => {
        const { inputValue } = this.state;
        const checkedValue = this.checkValue(inputValue);

        func.invoke(this.props, 'onOk', this.getOutputArgs(checkedValue));

        this.setState({ value: checkedValue });
        this.handleChange(checkedValue, 'CLICK_OK');
    };

    onInputTypeChange = idx => {
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
            this.onVisibleChange(true);
            this.handleInputFocus(inputType);
        }
    };

    /**
     * 获取 `onChange` 和 `onOk` 方法的输出参数
     * @param {Dayjs} value
     * @returns 默认返回 `Dayjs` 实例和 `format` 格式化的值
     *          如果传了了 `outputFormat` 属性则返回 `outputFormat` 格式化的值
     */
    getOutputArgs = value => {
        const { outputFormat, format } = this.props;

        if (outputFormat) {
            return [fmtValue(value, outputFormat)];
        }
        return [value, fmtValue(value, format)];
    };

    getCurrentAlign = ({ align }) => {
        this.setState({
            align,
        });
    };

    renderArrow = () => {
        const left =
            this.dateInput &&
            this.dateInput.input &&
            this.dateInput.input[this.state.inputType] &&
            this.dateInput.input[this.state.inputType].getInputNode().offsetLeft;

        return <div key="arrow" className={`${this.props.prefix}range-picker2-arrow`} style={{ left }} />;
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

        // 预览态
        if (isPreview) {
            const previewCls = classnames(className, `${prefix}form-preview`);

            return (
                <div className={previewCls}>
                    {renderNode(renderPreview, isRange ? inputValue.join('-') : inputValue, [curValue, this.props])}
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
            ref: el => (this.dateInput = el),
        };

        // 禁用状态下 不允许清空
        if (!this.isEnabled()) {
            inputProps.hasClear = false;
        }

        const triggerNode = renderNode(trigger, <DateInput {...inputProps} />);

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
            <RangePanel justBeginInput={justBeginInput} {...panelProps} />
        ) : (
            <DatePanel {...panelProps} />
        );

        // 底部节点
        const oKable = !!(isRange ? inputValue && inputValue[inputType] : inputValue);
        const shouldShowFooter = showOk || preset || extraFooterRender;

        const footerNode = shouldShowFooter ? (
            <FooterPanel
                oKable={oKable}
                onOk={onOk}
                showOk={showOk}
                onChange={handleChange}
                preset={preset}
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
        const PopupComp = popupComponent || Popup;

        return (
            <div
                {...pickOthers(Picker.propTypes, restProps)}
                dir={rtl ? 'rtl' : undefined}
                className={classnames(className, prefixCls)}
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
                    trigger={
                        <div {...triggerProps} role="button" tabIndex="0" style={this.props.style}>
                            {triggerNode}
                        </div>
                    }
                    onPosition={this.getCurrentAlign}
                    {...popupProps}
                    className={popupCls}
                >
                    {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                    <div onMouseDown={handleMouseDown}>
                        <div dir={rtl ? 'rtl' : undefined} className={`${prefixCls}-wrapper`}>
                            {isRange ? this.renderArrow() : null}
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
