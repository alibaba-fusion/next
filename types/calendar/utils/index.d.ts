import moment, {
    type MomentInput,
    type Moment,
    type MomentFormatSpecification,
    type Locale as MomentLocale,
} from 'moment';
import { type CalendarMode, type MomentLocaleLike } from '../types';
export declare const DAYS_OF_WEEK = 7;
export declare const CALENDAR_TABLE_COL_COUNT = 7;
export declare const CALENDAR_TABLE_ROW_COUNT = 6;
export declare const MONTH_TABLE_ROW_COUNT = 4;
export declare const MONTH_TABLE_COL_COUNT = 3;
export declare const YEAR_TABLE_ROW_COUNT = 4;
export declare const YEAR_TABLE_COL_COUNT = 3;
export declare const CALENDAR_MODE_YEAR = 'year';
export declare const CALENDAR_MODE_MONTH = 'month';
export declare const CALENDAR_MODE_DATE = 'date';
export declare const CALENDAR_MODES: CalendarMode[];
export declare function isDisabledDate(date: unknown, fn: unknown, view: unknown): boolean;
export declare function checkMomentObj(
    props: Record<string, unknown>,
    propName: string,
    componentName: string
): Error | undefined;
export declare function formatDateValue(value: unknown, reservedValue?: null): moment.Moment | null;
export declare function getVisibleMonth(defaultVisibleMonth: () => Moment, value: unknown): Moment;
export declare function getVisibleMonth<V>(
    defaultVisibleMonth: unknown,
    value: V
): Moment | NonNullable<V>;
export declare function isSameYearMonth(dateA: Moment, dateB: Moment): boolean;
export declare function preFormatDateValue(
    value: MomentInput | Moment,
    format: MomentFormatSpecification
): moment.Moment | null;
export declare function getLocaleData(
    {
        months,
        shortMonths,
        firstDayOfWeek,
        weekdays,
        shortWeekdays,
        veryShortWeekdays,
    }: {
        months?: string[];
        shortMonths?: string[];
        firstDayOfWeek?: number;
        weekdays?: string[];
        shortWeekdays?: string[];
        veryShortWeekdays?: string[];
    },
    localeData: MomentLocale
): MomentLocaleLike;
export declare function getYears(
    yearRange: [number?, number?],
    yearRangeOffset: number,
    year: number
): {
    label: number;
    value: number;
}[];
export declare function getMonths(momentLocale: MomentLocaleLike): {
    value: number;
    label: string;
}[];
