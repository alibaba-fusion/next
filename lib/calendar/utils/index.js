"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonths = exports.getYears = exports.getLocaleData = exports.preFormatDateValue = exports.isSameYearMonth = exports.getVisibleMonth = exports.formatDateValue = exports.checkMomentObj = exports.isDisabledDate = exports.CALENDAR_MODES = exports.CALENDAR_MODE_DATE = exports.CALENDAR_MODE_MONTH = exports.CALENDAR_MODE_YEAR = exports.YEAR_TABLE_COL_COUNT = exports.YEAR_TABLE_ROW_COUNT = exports.MONTH_TABLE_COL_COUNT = exports.MONTH_TABLE_ROW_COUNT = exports.CALENDAR_TABLE_ROW_COUNT = exports.CALENDAR_TABLE_COL_COUNT = exports.DAYS_OF_WEEK = void 0;
var tslib_1 = require("tslib");
var moment_1 = tslib_1.__importDefault(require("moment"));
exports.DAYS_OF_WEEK = 7;
exports.CALENDAR_TABLE_COL_COUNT = 7;
exports.CALENDAR_TABLE_ROW_COUNT = 6;
exports.MONTH_TABLE_ROW_COUNT = 4;
exports.MONTH_TABLE_COL_COUNT = 3;
exports.YEAR_TABLE_ROW_COUNT = 4;
exports.YEAR_TABLE_COL_COUNT = 3;
exports.CALENDAR_MODE_YEAR = 'year';
exports.CALENDAR_MODE_MONTH = 'month';
exports.CALENDAR_MODE_DATE = 'date';
exports.CALENDAR_MODES = [
    exports.CALENDAR_MODE_DATE,
    exports.CALENDAR_MODE_MONTH,
    exports.CALENDAR_MODE_YEAR,
];
function isDisabledDate(date, fn, view) {
    if (typeof fn === 'function' && fn(date, view)) {
        return true;
    }
    return false;
}
exports.isDisabledDate = isDisabledDate;
function checkMomentObj(props, propName, componentName) {
    if (props[propName] && !moment_1.default.isMoment(props[propName])) {
        return new Error("Invalid prop ".concat(propName, " supplied to ").concat(componentName, ". Required a moment object"));
    }
}
exports.checkMomentObj = checkMomentObj;
function formatDateValue(value, reservedValue) {
    if (reservedValue === void 0) { reservedValue = null; }
    if (value && moment_1.default.isMoment(value)) {
        return value;
    }
    return reservedValue;
}
exports.formatDateValue = formatDateValue;
function getVisibleMonth(defaultVisibleMonth, value) {
    var getVM = defaultVisibleMonth;
    if (typeof getVM !== 'function' || !moment_1.default.isMoment(getVM())) {
        getVM = function () {
            if (value) {
                return value;
            }
            return (0, moment_1.default)();
        };
    }
    return getVM();
}
exports.getVisibleMonth = getVisibleMonth;
function isSameYearMonth(dateA, dateB) {
    return dateA.month() === dateB.month() && dateA.year() === dateB.year();
}
exports.isSameYearMonth = isSameYearMonth;
function preFormatDateValue(value, format) {
    var val = typeof value === 'string' ? (0, moment_1.default)(value, format, false) : value;
    if (val && moment_1.default.isMoment(val) && val.isValid()) {
        return val;
    }
    return null;
}
exports.preFormatDateValue = preFormatDateValue;
function getLocaleData(_a, localeData) {
    var months = _a.months, shortMonths = _a.shortMonths, firstDayOfWeek = _a.firstDayOfWeek, weekdays = _a.weekdays, shortWeekdays = _a.shortWeekdays, veryShortWeekdays = _a.veryShortWeekdays;
    return tslib_1.__assign(tslib_1.__assign({}, localeData), { monthsShort: function () { return shortMonths || localeData.monthsShort(); }, months: function () { return months || localeData.months(); }, firstDayOfWeek: function () { return firstDayOfWeek || localeData.firstDayOfWeek(); }, weekdays: function () { return weekdays || localeData.weekdays(); }, weekdaysShort: function () { return shortWeekdays || localeData.weekdaysShort(); }, weekdaysMin: function () { return veryShortWeekdays || localeData.weekdaysMin(); } });
}
exports.getLocaleData = getLocaleData;
function getYears(yearRange, yearRangeOffset, year) {
    var options = [];
    var _a = tslib_1.__read(yearRange, 2), startYear = _a[0], endYear = _a[1];
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
exports.getYears = getYears;
function getMonths(momentLocale) {
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
exports.getMonths = getMonths;
