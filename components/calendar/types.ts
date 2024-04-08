import type React from 'react';
import type { Moment, MomentInput, Locale as MomentLocale } from 'moment';
import type { CommonProps } from '../util';
import { type Locale } from '../locale/types';

interface HTMLAttributesWeak
    extends Omit<React.HTMLAttributes<HTMLElement>, 'defaultValue' | 'select' | 'onSelect'> {}

export type CalendarMode = 'date' | 'month' | 'year';

export interface CalendarProps
    extends Omit<HTMLAttributesWeak, 'onChange'>,
        Omit<CommonProps, 'locale'> {
    /**
     * 默认选中的日期（moment 对象）
     */
    defaultValue?: Moment | null;

    /**
     * 选中的日期值 (moment 对象)
     */
    value?: Moment | null;

    /**
     * 是否展示非本月的日期
     */
    showOtherMonth?: boolean;

    /**
     * 默认展示的月份
     */
    defaultVisibleMonth?: () => void;

    /**
     * 展现形态
     */
    shape?: 'card' | 'fullscreen' | 'panel';

    /**
     * 选择日期单元格时的回调
     */
    onSelect?: (value: Moment) => void;

    /**
     * 展现的月份变化时的回调
     */
    onVisibleMonthChange?: (value: Moment, reason: VisibleMonthChangeType) => void;

    /**
     * 自定义样式类
     */
    className?: string;

    /**
     * 自定义日期渲染函数
     */
    dateCellRender?: (value: Moment) => React.ReactNode;

    /**
     * 自定义月份渲染函数
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
     */
    disabledDate?: (calendarDate: Moment, view: string) => boolean;

    /**
     * 面板可变化的模式列表，仅初始化时接收一次
     */
    modes?: CalendarMode[];
    /**
     * 面板模式
     */
    mode?: CalendarMode;
    /**
     * 禁用更改面板模式，采用 dropdown 的方式切换显示日期 (暂不正式对外透出)
     * @skip
     */
    disableChangeMode?: boolean;
    /**
     * 日期值的格式（用于日期 title 显示的格式）
     */
    format?: string;
    /**
     * 面板模式变化时的回调
     * @param mode - 对应面板模式 date month year
     * @returns
     */
    onModeChange?: (mode: string) => void;
    /**
     * 多语言文案
     */
    locale?: Locale['Calendar'];
    /**
     * 年份范围，[START_YEAR, END_YEAR] (只在 shape 为‘card’, 'fullscreen' 下生效)
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

export interface RangeCalendarProps extends HTMLAttributesWeak, Omit<CommonProps, 'locale'> {
    /**
     * 多语言文案
     */
    locale?: Locale['Calendar'];
    /**
     * 面板模式
     */
    mode?: CalendarMode;
    /**
     * 禁用更改面板模式，采用 dropdown 的方式切换显示日期 (暂不正式对外透出)
     * @skip
     */
    disableChangeMode?: boolean;
    /**
     * 日期值的格式（用于日期 title 显示的格式）
     */
    format?: string;
    /**
     * 自定义日期渲染函数
     */
    dateCellRender?: (value: Moment) => React.ReactNode;
    /**
     * 选择日期单元格时的回调
     */
    onSelect?: (value: Moment) => void;
    /**
     * 展现的月份变化时的回调
     */
    onVisibleMonthChange?: (value: Moment, reason: VisibleMonthChangeType) => void;
    /**
     * 是否展示非本月的日期
     */
    showOtherMonth?: boolean;
    /**
     * 开始日期（moment 对象）
     */
    startValue?: Moment | null;
    /**
     * 结束日期（moment 对象）
     */
    endValue?: Moment | null;
    /**
     * 默认的开始日期（moment 对象）
     */
    defaultStartValue?: Moment | null;
    /**
     * 默认的结束日期（moment 对象）
     */
    defaultEndValue?: Moment | null;
    /**
     * 自定义月份渲染函数
     */
    monthCellRender?: (calendarDate: Moment) => React.ReactNode;
    /**
     * 默认展示的月份
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
     */
    disabledDate?: (calendarDate: Moment, view: string) => boolean;
    /**
     * 年份范围，[START_YEAR, END_YEAR] (只在 shape 为‘card’, 'fullscreen' 下生效)
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
