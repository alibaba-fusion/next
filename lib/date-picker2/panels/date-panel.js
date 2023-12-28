"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var classnames_1 = require("classnames");
var PT = require("prop-types");
var prop_types_1 = require("../prop-types");
var util_1 = require("../../util");
var util_2 = require("../util");
var calendar2_1 = require("../../calendar2");
var time_panel_1 = require("./time-panel");
var DatePanel = /** @class */ (function (_super) {
    tslib_1.__extends(DatePanel, _super);
    function DatePanel(props) {
        var _this = _super.call(this, props) || this;
        _this.onTimeSelect = function (v) {
            _this.handleSelect(v, true);
        };
        _this.handleSelect = function (v, fromTimeChange) {
            var defaultTime = _this.state.defaultTime;
            var timeVal = null;
            if (!_this.props.resetTime && !fromTimeChange) {
                timeVal = _this.props.value || defaultTime || (0, util_1.datejs)();
            }
            v = (0, util_2.setTime)(v, timeVal);
            util_1.func.invoke(_this.props, 'onSelect', [v]);
        };
        _this.handlePanelChange = function (v, mode) {
            util_1.func.invoke(_this.props, 'onPanelChange', [v, mode]);
        };
        // 默认时间
        var _a = props.timePanelProps, timePanelProps = _a === void 0 ? {} : _a;
        var defaultTime = timePanelProps.defaultValue;
        if (defaultTime) {
            // fix: https://github.com/alibaba-fusion/next/issues/3203
            defaultTime = (0, util_1.datejs)(defaultTime, typeof defaultTime === 'string' ? timePanelProps.format || 'HH:mm:ss' : undefined);
        }
        _this.state = {
            defaultTime: defaultTime,
        };
        return _this;
    }
    DatePanel.prototype.render = function () {
        var _a;
        var _b = this.props, mode = _b.mode, panelMode = _b.panelMode, prefix = _b.prefix, showTime = _b.showTime, value = _b.value, disabledDate = _b.disabledDate, disabledTime = _b.disabledTime, timePanelProps = _b.timePanelProps, dateCellRender = _b.dateCellRender, restProps = tslib_1.__rest(_b, ["mode", "panelMode", "prefix", "showTime", "value", "disabledDate", "disabledTime", "timePanelProps", "dateCellRender"]);
        var className = (0, classnames_1.default)("".concat(prefix, "date-picker2-panel"), (_a = {},
            _a["".concat(prefix, "date-time-picker2-panel")] = showTime,
            _a));
        // 禁用时间
        var _disabledTime;
        if (showTime && mode === panelMode && disabledTime) {
            _disabledTime = typeof disabledTime === 'function' ? disabledTime(value) : disabledTime;
            if (typeof _disabledTime !== 'object') {
                _disabledTime = null;
            }
        }
        return (react_1.default.createElement("div", { className: className },
            react_1.default.createElement(calendar2_1.default, tslib_1.__assign({}, util_1.obj.pickProps(calendar2_1.default.propTypes, restProps), { shape: "panel", value: value, panelMode: mode, colNum: showTime ? 6 : undefined, onSelect: this.handleSelect, onPanelChange: this.handlePanelChange, disabledDate: disabledDate, dateCellRender: dateCellRender })),
            showTime && mode === panelMode ? (react_1.default.createElement(time_panel_1.default, tslib_1.__assign({}, util_1.obj.pickProps(time_panel_1.default.propTypes, restProps), { prefix: prefix, value: value || this.state.defaultTime, onSelect: this.onTimeSelect, disabledTime: disabledTime, timePanelProps: tslib_1.__assign(tslib_1.__assign({}, _disabledTime), timePanelProps) }))) : null));
    };
    DatePanel.propTypes = {
        rtl: PT.bool,
        prefix: PT.string,
        locale: PT.object,
        mode: prop_types_1.default.mode,
        panelMode: PT.any,
        value: prop_types_1.default.date,
        disabledDate: PT.func,
        showTime: PT.bool,
        resetTime: PT.bool,
        timePanelProps: PT.object,
        disabledTime: prop_types_1.default.disabledTime,
        dateCellRender: PT.func,
    };
    DatePanel.defaultProps = {
        showTime: false,
        resetTime: false,
    };
    return DatePanel;
}(react_1.default.Component));
exports.default = (0, react_lifecycles_compat_1.polyfill)(DatePanel);
