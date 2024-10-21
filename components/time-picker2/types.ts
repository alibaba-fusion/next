import type {
    CSSProperties,
    HTMLAttributes,
    InputHTMLAttributes,
    JSXElementConstructor,
    ReactNode,
} from 'react';
import type { Dayjs, ConfigType } from 'dayjs';

import type { CommonProps } from '../util';
import type { PopupProps } from '../overlay';
import type { InputProps } from '../input';
import type { ButtonProps } from '../button';
import type { Locale } from '../locale/types';

export interface DateInputProps
    extends Omit<InputCommonHTMLAttributes, 'disabled' | 'onInput'>,
        Omit<CommonProps, 'locale'> {
    prefix?: string;
    rtl?: boolean;
    locale?: Locale['Input'];
    value?: string | string[];
    inputType?: InputType;
    format?: string | ((v: Dayjs) => Dayjs);
    isRange?: boolean;
    hasClear?: boolean | null;
    onInput?: (v: string | number | null | (string | number | null)[], evetType?: string) => void;
    onInputTypeChange?: (v: number) => void;
    autoFocus?: boolean;
    readOnly?: boolean;
    placeholder?: string;
    size?: 'small' | 'medium' | 'large';
    focus?: boolean;
    hasBorder?: boolean;
    onKeyDown?: InputProps['onKeyDown'];
    onClick?: InputProps['onClick'];
    separator?: ReactNode;
    disabled?: boolean | boolean[];
    inputProps?: InputProps;
    label?: ReactNode;
    state?: InputProps['state'];
    defaultValue?: string | number | null | undefined;
    onBlur?: InputProps['onBlur'];
    className?: string;
}
export type InputType = 0 | 1;
export interface PresetType extends Omit<ButtonProps, 'value' | 'label'> {
    label?: string;
    value?: ConfigType | ConfigType[] | (() => ConfigType | ConfigType[]);
}
interface InputCommonHTMLAttributes
    extends Omit<
        React.InputHTMLAttributes<HTMLElement>,
        'defaultValue' | 'onChange' | 'onKeyDown' | 'size' | 'maxLength' | 'value'
    > {
    [key: `data-${string}`]: string;
}

interface HTMLAttributesWeak
    extends Omit<HTMLAttributes<HTMLElement>, 'onChange' | 'defaultValue'> {}

interface TimeMenuPropsCommonHTMLAttributes
    extends Omit<
        InputHTMLAttributes<HTMLElement>,
        'value' | 'onKeyDown' | 'size' | 'onInput' | 'disabled' | 'defaultValue'
    > {}

export interface TimeMenuProps
    extends CommonProps,
        Omit<TimeMenuPropsCommonHTMLAttributes, 'title' | 'onSelect'> {
    prefix?: string;
    title?: ReactNode;
    mode?: 'hour' | 'minute' | 'second';
    step?: number;
    activeIndex: number;
    value?: Dayjs | null;
    disabledItems?: (index: number) => boolean;
    renderTimeMenuItems?: (
        list: Array<TimeMenuListItem>,
        mode: TimeMenuProps['mode'],
        value: TimeMenuProps['value']
    ) => Array<TimeMenuListItem>;
    onSelect?: (value: TimeMenuListItem['value'], mode: TimeMenuProps['mode']) => void;
    disabled?: boolean;
}
export interface TimeMenuListItem {
    label: ReactNode;
    value: number;
}

export interface PanelProps
    extends Omit<CommonProps, 'locale'>,
        Pick<
            TimePickerProps,
            | 'prefix'
            | 'locale'
            | 'hourStep'
            | 'minuteStep'
            | 'secondStep'
            | 'disabledHours'
            | 'disabledMinutes'
            | 'disabledSeconds'
            | 'renderTimeMenuItems'
            | 'locale'
        > {
    /**
     * 是否显示小时
     */
    showHour: boolean;

    /**
     * 是否显示分钟
     */
    showSecond: boolean;

    /**
     * 是否显示秒
     */
    showMinute: boolean;
    value?: ValueType;

    /**
     * 选择某个日期值时的回调
     */
    onSelect: (value: Dayjs | Dayjs[], type: PannelType) => void;
    className?: string;
    isRange: boolean;
    disabled: boolean;
}

export type PannelType = 'start' | 'end' | 'panel';

/**
 * @api TimePicker
 */
