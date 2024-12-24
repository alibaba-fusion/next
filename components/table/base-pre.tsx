// 这个文件看起来没有被使用到
import React, { Ref, type LegacyRef } from 'react';
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
import type { BaseTableProps } from './types';

function HOC(WrappedComponent: typeof Table) {
    class PreTable extends React.Component<
        BaseTableProps & { loading?: boolean; forwardedRef?: Ref<InstanceType<typeof Table>> }
    > {
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

    // 当前版本大于 16.6.3（有 forwardRef 的那个版本）
    if (typeof React.forwardRef === 'function') {
        const HocTable = React.forwardRef<InstanceType<typeof Table>, BaseTableProps>(
            (props, ref) => {
                return <PreTable {...props} forwardedRef={ref} />;
            }
        );
        statics(HocTable, WrappedComponent);
        return HocTable;
    }

    statics(PreTable, WrappedComponent);
    // 对于没有低版本用户来说，获取底层 Table 的 ref，可以通过 forwardedRef 这个 props 获取
    return PreTable;
}

export default HOC(Table);
