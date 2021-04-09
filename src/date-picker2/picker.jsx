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

function checkAndRectify(value, isRange) {
    const check = v => {
        // 因为datejs(undefined) === datejs()
        // 但是这里期望的是一个空值
        if (v === undefined) {
            v = null;
        }
        v = datejs(v);
        return v.isValid() ? v : null;
    };

    if (isRange) {
        const [begin, end] = Array.isArray(value) ? [0, 1].map(i => check(value[i])) : [null, null];

        if (begin && end && begin.isAfter(end)) {
            return [null, null];
        }

        return [begin, end];
    } else {
        return check(value);
    }
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
        type: DATE_PICKER_TYPE.DATE,
        mode: DATE_PICKER_MODE.DATE,
        format: 'YYYY-MM-DD',
    };

    constructor(props) {
        super(props);

        this.prefixCls = `${props.prefix}date-picker2`;

        const isRange = props.type === DATE_PICKER_TYPE.RANGE;
        const value = checkAndRectify(
            'value' in props
                ? props.value
                : 'defaultValue' in props
                ? props.defaultValue
                : isRange
                ? [null, null]
                : null,
            isRange
        );

        this.state = {
            value,
            curValue: value, // 当前输入中的值
            inputValue: getInputValue(value, props.format),
            visible: 'defaultVisible' in props ? props.defaultVisible : false,
            inputType: DATE_INPUT_TYPE.BEGIN,
            justBeginInput: true,
            panelMode: props.mode,
        };
    }

    static getDerivedStateFromProps(props, state) {
        const isRange = props.type === DATE_PICKER_TYPE.RANGE;
        let newState = { isRange, showOk: !!(props.showOk || props.showTime) };

        if ('value' in props) {
            const value = checkAndRectify(props.value, isRange);

            if (isValueChanged(value, state.value)) {
                newState = {
                    ...newState,
                    value,
                    curValue: value,
                    inputValue: getInputValue(value, props.format),
                };
            }
        }

        return newState;
    }

    componentWillUnmount() {
        [this.clearTimeoutId, this.timeoutId].forEach(id => id && clearTimeout(id));
    }

    // 判断弹层是否显示
    handleVisibleChange = (visible, type) => {
        if (type === 'docClick') {
            visible || this.handleChange(this.state.curValue, 'VISIBLE_CHANGE');

            this.onVisibleChange(visible);
        }
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
                    justBeginInput: true,
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

    // 清空输入之后 input组件内部会让第二个输入框获得焦点
    // 所以这里需要设置setTimeout才能让第一个input获得焦点
    handleClear = () => {
        this.clearTimeoutId = setTimeout(() => {
            this.handleInputFocus(0);
        });

        this.setState({
            inputType: DATE_INPUT_TYPE.BEGIN,
        });
    };

    maySwitchInput = value => {
        const { inputType, justBeginInput } = this.state;
        let idx = value.indexOf(null);

        if (idx === -1 && justBeginInput) {
            idx = switchInputType(inputType);
        }
        if (idx !== -1) {
            this.onInputTypeChange(idx);
            this.handleInputFocus(idx);
            return true;
        }

        return false;
    };

    handleChange = (v, eventType) => {
        const { isRange, showOk } = this.state;
        v = checkAndRectify(v, isRange);

        this.setState({
            curValue: v,
            inputValue: getInputValue(v, this.props.format),
        });

        if (
            !showOk ||
            ['KEYDOWN_ENTER', 'CLICK_OK', 'CLICK_PRESET', 'VISIBLE_CHANGE', 'INPUT_CLEAR'].includes(eventType)
        ) {
            if (isRange) {
                if (eventType === 'INPUT_CLEAR') {
                    this.handleClear();
                } else if (!['VISIBLE_CHANGE', 'CLICK_PRESET'].includes(eventType) && this.maySwitchInput(v)) {
                    return;
                }

                if (v.some(o => !o)) {
                    v = [null, null];
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
            } else if (!('value' in this.props)) {
                this.setState({
                    value: v,
                });
            }
            func.invoke(this.props, 'onChange', [v, getInputValue(v, format)]);
        }
        this.onVisibleChange(false);
    };

    onOk = () => {
        const { inputValue, isRange } = this.state;

        const result = func.invoke(this.props, 'onOk', [checkAndRectify(inputValue, isRange), inputValue]);

        result !== false && this.handleChange(inputValue, 'CLICK_OK');
    };

    onInputTypeChange = v => {
        const { inputType, visible } = this.state;

        if (v !== inputType) {
            this.setState({
                inputType: v,
                justBeginInput: !(v !== null && visible),
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
            isRange,
            disabled,
            placeholder,
            focus: visible,
            onInputTypeChange,
            onInput: handleInput,
            readOnly: inputReadOnly,
            inputProps: this.props.inputProps,
            ref: el => (this.dateInput = el),
        };

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
