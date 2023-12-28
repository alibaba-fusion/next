"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var PT = require("prop-types");
var classnames_1 = require("classnames");
var zh_cn_1 = require("../locale/zh-cn");
var util_1 = require("../util");
var prop_types_1 = require("./prop-types");
var constant_1 = require("./constant");
var header_panel_1 = require("./panels/header-panel");
var date_table_1 = require("./panels/date-table");
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
        var newState = null;
        var value;
        var panelValue;
        if ('value' in props && isValueChanged(props.value, state.value)) {
            value = props.value;
            panelValue = (0, util_1.datejs)(value);
        }
        if ('panelValue' in props) {
            panelValue = (0, util_1.datejs)(props.panelValue);
        }
        // panelValue不能是无效值
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
        var classNames = (0, classnames_1.default)(["".concat(prefix, "calendar2"), "".concat(prefix, "calendar2-").concat(shape), className]);
        return (react_1.default.createElement("div", tslib_1.__assign({}, pickOthers(Calendar.propTypes, restProps), { dir: rtl ? 'rtl' : undefined, className: classNames }),
            react_1.default.createElement(header_panel_1.default, tslib_1.__assign({}, headerPanelProps)),
            react_1.default.createElement("div", { className: "".concat(prefix, "calendar2-body") },
                react_1.default.createElement(date_table_1.default, tslib_1.__assign({}, dateTableProps)))));
    };
    Calendar.propTypes = {
        rtl: PT.bool,
        name: PT.string,
        prefix: PT.string,
        locale: PT.object,
        /**
         * 展现形态
         */
        shape: prop_types_1.default.shape,
        /*
         * 日期模式: month | year
         */
        mode: prop_types_1.default.mode,
        /**
         * 默认选中的日期（受控）
         */
        value: prop_types_1.default.date,
        /**
         * 默认选中的日期
         */
        defaultValue: prop_types_1.default.date,
        /**
         * 面板显示的日期（受控）
         */
        panelValue: prop_types_1.default.date,
        /**
         * 面板默认显示的日期
         */
        defaultPanelValue: prop_types_1.default.date,
        /**
         * 不可选择的日期
         */
        disabledDate: PT.func,
        /**
         * 可显示的日期范围
         */
        validRange: PT.arrayOf(prop_types_1.default.date),
        /**
         * 自定义日期渲染
         */
        dateCellRender: PT.func,
        quarterCellRender: PT.func,
        monthCellRender: PT.func,
        yearCellRender: PT.func,
        /**
         * 自定义头部渲染
         */
        headerRender: PT.func,
        /**
         * 日期变化回调
         */
        onChange: PT.func,
        /**
         * 点击选择日期回调
         */
        onSelect: PT.func,
        /**
         * 日期面板变化回调
         */
        onPanelChange: PT.func,
        cellProps: PT.object,
        cellClassName: PT.oneOfType([PT.func, PT.string]),
        panelMode: PT.any,
        onPrev: PT.func,
        onNext: PT.func,
        onSuperPrev: PT.func,
        onSuperNext: PT.func,
        colNum: PT.number,
    };
    Calendar.defaultProps = {
        rtl: false,
        prefix: 'next-',
        locale: zh_cn_1.default.Calendar,
        shape: constant_1.CALENDAR_SHAPE.FULLSCREEN,
        mode: constant_1.CALENDAR_MODE.MONTH,
    };
    return Calendar;
}(react_1.default.Component));
exports.default = (0, react_lifecycles_compat_1.polyfill)(Calendar);
