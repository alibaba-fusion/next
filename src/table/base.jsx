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
import Table from './baseTable';

function HOC(WrappedComponent) {
    return class extends React.Component {
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
            const props = this.props;
            const prefix = 'next-';
            const LoadingComponent = props.LoadingComponent || Loading;
            if (props.loading) {
                const loadingClassName = `${prefix}table-loading`;
                return (
                    <LoadingComponent className={loadingClassName}>
                        <WrappedComponent {...props} />
                    </LoadingComponent>
                );
            } else {
                return <WrappedComponent {...props} />;
            }
        }
    };
}

export default HOC(Table);
