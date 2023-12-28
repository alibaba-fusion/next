"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var PT = require("prop-types");
var panel_1 = require("../../time-picker2/panel");
var prop_types_1 = require("../prop-types");
var util_1 = require("../../util");
var DECADE_TIME_FORMAT = 'HH:mm:ss';
var TimePanel = /** @class */ (function (_super) {
    tslib_1.__extends(TimePanel, _super);
    function TimePanel() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.formater = function (v) {
            var _a = _this.props.timePanelProps, timePanelProps = _a === void 0 ? {} : _a;
            var _b = _this.getShow(), showHour = _b.showHour, showMinute = _b.showMinute, showSecond = _b.showSecond;
            var fmt;
            if ('format' in timePanelProps) {
                fmt = timePanelProps.format;
            }
            else {
                var fmtArr = [];
                showHour && fmtArr.push('HH');
                showMinute && fmtArr.push('mm');
                showSecond && fmtArr.push('ss');
                fmt = fmtArr.join(':');
            }
            return typeof fmt === 'function' ? fmt(v) : v.format(fmt);
        };
        _this.getShow = function () {
            var _a = _this.props.timePanelProps, props = _a === void 0 ? {} : _a;
            var fmt = props.format || DECADE_TIME_FORMAT;
            var showHour;
            var showMinute;
            var showSecond;
            if (typeof fmt === 'string') {
                showHour = fmt.indexOf('H') > -1;
                showSecond = fmt.indexOf('s') > -1;
                showMinute = fmt.indexOf('m') > -1;
            }
            return {
                showHour: 'showHour' in props ? props.showHour : showHour,
                showMinute: 'showMinute' in props ? props.showMinute : showMinute,
                showSecond: 'showSecond' in props ? props.showSecond : showSecond,
            };
        };
        _this.onSelect = function (v) {
            util_1.func.invoke(_this.props, 'onSelect', [v]);
        };
        return _this;
    }
    TimePanel.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, rtl = _a.rtl, locale = _a.locale, _b = _a.timePanelProps, timePanelProps = _b === void 0 ? {} : _b, value = _a.value;
        var _c = this.getShow(), showHour = _c.showHour, showMinute = _c.showMinute, showSecond = _c.showSecond;
        return (react_1.default.createElement("div", { dir: rtl ? 'rtl' : undefined, className: "".concat(prefix, "date-time-picker-wrapper ").concat(prefix, "calendar2-panel") },
            react_1.default.createElement("div", { className: "".concat(prefix, "calendar2-header") },
                react_1.default.createElement("div", { className: "".concat(prefix, "calendar2-header-text-field") }, value ? this.formater(value) : null)),
            react_1.default.createElement(panel_1.default, tslib_1.__assign({ prefix: prefix, locale: locale, onSelect: this.onSelect, showHour: showHour, showSecond: showSecond, showMinute: showMinute }, timePanelProps, { value: value }))));
    };
    TimePanel.propTypes = {
        rtl: PT.bool,
        prefix: PT.string,
        locale: PT.object,
        value: prop_types_1.default.date,
        timePanelProps: PT.object,
        onSelect: PT.func,
    };
    return TimePanel;
}(react_1.default.PureComponent));
exports.default = (0, react_lifecycles_compat_1.polyfill)(TimePanel);
