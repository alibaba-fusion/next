import type { Moment, MomentInput } from 'moment';
import type React from 'react';
import type { CommonProps } from '../util';
import type { PopupProps } from '../overlay';
import type { InputProps } from '../input';
import type { TimePickerProps } from '../time-picker';
import type { Locale } from '../locale/types';
import type { RangeCalendarProps } from '../calendar';

export type PanelType = 'time-panel' | 'date-panel';

/**
 * @api DatePicker
 * @order 1
 */
export interface DatePickerProps
    extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange' | 'defaultValue'>,
        CommonProps,
        DeprecatedProps {
    /**
     * @deprecated use Form.Item name instead
     * @skip
     */
    name?: string;
    /**
     * 输入框内置标签
     * @en Inset label of input
     */
    label?: React.ReactNode;

    /**
     * 输入框状态
     * @en Input status
     */
    state?: 'success' | 'loading' | 'error';

    /**
     * 输入提示
     * @en Placeholder
     */
    placeholder?: string;

    /**
     * 默认展现的月
     * @en Default displayed month
     */
    defaultVisibleMonth?: () => Moment;

    /**
     * 默认展现的年
     * @en Default displayed year
     */
    defaultVisibleYear?: () => Moment;

    /**
     * 日期值（受控）moment 对象
     * @en Date value, moment object, controlled
     */
    value?: string | Moment | null;

    /**
     * 初始日期值，moment 对象
     * @en Initial date value, moment object, uncontrolled
     */
    defaultValue?: string | Moment | null;

    /**
     * 日期值的格式（用于限定用户输入和展示）
     * @en Date value format(for restricting user input and display)
     * @defaultValue 'YYYY-MM-DD'
     */
    format?: string;

    /**
     * 是否使用时间控件，传入 TimePicker 的属性 \{ defaultValue, format, ... \}
     * @en Whether to use time control, pass the props of TimePicker \{ defaultValue, format, ... \}
     * @defaultValue false
     */
    showTime?: TimePickerProps | boolean;

    /**
     * 每次选择日期时是否重置时间（仅在 showTime 开启时有效）
     * @en Whether to reset time when selecting a date(only valid when showTime is enabled)
     * @defaultValue false
     */
    resetTime?: boolean;

    /**
     * 禁用日期函数
     * @en Disable date function
     */
    disabledDate?: (date: Moment, view: string) => boolean;

    /**
     * 自定义面板页脚
     * @en Custom panel footer
     */
    footerRender?: () => React.ReactNode;

    /**
     * 日期值改变时的回调
     * @en Callback when the date value changes
     */
    onChange?: (value: string | Moment | null) => void;

    /**
     * 点击确认按钮时的回调
     * @en Callback when the confirm button is clicked
     */
    onOk?: (value: string | Moment | null) => void;

    /**
     * 输入框尺寸
     * @en Input box size
     * @defaultValue 'medium'
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 是否禁用
     * @en Whether to disable
     */
    disabled?: boolean;

    /**
     * 是否显示清空按钮
     * @en Whether to display the clear button
     * @defaultValue true
     */
    hasClear?: boolean;

    /**
     * 弹层显示状态
     * @en Pop-up display status
     */
    visible?: boolean;

    /**
     * 弹层默认是否显示
     * @en Pop-up default display status, uncontrolled
     * @defaultValue false
     */
    defaultVisible?: boolean;

    /**
     * 弹层展示状态变化时的回调
     * @en Callback when the pop-up display status changes
     */
    onVisibleChange?: (visible: boolean, reason: string) => void;

    /**
     * 弹层展示月份变化时的回调
     * @en Callback when the pop-up display month changes
     */
    onVisibleMonthChange?: (value: Moment, reason: string) => void;

    /**
     * 弹层触发方式
     * @en Pop-up trigger
     * @defaultValue 'click'
     */
    popupTriggerType?: 'click' | 'hover';

    /**
     * 弹层对齐方式，具体含义见 OverLay 文档
     * @en Pop-up alignment, see OverLay documentation
     * @defaultValue 'tl tl'
     */
    popupAlign?: string;

    /**
     * 弹层容器
     * @en Pop-up container
     */
    popupContainer?: PopupProps['container'];

    /**
     * 弹层自定义样式
     * @en Pop-up custom style
     */
    popupStyle?: React.CSSProperties;

    /**
     * 弹层自定义样式类
     * @en Pop-up custom style class
     */
    popupClassName?: string;

    /**
     * 弹层其他属性
     * @en Pop-up other attributes
     */
    popupProps?: React.PropsWithRef<PopupProps>;

    /**
     * 输入框其他属性
     * @en Input box other attributes
     */
    inputProps?: InputProps;

    /**
     * 自定义日期渲染函数
     * @en Custom date rendering function
     */
    dateCellRender?: (calendarDate: Moment) => React.ReactNode;

    /**
     * 自定义月份渲染函数
     * @en Custom month rendering function
     */
    monthCellRender?: (calendarDate: Moment) => React.ReactNode;

    /**
     * 自定义年份渲染函数
     * @en Custom year rendering function
     */
    yearCellRender?: (calendarDate: Moment) => React.ReactNode;

    /**
     * 日期输入框的 aria-label 属性
     * @en Date input box aria-label
     */
    dateInputAriaLabel?: string;

    /**
     * 时间输入框的 aria-label 属性
     * @en Time input box aria-label
     */
    timeInputAriaLabel?: string;

    /**
     * 是否为预览态
     * @en Whether it is a preview state
     */
    isPreview?: boolean;

    /**
     * 预览态定制渲染函数
     * @en Preview state custom rendering function
     */
    renderPreview?: (value: Moment | null, props: DatePickerProps) => React.ReactNode;

    /**
     * 是否跟随滚动
     * @en Whether Pop-up follows trigger when scrolling
     */
    followTrigger?: boolean;

    /**
     * 自定义弹层
     * @en Custom pop-up
     */
    popupComponent?: React.ComponentType<unknown>;

    /**
     * 自定义弹层内容
     * @en Custom pop-up content
     */
    popupContent?: React.ReactElement;

    /**
     * 禁用日期选择器的日期模式切换
     * @en Disable date selection
     */
    disableChangeMode?: boolean;
    /**
     * 年份范围，[START_YEAR, END_YEAR]
     * @en Year range, [START_YEAR, END_YEAR]
     */
    yearRange?: [start: number, end: number];
    /**
     * @skip
     */
    locale?: Locale['DatePicker'];
}

