"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var select_1 = tslib_1.__importDefault(require("../../select"));
var radio_1 = tslib_1.__importDefault(require("../../radio"));
var config_provider_1 = tslib_1.__importDefault(require("../../config-provider"));
var CardHeader = /** @class */ (function (_super) {
    tslib_1.__extends(CardHeader, _super);
    function CardHeader() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.selectContainerHandler = function (target) {
            var device = _this.props.device;
            if (device === 'phone') {
                return document.body;
            }
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
        _this.onModePanelChange = function (mode) {
            _this.props.changeMode(mode);
        };
        return _this;
    }
    CardHeader.prototype.getYearSelect = function (year) {
        var _a = this.props, prefix = _a.prefix, yearRangeOffset = _a.yearRangeOffset, _b = _a.yearRange, yearRange = _b === void 0 ? [] : _b, locale = _a.locale, showOtherMonth = _a.showOtherMonth, mode = _a.mode;
        var _c = tslib_1.__read(yearRange, 2), startYear = _c[0], endYear = _c[1];
        if (!startYear || !endYear) {
            startYear = year - yearRangeOffset;
            endYear = year + yearRangeOffset;
        }
        var options = [];
        for (var i = startYear; i <= endYear; i++) {
            options.push(react_1.default.createElement(select_1.default.Option, { key: i, value: i }, i));
        }
        return (react_1.default.createElement(select_1.default, { prefix: prefix, value: year, "aria-label": locale.yearSelectAriaLabel, onChange: this.onYearChange, popupContainer: this.selectContainerHandler, disabled: !showOtherMonth && mode === 'date' }, options));
    };
    CardHeader.prototype.getMonthSelect = function (month) {
        var _a = this.props, prefix = _a.prefix, momentLocale = _a.momentLocale, locale = _a.locale, showOtherMonth = _a.showOtherMonth, mode = _a.mode;
        var localeMonths = momentLocale.monthsShort();
        var options = [];
        for (var i = 0; i < 12; i++) {
            options.push(react_1.default.createElement(select_1.default.Option, { key: i, value: i }, localeMonths[i]));
        }
        return (react_1.default.createElement(select_1.default, { "aria-label": locale.monthSelectAriaLabel, prefix: prefix, value: month, onChange: this.changeVisibleMonth, popupContainer: this.selectContainerHandler, disabled: !showOtherMonth && mode === 'date' }, options));
    };
    CardHeader.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, mode = _a.mode, locale = _a.locale, visibleMonth = _a.visibleMonth, showOtherMonth = _a.showOtherMonth;
        var yearSelect = this.getYearSelect(visibleMonth.year());
        var monthSelect = mode === 'month' ? null : this.getMonthSelect(visibleMonth.month());
        var panelSelect = !showOtherMonth && mode === 'date' ? null : (react_1.default.createElement(radio_1.default.Group, { shape: "button", size: "medium", value: mode, onChange: this.onModePanelChange },
            react_1.default.createElement(radio_1.default, { value: "date" }, locale.month),
            react_1.default.createElement(radio_1.default, { value: "month" }, locale.year)));
        return (react_1.default.createElement("div", { className: "".concat(prefix, "calendar-header") },
            yearSelect,
            monthSelect,
            panelSelect));
    };
    CardHeader.propTypes = {
        yearRange: prop_types_1.default.arrayOf(prop_types_1.default.number),
        yearRangeOffset: prop_types_1.default.number,
        locale: prop_types_1.default.object,
    };
    CardHeader.defaultProps = {
        yearRangeOffset: 10,
    };
    return CardHeader;
}(react_1.default.Component));
exports.default = config_provider_1.default.config(CardHeader);
