import type React from 'react';
import type { Dayjs, ConfigType } from 'dayjs';
import type { PopupProps } from '../overlay';
import type { InputProps } from '../input';
import type { CommonProps } from '../util';
import type { Locale } from '../locale/types';
import type { ButtonProps } from '../button';

interface InputCommonHTMLAttributes
    extends Omit<
        React.InputHTMLAttributes<HTMLElement>,
        'defaultValue' | 'onChange' | 'onKeyDown' | 'size' | 'maxLength' | 'value'
    > {
    [key: `data-${string}`]: string;
}

export interface InputNode {
    getInputNode: () => { offsetLeft: number };
}

export type ModeType = 'date' | 'month' | 'week' | 'quarter' | 'year';

export interface DateInputProps
    extends Omit<InputCommonHTMLAttributes, 'disabled' | 'onInput' | 'placeholder'>,
        Omit<CommonProps, 'locale'> {
    /**
     * 前缀附加内容
     * @en Content before input
     */
    prefix?: string;

    /**
     * 是否是 RTL 模式
     * @en Whether it is RTL mode
     */
    rtl?: boolean;

    /**
     * 国际化配置
     * @en Internationalization configuration
     * @skip
     */
    locale?: Locale['DatePicker'];

    /**
     * 输入框值
     * @en Input value
     */
    value?: string | string[];

    /**
     * 输入框类型
     * @en Input type
     */
    inputType?: number;

    /**
     * 日期值的格式
     * @en Date value format
     */
    format?: string | ((v: Dayjs) => string);

    /**
     * 是否是范围选择
     * @en Whether it is a range selection
     */
    isRange?: boolean;

    /**
     * 是否显示清空按钮
     * @en Whether to display the clear button
     * @defaultValue true
     */
    hasClear?: boolean | null;

    /**
     * 输入框类型改变时的回调
     * @en Callback when the input type changes
     * @param v - inputType
     */
    onInputTypeChange?: (v: number) => void;

    /**
     * 自动聚焦
     * @en Whether to autoFocus
     * @defaultValue false
     */
    autoFocus?: boolean;

    /**
     * 只读
     * @en Whether it is read-only
     * @defaultValue false
     */
    readOnly?: boolean;

    /**
     * 占位符
     * @en Placeholder
     */
    placeholder?: string | string[];

    /**
     * 输入框尺寸
     * @en Input size
     * @defaultValue 'medium'
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 聚焦
     * @en Whether to focus
     */
    focus?: boolean;

    /**
     * 是否有边框
     * @en Whether to have a border
     * @defaultValue true
     */
    hasBorder?: boolean;

    /**
     * 分隔符
     * @en Separator
     * @defaultValue '-'
     */
    separator?: React.ReactNode;

    /**
     * 禁用
     * @en Whether to disable
     */
    disabled?: boolean | boolean[];

    /**
     * 输入框属性
     * @en Input properties
     */
    inputProps?: InputProps;

    /**
     * 输入框 aria-label
     * @en Input aria-label
     */
    dateInputAriaLabel?: string;

    /**
     * 输入框内置标签
     * @en Input box built-in label
     */
    label?: React.ReactNode;

    /**
     * 输入框状态
     * @en Input state
     */
    state?: InputProps['state'];

    /**
     * 模式
     * @en Mode
     */
    mode?: string;
}

export interface DatePanelProps {
    /**
     * 是否是 RTL 模式
     * @en Whether it is RTL mode
     */
    rtl?: boolean;

    /**
     * 前缀附加内容
     * @en Content before input
     */
    prefix?: string;

    /**
     * 国际化配置
     * @en Internationalization configuration
     * @skip
     */
    locale?: Locale['DatePicker'];

    /**
     * 日期面板模式
     * @en Date panel mode
     */
    mode?: ModeType;

    /**
     * 面板模式
     * @en Panel mode
     */
    panelMode?: ModeType;

    /**
     * 日期值（受控）Dayjs 对象
     * @en Date value (Dayjs object)
     */
    value?: Dayjs;

    /**
     * 禁用日期函数
     * @en Disable date function
     * @param value - Dayjs
     * @param mode - ModeType | 'decade'
     */
    disabledDate?: (value: Dayjs, mode: ModeType | 'decade') => boolean;

    /**
     * 是否显示时间
     * @en Whether to show time
     * @defaultValue false
     */
    showTime?: boolean;

