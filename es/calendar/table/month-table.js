import { __extends } from "tslib";
import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { isDisabledDate, MONTH_TABLE_ROW_COUNT, MONTH_TABLE_COL_COUNT } from '../utils';
function isSameMonth(currentDate, selectedDate) {
    return (selectedDate &&
        currentDate.year() === selectedDate.year() &&
        currentDate.month() === selectedDate.month());
}
var MonthTable = /** @class */ (function (_super) {
    __extends(MonthTable, _super);
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
        for (var i = 0; i < MONTH_TABLE_ROW_COUNT; i++) {
            var rowList = [];
            for (var j = 0; j < MONTH_TABLE_COL_COUNT; j++) {
                var monthDate = visibleMonth.clone().month(counter);
                var isDisabled = isDisabledDate(monthDate, disabledDate, 'month');
                var isSelected = isSameMonth(monthDate, value);
                var isThisMonth = isSameMonth(monthDate, today);
                var elementCls = classnames((_a = {},
                    _a["".concat(prefix, "calendar-cell")] = true,
                    _a["".concat(prefix, "calendar-cell-current")] = isThisMonth,
                    _a["".concat(prefix, "selected")] = isSelected,
                    _a["".concat(prefix, "disabled")] = isDisabled,
                    _a));
                var localedMonth = monthLocale[counter];
                var monthCellContent = monthCellRender
                    ? monthCellRender(monthDate)
                    : localedMonth;
                rowList.push(React.createElement("td", { key: counter, title: localedMonth, onClick: isDisabled ? undefined : this.onMonthCellClick.bind(this, monthDate), className: elementCls, role: "gridcell", "aria-disabled": isDisabled ? 'true' : 'false', "aria-selected": isSelected ? 'true' : 'false' },
                    React.createElement("div", { className: "".concat(prefix, "calendar-month") }, monthCellContent)));
                counter++;
            }
            monthList.push(React.createElement("tr", { key: i, role: "row" }, rowList));
        }
        return (React.createElement("table", { className: "".concat(prefix, "calendar-table"), role: "grid" },
            React.createElement("tbody", { className: "".concat(prefix, "calendar-tbody"), role: "rowgroup" }, monthList)));
    };
    return MonthTable;
}(PureComponent));
export default MonthTable;
