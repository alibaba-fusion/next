import moment, {
    type MomentInput,
    type Moment,
    type MomentFormatSpecification,
    type Locale as MomentLocale,
} from 'moment';
import { type CalendarMode, type MomentLocaleLike } from '../types';

export const DAYS_OF_WEEK = 7;

export const CALENDAR_TABLE_COL_COUNT = 7;

export const CALENDAR_TABLE_ROW_COUNT = 6;

export const MONTH_TABLE_ROW_COUNT = 4;

export const MONTH_TABLE_COL_COUNT = 3;

export const YEAR_TABLE_ROW_COUNT = 4;

export const YEAR_TABLE_COL_COUNT = 3;

export const CALENDAR_MODE_YEAR = 'year';

export const CALENDAR_MODE_MONTH = 'month';

export const CALENDAR_MODE_DATE = 'date';

export const CALENDAR_MODES = [
    CALENDAR_MODE_DATE,
    CALENDAR_MODE_MONTH,
    CALENDAR_MODE_YEAR,
] as CalendarMode[];

export function isDisabledDate(date: unknown, fn: unknown, view: unknown) {
    if (typeof fn === 'function' && fn(date, view)) {
        return true;
    }
    return false;
}

export function checkMomentObj(
    props: Record<string, unknown>,
    propName: string,
    componentName: string
) {
    if (props[propName] && !moment.isMoment(props[propName])) {
        return new Error(
            `Invalid prop ${propName} supplied to ${componentName}. Required a moment object`
        );
    }
}

export function formatDateValue(value: unknown, reservedValue = null) {
    if (value && moment.isMoment(value)) {
        return value;
    }
    return reservedValue;
}

export function getVisibleMonth(defaultVisibleMonth: () => Moment, value: unknown): Moment;
export function getVisibleMonth<V>(defaultVisibleMonth: unknown, value: V): Moment | NonNullable<V>;
export function getVisibleMonth<V>(
    defaultVisibleMonth: unknown,
    value: V
): Moment | NonNullable<V> {
    let getVM = defaultVisibleMonth;
    if (typeof getVM !== 'function' || !moment.isMoment(getVM())) {
        getVM = () => {
            if (value) {
                return value;
            }
            return moment();
        };
    }
    return (getVM as () => Moment | NonNullable<V>)();
}

export function isSameYearMonth(dateA: Moment, dateB: Moment) {
    return dateA.month() === dateB.month() && dateA.year() === dateB.year();
}

export function preFormatDateValue(value: MomentInput | Moment, format: MomentFormatSpecification) {
    const val = typeof value === 'string' ? moment(value, format, false) : value;
    if (val && moment.isMoment(val) && val.isValid()) {
        return val;
    }

    return null;
}

export function getLocaleData(
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
): MomentLocaleLike {
    return {
        ...localeData,
        monthsShort: () => shortMonths || localeData.monthsShort(),
        months: () => months || localeData.months(),
        firstDayOfWeek: () => firstDayOfWeek || localeData.firstDayOfWeek(),
        weekdays: () => weekdays || localeData.weekdays(),
        weekdaysShort: () => shortWeekdays || localeData.weekdaysShort(),
        weekdaysMin: () => veryShortWeekdays || localeData.weekdaysMin(),
    };
}

export function getYears(yearRange: [number?, number?], yearRangeOffset: number, year: number) {
    const options = [];
    let [startYear, endYear] = yearRange;
    if (!startYear || !endYear) {
        startYear = year - yearRangeOffset;
        endYear = year + yearRangeOffset;
    }

    for (let i = startYear; i <= endYear; i++) {
        options.push({
            label: i,
            value: i,
        });
    }
    return options;
}

export function getMonths(momentLocale: MomentLocaleLike) {
    const localeMonths = momentLocale.monthsShort();
    const options = [];
    for (let i = 0; i < 12; i++) {
        options.push({
            value: i,
            label: localeMonths[i],
        });
    }
    return options;
}
