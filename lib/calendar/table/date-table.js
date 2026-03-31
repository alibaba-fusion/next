"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var date_table_head_1 = tslib_1.__importDefault(require("./date-table-head"));
var utils_1 = require("../utils");
function isSameDay(a, b) {
    return a && b && a.isSame(b, 'day');
}
function isRangeDate(date, startDate, endDate) {
    return (date.format('L') !== startDate.format('L') &&
        date.format('L') !== endDate.format('L') &&
        date.valueOf() > startDate.valueOf() &&
        date.valueOf() < endDate.valueOf());
}
function isLastMonthDate(date, target) {
    if (date.year() < target.year()) {
        return 1;
    }
    return date.year() === target.year() && date.month() < target.month();
}
function isNextMonthDate(date, target) {
    if (date.year() > target.year()) {
        return 1;
    }
    return date.year() === target.year() && date.month() > target.month();
}
var DateTable = /** @class */ (function (_super) {
    tslib_1.__extends(DateTable, _super);
    function DateTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateTable.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, visibleMonth = _b.visibleMonth, showOtherMonth = _b.showOtherMonth, endValue = _b.endValue, format = _b.format, today = _b.today, momentLocale = _b.momentLocale, dateCellRender = _b.dateCellRender, disabledDate = _b.disabledDate, onSelectDate = _b.onSelectDate;
        var startValue = this.props.startValue || this.props.value;
        var firstDayOfMonth = visibleMonth.clone().startOf('month'); // 该月的 1 号
        var firstDayOfMonthInWeek = firstDayOfMonth.day(); // 星期几
        var firstDayOfWeek = momentLocale.firstDayOfWeek();
        var datesOfLastMonthCount = (firstDayOfMonthInWeek + utils_1.DAYS_OF_WEEK - firstDayOfWeek) % utils_1.DAYS_OF_WEEK;
        var lastMonthDate = firstDayOfMonth.clone();
        lastMonthDate.add(0 - datesOfLastMonthCount, 'days');
        var counter = 0;
        var currentDate;
        var dateList = [];
        for (var i = 0; i < utils_1.CALENDAR_TABLE_ROW_COUNT; i++) {
            for (var j = 0; j < utils_1.CALENDAR_TABLE_COL_COUNT; j++) {
                currentDate = lastMonthDate;
                if (counter) {
                    currentDate = currentDate.clone();
                    currentDate.add(counter, 'days');
                }
                dateList.push(currentDate);
                counter++;
            }
        }
        counter = 0; // reset counter
        var monthElements = [];
        for (var i = 0; i < utils_1.CALENDAR_TABLE_ROW_COUNT; i++) {
            var weekElements = [];
            var firstDayOfWeekInCurrentMonth = true;
            var lastDayOfWeekInCurrentMonth = true;
            for (var j = 0; j < utils_1.CALENDAR_TABLE_COL_COUNT; j++) {
                currentDate = dateList[counter];
                if (j === 0) {
                    // currentDate 的month 是否等于当前月 firstDayOfMonth
                    firstDayOfWeekInCurrentMonth =
                        currentDate.format('M') === firstDayOfMonth.format('M');
                }
                if (j === utils_1.CALENDAR_TABLE_COL_COUNT - 1) {
                    // currentDate 的month 是否等于当前月 firstDayOfMonth
                    lastDayOfWeekInCurrentMonth =
                        currentDate.format('M') === firstDayOfMonth.format('M');
                }
                var isLastMonth = isLastMonthDate(currentDate, visibleMonth);
                var isNextMonth = isNextMonthDate(currentDate, visibleMonth);
                var isCurrentMonth = !isLastMonth && !isNextMonth;
                var isDisabled = (0, utils_1.isDisabledDate)(currentDate, disabledDate, 'date');
                var isToday = !isDisabled && isSameDay(currentDate, today) && isCurrentMonth;
                var isSelected = !isDisabled &&
                    (isSameDay(currentDate, startValue) || isSameDay(currentDate, endValue)) &&
                    isCurrentMonth;
                var isInRange = !isDisabled &&
                    startValue &&
                    endValue &&
                    isRangeDate(currentDate, startValue, endValue) &&
                    isCurrentMonth;
                var cellContent = !showOtherMonth && !isCurrentMonth ? null : dateCellRender(currentDate);
                var elementCls = (0, classnames_1.default)((_a = {},
                    _a["".concat(prefix, "calendar-cell")] = true,
                    _a["".concat(prefix, "calendar-cell-prev-month")] = isLastMonth,
                    _a["".concat(prefix, "calendar-cell-next-month")] = isNextMonth,
                    _a["".concat(prefix, "calendar-cell-current")] = isToday,
                    _a["".concat(prefix, "inrange")] = isInRange,
                    _a["".concat(prefix, "selected")] = isSelected,
                    _a["".concat(prefix, "disabled")] = cellContent && isDisabled,
                    _a));
                weekElements.push(react_1.default.createElement("td", { key: counter, title: currentDate.format(format), onClick: isDisabled ? undefined : onSelectDate.bind(null, currentDate), className: elementCls, role: "gridcell", "aria-disabled": isDisabled ? 'true' : 'false', "aria-selected": isSelected ? 'true' : 'false' },
                    react_1.default.createElement("div", { className: "".concat(prefix, "calendar-date") }, cellContent)));
                counter++;
            }
            if (!showOtherMonth && !lastDayOfWeekInCurrentMonth && !firstDayOfWeekInCurrentMonth) {
                break;
            }
            monthElements.push(react_1.default.createElement("tr", { key: i, role: "row" }, weekElements));
        }
        return (react_1.default.createElement("table", { className: "".concat(prefix, "calendar-table"), role: "grid" },
            react_1.default.createElement(date_table_head_1.default, tslib_1.__assign({}, this.props, { momentLocale: momentLocale })),
            react_1.default.createElement("tbody", { className: "".concat(prefix, "calendar-tbody") }, monthElements)));
    };
    return DateTable;
}(react_1.PureComponent));
exports.default = DateTable;
