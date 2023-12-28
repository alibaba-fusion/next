import { __assign, __read, __rest, __spreadArray } from "tslib";
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
    }
    else if (current._typeMark === 'expanded') {
        ret = newLock ? expanded(ret, true) : expanded(ret);
    }
    else if (current._typeMark === 'fixed') {
        ret = newLock ? fixed(ret, true) : fixed(ret);
    }
    else {
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
    transform: /* istanbul ignore next */ function (props, deprecated) {
        // fix https://github.com/alibaba-fusion/next/issues/4062
        if ('columns' in props && typeof props.columns !== 'undefined') {
            var columns = props.columns, others = __rest(props, ["columns"]);
            var newColumns = __spreadArray([], __read(columns), false);
            props = __assign({ columns: newColumns }, others);
        }
        if ('expandedRowKeys' in props) {
            deprecated('expandedRowKeys', 'openRowKeys', 'Table');
            var expandedRowKeys = props.expandedRowKeys, others = __rest(props, ["expandedRowKeys"]);
            props = __assign({ openRowKeys: expandedRowKeys }, others);
        }
        if ('onExpandedChange' in props) {
            deprecated('onExpandedChange', 'onRowOpen', 'Table');
            var onExpandedChange = props.onExpandedChange, others = __rest(props, ["onExpandedChange"]);
            props = __assign({ onRowOpen: onExpandedChange }, others);
        }
        if ('isLoading' in props) {
            deprecated('isLoading', 'loading', 'Table');
            var isLoading = props.isLoading, others = __rest(props, ["isLoading"]);
            props = __assign({ loading: isLoading }, others);
        }
        if ('indentSize' in props) {
            deprecated('indentSize', 'indent', 'Table');
            var indentSize = props.indentSize, others = __rest(props, ["indentSize"]);
            props = __assign({ indent: indentSize }, others);
        }
        if ('optimization' in props) {
            deprecated('optimization', 'pure', 'Table');
            var optimization = props.optimization, others = __rest(props, ["optimization"]);
            props = __assign({ pure: optimization }, others);
        }
        if ('getRowClassName' in props) {
            deprecated('getRowClassName', 'getRowProps', 'Table');
            var getRowClassName_1 = props.getRowClassName, getRowProps_1 = props.getRowProps, others = __rest(props, ["getRowClassName", "getRowProps"]);
            if (getRowClassName_1) {
                var newGetRowProps = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return __assign({ className: getRowClassName_1.apply(void 0, __spreadArray([], __read(args), false)) }, (getRowProps_1 ? getRowProps_1.apply(void 0, __spreadArray([], __read(args), false)) : {}));
                };
                props = __assign({ getRowProps: newGetRowProps }, others);
            }
            else {
                props = __assign({ getRowProps: getRowProps_1 }, others);
            }
        }
        if ('getRowProps' in props) {
            deprecated('getRowProps', 'rowProps', 'Table in 1.15.0');
            var getRowProps = props.getRowProps, others = __rest(props, ["getRowProps"]);
            props = __assign({ rowProps: getRowProps }, others);
        }
        if ('getCellProps' in props) {
            deprecated('getCellProps', 'cellProps', 'Table in 1.15.0');
            var getCellProps = props.getCellProps, others = __rest(props, ["getCellProps"]);
            props = __assign({ cellProps: getCellProps }, others);
        }
        return props;
    },
});
