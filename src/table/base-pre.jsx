import React from 'react';
import Loading from '../loading';
import Table from './base';
import { statics } from './util';

function HOC(WrappedComponent) {
    class PreTable extends React.Component {
        render() {
            const { prefix, loadingComponent, loading, ...others } = this.props;
            const LComponent = loadingComponent || Loading;
            if (loading) {
                const loadingClassName = `${prefix}table-loading`;
                return (
                    <LComponent className={loadingClassName}>
                        <WrappedComponent {...others} />
                    </LComponent>
                );
            } else {
                return <WrappedComponent {...others} />;
            }
        }
    }

    statics(PreTable, WrappedComponent, [
        // 'defaultProps',
        'propTypes',
        'childContextTypes',
        'contextTypes',
        'displayName',
        'getDerivedStateFromProps',
    ]);
    return PreTable;
}

export default HOC(Table);