export interface TimePickerProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 按钮的文案
     * @en Button text
     */
    label?: ReactNode;

    /**
     * @deprecated use Form.Item name instead
     * @skip
     */
    name?: string;

    /**
     * 时间选择框的尺寸
     * @en size of time picker
     * @defaultValue 'medium'
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 输入框状态
     * @en input state
     */
    state?: 'error' | 'success';

    /**
     * 是否允许清空时间
     * @en whether to allow clearing time
     * @defaultValue true
     */
    hasClear?: boolean;

    /**
     * 时间的格式
     * @en time format
     * @remarks see https://Dayjsjs.com/docs/#/parsing/string-format/
     * @defaultValue 'HH:mm:ss'
     */
    format?: string;

    /**
     * 小时选项步长
     * @en hour option step
     */
    hourStep?: number;

    /**
     * 分钟选项步长
     * @en minute option step
     */
    minuteStep?: number;

    /**
     * 秒钟选项步长
     * @en second option step
     */
    secondStep?: number;

    /**
     * 渲染的可选择时间列表 [\{ label: '01', value: 1 \}]
     * @en render the selectable time list
     * @param list - 默认渲染的列表
     * @param mode - 渲染的菜单 hour, minute, second
     * @param value - 当前时间，可能为 null
     * @returns 返回需要渲染的数据
     */
    renderTimeMenuItems?: (
        list: Array<TimeMenuListItem>,
        mode: TimeMenuProps['mode'],
        value: TimeMenuProps['value']
    ) => Array<TimeMenuListItem>;

    /**
     * 弹层是否显示（受控）
     * @en popup layer display status (controlled)
     */
    visible?: boolean;

    /**
     * 弹层默认是否显示（非受控）
     * @en popup layer default display status (uncontrolled)
     */
    defaultVisible?: boolean;

    /**
     * 弹层容器
     * @en popup layer container
     */
    popupContainer?: string | HTMLElement | ((target: HTMLElement) => HTMLElement);

    /**
     * 弹层对齐方式，详情见 Overlay 文档
     * @en popup layer alignment, see Overlay documentation
     * @defaultValue 'tl bl'
     */
    popupAlign?: string;

    /**
     * 弹层触发方式
     * @en popup layer trigger type
     * @defaultValue 'click'
     */
    popupTriggerType?: 'click' | 'hover';

    /**
     * 弹层展示状态变化时的回调
     * @en callback when the popup layer display status changes
     */
    onVisibleChange?: (visible: boolean, reason?: string) => void;

    /**
     * 弹层自定义样式
     * @en popup layer custom style
     */
    popupStyle?: CSSProperties;

    /**
     * 弹层自定义样式类
     * @en popup layer custom style class
     */
    popupClassName?: string;

    /**
     * 弹层属性
     * @en popup layer property
     */
    popupProps?: PopupProps;

    /**
     * 跟随触发元素
     * @en follow trigger element
     */
    followTrigger?: boolean;

    /**
     * 是否有边框
     * @en Whether the input has border
     * @defaultValue true
     */
    hasBorder?: boolean;

    /**
     * 是否为预览态
     * @en is preview
     */
    isPreview?: boolean;

    /**
     * 预览态模式下渲染的内容
     * @en content of preview mode
     */
    renderPreview?: (value: ValueType, props: TimePickerProps) => ReactNode;

    /**
     * 自定义输入框属性
     * @en custom input property
     */
    inputProps?: InputProps;

    /**
     * 国际化
     * @en internationalization
     * @skip
     */
    locale?: Locale['TimePicker'];

    /**
     * 弹层组件
     * @en popup component
     * @skip
     */
    popupComponent?: JSXElementConstructor<PopupProps>;

    /**
     * 输入框提示
     * @en input hint
     */
    placeholder?: string;

    /**
     * 时间值（Dayjs 对象或时间字符串，受控状态使用）
     * @en time value (Dayjs object or time string, controlled state use)
     */
    value?: string | Dayjs | null | (Dayjs | null | string)[];

    /**
     * 时间初值（Dayjs 对象或时间字符串，非受控状态使用）
     * @en time init value (Dayjs object or time string, uncontrolled state use)
     */
    defaultValue?: string | Dayjs | (Dayjs | null)[];

    /**
     * 禁用小时的函数，TimePicker.RangePicker 时，函数需要返回 number[]，且函数中没有 index 入参，非 TimePicker.RangePicker 时，函数需要返回 boolean，函数中有 index 入参
     * @en For the disabled hours function, if it's a TimePicker.RangePicker, the function should return a number[] and it shouldn't have an index parameter. If it's not a TimePicker.RangePicker, the function should return a boolean and it should have an index parameter.
     */
    disabledHours?: (index?: number) => boolean | number[];

    /**
     * 禁用分钟函数，TimePicker.RangePicker 时，函数需要返回 number[]，且函数中没有 index 入参，非 TimePicker.RangePicker 时，函数需要返回 boolean，函数中有 index 入参
     * @en For the disabled minutes function, if it's a TimePicker.RangePicker, the function should return a number[] and it shouldn't have an index parameter. If it's not a TimePicker.RangePicker, the function should return a boolean and it should have an index parameter.
     */
    disabledMinutes?: (index?: number) => boolean | number[];

    /**
     * 禁用秒钟函数，TimePicker.RangePicker 时，函数需要返回 number[]，且函数中没有 index 入参，非 TimePicker.RangePicker 时，函数需要返回 boolean，函数中有 index 入参
     * @en For the disabled seconds function, if it's a TimePicker.RangePicker, the function should return a number[] and it shouldn't have an index parameter. If it's not a TimePicker.RangePicker, the function should return a boolean and it should have an index parameter.
     */
    disabledSeconds?: (index?: number) => boolean | number[];

    /**
     * 时间值改变时的回调
     * @en callback when the time value changes
     */
    onChange?: (value: ValueType) => void;

    /**
     * 时间类型
     * @en time type
     * @skip
     * @defaultValue 'time'
     */
    type?: 'time' | 'range';

    /**
     * 预设值，会显示在时间面板下面
     * @en Rreset values, shown below the time panel.
     * Can be object or array of object, with the following properties.
     * properties:
     *  label: shown text
     *  name: key of React element, can be empty, and index will become key instead
     *  value: date value
     */
    preset?: PresetType | PresetType[];

    /**
     * 禁用
     * @en disable
     * @defaultValue false
     */
    disabled?: boolean | boolean[];
}

