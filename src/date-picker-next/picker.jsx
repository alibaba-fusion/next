import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import * as PT from 'prop-types';

import SharedPT from './prop-types';
import defaultLocale from '../locale/zh-cn';
import { func, datejs } from '../util';
import { getFromPropOrState } from './util';
import { DATE_PICKER_TYPE, DATE_INPUT_TYPE, DATE_PICKER_MODE } from './constant';

import { Popup } from '../overlay';
import DateInput from './panels/date-input';
import DatePanel from './panels/date-panel';
import RangePanel from './panels/range-panel';
import FooterPanel from './panels/footer-panel';

const { bindCtx, isFunction } = func;

class Picker extends React.Component {
    static propTypes = {
        prefix: PT.string,
        rtl: PT.bool,
        locale: PT.object,
        mode: SharedPT.mode,
        type: SharedPT.type,
        inputReadOnly: PT.bool,
        trigger: PT.oneOfType([PT.func, PT.object]),
        /**
         * 输入框内置标签
         */
        label: PT.node,
        /**
         * 输入框状态
         */
        state: PT.oneOf(['success', 'loading', 'error']),
        /**
         * 输入提示
         */
        placeholder: PT.string,
        /**
         * 默认展现的月
         * @return {MomentObject} 返回包含指定月份的 moment 对象实例
         */
        defaultVisibleMonth: PT.func,
        onVisibleMonthChange: PT.func,
        /**
         * 日期值（受控）moment 对象
         */
        value: SharedPT.value,
        /**
         * 初始日期值，moment 对象
         */
        defaultValue: SharedPT.value,
        /**
         * 日期值的格式（用于限定用户输入和展示）
         */
        format: PT.oneOfType([PT.string, PT.func]),
        /**
         * 是否使用时间控件，传入 TimePicker 的属性 { defaultValue, format, ... }
         */
        showTime: PT.oneOfType([PT.object, PT.bool]),
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
        /**
         * 自定义面板页脚
         * @return {Node} 自定义的面板页脚组件
         */
        footerRender: PT.func,
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
        size: PT.oneOf(['small', 'medium', 'large']),
        /**
         * 是否禁用
         */
        disabled: PT.bool,
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
        className: PT.string,
        name: PT.string,
        popupComponent: PT.elementType,
        popupContent: PT.node,
        disableChangeMode: PT.bool,
        yearRange: PT.arrayOf(PT.number),
    };

    static defaultProps = {
        prefix: 'next-',
        rtl: false,
        locale: defaultLocale.DatePicker,
        type: DATE_PICKER_TYPE.DATE,
        mode: DATE_PICKER_MODE.DATE,
        format: 'YYYY-MM-DD',
    };

    constructor(props) {
        super(props);

        this.prefixCls = `${props.prefix}picker`;

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
            visible: false,
            inputValue: this.getInputValue(value),
            inputType: null,
            hasFinished: false,
        };

        bindCtx(this, [
            'getInputValue',
            'handleMouseDown',
            'handleVisibleChange',
            'handleInputFocus',
            'onOk',
            'onChange',
            'onClick',
            'onDateInput',
            'onInputTypeChange',
            'handleChange',
            'onVisibleChange',
            'renderNode',
        ]);

