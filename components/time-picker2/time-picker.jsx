import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import ConfigProvider from '../config-provider';
import Input from '../input';
import Button from '../button';
import Overlay from '../overlay';
import nextLocale from '../locale/zh-cn';
import { func, obj, datejs, KEYCODE } from '../util';
import TimePickerPanel from './panel';
import { checkDateValue, onTimeKeydown } from './utils';
import SharedPT from './prop-types';
import { switchInputType, fmtValue, isValueChanged } from '../date-picker2/util';
import FooterPanel from '../date-picker2/panels/footer-panel';
import DateInput from './module/date-input';
import { TIME_PICKER_TYPE, TIME_INPUT_TYPE } from './constant';

const { Popup } = Overlay;
const { noop, checkDate, checkRangeDate } = func;
const timePickerLocale = nextLocale.TimePicker;

const presetPropType = PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.func, checkDateValue]),
    ...Button.propTypes,
});

class TimePicker2 extends Component {
    static propTypes = {
        ...ConfigProvider.propTypes,
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        /**
         * 按钮的文案
         */
        label: PropTypes.node,
        /**
         * 输入框状态
         */
        state: PropTypes.oneOf(['error', 'success']),
        /**
         * 输入框提示
         */
        placeholder: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
        /**
         * 时间值，dayjs格式或者2020-01-01字符串格式，受控状态使用
         */
        value: SharedPT.value,
        /**
         * 时间初值，dayjs格式或者2020-01-01字符串格式，非受控状态使用
         */
        defaultValue: SharedPT.value,
        /**
         * 时间选择框的尺寸
         */
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        /**
         * 是否允许清空时间
         */
        hasClear: PropTypes.bool,
        /**
         * 时间的格式
         * https://dayjs.gitee.io/docs/zh-CN/display/format
         */
        format: PropTypes.string,
        /**
         * 小时选项步长
         */
        hourStep: PropTypes.number,
        /**
         * 分钟选项步长
         */
        minuteStep: PropTypes.number,
        /**
         * 秒钟选项步长
         */
        secondStep: PropTypes.number,
        /**
         * 禁用小时函数
         * @param {Number} index 时 0 - 23
         * @return {Boolean} 是否禁用
         */
        disabledHours: PropTypes.func,
        /**
         * 禁用分钟函数
         * @param {Number} index 分 0 - 59
         * @return {Boolean} 是否禁用
         */
        disabledMinutes: PropTypes.func,
        /**
         * 禁用秒钟函数
         * @param {Number} index 秒 0 - 59
         * @return {Boolean} 是否禁用
         */
        disabledSeconds: PropTypes.func,
        /**
         * 渲染的可选择时间列表
         * [{
         *  label: '01',
         *  value: 1
         * }]
         * @param {Array} list 默认渲染的列表
         * @param {String} mode 渲染的菜单 hour, minute, second
         * @param {dayjs} value 当前时间，可能为 null
         * @return {Array} 返回需要渲染的数据
         */
        renderTimeMenuItems: PropTypes.func,
        /**
         * 弹层是否显示（受控）
         */
        visible: PropTypes.bool,
        /**
         * 弹层默认是否显示（非受控）
         */
        defaultVisible: PropTypes.bool,
        /**
         * 弹层容器
         * @param {Object} target 目标节点
         * @return {ReactNode} 容器节点
         */
        popupContainer: PropTypes.any,
        /**
         * 弹层对齐方式, 详情见Overlay 文档
         */
        popupAlign: PropTypes.string,
        /**
         * 弹层触发方式
         */
        popupTriggerType: PropTypes.oneOf(['click', 'hover']),
        /**
         * 弹层展示状态变化时的回调
         * @param {Boolean} visible 弹层是否隐藏和显示
         * @param {String} type 触发弹层显示和隐藏的来源 fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发
         */
        onVisibleChange: PropTypes.func,
        /**
         * 弹层自定义样式
         */
        popupStyle: PropTypes.object,
        /**
         * 弹层自定义样式类
         */
        popupClassName: PropTypes.string,
        /**
         * 弹层属性
         */
        popupProps: PropTypes.object,
        /**
         * 是否跟随滚动
         */
        followTrigger: PropTypes.bool,
        /**
         * 是否禁用
         */
        disabled: PropTypes.bool,
        /**
         * 输入框是否有边框
         */
        hasBorder: PropTypes.bool,
        /**
         * 是否为预览态
         */
        isPreview: PropTypes.bool,
        /**
         * 预览态模式下渲染的内容
         * @param {DayjsObject|DayjsObject[]} value 时间
         */
        renderPreview: PropTypes.func,
        /**
         * 时间值改变时的回调
         * @param {DayjsObject} date dayjs时间对象
         * @param {Object|String} dateString 时间对象或时间字符串
         */
        onChange: PropTypes.func,
        className: PropTypes.string,
        name: PropTypes.string,
        /**
         * 预设值，会显示在时间面板下面
         */
        preset: PropTypes.oneOfType([PropTypes.arrayOf(presetPropType), presetPropType]),
        inputProps: PropTypes.shape(Input.propTypes),
        popupComponent: PropTypes.elementType,
        type: PropTypes.oneOf(['time', 'range']),
    };

