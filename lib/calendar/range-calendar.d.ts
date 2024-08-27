import React, { type MouseEvent } from 'react';
import PropTypes from 'prop-types';
import { type Moment } from 'moment';
import { type ClassPropsWithDefault } from '../util';
import { checkMomentObj } from './utils';
import type { CalendarMode, RangeCalendarProps, RangeCalendarState, VisibleMonthChangeType } from './types';
type InnerRangeCalendarProps = ClassPropsWithDefault<RangeCalendarProps, typeof RangeCalendar.defaultProps>;
declare class RangeCalendar extends React.Component<RangeCalendarProps, RangeCalendarState> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
        defaultStartValue: typeof checkMomentObj;
        defaultEndValue: typeof checkMomentObj;
        startValue: typeof checkMomentObj;
        endValue: typeof checkMomentObj;
        mode: PropTypes.Requireable<CalendarMode>;
        disableChangeMode: PropTypes.Requireable<boolean>;
        format: PropTypes.Requireable<string>;
        yearRange: PropTypes.Requireable<(number | null | undefined)[]>;
        showOtherMonth: PropTypes.Requireable<boolean>;
        defaultVisibleMonth: PropTypes.Requireable<(...args: any[]) => any>;
        onVisibleMonthChange: PropTypes.Requireable<(...args: any[]) => any>;
        disabledDate: PropTypes.Requireable<(...args: any[]) => any>;
        onSelect: PropTypes.Requireable<(...args: any[]) => any>;
        dateCellRender: PropTypes.Requireable<(...args: any[]) => any>;
        monthCellRender: PropTypes.Requireable<(...args: any[]) => any>;
        yearCellRender: PropTypes.Requireable<(...args: any[]) => any>;
        locale: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        defaultPropsConfig: PropTypes.Requireable<object>;
        errorBoundary: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        pure: PropTypes.Requireable<boolean>;
        warning: PropTypes.Requireable<boolean>;
        device: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<any>;
        popupContainer: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        prefix: string;
        rtl: boolean;
        mode: string;
        disableChangeMode: boolean;
        format: string;
        dateCellRender: (value: Moment) => number;
        onSelect: () => void;
        onVisibleMonthChange: () => void;
        locale: Partial<{
            today: string;
            now: string;
            ok: string;
            clear: string;
            month: string;
            year: string;
            prevYear: string;
            nextYear: string;
            prevMonth: string;
            nextMonth: string;
            prevDecade: string;
            nextDecade: string;
            yearSelectAriaLabel: string;
            monthSelectAriaLabel: string;
            monthBeforeYear?: boolean | undefined;
            format?: {
                months?: string[] | undefined;
                shortMonths?: string[] | undefined;
                firstDayOfWeek?: number | undefined;
                weekdays?: string[] | undefined;
                shortWeekdays?: string[] | undefined;
                veryShortWeekdays?: string[] | undefined;
            } | undefined;
        }> & {
            momentLocale?: string | undefined;
        };
        showOtherMonth: boolean;
    };
    readonly props: InnerRangeCalendarProps;
    today: Moment;
    constructor(props: RangeCalendarProps);
    static getDerivedStateFromProps(props: InnerRangeCalendarProps, state: RangeCalendarState): Partial<RangeCalendarState>;
    onSelectCell: (date: Moment, nextMode: CalendarMode | MouseEvent<HTMLElement>) => void;
    changeMode: (mode: CalendarMode, activePanel?: 'start' | 'end') => void;
    changeVisibleMonth: (date: Moment, reason: VisibleMonthChangeType) => void;
    /**
     * 根据日期偏移量设置当前展示的月份
     * @param offset - 日期偏移量
     * @param type - 日期偏移类型 days, months, years
     */
    changeVisibleMonthByOffset: (offset: number, type: 'days' | 'months' | 'years') => void;
    goPrevDecade: () => void;
    goNextDecade: () => void;
    goPrevYear: () => void;
    goNextYear: () => void;
    goPrevMonth: () => void;
    goNextMonth: () => void;
    render(): React.JSX.Element;
}
declare const _default: import("../config-provider/types").ConfiguredComponentClass<RangeCalendarProps & import("../config-provider/types").ComponentCommonProps, RangeCalendar, {}>;
export default _default;
