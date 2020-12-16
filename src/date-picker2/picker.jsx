import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import * as PT from 'prop-types';

import SharedPT from './prop-types';
import defaultLocale from '../locale/zh-cn';
import { func, datejs, KEYCODE, obj } from '../util';
import { getFromPropOrState, switchInputType } from './util';
import { DATE_PICKER_TYPE, DATE_INPUT_TYPE, DATE_PICKER_MODE } from './constant';

import { Popup } from '../overlay';
import DateInput from './panels/date-input';
import DatePanel from './panels/date-panel';
import RangePanel from './panels/range-panel';
import FooterPanel from './panels/footer-panel';

const { renderNode } = func;
const { pickProps } = obj;

function isValueChanged(newValue, oldValue) {
    if (Array.isArray(newValue)) {
        return newValue.some(
            (val, idx) => val !== (oldValue && oldValue[idx]) && (val && !val.isSame(oldValue && oldValue[idx]))
        );
    } else {
        return newValue !== oldValue && (newValue && !newValue.isSame(oldValue));
    }
}

class Picker extends React.Component {
    static propTypes = {
        rtl: PT.bool,
        prefix: PT.string,
        locale: PT.object,

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
        triggerType: 'click',
    };

    constructor(props) {
        super(props);

        this.prefixCls = `${props.prefix}date-picker2`;

        const value = this.checkAndRectify(
            'value' in props
                ? props.value
                : 'defaultValue' in props
                ? props.defaultValue
                : props.type === DATE_PICKER_TYPE.RANGE
                ? [null, null]
                : null
        );

        if ('value' in props) {
            this.controlledValue = value;
        }

        this.state = {
            type: props.type,
            value,
            curValue: value, // 当前输入中的值
            inputValue: this.getInputValue(value),
            visible: 'defaultVisible' in props ? props.defaultVisible : false,
            inputType: DATE_PICKER_TYPE.BEGIN,
            justBeginInput: true,
            panelMode: props.mode,
        };

        this.getFromPropOrState = getFromPropOrState.bind(this);
    }

    static getDerivedStateFromProps(props) {
        // const isRange = props.type === DATE_PICKER_TYPE.RANGE;

        return {
            isRange: props.type === DATE_PICKER_TYPE.RANGE,
            showOk: !!(props.showOk || props.showTime),
        };

        // if ('value' in props && isValueChanged(props.value, state.value)) {
        //     const value = checkAndRectify(props.value, isRange);
        //     newState.curValue = value;
        //     newState.inputValue = getInputValue(value)
        // }
        // return newState;
    }

    componentWillUnmount() {
        this.timeoutId && clearTimeout(this.timeoutId);
    }

    // 返回日期字符串
    getInputValue = value => {
        return Array.isArray(value) ? value.map(v => this.formater(v)) : this.formater(value);
    };

    formater = v => {
        const { format, isRange, inputType } = this.props;
        let fmt = format;

        if (isRange && Array.isArray(fmt)) {
            fmt = fmt[inputType];
        }

        return v ? (typeof fmt === 'function' ? fmt(v) : v.format(fmt)) : '';
    };

    // 校验日期数据，范围选择模式下为数组 不合法的日期重置null值
    checkAndRectify = value => {
        const check = v => {
            // 因为datejs(undefined) === datejs() 但是这里期望的是一个空值
            if (v === undefined) {
                v = null;
            }
            v = datejs(v);
            return v.isValid() ? v : null;
        };

        if (this.props.type === DATE_PICKER_TYPE.RANGE) {
            const [begin, end] = Array.isArray(value) ? [0, 1].map(i => check(value[i])) : [null, null];

            if (begin && end && begin.isAfter(end)) {
                return [null, null];
            }

            return [begin, end];
        } else {
            return check(value);
        }
    };

    // 判断弹层是否显示
    handleVisibleChange = (visible, type) => {
        if (type === 'docClick') {
            if (!visible) {
                const { curValue, value } = this.state;
                isValueChanged(curValue, value) && this.handleChange(value, 'VISIBLE_CHANGE');
            }
            this.onVisibleChange(visible);
        }
    };