export interface DatePickerState {
    value: Moment | null;
    inputAsString: boolean;
    dateInputStr: string;
    timeInputStr: string;
    inputing: false | 'date' | 'time';
    visible: boolean;
    panel: PanelType;
    format: string;
    timeFormat: string;
    dateTimeFormat: string;
    // FIXME 不加入的话会导致 setState 时有比较难解的类型问题
    [key: string]: unknown;
}

/**
 * @api DatePicker.MonthPicker
 * @order 2
 */
export interface MonthPickerProps
    extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange' | 'defaultValue'>,
        CommonProps,
        DeprecatedProps {
    /**
     * @deprecated use Form.Item name instead
     * @skip
     */
    name?: string;
    /**
     * 输入框内置标签
     * @en Inset label of input
     */
    label?: React.ReactNode;

    /**
     * 输入框状态
     * @en Input status
     */
    state?: 'success' | 'loading' | 'error';

    /**
     * 输入提示
     * @en Placeholder
     */
    placeholder?: string;

    /**
     * 默认展现的年
     * @en Default displayed year
     */
    defaultVisibleYear?: () => Moment | null;

    /**
     * 日期值（受控）moment 对象
     * @en Date value, moment object, controlled
     */
    value?: string | Moment | null;

    /**
     * 初始日期值，moment 对象
     * @en Initial date value, moment object, uncontrolled
     */
    defaultValue?: string | Moment | null;

    /**
     * 日期值的格式（用于限定用户输入和展示）
     * @en Date value format(for restricting user input and display)
     * @defaultValue 'YYYY-MM'
     */
    format?: string;

    /**
     * 禁用日期函数
     * @en Disable date function
     */
    disabledDate?: (date: Moment, view: string) => boolean;

    /**
     * 自定义面板页脚
     * @en Custom panel footer
     */
    footerRender?: () => React.ReactNode;

    /**
     * 日期值改变时的回调
     * @en Callback when the date value changes
     */
    onChange?: (value: Moment | string | null) => void;

    /**
     * 输入框尺寸
     * @en Input box size
     * @defaultValue 'medium'
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 是否禁用
     * @en Whether to disable
     */
    disabled?: boolean;

    /**
     * 是否显示清空按钮
     * @en Whether to display the clear button
     * @defaultValue true
     */
    hasClear?: boolean;

    /**
     * 弹层显示状态
     * @en Pop-up display status
     */
    visible?: boolean;

    /**
     * 弹层默认是否显示
     * @en Pop-up default display status, uncontrolled
     */
    defaultVisible?: boolean;

    /**
     * 弹层展示状态变化时的回调
     * @en Callback when the pop-up display status changes
     */
    onVisibleChange?: (visible: boolean, reason: string) => void;

    /**
     * 弹层触发方式
     * @en Pop-up trigger
     * @defaultValue 'click'
     */
    popupTriggerType?: 'click' | 'hover';

    /**
     * 弹层对齐方式，具体含义见 OverLay 文档
     * @en Pop-up alignment, see OverLay documentation
     * @defaultValue 'tl tl'
     */
    popupAlign?: string;

    /**
     * 弹层容器
     * @en Pop-up container
     */
    popupContainer?: PopupProps['container'];

    /**
     * 弹层自定义样式
     * @en Pop-up custom style
     */
    popupStyle?: React.CSSProperties;

    /**
     * 弹层自定义样式类
     * @en Pop-up custom style class
     */
    popupClassName?: string;

    /**
     * 弹层其他属性
     * @en Pop-up other attributes
     */
    popupProps?: React.PropsWithRef<PopupProps>;

    /**
     * 自定义弹层
     * @en Custom pop-up
     */
    popupComponent?: React.ComponentType<unknown>;

    /**
     * 自定义弹层内容
     * @en Custom pop-up content
     */
    popupContent?: React.ReactElement;

    /**
     * 是否跟随滚动
     * @en Whether Pop-up follows trigger when scrolling
     */
    followTrigger?: boolean;

    /**
     * 输入框其他属性
     * @en Input box other attributes
     */
    inputProps?: InputProps;

    /**
     * 自定义月份渲染函数
     * @en Custom month rendering function
     */
    monthCellRender?: (calendarDate: Moment) => React.ReactNode;

    /**
     * 日期输入框的 aria-label 属性
     * @en Date input box aria-label
     */
    dateInputAriaLabel?: string;
    /**
     * 预览态定制渲染函数
     * @en Preview state custom rendering function
     */
    renderPreview?: (value: Moment | null, props: MonthPickerProps) => void;
    /**
     * 自定义年份渲染函数
     * @en Custom year rendering function
     */
    yearCellRender?: (calendarDate: Moment) => React.ReactNode;
    /**
     * 是否为预览态
     * @en Whether it is a preview state
     */
    isPreview?: boolean;
    /**
     * @skip
     */
    locale?: Locale['DatePicker'];
}

