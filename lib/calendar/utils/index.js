'use strict';

exports.__esModule = true;
exports.getLocaleData = exports.CALENDAR_MODES = exports.CALENDAR_MODE_DATE = exports.CALENDAR_MODE_MONTH = exports.CALENDAR_MODE_YEAR = exports.YEAR_TABLE_COL_COUNT = exports.YEAR_TABLE_ROW_COUNT = exports.MONTH_TABLE_COL_COUNT = exports.MONTH_TABLE_ROW_COUNT = exports.CALENDAR_TABLE_ROW_COUNT = exports.CALENDAR_TABLE_COL_COUNT = exports.DAYS_OF_WEEK = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.isDisabledDate = isDisabledDate;
exports.checkMomentObj = checkMomentObj;
exports.formatDateValue = formatDateValue;
exports.getVisibleMonth = getVisibleMonth;
exports.isSameYearMonth = isSameYearMonth;
exports.preFormatDateValue = preFormatDateValue;
exports.getYears = getYears;
exports.getMonths = getMonths;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DAYS_OF_WEEK = exports.DAYS_OF_WEEK = 7;

var CALENDAR_TABLE_COL_COUNT = exports.CALENDAR_TABLE_COL_COUNT = 7;

var CALENDAR_TABLE_ROW_COUNT = exports.CALENDAR_TABLE_ROW_COUNT = 6;

var MONTH_TABLE_ROW_COUNT = exports.MONTH_TABLE_ROW_COUNT = 4;

var MONTH_TABLE_COL_COUNT = exports.MONTH_TABLE_COL_COUNT = 3;

var YEAR_TABLE_ROW_COUNT = exports.YEAR_TABLE_ROW_COUNT = 4;

var YEAR_TABLE_COL_COUNT = exports.YEAR_TABLE_COL_COUNT = 3;

var CALENDAR_MODE_YEAR = exports.CALENDAR_MODE_YEAR = 'year';

var CALENDAR_MODE_MONTH = exports.CALENDAR_MODE_MONTH = 'month';

var CALENDAR_MODE_DATE = exports.CALENDAR_MODE_DATE = 'date';

var CALENDAR_MODES = exports.CALENDAR_MODES = [CALENDAR_MODE_DATE, CALENDAR_MODE_MONTH, CALENDAR_MODE_YEAR];

function isDisabledDate(date, fn, view) {
    if (typeof fn === 'function' && fn(date, view)) {
        return true;
    }
    return false;
}

function checkMomentObj(props, propName, componentName) {
    if (props[propName] && !_moment2.default.isMoment(props[propName])) {
        return new Error('Invalid prop ' + propName + ' supplied to ' + componentName + '. Required a moment object');
    }
}

function formatDateValue(value) {
    var reservedValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    if (value && _moment2.default.isMoment(value)) {
        return value;
    }
    return reservedValue;
}

function getVisibleMonth(defaultVisibleMonth, value) {
    var getVM = defaultVisibleMonth;
    if (typeof getVM !== 'function' || !_moment2.default.isMoment(getVM())) {
        getVM = function getVM() {
            if (value) {
                return value;
            }
            return (0, _moment2.default)();
        };
    }
    return getVM();
}

function isSameYearMonth(dateA, dateB) {
    return dateA.month() === dateB.month() && dateA.year() === dateB.year();
}

function preFormatDateValue(value, format) {
    var val = typeof value === 'string' ? (0, _moment2.default)(value, format, false) : value;
    if (val && _moment2.default.isMoment(val) && val.isValid()) {
        return val;
    }

    return null;
}

function getLocaleData(_ref, localeData) {
    var _months = _ref.months,
        shortMonths = _ref.shortMonths,
        _firstDayOfWeek = _ref.firstDayOfWeek,
        _weekdays = _ref.weekdays,
        shortWeekdays = _ref.shortWeekdays,
        veryShortWeekdays = _ref.veryShortWeekdays;

    return (0, _extends3.default)({}, localeData, {
        monthsShort: function monthsShort() {
            return shortMonths || localeData.monthsShort();
        },
        months: function months() {
            return _months || localeData.months();
        },
        firstDayOfWeek: function firstDayOfWeek() {
            return _firstDayOfWeek || localeData.firstDayOfWeek();
        },
        weekdays: function weekdays() {
            return _weekdays || localeData.weekdays;
        },
        weekdaysShort: function weekdaysShort() {
            return shortWeekdays || localeData.weekdaysShort();
        },
        weekdaysMin: function weekdaysMin() {
            return veryShortWeekdays || localeData.weekdaysMin();
        }
    });
}

/* istanbul ignore next */
exports.getLocaleData = getLocaleData;
function getYears(yearRange, yearRangeOffset, year) {
    var options = [];
    var startYear = yearRange[0],
        endYear = yearRange[1];

    if (!startYear || !endYear) {
        startYear = year - yearRangeOffset;
        endYear = year + yearRangeOffset;
    }

    for (var i = startYear; i <= endYear; i++) {
        options.push({
            label: i,
            value: i
        });
    }
    return options;
}

/* istanbul ignore next */
function getMonths(momentLocale) {
    var localeMonths = momentLocale.monthsShort();
    var options = [];
    for (var i = 0; i < 12; i++) {
        options.push({
            value: i,
            label: localeMonths[i]
        });
    }
    return options;
}