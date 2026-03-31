import { __extends } from "tslib";
import React from 'react';
import Icon from '../../icon';
var MonthPanelHeader = /** @class */ (function (_super) {
    __extends(MonthPanelHeader, _super);
    function MonthPanelHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MonthPanelHeader.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, visibleMonth = _a.visibleMonth, locale = _a.locale, changeMode = _a.changeMode, goPrevYear = _a.goPrevYear, goNextYear = _a.goNextYear;
        var yearLabel = visibleMonth.year();
        var btnCls = "".concat(prefix, "calendar-btn");
        return (React.createElement("div", { className: "".concat(prefix, "calendar-panel-header") },
            React.createElement("button", { type: "button", title: locale.prevYear, className: "".concat(btnCls, " ").concat(btnCls, "-prev-year"), onClick: goPrevYear },
                React.createElement(Icon, { type: "arrow-double-left", className: "".concat(prefix, "calendar-symbol-prev-super") })),
            React.createElement("div", { className: "".concat(prefix, "calendar-panel-header-full") },
                React.createElement("button", { type: "button", 
                    // @ts-expect-error yearLabel 应转为 string
                    title: yearLabel, className: "".concat(btnCls), onClick: function () { return changeMode('year'); } }, yearLabel)),
            React.createElement("button", { type: "button", title: locale.nextYear, className: "".concat(btnCls, " ").concat(btnCls, "-next-year"), onClick: goNextYear },
                React.createElement(Icon, { type: "arrow-double-right", className: "".concat(prefix, "calendar-symbol-next-super") }))));
    };
    return MonthPanelHeader;
}(React.PureComponent));
export default MonthPanelHeader;
