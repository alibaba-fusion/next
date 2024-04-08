import type React from 'react';
import type { Moment, MomentInput, Locale as MomentLocale } from 'moment';
import type { CommonProps } from '../util';
import { type Locale } from '../locale/types';

interface HTMLAttributesWeak
    extends Omit<React.HTMLAttributes<HTMLElement>, 'defaultValue' | 'select' | 'onSelect'> {}

/**
 * @api
 */
export type CalendarMode = 'date' | 'month' | 'year';

/**
 * @api
 * @order 1
 */
export interface CalendarProps
    extends Omit<HTMLAttributesWeak, 'onChange'>,
        Omit<CommonProps, 'locale'> {
    /**
     * 默认选中的日期（moment 对象）
     * @en Default selected date (moment object)
     */
    defaultValue?: Moment | null;

    /**
     * 展现形态
     * @en Display shape
     * @defaultValue 'fullscreen'
     */
    shape?: 'card' | 'fullscreen' | 'panel';

    /**
     * 选中的日期值 (moment 对象)
     * @en Selected date value (moment object)
     */
    value?: Moment | null;

    /**
     * 面板模式
     * @en Panel mode
     */
    mode?: CalendarMode;

    /**
     * 是否展示非本月的日期
     * @en Whether to show dates outside the current month
     * @defaultValue true
     */
    showOtherMonth?: boolean;

    /**
     * 默认展示的月份
     * @en Default displayed month
     */
    defaultVisibleMonth?: () => void;
    /**
     * 面板模式变化时的回调
     * @en Callback when the panel mode changes
     * @param mode - 对应面板模式 date, month, year
     */
    onModeChange?: (mode: string) => void;

    /**
     * 选择日期单元格时的回调
     * @en Callback when selecting a date cell
     */
    onSelect?: (value: Moment) => void;

    /**
     * 展现的月份变化时的回调
     * @en Callback when the displayed month changes
     */
    onVisibleMonthChange?: (value: Moment, reason: VisibleMonthChangeType) => void;

    /**
     * 自定义日期渲染函数
     * @en Customize date rendering function
     * @defaultValue value =\> value.date()
     */
    dateCellRender?: (value: Moment) => React.ReactNode;

    /**
     * 自定义月份渲染函数
     * @en Customize month rendering function
     */
    monthCellRender?: (calendarDate: Moment) => React.ReactNode;

    /**
     * 兼容 0.x yearCellRender
     * @deprecated use monthCellRender/dateCellRender instead
     * @skip
     */
    yearCellRender?: (calendarDate: Moment) => React.ReactNode;

    /**
     * 不可选择的日期
     * @en Disabled date
     */
    disabledDate?: (calendarDate: Moment, view: string) => boolean;

    /**
     * 自定义样式类
     * @en Customize style class
     */
    className?: string;

    /**
     * 面板可变化的模式列表，仅初始化时接收一次
     * @en Panel mode list that can be changed, only received once at initialization
     * @defaultValue ['date', 'month', 'year']
     */
    modes?: CalendarMode[];
    /**
     * 禁用更改面板模式，采用 dropdown 的方式切换显示日期 (暂不正式对外透出)
     * @en Disable changing panel mode, use the dropdown method to switch displayed dates
     * @defaultValue false
     * @skip
     */
    disableChangeMode?: boolean;
    /**
     * 日期值的格式（用于日期 title 显示的格式）
     * @en Date value format(for date title display format)
     * @defaultValue 'YYYY-MM-DD'
     */
    format?: string;
    /**
     * 多语言文案
     * @en International text
     * @skip
     */
    locale?: Locale['Calendar'];
    /**
     * 年份范围，[START_YEAR, END_YEAR] (只在 shape 为‘card’, 'fullscreen' 下生效)
     * @en Year range, [START_YEAR, END_YEAR] (only effective when shape is 'card', 'fullscreen')
     */
    yearRange?: [number, number];

    /**
     * @deprecated use disabledDate instead
     * @skip
     */
    disabledMonth?: unknown;
    /**
     * @deprecated use disabledDate instead
     * @skip
     */
    disabledYear?: unknown;

    /**
     * @deprecated use shape instead
     * @skip
     */
    type?: CalendarProps['shape'];

    /**
     * @deprecated use onSelect instead
     * @skip
     */
    onChange?: (options: { mode: CalendarMode; value: Moment }) => void;

    /**
     * @deprecated use defaultVisibleMonth instead
     * @skip
     */
    base?: MomentInput;
}
/**
 * @api Calendar.RangeCalendar
 * @order 2
 */