    /**
     * 是否重置时间
     * @en Whether to reset the time
     * @defaultValue false
     */
    resetTime?: boolean;

    /**
     * 时间面板属性
     * @en Time panel properties
     */
    timePanelProps?: Partial<TimePanelProps>;

    /**
     * 禁用日期
     * @en Whether to disable the date
     * @param date - Dayjs
     */
    disabledTime?: object | ((date: Dayjs) => object);

    /**
     * 日期单元格自定义渲染
     * @en Custom rendering of date cell
     * @param value - Dayjs
     */
    dateCellRender?: (value: Dayjs) => React.ReactNode;
}

export interface DatePanelState {
    defaultTime: Dayjs;
}

export interface PresetType extends Omit<ButtonProps, 'value' | 'label'> {
    label?: string;
    value?: ConfigType | ConfigType[] | (() => ConfigType | ConfigType[]);
}

export interface FooterPanelProps {
    /**
     * 是否是 RTL 模式
     * @en Whether it is RTL mode
     */
    rtl?: boolean;

    /**
     * 样式类名
     * @en Style class name
     */
    className?: string;

    /**
     * 前缀附加内容
     * @en Content before input
     */
    prefix?: string;

    /**
     * 国际化配置
     * @en Internationalization configuration
     * defaultValue: Locale['DatePicker']
     * @skip
     */
    locale?: Locale['DatePicker'];

    /**
     * 是否显示确认按钮
     * @en Whether to show the confirmation button
     */
    showOk?: boolean;

    /**
     * 预设值
     * @en Preset values
     */
    preset?: PresetType | PresetType[];

    /**
     * 确认按钮回调
     * @en Callback when the confirmation button is clicked
     * @param event - React.MouseEvent<Element>
     */
    onOk: (event: React.MouseEvent<Element>) => void;

    /**
     * 值改变时的回调
     * @en Callback when the value changes
     * @param value - Dayjs
     * @param strVal - string
     */
    onChange: (value: Dayjs, strVal: string) => void;

    /**
     * 是否可确认
     * @en Whether it is OK
     */
    oKable?: boolean;

    /**
     * 额外渲染
     * @en Extra rendering
     */
    extraRender?: React.ReactNode | (() => React.ReactNode);

    /**
     * 类名前缀
     * @en Class name prefix
     */
    prefixCls?: string;

    /**
     * 是否显示时间
     * @en Whether to show time
     */
    showTime?: boolean;
}

export interface RangePanelProps {
    /**
     * 是否是 RTL 模式
     * @en Whether it is RTL mode
     */
    rtl?: boolean;

    /**
     * 前缀附加内容
     * @en Content before input
     */
    prefix?: string;

    /**
     * 国际化配置
     * @en Internationalization configuration
     * @skip
     */
    locale?: Locale['DatePicker'];

    /**
     * 日期面板模式
     * @en Date panel mode
     */
    mode: ModeType;

    /**
     * 日期值（受控）Dayjs 对象
     * @en Date value (Dayjs object)
     */
    value: Dayjs[];

    /**
     * 输入框类型
     * @en Input type
     */
    inputType: number;

    /**
     * 日期cell状态
     * @en Date cell status
     * @param v - Dayjs
     * @param value - Dayjs[]
     */
    handleCellState?: (v: Dayjs, value: Dayjs[]) => number;

    /**
     * 禁用日期函数
     * @en Disable date function
     * @param value - Dayjs
     * @param mode - ModeType
     */
    disabledDate?: (value: Dayjs, mode: ModeType) => boolean;

    /**
     * 是否初始输入
     * @en Whether to initial input
     * @defaultValue false
     */
    justBeginInput?: boolean;

    /**
     * 是否重置时间
     * @en Whether to reset the time
     */
    resetTime?: boolean;

    /**
     * 是否显示时间
     * @en Whether to show time
     */
    showTime: boolean;

    /**
     * 时间面板属性
     * @en Time panel properties
     */
    timePanelProps?: Partial<TimePanelProps>;

    /**
     * 禁用时间函数
     * @en Disable time function
     * @param value - Dayjs[]
     * @param inputType - number
     */
    disabledTime?: object | ((value: Dayjs[], inputType: number) => object);

    /**
     * 日期单元格自定义渲染
     * @en Custom rendering of date cell
     * @param value - Dayjs
     */
    dateCellRender?: (value: Dayjs) => React.ReactNode;