export interface MonthPickerState {
    value: Moment | null;
    inputAsString: boolean;
    visible: boolean | undefined;
    dateInputStr: string;
    inputing: boolean;
}

/**
 * @api DatePicker.RangePicker
 * @order 3
 */
export interface RangePickerProps
    extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange' | 'defaultValue' | 'placeholder'>,
        CommonProps,
        DeprecatedProps {
    /**
     * @deprecated use Form.Item name instead
     * @skip
     */
    name?: string;

    /**
     * 日期范围类型
     * @en Date range type
     */
    type?: 'date' | 'month' | 'year';

    /**
     * 默认展示的起始月份
     * @en Default displayed start month
     */
    defaultVisibleMonth?: () => Moment | null;

    /**
     * 输入提示
     * @en Placeholder
     */
    placeholder?: Array<string> | string;

    /**
     * 日期范围值数组 [moment, moment]
     * @en Date range value array [moment, moment]
     */
    value?: [start: Moment | string | null | undefined, end?: Moment | string | undefined | null];

    /**
     * 初始的日期范围值数组 [moment, moment]
     * @en Initial date range value array [moment, moment]
     */
    defaultValue?: [
        start: Moment | string | null | undefined,
        end?: Moment | string | undefined | null,
    ];

    /**
     * 日期值的格式（用于限定用户输入和展示）
     * @en Date value format(for restricting user input and display)
     */
    format?: string;

    /**
     * 是否使用时间控件，传入 TimePicker 的属性 \{ defaultValue, format, ... \}
     * @en Whether to use time control, pass the props of TimePicker \{ defaultValue, format, ... \}
     * @defaultValue false
     */
    showTime?:
        | (Omit<TimePickerProps, 'defaultValue'> & {
              defaultValue?: Moment | string | null | (Moment | string | null | undefined)[];
          })
        | boolean;

    /**
     * 每次选择日期时是否重置时间（仅在 showTime 开启时有效）
     * @en Whether to reset time when selecting a date(only valid when showTime is enabled)
     * @defaultValue false
     */
    resetTime?: boolean;

    /**
     * 禁用日期函数
     * @en Disable date function
     */
    disabledDate?: (date: Moment, view: string) => boolean;

    /**
     * 自定义面板页脚
     * @en Custom panel footer
     */
    footerRender?: () => React.ReactNode;

    /**
     * 日期范围值改变时的回调
     * @en Callback when the date range value changes
     */
    onChange?: (value: (string | Moment | null | undefined)[]) => void;

    /**
     * 点击确认按钮时的回调 返回开始时间和结束时间
     * @en Callback when the confirm button is clicked
     */
    onOk?: (value: (string | Moment | null | undefined)[]) => void;

    /**
     * 输入框内置标签
     * @en Inset label of input
     */
    label?: React.ReactNode;

    /**
     * 输入框状态
     * @en Input status
     */
    state?: 'error' | 'loading' | 'success';

    /**
     * 输入框尺寸
     * @en Input box size
     * @defaultValue 'medium'
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 是否禁用
     * @en Whether to disable
     */
    disabled?: boolean;

    /**
     * 是否显示清空按钮
     * @en Whether to display the clear button
     * @defaultValue true
     */
    hasClear?: boolean;

    /**
     * 弹层显示状态
     * @en Pop-up display status
     */
    visible?: boolean;

    /**
     * 弹层默认是否显示
     * @en Pop-up default display status
     * @defaultValue false
     */
    defaultVisible?: boolean;

    /**
     * 弹层展示状态变化时的回调
     * @en Callback when the pop-up display status changes
     */
    onVisibleChange?: (visible: boolean, reason: string) => void;

    /**
     * 弹层触发方式
     * @en Pop-up trigger
     * @defaultValue 'click'
     */
    popupTriggerType?: 'click' | 'hover';

    /**
     * 弹层对齐方式，具体含义见 OverLay 文档
     * @en Pop-up alignment, see OverLay documentation
     * @defaultValue 'tl tl'
     */
    popupAlign?: string;

    /**
     * 弹层容器
     * @en Pop-up container
     */
    popupContainer?: PopupProps['container'];

    /**
     * 弹层自定义样式
     * @en Pop-up custom style
     */
    popupStyle?: React.CSSProperties;

    /**
     * 弹层自定义样式类
     * @en Pop-up custom style class
     */
    popupClassName?: string;

    /**
     * 弹层其他属性
     * @en Pop-up other attributes
     */
    popupProps?: React.PropsWithRef<PopupProps>;

    /**
     * 输入框其他属性
     * @en Input box other attributes
     */
    inputProps?: InputProps;

    /**
     * 自定义日期渲染函数
     * @en Custom date rendering function
     */
    dateCellRender?: () => void;

    /**
     * 开始日期输入框的 aria-label 属性
     * @en Start date input box aria-label
     */
    startDateInputAriaLabel?: string;

    /**
     * 开始时间输入框的 aria-label 属性
     * @en Start time input box aria-label
     */
    startTimeInputAriaLabel?: string;

    /**
     * 结束日期输入框的 aria-label 属性
     * @en End date input box aria-label
     */
    endDateInputAriaLabel?: string;

    /**
     * 结束时间输入框的 aria-label 属性
     * @en End time input box aria-label
     */
    endTimeInputAriaLabel?: string;
    /**
     * 预览态定制渲染函数
     * @en Preview state custom rendering function
     */
    renderPreview?: (
        value: [Moment | null, Moment | null],
        props: RangePickerProps
    ) => React.ReactNode;
    /**
     * 展现的月份变化时的回调
     * @en Callback when the displayed month changes
     */
    onVisibleMonthChange?: RangeCalendarProps['onVisibleMonthChange'];
    /**
     * @skip
     */
    locale?: Locale['DatePicker'];
    /**
     * 自定义弹层
     * @en Custom pop-up
     */
    popupComponent?: React.ComponentType<unknown>;

    /**
     * 自定义弹层内容
     * @en Custom pop-up content
     */
    popupContent?: React.ReactElement;
    /**
     * 自定义月份渲染函数
     * @en Custom month rendering function
     */
    monthCellRender?: (calendarDate: Moment) => React.ReactNode;

    /**
     * 自定义年份渲染函数
     * @en Custom year rendering function
     */
    yearCellRender?: (calendarDate: Moment) => React.ReactNode;
    /**
     * 是否跟随滚动
     * @en Whether Pop-up follows trigger when scrolling
     */
    followTrigger?: boolean;
    /**
     * 是否为预览态
     * @en Whether it is a preview state
     */
    isPreview?: boolean;
    /**
     * 年份范围，[START_YEAR, END_YEAR]
     * @en Year range, [START_YEAR, END_YEAR]
     */
    yearRange?: [start: number, end: number];
    /**
     * @skip
     * 兼容 0.x ranges 属性，用于显示一些快捷选择的入口
     * @en Compatible with 0.x ranges attribute, used to display some shortcut entry points
     * @deprecated use footerRender instead
     */
    ranges?: {
        [key: string]: MomentInput[];
    };
    /**
     * 禁用日期选择器的日期模式切换
     * @en Disable date selection
     * @defaultValue false
     */
    disableChangeMode?: boolean;
}