export interface TimePickerState {
    value?: ValueType;
    visible?: boolean | undefined;
    inputStr?: string | string[];
    inputing?: boolean;
    isRange?: boolean;
    inputValue?: string | string[];
    curValue?: ValueType;
    preValue?: ValueType;
    selecting?: boolean;
    inputType?: InputType;
    justBeginInput?: boolean;
}

export type ValueType = Dayjs | (Dayjs | null)[] | null;

/**
 * @api TimePicker.RangePicker
 */
export interface RangePickerProps extends Omit<HTMLAttributesWeak, 'placeholder'>, CommonProps {
    /**
     * 按钮的文案
     * @en Button text
     */
    label?: ReactNode;

    /**
     * @deprecated use Form.Item name instead
     * @skip
     */
    name?: string;

    /**
     * 时间选择框的尺寸
     * @en size of time picker
     * @defaultValue 'medium'
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 输入框状态
     * @en input state
     */
    state?: 'error' | 'success';

    /**
     * 是否允许清空时间
     * @en whether to allow clearing time
     * @defaultValue true
     */
    hasClear?: boolean;

    /**
     * 时间的格式
     * @en time format
     * @remarks see https://Dayjsjs.com/docs/#/parsing/string-format/
     * @defaultValue 'HH:mm:ss'
     */
    format?: string;

    /**
     * 小时选项步长
     * @en hour option step
     */
    hourStep?: number;

    /**
     * 分钟选项步长
     * @en minute option step
     */
    minuteStep?: number;

    /**
     * 秒钟选项步长
     * @en second option step
     */
    secondStep?: number;

    /**
     * 渲染的可选择时间列表 [\{ label: '01', value: 1 \}]
     * @en render the selectable time list
     * @param list - 默认渲染的列表
     * @param mode - 渲染的菜单 hour, minute, second
     * @param value - 当前时间，可能为 null
     * @returns 返回需要渲染的数据
     */
    renderTimeMenuItems?: (
        list: Array<TimeMenuListItem>,
        mode: TimeMenuProps['mode'],
        value: TimeMenuProps['value']
    ) => Array<TimeMenuListItem>;

    /**
     * 弹层是否显示（受控）
     * @en popup layer display status (controlled)
     */
    visible?: boolean;

    /**
     * 弹层默认是否显示（非受控）
     * @en popup layer default display status (uncontrolled)
     */
    defaultVisible?: boolean;

    /**
     * 弹层容器
     * @en popup layer container
     */
    popupContainer?: string | HTMLElement | ((target: HTMLElement) => HTMLElement);

    /**
     * 弹层对齐方式，详情见 Overlay 文档
     * @en popup layer alignment, see Overlay documentation
     * @defaultValue 'tl bl'
     */
    popupAlign?: string;

    /**
     * 弹层触发方式
     * @en popup layer trigger type
     * @defaultValue 'click'
     */
    popupTriggerType?: 'click' | 'hover';

