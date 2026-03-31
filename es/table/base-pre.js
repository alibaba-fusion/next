import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
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
    var _class, _temp;

    var PreTable = (_temp = _class = function (_React$Component) {
        _inherits(PreTable, _React$Component);

        function PreTable() {
            _classCallCheck(this, PreTable);

            return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
        }

        PreTable.prototype.render = function render() {
            var _props = this.props,
                prefix = _props.prefix,
                forwardedRef = _props.forwardedRef,
                loadingComponent = _props.loadingComponent,
                loading = _props.loading,
                others = _objectWithoutProperties(_props, ['prefix', 'forwardedRef', 'loadingComponent', 'loading']);

            var LComponent = loadingComponent || Loading;
            if (loading && loadingComponent) {
                var loadingClassName = prefix + 'table-loading';
                return React.createElement(
                    LComponent,
                    { className: loadingClassName },
                    React.createElement(WrappedComponent, _extends({ ref: forwardedRef }, others))
                );
            } else {
                return React.createElement(WrappedComponent, _extends({ ref: forwardedRef, loading: loading }, others));
            }
        };

        return PreTable;
    }(React.Component), _class.Column = Column, _class.ColumnGroup = ColumnGroup, _class.Header = HeaderComponent, _class.Body = BodyComponent, _class.Wrapper = WrapperComponent, _class.Row = RowComponent, _class.Cell = CellComponent, _class.Filter = FilterComponent, _class.Sort = SortComponent, _temp);

    // 当前版本大于 16.6.3 （有forwardRef的那个版本）

    PreTable.displayName = 'PreTable';
    if (typeof React.forwardRef === 'function') {
        var HocTable = React.forwardRef(function (props, ref) {
            return React.createElement(PreTable, _extends({}, props, { forwardedRef: ref }));
        });
        statics(HocTable, WrappedComponent);
        return HocTable;
    }

    statics(PreTable, WrappedComponent);
    // 对于没有低版本用户来说，获取底层Table的ref，可以通过 forwardedRef 这个props获取
    return PreTable;
}

export default HOC(Table);