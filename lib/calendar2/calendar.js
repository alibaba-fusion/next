"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var zh_cn_1 = tslib_1.__importDefault(require("../locale/zh-cn"));
var util_1 = require("../util");
var prop_types_2 = tslib_1.__importDefault(require("./prop-types"));
var constant_1 = require("./constant");
var header_panel_1 = tslib_1.__importDefault(require("./panels/header-panel"));
var date_table_1 = tslib_1.__importDefault(require("./panels/date-table"));
var pickProps = util_1.obj.pickProps, pickOthers = util_1.obj.pickOthers;
// CALENDAR_MODE => DATE_PANEL_MODE
function getPanelMode(mode) {
    return mode && (mode === constant_1.CALENDAR_MODE.YEAR ? constant_1.DATE_PANEL_MODE.MONTH : constant_1.DATE_PANEL_MODE.DATE);
}
function isValueChanged(newVal, oldVal) {
    return newVal !== oldVal && !(0, util_1.datejs)(newVal).isSame((0, util_1.datejs)(oldVal));
}
var Calendar = /** @class */ (function (_super) {
    tslib_1.__extends(Calendar, _super);
    function Calendar(props) {
        var _this = _super.call(this, props) || this;
        _this.switchPanelMode = function (mode) {
            var MONTH = constant_1.DATE_PANEL_MODE.MONTH, YEAR = constant_1.DATE_PANEL_MODE.YEAR, DECADE = constant_1.DATE_PANEL_MODE.DECADE;
            var originalPanelMode = _this.props.panelMode || getPanelMode(mode);
            switch (mode) {
                case YEAR:
                    return MONTH;
                case DECADE:
                    return YEAR;
                default:
                    return originalPanelMode;
            }
        };
        _this.shouldSwitchPanelMode = function () {
            var _a = _this.props, mode = _a.mode, shape = _a.shape;
            var panelMode = _this.state.panelMode;
            var originalPanelMode = _this.props.panelMode || getPanelMode(mode);
            return shape === constant_1.CALENDAR_SHAPE.PANEL && panelMode !== originalPanelMode;
        };
        _this.onDateSelect = function (value, _, _a) {
            var isCurrent = _a.isCurrent;
            var panelMode = _this.state.panelMode;
            var unit = panelMode === 'date' ? 'day' : panelMode;
            if (_this.shouldSwitchPanelMode()) {
                _this.onPanelChange(value, _this.switchPanelMode(panelMode), 'DATESELECT_VALUE_SWITCH_MODE');
            }
            else {
                isCurrent || _this.onPanelValueChange(value, 'DATESELECT');
                // @ts-expect-error unit 在这里不能是 quarter 和 week
                value.isSame(_this.state.value, unit) || _this.onChange(value);
                util_1.func.invoke(_this.props, 'onSelect', [value]);
            }
        };
        _this.onModeChange = function (mode, reason) {
            _this.setState({
                mode: mode,
            });
            var panelMode = getPanelMode(mode);
            if (_this.state.panelMode !== panelMode) {
                _this.onPanelModeChange(panelMode, reason);
            }
        };
        _this.onPanelValueChange = function (panelValue, reason) {
            _this.onPanelChange(panelValue, _this.state.panelMode, reason);
        };
        _this.onPanelModeChange = function (panelMode, reason) {
            _this.onPanelChange(_this.state.panelValue, panelMode, reason);
        };
        _this.onPanelChange = function (value, mode, reason) {
            _this.setState({
                panelMode: mode,
                panelValue: value,
            });
            util_1.func.invoke(_this.props, 'onPanelChange', [value, mode, reason]);
        };
        _this.onChange = function (value) {
            _this.setState({
                value: value,
                panelValue: value,
            });
            util_1.func.invoke(_this.props, 'onChange', [value]);
        };
        var defaultValue = props.defaultValue, mode = props.mode, _a = props.defaultPanelValue, defaultPanelValue = _a === void 0 ? (0, util_1.datejs)() : _a;
        var value = 'value' in props ? props.value : defaultValue;
        var panelValue = (0, util_1.datejs)('panelValue' in props ? props.panelValue : value || defaultPanelValue);
        var panelMode = props.panelMode || getPanelMode(mode) || constant_1.DATE_PANEL_MODE.DATE;
        _this.state = {
            mode: mode,
            value: value,
            panelMode: panelMode,
            panelValue: panelValue.isValid() ? panelValue : (0, util_1.datejs)(),
        };
        return _this;
    }
    Calendar.getDerivedStateFromProps = function (props, state) {
        var newState = {};
        var value;
        var panelValue;
        if ('value' in props && isValueChanged(props.value, state.value)) {
            value = props.value;
            panelValue = (0, util_1.datejs)(value);
        }
        if ('panelValue' in props) {
            panelValue = (0, util_1.datejs)(props.panelValue);
        }
        // panelValue 不能是无效值
        if (panelValue) {
            panelValue = panelValue.isValid() ? panelValue : (0, util_1.datejs)();
            newState = {
                panelValue: panelValue,
            };
        }
        if (value) {
            newState.value = value;
        }
        return newState;
    };
    Calendar.prototype.render = function () {
        var value = 'value' in this.props ? (0, util_1.datejs)(this.props.value) : this.state.value;
        var _a = this.state, panelMode = _a.panelMode, mode = _a.mode, panelValue = _a.panelValue;
        var _b = this.props, prefix = _b.prefix, shape = _b.shape, rtl = _b.rtl, className = _b.className, restProps = tslib_1.__rest(_b, ["prefix", "shape", "rtl", "className"]);
        var sharedProps = {
            rtl: rtl,
            prefix: prefix,
            shape: shape,
            value: value,
            panelValue: panelValue,
        };
        var headerPanelProps = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, pickProps(header_panel_1.default.propTypes, restProps)), sharedProps), { mode: mode, panelMode: panelMode, onPanelValueChange: this.onPanelValueChange, onModeChange: this.onModeChange, onPanelModeChange: this.onPanelModeChange, showModeSwitch: this.props.mode !== constant_1.CALENDAR_MODE.YEAR });
        var dateTableProps = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, pickProps(date_table_1.default.propTypes, restProps)), sharedProps), { mode: panelMode, onSelect: this.onDateSelect });
        var classNames = (0, classnames_1.default)([
            "".concat(prefix, "calendar2"),
            "".concat(prefix, "calendar2-").concat(shape),
            className,
        ]);
        return (react_1.default.createElement("div", tslib_1.__assign({}, pickOthers(Calendar.propTypes, restProps), { dir: rtl ? 'rtl' : undefined, className: classNames }),
            react_1.default.createElement(header_panel_1.default, tslib_1.__assign({}, headerPanelProps)),
            react_1.default.createElement("div", { className: "".concat(prefix, "calendar2-body") },
                react_1.default.createElement(date_table_1.default, tslib_1.__assign({}, dateTableProps)))));
    };
    Calendar.propTypes = {
        rtl: prop_types_1.default.bool,
        name: prop_types_1.default.string,
        prefix: prop_types_1.default.string,
        locale: prop_types_1.default.object,
        shape: prop_types_2.default.shape,
        mode: prop_types_2.default.mode,
        value: prop_types_2.default.date,
        defaultValue: prop_types_2.default.date,
        panelValue: prop_types_2.default.date,
        defaultPanelValue: prop_types_2.default.date,
        disabledDate: prop_types_1.default.func,
        dateCellRender: prop_types_1.default.func,
        quarterCellRender: prop_types_1.default.func,
        monthCellRender: prop_types_1.default.func,
        yearCellRender: prop_types_1.default.func,
        headerRender: prop_types_1.default.func,
        onChange: prop_types_1.default.func,
        onSelect: prop_types_1.default.func,
        onPanelChange: prop_types_1.default.func,
        cellProps: prop_types_1.default.object,
        cellClassName: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.string]),
        panelMode: prop_types_1.default.any,
        onPrev: prop_types_1.default.func,
        onNext: prop_types_1.default.func,
        onSuperPrev: prop_types_1.default.func,
        onSuperNext: prop_types_1.default.func,
        colNum: prop_types_1.default.number,
    };
    Calendar.defaultProps = {
        rtl: false,
        prefix: 'next-',
        locale: zh_cn_1.default.Calendar,
        shape: constant_1.CALENDAR_SHAPE.FULLSCREEN,
        mode: constant_1.CALENDAR_MODE.MONTH,
    };
    Calendar.displayName = 'Calendar';
    return Calendar;
}(react_1.default.Component));
exports.default = (0, react_lifecycles_compat_1.polyfill)(Calendar);
