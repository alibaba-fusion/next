"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var zh_cn_1 = tslib_1.__importDefault(require("../locale/zh-cn"));
var util_1 = require("../util");
var time_menu_1 = tslib_1.__importDefault(require("./module/time-menu"));
var prop_types_2 = tslib_1.__importDefault(require("./prop-types"));
var noop = util_1.func.noop;
var TimePickerPanel = /** @class */ (function (_super) {
    tslib_1.__extends(TimePickerPanel, _super);
    function TimePickerPanel() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.prefixCls = "".concat(_this.props.prefix, "time-picker2");
        /**
         *
         * @param panelType - 'start' | 'end' | 'panel'
         * @param index - number
         * @param type - 'hour' | 'minute' | 'second'
         */
        _this.onSelectMenuItem = function (panelType, index, type) {
            var _a = _this.props, value = _a.value, isRange = _a.isRange;
            var valueArr = Array.isArray(value) ? value : [value];
            var val = panelType === 'end' ? valueArr[1] : valueArr[0];
            var clonedValue = val ? val.clone() : (0, util_1.datejs)('00:00:00', 'HH:mm:ss', true);
            var newValue;
            switch (type) {
                case 'hour':
                    newValue = clonedValue.hour(index);
                    break;
                case 'minute':
                    newValue = clonedValue.minute(index);
                    break;
                case 'second':
                    newValue = clonedValue.second(index);
                    break;
            }
            if (isRange) {
                var nextValueArray = [];
                if (panelType === 'start') {
                    nextValueArray[0] = newValue;
                    nextValueArray[1] = value[1];
                }
                else if (panelType === 'end') {
                    nextValueArray[0] = value[0];
                    nextValueArray[1] = newValue;
                }
                _this.props.onSelect(nextValueArray, panelType);
            }
            else {
                _this.props.onSelect(newValue, 'panel');
            }
        };
        _this.getDisabledItems = function () {
            var _a = _this.props, disabledHours = _a.disabledHours, disabledMinutes = _a.disabledMinutes, disabledSeconds = _a.disabledSeconds, value = _a.value, isRange = _a.isRange;
            var disableds = {
                newDisabledHours: [disabledHours],
                newDisabledMinutes: [disabledMinutes],
                newDisabledSeconds: [disabledSeconds],
            };
            if (!isRange) {
                return disableds;
            }
            var dHours = (disabledHours() || []);
            var dMinutes = (disabledMinutes() || []);
            var dSeconds = (disabledSeconds() || []);
            // fixme: value 可以换为 valueArr
            var v0 = value[0];
            var v1 = value[1];
            var hoursEqual = function () { return v0 && v1 && v0.hour() === v1.hour(); };
            var minutesEqual = function () {
                return v0 && v1 && v0.hour() === v1.hour() && v0.minute() === v1.minute();
            };
            disableds.newDisabledHours[0] = function (h) {
                return (v1 && h > v1.hour()) || dHours.indexOf(h) > -1;
            };
            disableds.newDisabledMinutes[0] = function (m) {
                return (v1 && hoursEqual() && m > v1.minute()) || dMinutes.indexOf(m) > -1;
            };
            disableds.newDisabledSeconds[0] = function (s) {
                return (v1 && minutesEqual() && s > v1.second()) || dSeconds.indexOf(s) > -1;
            };
            disableds.newDisabledHours[1] = function (h) {
                return (v0 && h < v0.hour()) || dHours.indexOf(h) > -1;
            };
            disableds.newDisabledMinutes[1] = function (m) {
                return (v0 && m < (hoursEqual() && v0.minute())) || dMinutes.indexOf(m) > -1;
            };
            disableds.newDisabledSeconds[1] = function (s) {
                return (v0 && minutesEqual() && s < v0.second()) || dSeconds.indexOf(s) > -1;
            };
            return disableds;
        };
        return _this;
    }
    TimePickerPanel.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.props, prefix = _b.prefix, value = _b.value, isRange = _b.isRange, locale = _b.locale, className = _b.className, disabled = _b.disabled, showHour = _b.showHour, showMinute = _b.showMinute, showSecond = _b.showSecond, hourStep = _b.hourStep, minuteStep = _b.minuteStep, secondStep = _b.secondStep, renderTimeMenuItems = _b.renderTimeMenuItems, others = tslib_1.__rest(_b, ["prefix", "value", "isRange", "locale", "className", "disabled", "showHour", "showMinute", "showSecond", "hourStep", "minuteStep", "secondStep", "renderTimeMenuItems"]);
        var colLen = [showHour, showMinute, showSecond].filter(function (v) { return v; }).length;
        var classNames = (0, classnames_1.default)("".concat(this.prefixCls, "-panel"), (_a = {},
            _a["".concat(this.prefixCls, "-panel-col-").concat(colLen)] = !isRange,
            _a["".concat(this.prefixCls, "-panel-range")] = isRange,
            _a), className);
        var activeHour = [];
        var activeMinute = [];
        var activeSecond = [];
        var valueArr = Array.isArray(value) ? value : [value];
        valueArr.forEach(function (val, i) {
            if (val && util_1.datejs.isSelf(val)) {
                activeHour[i] = val.hour();
                activeMinute[i] = val.minute();
                activeSecond[i] = val.second();
            }
        });
        var commonProps = {
            prefix: prefix,
            disabled: disabled,
            renderTimeMenuItems: renderTimeMenuItems,
        };
        var _c = this.getDisabledItems(), newDisabledHours = _c.newDisabledHours, newDisabledMinutes = _c.newDisabledMinutes, newDisabledSeconds = _c.newDisabledSeconds;
        var generatePanel = function (index) { return (react_1.default.createElement(react_1.default.Fragment, null,
            showHour ? (react_1.default.createElement(time_menu_1.default, tslib_1.__assign({}, commonProps, { value: valueArr[index], activeIndex: activeHour[index], title: locale.hour, mode: "hour", step: hourStep, onSelect: _this.onSelectMenuItem.bind(_this, "".concat(index === 0 ? 'start' : 'end')), disabledItems: newDisabledHours[index] }))) : null,
            showMinute ? (react_1.default.createElement(time_menu_1.default, tslib_1.__assign({}, commonProps, { value: valueArr[index], activeIndex: activeMinute[index], title: locale.minute, mode: "minute", step: minuteStep, onSelect: _this.onSelectMenuItem.bind(_this, "".concat(index === 0 ? 'start' : 'end')), disabledItems: newDisabledMinutes[index] }))) : null,
            showSecond ? (react_1.default.createElement(time_menu_1.default, tslib_1.__assign({}, commonProps, { value: valueArr[index], activeIndex: activeSecond[index], title: locale.second, step: secondStep, mode: "second", onSelect: _this.onSelectMenuItem.bind(_this, "".concat(index === 0 ? 'start' : 'end')), disabledItems: newDisabledSeconds[index] }))) : null)); };
        var singlePanel = generatePanel(0);
        var panelClassNames = (0, classnames_1.default)("".concat(this.prefixCls, "-panel-col-").concat(colLen), "".concat(this.prefixCls, "-panel-list"));
        var doublePanel = (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: panelClassNames }, generatePanel(0)),
            react_1.default.createElement("div", { className: panelClassNames }, generatePanel(1))));
        return (react_1.default.createElement("div", tslib_1.__assign({}, (0, util_1.pickAttrs)(others), { className: classNames }), isRange ? doublePanel : singlePanel));
    };
    TimePickerPanel.propTypes = {
        prefix: prop_types_1.default.string,
        value: prop_types_2.default.value,
        showHour: prop_types_1.default.bool,
        showMinute: prop_types_1.default.bool,
        showSecond: prop_types_1.default.bool,
        hourStep: prop_types_1.default.number,
        minuteStep: prop_types_1.default.number,
        secondStep: prop_types_1.default.number,
        disabledHours: prop_types_1.default.func,
        disabledMinutes: prop_types_1.default.func,
        disabledSeconds: prop_types_1.default.func,
        renderTimeMenuItems: prop_types_1.default.func,
        onSelect: prop_types_1.default.func,
        isRange: prop_types_1.default.bool,
        locale: prop_types_1.default.object,
        disabled: prop_types_1.default.bool,
        className: prop_types_1.default.string,
    };
    TimePickerPanel.defaultProps = {
        prefix: 'next-',
        showHour: true,
        showSecond: true,
        showMinute: true,
        disabledHours: noop,
        disabledMinutes: noop,
        disabledSeconds: noop,
        onSelect: noop,
        disabled: false,
        isRange: false,
        locale: zh_cn_1.default.TimePicker,
    };
    return TimePickerPanel;
}(react_1.Component));
exports.default = TimePickerPanel;