export interface RangeCalendarProps extends HTMLAttributesWeak, Omit<CommonProps, 'locale'> {
    /**
     * 多语言文案
     * @skip
     */
    locale?: Locale['Calendar'];
    /**
     * 面板模式
     * @en Panel mode
     * @defaultValue 'date'
     */
    mode?: CalendarMode;
    /**
     * 禁用更改面板模式，采用 dropdown 的方式切换显示日期 (暂不正式对外透出)
     * @en Disable changing panel mode, use the dropdown method to switch displayed dates
     * @defaultValue false
     * @skip
     */
    disableChangeMode?: boolean;
    /**
     * 日期值的格式（用于日期 title 显示的格式）
     * @en Date value format(for date title display format)
     * @defaultValue 'YYYY-MM-DD'
     */
    format?: string;
    /**
     * 自定义日期渲染函数
     * @en Customize date rendering function
     * @defaultValue value =\> value.date()
     */
    dateCellRender?: (value: Moment) => React.ReactNode;
    /**
     * 选择日期单元格时的回调
     * @en Callback when selecting a date cell
     */
    onSelect?: (value: Moment) => void;
    /**
     * 展现的月份变化时的回调
     * @en Callback when the displayed month changes
     */
    onVisibleMonthChange?: (value: Moment, reason: VisibleMonthChangeType) => void;
    /**
     * 是否展示非本月的日期
     * @en Whether to show dates outside the current month
     * @defaultValue true
     */
    showOtherMonth?: boolean;
    /**
     * 开始日期（moment 对象）
     * @en Start date (moment object)
     */
    startValue?: Moment | null;
    /**
     * 结束日期（moment 对象）
     * @en End date (moment object)
     */
    endValue?: Moment | null;
    /**
     * 默认的开始日期（moment 对象）
     * @en Default start date (moment object)
     */
    defaultStartValue?: Moment | null;
    /**
     * 默认的结束日期（moment 对象）
     * @en Default end date (moment object)
     */
    defaultEndValue?: Moment | null;
    /**
     * 自定义月份渲染函数
     * @en Customize month rendering function
     */
    monthCellRender?: (calendarDate: Moment) => React.ReactNode;
    /**
     * 默认展示的月份
     * @en Default displayed month
     */
    defaultVisibleMonth?: () => void;
    /**
     * 兼容 0.x yearCellRender
     * @deprecated use monthCellRender/dateCellRender instead
     * @skip
     */
    yearCellRender?: (calendarDate: Moment) => React.ReactNode;
    /**
     * 不可选择的日期
     * @en Disabled date
     */
    disabledDate?: (calendarDate: Moment, view: string) => boolean;
    /**
     * 年份范围，[START_YEAR, END_YEAR] (只在 shape 为‘card’, 'fullscreen' 下生效)
     * @en Year range, [START_YEAR, END_YEAR] (only effective when shape is 'card', 'fullscreen')
     */
    yearRange?: [number, number];
}

export interface MomentLocaleLike
    extends Omit<
        MomentLocale,
        'monthsShort' | 'months' | 'firstDayOfWeek' | 'weekdays' | 'weekdaysShort' | 'weekdaysMin'
    > {
    monthsShort: () => string[];
    months: () => string[];
    firstDayOfWeek: () => number;
    weekdays: () => string[];
    weekdaysShort: () => string[];
    weekdaysMin: () => string[];
}

interface CommonTableProps {
    visibleMonth: Moment;
    today: Moment;
    momentLocale: MomentLocaleLike;
}