    handleInputFocus = (inputType = this.state.inputType) => {
        let input = this.dateInput && this.dateInput.input;

        if (input) {
            if (this.state.isRange) {
                input = input[inputType];
            }
            input && input.focus();
        }
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

            func.call(this.props, 'onVisibleChange', [visible]);
        }
    }

    handleInput = (v, eventType) => {
        this.setState({
            inputValue: v,
        });

        if (eventType === 'clear') {
            this.handleChange(v, true, true);

            if (this.state.isRange) {
                // 因为input组件内部会让第二个输入框获得焦点
                // 所以这里需要设置setTimeout才能让第一个input获得焦点
                this.timeoutId = setTimeout(() => {
                    this.handleInputFocus(0);
                });
            }
        }
    };

    onPanelChange = (_, mode) => {
        this.setState({
            panelMode: mode,
        });
    };

    handleChange = (v, eventType) => {
        const { value, isRange, inputType, justBeginInput, showOk } = this.state;
        v = this.checkAndRectify(v, value);

        this.setState({
            curValue: v,
            inputValue: this.getInputValue(v),
        });

        if (!showOk || ['KEYDOWN_ENTER', 'CLICK_OK', 'VISIBLE_CHANGE'].includes(eventType)) {
            let shouldChange = true;

            if (eventType !== 'VISIBLE_CHANGE' && isRange) {
                let idx = v.indexOf(null);

                if (idx === -1 && justBeginInput) {
                    idx = switchInputType(inputType);
                }

                if (idx !== -1) {
                    this.handleInputFocus(idx);
                    shouldChange = false;
                }
            }

            if (shouldChange) {
                if (isRange && v.some(o => !o)) {
                    v = [null, null];
                }
                this.onChange(v);
            }
        }
    };

    onKeyDown = e => {
        switch (e.keyCode) {
            case KEYCODE.ENTER: {
                const { inputValue } = this.state;
                this.handleChange(inputValue, 'KEYDOWN_ENTER');
                this.onClick();
                break;
            }
            default:
                return;
        }
    };

    onChange = v => {
        const { value } = this.state;

        if (isValueChanged(v, value)) {
            if ('value' in this.props) {
                this.setState({
                    curValue: value,
                    inputValue: this.getInputValue(value),
                });
            } else {
                this.setState({
                    value: v,
                });
            }

            func.call(this.props, 'onChange', [v, this.getInputValue(v)]);
        }
        this.onVisibleChange(false);
    };

    onOk = () => {
        const { curValue, inputValue } = this.state;

        const result = func.call(this.props, 'onOk', [curValue, inputValue]);

        result !== false && this.handleChange(curValue, 'CLICK_OK');
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
        const { BEGIN, END } = DATE_INPUT_TYPE;

        if (!visible) {
            this.onVisibleChange(true);

            if (![BEGIN, END].includes(inputType)) {
                this.setState({
                    inputType: BEGIN,
                });

                this.handleInputFocus(BEGIN);
            }
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
            prefix,
            locale,
            inputReadOnly,
            showTime,
            preset,
            mode,
            format,
            trigger,
            hasBorder,
            disabledDate,
            extraFooterRender,
            timePanelProps,
            resetTime,
            placeholder,
            disabledTime,
            hasClear,
            dateCellRender,
            disabled,
            isPreview,
            className,
            defaultPanelValue,
            renderPreview,
            ...restProps
        } = this.props;
        const { isRange, inputType, justBeginInput, panelMode, showOk, align } = this.state;
        let { inputValue, curValue } = this.state;

        // 受控
        if ('value' in this.props) {
            const value = this.checkAndRectify(this.props.value);
            if (isValueChanged(value, this.controlledValue)) {
                curValue = value;
                inputValue = this.getInputValue(curValue);
                this.controlledValue = value;
            }
        }

        // 预览态
        if (isPreview) {
            const previewCls = classnames(className, `${prefix}form-preview`);

            return (
                <div className={previewCls}>
                    {renderNode(renderPreview, isRange ? inputValue.join('-') : inputValue, [curValue, this.props])}
                </div>
            );
        }

        const visible = this.getFromPropOrState('visible');
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

        // 渲染触发层
        const inputProps = {
            ...pickProps(restProps, DateInput),
            ...sharedProps,
            value: inputValue,
            isRange,
            hasClear,
            hasBorder,
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

        // 渲染弹出层
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

        const triggerCls = classnames(className, prefixCls);

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
            <PopupComp
                key="date-picker-popup"
                visible={visible}
                align={popupAlign}
                container={popupContainer}
                followTrigger={followTrigger}
                triggerType={popupTriggerType}
                style={popupStyle}
                onVisibleChange={handleVisibleChange}
                trigger={
                    <div
                        dir={rtl ? 'rtl' : undefined}
                        {...triggerProps}
                        role="button"
                        tabIndex="0"
                        className={triggerCls}
                        style={this.props.style}
                    >
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
        );
    }
}

export default polyfill(Picker);