    /**
     * 日期面板值改变时的回调
     * @en Callback when the date panel value changes
     * @param values - Dayjs[]
     */
    onCalendarChange?: (values: Dayjs[]) => void;

    /**
     * 默认面板值
     * @en Default panel value
     */
    defaultPanelValue?: Dayjs;
}

export interface RangePanelState {
    mode: ModeType;
    panelValue: Dayjs;
    inputType: number;
    curHoverValue: Dayjs | null;
    defaultTime: Dayjs[];
    calendarIdx?: number;
}

export interface TimePanelProps {
    /**
     * 是否是 RTL 模式
     * @en Whether it is RTL mode
     */
    rtl?: boolean;

    /**
     * 前缀附加内容
     * @en Content before input
     */
    prefix?: string;

    /**
     * 国际化配置
     * @en Internationalization configuration
     * @skip
     */
    locale?: Locale['DatePicker'];

    /**
     * 时间值（Dayjs 对象）
     * @en time value (Dayjs object)
     */
    value?: Dayjs;

    /**
     * 时间格式
     * @en time format
     */
    format?: string | ((v: Dayjs) => string);

    /**
     * 是否显示小时
     * @en Whether to show hour
     */
    showHour?: boolean;

    /**
     * 是否显示分钟
     * @en Whether to show minute
     */
    showMinute?: boolean;

    /**
     * 是否显示秒
     * @en Whether to show second
     */
    showSecond?: boolean;

    /**
     * 时间面板属性
     * @en Time panel properties
     */
    timePanelProps?: Partial<TimePanelProps>;

    /**
     * 时间值改变时的回调
     * @en Callback when the time value changes
     * @param v - Dayjs | Dayjs[]
     */
    onSelect?: (v: Dayjs | Dayjs[]) => void;

    /**
     * 默认时间值
     * @en Default time value
     */
    defaultValue?: Dayjs | string | (Dayjs | string)[];

    /**
     * 禁用时间函数
     * @en Disable time function
     * @param value - Dayjs[]
     */
    disabledTime?: object | ((date: Dayjs) => object);

    /**
     * 输入框类型
     * @en Input type
     */
    inputType?: number;

    /**
     * 禁用秒钟函数，TimePicker.RangePicker 时，函数需要返回 number[]，且函数中没有 index 入参，非 TimePicker.RangePicker 时，函数需要返回 boolean，函数中有 index 入参
     * @en For the disabled seconds function, if it's a TimePicker.RangePicker, the function should return a number[] and it shouldn't have an index parameter. If it's not a TimePicker.RangePicker, the function should return a boolean and it should have an index parameter.
     */
    disabledSeconds?: (index?: number) => boolean | number[];

    secondStep?: number;
    minuteStep?: number;
}

interface HTMLAttributesWeak
    extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange' | 'defaultValue'> {}

/**
 * @api DatePicker2
 */
