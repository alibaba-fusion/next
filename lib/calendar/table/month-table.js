"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var utils_1 = require("../utils");
function isSameMonth(currentDate, selectedDate) {
    return (selectedDate &&
        currentDate.year() === selectedDate.year() &&
        currentDate.month() === selectedDate.month());
}
var MonthTable = /** @class */ (function (_super) {
    tslib_1.__extends(MonthTable, _super);
    function MonthTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MonthTable.prototype.onMonthCellClick = function (date) {
        this.props.onSelectMonth(date, 'date');
    };
    MonthTable.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, value = _b.value, visibleMonth = _b.visibleMonth, disabledDate = _b.disabledDate, today = _b.today, momentLocale = _b.momentLocale, monthCellRender = _b.monthCellRender;
        var monthLocale = momentLocale.monthsShort();
        var counter = 0;
        var monthList = [];
        for (var i = 0; i < utils_1.MONTH_TABLE_ROW_COUNT; i++) {
            var rowList = [];
            for (var j = 0; j < utils_1.MONTH_TABLE_COL_COUNT; j++) {
                var monthDate = visibleMonth.clone().month(counter);
                var isDisabled = (0, utils_1.isDisabledDate)(monthDate, disabledDate, 'month');
                var isSelected = isSameMonth(monthDate, value);
                var isThisMonth = isSameMonth(monthDate, today);
                var elementCls = (0, classnames_1.default)((_a = {},
                    _a["".concat(prefix, "calendar-cell")] = true,
                    _a["".concat(prefix, "calendar-cell-current")] = isThisMonth,
                    _a["".concat(prefix, "selected")] = isSelected,
                    _a["".concat(prefix, "disabled")] = isDisabled,
                    _a));
                var localedMonth = monthLocale[counter];
                var monthCellContent = monthCellRender
                    ? monthCellRender(monthDate)
                    : localedMonth;
                rowList.push(react_1.default.createElement("td", { key: counter, title: localedMonth, onClick: isDisabled ? undefined : this.onMonthCellClick.bind(this, monthDate), className: elementCls, role: "gridcell", "aria-disabled": isDisabled ? 'true' : 'false', "aria-selected": isSelected ? 'true' : 'false' },
                    react_1.default.createElement("div", { className: "".concat(prefix, "calendar-month") }, monthCellContent)));
                counter++;
            }
            monthList.push(react_1.default.createElement("tr", { key: i, role: "row" }, rowList));
        }
        return (react_1.default.createElement("table", { className: "".concat(prefix, "calendar-table"), role: "grid" },
            react_1.default.createElement("tbody", { className: "".concat(prefix, "calendar-tbody"), role: "rowgroup" }, monthList)));
    };
    return MonthTable;
}(react_1.PureComponent));
exports.default = MonthTable;
