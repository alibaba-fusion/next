import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import * as PT from 'prop-types';

import SharedPT from './prop-types';
import defaultLocale from '../locale/zh-cn';
import { func, datejs, KEYCODE } from '../util';
import { getFromPropOrState } from './util';
import { DATE_PICKER_TYPE, DATE_INPUT_TYPE, DATE_PICKER_MODE } from './constant';

import { Popup } from '../overlay';
import DateInput from './panels/date-input';
import DatePanel from './panels/date-panel';
import RangePanel from './panels/range-panel';
import FooterPanel from './panels/footer-panel';

const { bindCtx, renderNode } = func;

class Picker extends React.Component {
    static propTypes = {
        rtl: PT.bool,
        prefix: PT.string,
        locale: PT.object,
        mode: SharedPT.mode,
        type: SharedPT.type,
        inputReadOnly: SharedPT.readOnly,
        /**
         * 是否禁用
         */
        disabled: SharedPT.disabled,
        trigger: SharedPT.render,

        /**
         * 日期值（受控）moment 对象
         */
        value: SharedPT.value,
        /**
         * 初始日期值，moment 对象
         */
        defaultValue: SharedPT.value,
        /**
         * 输入提示
         */
        placeholder: SharedPT.placeholder,

        /**
         * 日期值的格式（用于限定用户输入和展示）
         */
        format: SharedPT.format,
        /**
         * 是否使用时间控件，传入 TimePicker 的属性 { defaultValue, format, ... }
         */
        showTime: PT.bool,
        timePanelProps: PT.object,
        /**
         * 每次选择日期时是否重置时间（仅在 showTime 开启时有效）
         */
        resetTime: PT.bool,

        /**
         * 禁用日期函数
         * @param {MomentObject} 日期值
         * @param {String} view 当前视图类型，year: 年， month: 月, date: 日
         * @return {Boolean} 是否禁用
         */
        disabledDate: PT.func,
        disabledTime: PT.func,
        /**
         * 自定义页脚面板
         * @return {Node} 自定义的面板页脚组件
         */
        footerRender: SharedPT.render,
        /**
         * 自定义面板页脚
         * @return {Node} 自定义的面板页脚组件
         */
        extraFooterRender: SharedPT.render,
        /**
         * 日期值改变时的回调
         * @param {MomentObject|String} value 日期值
         */
        onChange: PT.func,
        /**
         * 点击确认按钮时的回调
         * @return {MomentObject|String} 日期值
         */
        onOk: PT.func,
        /**
         * 输入框尺寸
         */
        size: SharedPT.size,

        /**
         * 是否显示清空按钮
         */
        hasClear: PT.bool,
        /**
         * 弹层显示状态
         */
        visible: PT.bool,
        /**
         * 弹层默认是否显示
         */
        defaultVisible: PT.bool,
        /**
         * 弹层展示状态变化时的回调
         * @param {Boolean} visible 弹层是否显示
         */
        onVisibleChange: PT.func,
        /**
         * 弹层其他属性
         */
        popupProps: PT.object,
        /**
         * 输入框其他属性
         */
        inputProps: PT.object,
        /**
         * 自定义日期渲染函数
         * @param {Object} value 日期值（moment对象）
         * @returns {ReactNode}
         */
        dateCellRender: PT.func,
        /**
         * 是否为预览态
         */
        isPreview: PT.bool,
        /**
         * 预览态模式下渲染的内容
         * @param {MomentObject} value 日期
         */
        renderPreview: PT.func,
        ranges: PT.oneOfType([PT.array, PT.object]),
        name: PT.string,
        popupComponent: PT.elementType,
        disableChangeMode: PT.bool,
        yearRange: PT.arrayOf(PT.number),
        titleRender: PT.func,
        showOk: PT.bool,
        hasBorder: PT.bool,
        separator: PT.node,
    };

    static defaultProps = {
        prefix: 'next-',
        rtl: false,
        locale: defaultLocale.DatePicker,
        type: DATE_PICKER_TYPE.DATE,
        mode: DATE_PICKER_MODE.DATE,
        format: 'YYYY-MM-DD',
        size: 'medium',
        hasBorder: true,
        disabled: false,
    };

