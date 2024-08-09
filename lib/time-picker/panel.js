"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var moment_1 = tslib_1.__importDefault(require("moment"));
var zh_cn_1 = tslib_1.__importDefault(require("../locale/zh-cn"));
var util_1 = require("../util");
var time_menu_1 = tslib_1.__importDefault(require("./module/time-menu"));
var utils_1 = require("./utils");
var noop = util_1.func.noop;
var TimePickerPanel = /** @class */ (function (_super) {
    tslib_1.__extends(TimePickerPanel, _super);
    function TimePickerPanel() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.onSelectMenuItem = function (index, type) {
            var value = _this.props.value;
            var clonedValue = value ? value.clone() : (0, moment_1.default)('00:00:00', 'HH:mm:ss', true);
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
        var _a = this.props, prefix = _a.prefix, value = _a.value, locale = _a.locale, className = _a.className, disabled = _a.disabled, showHour = _a.showHour, showMinute = _a.showMinute, showSecond = _a.showSecond, hourStep = _a.hourStep, minuteStep = _a.minuteStep, secondStep = _a.secondStep, disabledHours = _a.disabledHours, disabledMinutes = _a.disabledMinutes, disabledSeconds = _a.disabledSeconds, renderTimeMenuItems = _a.renderTimeMenuItems, others = tslib_1.__rest(_a, ["prefix", "value", "locale", "className", "disabled", "showHour", "showMinute", "showSecond", "hourStep", "minuteStep", "secondStep", "disabledHours", "disabledMinutes", "disabledSeconds", "renderTimeMenuItems"]);
        var colLen = [showHour, showMinute, showSecond].filter(function (v) { return v; }).length;
        var classNames = (0, classnames_1.default)("".concat(prefix, "time-picker-panel"), "".concat(prefix, "time-picker-panel-col-").concat(colLen), className);
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
        if (value && moment_1.default.isMoment(value)) {
            activeHour = value.hour();
            activeMinute = value.minute();
            activeSecond = value.second();
        }
        return (
        /* @ts-expect-error div 上不应该透传 onSelect */
        react_1.default.createElement("div", tslib_1.__assign({}, others, { className: classNames }),
            showHour ? (react_1.default.createElement(time_menu_1.default, tslib_1.__assign({}, commonProps, { activeIndex: activeHour, title: locale.hour, mode: "hour", step: hourStep, disabledItems: disabledHours }))) : null,
            showMinute ? (react_1.default.createElement(time_menu_1.default, tslib_1.__assign({}, commonProps, { activeIndex: activeMinute, title: locale.minute, mode: "minute", step: minuteStep, disabledItems: disabledMinutes }))) : null,
            showSecond ? (react_1.default.createElement(time_menu_1.default, tslib_1.__assign({}, commonProps, { activeIndex: activeSecond, title: locale.second, step: secondStep, mode: "second", disabledItems: disabledSeconds }))) : null));
    };
    TimePickerPanel.propTypes = {
        prefix: prop_types_1.default.string,
        /**
         * 时间值（moment 对象）
         */
        value: utils_1.checkMomentObj,
        /**
         * 是否显示小时
         */
        showHour: prop_types_1.default.bool,
        /**
         * 是否显示分钟
         */
        showMinute: prop_types_1.default.bool,
        /**
         * 是否显示秒
         */
        showSecond: prop_types_1.default.bool,
        /**
         * 小时选项步长
         */
        hourStep: prop_types_1.default.number,
        /**
         * 分钟选项步长
         */
        minuteStep: prop_types_1.default.number,
        /**
         * 秒钟选项步长
         */
        secondStep: prop_types_1.default.number,
        /**
         * 禁用小时函数
         * @param index - 时 0 - 23
         * @returns 是否禁用
         */
        disabledHours: prop_types_1.default.func,
        /**
         * 禁用分钟函数
         * @param index - 分 0 - 59
         * @returns 是否禁用
         */
        disabledMinutes: prop_types_1.default.func,
        /**
         * 禁用秒函数
         * @param index - 秒 0 - 59
         * @returns 是否禁用
         */
        disabledSeconds: prop_types_1.default.func,
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
        renderTimeMenuItems: prop_types_1.default.func,
        /**
         * 选择某个日期值时的回调
         * @param value - 选中后的日期值
         */
        onSelect: prop_types_1.default.func,
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
        locale: zh_cn_1.default.TimePicker,
    };
    return TimePickerPanel;
}(react_1.Component));
exports.default = TimePickerPanel;
