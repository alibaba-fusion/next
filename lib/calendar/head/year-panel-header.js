"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var icon_1 = tslib_1.__importDefault(require("../../icon"));
var YearPanelHeader = /** @class */ (function (_super) {
    tslib_1.__extends(YearPanelHeader, _super);
    function YearPanelHeader() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.getDecadeLabel = function (date) {
            var year = date.year();
            // @ts-expect-error parseInt 接收的参数类型是 string
            var start = parseInt(year / 10, 10) * 10;
            var end = start + 9;
            return "".concat(start, "-").concat(end);
        };
        return _this;
    }
    YearPanelHeader.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, visibleMonth = _a.visibleMonth, locale = _a.locale, goPrevDecade = _a.goPrevDecade, goNextDecade = _a.goNextDecade;
        var decadeLable = this.getDecadeLabel(visibleMonth);
        var btnCls = "".concat(prefix, "calendar-btn");
        return (react_1.default.createElement("div", { className: "".concat(prefix, "calendar-panel-header") },
            react_1.default.createElement("button", { type: "button", title: locale.prevDecade, className: "".concat(btnCls, " ").concat(btnCls, "-prev-decade"), onClick: goPrevDecade },
                react_1.default.createElement(icon_1.default, { type: "arrow-double-left", className: "".concat(prefix, "calendar-symbol-prev-super") })),
            react_1.default.createElement("div", { className: "".concat(prefix, "calendar-panel-header-full") },
                react_1.default.createElement("button", { type: "button", title: decadeLable, className: btnCls }, decadeLable)),
            react_1.default.createElement("button", { type: "button", title: locale.nextDecade, className: "".concat(btnCls, " ").concat(btnCls, "-next-decade"), onClick: goNextDecade },
                react_1.default.createElement(icon_1.default, { type: "arrow-double-right", className: "".concat(prefix, "calendar-symbol-next-super") }))));
    };
    return YearPanelHeader;
}(react_1.default.PureComponent));
exports.default = YearPanelHeader;
