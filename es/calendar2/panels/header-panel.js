import { __assign, __extends, __read } from "tslib";
import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import PT from 'prop-types';
import { func, datejs } from '../../util';
import { CALENDAR_MODE, DATE_PANEL_MODE, CALENDAR_SHAPE } from '../constant';
import Radio from '../../radio';
import Select from '../../select';
import Button from '../../button';
import Icon from '../../icon';
var renderNode = func.renderNode;
var DATE = DATE_PANEL_MODE.DATE, WEEK = DATE_PANEL_MODE.WEEK, QUARTER = DATE_PANEL_MODE.QUARTER, MONTH = DATE_PANEL_MODE.MONTH, YEAR = DATE_PANEL_MODE.YEAR, DECADE = DATE_PANEL_MODE.DECADE;
var HeaderPanel = /** @class */ (function (_super) {
    __extends(HeaderPanel, _super);
    function HeaderPanel(props) {
        var _this = _super.call(this, props) || this;
        _this.createPanelBtns = function (_a) {
            var unit = _a.unit, _b = _a.num, num = _b === void 0 ? 1 : _b, _c = _a.isSuper, isSuper = _c === void 0 ? true : _c;
            var value = _this.props.panelValue.clone();
            var prefixCls = _this.prefixCls;
            var iconTypes = isSuper
                ? ['arrow-double-left', 'arrow-double-right']
                : ['arrow-left', 'arrow-right'];
            return [
                React.createElement(Button, { "aria-label": "prev-btn", text: true, className: "".concat(prefixCls, "-btn  ").concat(prefixCls, "-left-btn"), onClick: function () { return _this.handleClick(value, { num: num, unit: unit, isSuper: isSuper, isNext: false }); }, key: "prev-btn-".concat(unit) },
                    React.createElement(Icon, { type: iconTypes[0] })),
                React.createElement(Button, { text: true, "aria-label": "next-btn", className: "".concat(prefixCls, "-btn ").concat(prefixCls, "-right-btn"), onClick: function () { return _this.handleClick(value, { num: num, unit: unit, isSuper: isSuper, isNext: true }); }, key: "next-btn-".concat(unit) },
                    React.createElement(Icon, { type: iconTypes[1] })),
            ];
        };
        _this.renderModeSwitch = function () {
            var _a = _this.props, mode = _a.mode, locale = _a.locale, onModeChange = _a.onModeChange;
            return (React.createElement(Radio.Group, { key: "mode-switch", shape: "button", value: mode, onChange: onModeChange },
                React.createElement(Radio, { value: CALENDAR_MODE.MONTH }, locale.month),
                React.createElement(Radio, { value: CALENDAR_MODE.YEAR }, locale.year)));
        };
        _this.renderMonthSelect = function () {
            var prefixCls = _this.prefixCls;
            var _a = _this.props, panelValue = _a.panelValue, onPanelValueChange = _a.onPanelValueChange;
            var curMonth = panelValue.month();
            var dataSource = datejs.monthsShort().map(function (label, value) {
                return {
                    label: label,
                    value: value,
                };
            });
            return (React.createElement(Select, { className: "".concat(prefixCls, "-select-month"), popupClassName: "".concat(prefixCls, "-select-month-popup"), value: curMonth, dataSource: dataSource, onChange: function (v) { return onPanelValueChange(panelValue.month(v)); } }));
        };
        _this.prefixCls = "".concat(props.prefix, "calendar2-header");
        return _this;
    }
    HeaderPanel.prototype.handleClick = function (value, _a) {
        var unit = _a.unit, num = _a.num, isSuper = _a.isSuper, isNext = _a.isNext;
        var _b = this.props, onPanelValueChange = _b.onPanelValueChange, onPrev = _b.onPrev, onSuperPrev = _b.onSuperPrev, onNext = _b.onNext, onSuperNext = _b.onSuperNext;
        var handler;
        if (isSuper) {
            handler = isNext ? onSuperNext : onSuperPrev;
        }
        else {
            handler = isNext ? onNext : onPrev;
        }
        if (handler) {
            handler(value, { unit: unit, num: num });
        }
        else {
            var m = isNext ? 'add' : 'subtract';
            onPanelValueChange(value[m](num, unit), "PANEL");
        }
    };
    HeaderPanel.prototype.renderYearSelect = function () {
        var prefixCls = this.prefixCls;
        var _a = this.props, validValue = _a.validValue, panelValue = _a.panelValue, onPanelValueChange = _a.onPanelValueChange;
        var curYear = panelValue.year();
        var beginYear;
        var endYear;
        // TODO 有效区间
        if (validValue) {
            var _b = __read(validValue, 2), begin = _b[0], end = _b[1];
            beginYear = begin.year();
            endYear = end.year();
        }
        else {
            for (var i = 0; i < 20; i++) {
                beginYear = curYear - 10;
                endYear = curYear + 10;
            }
        }
        var dataSource = [];
        for (var i = beginYear; i < endYear; i++) {
            dataSource.push({ label: i, value: i });
        }
        return (React.createElement(Select, { key: "year-select", className: "".concat(prefixCls, "-select-year"), popupClassName: "".concat(prefixCls, "-select-year-popup"), value: curYear, dataSource: dataSource, onChange: function (v) { return onPanelValueChange(panelValue.year(v)); } }));
    };
    HeaderPanel.prototype.renderTextField = function () {
        var prefixCls = this.prefixCls;
        var _a = this.props, panelValue = _a.panelValue, locale = _a.locale, panelMode = _a.panelMode, onPanelModeChange = _a.onPanelModeChange;
        var monthBeforeYear = locale.monthBeforeYear || false;
        var localeData = datejs.localeData();
        var year = panelValue.year() + (locale && locale.year === '年' ? '年' : '');
        var month = localeData.monthsShort()[panelValue.month()];
        var DATE = DATE_PANEL_MODE.DATE, WEEK = DATE_PANEL_MODE.WEEK, QUARTER = DATE_PANEL_MODE.QUARTER, MONTH = DATE_PANEL_MODE.MONTH, YEAR = DATE_PANEL_MODE.YEAR, DECADE = DATE_PANEL_MODE.DECADE;
        var nodes;
        var yearNode = (React.createElement(Button, { text: true, key: "year-btn", tabIndex: -1, className: "".concat(prefixCls, "-btn"), onClick: function () { return onPanelModeChange(YEAR); } }, year));
        switch (panelMode) {
            case DATE:
            case WEEK: {
                var monthNode = (React.createElement(Button, { text: true, key: "month-btn", tabIndex: -1, className: "".concat(prefixCls, "-btn"), onClick: function () { return onPanelModeChange(MONTH); } }, month));
                nodes = monthBeforeYear ? [monthNode, yearNode] : [yearNode, monthNode];
                break;
            }
            case MONTH:
            case QUARTER: {
                nodes = yearNode;
                break;
            }
            case YEAR: {
                var curYear = panelValue.year();
                var start = curYear - (curYear % 10);
                var end = start + 9;
                nodes = (React.createElement(Button, { text: true, key: "decade-btn", tabIndex: -1, className: "".concat(prefixCls, "-btn"), onClick: function () { return onPanelModeChange(DECADE); } }, this.props.rtl ? "".concat(end, "-").concat(start) : "".concat(start, "-").concat(end)));
                break;
            }
            case DECADE: {
                var curYear = panelValue.year();
                var start = curYear - (curYear % 100);
                var end = start + 99;
                nodes = this.props.rtl ? "".concat(end, "-").concat(start) : "".concat(start, "-").concat(end);
                break;
            }
        }
        return (React.createElement("div", { key: "header-text-field", className: "".concat(prefixCls, "-text-field") }, nodes));
    };
    HeaderPanel.prototype.renderPanelHeader = function () {
        var createPanelBtns = this.createPanelBtns;
        var panelMode = this.props.panelMode;
        var nodes = [];
        var textFieldNode = this.renderTextField();
        switch (panelMode) {
            case DATE:
            case WEEK: {
                var _a = __read(createPanelBtns({
                    unit: 'month',
                    isSuper: false,
                }), 2), preMonthBtn = _a[0], nextMonthBtn = _a[1];
                var _b = __read(createPanelBtns({
                    unit: 'year',
                }), 2), preYearBtn = _b[0], nextYearBtn = _b[1];
                nodes = [preYearBtn, preMonthBtn, textFieldNode, nextMonthBtn, nextYearBtn];
                break;
            }
            case QUARTER:
            case MONTH: {
                var _c = __read(createPanelBtns({
                    unit: 'year',
                }), 2), preYearBtn = _c[0], nextYearBtn = _c[1];
                nodes = [preYearBtn, textFieldNode, nextYearBtn];
                break;
            }
            case YEAR: {
                var _d = __read(createPanelBtns({
                    unit: 'year',
                    num: 10,
                }), 2), preDecadeBtn = _d[0], nextDecadeBtn = _d[1];
                nodes = [preDecadeBtn, textFieldNode, nextDecadeBtn];
                break;
            }
            case DECADE: {
                var _e = __read(createPanelBtns({
                    unit: 'year',
                    num: 100,
                }), 2), preCenturyBtn = _e[0], nextCenturyBtn = _e[1];
                nodes = [preCenturyBtn, textFieldNode, nextCenturyBtn];
                break;
            }
        }
        return nodes;
    };
    HeaderPanel.prototype.renderInner = function () {
        var prefixCls = this.prefixCls;
        var _a = this.props, shape = _a.shape, showTitle = _a.showTitle, value = _a.value, mode = _a.mode, showModeSwitch = _a.showModeSwitch;
        var nodes = [];
        if (shape === CALENDAR_SHAPE.PANEL) {
            return this.renderPanelHeader();
        }
        else {
            if (showTitle) {
                nodes.push(React.createElement("div", { key: "title", className: "".concat(prefixCls, "-title") }, renderNode(this.props.titleRender, value.format(), [value])));
            }
            nodes.push(React.createElement("div", { key: "actions", className: "".concat(prefixCls, "-actions") },
                this.renderYearSelect(),
                mode !== CALENDAR_MODE.YEAR ? this.renderMonthSelect() : null,
                showModeSwitch ? this.renderModeSwitch() : null,
                this.props.renderHeaderExtra &&
                    this.props.renderHeaderExtra(__assign({}, this.props))));
        }
        return nodes;
    };
    HeaderPanel.prototype.render = function () {
        return (React.createElement("div", { className: "".concat(this.prefixCls) }, renderNode(this.props.headerRender, this.renderInner(), __assign({}, this.props))));
    };
    HeaderPanel.propTypes = {
        rtl: PT.bool,
        prefix: PT.string,
        locale: PT.object,
        mode: PT.any,
        shape: PT.string,
        value: PT.any,
        panelMode: PT.any,
        panelValue: PT.any,
        validValue: PT.any,
        showTitle: PT.bool,
        showModeSwitch: PT.bool,
        onModeChange: PT.func,
        onPanelValueChange: PT.func,
        onPanelModeChange: PT.func,
        onPrev: PT.func,
        onNext: PT.func,
        onSuperPrev: PT.func,
        onSuperNext: PT.func,
        titleRender: PT.func,
        /**
         * 扩展操作区域渲染
         */
        renderHeaderExtra: PT.func,
        /**
         * 自定义头部渲染
         */
        headerRender: PT.func,
    };
    HeaderPanel.defaultProps = {
        showTitle: false,
    };
    return HeaderPanel;
}(React.PureComponent));
export default polyfill(HeaderPanel);
