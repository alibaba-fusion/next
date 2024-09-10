"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var icon_1 = tslib_1.__importDefault(require("../../icon"));
var MonthPanelHeader = /** @class */ (function (_super) {
    tslib_1.__extends(MonthPanelHeader, _super);
    function MonthPanelHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MonthPanelHeader.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, visibleMonth = _a.visibleMonth, locale = _a.locale, changeMode = _a.changeMode, goPrevYear = _a.goPrevYear, goNextYear = _a.goNextYear;
        var yearLabel = visibleMonth.year();
        var btnCls = "".concat(prefix, "calendar-btn");
        return (react_1.default.createElement("div", { className: "".concat(prefix, "calendar-panel-header") },
            react_1.default.createElement("button", { type: "button", title: locale.prevYear, className: "".concat(btnCls, " ").concat(btnCls, "-prev-year"), onClick: goPrevYear },
                react_1.default.createElement(icon_1.default, { type: "arrow-double-left", className: "".concat(prefix, "calendar-symbol-prev-super") })),
            react_1.default.createElement("div", { className: "".concat(prefix, "calendar-panel-header-full") },
                react_1.default.createElement("button", { type: "button", 
                    // @ts-expect-error yearLabel 应转为 string
                    title: yearLabel, className: "".concat(btnCls), onClick: function () { return changeMode('year'); } }, yearLabel)),
            react_1.default.createElement("button", { type: "button", title: locale.nextYear, className: "".concat(btnCls, " ").concat(btnCls, "-next-year"), onClick: goNextYear },
                react_1.default.createElement(icon_1.default, { type: "arrow-double-right", className: "".concat(prefix, "calendar-symbol-next-super") }))));
    };
    return MonthPanelHeader;
}(react_1.default.PureComponent));
exports.default = MonthPanelHeader;
