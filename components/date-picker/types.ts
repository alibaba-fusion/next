import type { Moment, MomentInput } from 'moment';
import type React from 'react';
import type { CommonProps } from '../util';
import type { PopupProps } from '../overlay';
import type { InputProps } from '../input';
import type { TimePickerProps } from '../time-picker';
import type { Locale } from '../locale/types';
import type { RangeCalendarProps } from '../calendar';

export interface MonthPickerProps
    extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange' | 'defaultValue'>,
        CommonProps {
    name?: string;
    /**
     * 输入框内置标签
     */
    label?: React.ReactNode;

    /**
     * 输入框状态
     */
    state?: 'success' | 'loading' | 'error';

    /**
     * 输入提示
     */
    placeholder?: string;

    /**
     * 默认展现的年
     */
    defaultVisibleYear?: () => Moment | null;

    /**
     * 日期值（受控）moment 对象
     */
    value?: string | Moment | null;

    /**
     * 初始日期值，moment 对象
     */
    defaultValue?: string | Moment | null;

    /**
     * 日期值的格式（用于限定用户输入和展示）
     */
    format?: string;

    /**
     * 禁用日期函数
     */
    disabledDate?: (date: Moment, view: string) => boolean;

    /**
     * 自定义面板页脚
     */
    footerRender?: () => React.ReactNode;

    /**
     * 日期值改变时的回调
     */
    onChange?: (value: Moment | string | null) => void;

    /**
     * 输入框尺寸
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 是否禁用
     */
    disabled?: boolean;

    /**
     * 是否显示清空按钮
     */
    hasClear?: boolean;

    /**
     * 弹层显示状态
     */
    visible?: boolean;

    /**
     * 弹层默认是否显示
     */
    defaultVisible?: boolean;

    /**
     * 弹层展示状态变化时的回调
     */
    onVisibleChange?: (visible: boolean, reason: string) => void;

    /**
     * 弹层触发方式
     */
    popupTriggerType?: 'click' | 'hover';

    /**
     * 弹层对齐方式，具体含义见 OverLay 文档
     */
    popupAlign?: string;

    /**
     * 弹层容器
     */
    popupContainer?: PopupProps['container'];

    /**
     * 弹层自定义样式
     */
    popupStyle?: React.CSSProperties;

    /**
     * 弹层自定义样式类
     */
    popupClassName?: string;

    /**
     * 弹层其他属性
     */
    popupProps?: React.PropsWithRef<PopupProps>;

    /**
     * 自定义弹层
     */
    popupComponent?: React.ComponentType<unknown>;

    /**
     * 自定义弹层内容
     */
    popupContent?: React.ReactElement;

    /**
     * 是否跟随滚动
     */
    followTrigger?: boolean;

    /**
     * 输入框其他属性
     */
    inputProps?: InputProps;

    /**
     * 自定义月份渲染函数
     */
    monthCellRender?: (calendarDate: Moment) => React.ReactNode;

    /**
     * 日期输入框的 aria-label 属性
     */
    dateInputAriaLabel?: string;
    renderPreview?: (value: Moment | null, props: MonthPickerProps) => void;
    /**
     * 自定义年份渲染函数
     */
    yearCellRender?: (calendarDate: Moment) => React.ReactNode;
    /**
     * 是否为预览态
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

export interface RangePickerProps
    extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange' | 'defaultValue' | 'placeholder'>,
        CommonProps {
    name?: string;
    type?: 'date' | 'month' | 'year';

    /**
     * 默认展示的起始月份
     */
    defaultVisibleMonth?: () => Moment | null;

    /**
     * 输入提示
     */
    placeholder?: Array<string> | string;

    /**
     * 日期范围值数组 [moment, moment]
     */
    value?: [start: Moment | string | null | undefined, end?: Moment | string | undefined | null];

    /**
     * 初始的日期范围值数组 [moment, moment]
     */
    defaultValue?: [
        start: Moment | string | null | undefined,
        end?: Moment | string | undefined | null,
    ];

    /**
     * 日期格式
     */
    format?: string;

    /**
     * 是否使用时间控件，支持传入 TimePicker 的属性
     */
    showTime?:
        | (Omit<TimePickerProps, 'defaultValue'> & {
              defaultValue?: Moment | string | null | (Moment | string | null)[];
          })
        | boolean;

    /**
     * 每次选择是否重置时间（仅在 showTime 开启时有效）
     */
    resetTime?: boolean;

    /**
     * 禁用日期函数
     */
    disabledDate?: (date: Moment, view: string) => boolean;

    /**
     * 自定义面板页脚
     */
    footerRender?: () => React.ReactNode;

    /**
     * 日期范围值改变时的回调 [ MomentObject|String, MomentObject|String ]
     */
    onChange?: (value: (string | Moment | null | undefined)[]) => void;

    /**
     * 点击确认按钮时的回调 返回开始时间和结束时间`[ MomentObject|String, MomentObject|String ]`
     */
    onOk?: (value: (string | Moment | null | undefined)[]) => void;

    /**
     * 输入框内置标签
     */
    label?: React.ReactNode;

    /**
     * 输入框状态
     */
    state?: 'error' | 'loading' | 'success';

    /**
     * 输入框尺寸
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 是否禁用
     */
    disabled?: boolean;

    /**
     * 是否显示清空按钮
     */
    hasClear?: boolean;

    /**
     * 弹层显示状态
     */
    visible?: boolean;

    /**
     * 弹层默认是否显示
     */
    defaultVisible?: boolean;

    /**
     * 弹层展示状态变化时的回调
     */
    onVisibleChange?: (visible: boolean, reason: string) => void;

    /**
     * 弹层触发方式
     */
    popupTriggerType?: 'click' | 'hover';

    /**
     * 弹层对齐方式，具体含义见 OverLay 文档
     */
    popupAlign?: string;

    /**
     * 弹层容器
     */
    popupContainer?: PopupProps['container'];

    /**
     * 弹层自定义样式
     */
    popupStyle?: React.CSSProperties;

    /**
     * 弹层自定义样式类
     */
    popupClassName?: string;

    /**
     * 弹层其他属性
     */
    popupProps?: React.PropsWithRef<PopupProps>;

    /**
     * 输入框其他属性
     */
    inputProps?: InputProps;

    /**
     * 自定义日期单元格渲染
     */
    dateCellRender?: () => void;

    /**
     * 开始日期输入框的 aria-label 属性
     */
    startDateInputAriaLabel?: string;

    /**
     * 开始时间输入框的 aria-label 属性
     */
    startTimeInputAriaLabel?: string;

    /**
     * 结束日期输入框的 aria-label 属性
     */
    endDateInputAriaLabel?: string;

    /**
     * 结束时间输入框的 aria-label 属性
     */
    endTimeInputAriaLabel?: string;
    renderPreview?: (
        value: [Moment | null, Moment | null],
        props: RangePickerProps
    ) => React.ReactNode;
    onVisibleMonthChange?: RangeCalendarProps['onVisibleMonthChange'];
    /**
     * @skip
     */
    locale?: Locale['DatePicker'];
    /**
     * 自定义弹层
     */
    popupComponent?: React.ComponentType<unknown>;

    /**
     * 自定义弹层内容
     */
    popupContent?: React.ReactElement;
    /**
     * 自定义月份渲染函数
     */
    monthCellRender?: (calendarDate: Moment) => React.ReactNode;

    /**
     * 自定义年份渲染函数
     */
    yearCellRender?: (calendarDate: Moment) => React.ReactNode;
    /**
     * 是否跟随滚动
     */
    followTrigger?: boolean;
    /**
     * 是否为预览态
     */
    isPreview?: boolean;
    /**
     * 年份范围，[START_YEAR, END_YEAR]
     * @en Year range, [START_YEAR, END_YEAR]
     */
    yearRange?: [start: number, end: number];
    ranges?: {
        [key: string]: MomentInput[];
    };
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

export interface YearPickerProps
    extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange' | 'defaultValue'>,
        CommonProps {
    name?: string;
    /**
     * 输入框内置标签
     */
    label?: React.ReactNode;

    /**
     * 输入框状态
     */
    state?: 'success' | 'loading' | 'error';

    /**
     * 输入提示
     */
    placeholder?: string;

    /**
     * 日期值（受控）moment 对象
     */
    value?: string | Moment | null;

    /**
     * 初始日期值，moment 对象
     */
    defaultValue?: string | Moment | null;

    /**
     * 日期值的格式（用于限定用户输入和展示）
     */
    format?: string;

    /**
     * 禁用日期函数
     */
    disabledDate?: (date: Moment, view: string) => boolean;

    /**
     * 自定义面板页脚
     */
    footerRender?: () => React.ReactNode;

    /**
     * 日期值改变时的回调
     */
    onChange?: (value: Moment | string | null) => void;

    /**
     * 输入框尺寸
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 是否禁用
     */
    disabled?: boolean;

    /**
     * 是否显示清空按钮
     */
    hasClear?: boolean;

    /**
     * 弹层显示状态
     */
    visible?: boolean;

    /**
     * 弹层默认是否显示
     */
    defaultVisible?: boolean;

    /**
     * 弹层展示状态变化时的回调
     */
    onVisibleChange?: (visible: boolean, reason: string) => void;

    /**
     * 弹层触发方式
     */
    popupTriggerType?: 'click' | 'hover';

    /**
     * 弹层对齐方式，具体含义见 OverLay 文档
     */
    popupAlign?: string;

    /**
     * 弹层容器
     */
    popupContainer?: PopupProps['container'];

    /**
     * 弹层自定义样式
     */
    popupStyle?: React.CSSProperties;

    /**
     * 弹层自定义样式类
     */
    popupClassName?: string;

    /**
     * 弹层其他属性
     */
    popupProps?: React.PropsWithRef<PopupProps>;

    /**
     * 输入框其他属性
     */
    inputProps?: InputProps;

    /**
     * 日期输入框的 aria-label 属性
     */
    dateInputAriaLabel?: string;
    renderPreview?: (value: Moment | null, props: DatePickerProps) => React.ReactNode;
    /**
     * 自定义弹层
     */
    popupComponent?: React.ComponentType<unknown>;

    /**
     * 自定义弹层内容
     */
    popupContent?: React.ReactElement;
    /**
     * @skip
     */
    locale?: Locale['DatePicker'];
    /**
     * 是否跟随滚动
     */
    followTrigger?: boolean;
    /**
     * 自定义年份渲染函数
     */
    yearCellRender?: (calendarDate: Moment) => React.ReactNode;
    /**
     * 是否为预览态
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

export interface DatePickerProps
    extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange' | 'defaultValue'>,
        CommonProps {
    name?: string;
    /**
     * 输入框内置标签
     */
    label?: React.ReactNode;

    /**
     * 输入框状态
     */
    state?: 'success' | 'loading' | 'error';

    /**
     * 输入提示
     */
    placeholder?: string;

    /**
     * 默认展现的月
     */
    defaultVisibleMonth?: () => Moment;

    /**
     * 默认展现的年
     */
    defaultVisibleYear?: () => Moment;

    /**
     * 日期值（受控）moment 对象
     */
    value?: string | Moment | null;

    /**
     * 初始日期值，moment 对象
     */
    defaultValue?: string | Moment | null;

    /**
     * 日期值的格式（用于限定用户输入和展示）
     */
    format?: string;

    /**
     * 是否使用时间控件，传入 TimePicker 的属性 \{ defaultValue, format, ... \}
     */
    showTime?: TimePickerProps | boolean;

    /**
     * 每次选择日期时是否重置时间（仅在 showTime 开启时有效）
     */
    resetTime?: boolean;

    /**
     * 禁用日期函数
     */
    disabledDate?: (date: Moment, view: string) => boolean;

    /**
     * 自定义面板页脚
     */
    footerRender?: () => React.ReactNode;

    /**
     * 日期值改变时的回调
     */
    onChange?: (value: string | Moment | null) => void;

    /**
     * 点击确认按钮时的回调
     */
    onOk?: (value: string | Moment | null) => void;

    /**
     * 输入框尺寸
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 是否禁用
     */
    disabled?: boolean;

    /**
     * 是否显示清空按钮
     */
    hasClear?: boolean;

    /**
     * 弹层显示状态
     */
    visible?: boolean;

    /**
     * 弹层默认是否显示
     */
    defaultVisible?: boolean;

    /**
     * 弹层展示状态变化时的回调
     */
    onVisibleChange?: (visible: boolean, reason: string) => void;

    /**
     * 弹层展示月份变化时的回调
     */
    onVisibleMonthChange?: (value: Moment, reason: string) => void;

    /**
     * 弹层触发方式
     */
    popupTriggerType?: 'click' | 'hover';

    /**
     * 弹层对齐方式，具体含义见 OverLay 文档
     */
    popupAlign?: string;

    /**
     * 弹层容器
     */
    popupContainer?: PopupProps['container'];

    /**
     * 弹层自定义样式
     */
    popupStyle?: React.CSSProperties;

    /**
     * 弹层自定义样式类
     */
    popupClassName?: string;

    /**
     * 弹层其他属性
     */
    popupProps?: React.PropsWithRef<PopupProps>;

    /**
     * 输入框其他属性
     */
    inputProps?: InputProps;

    /**
     * 自定义日期渲染函数
     */
    dateCellRender?: (calendarDate: Moment) => React.ReactNode;

    /**
     * 自定义月份渲染函数
     */
    monthCellRender?: (calendarDate: Moment) => React.ReactNode;

    /**
     * 自定义年份渲染函数
     */
    yearCellRender?: (calendarDate: Moment) => React.ReactNode;

    /**
     * 日期输入框的 aria-label 属性
     */
    dateInputAriaLabel?: string;

    /**
     * 时间输入框的 aria-label 属性
     */
    timeInputAriaLabel?: string;

    /**
     * 是否为预览态
     */
    isPreview?: boolean;

    renderPreview?: (value: Moment | null, props: DatePickerProps) => React.ReactNode;

    /**
     * 是否跟随滚动
     */
    followTrigger?: boolean;

    /**
     * 自定义弹层
     */
    popupComponent?: React.ComponentType<unknown>;

    /**
     * 自定义弹层内容
     */
    popupContent?: React.ReactElement;

    /**
     * 禁用日期选择器的日期模式切换
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

export type PanelType = 'time-panel' | 'date-panel';

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
    [key: string]: unknown;
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

export interface WeekPickerProps
    extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange' | 'defaultValue'>,
        CommonProps {
    value?: string | Moment | null;
    defaultValue?: string | Moment | null;
    visible?: boolean;
    defaultVisible?: boolean;
    /**
     * 日期值的格式（用于限定用户输入和展示）
     */
    format?: string;
    /**
     * 日期值改变时的回调
     */
    onChange?: (value: Moment | string | null) => void;
    /**
     * 弹层展示状态变化时的回调
     */
    onVisibleChange?: (visible: boolean, reason: string) => void;
    renderPreview?: (value: Moment | null, props: DatePickerProps) => React.ReactNode;
    /**
     * 自定义日期渲染函数
     */
    dateCellRender?: (calendarDate: Moment) => React.ReactNode;
    /**
     * @skip
     */
    locale?: Locale['DatePicker'];
    /**
     * 输入框内置标签
     */
    label?: React.ReactNode;
    /**
     * 输入框状态
     */
    state?: 'success' | 'loading' | 'error';
    /**
     * 默认展现的月
     */
    defaultVisibleMonth?: () => Moment;
    /**
     * 弹层展示月份变化时的回调
     */
    onVisibleMonthChange?: (value: Moment, reason: string) => void;
    /**
     * 禁用日期函数
     */
    disabledDate?: (date: Moment, view: string) => boolean;
    /**
     * 自定义面板页脚
     */
    footerRender?: () => React.ReactNode;
    /**
     * 输入框尺寸
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 是否显示清空按钮
     */
    hasClear?: boolean;
    /**
     * 弹层触发方式
     */
    popupTriggerType?: 'click' | 'hover';
    /**
     * 弹层对齐方式，具体含义见 OverLay 文档
     */
    popupAlign?: string;
    /**
     * 弹层容器
     */
    popupContainer?: PopupProps['container'];

    /**
     * 弹层自定义样式
     */
    popupStyle?: React.CSSProperties;

    /**
     * 弹层自定义样式类
     */
    popupClassName?: string;

    /**
     * 弹层其他属性
     */
    popupProps?: React.PropsWithRef<PopupProps>;

    /**
     * 自定义弹层
     */
    popupComponent?: React.ComponentType<unknown>;
    /**
     * 自定义弹层内容
     */
    popupContent?: React.ReactElement;
    /**
     * 是否跟随滚动
     */
    followTrigger?: boolean;
    /**
     * 输入框其他属性
     */
    inputProps?: InputProps;
    /**
     * 自定义月份渲染函数
     */
    monthCellRender?: (calendarDate: Moment) => React.ReactNode;
    /**
     * 自定义年份渲染函数
     */
    yearCellRender?: (calendarDate: Moment) => React.ReactNode;
    /**
     * 是否为预览态
     */
    isPreview?: boolean;
}

export interface WeekPickerState {
    value: Moment | null;
    visible: boolean | undefined;
}
