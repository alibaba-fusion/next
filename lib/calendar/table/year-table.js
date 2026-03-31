"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var icon_1 = tslib_1.__importDefault(require("../../icon"));
var utils_1 = require("../utils");
var YearTable = /** @class */ (function (_super) {
    tslib_1.__extends(YearTable, _super);
    function YearTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YearTable.prototype.onYearCellClick = function (date) {
        this.props.onSelectYear(date, 'month');
    };
    YearTable.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, value = _b.value, today = _b.today, visibleMonth = _b.visibleMonth, locale = _b.locale, disabledDate = _b.disabledDate, goPrevDecade = _b.goPrevDecade, goNextDecade = _b.goNextDecade, yearCellRender = _b.yearCellRender;
        var currentYear = today.year();
        var selectedYear = value ? value.year() : null;
        var visibleYear = visibleMonth.year();
        var startYear = Math.floor(visibleYear / 10) * 10;
        var yearElements = [];
        var counter = 0;
        var lastRowIndex = utils_1.YEAR_TABLE_ROW_COUNT - 1;
        var lastColIndex = utils_1.YEAR_TABLE_COL_COUNT - 1;
        for (var i = 0; i < utils_1.YEAR_TABLE_ROW_COUNT; i++) {
            var rowElements = [];
            for (var j = 0; j < utils_1.YEAR_TABLE_COL_COUNT; j++) {
                var content = void 0;
                var year = void 0;
                var isDisabled = false;
                var onClick = void 0;
                var title = void 0;
                if (i === 0 && j === 0) {
                    title = locale.prevDecade;
                    onClick = goPrevDecade;
                    content = react_1.default.createElement(icon_1.default, { type: "arrow-left", size: "xs" });
                }
                else if (i === lastRowIndex && j === lastColIndex) {
                    title = locale.nextDecade;
                    onClick = goNextDecade;
                    content = react_1.default.createElement(icon_1.default, { type: "arrow-right", size: "xs" });
                }
                else {
                    year = startYear + counter++;
                    title = year;
                    var yearDate = visibleMonth.clone().year(year);
                    isDisabled = (0, utils_1.isDisabledDate)(yearDate, disabledDate, 'year');
                    !isDisabled && (onClick = this.onYearCellClick.bind(this, yearDate));
                    content = yearCellRender ? yearCellRender(yearDate) : year;
                }
                var isSelected = year === selectedYear;
                var classNames = (0, classnames_1.default)((_a = {},
                    _a["".concat(prefix, "calendar-cell")] = true,
                    _a["".concat(prefix, "calendar-cell-current")] = year === currentYear,
                    _a["".concat(prefix, "selected")] = isSelected,
                    _a["".concat(prefix, "disabled")] = isDisabled,
                    _a));
                rowElements.push(react_1.default.createElement("td", { key: "".concat(i, "-").concat(j), className: classNames, role: "cell" },
                    react_1.default.createElement("div", { className: "".concat(prefix, "calendar-year"), onClick: onClick, 
                        // @ts-expect-error title 应转为 string
                        title: title, "aria-disabled": isDisabled ? 'true' : 'false', "aria-selected": isSelected ? 'true' : 'false' }, content)));
            }
            yearElements.push(react_1.default.createElement("tr", { key: i, role: "row" }, rowElements));
        }
        return (react_1.default.createElement("table", { className: "".concat(prefix, "calendar-table"), role: "grid" },
            react_1.default.createElement("tbody", { className: "".concat(prefix, "calendar-tbody"), role: "rowgroup" }, yearElements)));
    };
    return YearTable;
}(react_1.default.PureComponent));
exports.default = YearTable;
