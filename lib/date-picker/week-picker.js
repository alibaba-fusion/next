"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var moment_1 = require("moment");
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var overlay_1 = require("../overlay");
var input_1 = require("../input");
var icon_1 = require("../icon");
var calendar_1 = require("../calendar");
var config_provider_1 = require("../config-provider");
var zh_cn_1 = require("../locale/zh-cn");
var util_1 = require("../util");
var util_2 = require("./util");
var Popup = overlay_1.default.Popup;
/**
 * DatePicker.WeekPicker
 */
var WeekPicker = /** @class */ (function (_super) {
    tslib_1.__extends(WeekPicker, _super);
    function WeekPicker(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.handleChange = function (newValue, prevValue) {
            if (!('value' in _this.props)) {
                _this.setState({
                    value: newValue,
                });
            }
            var newValueOf = newValue ? newValue.valueOf() : null;
            var preValueOf = prevValue ? prevValue.valueOf() : null;
            if (newValueOf !== preValueOf) {
                _this.props.onChange(newValue);
            }
        };
        _this.onDateInputChange = function (value, e, eventType) {
            if (eventType === 'clear' || !value) {
                e.stopPropagation();
                _this.handleChange(null, _this.state.value);
            }
        };
        _this.onKeyDown = function (e) {
            if ([util_1.KEYCODE.UP, util_1.KEYCODE.DOWN, util_1.KEYCODE.PAGE_UP, util_1.KEYCODE.PAGE_DOWN].indexOf(e.keyCode) === -1) {
                return;
            }
            if ((e.altKey && [util_1.KEYCODE.PAGE_UP, util_1.KEYCODE.PAGE_DOWN].indexOf(e.keyCode) === -1) ||
                e.controlKey ||
                e.shiftKey) {
                return;
            }
            var date = _this.state.value;
            if (date && date.isValid()) {
                var stepUnit = e.altKey ? 'year' : 'month';
                switch (e.keyCode) {
                    case util_1.KEYCODE.UP:
                        date.subtract(1, 'w');
                        break;
                    case util_1.KEYCODE.DOWN:
                        date.add(1, 'w');
                        break;
                    case util_1.KEYCODE.PAGE_UP:
                        date.subtract(1, stepUnit);
                        break;
                    case util_1.KEYCODE.PAGE_DOWN:
                        date.add(1, stepUnit);
                        break;
                }
            }
            else {
                date = (0, moment_1.default)();
            }
            e.preventDefault();
            _this.handleChange(date, _this.state.value);
        };
        _this.onVisibleChange = function (visible, type) {
            if (!('visible' in _this.props)) {
                _this.setState({
                    visible: visible,
                });
            }
            _this.props.onVisibleChange(visible, type);
        };
        _this.onSelectCalendarPanel = function (value) {
            _this.handleChange(value, _this.state.value);
            _this.onVisibleChange(false, 'calendarSelect');
        };
        _this.dateRender = function (value) {
            var _a;
            var _b = _this.props, prefix = _b.prefix, dateCellRender = _b.dateCellRender;
            var selectedValue = _this.state.value;
            var content = dateCellRender && typeof dateCellRender === 'function' ? dateCellRender(value) : value.dates();
            if (selectedValue && selectedValue.years() === value.years() && selectedValue.weeks() === value.weeks()) {
                var firstDay = moment_1.default.localeData().firstDayOfWeek();
                var endDay = firstDay - 1 < 0 ? 6 : firstDay - 1;
                return (react_1.default.createElement("div", { className: (0, classnames_1.default)("".concat(prefix, "calendar-week-active-date"), (_a = {},
                        _a["".concat(prefix, "calendar-week-active-start")] = value.days() === moment_1.default.localeData().firstDayOfWeek(),
                        _a["".concat(prefix, "calendar-week-active-end")] = value.days() === endDay,
                        _a)) },
                    react_1.default.createElement("span", null, content)));
            }
            return content;
        };
        var value = (0, util_2.formatDateValue)(props.value || props.defaultValue, props.format);
        _this.state = {
            value: value,
            visible: props.visible || props.defaultVisible,
        };
        return _this;
    }
    WeekPicker.getDerivedStateFromProps = function (props) {
        var st = {};
        if ('value' in props) {
            st.value = (0, util_2.formatDateValue)(props.value, props.format);
        }
        if ('visible' in props) {
            st.visible = props.visible;
        }
        return st;
    };
    WeekPicker.prototype.renderPreview = function (others) {
        var _a = this.props, prefix = _a.prefix, format = _a.format, className = _a.className, renderPreview = _a.renderPreview;
        var value = this.state.value;
        var previewCls = (0, classnames_1.default)(className, "".concat(prefix, "form-preview"));
        var label = value ? value.format(format) : '';
        if (typeof renderPreview === 'function') {
            return (react_1.default.createElement("div", tslib_1.__assign({}, others, { className: previewCls }), renderPreview(value, this.props)));
        }
        return (react_1.default.createElement("p", tslib_1.__assign({}, others, { className: previewCls }), label));
    };
    WeekPicker.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, rtl = _a.rtl, locale = _a.locale, label = _a.label, state = _a.state, format = _a.format, defaultVisibleMonth = _a.defaultVisibleMonth, onVisibleMonthChange = _a.onVisibleMonthChange, disabledDate = _a.disabledDate, footerRender = _a.footerRender, placeholder = _a.placeholder, size = _a.size, disabled = _a.disabled, hasClear = _a.hasClear, popupTriggerType = _a.popupTriggerType, popupAlign = _a.popupAlign, popupContainer = _a.popupContainer, popupStyle = _a.popupStyle, popupClassName = _a.popupClassName, popupProps = _a.popupProps, popupComponent = _a.popupComponent, popupContent = _a.popupContent, followTrigger = _a.followTrigger, className = _a.className, inputProps = _a.inputProps, monthCellRender = _a.monthCellRender, yearCellRender = _a.yearCellRender, isPreview = _a.isPreview, others = tslib_1.__rest(_a, ["prefix", "rtl", "locale", "label", "state", "format", "defaultVisibleMonth", "onVisibleMonthChange", "disabledDate", "footerRender", "placeholder", "size", "disabled", "hasClear", "popupTriggerType", "popupAlign", "popupContainer", "popupStyle", "popupClassName", "popupProps", "popupComponent", "popupContent", "followTrigger", "className", "inputProps", "monthCellRender", "yearCellRender", "isPreview"]);
        var _b = this.state, visible = _b.visible, value = _b.value;
        var sharedInputProps = tslib_1.__assign(tslib_1.__assign({}, inputProps), { size: size, disabled: disabled, onChange: this.onDateInputChange, onKeyDown: this.onKeyDown });
        if (rtl) {
            others.dir = 'rtl';
        }
        if (isPreview) {
            return this.renderPreview(util_1.obj.pickOthers(others, WeekPicker.PropTypes));
        }
        var trigger = (react_1.default.createElement("div", { className: "".concat(prefix, "week-picker-trigger") },
            react_1.default.createElement(input_1.default, tslib_1.__assign({}, sharedInputProps, { label: label, state: state, value: value ? value.format(format) : '', role: "combobox", "aria-expanded": visible, readOnly: true, placeholder: placeholder || locale.weekPlaceholder, hint: react_1.default.createElement(icon_1.default, { type: "calendar", className: "".concat(prefix, "date-picker-symbol-calendar-icon") }), hasClear: value && hasClear, className: "".concat(prefix, "week-picker-input") }))));
        var PopupComponent = popupComponent ? popupComponent : Popup;
        return (react_1.default.createElement("div", tslib_1.__assign({}, util_1.obj.pickOthers(WeekPicker.propTypes, others), { className: (0, classnames_1.default)("".concat(prefix, "week-picker"), className) }),
            react_1.default.createElement(PopupComponent, tslib_1.__assign({ align: popupAlign }, popupProps, { followTrigger: followTrigger, disabled: disabled, visible: visible, onVisibleChange: this.onVisibleChange, triggerType: popupTriggerType, container: popupContainer, style: popupStyle, className: popupClassName, trigger: trigger }), popupContent ? (popupContent) : (react_1.default.createElement("div", { dir: others.dir, className: "".concat(prefix, "week-picker-body") },
                react_1.default.createElement(calendar_1.default, { shape: "panel", value: value, format: format, className: "".concat(prefix, "calendar-week"), dateCellRender: this.dateRender, monthCellRender: monthCellRender, yearCellRender: yearCellRender, onSelect: this.onSelectCalendarPanel, defaultVisibleMonth: defaultVisibleMonth, onVisibleMonthChange: onVisibleMonthChange, disabledDate: disabledDate }),
                footerRender())))));
    };
    WeekPicker.propTypes = tslib_1.__assign(tslib_1.__assign({}, config_provider_1.default.propTypes), { prefix: prop_types_1.default.string, rtl: prop_types_1.default.bool, 
        /**
         * 输入框内置标签
         */
        label: prop_types_1.default.node, 
        /**
         * 输入框状态
         */
        state: prop_types_1.default.oneOf(['success', 'loading', 'error']), 
        /**
         * 输入提示
         */
        placeholder: prop_types_1.default.string, 
        /**
         * 默认展现的月
         * @return {MomentObject} 返回包含指定月份的 moment 对象实例
         */
        defaultVisibleMonth: prop_types_1.default.func, onVisibleMonthChange: prop_types_1.default.func, 
        /**
         * 日期值（受控）moment 对象
         */
        value: util_2.checkDateValue, 
        /**
         * 初始日期值，moment 对象
         */
        defaultValue: util_2.checkDateValue, 
        /**
         * 日期值的格式（用于限定用户输入和展示）
         */
        format: prop_types_1.default.string, 
        /**
         * 禁用日期函数
         * @param {MomentObject} 日期值
         * @param {String} view 当前视图类型，year: 年， month: 月, date: 日
         * @return {Boolean} 是否禁用
         */
        disabledDate: prop_types_1.default.func, 
        /**
         * 自定义面板页脚
         * @return {Node} 自定义的面板页脚组件
         */
        footerRender: prop_types_1.default.func, 
        /**
         * 日期值改变时的回调
         * @param {MomentObject|String} value 日期值
         */
        onChange: prop_types_1.default.func, 
        /**
         * 输入框尺寸
         */
        size: prop_types_1.default.oneOf(['small', 'medium', 'large']), 
        /**
         * 是否禁用
         */
        disabled: prop_types_1.default.bool, 
        /**
         * 是否显示清空按钮
         */
        hasClear: prop_types_1.default.bool, 
        /**
         * 弹层显示状态
         */
        visible: prop_types_1.default.bool, 
        /**
         * 弹层默认是否显示
         */
        defaultVisible: prop_types_1.default.bool, 
        /**
         * 弹层展示状态变化时的回调
         * @param {Boolean} visible 弹层是否显示
         * @param {String} type 触发弹层显示和隐藏的来源 calendarSelect 表示由日期表盘的选择触发； okBtnClick 表示由确认按钮触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发
         */
        onVisibleChange: prop_types_1.default.func, 
        /**
         * 弹层触发方式
         */
        popupTriggerType: prop_types_1.default.oneOf(['click', 'hover']), 
        /**
         * 弹层对齐方式,具体含义见 OverLay文档
         */
        popupAlign: prop_types_1.default.string, 
        /**
         * 弹层容器
         * @param {Element} target 目标元素
         * @return {Element} 弹层的容器元素
         */
        popupContainer: prop_types_1.default.any, 
        /**
         * 弹层自定义样式
         */
        popupStyle: prop_types_1.default.object, 
        /**
         * 弹层自定义样式类
         */
        popupClassName: prop_types_1.default.string, 
        /**
         * 弹层其他属性
         */
        popupProps: prop_types_1.default.object, 
        /**
         * 是否跟随滚动
         */
        followTrigger: prop_types_1.default.bool, 
        /**
         * 输入框其他属性
         */
        inputProps: prop_types_1.default.object, 
        /**
         * 自定义日期渲染函数
         * @param {Object} value 日期值（moment对象）
         * @returns {ReactNode}
         */
        dateCellRender: prop_types_1.default.func, 
        /**
         * 自定义月份渲染函数
         * @param {Object} calendarDate 对应 Calendar 返回的自定义日期对象
         * @returns {ReactNode}
         */
        monthCellRender: prop_types_1.default.func, 
        /**
         * 是否为预览态
         */
        isPreview: prop_types_1.default.bool, 
        /**
         * 预览态模式下渲染的内容
         * @param {MomentObject} value 年份
         */
        renderPreview: prop_types_1.default.func, yearCellRender: prop_types_1.default.func, locale: prop_types_1.default.object, className: prop_types_1.default.string, name: prop_types_1.default.string, popupComponent: prop_types_1.default.elementType, popupContent: prop_types_1.default.node });
    WeekPicker.defaultProps = {
        prefix: 'next-',
        rtl: false,
        format: 'GGGG-Wo',
        size: 'medium',
        disabledDate: function () { return false; },
        footerRender: function () { return null; },
        hasClear: true,
        popupTriggerType: 'click',
        popupAlign: 'tl tl',
        locale: zh_cn_1.default.DatePicker,
        defaultVisible: false,
        onChange: util_1.func.noop,
        onVisibleChange: util_1.func.noop,
    };
    return WeekPicker;
}(react_1.Component));
exports.default = (0, react_lifecycles_compat_1.polyfill)(WeekPicker);
