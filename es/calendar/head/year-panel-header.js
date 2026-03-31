import { __extends, __read, __spreadArray } from "tslib";
import React from 'react';
import Icon from '../../icon';
var YearPanelHeader = /** @class */ (function (_super) {
    __extends(YearPanelHeader, _super);
    function YearPanelHeader() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
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
        return (React.createElement("div", { className: "".concat(prefix, "calendar-panel-header") },
            React.createElement("button", { type: "button", title: locale.prevDecade, className: "".concat(btnCls, " ").concat(btnCls, "-prev-decade"), onClick: goPrevDecade },
                React.createElement(Icon, { type: "arrow-double-left", className: "".concat(prefix, "calendar-symbol-prev-super") })),
            React.createElement("div", { className: "".concat(prefix, "calendar-panel-header-full") },
                React.createElement("button", { type: "button", title: decadeLable, className: btnCls }, decadeLable)),
            React.createElement("button", { type: "button", title: locale.nextDecade, className: "".concat(btnCls, " ").concat(btnCls, "-next-decade"), onClick: goNextDecade },
                React.createElement(Icon, { type: "arrow-double-right", className: "".concat(prefix, "calendar-symbol-next-super") }))));
    };
    return YearPanelHeader;
}(React.PureComponent));
export default YearPanelHeader;
