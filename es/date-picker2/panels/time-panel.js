import { __assign, __extends, __read, __spreadArray } from "tslib";
import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import TimePickerPanel from '../../time-picker2/panel';
import SharedPT from '../prop-types';
import { func } from '../../util';
var DECADE_TIME_FORMAT = 'HH:mm:ss';
var TimePanel = /** @class */ (function (_super) {
    __extends(TimePanel, _super);
    function TimePanel() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
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
            func.invoke(_this.props, 'onSelect', [v]);
        };
        return _this;
    }
    TimePanel.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, rtl = _a.rtl, locale = _a.locale, _b = _a.timePanelProps, timePanelProps = _b === void 0 ? {} : _b, value = _a.value;
        var _c = this.getShow(), showHour = _c.showHour, showMinute = _c.showMinute, showSecond = _c.showSecond;
        return (React.createElement("div", { dir: rtl ? 'rtl' : undefined, className: "".concat(prefix, "date-time-picker-wrapper ").concat(prefix, "calendar2-panel") },
            React.createElement("div", { className: "".concat(prefix, "calendar2-header") },
                React.createElement("div", { className: "".concat(prefix, "calendar2-header-text-field") }, value ? this.formater(value) : null)),
            React.createElement(TimePickerPanel, __assign({ prefix: prefix, locale: locale, onSelect: this.onSelect, showHour: showHour, showSecond: showSecond, showMinute: showMinute }, timePanelProps, { value: value }))));
    };
    TimePanel.propTypes = {
        rtl: PT.bool,
        prefix: PT.string,
        locale: PT.object,
        value: SharedPT.date,
        timePanelProps: PT.object,
        onSelect: PT.func,
    };
    return TimePanel;
}(React.PureComponent));
export default polyfill(TimePanel);