export interface DatePickerProps
    extends Omit<HTMLAttributesWeak, 'placeholder'>,
        CommonProps,
        DeprecatedProps {
    /**
     * 日期选择类型
     * @en date picker type
     * @defaultValue 'date'
     */
    type?: 'date' | 'range';

    /**
     * @deprecated use Form.Item name instead
     * @skip
     */
    name?: string;

    /**
     * 日期面板模式
     * @en date panel mode
     * @defaultValue 'date'
     */
    mode?: ModeType;

    /**
     * 时间值（Dayjs 对象或时间字符串，受控状态使用）
     * @en time value (Dayjs object or time string, controlled state use)
     */
    value?: string | Dayjs | null | (Dayjs | null | string)[];

    /**
     * 时间初值（Dayjs 对象或时间字符串，非受控状态使用）
     * @en time init value (Dayjs object or time string, uncontrolled state use)
     */
    defaultValue?: string | Dayjs | (Dayjs | null | string)[];

    /**
     * 默认面板值
     * @en Default panel value
     */
    defaultPanelValue?: Dayjs;

    /**
     * 禁用日期函数
     * @en Disable date function
     * @param value - Dayjs
     * @param mode - ModeType
     */
    disabledDate?: (value: Dayjs, mode: ModeType) => boolean;

    /**
     *  底部额外渲染
     * @en Bottom extra rendering
     */
    extraFooterRender?: React.ReactNode | (() => React.ReactNode);

    /**
     * 预设值
     * @en Preset values
     */
    preset?: PresetType | PresetType[];

    /**
     * 是否显示时间
     * @en Whether to show time
     */
    showTime?: boolean;

    /**
     * 是否显示确认按钮
     * @en Whether to show the confirmation button
     */
    showOk?: boolean;

    /**
     * 是否重置时间
     * @en Whether to reset the time
     */
    resetTime?: boolean;

    /**
     * 时间面板属性
     * @en Time panel properties
     */
    timePanelProps?: Partial<TimePanelProps>;

    /**
     * 禁用时间
     * @en Disable time
     */
    disabledTime?: object;

    /**
     * 点击确认按钮时的回调
     * @en Callback when the confirm button is clicked
     * @param value - Dayjs | Dayjs[]
     * @param strVal - string | string[]
     */
    onOk?:
        | ((value: Dayjs, strVal: string) => void)
        | ((value: Array<Dayjs>, strVal: Array<string>) => void);

    /**
     * 值改变时的回调
     * @en Callback when the value changes
     * @param value - Dayjs
     * @param strVal - string
     */
    onChange?: (value: Dayjs, strVal: string) => void;

    /**
     * 面板visible切换时的回调
     * @en Callback when the panel visible changes
     * @param visible - boolean
     */
    onVisibleChange?: (visible: boolean) => void;

    /**
     * 面板模式改变时的回调
     * @en Callback when the panel mode changes
     * @param panelValue - Dayjs
     * @param mode - ModeType
     */
    onPanelChange?: (panelValue: Dayjs, mode: ModeType) => void;

    /**
     * 日期格式
     * @en Date format
     * @defaultValue 'YYYY-MM-DD'
     */
    format?: string | ((value: Dayjs) => string);

    /**
     * 输出格式：控制 onChange、onOk 事件的输出值格式
     * @en Output format: control the output value format of onChange and onOk events
     */
    outputFormat?: string | ((value: Dayjs) => string);

    /**
     * 是否禁用
     * @en Whether to disable
     */
    disabled?: boolean | boolean[];

    /**
     * 日期选择状态
     * @en Date selection state
     */
    state?: 'success' | 'loading' | 'error';

    /**
     * 日期选择框尺寸
     * @en Input size
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 是否显示边框
     * @en Whether to show the border
     */
    hasBorder?: boolean;

    /**
     * 输入框属性
     * @en Input properties
     */
    inputProps?: InputProps;

    /**
     * 输入框只读
     * @en Whether the input is read-only
     */
    inputReadOnly?: boolean;

    /**
     * 是否显示清空按钮
     * @en Whether to display the clear button
     */
    hasClear?: boolean;

    /**
     * 标签
     * @en Label
     */
    label?: React.ReactNode;

    /**
     * 分隔符
     * @en Separator
     */
    separator?: React.ReactNode;

    /**
     * 输入框占位符
     * @en Input placeholder
     */
    placeholder?: string | string[];

    /**
     * 面板是否显示
     * @en Whether the panel is displayed
     */
    visible?: boolean;

    /**
     * 默认面板是否显示
     * @en Whether the default panel is displayed
     * @defaultValue false
     */
    defaultVisible?: boolean;

    /**
     * 触发元素
     * @en Trigger element
     */
    trigger?: React.ReactNode | (() => React.ReactNode);

    /**
     * 弹层触发方式
     * @en Popup trigger type
     * @defaultValue 'click'
     */
    popupTriggerType?: 'click' | 'hover';

    /**
     * 弹层对齐方式
     * @en Popup alignment
     */
    popupAlign?: string;

    /**
     * 弹层容器
     * @en Popup container
     */
    popupContainer?: string | HTMLElement | ((target: HTMLElement) => HTMLElement);

    /**
     * 弹层样式
     * @en Popup style
     */
    popupStyle?: React.CSSProperties;

    /**
     * 弹层 className
     * @en Popup className
     */
    popupClassName?: string;

    /**
     * 弹层属性
     * @en Popup properties
     */
    popupProps?: PopupProps;

    /**
     * 是否跟随滚动
     * @en Whether Pop-up follows trigger when scrolling
     */
    followTrigger?: boolean;

    /**
     * 弹层组件
     * @en Popup component
     */
    popupComponent?: React.Component;

    /**
     * 日期单元格自定义渲染
     * @en Custom rendering of date cell
     * @param value - Dayjs
     */
    dateCellRender?: (value: Dayjs) => React.ReactNode;

    /**
     * 月份单元格自定义渲染
     * @en Custom rendering of month cell
     * @param value - Dayjs
     */
    monthCellRender?: (value: Dayjs) => React.ReactNode;

    /**
     * 日期输入框 aria-label
     * @en Date input aria-label
     */
    dateInputAriaLabel?: string;

    /**
     * 是否为预览态
     * @en Whether it is preview
     */
    isPreview?: boolean;

    /**
     * 预览态模式下渲染的内容
     * @en Content rendered in preview mode
     * @param value - Dayjs | Dayjs[]
     */
    renderPreview?: (value: Dayjs | Dayjs[]) => React.ReactNode;

    /**
     * 日期面板值改变时的回调
     * @en Callback when the date panel value changes
     * @param values - Dayjs[]
     * @param formatString - string[]
     */
    onCalendarChange?: (values: Dayjs[] | null, formatString: string[]) => void;
}

