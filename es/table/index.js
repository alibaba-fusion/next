import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
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

var ieVersion = env.ieVersion;


var ORDER_LIST = [fixed, lock, selection, expanded, virtual, tree, list, sticky];
var Table = ORDER_LIST.reduce(function (ret, current) {
    ret = current(ret);
    return ret;
}, Base);

lock._typeMark = 'lock';
expanded._typeMark = 'expanded';
fixed._typeMark = 'fixed';

var StickyLockTable = ORDER_LIST.reduce(function (ret, current) {
    var newLock = !ieVersion;
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
    componentName: 'Table'
});

export default ConfigProvider.config(Table, {
    componentName: 'Table',
    transform: /* istanbul ignore next */function transform(props, deprecated) {
        // fix https://github.com/alibaba-fusion/next/issues/4062
        if ('columns' in props && typeof props.columns !== 'undefined') {
            var _props = props,
                columns = _props.columns,
                others = _objectWithoutProperties(_props, ['columns']);

            var newColumns = [].concat(columns);

            props = _extends({
                columns: newColumns
            }, others);
        }

        if ('expandedRowKeys' in props) {
            deprecated('expandedRowKeys', 'openRowKeys', 'Table');

            var _props2 = props,
                expandedRowKeys = _props2.expandedRowKeys,
                _others = _objectWithoutProperties(_props2, ['expandedRowKeys']);

            props = _extends({ openRowKeys: expandedRowKeys }, _others);
        }
        if ('onExpandedChange' in props) {
            deprecated('onExpandedChange', 'onRowOpen', 'Table');

            var _props3 = props,
                onExpandedChange = _props3.onExpandedChange,
                _others2 = _objectWithoutProperties(_props3, ['onExpandedChange']);

            props = _extends({ onRowOpen: onExpandedChange }, _others2);
        }
        if ('isLoading' in props) {
            deprecated('isLoading', 'loading', 'Table');

            var _props4 = props,
                isLoading = _props4.isLoading,
                _others3 = _objectWithoutProperties(_props4, ['isLoading']);

            props = _extends({ loading: isLoading }, _others3);
        }
        if ('indentSize' in props) {
            deprecated('indentSize', 'indent', 'Table');

            var _props5 = props,
                indentSize = _props5.indentSize,
                _others4 = _objectWithoutProperties(_props5, ['indentSize']);

            props = _extends({ indent: indentSize }, _others4);
        }
        if ('optimization' in props) {
            deprecated('optimization', 'pure', 'Table');

            var _props6 = props,
                optimization = _props6.optimization,
                _others5 = _objectWithoutProperties(_props6, ['optimization']);

            props = _extends({ pure: optimization }, _others5);
        }

        if ('getRowClassName' in props) {
            deprecated('getRowClassName', 'getRowProps', 'Table');

            var _props7 = props,
                getRowClassName = _props7.getRowClassName,
                getRowProps = _props7.getRowProps,
                _others6 = _objectWithoutProperties(_props7, ['getRowClassName', 'getRowProps']);

            if (getRowClassName) {
                var newGetRowProps = function newGetRowProps() {
                    return _extends({
                        className: getRowClassName.apply(undefined, arguments)
                    }, getRowProps ? getRowProps.apply(undefined, arguments) : {});
                };

                props = _extends({ getRowProps: newGetRowProps }, _others6);
            } else {
                props = _extends({ getRowProps: getRowProps }, _others6);
            }
        }

        if ('getRowProps' in props) {
            deprecated('getRowProps', 'rowProps', 'Table in 1.15.0');

            var _props8 = props,
                _getRowProps = _props8.getRowProps,
                _others7 = _objectWithoutProperties(_props8, ['getRowProps']);

            props = _extends({ rowProps: _getRowProps }, _others7);
        }

        if ('getCellProps' in props) {
            deprecated('getCellProps', 'cellProps', 'Table in 1.15.0');

            var _props9 = props,
                getCellProps = _props9.getCellProps,
                _others8 = _objectWithoutProperties(_props9, ['getCellProps']);

            props = _extends({ cellProps: getCellProps }, _others8);
        }

        return props;
    }
});