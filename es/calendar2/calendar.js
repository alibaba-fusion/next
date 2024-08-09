import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import PT from 'prop-types';
import classnames from 'classnames';
import defaultLocale from '../locale/zh-cn';
import { func, datejs, obj } from '../util';
import SharedPT from './prop-types';
import { CALENDAR_MODE, CALENDAR_SHAPE, DATE_PANEL_MODE } from './constant';
import HeaderPanel from './panels/header-panel';
import DateTable from './panels/date-table';
var pickProps = obj.pickProps, pickOthers = obj.pickOthers;
// CALENDAR_MODE => DATE_PANEL_MODE
function getPanelMode(mode) {
    return mode && (mode === CALENDAR_MODE.YEAR ? DATE_PANEL_MODE.MONTH : DATE_PANEL_MODE.DATE);
}
function isValueChanged(newVal, oldVal) {
    return newVal !== oldVal && !datejs(newVal).isSame(datejs(oldVal));
}
var Calendar = /** @class */ (function (_super) {
    __extends(Calendar, _super);
    function Calendar(props) {
        var _this = _super.call(this, props) || this;
        _this.switchPanelMode = function (mode) {
            var MONTH = DATE_PANEL_MODE.MONTH, YEAR = DATE_PANEL_MODE.YEAR, DECADE = DATE_PANEL_MODE.DECADE;
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
            return shape === CALENDAR_SHAPE.PANEL && panelMode !== originalPanelMode;
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
                func.invoke(_this.props, 'onSelect', [value]);
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
            func.invoke(_this.props, 'onPanelChange', [value, mode, reason]);
        };
        _this.onChange = function (value) {
            _this.setState({
                value: value,
                panelValue: value,
            });
            func.invoke(_this.props, 'onChange', [value]);
        };
        var defaultValue = props.defaultValue, mode = props.mode, _a = props.defaultPanelValue, defaultPanelValue = _a === void 0 ? datejs() : _a;
        var value = 'value' in props ? props.value : defaultValue;
        var panelValue = datejs('panelValue' in props ? props.panelValue : value || defaultPanelValue);
        var panelMode = props.panelMode || getPanelMode(mode) || DATE_PANEL_MODE.DATE;
        _this.state = {
            mode: mode,
            value: value,
            panelMode: panelMode,
            panelValue: panelValue.isValid() ? panelValue : datejs(),
        };
        return _this;
    }
    Calendar.getDerivedStateFromProps = function (props, state) {
        var newState = {};
        var value;
        var panelValue;
        if ('value' in props && isValueChanged(props.value, state.value)) {
            value = props.value;
            panelValue = datejs(value);
        }
        if ('panelValue' in props) {
            panelValue = datejs(props.panelValue);
        }
        // panelValue 不能是无效值
        if (panelValue) {
            panelValue = panelValue.isValid() ? panelValue : datejs();
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
        var value = 'value' in this.props ? datejs(this.props.value) : this.state.value;
        var _a = this.state, panelMode = _a.panelMode, mode = _a.mode, panelValue = _a.panelValue;
        var _b = this.props, prefix = _b.prefix, shape = _b.shape, rtl = _b.rtl, className = _b.className, restProps = __rest(_b, ["prefix", "shape", "rtl", "className"]);
        var sharedProps = {
            rtl: rtl,
            prefix: prefix,
            shape: shape,
            value: value,
            panelValue: panelValue,
        };
        var headerPanelProps = __assign(__assign(__assign({}, pickProps(HeaderPanel.propTypes, restProps)), sharedProps), { mode: mode, panelMode: panelMode, onPanelValueChange: this.onPanelValueChange, onModeChange: this.onModeChange, onPanelModeChange: this.onPanelModeChange, showModeSwitch: this.props.mode !== CALENDAR_MODE.YEAR });
        var dateTableProps = __assign(__assign(__assign({}, pickProps(DateTable.propTypes, restProps)), sharedProps), { mode: panelMode, onSelect: this.onDateSelect });
        var classNames = classnames([
            "".concat(prefix, "calendar2"),
            "".concat(prefix, "calendar2-").concat(shape),
            className,
        ]);
        return (React.createElement("div", __assign({}, pickOthers(Calendar.propTypes, restProps), { dir: rtl ? 'rtl' : undefined, className: classNames }),
            React.createElement(HeaderPanel, __assign({}, headerPanelProps)),
            React.createElement("div", { className: "".concat(prefix, "calendar2-body") },
                React.createElement(DateTable, __assign({}, dateTableProps)))));
    };
    Calendar.propTypes = {
        rtl: PT.bool,
        name: PT.string,
        prefix: PT.string,
        locale: PT.object,
        shape: SharedPT.shape,
        mode: SharedPT.mode,
        value: SharedPT.date,
        defaultValue: SharedPT.date,
        panelValue: SharedPT.date,
        defaultPanelValue: SharedPT.date,
        disabledDate: PT.func,
        dateCellRender: PT.func,
        quarterCellRender: PT.func,
        monthCellRender: PT.func,
        yearCellRender: PT.func,
        headerRender: PT.func,
        onChange: PT.func,
        onSelect: PT.func,
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
        locale: defaultLocale.Calendar,
        shape: CALENDAR_SHAPE.FULLSCREEN,
        mode: CALENDAR_MODE.MONTH,
    };
    Calendar.displayName = 'Calendar';
    return Calendar;
}(React.Component));
export default polyfill(Calendar);
