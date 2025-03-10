import { __assign, __extends, __read, __spreadArray } from "tslib";
import React from 'react';
import moment from 'moment';
import Button from '../../button';
import { func } from '../../util';
import { PANEL } from '../util';
var PanelFooter = /** @class */ (function (_super) {
    __extends(PanelFooter, _super);
    function PanelFooter() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.changePanel = function () {
            var _a;
            var targetPanel = (_a = {},
                _a[PANEL.DATE] = PANEL.TIME,
                _a[PANEL.TIME] = PANEL.DATE,
                _a)[_this.props.panel];
            _this.props.onPanelChange(targetPanel);
        };
        _this.createRanges = function (ranges) {
            if (!ranges || ranges.length === 0)
                return null;
            var _a = _this.props, onOk = _a.onOk, prefix = _a.prefix;
            return (React.createElement("div", { className: "".concat(prefix, "date-picker-panel-tools") }, ranges.map(function (_a) {
                var label = _a.label, _b = _a.value, value = _b === void 0 ? [] : _b, onChange = _a.onChange;
                var handleClick = function () {
                    var momentValue = value.map(function (v) { return moment(v); });
                    onChange(momentValue);
                    onOk(momentValue);
                };
                return (React.createElement(Button, { key: label, text: true, size: "small", type: "primary", onClick: handleClick }, label));
            })));
        };
        return _this;
    }
    PanelFooter.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, locale = _b.locale, panel = _b.panel, value = _b.value, ranges = _b.ranges, // 兼容 0.x range 属性
        disabledOk = _b.disabledOk, onPanelChange = _b.onPanelChange, onOk = _b.onOk;
        var panelBtnLabel = (_a = {},
            _a[PANEL.DATE] = locale.selectTime,
            _a[PANEL.TIME] = locale.selectDate,
            _a)[panel];
        var sharedBtnProps = {
            size: 'small',
            type: 'primary',
            disabled: !value,
        };
        var onClick = function () { return onOk(); };
        return (React.createElement("div", { className: "".concat(prefix, "date-picker-panel-footer") },
            this.createRanges(ranges),
            onPanelChange ? (React.createElement(Button, __assign({}, sharedBtnProps, { text: true, onClick: this.changePanel }), panelBtnLabel)) : null,
            React.createElement(Button, __assign({}, sharedBtnProps, { disabled: disabledOk || !value, onClick: onClick }), locale.ok)));
    };
    PanelFooter.displayName = 'PanelFooter';
    PanelFooter.defaultProps = {
        onOk: func.noop,
    };
    return PanelFooter;
}(React.PureComponent));
export default PanelFooter;
