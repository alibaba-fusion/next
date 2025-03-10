import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import nextLocale from '../locale/zh-cn';
import { func, datejs, pickAttrs } from '../util';
import TimeMenu from './module/time-menu';
import SharedPT from './prop-types';
var noop = func.noop;
var TimePickerPanel = /** @class */ (function (_super) {
    __extends(TimePickerPanel, _super);
    function TimePickerPanel() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
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
            var clonedValue = val ? val.clone() : datejs('00:00:00', 'HH:mm:ss', true);
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
        var _b = this.props, prefix = _b.prefix, value = _b.value, isRange = _b.isRange, locale = _b.locale, className = _b.className, disabled = _b.disabled, showHour = _b.showHour, showMinute = _b.showMinute, showSecond = _b.showSecond, hourStep = _b.hourStep, minuteStep = _b.minuteStep, secondStep = _b.secondStep, renderTimeMenuItems = _b.renderTimeMenuItems, others = __rest(_b, ["prefix", "value", "isRange", "locale", "className", "disabled", "showHour", "showMinute", "showSecond", "hourStep", "minuteStep", "secondStep", "renderTimeMenuItems"]);
        var colLen = [showHour, showMinute, showSecond].filter(function (v) { return v; }).length;
        var classNames = classnames("".concat(this.prefixCls, "-panel"), (_a = {},
            _a["".concat(this.prefixCls, "-panel-col-").concat(colLen)] = !isRange,
            _a["".concat(this.prefixCls, "-panel-range")] = isRange,
            _a), className);
        var activeHour = [];
        var activeMinute = [];
        var activeSecond = [];
        var valueArr = Array.isArray(value) ? value : [value];
        valueArr.forEach(function (val, i) {
            if (val && datejs.isSelf(val)) {
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
        var generatePanel = function (index) { return (React.createElement(React.Fragment, null,
            showHour ? (React.createElement(TimeMenu, __assign({}, commonProps, { value: valueArr[index], activeIndex: activeHour[index], title: locale.hour, mode: "hour", step: hourStep, onSelect: _this.onSelectMenuItem.bind(_this, "".concat(index === 0 ? 'start' : 'end')), disabledItems: newDisabledHours[index] }))) : null,
            showMinute ? (React.createElement(TimeMenu, __assign({}, commonProps, { value: valueArr[index], activeIndex: activeMinute[index], title: locale.minute, mode: "minute", step: minuteStep, onSelect: _this.onSelectMenuItem.bind(_this, "".concat(index === 0 ? 'start' : 'end')), disabledItems: newDisabledMinutes[index] }))) : null,
            showSecond ? (React.createElement(TimeMenu, __assign({}, commonProps, { value: valueArr[index], activeIndex: activeSecond[index], title: locale.second, step: secondStep, mode: "second", onSelect: _this.onSelectMenuItem.bind(_this, "".concat(index === 0 ? 'start' : 'end')), disabledItems: newDisabledSeconds[index] }))) : null)); };
        var singlePanel = generatePanel(0);
        var panelClassNames = classnames("".concat(this.prefixCls, "-panel-col-").concat(colLen), "".concat(this.prefixCls, "-panel-list"));
        var doublePanel = (React.createElement(React.Fragment, null,
            React.createElement("div", { className: panelClassNames }, generatePanel(0)),
            React.createElement("div", { className: panelClassNames }, generatePanel(1))));
        return (React.createElement("div", __assign({}, pickAttrs(others), { className: classNames }), isRange ? doublePanel : singlePanel));
    };
    TimePickerPanel.propTypes = {
        prefix: PropTypes.string,
        value: SharedPT.value,
        showHour: PropTypes.bool,
        showMinute: PropTypes.bool,
        showSecond: PropTypes.bool,
        hourStep: PropTypes.number,
        minuteStep: PropTypes.number,
        secondStep: PropTypes.number,
        disabledHours: PropTypes.func,
        disabledMinutes: PropTypes.func,
        disabledSeconds: PropTypes.func,
        renderTimeMenuItems: PropTypes.func,
        onSelect: PropTypes.func,
        isRange: PropTypes.bool,
        locale: PropTypes.object,
        disabled: PropTypes.bool,
        className: PropTypes.string,
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
        locale: nextLocale.TimePicker,
    };
    return TimePickerPanel;
}(Component));
export default TimePickerPanel;
