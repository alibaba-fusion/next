"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = require("../config-provider");
var base_1 = require("./base");
var tree_1 = require("./tree");
var fixed_1 = require("./fixed");
var selection_1 = require("./selection");
var expanded_1 = require("./expanded");
var virtual_1 = require("./virtual");
var lock_1 = require("./lock");
var new_lock_1 = require("./new-lock");
var list_1 = require("./list");
var sticky_1 = require("./sticky");
var list_header_1 = require("./list-header");
var list_footer_1 = require("./list-footer");
var util_1 = require("../util");
var ieVersion = util_1.env.ieVersion;
var ORDER_LIST = [fixed_1.default, lock_1.default, selection_1.default, expanded_1.default, virtual_1.default, tree_1.default, list_1.default, sticky_1.default];
var Table = ORDER_LIST.reduce(function (ret, current) {
    ret = current(ret);
    return ret;
}, base_1.default);
lock_1.default._typeMark = 'lock';
expanded_1.default._typeMark = 'expanded';
fixed_1.default._typeMark = 'fixed';
var StickyLockTable = ORDER_LIST.reduce(function (ret, current) {
    var newLock = !ieVersion;
    if (current._typeMark === 'lock') {
        ret = newLock ? (0, new_lock_1.default)(ret) : (0, lock_1.default)(ret);
    }
    else if (current._typeMark === 'expanded') {
        ret = newLock ? (0, expanded_1.default)(ret, true) : (0, expanded_1.default)(ret);
    }
    else if (current._typeMark === 'fixed') {
        ret = newLock ? (0, fixed_1.default)(ret, true) : (0, fixed_1.default)(ret);
    }
    else {
        ret = current(ret);
    }
    return ret;
}, base_1.default);
Table.Base = base_1.default;
Table.fixed = fixed_1.default;
Table.lock = lock_1.default;
Table.selection = selection_1.default;
Table.expanded = expanded_1.default;
Table.tree = tree_1.default;
Table.virtual = virtual_1.default;
Table.list = list_1.default;
Table.sticky = sticky_1.default;
Table.GroupHeader = list_header_1.default;
Table.GroupFooter = list_footer_1.default;
Table.StickyLock = config_provider_1.default.config(StickyLockTable, {
    componentName: 'Table',
});
exports.default = config_provider_1.default.config(Table, {
    componentName: 'Table',
    transform: /* istanbul ignore next */ function (props, deprecated) {
        // fix https://github.com/alibaba-fusion/next/issues/4062
        if ('columns' in props && typeof props.columns !== 'undefined') {
            var columns = props.columns, others = tslib_1.__rest(props, ["columns"]);
            var newColumns = tslib_1.__spreadArray([], tslib_1.__read(columns), false);
            props = tslib_1.__assign({ columns: newColumns }, others);
        }
        if ('expandedRowKeys' in props) {
            deprecated('expandedRowKeys', 'openRowKeys', 'Table');
            var expandedRowKeys = props.expandedRowKeys, others = tslib_1.__rest(props, ["expandedRowKeys"]);
            props = tslib_1.__assign({ openRowKeys: expandedRowKeys }, others);
        }
        if ('onExpandedChange' in props) {
            deprecated('onExpandedChange', 'onRowOpen', 'Table');
            var onExpandedChange = props.onExpandedChange, others = tslib_1.__rest(props, ["onExpandedChange"]);
            props = tslib_1.__assign({ onRowOpen: onExpandedChange }, others);
        }
        if ('isLoading' in props) {
            deprecated('isLoading', 'loading', 'Table');
            var isLoading = props.isLoading, others = tslib_1.__rest(props, ["isLoading"]);
            props = tslib_1.__assign({ loading: isLoading }, others);
        }
        if ('indentSize' in props) {
            deprecated('indentSize', 'indent', 'Table');
            var indentSize = props.indentSize, others = tslib_1.__rest(props, ["indentSize"]);
            props = tslib_1.__assign({ indent: indentSize }, others);
        }
        if ('optimization' in props) {
            deprecated('optimization', 'pure', 'Table');
            var optimization = props.optimization, others = tslib_1.__rest(props, ["optimization"]);
            props = tslib_1.__assign({ pure: optimization }, others);
        }
        if ('getRowClassName' in props) {
            deprecated('getRowClassName', 'getRowProps', 'Table');
            var getRowClassName_1 = props.getRowClassName, getRowProps_1 = props.getRowProps, others = tslib_1.__rest(props, ["getRowClassName", "getRowProps"]);
            if (getRowClassName_1) {
                var newGetRowProps = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return tslib_1.__assign({ className: getRowClassName_1.apply(void 0, tslib_1.__spreadArray([], tslib_1.__read(args), false)) }, (getRowProps_1 ? getRowProps_1.apply(void 0, tslib_1.__spreadArray([], tslib_1.__read(args), false)) : {}));
                };
                props = tslib_1.__assign({ getRowProps: newGetRowProps }, others);
            }
            else {
                props = tslib_1.__assign({ getRowProps: getRowProps_1 }, others);
            }
        }
        if ('getRowProps' in props) {
            deprecated('getRowProps', 'rowProps', 'Table in 1.15.0');
            var getRowProps = props.getRowProps, others = tslib_1.__rest(props, ["getRowProps"]);
            props = tslib_1.__assign({ rowProps: getRowProps }, others);
        }
        if ('getCellProps' in props) {
            deprecated('getCellProps', 'cellProps', 'Table in 1.15.0');
            var getCellProps = props.getCellProps, others = tslib_1.__rest(props, ["getCellProps"]);
            props = tslib_1.__assign({ cellProps: getCellProps }, others);
        }
        return props;
    },
});
