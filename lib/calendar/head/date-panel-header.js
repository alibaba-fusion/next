"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var icon_1 = tslib_1.__importDefault(require("../../icon"));
var dropdown_1 = tslib_1.__importDefault(require("../../dropdown"));
var menu_1 = tslib_1.__importDefault(require("./menu"));
var utils_1 = require("../utils");
var DatePanelHeader = /** @class */ (function (_super) {
    tslib_1.__extends(DatePanelHeader, _super);
    function DatePanelHeader() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.selectContainerHandler = function (target) {
            return target.parentNode;
        };
        _this.onYearChange = function (year) {
            var _a = _this.props, visibleMonth = _a.visibleMonth, changeVisibleMonth = _a.changeVisibleMonth;
            changeVisibleMonth(visibleMonth.clone().year(year), 'yearSelect');
        };
        _this.changeVisibleMonth = function (month) {
            var _a = _this.props, visibleMonth = _a.visibleMonth, changeVisibleMonth = _a.changeVisibleMonth;
            changeVisibleMonth(visibleMonth.clone().month(month), 'monthSelect');
        };
        return _this;
    }
    DatePanelHeader.prototype.render = function () {
        var _this = this;
        var _a = this.props, prefix = _a.prefix, visibleMonth = _a.visibleMonth, momentLocale = _a.momentLocale, locale = _a.locale, showOtherMonth = _a.showOtherMonth, changeMode = _a.changeMode, goNextMonth = _a.goNextMonth, goNextYear = _a.goNextYear, goPrevMonth = _a.goPrevMonth, goPrevYear = _a.goPrevYear, disableChangeMode = _a.disableChangeMode, yearRangeOffset = _a.yearRangeOffset, _b = _a.yearRange, yearRange = _b === void 0 ? [] : _b;
        var localedMonths = momentLocale.months();
        var monthLabel = localedMonths[visibleMonth.month()];
        var yearLabel = visibleMonth.year();
        var btnCls = "".concat(prefix, "calendar-btn");
        var monthButton = (react_1.default.createElement("button", { type: "button", className: btnCls, title: monthLabel, onClick: function () { return showOtherMonth && changeMode('month', 'start'); } }, monthLabel));
        var yearButton = (react_1.default.createElement("button", { type: "button", className: btnCls, 
            // @ts-expect-error yearLabel 应转为 string
            title: yearLabel, onClick: function () { return showOtherMonth && changeMode('year', 'start'); } }, yearLabel));
        if (disableChangeMode) {
            var months = (0, utils_1.getMonths)(momentLocale);
            var years = (0, utils_1.getYears)(yearRange, yearRangeOffset, visibleMonth.year());
            monthButton = (react_1.default.createElement(dropdown_1.default, { align: "tc bc", container: this.selectContainerHandler, trigger: react_1.default.createElement("button", { type: "button", className: btnCls, title: monthLabel },
                    monthLabel,
                    react_1.default.createElement(icon_1.default, { type: "arrow-down" })), triggerType: "click" },
                react_1.default.createElement(menu_1.default, { prefix: prefix, value: visibleMonth.month(), dataSource: months, onChange: function (value) { return _this.changeVisibleMonth(value); } })));
            yearButton = (react_1.default.createElement(dropdown_1.default, { align: "tc bc", container: this.selectContainerHandler, trigger: react_1.default.createElement("button", { type: "button", className: btnCls, 
                    // @ts-expect-error yearLabel 应转为 string
                    title: yearLabel },
                    yearLabel,
                    react_1.default.createElement(icon_1.default, { type: "arrow-down" })), triggerType: "click" },
                react_1.default.createElement(menu_1.default, { prefix: prefix, value: visibleMonth.year(), dataSource: years, onChange: this.onYearChange })));
        }
        return (react_1.default.createElement("div", { className: "".concat(prefix, "calendar-panel-header") },
            showOtherMonth && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("button", { type: "button", title: locale.prevYear, className: "".concat(btnCls, " ").concat(btnCls, "-prev-year"), onClick: goPrevYear },
                    react_1.default.createElement(icon_1.default, { type: "arrow-double-left", className: "".concat(prefix, "calendar-symbol-prev-super") })),
                react_1.default.createElement("button", { type: "button", title: locale.prevMonth, className: "".concat(btnCls, " ").concat(btnCls, "-prev-month"), onClick: goPrevMonth },
                    react_1.default.createElement(icon_1.default, { type: "arrow-left", className: "".concat(prefix, "calendar-symbol-prev") })))),
            react_1.default.createElement("div", { className: "".concat(prefix, "calendar-panel-header-full") },
                monthButton,
                yearButton),
            showOtherMonth && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("button", { type: "button", title: locale.nextMonth, className: "".concat(btnCls, " ").concat(btnCls, "-next-month"), onClick: goNextMonth },
                    react_1.default.createElement(icon_1.default, { type: "arrow-right", className: "".concat(prefix, "calendar-symbol-next") })),
                react_1.default.createElement("button", { type: "button", title: locale.nextYear, className: "".concat(btnCls, " ").concat(btnCls, "-next-year"), onClick: goNextYear },
                    react_1.default.createElement(icon_1.default, { type: "arrow-double-right", className: "".concat(prefix, "calendar-symbol-next-super") }))))));
    };
    DatePanelHeader.defaultProps = {
        yearRangeOffset: 10,
    };
    return DatePanelHeader;
}(react_1.default.PureComponent));
exports.default = DatePanelHeader;
