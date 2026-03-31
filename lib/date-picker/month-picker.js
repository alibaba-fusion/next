"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var moment_1 = tslib_1.__importDefault(require("moment"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var overlay_1 = tslib_1.__importDefault(require("../overlay"));
var input_1 = tslib_1.__importDefault(require("../input"));
var icon_1 = tslib_1.__importDefault(require("../icon"));
var calendar_1 = tslib_1.__importDefault(require("../calendar"));
var zh_cn_1 = tslib_1.__importDefault(require("../locale/zh-cn"));
var util_1 = require("../util");
var util_2 = require("./util");
var Popup = overlay_1.default.Popup;
/**
 * DatePicker.MonthPicker
 */
var MonthPicker = /** @class */ (function (_super) {
    tslib_1.__extends(MonthPicker, _super);
    function MonthPicker(props) {
        var _this = _super.call(this, props) || this;
        _this.onValueChange = function (newValue) {
            var ret = _this.state.inputAsString && newValue ? newValue.format(_this.props.format) : newValue;
            _this.props.onChange(ret);
        };
        _this.onSelectCalendarPanel = function (value) {
            var prevSelectedMonth = _this.state.value;
            var selectedMonth = value.clone().date(1).hour(0).minute(0).second(0);
            _this.handleChange(selectedMonth, prevSelectedMonth, { inputing: false }, function () {
                _this.onVisibleChange(false, 'calendarSelect');
            });
        };
        _this.clearValue = function () {
            _this.setState({
                dateInputStr: '',
            });
            _this.handleChange(null, _this.state.value);
        };
        _this.onDateInputChange = function (inputStr, e, eventType) {
            if (eventType === 'clear' || !inputStr) {
                e.stopPropagation();
                _this.clearValue();
            }
            else {
                _this.setState({
                    dateInputStr: inputStr,
                    inputing: true,
                });
            }
        };
        _this.onDateInputBlur = function () {
            var dateInputStr = _this.state.dateInputStr;
            if (dateInputStr) {
                var _a = _this.props, disabledDate = _a.disabledDate, format = _a.format;
                var parsed = (0, moment_1.default)(dateInputStr, format, true);
                _this.setState({
                    dateInputStr: '',
                    inputing: false,
                });
                if (parsed.isValid() && !disabledDate(parsed, 'month')) {
                    _this.handleChange(parsed, _this.state.value);
                }
            }
        };
        _this.onKeyDown = function (e) {
            var format = _this.props.format;
            var _a = _this.state, dateInputStr = _a.dateInputStr, value = _a.value;
            var dateStr = (0, util_2.onDateKeydown)(e, { format: format, dateInputStr: dateInputStr, value: value }, 'month');
            if (!dateStr)
                return;
            // @ts-expect-error 应传入 e
            _this.onDateInputChange(dateStr);
        };
        _this.handleChange = function (newValue, prevValue, others, callback) {
            if (others === void 0) { others = {}; }
            if (!('value' in _this.props)) {
                _this.setState(tslib_1.__assign({ value: newValue }, others));
            }
            else {
                _this.setState(tslib_1.__assign({}, others));
            }
            var format = _this.props.format;
            var newValueOf = newValue ? newValue.format(format) : null;
            var preValueOf = prevValue ? prevValue.format(format) : null;
            if (newValueOf !== preValueOf) {
                _this.onValueChange(newValue);
                if (typeof callback === 'function') {
                    return callback();
                }
            }
        };
        _this.onVisibleChange = function (visible, type) {
            if (!('visible' in _this.props)) {
                _this.setState({
                    visible: visible,
                });
            }
            _this.props.onVisibleChange(visible, type);
        };
        _this.state = {
            value: (0, util_2.formatDateValue)(props.defaultValue, props.format),
            dateInputStr: '',
            inputing: false,
            visible: props.defaultVisible,
            inputAsString: typeof props.defaultValue === 'string',
        };
        return _this;
    }
    MonthPicker.getDerivedStateFromProps = function (props) {
        var states = {};
        if ('value' in props) {
            states.value = (0, util_2.formatDateValue)(props.value, props.format);
            if (typeof props.value === 'string') {
                states.inputAsString = true;
            }
            if (moment_1.default.isMoment(props.value)) {
                states.inputAsString = false;
            }
        }
        if ('visible' in props) {
            states.visible = props.visible;
        }
        return states;
    };
    MonthPicker.prototype.renderPreview = function (others) {
        var _a = this.props, prefix = _a.prefix, format = _a.format, className = _a.className, renderPreview = _a.renderPreview;
        var value = this.state.value;
        var previewCls = (0, classnames_1.default)(className, "".concat(prefix, "form-preview"));
        var label = value ? value.format(format) : '';
        if (typeof renderPreview === 'function') {
            return (react_1.default.createElement("div", tslib_1.__assign({}, others, { className: previewCls }), renderPreview(value, this.props)));
        }
        return (react_1.default.createElement("p", tslib_1.__assign({}, others, { className: previewCls }), label));
    };
    MonthPicker.prototype.render = function () {
        var _a, _b, _c;
        var _d = this.props, prefix = _d.prefix, rtl = _d.rtl, locale = _d.locale, label = _d.label, state = _d.state, format = _d.format, defaultVisibleYear = _d.defaultVisibleYear, disabledDate = _d.disabledDate, footerRender = _d.footerRender, placeholder = _d.placeholder, size = _d.size, disabled = _d.disabled, hasClear = _d.hasClear, popupTriggerType = _d.popupTriggerType, popupAlign = _d.popupAlign, popupContainer = _d.popupContainer, popupStyle = _d.popupStyle, popupClassName = _d.popupClassName, popupProps = _d.popupProps, popupComponent = _d.popupComponent, popupContent = _d.popupContent, followTrigger = _d.followTrigger, className = _d.className, inputProps = _d.inputProps, monthCellRender = _d.monthCellRender, yearCellRender = _d.yearCellRender, dateInputAriaLabel = _d.dateInputAriaLabel, isPreview = _d.isPreview, others = tslib_1.__rest(_d, ["prefix", "rtl", "locale", "label", "state", "format", "defaultVisibleYear", "disabledDate", "footerRender", "placeholder", "size", "disabled", "hasClear", "popupTriggerType", "popupAlign", "popupContainer", "popupStyle", "popupClassName", "popupProps", "popupComponent", "popupContent", "followTrigger", "className", "inputProps", "monthCellRender", "yearCellRender", "dateInputAriaLabel", "isPreview"]);
        var _e = this.state, visible = _e.visible, value = _e.value, dateInputStr = _e.dateInputStr, inputing = _e.inputing;
        var monthPickerCls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "month-picker")] = true,
            _a), className);
        var triggerInputCls = (0, classnames_1.default)((_b = {},
            _b["".concat(prefix, "month-picker-input")] = true,
            _b["".concat(prefix, "error")] = false,
            _b));
        var panelBodyClassName = (0, classnames_1.default)((_c = {},
            _c["".concat(prefix, "month-picker-body")] = true,
            _c));
        if (rtl) {
            others.dir = 'rtl';
        }
        if (isPreview) {
            // @ts-expect-error 应是 propTypes
            return this.renderPreview(util_1.obj.pickOthers(others, MonthPicker.PropTypes));
        }
        var panelInputCls = "".concat(prefix, "month-picker-panel-input");
        var sharedInputProps = tslib_1.__assign(tslib_1.__assign({}, inputProps), { size: size, disabled: disabled, onChange: this.onDateInputChange, onBlur: this.onDateInputBlur, onPressEnter: this.onDateInputBlur, onKeyDown: this.onKeyDown });
        var dateInputValue = inputing ? dateInputStr : (value && value.format(format)) || '';
        var triggerInputValue = dateInputValue;
        var dateInput = (react_1.default.createElement(input_1.default, tslib_1.__assign({}, sharedInputProps, { value: dateInputValue, "aria-label": dateInputAriaLabel, 
            // @ts-expect-error 没有 this.onFoucsDateInput
            onFocus: this.onFoucsDateInput, placeholder: format, className: panelInputCls })));
        var datePanel = (react_1.default.createElement(calendar_1.default, { shape: "panel", modes: ['month', 'year'], monthCellRender: monthCellRender, yearCellRender: yearCellRender, value: value, onSelect: this.onSelectCalendarPanel, defaultVisibleMonth: defaultVisibleYear, disabledDate: disabledDate }));
        var panelBody = datePanel;
        var panelFooter = footerRender();
        var allowClear = value && hasClear;
        var trigger = (react_1.default.createElement("div", { className: "".concat(prefix, "month-picker-trigger") },
            react_1.default.createElement(input_1.default, tslib_1.__assign({}, sharedInputProps, { label: label, state: state, readOnly: true, value: triggerInputValue, placeholder: placeholder || locale.monthPlaceholder, hint: react_1.default.createElement(icon_1.default, { type: "calendar", className: "".concat(prefix, "date-picker-symbol-calendar-icon") }), 
                // @ts-expect-error allowClear 应该先做 boolean 化处理
                hasClear: allowClear, className: triggerInputCls }))));
        var PopupComponent = popupComponent ? popupComponent : Popup;
        return (react_1.default.createElement("div", tslib_1.__assign({}, util_1.obj.pickOthers(MonthPicker.propTypes, others), { className: monthPickerCls }),
            react_1.default.createElement(PopupComponent, tslib_1.__assign({ autoFocus: true, align: popupAlign }, popupProps, { followTrigger: followTrigger, role: "combobox", "aria-expanded": visible, disabled: disabled, visible: visible, onVisibleChange: this.onVisibleChange, triggerType: popupTriggerType, container: popupContainer, style: popupStyle, className: popupClassName, trigger: trigger }), popupContent ? (popupContent) : (react_1.default.createElement("div", { className: panelBodyClassName, dir: others.dir },
                react_1.default.createElement("div", { className: "".concat(prefix, "month-picker-panel-header") }, dateInput),
                panelBody,
                panelFooter)))));
    };
    MonthPicker.displayName = 'MonthPicker';
    MonthPicker.propTypes = tslib_1.__assign(tslib_1.__assign({}, config_provider_1.default.propTypes), { prefix: prop_types_1.default.string, rtl: prop_types_1.default.bool, label: prop_types_1.default.node, state: prop_types_1.default.oneOf(['success', 'loading', 'error']), placeholder: prop_types_1.default.string, defaultVisibleYear: prop_types_1.default.func, value: util_2.checkDateValue, defaultValue: util_2.checkDateValue, format: prop_types_1.default.string, disabledDate: prop_types_1.default.func, footerRender: prop_types_1.default.func, onChange: prop_types_1.default.func, size: prop_types_1.default.oneOf(['small', 'medium', 'large']), disabled: prop_types_1.default.bool, hasClear: prop_types_1.default.bool, visible: prop_types_1.default.bool, defaultVisible: prop_types_1.default.bool, onVisibleChange: prop_types_1.default.func, popupTriggerType: prop_types_1.default.oneOf(['click', 'hover']), popupAlign: prop_types_1.default.string, popupContainer: prop_types_1.default.any, popupStyle: prop_types_1.default.object, popupClassName: prop_types_1.default.string, popupProps: prop_types_1.default.object, followTrigger: prop_types_1.default.bool, inputProps: prop_types_1.default.object, monthCellRender: prop_types_1.default.func, yearCellRender: prop_types_1.default.func, dateInputAriaLabel: prop_types_1.default.string, isPreview: prop_types_1.default.bool, renderPreview: prop_types_1.default.func, locale: prop_types_1.default.object, className: prop_types_1.default.string, name: prop_types_1.default.string, popupComponent: prop_types_1.default.elementType, popupContent: prop_types_1.default.node });
    MonthPicker.defaultProps = {
        prefix: 'next-',
        rtl: false,
        format: 'YYYY-MM',
        size: 'medium',
        disabledDate: function () { return false; },
        footerRender: function () { return null; },
        hasClear: true,
        popupTriggerType: 'click',
        popupAlign: 'tl tl',
        locale: zh_cn_1.default.DatePicker,
        onChange: util_1.func.noop,
        onVisibleChange: util_1.func.noop,
    };
    return MonthPicker;
}(react_1.Component));
exports.default = (0, react_lifecycles_compat_1.polyfill)(MonthPicker);