    constructor(props) {
        super(props);

        this.prefixCls = `${props.prefix}picker2`;

        const value = this.checkAndRectify(
            'value' in props
                ? props.value
                : 'defaultValue' in props
                ? props.defaultValue
                : props.type === DATE_PICKER_TYPE.RANGE
                ? [null, null]
                : null
        );

        this.state = {
            type: props.type,
            value,
            curValue: value, // 当前输入中的值
            inputValue: this.getInputValue(value),
            visible: false,
            inputType: DATE_PICKER_TYPE.BEGIN,
            justBeginInput: true,
            panelMode: props.mode,
        };

        bindCtx(this, [
            'getInputValue',
            'handleMouseDown',
            'handleVisibleChange',
            'handleInputFocus',
            'onOk',
            'onChange',
            'onClick',
            'handleInput',
            'onInputTypeChange',
            'handleChange',
            'onVisibleChange',
            'onPanelChange',
        ]);

        this.getFromPropOrState = getFromPropOrState.bind(this);
    }

    static getDerivedStateFromProps(props) {
        return {
            isRange: props.type === DATE_PICKER_TYPE.RANGE,
            showOk: !!(props.showOk || props.showTime),
        };
    }

    componentWillUnmount() {
        this.timeoutId && clearTimeout(this.timeoutId);
    }

    /**
     * 校验日期数据，范围选择模式下为数组 不合法的日期重置null值
     * 日期值可以是：
     *  时间戳：1605263461196
     *  日期字符串：2020-11-11
     *  日期对象：moment、dayjs或Date对象
     * @param {*} value
     * @return 返回moment或dayjs对象，范围选择模式下，返回moment或dayjs对象的长度为2的数组
     */
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

    // 返回日期字符串
    getInputValue(value) {
        return Array.isArray(value) ? value.map(v => this.formater(v)) : this.formater(value);
    }

    formater = v => {
        const { format, isRange, inputType } = this.props;
        let fmt = format;

        if (isRange && Array.isArray(fmt)) {
            fmt = fmt[inputType];
        }

        return v ? (typeof fmt === 'function' ? fmt(v) : v.format(fmt)) : '';
    };

    toArrayIfNeeded = v => {
        if (this.state.isRange && !Array.isArray(v)) {
            v = Array(2).fill(v);
        }
        return v;
    };

    // 判断弹层是否显示
    handleVisibleChange(visible, type) {
        if (type === 'docClick') {
            if (!visible) {
                this.handleChange(this.state.value, true, true);
            }
            this.onVisibleChange(visible);
        }
    }

    handleInputFocus = (inputType = this.state.inputType) => {
        let input = this.dateInput && this.dateInput.input;

        if (input) {
            if (this.state.isRange) {
                input = input[inputType];
            }
            input && input.focus();
        }
    };

    handleMouseDown(e) {
        e.preventDefault();
    }

