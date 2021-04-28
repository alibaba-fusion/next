import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import * as PT from 'prop-types';

import SharedPT from './prop-types';
import defaultLocale from '../locale/zh-cn';
import { func, datejs, KEYCODE, obj } from '../util';
import { switchInputType } from './util';
import { DATE_PICKER_TYPE, DATE_INPUT_TYPE, DATE_PICKER_MODE } from './constant';

import Overlay from '../overlay';
import DateInput from './panels/date-input';
import DatePanel from './panels/date-panel';
import RangePanel from './panels/range-panel';
import FooterPanel from './panels/footer-panel';

const { Popup } = Overlay;
const { renderNode } = func;
const { pickProps, pickOthers } = obj;

function isValueChanged(newValue, oldValue) {
    return Array.isArray(newValue)
        ? isValueChanged(newValue[0], oldValue && oldValue[0]) || isValueChanged(newValue[1], oldValue && oldValue[1])
        : newValue !== oldValue && !datejs(newValue).isSame(oldValue);
}

// 返回日期字符串
function getInputValue(value, fmt) {
    const formater = (v, idx) => {
        if (Array.isArray(fmt)) {
            fmt = fmt[idx];
        }
        return v ? (typeof fmt === 'function' ? fmt(v) : v.format(fmt)) : '';
    };

    return Array.isArray(value) ? value.map((v, idx) => formater(v, idx)) : formater(value);
}

// 无效值转为 null
// undefined 值表示当前时间
function checkDate(value) {
    // 因为datejs(undefined) === datejs()
    // 但是这里期望的是一个空值
    if (value === undefined) {
        value = null;
    }
    value = datejs(value);
    return value.isValid() ? value : null;
}

function checkRangeDate(value, inputType, disabled, strictly = true) {
    const [begin, end] = Array.isArray(value) ? [0, 1].map(i => checkDate(value[i])) : [null, null];
    const _disabled = Array.isArray(disabled) ? disabled : [disabled, disabled];

    // 严格模式下
    // 如果开始时间在结束时间之后 清空另一个时间
    // 如果另一个时间处于禁用状态 清除当前时间
    if (strictly && begin && end && begin.isAfter(end)) {
        return inputType === DATE_INPUT_TYPE.BEGIN && !_disabled[1] ? [begin, null] : [null, end];
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
        format: SharedPT.format,
        label: PT.node,
        separator: PT.node,

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
            value,
            inputValue: getInputValue(value, format),
            curValue: value, // 当前状态值
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

        if ('value' in props) {
            const value = isRange ? checkRangeDate(props.value, state.inputType, disabled) : checkDate(props.value);

            if (isValueChanged(value, state.value)) {
                newState = {
                    ...newState,
                    value,
                    curValue: value,
                    inputValue: getInputValue(value, format),
                };
            }
        }

        return newState;
    }

    componentWillUnmount() {
        [this.clearTimeoutId, this.timeoutId].forEach(id => id && clearTimeout(id));
    }

    getInitValue = () => {
        const { props } = this;
        const { type, value, defaultValue } = props;

        let val = type === DATE_PICKER_TYPE.RANGE ? [null, null] : null;

        val = 'value' in props ? value : 'defaultValue' in props ? defaultValue : val;

        return this.checkValue(val);
    };

    getInitRangeInputState = () => {
        return {
            justBeginInput: this.isEnabled(),
            inputType: this.isEnabled(0) ? DATE_INPUT_TYPE.BEGIN : DATE_INPUT_TYPE.END,
        };
    };

    // 判断弹层是否显示
    handleVisibleChange = (visible, type) => {
        if (type === 'docClick') {
            visible || this.handleChange(this.state.curValue, 'VISIBLE_CHANGE');

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
                this.timeoutId = setTimeout(callback, 150);
            }

            func.invoke(this.props, 'onVisibleChange', [visible]);
        }
    }

    handleInput = (v, eventType) => {
        if (eventType === 'clear') {
            this.handleChange(v, 'INPUT_CLEAR');
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
        // 清空输入之后 input组件内部会让第二个输入框获得焦点
        // 所以这里需要设置setTimeout才能让第一个input获得焦点
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

    isEnabled = idx => {
        const { disabled } = this.props;

        return Array.isArray(disabled)
            ? idx === undefined
                ? !disabled[0] && !disabled[1]
                : !disabled[idx]
            : !disabled;
    };

    handleChange = (v, eventType) => {
        const { format } = this.props;
        const { isRange, showOk, value } = this.state;
        const forceEvents = ['KEYDOWN_ENTER', 'CLICK_OK', 'CLICK_PRESET', 'INPUT_CLEAR'];

        // 在显示确认按键且关闭弹层的时候 将当前值设置回确认值
        // 在有确认按键的时候 需要点击确认值才生效
        if (showOk && eventType === 'VISIBLE_CHANGE') {
            v = value;
        } else {
            // 在显示确认按键
            v = this.checkValue(v, !showOk || forceEvents.includes(eventType));
        }

        this.setState({
            curValue: v,
            inputValue: getInputValue(v, format),
        });

        if (!showOk || forceEvents.includes(eventType)) {
            if (isRange) {
                if (eventType === 'INPUT_CLEAR') {
                    this.handleClear();
                } else if (!['VISIBLE_CHANGE', 'CLICK_PRESET'].includes(eventType) && this.shouldSwitchInput(v)) {
                    return;
                }
            }
            this.onChange(v);
        }
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

    onChange = v => {
        const { value } = this.state;
        const { format } = this.props;

        if (isValueChanged(v, value)) {
            // 受控
            if ('value' in this.props) {
                this.setState({
                    curValue: value,
                    inputValue: getInputValue(value, format),
                });
            } else {
                v = this.checkValue(v);

                this.setState({
                    value: v,
                    curValue: v,
                    inputValue: getInputValue(v, format),
                });
            }

            func.invoke(this.props, 'onChange', [v, getInputValue(v, format)]);
        }

        this.onVisibleChange(false);
    };

    onOk = () => {
        const { inputValue } = this.state;

        const result = func.invoke(this.props, 'onOk', [this.checkValue(inputValue), inputValue]);

        result !== false && this.handleChange(inputValue, 'CLICK_OK');
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
        const oKable = !!(isRange ? curValue && curValue[inputType] : curValue);
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
