import { __extends, __read, __spreadArray } from "tslib";
import React from 'react';
import Icon from '../../icon';
import Dropdown from '../../dropdown';
import SelectMenu from './menu';
import { getMonths, getYears } from '../utils';
var RangePanelHeader = /** @class */ (function (_super) {
    __extends(RangePanelHeader, _super);
    function RangePanelHeader() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
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
        var months = getMonths(momentLocale);
        var startYears = getYears(yearRange, yearRangeOffset, startVisibleMonth.year());
        var endYears = getYears(yearRange, yearRangeOffset, endVisibleMonth.year());
        return (React.createElement("div", { className: "".concat(prefix, "calendar-panel-header") },
            React.createElement("button", { type: "button", title: locale.prevYear, className: "".concat(btnCls, " ").concat(btnCls, "-prev-year"), onClick: goPrevYear },
                React.createElement(Icon, { type: "arrow-double-left", className: "".concat(prefix, "calendar-symbol-prev-super") })),
            React.createElement("button", { type: "button", title: locale.prevMonth, className: "".concat(btnCls, " ").concat(btnCls, "-prev-month"), onClick: goPrevMonth },
                React.createElement(Icon, { type: "arrow-left", className: "".concat(prefix, "calendar-symbol-prev") })),
            React.createElement("div", { className: "".concat(prefix, "calendar-panel-header-left") },
                disableChangeMode ? (React.createElement(Dropdown, { align: "tc bc", container: this.selectContainerHandler, trigger: React.createElement("button", { type: "button", className: btnCls, title: startMonthLabel },
                        startMonthLabel,
                        React.createElement(Icon, { type: "arrow-down" })), triggerType: "click" },
                    React.createElement(SelectMenu, { prefix: prefix, value: startVisibleMonth.month(), dataSource: months, onChange: function (value) {
                            return _this.changeVisibleMonth(startVisibleMonth, value, 'start');
                        } }))) : (React.createElement("button", { type: "button", title: startMonthLabel, className: btnCls, onClick: function () { return changeMode('month', 'start'); } }, startMonthLabel)),
                disableChangeMode ? (React.createElement(Dropdown, { align: "tc bc", container: this.selectContainerHandler, trigger: React.createElement("button", { type: "button", className: btnCls, 
                        // @ts-expect-error startYearLabel 应转为 string
                        title: startYearLabel },
                        startYearLabel,
                        React.createElement(Icon, { type: "arrow-down" })), triggerType: "click" },
                    React.createElement(SelectMenu, { prefix: prefix, value: startVisibleMonth.year(), dataSource: startYears, onChange: function (v) { return _this.onYearChange(startVisibleMonth, v, 'start'); } }))) : (React.createElement("button", { type: "button", 
                    // @ts-expect-error startYearLabel 应转为 string
                    title: startYearLabel, className: btnCls, onClick: function () { return changeMode('year', 'start'); } }, startYearLabel))),
            React.createElement("div", { className: "".concat(prefix, "calendar-panel-header-right") },
                disableChangeMode ? (React.createElement(Dropdown, { align: "tc bc", container: this.selectContainerHandler, trigger: React.createElement("button", { type: "button", className: btnCls, title: endMonthLabel },
                        endMonthLabel,
                        React.createElement(Icon, { type: "arrow-down" })), triggerType: "click" },
                    React.createElement(SelectMenu, { prefix: prefix, value: endVisibleMonth.month(), dataSource: months, onChange: function (value) {
                            return _this.changeVisibleMonth(endVisibleMonth, value, 'end');
                        } }))) : (React.createElement("button", { type: "button", title: endMonthLabel, className: btnCls, onClick: function () { return changeMode('month', 'end'); } }, endMonthLabel)),
                disableChangeMode ? (React.createElement(Dropdown, { align: "tc bc", container: this.selectContainerHandler, trigger: React.createElement("button", { type: "button", className: btnCls, 
                        // @ts-expect-error endYearLabel 应转为 string
                        title: endYearLabel },
                        endYearLabel,
                        React.createElement(Icon, { type: "arrow-down" })), triggerType: "click" },
                    React.createElement(SelectMenu, { prefix: prefix, value: endVisibleMonth.year(), dataSource: endYears, onChange: function (v) { return _this.onYearChange(endVisibleMonth, v, 'end'); } }))) : (React.createElement("button", { type: "button", 
                    // @ts-expect-error endYearLabel 应转为 string
                    title: endYearLabel, className: btnCls, onClick: function () { return changeMode('year', 'end'); } }, endYearLabel))),
            React.createElement("button", { type: "button", title: locale.nextMonth, className: "".concat(btnCls, " ").concat(btnCls, "-next-month"), onClick: goNextMonth },
                React.createElement(Icon, { type: "arrow-right", className: "".concat(prefix, "calendar-symbol-next") })),
            React.createElement("button", { type: "button", title: locale.nextYear, className: "".concat(btnCls, " ").concat(btnCls, "-next-year"), onClick: goNextYear },
                React.createElement(Icon, { type: "arrow-double-right", className: "".concat(prefix, "calendar-symbol-next-super") }))));
    };
    RangePanelHeader.defaultProps = {
        yearRangeOffset: 10,
    };
    return RangePanelHeader;
}(React.PureComponent));
export default RangePanelHeader;
