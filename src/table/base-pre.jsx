import React from 'react';
import semver from 'semver';
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

function HOC(WrappedComponent) {
    class PreTable extends React.Component {
        static Column = Column;
        static ColumnGroup = ColumnGroup;
        static Header = HeaderComponent;
        static Body = BodyComponent;
        static Wrapper = WrapperComponent;
        static Row = RowComponent;
        static Cell = CellComponent;
        static Filter = FilterComponent;
        static Sort = SortComponent;
        render() {
            const { prefix, forwardedRef, LoadingComponent, loading, ...others } = this.props;
            const LComponent = LoadingComponent || Loading;
            if (loading) {
                const loadingClassName = `${prefix}table-loading`;
                return (
                    <LComponent className={loadingClassName}>
                        <WrappedComponent ref={forwardedRef} {...others} />
                    </LComponent>
                );
            } else {
                return <WrappedComponent ref={forwardedRef} {...others} />;
            }
        }
    }

    // 当前版本大于 16.6.3 （有forwardRef的那个版本）
    if (semver.gt(React.version, '16.6.3')) {
        return React.forwardRef((props, ref) => {
            return <PreTable {...props} forwardedRef={ref} />;
        });
    }
    // 对于没有低版本用户来说，获取底层Table的ref，可以通过 forwardedRef 这个props获取
    return PreTable;
}

export default HOC(Table);
