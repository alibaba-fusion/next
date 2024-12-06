import { __extends, __read, __spreadArray } from "tslib";
import React from 'react';
import Icon from '../../icon';
import Dropdown from '../../dropdown';
import SelectMenu from './menu';
import { getMonths, getYears } from '../utils';
var DatePanelHeader = /** @class */ (function (_super) {
    __extends(DatePanelHeader, _super);
    function DatePanelHeader() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
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
        var monthButton = (React.createElement("button", { type: "button", className: btnCls, title: monthLabel, onClick: function () { return showOtherMonth && changeMode('month', 'start'); } }, monthLabel));
        var yearButton = (React.createElement("button", { type: "button", className: btnCls, 
            // @ts-expect-error yearLabel 应转为 string
            title: yearLabel, onClick: function () { return showOtherMonth && changeMode('year', 'start'); } }, yearLabel));
        if (disableChangeMode) {
            var months = getMonths(momentLocale);
            var years = getYears(yearRange, yearRangeOffset, visibleMonth.year());
            monthButton = (React.createElement(Dropdown, { align: "tc bc", container: this.selectContainerHandler, trigger: React.createElement("button", { type: "button", className: btnCls, title: monthLabel },
                    monthLabel,
                    React.createElement(Icon, { type: "arrow-down" })), triggerType: "click" },
                React.createElement(SelectMenu, { prefix: prefix, value: visibleMonth.month(), dataSource: months, onChange: function (value) { return _this.changeVisibleMonth(value); } })));
            yearButton = (React.createElement(Dropdown, { align: "tc bc", container: this.selectContainerHandler, trigger: React.createElement("button", { type: "button", className: btnCls, 
                    // @ts-expect-error yearLabel 应转为 string
                    title: yearLabel },
                    yearLabel,
                    React.createElement(Icon, { type: "arrow-down" })), triggerType: "click" },
                React.createElement(SelectMenu, { prefix: prefix, value: visibleMonth.year(), dataSource: years, onChange: this.onYearChange })));
        }
        return (React.createElement("div", { className: "".concat(prefix, "calendar-panel-header") },
            showOtherMonth && (React.createElement(React.Fragment, null,
                React.createElement("button", { type: "button", title: locale.prevYear, className: "".concat(btnCls, " ").concat(btnCls, "-prev-year"), onClick: goPrevYear },
                    React.createElement(Icon, { type: "arrow-double-left", className: "".concat(prefix, "calendar-symbol-prev-super") })),
                React.createElement("button", { type: "button", title: locale.prevMonth, className: "".concat(btnCls, " ").concat(btnCls, "-prev-month"), onClick: goPrevMonth },
                    React.createElement(Icon, { type: "arrow-left", className: "".concat(prefix, "calendar-symbol-prev") })))),
            React.createElement("div", { className: "".concat(prefix, "calendar-panel-header-full") },
                monthButton,
                yearButton),
            showOtherMonth && (React.createElement(React.Fragment, null,
                React.createElement("button", { type: "button", title: locale.nextMonth, className: "".concat(btnCls, " ").concat(btnCls, "-next-month"), onClick: goNextMonth },
                    React.createElement(Icon, { type: "arrow-right", className: "".concat(prefix, "calendar-symbol-next") })),
                React.createElement("button", { type: "button", title: locale.nextYear, className: "".concat(btnCls, " ").concat(btnCls, "-next-year"), onClick: goNextYear },
                    React.createElement(Icon, { type: "arrow-double-right", className: "".concat(prefix, "calendar-symbol-next-super") }))))));
    };
    DatePanelHeader.defaultProps = {
        yearRangeOffset: 10,
    };
    return DatePanelHeader;
}(React.PureComponent));
export default DatePanelHeader;
