import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import * as PT from 'prop-types';
import SharedPT from '../prop-types';
import { func, obj, datejs } from '../../util';
import { setTime } from '../util';
import Calendar from '../../calendar2';
import TimePanel from './time-panel';
var DatePanel = /** @class */ (function (_super) {
    __extends(DatePanel, _super);
    function DatePanel(props) {
        var _this = _super.call(this, props) || this;
        _this.onTimeSelect = function (v) {
            _this.handleSelect(v, true);
        };
        _this.handleSelect = function (v, fromTimeChange) {
            var defaultTime = _this.state.defaultTime;
            var timeVal = null;
            if (!_this.props.resetTime && !fromTimeChange) {
                timeVal = _this.props.value || defaultTime || datejs();
            }
            v = setTime(v, timeVal);
            func.invoke(_this.props, 'onSelect', [v]);
        };
        _this.handlePanelChange = function (v, mode) {
            func.invoke(_this.props, 'onPanelChange', [v, mode]);
        };
        // 默认时间
        var _a = props.timePanelProps, timePanelProps = _a === void 0 ? {} : _a;
        var defaultTime = timePanelProps.defaultValue;
        if (defaultTime) {
            // fix: https://github.com/alibaba-fusion/next/issues/3203
            defaultTime = datejs(defaultTime, typeof defaultTime === 'string' ? timePanelProps.format || 'HH:mm:ss' : undefined);
        }
        _this.state = {
            defaultTime: defaultTime,
        };
        return _this;
    }
    DatePanel.prototype.render = function () {
        var _a;
        var _b = this.props, mode = _b.mode, panelMode = _b.panelMode, prefix = _b.prefix, showTime = _b.showTime, value = _b.value, disabledDate = _b.disabledDate, disabledTime = _b.disabledTime, timePanelProps = _b.timePanelProps, dateCellRender = _b.dateCellRender, restProps = __rest(_b, ["mode", "panelMode", "prefix", "showTime", "value", "disabledDate", "disabledTime", "timePanelProps", "dateCellRender"]);
        var className = classnames("".concat(prefix, "date-picker2-panel"), (_a = {},
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
        return (React.createElement("div", { className: className },
            React.createElement(Calendar, __assign({}, obj.pickProps(Calendar.propTypes, restProps), { shape: "panel", value: value, panelMode: mode, colNum: showTime ? 6 : undefined, onSelect: this.handleSelect, onPanelChange: this.handlePanelChange, disabledDate: disabledDate, dateCellRender: dateCellRender })),
            showTime && mode === panelMode ? (React.createElement(TimePanel, __assign({}, obj.pickProps(TimePanel.propTypes, restProps), { prefix: prefix, value: value || this.state.defaultTime, onSelect: this.onTimeSelect, disabledTime: disabledTime, timePanelProps: __assign(__assign({}, _disabledTime), timePanelProps) }))) : null));
    };
    DatePanel.propTypes = {
        rtl: PT.bool,
        prefix: PT.string,
        locale: PT.object,
        mode: SharedPT.mode,
        panelMode: PT.any,
        value: SharedPT.date,
        disabledDate: PT.func,
        showTime: PT.bool,
        resetTime: PT.bool,
        timePanelProps: PT.object,
        disabledTime: SharedPT.disabledTime,
        dateCellRender: PT.func,
    };
    DatePanel.defaultProps = {
        showTime: false,
        resetTime: false,
    };
    return DatePanel;
}(React.Component));
export default polyfill(DatePanel);
