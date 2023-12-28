"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var loading_1 = require("../loading");
var body_1 = require("./base/body");
var header_1 = require("./base/header");
var wrapper_1 = require("./base/wrapper");
var row_1 = require("./base/row");
var cell_1 = require("./base/cell");
var filter_1 = require("./base/filter");
var sort_1 = require("./base/sort");
var column_1 = require("./column");
var column_group_1 = require("./column-group");
var base_1 = require("./base");
var util_1 = require("./util");
function HOC(WrappedComponent) {
    var PreTable = /** @class */ (function (_super) {
        tslib_1.__extends(PreTable, _super);
        function PreTable() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PreTable.prototype.render = function () {
            var _a = this.props, prefix = _a.prefix, forwardedRef = _a.forwardedRef, loadingComponent = _a.loadingComponent, loading = _a.loading, others = tslib_1.__rest(_a, ["prefix", "forwardedRef", "loadingComponent", "loading"]);
            var LComponent = loadingComponent || loading_1.default;
            if (loading && loadingComponent) {
                var loadingClassName = "".concat(prefix, "table-loading");
                return (react_1.default.createElement(LComponent, { className: loadingClassName },
                    react_1.default.createElement(WrappedComponent, tslib_1.__assign({ ref: forwardedRef }, others))));
            }
            else {
                return react_1.default.createElement(WrappedComponent, tslib_1.__assign({ ref: forwardedRef, loading: loading }, others));
            }
        };
        PreTable.Column = column_1.default;
        PreTable.ColumnGroup = column_group_1.default;
        PreTable.Header = header_1.default;
        PreTable.Body = body_1.default;
        PreTable.Wrapper = wrapper_1.default;
        PreTable.Row = row_1.default;
        PreTable.Cell = cell_1.default;
        PreTable.Filter = filter_1.default;
        PreTable.Sort = sort_1.default;
        return PreTable;
    }(react_1.default.Component));
    // 当前版本大于 16.6.3 （有forwardRef的那个版本）
    if (typeof react_1.default.forwardRef === 'function') {
        var HocTable = react_1.default.forwardRef(function (props, ref) {
            return react_1.default.createElement(PreTable, tslib_1.__assign({}, props, { forwardedRef: ref }));
        });
        (0, util_1.statics)(HocTable, WrappedComponent);
        return HocTable;
    }
    (0, util_1.statics)(PreTable, WrappedComponent);
    // 对于没有低版本用户来说，获取底层Table的ref，可以通过 forwardedRef 这个props获取
    return PreTable;
}
exports.default = HOC(base_1.default);