export interface DatePickerState {
    panelMode?: ModeType;
    visible?: boolean;
    inputType?: number;
    justBeginInput?: boolean;
    value?: Dayjs | [Dayjs | null, Dayjs | null] | null;
    curValue?: Dayjs | [Dayjs | null, Dayjs | null] | null;
    preValue?: Dayjs | [Dayjs | null, Dayjs | null] | null;
    inputValue?: string | string[];
    isRange?: boolean;
    showOk?: boolean;
    showTime?: boolean;
    align?: string[];
}

/**
 * @api DatePicker2.RangePicker
 */
export interface RangePickerProps
    extends Omit<
        DatePickerProps,
        | 'value'
        | 'placeholder'
        | 'defaultValue'
        | 'format'
        | 'onOk'
        | 'onChange'
        | 'dateInputAriaLabel'
        | 'disabled'
        | 'outputFormat'
    > {
    /**
     * 时间值（受控状态使用）
     * @en time value (controlled state use)
     */
    value?: Array<ConfigType>;

    /**
     * 时间默认值
     * @en time default value
     */
    defaultValue?: Array<ConfigType>;

    /**
     * 时间格式
     * @en time format
     */
    format?: string | ((value: Dayjs) => string) | (string | ((value: Dayjs) => string))[];

    /**
     * 点击确认按钮时的回调
     * @en callback when the ok button is clicked
     */
    onOk?: (value: Array<Dayjs>, strVal: Array<string>) => void;

    /**
     * 值改变时的回调
     * @en callback when the value changes
     */
    onChange?: (value: Array<Dayjs>, strVal: Array<string>) => void;

    /**
     * 输出格式：控制 onChange、onOk 事件的输出值格式
     * @en Output format: control the output value format of onChange and onOk events
     */
    outputFormat?: string | ((value: Dayjs) => string) | (string | ((value: Dayjs) => string))[];

    /**
     * 输入框占位符
     * @en Input placeholder
     */
    placeholder?: string | Array<string>;

    /**
     * 日期输入框 aria-label
     * @en Date input aria-label
     */
    dateInputAriaLabel?: Array<string> | string;

    /**
     * 是否禁用
     * @en Whether to disable
     */
    disabled?: boolean | boolean[];

    /**
     * 日期面板值改变时的回调
     * @en Callback when the date panel value changes
     * @param values - Dayjs[]
     * @param formatString - string[]
     */
    onCalendarChange?: (values: [Dayjs, Dayjs], formatString: [string, string]) => void;
}

export interface DeprecatedProps {
    /**
     * 自定义面板页脚
     * @en Custom panel footer
     */
    footerRender?: React.ReactNode | (() => React.ReactNode);

    /**
     * 月份切换时的回调
     * @en Callback when the month changes
     * @param panelValue - Dayjs
     * @param mode - ModeType
     */
    onVisibleMonthChange?: (panelValue: Dayjs, mode: ModeType) => void;

    /**
     * 默认展现的月份
     * @en Default displayed month
     */
    defaultVisibleMonth?: Dayjs;

    /**
     * 预设值
     * @en Preset values
     */
    ranges?: object | Array<object>;

    /**
     * 日期模式
     * @en Date mode
     */
    mode?: ModeType;
}
