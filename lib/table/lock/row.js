"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var row_1 = require("../base/row");
var LockRow = /** @class */ (function (_super) {
    tslib_1.__extends(LockRow, _super);
    function LockRow() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.onMouseEnter = function (record, index, e) {
            var onRowMouseEnter = _this.context.onRowMouseEnter;
            var onMouseEnter = _this.props.onMouseEnter;
            onRowMouseEnter && onRowMouseEnter(record, index, e);
            onMouseEnter(record, index, e);
        };
        _this.onMouseLeave = function (record, index, e) {
            var onRowMouseLeave = _this.context.onRowMouseLeave;
            var onMouseLeave = _this.props.onMouseLeave;
            onRowMouseLeave && onRowMouseLeave(record, index, e);
            onMouseLeave(record, index, e);
        };
        return _this;
    }
    LockRow.prototype.render = function () {
        /* eslint-disable no-unused-vars*/
        return react_1.default.createElement(row_1.default, tslib_1.__assign({}, this.props, { onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave }));
    };
    LockRow.propTypes = tslib_1.__assign({}, row_1.default.propTypes);
    LockRow.contextTypes = {
        onRowMouseEnter: prop_types_1.default.func,
        onRowMouseLeave: prop_types_1.default.func,
    };
    LockRow.defaultProps = tslib_1.__assign({}, row_1.default.defaultProps);
    return LockRow;
}(react_1.default.Component));
exports.default = LockRow;