    static defaultProps = {
        prefix: 'next-',
        rtl: false,
        locale: timePickerLocale,
        size: 'medium',
        format: 'HH:mm:ss',
        hasClear: true,
        disabled: false,
        hasBorder: true,
        type: 'time',
        popupAlign: 'tl bl',
        popupTriggerType: 'click',
        onChange: noop,
        onVisibleChange: noop,
    };

    constructor(props, context) {
        super(props, context);
        const isRange = props.type === TIME_PICKER_TYPE.RANGE;

        this.state = {};
        if (isRange) {
            const { inputType, justBeginInput } = this.getInitRangeInputState();
            this.state = {
                inputType,
                justBeginInput,
            };
        }

        const { format, visible, defaultVisible, prefix } = this.props;

        const value = this.getInitValue();

        // const value = formatInputTimeValue(props.value || props.defaultValue, props.format, isRange);
        this.state = {
            ...this.state,
            isRange,
            inputStr: '', // 输入框的输入值， string类型
            value, // 确定值 dayjs类型
            curValue: value, // 临时值 dayjs类型
            preValue: value, // 上个值 dayjs类型
            inputValue: fmtValue(value, format),
            inputing: false,
            visible: 'visible' in this.props ? visible : defaultVisible,
        };
        this.prefixCls = `${prefix}time-picker2`;
    }

    static getDerivedStateFromProps(props, prevState) {
        const { disabled, type, format, value: propsValue } = props;
        const isRange = type === TIME_PICKER_TYPE.RANGE;
        let state = {
            isRange,
        };

        if ('value' in props) {
            // checkDate function doesn't support hh:mm:ss format, convert to valid dayjs value in advance
            const formatter = v => (typeof v === 'string' ? datejs(v, format) : v);
            const formattedValue = Array.isArray(propsValue)
                ? propsValue.map(v => formatter(v))
                : formatter(propsValue);
            const value = isRange
                ? checkRangeDate(formattedValue, state.inputType, disabled)
                : checkDate(formattedValue);
            if (isValueChanged(value, state.preValue)) {
                state = {
                    ...state,
                    value,
                    preValue: value,
                };
                if (isRange && !prevState.selecting) {
                    state.inputValue = fmtValue(value, format);
                    state.curValue = formattedValue || [];
                }
            }
        }

        if ('visible' in props) {
            state.visible = props.visible;
        }

        return state;
    }

