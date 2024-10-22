import { __extends, __read, __spreadArray } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import Select from '../../select';
import Radio from '../../radio';
import ConfigProvider from '../../config-provider';
var CardHeader = /** @class */ (function (_super) {
    __extends(CardHeader, _super);
    function CardHeader() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
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
        var _c = __read(yearRange, 2), startYear = _c[0], endYear = _c[1];
        if (!startYear || !endYear) {
            startYear = year - yearRangeOffset;
            endYear = year + yearRangeOffset;
        }
        var options = [];
        for (var i = startYear; i <= endYear; i++) {
            options.push(React.createElement(Select.Option, { key: i, value: i }, i));
        }
        return (React.createElement(Select, { prefix: prefix, value: year, "aria-label": locale.yearSelectAriaLabel, onChange: this.onYearChange, popupContainer: this.selectContainerHandler, disabled: !showOtherMonth && mode === 'date' }, options));
    };
    CardHeader.prototype.getMonthSelect = function (month) {
        var _a = this.props, prefix = _a.prefix, momentLocale = _a.momentLocale, locale = _a.locale, showOtherMonth = _a.showOtherMonth, mode = _a.mode;
        var localeMonths = momentLocale.monthsShort();
        var options = [];
        for (var i = 0; i < 12; i++) {
            options.push(React.createElement(Select.Option, { key: i, value: i }, localeMonths[i]));
        }
        return (React.createElement(Select, { "aria-label": locale.monthSelectAriaLabel, prefix: prefix, value: month, onChange: this.changeVisibleMonth, popupContainer: this.selectContainerHandler, disabled: !showOtherMonth && mode === 'date' }, options));
    };
    CardHeader.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, mode = _a.mode, locale = _a.locale, visibleMonth = _a.visibleMonth, showOtherMonth = _a.showOtherMonth;
        var yearSelect = this.getYearSelect(visibleMonth.year());
        var monthSelect = mode === 'month' ? null : this.getMonthSelect(visibleMonth.month());
        var panelSelect = !showOtherMonth && mode === 'date' ? null : (React.createElement(Radio.Group, { shape: "button", size: "medium", value: mode, onChange: this.onModePanelChange },
            React.createElement(Radio, { value: "date" }, locale.month),
            React.createElement(Radio, { value: "month" }, locale.year)));
        return (React.createElement("div", { className: "".concat(prefix, "calendar-header") },
            yearSelect,
            monthSelect,
            panelSelect));
    };
    CardHeader.propTypes = {
        yearRange: PropTypes.arrayOf(PropTypes.number),
        yearRangeOffset: PropTypes.number,
        locale: PropTypes.object,
    };
    CardHeader.defaultProps = {
        yearRangeOffset: 10,
    };
    return CardHeader;
}(React.Component));
export default ConfigProvider.config(CardHeader);
