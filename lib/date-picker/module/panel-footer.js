"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var moment_1 = tslib_1.__importDefault(require("moment"));
var button_1 = tslib_1.__importDefault(require("../../button"));
var util_1 = require("../../util");
var util_2 = require("../util");
var PanelFooter = /** @class */ (function (_super) {
    tslib_1.__extends(PanelFooter, _super);
    function PanelFooter() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.changePanel = function () {
            var _a;
            var targetPanel = (_a = {},
                _a[util_2.PANEL.DATE] = util_2.PANEL.TIME,
                _a[util_2.PANEL.TIME] = util_2.PANEL.DATE,
                _a)[_this.props.panel];
            _this.props.onPanelChange(targetPanel);
        };
        _this.createRanges = function (ranges) {
            if (!ranges || ranges.length === 0)
                return null;
            var _a = _this.props, onOk = _a.onOk, prefix = _a.prefix;
            return (react_1.default.createElement("div", { className: "".concat(prefix, "date-picker-panel-tools") }, ranges.map(function (_a) {
                var label = _a.label, _b = _a.value, value = _b === void 0 ? [] : _b, onChange = _a.onChange;
                var handleClick = function () {
                    var momentValue = value.map(function (v) { return (0, moment_1.default)(v); });
                    onChange(momentValue);
                    onOk(momentValue);
                };
                return (react_1.default.createElement(button_1.default, { key: label, text: true, size: "small", type: "primary", onClick: handleClick }, label));
            })));
        };
        return _this;
    }
    PanelFooter.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, locale = _b.locale, panel = _b.panel, value = _b.value, ranges = _b.ranges, // 兼容 0.x range 属性
        disabledOk = _b.disabledOk, onPanelChange = _b.onPanelChange, onOk = _b.onOk;
        var panelBtnLabel = (_a = {},
            _a[util_2.PANEL.DATE] = locale.selectTime,
            _a[util_2.PANEL.TIME] = locale.selectDate,
            _a)[panel];
        var sharedBtnProps = {
            size: 'small',
            type: 'primary',
            disabled: !value,
        };
        var onClick = function () { return onOk(); };
        return (react_1.default.createElement("div", { className: "".concat(prefix, "date-picker-panel-footer") },
            this.createRanges(ranges),
            onPanelChange ? (react_1.default.createElement(button_1.default, tslib_1.__assign({}, sharedBtnProps, { text: true, onClick: this.changePanel }), panelBtnLabel)) : null,
            react_1.default.createElement(button_1.default, tslib_1.__assign({}, sharedBtnProps, { disabled: disabledOk || !value, onClick: onClick }), locale.ok)));
    };
    PanelFooter.displayName = 'PanelFooter';
    PanelFooter.defaultProps = {
        onOk: util_1.func.noop,
    };
    return PanelFooter;
}(react_1.default.PureComponent));
exports.default = PanelFooter;
