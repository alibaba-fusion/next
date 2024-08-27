"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var icon_1 = tslib_1.__importDefault(require("../../icon"));
var dropdown_1 = tslib_1.__importDefault(require("../../dropdown"));
var menu_1 = tslib_1.__importDefault(require("./menu"));
var utils_1 = require("../utils");
var RangePanelHeader = /** @class */ (function (_super) {
    tslib_1.__extends(RangePanelHeader, _super);
    function RangePanelHeader() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.selectContainerHandler = function (target) {
            return target.parentNode;
        };
        _this.onYearChange = function (visibleMonth, year, tag) {
            var changeVisibleMonth = _this.props.changeVisibleMonth;
            var startYear = visibleMonth
                .clone()
                .year(year)
                .add(tag === 'end' ? -1 : 0, 'month');
            changeVisibleMonth(startYear, 'yearSelect');
        };
        _this.changeVisibleMonth = function (visibleMonth, month, tag) {
            var changeVisibleMonth = _this.props.changeVisibleMonth;
            var startMonth = tag === 'end' ? month - 1 : month;
            changeVisibleMonth(visibleMonth.clone().month(startMonth), 'monthSelect');
        };
        return _this;
    }
    RangePanelHeader.prototype.render = function () {
        var _this = this;
        var _a = this.props, prefix = _a.prefix, startVisibleMonth = _a.startVisibleMonth, endVisibleMonth = _a.endVisibleMonth, _b = _a.yearRange, yearRange = _b === void 0 ? [] : _b, yearRangeOffset = _a.yearRangeOffset, momentLocale = _a.momentLocale, locale = _a.locale, changeMode = _a.changeMode, goNextMonth = _a.goNextMonth, goNextYear = _a.goNextYear, goPrevMonth = _a.goPrevMonth, goPrevYear = _a.goPrevYear, disableChangeMode = _a.disableChangeMode;
        var localedMonths = momentLocale.months();
        var startMonthLabel = localedMonths[startVisibleMonth.month()];
        var endMonthLabel = localedMonths[endVisibleMonth.month()];
        var startYearLabel = startVisibleMonth.year();
        var endYearLabel = endVisibleMonth.year();
        var btnCls = "".concat(prefix, "calendar-btn");
        var months = (0, utils_1.getMonths)(momentLocale);
        var startYears = (0, utils_1.getYears)(yearRange, yearRangeOffset, startVisibleMonth.year());
        var endYears = (0, utils_1.getYears)(yearRange, yearRangeOffset, endVisibleMonth.year());
        return (react_1.default.createElement("div", { className: "".concat(prefix, "calendar-panel-header") },
            react_1.default.createElement("button", { type: "button", title: locale.prevYear, className: "".concat(btnCls, " ").concat(btnCls, "-prev-year"), onClick: goPrevYear },
                react_1.default.createElement(icon_1.default, { type: "arrow-double-left", className: "".concat(prefix, "calendar-symbol-prev-super") })),
            react_1.default.createElement("button", { type: "button", title: locale.prevMonth, className: "".concat(btnCls, " ").concat(btnCls, "-prev-month"), onClick: goPrevMonth },
                react_1.default.createElement(icon_1.default, { type: "arrow-left", className: "".concat(prefix, "calendar-symbol-prev") })),
            react_1.default.createElement("div", { className: "".concat(prefix, "calendar-panel-header-left") },
                disableChangeMode ? (react_1.default.createElement(dropdown_1.default, { align: "tc bc", container: this.selectContainerHandler, trigger: react_1.default.createElement("button", { type: "button", className: btnCls, title: startMonthLabel },
                        startMonthLabel,
                        react_1.default.createElement(icon_1.default, { type: "arrow-down" })), triggerType: "click" },
                    react_1.default.createElement(menu_1.default, { prefix: prefix, value: startVisibleMonth.month(), dataSource: months, onChange: function (value) {
                            return _this.changeVisibleMonth(startVisibleMonth, value, 'start');
                        } }))) : (react_1.default.createElement("button", { type: "button", title: startMonthLabel, className: btnCls, onClick: function () { return changeMode('month', 'start'); } }, startMonthLabel)),
                disableChangeMode ? (react_1.default.createElement(dropdown_1.default, { align: "tc bc", container: this.selectContainerHandler, trigger: react_1.default.createElement("button", { type: "button", className: btnCls, 
                        // @ts-expect-error startYearLabel 应转为 string
                        title: startYearLabel },
                        startYearLabel,
                        react_1.default.createElement(icon_1.default, { type: "arrow-down" })), triggerType: "click" },
                    react_1.default.createElement(menu_1.default, { prefix: prefix, value: startVisibleMonth.year(), dataSource: startYears, onChange: function (v) { return _this.onYearChange(startVisibleMonth, v, 'start'); } }))) : (react_1.default.createElement("button", { type: "button", 
                    // @ts-expect-error startYearLabel 应转为 string
                    title: startYearLabel, className: btnCls, onClick: function () { return changeMode('year', 'start'); } }, startYearLabel))),
            react_1.default.createElement("div", { className: "".concat(prefix, "calendar-panel-header-right") },
                disableChangeMode ? (react_1.default.createElement(dropdown_1.default, { align: "tc bc", container: this.selectContainerHandler, trigger: react_1.default.createElement("button", { type: "button", className: btnCls, title: endMonthLabel },
                        endMonthLabel,
                        react_1.default.createElement(icon_1.default, { type: "arrow-down" })), triggerType: "click" },
                    react_1.default.createElement(menu_1.default, { prefix: prefix, value: endVisibleMonth.month(), dataSource: months, onChange: function (value) {
                            return _this.changeVisibleMonth(endVisibleMonth, value, 'end');
                        } }))) : (react_1.default.createElement("button", { type: "button", title: endMonthLabel, className: btnCls, onClick: function () { return changeMode('month', 'end'); } }, endMonthLabel)),
                disableChangeMode ? (react_1.default.createElement(dropdown_1.default, { align: "tc bc", container: this.selectContainerHandler, trigger: react_1.default.createElement("button", { type: "button", className: btnCls, 
                        // @ts-expect-error endYearLabel 应转为 string
                        title: endYearLabel },
                        endYearLabel,
                        react_1.default.createElement(icon_1.default, { type: "arrow-down" })), triggerType: "click" },
                    react_1.default.createElement(menu_1.default, { prefix: prefix, value: endVisibleMonth.year(), dataSource: endYears, onChange: function (v) { return _this.onYearChange(endVisibleMonth, v, 'end'); } }))) : (react_1.default.createElement("button", { type: "button", 
                    // @ts-expect-error endYearLabel 应转为 string
                    title: endYearLabel, className: btnCls, onClick: function () { return changeMode('year', 'end'); } }, endYearLabel))),
            react_1.default.createElement("button", { type: "button", title: locale.nextMonth, className: "".concat(btnCls, " ").concat(btnCls, "-next-month"), onClick: goNextMonth },
                react_1.default.createElement(icon_1.default, { type: "arrow-right", className: "".concat(prefix, "calendar-symbol-next") })),
            react_1.default.createElement("button", { type: "button", title: locale.nextYear, className: "".concat(btnCls, " ").concat(btnCls, "-next-year"), onClick: goNextYear },
                react_1.default.createElement(icon_1.default, { type: "arrow-double-right", className: "".concat(prefix, "calendar-symbol-next-super") }))));
    };
    RangePanelHeader.defaultProps = {
        yearRangeOffset: 10,
    };
    return RangePanelHeader;
}(react_1.default.PureComponent));
exports.default = RangePanelHeader;