    /**
     * 弹层展示状态变化时的回调
     * @en callback when the popup layer display status changes
     */
    onVisibleChange?: (visible: boolean, reason?: string) => void;

    /**
     * 弹层自定义样式
     * @en popup layer custom style
     */
    popupStyle?: CSSProperties;

    /**
     * 弹层自定义样式类
     * @en popup layer custom style class
     */
    popupClassName?: string;

    /**
     * 弹层属性
     * @en popup layer property
     */
    popupProps?: PopupProps;

    /**
     * 跟随触发元素
     * @en follow trigger element
     */
    followTrigger?: boolean;

    /**
     * 是否有边框
     * @en Whether the input has border
     * @defaultValue true
     */
    hasBorder?: boolean;

    /**
     * 是否为预览态
     * @en is preview
     */
    isPreview?: boolean;

    /**
     * 预览态模式下渲染的内容
     * @en content of preview mode
     */
    renderPreview?: (value: ValueType, props: TimePickerProps) => ReactNode;

    /**
     * 自定义输入框属性
     * @en custom input property
     */
    inputProps?: InputProps;

    /**
     * 国际化
     * @en internationalization
     * @skip
     */
    locale?: Locale['TimePicker'];

    /**
     * 弹层组件
     * @en popup component
     * @skip
     */
    popupComponent?: JSXElementConstructor<PopupProps>;

    /**
     * 禁用小时的函数，TimePicker.RangePicker 时，函数需要返回 number[]，且函数中没有 index 入参，非 TimePicker.RangePicker 时，函数需要返回 boolean，函数中有 index 入参
     * @en For the disabled hours function, if it's a TimePicker.RangePicker, the function should return a number[] and it shouldn't have an index parameter. If it's not a TimePicker.RangePicker, the function should return a boolean and it should have an index parameter.
     */
    disabledHours?: (index?: number) => boolean | number[];

    /**
     * 禁用分钟函数，TimePicker.RangePicker 时，函数需要返回 number[]，且函数中没有 index 入参，非 TimePicker.RangePicker 时，函数需要返回 boolean，函数中有 index 入参
     * @en For the disabled minutes function, if it's a TimePicker.RangePicker, the function should return a number[] and it shouldn't have an index parameter. If it's not a TimePicker.RangePicker, the function should return a boolean and it should have an index parameter.
     */
    disabledMinutes?: (index?: number) => boolean | number[];

    /**
     * 禁用秒钟函数，TimePicker.RangePicker 时，函数需要返回 number[]，且函数中没有 index 入参，非 TimePicker.RangePicker 时，函数需要返回 boolean，函数中有 index 入参
     * @en For the disabled seconds function, if it's a TimePicker.RangePicker, the function should return a number[] and it shouldn't have an index parameter. If it's not a TimePicker.RangePicker, the function should return a boolean and it should have an index parameter.
     */
    disabledSeconds?: (index?: number) => boolean | number[];

    /**
     * 时间类型
     * @en time type
     * @skip
     * @defaultValue 'time'
     */
    type?: 'time' | 'range';

    /**
     * 禁用
     * @en disable
     * @defaultValue false
     */
    disabled?: boolean | boolean[];
    /**
     * 输入框提示
     * @en input hint
     */
    placeholder?: string | string[];

    /**
     * 时间值（Dayjs 对象或时间字符串，受控状态使用）
     * @en time value (Dayjs object or time string, controlled state use)
     */
    value?: Array<ConfigType>;

    /**
     * 时间初值（Dayjs 对象或时间字符串，非受控状态使用）
     * @en time init value (Dayjs object or time string, uncontrolled state use)
     */
    defaultValue?: Array<ConfigType>;

    /**
     * 时间值改变时的回调
     * @en callback when the time value changes
     */
    onChange?: (value: Array<Dayjs>) => void;

    /**
     * 确定按钮点击时的回调
     * @en callback when the ok button is clicked
     */
    onOk?: (value: Array<Dayjs>) => void;

    /**
     * 预设值，会显示在时间面板下面
     * @en Rreset values, shown below the time panel.
     * Can be object or array of object, with the following properties.
     * properties:
     *  label: shown text
     *  name: key of React element, can be empty, and index will become key instead
     *  value: date value
     */
    preset?: PresetType[];
}

export interface DisabledItems {
    newDisabledHours: ((index: number) => boolean)[];
    newDisabledMinutes: ((index: number) => boolean)[];
    newDisabledSeconds: ((index: number) => boolean)[];
}