export interface DateTableProps
    extends Pick<
            Required<CalendarProps>,
            'dateCellRender' | 'showOtherMonth' | 'format' | 'disabledDate' | 'value' | 'locale'
        >,
        Pick<RangeCalendarProps, 'startValue' | 'endValue'>,
        Omit<CommonProps, 'locale'>,
        CommonTableProps {
    onSelectDate: (value: Moment, e: React.MouseEvent<HTMLElement>) => void;
}

export interface DateTableHeadProps extends CommonProps {
    momentLocale: MomentLocaleLike;
}

export interface MonthTableProps
    extends Pick<Required<CalendarProps>, 'value' | 'locale' | 'disabledDate' | 'monthCellRender'>,
        Omit<CommonProps, 'locale'>,
        CommonTableProps {
    onSelectMonth: (value: Moment, mode: 'date') => void;
}

export interface YearTableProps
    extends Pick<Required<CalendarProps>, 'value' | 'locale' | 'disabledDate' | 'yearCellRender'>,
        Omit<CommonProps, 'locale'>,
        CommonTableProps {
    onSelectYear: (value: Moment, mode: 'month') => void;
    goPrevDecade: () => void;
    goNextDecade: () => void;
}

export interface CardHeaderProps
    extends Pick<Required<CalendarProps>, 'yearRange' | 'locale' | 'mode'>,
        Omit<CommonProps, 'locale'> {
    yearRangeOffset?: number;
    momentLocale: MomentLocaleLike;
    changeMode: (mode: CalendarMode) => void;
    visibleMonth: Moment;
    changeVisibleMonth: (value: Moment, type: VisibleMonthChangeType) => void;
}

export interface RangePanelHeaderProps
    extends Pick<Required<RangeCalendarProps>, 'locale' | 'yearRange' | 'disableChangeMode'>,
        Omit<CommonProps, 'locale'> {
    startVisibleMonth: Moment;
    endVisibleMonth: Moment;
    yearRangeOffset?: number;
    momentLocale: MomentLocaleLike;
    changeMode: (mode: CalendarMode, type: 'start' | 'end') => void;
    goNextMonth: () => void;
    goNextYear: () => void;
    goPrevMonth: () => void;
    goPrevYear: () => void;
    changeVisibleMonth: (value: Moment, type: VisibleMonthChangeType) => void;
}

export interface DatePanelHeaderProps
    extends Pick<Required<CalendarProps>, 'locale' | 'disableChangeMode' | 'yearRange'>,
        Omit<CommonProps, 'locale'> {
    goNextMonth: () => void;
    goNextYear: () => void;
    goPrevMonth: () => void;
    goPrevYear: () => void;
    changeMode: (mode: CalendarMode, type: 'start' | 'end') => void;
    momentLocale: MomentLocaleLike;
    visibleMonth: Moment;
    yearRangeOffset: number;
    changeVisibleMonth: (value: Moment, type: VisibleMonthChangeType) => void;
}

export interface SelectMenuProps extends CommonProps {
    dataSource: { value: React.Key; label: React.ReactNode }[];
    onChange: (value: number) => void;
    value: string | number;
    className?: string;
}

export interface MonthPanelHeaderProps
    extends Pick<Required<CalendarProps>, 'locale'>,
        Omit<CommonProps, 'locale'> {
    goNextYear: () => void;
    goPrevYear: () => void;
    changeMode: (mode: CalendarMode) => void;
    visibleMonth: Moment;
}

export interface YearPanelHeaderProps
    extends Pick<Required<CalendarProps>, 'locale'>,
        Omit<CommonProps, 'locale'> {
    goPrevDecade: () => void;
    goNextDecade: () => void;
    visibleMonth: Moment;
}

/**
 * @api
 */
export type VisibleMonthChangeType = 'cellClick' | 'buttonClick' | 'yearSelect' | 'monthSelect';

export interface CalendarState {
    value: Moment | null;
    visibleMonth: Moment;
    mode: CalendarMode;
    MODES: CalendarMode[];
}

export interface RangeCalendarState {
    startValue: Moment | null;
    startVisibleMonth: Moment;
    endValue: Moment | null;
    prevMode: CalendarMode;
    mode?: CalendarMode;
    lastMode?: CalendarMode;
    activePanel?: 'start' | 'end';
    lastPanelType: 'start' | 'end';
}
