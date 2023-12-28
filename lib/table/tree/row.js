"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var row_1 = require("../selection/row");
/* eslint-disable react/prefer-stateless-function */
var TreeRow = /** @class */ (function (_super) {
    tslib_1.__extends(TreeRow, _super);
    function TreeRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TreeRow.prototype.render = function () {
        var _a;
        /* eslint-disable no-unused-vars*/
        var _b = this.props, className = _b.className, record = _b.record, primaryKey = _b.primaryKey, prefix = _b.prefix, others = tslib_1.__rest(_b, ["className", "record", "primaryKey", "prefix"]);
        var _c = this.context, treeStatus = _c.treeStatus, openRowKeys = _c.openRowKeys;
        var cls = (0, classnames_1.default)((_a = {
                hidden: !(treeStatus.indexOf(record[primaryKey]) > -1) && record.__level !== 0
            },
            _a["".concat(prefix, "table-row-level-").concat(record.__level)] = true,
            _a.opened = openRowKeys.indexOf(record[primaryKey]) > -1,
            _a[className] = className,
            _a));
        return react_1.default.createElement(row_1.default, tslib_1.__assign({}, others, { record: record, className: cls, primaryKey: primaryKey, prefix: prefix }));
    };
    TreeRow.propTypes = tslib_1.__assign({}, row_1.default.propTypes);
    TreeRow.defaultProps = tslib_1.__assign({}, row_1.default.defaultProps);
    TreeRow.contextTypes = {
        treeStatus: prop_types_1.default.array,
        openRowKeys: prop_types_1.default.array,
    };
    return TreeRow;
}(react_1.default.Component));
exports.default = TreeRow;