    /**
     * 获取初始值
     */
    getInitValue = () => {
        const { props } = this;
        const { type, value, defaultValue } = props;

        let val = type === TIME_PICKER_TYPE.RANGE ? [null, null] : null;

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
            inputType: this.isEnabled(0) ? TIME_INPUT_TYPE.BEGIN : TIME_INPUT_TYPE.END,
        };
    };

    onKeyDown = e => {
        if (e.keyCode === KEYCODE.ENTER) {
            const { inputValue } = this.state;
            this.handleChange(inputValue, 'KEYDOWN_ENTER');
            this.onClick();
            return;
        }

        const { value, inputStr, inputType, isRange } = this.state;
        const { format, hourStep = 1, minuteStep = 1, secondStep = 1, disabledMinutes, disabledSeconds } = this.props;

        let unit = 'second';

        if (disabledSeconds) {
            unit = disabledMinutes ? 'hour' : 'minute';
        }

        const timeStr = onTimeKeydown(
            e,
            {
                format,
                timeInputStr: isRange ? inputStr[inputType] : inputStr,
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
        let newInputStr = timeStr;
        if (isRange) {
            newInputStr = inputStr;
            newInputStr[inputType] = timeStr;
        }

        this.handleChange(newInputStr, 'KEYDOWN_CODE');
    };

    onVisibleChange = (visible, type) => {
        if (!('visible' in this.props)) {
            this.setState({
                visible,
            });
        }
        this.props.onVisibleChange(visible, type);
    };

    onClick = () => {
        const { visible, inputType } = this.state;

        if (!visible) {
            this.onVisibleChange(true);
            this.handleInputFocus(inputType);
        }
    };
    /**
     * 处理点击文档区域导致的弹层收起逻辑
     * @param {boolean} visible 是否可见
     * @param {string} type 事件类型
     */
    handleVisibleChange = (visible, targetType) => {
        if (targetType === 'docClick') {
            // 弹层收起 触发 Change 逻辑
            if (!visible) {
                this.handleChange(this.state.curValue, 'VISIBLE_CHANGE');
            }
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

    onOk = () => {
        const { curValue } = this.state;
        const checkedValue = this.checkValue(curValue);

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

    checkValue = (value, strictly) => {
        const { inputType } = this.state;
        const formatter = v => (typeof v === 'string' ? datejs(v, 'HH:mm:ss') : v);
        const formattedValue = Array.isArray(value) ? value.map(v => formatter(v)) : formatter(value);

        return this.props.type === TIME_PICKER_TYPE.RANGE
            ? checkRangeDate(formattedValue, inputType, this.props.disabled, strictly)
            : checkDate(formattedValue);
    };

    /**
     * 获取 `onChange` 和 `onOk` 方法的输出参数
     * @param {Dayjs} value
     * @returns 默认返回 `Dayjs` 实例和 `format` 格式化的值
     *          如果传了了 `outputFormat` 属性则返回 `outputFormat` 格式化的值
     */
    getOutputArgs = value => {
        const { format } = this.props;
        return [value, fmtValue(value, format)];
    };

    onChange = v => {
        const { state, props } = this;
        const { format } = props;

        const nextValue = v === undefined ? state.value : v;
        const value = this.checkValue(nextValue);

        this.setState({
            curValue: value,
            preValue: value,
            inputStr: fmtValue(value, format),
            inputValue: fmtValue(value, format),
        });

        func.invoke(this.props, 'onChange', this.getOutputArgs(nextValue));
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

    handleChange = (v, eventType) => {
        const { format } = this.props;
        const { isRange, value, preValue } = this.state;
        const forceEvents = ['KEYDOWN_ENTER', 'CLICK_PRESET', 'CLICK_OK', 'INPUT_CLEAR', 'VISIBLE_CHANGE'];
        const isTemporary = isRange && !forceEvents.includes(eventType);

        // 面板收起时候，将值设置为确认值
        v = eventType === 'VISIBLE_CHANGE' ? value : this.checkValue(v, !isTemporary);

        const stringV = fmtValue(v, format);

        this.setState({
            curValue: v,
            inputStr: stringV,
            inputValue: stringV,
            inputing: false,
            selecting: eventType === 'start' || eventType === 'end',
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
                        ['CLICK_PRESET', 'VISIBLE_CHANGE', 'KEYDOWN_ENTER', 'INPUT_CLEAR', 'CLICK_OK'].includes(
                            eventType
                        ) ||
                        (isRange && !this.shouldSwitchInput(v));
                    if (shouldHidePanel) {
                        this.onVisibleChange(false);
                    }

                    if (isValueChanged(v, preValue)) {
                        this.onChange(v);
                    }
                }
            );
        }
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

    handleClear = () => {
        /**
         * 清空输入之后 input 组件内部会让第二个输入框获得焦点
         * 所以这里需要设置 setTimeout 才能让第一个 input 获得焦点
         */
        this.clearTimeoutId = setTimeout(() => {
            this.handleInputFocus(0);
        });

        this.setState({
            inputType: TIME_INPUT_TYPE.BEGIN,
            justBeginInput: this.isEnabled(),
        });
    };

    handleInput = (v, eventType) => {
        const { isRange } = this.state;
        if (eventType === 'clear') {
            this.handleChange(v, 'INPUT_CLEAR');

            if (isRange) {
                this.handleClear();
            }
        } else {
            this.setState({
                inputStr: v,
                inputValue: v,
                curValue: this.checkValue(v),
                inputing: true,
                visible: true,
            });
        }
    };

    renderPreview(others) {
        const { prefix, format, className, renderPreview } = this.props;
        const { value } = this.state;
        const previewCls = classnames(className, `${prefix}form-preview`);

        let label = '';
        if (value) {
            const valueArr = Array.isArray(value) ? value : [value];
            label = valueArr.map(v => (v ? v.format(format) : '')).join('-');
        }
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
            followTrigger,
            disabled,
            hasBorder,
            className,
            locale,
            rtl,
            isPreview,
            preset,
            ...others
        } = this.props;

        const { value, inputStr, inputValue, curValue, inputing, visible, isRange, inputType } = this.state;
        const triggerCls = classnames({
            [`${this.prefixCls}-trigger`]: true,
        });

        if (rtl) {
            others.dir = 'rtl';
        }

        if (isPreview) {
            return this.renderPreview(obj.pickOthers(others, TimePicker2.PropTypes));
        }

        const sharedInputProps = {
            prefix,
            locale,
            label,
            state,
            placeholder,
            ...inputProps,
            size,
            disabled,
            // RangePicker 有临时输入态在 inputValue 里面
            value: inputing ? inputStr : isRange ? inputValue : fmtValue(value, format) || '',
            hasClear: value && hasClear,
            inputType,
            isRange,
            focus: visible,
            onInputTypeChange: this.onInputTypeChange,
            onInput: this.handleInput,
            onKeyDown: this.onKeyDown,
            ref: el => (this.dateInput = el),
        };

        const triggerInput = (
            <div className={triggerCls}>
                <DateInput
                    {...sharedInputProps}
                    label={label}
                    state={state}
                    onClick={this.onClick}
                    hasBorder={hasBorder}
                    placeholder={placeholder || locale.placeholder}
                    className={classnames(`${this.prefixCls}-input`)}
                />
            </div>
        );

        const panelProps = {
            prefix,
            locale,
            value: inputing ? this.checkValue(inputStr) : curValue,
            // value: curValue,
            isRange,
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
            onSelect: this.handleChange,
        };

        const classNames = classnames(
            {
                [`${this.prefixCls}`]: true,
                [`${this.prefixCls}-${size}`]: size,
                [`${prefix}disabled`]: disabled,
            },
            className
        );

        const PopupComponent = popupComponent ? popupComponent : Popup;
        const oKable = !!(isRange ? inputValue && inputValue[inputType] : inputValue);

        return (
            <div {...obj.pickOthers(TimePicker2.propTypes, others)} className={classNames}>
                <PopupComponent
                    align={popupAlign}
                    {...popupProps}
                    followTrigger={followTrigger}
                    visible={visible}
                    onVisibleChange={this.handleVisibleChange}
                    trigger={triggerInput}
                    container={popupContainer}
                    disabled={disabled}
                    triggerType={popupTriggerType}
                    style={popupStyle}
                    className={popupClassName}
                >
                    <div dir={others.dir} className={`${this.prefixCls}-wrapper`}>
                        <div className={`${this.prefixCls}-body`}>
                            <TimePickerPanel {...panelProps} />
                            {preset || isRange ? (
                                <FooterPanel
                                    prefix={prefix}
                                    className={`${this.prefixCls}-footer`}
                                    showTime
                                    locale={locale}
                                    oKable={oKable}
                                    showOk={isRange}
                                    onOk={this.onOk}
                                    onChange={this.handleChange}
                                    preset={preset}
                                />
                            ) : null}
                        </div>
                    </div>
                </PopupComponent>
            </div>
        );
    }
}

export default polyfill(TimePicker2);
