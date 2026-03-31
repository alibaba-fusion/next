"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var utils_1 = require("../utils");
var DateTableHead = /** @class */ (function (_super) {
    tslib_1.__extends(DateTableHead, _super);
    function DateTableHead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateTableHead.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, momentLocale = _a.momentLocale;
        var firstDayOfWeek = momentLocale.firstDayOfWeek();
        var weekdaysShort = momentLocale.weekdaysShort();
        var elements = [];
        for (var i = 0; i < utils_1.DAYS_OF_WEEK; i++) {
            var index = (firstDayOfWeek + i) % utils_1.DAYS_OF_WEEK;
            elements.push(react_1.default.createElement("th", { key: i, className: "".concat(prefix, "calendar-th"), role: "cell" }, weekdaysShort[index]));
        }
        return (react_1.default.createElement("thead", { className: "".concat(prefix, "calendar-thead"), role: "rowgroup" },
            react_1.default.createElement("tr", { role: "row" }, elements)));
    };
    return DateTableHead;
}(react_1.PureComponent));
exports.default = DateTableHead;
