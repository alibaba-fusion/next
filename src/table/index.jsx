import ConfigProvider from '../config-provider';
import Base from './base';
import tree from './tree';
import fixed from './fixed';
import selection from './selection';
import expanded from './expanded';
import virtual from './virtual';
import lock from './lock';
import stickyLock from './new-lock';
import list from './list';
import sticky from './sticky';
import ListHeader from './list-header';
import ListFooter from './list-footer';
import { env } from '../util';

const { ieVersion } = env;

const ORDER_LIST = [fixed, lock, selection, expanded, virtual, tree, list, sticky];
const Table = ORDER_LIST.reduce((ret, current) => {
    ret = current(ret);
    return ret;
}, Base);

lock._typeMark = 'lock';
expanded._typeMark = 'expanded';
fixed._typeMark = 'fixed';

const StickyLockTable = ORDER_LIST.reduce((ret, current) => {
    const newLock = !ieVersion;
    if (current._typeMark === 'lock') {
        ret = newLock ? stickyLock(ret) : lock(ret);
    } else if (current._typeMark === 'expanded') {
        ret = newLock ? expanded(ret, true) : expanded(ret);
    } else if (current._typeMark === 'fixed') {
        ret = newLock ? fixed(ret, true) : fixed(ret);
    } else {
        ret = current(ret);
    }
    return ret;
}, Base);

Table.Base = Base;
Table.fixed = fixed;
Table.lock = lock;
Table.selection = selection;
Table.expanded = expanded;
Table.tree = tree;
Table.virtual = virtual;
Table.list = list;
Table.sticky = sticky;

Table.GroupHeader = ListHeader;
Table.GroupFooter = ListFooter;

Table.StickyLock = ConfigProvider.config(StickyLockTable, {
    componentName: 'Table',
});

export default ConfigProvider.config(Table, {
    componentName: 'Table',
    transform: /* istanbul ignore next */ (props, deprecated) => {
        if ('expandedRowKeys' in props) {
            deprecated('expandedRowKeys', 'openRowKeys', 'Table');

            const { expandedRowKeys, ...others } = props;
            props = { openRowKeys: expandedRowKeys, ...others };
        }
        if ('onExpandedChange' in props) {
            deprecated('onExpandedChange', 'onRowOpen', 'Table');

            const { onExpandedChange, ...others } = props;
            props = { onRowOpen: onExpandedChange, ...others };
        }
        if ('isLoading' in props) {
            deprecated('isLoading', 'loading', 'Table');

            const { isLoading, ...others } = props;
            props = { loading: isLoading, ...others };
        }
        if ('indentSize' in props) {
            deprecated('indentSize', 'indent', 'Table');

            const { indentSize, ...others } = props;
            props = { indent: indentSize, ...others };
        }
        if ('optimization' in props) {
            deprecated('optimization', 'pure', 'Table');

            const { optimization, ...others } = props;
            props = { pure: optimization, ...others };
        }

        if ('getRowClassName' in props) {
            deprecated('getRowClassName', 'getRowProps', 'Table');

            const { getRowClassName, getRowProps, ...others } = props;
            if (getRowClassName) {
                const newGetRowProps = (...args) => {
                    return {
                        className: getRowClassName(...args),
                        ...(getRowProps ? getRowProps(...args) : {}),
                    };
                };

                props = { getRowProps: newGetRowProps, ...others };
            } else {
                props = { getRowProps, ...others };
            }
        }

        if ('getRowProps' in props) {
            deprecated('getRowProps', 'rowProps', 'Table in 1.15.0');

            const { getRowProps, ...others } = props;
            props = { rowProps: getRowProps, ...others };
        }

        if ('getCellProps' in props) {
            deprecated('getCellProps', 'cellProps', 'Table in 1.15.0');

            const { getCellProps, ...others } = props;
            props = { cellProps: getCellProps, ...others };
        }

        return props;
    },
});
