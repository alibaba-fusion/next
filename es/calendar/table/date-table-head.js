import { __extends } from "tslib";
import React, { PureComponent } from 'react';
import { DAYS_OF_WEEK } from '../utils';
var DateTableHead = /** @class */ (function (_super) {
    __extends(DateTableHead, _super);
    function DateTableHead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateTableHead.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, momentLocale = _a.momentLocale;
        var firstDayOfWeek = momentLocale.firstDayOfWeek();
        var weekdaysShort = momentLocale.weekdaysShort();
        var elements = [];
        for (var i = 0; i < DAYS_OF_WEEK; i++) {
            var index = (firstDayOfWeek + i) % DAYS_OF_WEEK;
            elements.push(React.createElement("th", { key: i, className: "".concat(prefix, "calendar-th"), role: "cell" }, weekdaysShort[index]));
        }
        return (React.createElement("thead", { className: "".concat(prefix, "calendar-thead"), role: "rowgroup" },
            React.createElement("tr", { role: "row" }, elements)));
    };
    return DateTableHead;
}(PureComponent));
export default DateTableHead;