        this.getFromPropOrState = getFromPropOrState.bind(this);
    }

    static getDerivedStateFromProps(props) {
        return {
            isRange: props.type === DATE_PICKER_TYPE.RANGE,
            showOk: props.showOk || props.showTime,
        };
    }

    // ---------------> utils

    /**
     * 校验日期数据，范围选择模式下为数组，校验通过的时候返回备选值，注意，备选值也需要进行校验，如果还校验失败则返回null值
     * 日期值可以是：
     *  时间戳：1605263461196
     *  日期字符串：2020-11-11
     *  日期对象：moment、dayjs或Date对象
     * @param {*} value
     * @return 返回moment或dayjs对象，范围选择模式下，返回moment或dayjs对象的长度为2的数组
     */
    checkAndRectify(value) {
        const check = value => {
            // moment(undefined) === moment()
            // 这里期望的是一个空值
            if (value === undefined) {
                value = null;
            }
            value = datejs(value);

            return value.isValid() ? value : null;
        };

        if (this.props.type === DATE_PICKER_TYPE.RANGE) {
            if (!Array.isArray(value)) {
                console.warn('无效数据格式，range模式下必须是数组: ', value);
                return [null, null];
            }
            return [0, 1].map(i => check(value[i]));
        } else {
            return check(value);
        }
    }

    // 返回日期字符串
    getInputValue(value) {
        return Array.isArray(value) ? value.map(v => this.formater(v)) : this.formater(value);
    }

    formater(v) {
        const { format } = this.props;
        return v ? (isFunction(format) ? format(v) : v.format(format)) : '';
    }

    // 判断弹层是否显示
    handleVisibleChange(visible, type) {
        // 点击非组件内
        if (type === 'docClick') {
            this.onVisibleChange(visible);
            // if (visible === false) {
            //     const input = this.dateInput && this.dateInput.input;
            //     input.blur();
            // }
        }
    }

    handleInputFocus(inputType) {
        let input;
        inputType = inputType !== undefined ? inputType : this.state.inputType;

        if (this.dateInput && (input = this.dateInput.input)) {
            if (this.state.isRange) {
                input = input[inputType];
            }

            input && input.focus();
        }
    }

    handleMouseDown(e) {
        e.preventDefault();
    }

    onVisibleChange(visible) {
        if (visible !== this.state.visible) {
            this.setState({
                visible,
                hasFinished: false,
            });
            func.call(this.props, 'onVisibleChange', [visible]);
        }
    }

    onDateInput(v) {
        this.setState({
            inputValue: v,
        });
    }

    /*
     * 处理日期Change
     * - 数据检验纠正
     * - 判断触发onChange事件
     */
    handleChange(v) {
        const { value, showOk, isRange, hasFinished, inputType } = this.state;
        const { BEGIN, END } = DATE_INPUT_TYPE;

        v = this.checkAndRectify(v, value);

        this.setState({
            value: v,
            inputValue: this.getInputValue(v),
        });

        if (isRange && !hasFinished) {
            this.handleInputFocus(inputType === BEGIN ? END : BEGIN);
        } else if (!showOk) {
            this.onChange(v);
        }
    }

    onChange(v) {
        func.call(this.props, 'onChagne', [v]);
        this.onVisibleChange(false);
    }

    onOk() {
        const { value } = this.state;
        const result = func.call(this.props, 'onOk', [value]);

        if (result !== false) {
            this.onChange(value);
        }
    }

    onInputTypeChange(v) {
        const { inputType, visible } = this.state;

        if (v !== inputType) {
            const hasFinished = inputType !== null && visible;

            this.setState({
                inputType: v,
                hasFinished,
            });
        }
    }

    onClick() {
        this.state.visible ||
            this.setState({
                visible: true,
            });
    }

    // ---------------> render

    renderNode(name, defaultRender) {
        let node = defaultRender;

        if (name in this.props) {
            node = this.props[name];
        }

        if (isFunction(node)) {
            node = node.call(this, this.state);
        }
        return node;
    }

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
            onDateInput,
            onInputTypeChange,
            renderNode,
        } = this;
        const {
            rtl,
            prefix,
            locale,
            inputReadOnly,
            showTime,
            preset,
            mode,
            type,
            format,
        } = this.props;
        const { isRange, inputType } = this.state;

        const visible = this.getFromPropOrState('visible');

        let { inputValue, value } = this.state;

        // value受控模式
        if ('value' in this.props) {
            value = checkAndRectify(this.props.value);
            inputValue = getInputValue(value);
        }

        const sharedProps = {
            rtl,
            prefix,
            locale,
        };

        // 渲染触发层
        const triggerNode = renderNode(
            'trigger',
            <DateInput
                format={format}
                isRange={isRange}
                value={inputValue}
                inputType={inputType}
                readOnly={inputReadOnly}
                onChange={handleChange}
                onInput={onDateInput}
                onClick={onClick}
                ref={el => (this.dateInput = el)}
                onInputTypeChange={onInputTypeChange}
                {...sharedProps}
            />
        );

        // 渲染弹出层
        const sharedDateProps = {
            mode,
            value,
            showTime,
            onChange: handleChange,
            ...sharedProps,
        };

        const DateNode = this.state.isRange
            ? renderNode('dateNode', <RangePanel inputType={inputType} {...sharedDateProps} />)
            : renderNode('rangeNode', <DatePanel {...sharedDateProps} />);

        // 底部
        const footerNode = renderNode(
            'footer',
            <FooterPanel onOk={onOk} onChange={handleChange} preset={preset} />
        );

        const className = classnames([`${prefixCls}`, `${prefix}${type}-picker-overlay`]);

        return (
            <Popup
                key="date-picker-popup"
                visible={visible}
                triggerType="click"
                onVisibleChange={handleVisibleChange}
                trigger={triggerNode}
                className={`${prefixCls}-overlay`}
            >
                {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                <div className={className} onMouseDown={handleMouseDown}>
                    {DateNode}
                    {footerNode}
                </div>
            </Popup>
        );
    }
}

export default polyfill(Picker);
