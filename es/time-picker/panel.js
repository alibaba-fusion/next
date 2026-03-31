import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';
import nextLocale from '../locale/zh-cn';
import { func } from '../util';
import TimeMenu from './module/time-menu';
import { checkMomentObj } from './utils';
var noop = func.noop;
var TimePickerPanel = /** @class */ (function (_super) {
    __extends(TimePickerPanel, _super);
    function TimePickerPanel() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.onSelectMenuItem = function (index, type) {
            var value = _this.props.value;
            var clonedValue = value ? value.clone() : moment('00:00:00', 'HH:mm:ss', true);
            switch (type) {
                case 'hour':
                    clonedValue.hour(index);
                    break;
                case 'minute':
                    clonedValue.minute(index);
                    break;
                case 'second':
                    clonedValue.second(index);
                    break;
            }
            _this.props.onSelect(clonedValue);
        };
        return _this;
    }
    TimePickerPanel.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, value = _a.value, locale = _a.locale, className = _a.className, disabled = _a.disabled, showHour = _a.showHour, showMinute = _a.showMinute, showSecond = _a.showSecond, hourStep = _a.hourStep, minuteStep = _a.minuteStep, secondStep = _a.secondStep, disabledHours = _a.disabledHours, disabledMinutes = _a.disabledMinutes, disabledSeconds = _a.disabledSeconds, renderTimeMenuItems = _a.renderTimeMenuItems, others = __rest(_a, ["prefix", "value", "locale", "className", "disabled", "showHour", "showMinute", "showSecond", "hourStep", "minuteStep", "secondStep", "disabledHours", "disabledMinutes", "disabledSeconds", "renderTimeMenuItems"]);
        var colLen = [showHour, showMinute, showSecond].filter(function (v) { return v; }).length;
        var classNames = classnames("".concat(prefix, "time-picker-panel"), "".concat(prefix, "time-picker-panel-col-").concat(colLen), className);
        var commonProps = {
            prefix: prefix,
            disabled: disabled,
            onSelect: this.onSelectMenuItem,
            renderTimeMenuItems: renderTimeMenuItems,
            value: value,
        };
        var activeHour;
        var activeMinute;
        var activeSecond;
        if (value && moment.isMoment(value)) {
            activeHour = value.hour();
            activeMinute = value.minute();
            activeSecond = value.second();
        }
        return (
        /* @ts-expect-error div 上不应该透传 onSelect */
        React.createElement("div", __assign({}, others, { className: classNames }),
            showHour ? (React.createElement(TimeMenu, __assign({}, commonProps, { activeIndex: activeHour, title: locale.hour, mode: "hour", step: hourStep, disabledItems: disabledHours }))) : null,
            showMinute ? (React.createElement(TimeMenu, __assign({}, commonProps, { activeIndex: activeMinute, title: locale.minute, mode: "minute", step: minuteStep, disabledItems: disabledMinutes }))) : null,
            showSecond ? (React.createElement(TimeMenu, __assign({}, commonProps, { activeIndex: activeSecond, title: locale.second, step: secondStep, mode: "second", disabledItems: disabledSeconds }))) : null));
    };
    TimePickerPanel.propTypes = {
        prefix: PropTypes.string,
        /**
         * 时间值（moment 对象）
         */
        value: checkMomentObj,
        /**
         * 是否显示小时
         */
        showHour: PropTypes.bool,
        /**
         * 是否显示分钟
         */
        showMinute: PropTypes.bool,
        /**
         * 是否显示秒
         */
        showSecond: PropTypes.bool,
        /**
         * 小时选项步长
         */
        hourStep: PropTypes.number,
        /**
         * 分钟选项步长
         */
        minuteStep: PropTypes.number,
        /**
         * 秒钟选项步长
         */
        secondStep: PropTypes.number,
        /**
         * 禁用小时函数
         * @param index - 时 0 - 23
         * @returns 是否禁用
         */
        disabledHours: PropTypes.func,
        /**
         * 禁用分钟函数
         * @param index - 分 0 - 59
         * @returns 是否禁用
         */
        disabledMinutes: PropTypes.func,
        /**
         * 禁用秒函数
         * @param index - 秒 0 - 59
         * @returns 是否禁用
         */
        disabledSeconds: PropTypes.func,
        /**
         * 渲染的可选择时间列表
         * [\{
         *  label: '01',
         *  value: 1
         * \}]
         * @param list - 默认渲染的列表
         * @param mode - 渲染的菜单 hour, minute, second
         * @param value - 当前时间，可能为 null
         * @returns 返回需要渲染的数据
         */
        renderTimeMenuItems: PropTypes.func,
        /**
         * 选择某个日期值时的回调
         * @param value - 选中后的日期值
         */
        onSelect: PropTypes.func,
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
        locale: nextLocale.TimePicker,
    };
    return TimePickerPanel;
}(Component));
export default TimePickerPanel;
