import { __assign, __read } from "tslib";
import moment from 'moment';
export var DAYS_OF_WEEK = 7;
export var CALENDAR_TABLE_COL_COUNT = 7;
export var CALENDAR_TABLE_ROW_COUNT = 6;
export var MONTH_TABLE_ROW_COUNT = 4;
export var MONTH_TABLE_COL_COUNT = 3;
export var YEAR_TABLE_ROW_COUNT = 4;
export var YEAR_TABLE_COL_COUNT = 3;
export var CALENDAR_MODE_YEAR = 'year';
export var CALENDAR_MODE_MONTH = 'month';
export var CALENDAR_MODE_DATE = 'date';
export var CALENDAR_MODES = [
    CALENDAR_MODE_DATE,
    CALENDAR_MODE_MONTH,
    CALENDAR_MODE_YEAR,
];
export function isDisabledDate(date, fn, view) {
    if (typeof fn === 'function' && fn(date, view)) {
        return true;
    }
    return false;
}
export function checkMomentObj(props, propName, componentName) {
    if (props[propName] && !moment.isMoment(props[propName])) {
        return new Error("Invalid prop ".concat(propName, " supplied to ").concat(componentName, ". Required a moment object"));
    }
}
export function formatDateValue(value, reservedValue) {
    if (reservedValue === void 0) { reservedValue = null; }
    if (value && moment.isMoment(value)) {
        return value;
    }
    return reservedValue;
}
export function getVisibleMonth(defaultVisibleMonth, value) {
    var getVM = defaultVisibleMonth;
    if (typeof getVM !== 'function' || !moment.isMoment(getVM())) {
        getVM = function () {
            if (value) {
                return value;
            }
            return moment();
        };
    }
    return getVM();
}
export function isSameYearMonth(dateA, dateB) {
    return dateA.month() === dateB.month() && dateA.year() === dateB.year();
}
export function preFormatDateValue(value, format) {
    var val = typeof value === 'string' ? moment(value, format, false) : value;
    if (val && moment.isMoment(val) && val.isValid()) {
        return val;
    }
    return null;
}
export function getLocaleData(_a, localeData) {
    var months = _a.months, shortMonths = _a.shortMonths, firstDayOfWeek = _a.firstDayOfWeek, weekdays = _a.weekdays, shortWeekdays = _a.shortWeekdays, veryShortWeekdays = _a.veryShortWeekdays;
    return __assign(__assign({}, localeData), { monthsShort: function () { return shortMonths || localeData.monthsShort(); }, months: function () { return months || localeData.months(); }, firstDayOfWeek: function () { return firstDayOfWeek || localeData.firstDayOfWeek(); }, weekdays: function () { return weekdays || localeData.weekdays(); }, weekdaysShort: function () { return shortWeekdays || localeData.weekdaysShort(); }, weekdaysMin: function () { return veryShortWeekdays || localeData.weekdaysMin(); } });
}
export function getYears(yearRange, yearRangeOffset, year) {
    var options = [];
    var _a = __read(yearRange, 2), startYear = _a[0], endYear = _a[1];
    if (!startYear || !endYear) {
        startYear = year - yearRangeOffset;
        endYear = year + yearRangeOffset;
    }
    for (var i = startYear; i <= endYear; i++) {
        options.push({
            label: i,
            value: i,
        });
    }
    return options;
}
export function getMonths(momentLocale) {
    var localeMonths = momentLocale.monthsShort();
    var options = [];
    for (var i = 0; i < 12; i++) {
        options.push({
            value: i,
            label: localeMonths[i],
        });
    }
    return options;
}
