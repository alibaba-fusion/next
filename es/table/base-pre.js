import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import Loading from '../loading';
import BodyComponent from './base/body';
import HeaderComponent from './base/header';
import WrapperComponent from './base/wrapper';
import RowComponent from './base/row';
import CellComponent from './base/cell';
import FilterComponent from './base/filter';
import SortComponent from './base/sort';
import Column from './column';
import ColumnGroup from './column-group';
import Table from './base';
import { statics } from './util';
function HOC(WrappedComponent) {
    var PreTable = /** @class */ (function (_super) {
        __extends(PreTable, _super);
        function PreTable() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PreTable.prototype.render = function () {
            var _a = this.props, prefix = _a.prefix, forwardedRef = _a.forwardedRef, loadingComponent = _a.loadingComponent, loading = _a.loading, others = __rest(_a, ["prefix", "forwardedRef", "loadingComponent", "loading"]);
            var LComponent = loadingComponent || Loading;
            if (loading && loadingComponent) {
                var loadingClassName = "".concat(prefix, "table-loading");
                return (React.createElement(LComponent, { className: loadingClassName },
                    React.createElement(WrappedComponent, __assign({ ref: forwardedRef }, others))));
            }
            else {
                return React.createElement(WrappedComponent, __assign({ ref: forwardedRef, loading: loading }, others));
            }
        };
        PreTable.Column = Column;
        PreTable.ColumnGroup = ColumnGroup;
        PreTable.Header = HeaderComponent;
        PreTable.Body = BodyComponent;
        PreTable.Wrapper = WrapperComponent;
        PreTable.Row = RowComponent;
        PreTable.Cell = CellComponent;
        PreTable.Filter = FilterComponent;
        PreTable.Sort = SortComponent;
        return PreTable;
    }(React.Component));
    // 当前版本大于 16.6.3 （有forwardRef的那个版本）
    if (typeof React.forwardRef === 'function') {
        var HocTable = React.forwardRef(function (props, ref) {
            return React.createElement(PreTable, __assign({}, props, { forwardedRef: ref }));
        });
        statics(HocTable, WrappedComponent);
        return HocTable;
    }
    statics(PreTable, WrappedComponent);
    // 对于没有低版本用户来说，获取底层Table的ref，可以通过 forwardedRef 这个props获取
    return PreTable;
}
export default HOC(Table);
