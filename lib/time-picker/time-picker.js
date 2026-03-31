"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var moment_1 = tslib_1.__importDefault(require("moment"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var input_1 = tslib_1.__importDefault(require("../input"));
var icon_1 = tslib_1.__importDefault(require("../icon"));
var overlay_1 = tslib_1.__importDefault(require("../overlay"));
var zh_cn_1 = tslib_1.__importDefault(require("../locale/zh-cn"));
var util_1 = require("../util");
var panel_1 = tslib_1.__importDefault(require("./panel"));
var utils_1 = require("./utils");
var util_2 = require("../date-picker/util");
var Popup = overlay_1.default.Popup;
var noop = util_1.func.noop;
var timePickerLocale = zh_cn_1.default.TimePicker;
/**
 * TimePicker
 */
var TimePicker = /** @class */ (function (_super) {
    tslib_1.__extends(TimePicker, _super);
    function TimePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.onClearValue = function () {
            _this.setState({
                value: null,
            });
            if (_this.state.value) {
                _this.onValueChange(null);
            }
        };
        _this.onInputChange = function (inputValue, e, eventType) {
            if (!('value' in _this.props)) {
                if (eventType === 'clear' || !inputValue) {
                    e.stopPropagation();
                    _this.onClearValue();
                }
                _this.setState({
                    inputStr: inputValue,
                    inputing: true,
                });
            }
            else if (eventType === 'clear') {
                // 受控状态下用户点击 clear
                e.stopPropagation();
                _this.onValueChange(null);
            }
        };
        _this.onInputBlur = function () {
            var inputStr = _this.state.inputStr;
            if (inputStr) {
                var format = _this.props.format;
                var parsed = (0, moment_1.default)(inputStr, format, true);
                if (parsed.isValid()) {
                    _this.setState({
                        value: parsed,
                        inputStr: '',
                    });
                    _this.onValueChange(parsed);
                }
                _this.setState({
                    inputing: false,
                });
            }
        };
        _this.onKeyown = function (e) {
            var _a = _this.state, value = _a.value, inputStr = _a.inputStr;
            var _b = _this.props, format = _b.format, _c = _b.hourStep, hourStep = _c === void 0 ? 1 : _c, _d = _b.minuteStep, minuteStep = _d === void 0 ? 1 : _d, _e = _b.secondStep, secondStep = _e === void 0 ? 1 : _e, disabledMinutes = _b.disabledMinutes, disabledSeconds = _b.disabledSeconds;
            var unit = 'second';
            if (disabledSeconds) {
                unit = disabledMinutes ? 'hour' : 'minute';
            }
            var timeStr = (0, util_2.onTimeKeydown)(e, {
                format: format,
                timeInputStr: inputStr,
                steps: {
                    hour: hourStep,
                    minute: minuteStep,
                    second: secondStep,
                },
                value: value,
            }, unit);
            if (!timeStr)
                return;
            _this.onInputChange(timeStr);
        };
        _this.onTimePanelSelect = function (value) {
            if (!('value' in _this.props)) {
                _this.setState({
                    value: value,
                    inputing: false,
                });
            }
            if (!_this.state.value || value.valueOf() !== _this.state.value.valueOf()) {
                _this.onValueChange(value);
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
        var value = (0, utils_1.formatDateValue)(props.value || props.defaultValue, props.format);
        _this.inputAsString = typeof (props.value || props.defaultValue) === 'string';
        _this.state = {
            value: value,
            inputStr: '',
            inputing: false,
            visible: props.visible || props.defaultVisible,
        };
        return _this;
    }
    TimePicker.getDerivedStateFromProps = function (props) {
        var state = {};
        if ('value' in props) {
            state.value = (0, utils_1.formatDateValue)(props.value, props.format);
        }
        if ('visible' in props) {
            state.visible = props.visible;
        }
        return state;
    };
    TimePicker.prototype.onValueChange = function (newValue) {
        var ret = this.inputAsString && newValue ? newValue.format(this.props.format) : newValue;
        this.props.onChange(ret);
    };
    TimePicker.prototype.renderPreview = function (others) {
        var _a = this.props, prefix = _a.prefix, format = _a.format, className = _a.className, renderPreview = _a.renderPreview;
        var value = this.state.value;
        var previewCls = (0, classnames_1.default)(className, "".concat(prefix, "form-preview"));
        var label = value ? value.format(format) : '';
        if (typeof renderPreview === 'function') {
            return (react_1.default.createElement("div", tslib_1.__assign({}, others, { className: previewCls }), renderPreview(value, this.props)));
        }
        return (react_1.default.createElement("p", tslib_1.__assign({}, others, { className: previewCls }), label));
    };
    TimePicker.prototype.render = function () {
        var _a, _b;
        var _c = this.props, prefix = _c.prefix, label = _c.label, state = _c.state, placeholder = _c.placeholder, size = _c.size, format = _c.format, hasClear = _c.hasClear, hourStep = _c.hourStep, minuteStep = _c.minuteStep, secondStep = _c.secondStep, disabledHours = _c.disabledHours, disabledMinutes = _c.disabledMinutes, disabledSeconds = _c.disabledSeconds, renderTimeMenuItems = _c.renderTimeMenuItems, inputProps = _c.inputProps, popupAlign = _c.popupAlign, popupTriggerType = _c.popupTriggerType, popupContainer = _c.popupContainer, popupStyle = _c.popupStyle, popupClassName = _c.popupClassName, popupProps = _c.popupProps, popupComponent = _c.popupComponent, popupContent = _c.popupContent, followTrigger = _c.followTrigger, disabled = _c.disabled, className = _c.className, locale = _c.locale, rtl = _c.rtl, isPreview = _c.isPreview, others = tslib_1.__rest(_c, ["prefix", "label", "state", "placeholder", "size", "format", "hasClear", "hourStep", "minuteStep", "secondStep", "disabledHours", "disabledMinutes", "disabledSeconds", "renderTimeMenuItems", "inputProps", "popupAlign", "popupTriggerType", "popupContainer", "popupStyle", "popupClassName", "popupProps", "popupComponent", "popupContent", "followTrigger", "disabled", "className", "locale", "rtl", "isPreview"]);
        var _d = this.state, value = _d.value, inputStr = _d.inputStr, inputing = _d.inputing, visible = _d.visible;
        var triggerCls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "time-picker-trigger")] = true,
            _a));
        if (rtl) {
            others.dir = 'rtl';
        }
        if (isPreview) {
            // @ts-expect-error TimePicker 上没有 PropTypes，应该是 propTypes
            return this.renderPreview(util_1.obj.pickOthers(others, TimePicker.PropTypes));
        }
        var inputValue = inputing ? inputStr : (value && value.format(format)) || '';
        var sharedInputProps = tslib_1.__assign(tslib_1.__assign({}, inputProps), { size: size, disabled: disabled, value: inputValue, 
            // @ts-expect-error value 应该先做 bool 转化
            hasClear: value && hasClear, onChange: this.onInputChange, onBlur: this.onInputBlur, onPressEnter: this.onInputBlur, onKeyDown: this.onKeyown, hint: react_1.default.createElement(icon_1.default, { type: "clock", className: "".concat(prefix, "time-picker-symbol-clock-icon") }) });
        var triggerInput = (react_1.default.createElement("div", { className: triggerCls },
            react_1.default.createElement(input_1.default, tslib_1.__assign({}, sharedInputProps, { label: label, state: state, placeholder: placeholder || locale.placeholder, className: "".concat(prefix, "time-picker-input") }))));
        var panelProps = {
            prefix: prefix,
            locale: locale,
            value: value,
            disabled: disabled,
            showHour: format.indexOf('H') > -1,
            showSecond: format.indexOf('s') > -1,
            showMinute: format.indexOf('m') > -1,
            hourStep: hourStep,
            minuteStep: minuteStep,
            secondStep: secondStep,
            disabledHours: disabledHours,
            disabledMinutes: disabledMinutes,
            disabledSeconds: disabledSeconds,
            renderTimeMenuItems: renderTimeMenuItems,
            onSelect: this.onTimePanelSelect,
        };
        var classNames = (0, classnames_1.default)((_b = {},
            _b["".concat(prefix, "time-picker")] = true,
            _b["".concat(prefix, "time-picker-").concat(size)] = size,
            _b["".concat(prefix, "disabled")] = disabled,
            _b), className);
        var PopupComponent = popupComponent ? popupComponent : Popup;
        return (react_1.default.createElement("div", tslib_1.__assign({}, util_1.obj.pickOthers(TimePicker.propTypes, others), { className: classNames }),
            react_1.default.createElement(PopupComponent, tslib_1.__assign({ autoFocus: true, align: popupAlign }, popupProps, { followTrigger: followTrigger, visible: visible, onVisibleChange: this.onVisibleChange, trigger: triggerInput, container: popupContainer, disabled: disabled, triggerType: popupTriggerType, style: popupStyle, className: popupClassName }), popupContent ? (popupContent) : (react_1.default.createElement("div", { dir: others.dir, className: "".concat(prefix, "time-picker-body") },
                react_1.default.createElement("div", { className: "".concat(prefix, "time-picker-panel-header") },
                    react_1.default.createElement(input_1.default, tslib_1.__assign({}, sharedInputProps, { placeholder: format, className: "".concat(prefix, "time-picker-panel-input") }))),
                react_1.default.createElement(panel_1.default, tslib_1.__assign({}, panelProps)))))));
    };
    TimePicker.propTypes = tslib_1.__assign(tslib_1.__assign({}, config_provider_1.default.propTypes), { prefix: prop_types_1.default.string, rtl: prop_types_1.default.bool, label: prop_types_1.default.node, state: prop_types_1.default.oneOf(['error', 'success']), placeholder: prop_types_1.default.string, value: utils_1.checkDateValue, defaultValue: utils_1.checkDateValue, size: prop_types_1.default.oneOf(['small', 'medium', 'large']), hasClear: prop_types_1.default.bool, format: prop_types_1.default.string, hourStep: prop_types_1.default.number, minuteStep: prop_types_1.default.number, secondStep: prop_types_1.default.number, disabledHours: prop_types_1.default.func, disabledMinutes: prop_types_1.default.func, disabledSeconds: prop_types_1.default.func, renderTimeMenuItems: prop_types_1.default.func, visible: prop_types_1.default.bool, defaultVisible: prop_types_1.default.bool, popupContainer: prop_types_1.default.any, popupAlign: prop_types_1.default.string, popupTriggerType: prop_types_1.default.oneOf(['click', 'hover']), onVisibleChange: prop_types_1.default.func, popupStyle: prop_types_1.default.object, popupClassName: prop_types_1.default.string, popupProps: prop_types_1.default.object, followTrigger: prop_types_1.default.bool, disabled: prop_types_1.default.bool, isPreview: prop_types_1.default.bool, renderPreview: prop_types_1.default.func, onChange: prop_types_1.default.func, className: prop_types_1.default.string, name: prop_types_1.default.string, inputProps: prop_types_1.default.object, popupComponent: prop_types_1.default.elementType, popupContent: prop_types_1.default.node });
    TimePicker.defaultProps = {
        prefix: 'next-',
        rtl: false,
        locale: timePickerLocale,
        size: 'medium',
        format: 'HH:mm:ss',
        hasClear: true,
        disabled: false,
        popupAlign: 'tl tl',
        popupTriggerType: 'click',
        onChange: noop,
        onVisibleChange: noop,
    };
    TimePicker.displayName = 'TimePicker';
    return TimePicker;
}(react_1.Component));
exports.default = (0, react_lifecycles_compat_1.polyfill)(TimePicker);
