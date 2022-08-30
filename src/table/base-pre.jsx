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
            const { prefix, forwardedRef, loadingComponent, loading, ...others } = this.props;
            const LComponent = loadingComponent || Loading;
            if (loading && loadingComponent) {
                const loadingClassName = `${prefix}table-loading`;
                return (
                    <LComponent className={loadingClassName}>
                        <WrappedComponent ref={forwardedRef} {...others} />
                    </LComponent>
                );
            } else {
                return <WrappedComponent ref={forwardedRef} loading={loading} {...others} />;
            }
        }
    }

    // 当前版本大于 16.6.3 （有forwardRef的那个版本）
    if (typeof React.forwardRef === 'function') {
        const HocTable = React.forwardRef((props, ref) => {
            return <PreTable {...props} forwardedRef={ref} />;
        });
        statics(HocTable, WrappedComponent);
        return HocTable;
    }

    statics(PreTable, WrappedComponent);
    // 对于没有低版本用户来说，获取底层Table的ref，可以通过 forwardedRef 这个props获取
    return PreTable;
}

export default HOC(Table);
