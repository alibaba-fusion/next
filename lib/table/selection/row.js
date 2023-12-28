"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var row_1 = require("../expanded/row");
/* eslint-disable react/prefer-stateless-function */
var SelectionRow = /** @class */ (function (_super) {
    tslib_1.__extends(SelectionRow, _super);
    function SelectionRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectionRow.prototype.render = function () {
        var _a;
        /* eslint-disable no-unused-vars*/
        var _b = this.props, className = _b.className, record = _b.record, primaryKey = _b.primaryKey;
        var selectedRowKeys = this.context.selectedRowKeys;
        var cls = (0, classnames_1.default)((_a = {
                selected: selectedRowKeys.indexOf(record[primaryKey]) > -1
            },
            _a[className] = className,
            _a));
        return react_1.default.createElement(row_1.default, tslib_1.__assign({}, this.props, { className: cls }));
    };
    SelectionRow.propTypes = tslib_1.__assign({}, row_1.default.propTypes);
    SelectionRow.defaultProps = tslib_1.__assign({}, row_1.default.defaultProps);
    SelectionRow.contextTypes = {
        selectedRowKeys: prop_types_1.default.array,
    };
    return SelectionRow;
}(react_1.default.Component));
exports.default = SelectionRow;