export interface RangePickerState {
    startValue?: Moment | null;
    endValue?: Moment | null;
    startTime?: Moment | null;
    endTime?: Moment | null;
    inputAsString?: boolean | undefined;
    visible?: boolean;
    startDateInputStr?: string;
    endDateInputStr?: string;
    activeDateInput?: 'startValue' | 'endValue' | 'startTime' | 'endTime';
    startTimeInputStr?: string;
    endTimeInputStr?: string;
    inputing?: boolean | string;
    panel?: PanelType;
    format?: string | undefined;
    timeFormat?: string;
    dateTimeFormat?: string | undefined;
}

/**
 * @api DatePicker.YearPicker
 * @order 4
 */
export interface YearPickerProps
    extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange' | 'defaultValue'>,
        CommonProps,
        DeprecatedProps {
    /**
     * @deprecated use Form.Item name instead
     * @skip
     */
    name?: string;
    /**
     * 输入框内置标签
     * @en Inset label of input
     */
    label?: React.ReactNode;

    /**
     * 输入框状态
     * @en Input status
     */
    state?: 'success' | 'loading' | 'error';

    /**
     * 输入提示
     * @en Input prompt
     */
    placeholder?: string;

    /**
     * 日期值（受控）moment 对象
     * @en Date value (controlled) moment object
     */
    value?: string | Moment | null;

    /**
     * 初始日期值，moment 对象
     * @en Initial date value, moment object
     */
    defaultValue?: string | Moment | null;

    /**
     * 日期值的格式（用于限定用户输入和展示）
     * @en Date value format (for limiting user input and display)
     * @defaultValue 'YYYY'
     */
    format?: string;

    /**
     * 禁用日期函数
     * @en Disable date function
     */
    disabledDate?: (date: Moment, view: string) => boolean;

    /**
     * 自定义面板页脚
     * @en Custom panel footer
     */
    footerRender?: () => React.ReactNode;

    /**
     * 日期值改变时的回调
     * @en Callback when the date value changes
     */
    onChange?: (value: Moment | string | null) => void;

    /**
     * 输入框尺寸
     * @en Input box size
     * @defaultValue 'medium'
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 是否禁用
     * @en Whether it is disabled
     */
    disabled?: boolean;

    /**
     * 是否显示清空按钮
     * @en Whether to display the clear button
     * @defaultValue true
     */
    hasClear?: boolean;

    /**
     * 弹层显示状态
     * @en Pop-up display status
     */
    visible?: boolean;

    /**
     * 弹层默认是否显示
     * @en Pop-up default display status
     */
    defaultVisible?: boolean;

    /**
     * 弹层展示状态变化时的回调
     * @en Callback when the pop-up display status changes
     */
    onVisibleChange?: (visible: boolean, reason: string) => void;

    /**
     * 弹层触发方式
     * @en Pop-up trigger
     * @defaultValue 'click'
     */
    popupTriggerType?: 'click' | 'hover';

    /**
     * 弹层对齐方式，具体含义见 OverLay 文档
     * @en Pop-up alignment, see OverLay documentation
     * @defaultValue 'tl tl'
     */
    popupAlign?: string;

    /**
     * 弹层容器
     * @en Pop-up container
     */
    popupContainer?: PopupProps['container'];

    /**
     * 弹层自定义样式
     * @en Pop-up custom style
     */
    popupStyle?: React.CSSProperties;

    /**
     * 弹层自定义样式类
     * @en Pop-up custom style class
     */
    popupClassName?: string;

    /**
     * 弹层其他属性
     * @en Pop-up other attributes
     */
    popupProps?: React.PropsWithRef<PopupProps>;

    /**
     * 输入框其他属性
     * @en Input box other attributes
     */
    inputProps?: InputProps;

    /**
     * 日期输入框的 aria-label 属性
     * @en Date input box aria-label
     */
    dateInputAriaLabel?: string;
    /**
     * 预览态定制渲染函数
     * @en Preview state custom rendering function
     */
    renderPreview?: (value: Moment | null, props: DatePickerProps) => React.ReactNode;
    /**
     * 自定义弹层
     * @en Custom pop-up
     */
    popupComponent?: React.ComponentType<unknown>;

    /**
     * 自定义弹层内容
     * @en Custom pop-up content
     */
    popupContent?: React.ReactElement;
    /**
     * @skip
     */
    locale?: Locale['DatePicker'];
    /**
     * 是否跟随滚动
     * @en Whether Pop-up follows trigger when scrolling
     */
    followTrigger?: boolean;
    /**
     * 自定义年份渲染函数
     * @en Custom year rendering function
     */
    yearCellRender?: (calendarDate: Moment) => React.ReactNode;
    /**
     * 是否为预览态
     * @en Whether it is a preview state
     */
    isPreview?: boolean;
}