    onVisibleChange(visible) {
        const callback = () => {
            this.setState({
                visible,
                justBeginInput: true,
            });
            func.call(this.props, 'onVisibleChange', [visible]);
        };

        if (visible !== this.state.visible) {
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
                this.timeoutId = null;
            }

            if (visible) {
                callback();
            } else {
                this.timeoutId = setTimeout(callback, 50);
            }
        }
    }

    handleInput(v, eventType) {
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
    }

    onPanelChange(_, mode) {
        this.setState({
            panelMode: mode,
        });
    }

    handleChange = (v, isOk, forced = false) => {
        const { value, isRange, inputType, justBeginInput, showOk } = this.state;
        const { BEGIN, END } = DATE_INPUT_TYPE;
        v = this.checkAndRectify(v, value);

        if (!showOk || isOk) {
            let idx = -1;

            if (!forced && isRange) {
                idx = v.indexOf(null);

                if (idx === -1 && justBeginInput) {
                    idx = inputType === BEGIN ? END : BEGIN;
                }
            }

            if (!showOk) {
                this.setState({
                    value: v,
                });
            }

            if (idx !== -1) {
                this.handleInputFocus(idx);
            } else {
                if (isRange && v.some(o => !o)) {
                    v = [null, null];
                }
                this.onChange(v);
            }
        }

        this.setState({
            curValue: v,
            inputValue: this.getInputValue(v),
        });
    };

    onKeyDown = e => {
        switch (e.keyCode) {
            case KEYCODE.ENTER:
                this.onClick(); // TODO
                this.onChange();
                break;
            default:
                return;
        }
    };

    onChange(v) {
        this.setState({
            value: v,
        });

        func.call(this.props, 'onChange', [v, this.state.inputValue]);

        this.onVisibleChange(false);
    }

    onOk() {
        const { curValue, inputValue } = this.state;

        const result = func.call(this.props, 'onOk', [curValue, inputValue]);

        result !== false && this.handleChange(curValue, true);
    }

    onInputTypeChange(v) {
        const { inputType, visible } = this.state;

        if (v !== inputType) {
            this.setState({
                inputType: v,
                justBeginInput: !(v !== null && visible),
            });
        }
    }

    onClick = () => {
        const { visible, inputType } = this.state;
        const { BEGIN, END } = DATE_INPUT_TYPE;

        if (!visible) {
            this.setState({
                visible: true,
            });

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

    render() {
        const {
            prefixCls,
            checkAndRectify,
            getInputValue,
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
            ranges,
            mode,
            format,
            trigger,
            footerRender,
            size,
            hasBorder,
            disabledDate,
            separator,
            extraFooterRender,
            timePanelProps,
            resetTime,
            placeholder,
            disabledTime,
        } = this.props;
        const { isRange, inputType, justBeginInput, panelMode, showOk, align } = this.state;
        let { inputValue, value, curValue } = this.state;

        const visible = this.getFromPropOrState('visible');
        const disabled = this.toArrayIfNeeded(this.props.disabled);
        const allDisabled = isRange ? disabled.every(v => v) : disabled;

        // value受控模式
        if ('value' in this.props) {
            value = checkAndRectify(this.props.value);
            inputValue = getInputValue(value);
            curValue = value;
        }

        const sharedProps = {
            rtl,
            prefix,
            locale,
            mode,
            format,
            showTime,
            inputType,
            onChange: handleChange,
        };

        // 渲染触发层
        const inputProps = {
            ...sharedProps,
            value: inputValue,
            isRange,
            readOnly: inputReadOnly,
            size,
            hasBorder,
            separator,
            disabled,
            ref: el => (this.dateInput = el),
            onInput: handleInput,
            placeholder,
            focus: visible,
            onInputTypeChange,
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
        };

        const DateNode = isRange ? (
            <RangePanel justBeginInput={justBeginInput} {...panelProps} />
        ) : (
            <DatePanel {...panelProps} />
        );

        // 底部节点
        const oKable = !!(isRange ? curValue && curValue[inputType] : curValue);

        const footerNode = renderNode(
            footerRender,
            showOk || ranges || extraFooterRender ? (
                <FooterPanel
                    oKable={oKable}
                    onOk={onOk}
                    showOk={showOk}
                    onChange={handleChange}
                    ranges={ranges}
                    prefix={prefix}
                    extraRender={extraFooterRender}
                />
            ) : null,
            { onOk, onChange: handleChange }
        );

        const popupCls = classnames(prefixCls, {
            [`${prefixCls}-overlay`]: true,
            [`${prefixCls}-${(align || []).join('-')}`]: align,
            [`${prefixCls}-overlay-range`]: isRange,
        });

        let triggerProps;
        if (!allDisabled) {
            triggerProps = { onKeyDown, onClick };
        }

        return (
            <Popup
                key="date-picker-popup"
                disabled
                visible={visible}
                triggerType="click"
                onVisibleChange={handleVisibleChange}
                trigger={
                    <div {...triggerProps} role="button" tabIndex="0" className={`${prefixCls}-trigger`}>
                        {triggerNode}
                    </div>
                }
                className={popupCls}
                onPosition={this.getCurrentAlign}
            >
                {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                <div onMouseDown={handleMouseDown}>
                    <div className={`${prefixCls}-wrapper`}>
                        {DateNode}
                        {this.state.panelMode !== this.props.mode ? null : footerNode}
                    </div>
                </div>
            </Popup>
        );
    }
}

export default polyfill(Picker);