export interface YearPickerState {
    value: Moment | null;
    inputAsString: boolean;
    visible: boolean | undefined;
    dateInputStr: string;
    inputing: boolean;
}

export interface PanelFooterProps extends Pick<CommonProps, 'prefix'> {
    panel: PanelType;
    onPanelChange?: ((panel: PanelType) => void) | null;
    onOk: (value?: Moment[]) => void;
    locale: Locale['DatePicker'];
    disabledOk?: boolean;
    ranges?: { label: React.Key; value?: MomentInput[]; onChange: (value: Moment[]) => void }[];
    value?: unknown;
}

/**
 * @api DatePicker.WeekPicker
 * @order 5
 */
export interface WeekPickerProps
    extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange' | 'defaultValue'>,
        CommonProps {
    /**
     * @deprecated use Form.Item name instead
     * @skip
     */
    name?: string;
    /**
     * 日期值（受控）moment 对象
     * @en Date value (controlled) moment object
     */
    value?: string | Moment | null;

    /**
     * 初始日期值，moment 对象
     * @en Initial date value, moment object
     */
    defaultValue?: string | Moment | null;
    /**
     * 弹层显示状态
     * @en Pop-up display status
     */
    visible?: boolean;

    /**
     * 弹层默认是否显示
     * @en Pop-up default display status, uncontrolled
     */
    defaultVisible?: boolean;
    /**
     * 日期值的格式（用于限定用户输入和展示）
     * @en Date value format (for limiting user input and display)
     * @defaultValue 'GGGG-Wo'
     */
    format?: string;
    /**
     * 日期值改变时的回调
     * @en Callback when the date value changes
     */
    onChange?: (value: Moment | string | null) => void;
    /**
     * 弹层展示状态变化时的回调
     * @en Callback when the pop-up display status changes
     */
    onVisibleChange?: (visible: boolean, reason: string) => void;
    /**
     * 预览态定制渲染函数
     * @en Preview state custom rendering function
     */
    renderPreview?: (value: Moment | null, props: DatePickerProps) => React.ReactNode;
    /**
     * 自定义日期渲染函数
     * @en Custom date rendering function
     */
    dateCellRender?: (calendarDate: Moment) => React.ReactNode;
    /**
     * @skip
     */
    locale?: Locale['DatePicker'];
    /**
     * 输入框内置标签
     * @en Input box built-in label
     */
    label?: React.ReactNode;
    /**
     * 输入框状态
     * @en Input box status
     */
    state?: 'success' | 'loading' | 'error';
    /**
     * 默认展现的月
     * @en Default displayed month
     * @defaultValue false
     */
    defaultVisibleMonth?: () => Moment;
    /**
     * 弹层展示月份变化时的回调
     * @en Callback when the pop-up display month changes
     */
    onVisibleMonthChange?: (value: Moment, reason: string) => void;
    /**
     * 禁用日期函数
     * @en Disable date function
     */
    disabledDate?: (date: Moment, view: string) => boolean;
    /**
     * 自定义面板页脚
     * @en Custom panel footer
     */
    footerRender?: () => React.ReactNode;
    /**
     * 输入框尺寸
     * @en Input box size
     * @defaultValue 'medium'
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * 是否禁用
     * @en Whether to disable
     */
    disabled?: boolean;
    /**
     * 是否显示清空按钮
     * @en Whether to display the clear button
     * @defaultValue true
     */
    hasClear?: boolean;
    /**
     * 弹层触发方式
     * @en Pop-up trigger
     * @defaultValue 'click'
     */
    popupTriggerType?: 'click' | 'hover';
    /**
     * 弹层对齐方式，具体含义见 OverLay 文档
     * @en Pop-up alignment, see OverLay documentation
     * @defaultValue 'tl tl'
     */
    popupAlign?: string;
    /**
     * 弹层容器
     * @en Pop-up container
     */
    popupContainer?: PopupProps['container'];

    /**
     * 弹层自定义样式
     * @en Pop-up custom style
     */
    popupStyle?: React.CSSProperties;

    /**
     * 弹层自定义样式类
     * @en Pop-up custom style class
     */
    popupClassName?: string;

    /**
     * 弹层其他属性
     * @en Pop-up other attributes
     */
    popupProps?: React.PropsWithRef<PopupProps>;

    /**
     * 自定义弹层
     * @en Custom pop-up
     */
    popupComponent?: React.ComponentType<unknown>;
    /**
     * 自定义弹层内容
     * @en Custom pop-up content
     */
    popupContent?: React.ReactElement;
    /**
     * 是否跟随滚动
     * @en Whether Pop-up follows trigger when scrolling
     */
    followTrigger?: boolean;
    /**
     * 输入框其他属性
     * @en Input box other attributes
     */
    inputProps?: InputProps;
    /**
     * 自定义月份渲染函数
     * @en Custom month rendering function
     */
    monthCellRender?: (calendarDate: Moment) => React.ReactNode;
    /**
     * 自定义年份渲染函数
     * @en Custom year rendering function
     */
    yearCellRender?: (calendarDate: Moment) => React.ReactNode;
    /**
     * 是否为预览态
     * @en Whether it is a preview state
     */
    isPreview?: boolean;
}

export interface WeekPickerState {
    value: Moment | null;
    visible: boolean | undefined;
}

export interface DeprecatedProps {
    /**
     * @deprecated use visible instead
     */
    open?: boolean;
    /**
     * @deprecated use defaultVisible instead
     */
    defaultOpen?: boolean;
    /**
     * @deprecated use onVisibleChange instead
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * @deprecated use format/showTime.format instead
     */
    formater?: unknown;
}
