'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _tree = require('./tree');

var _tree2 = _interopRequireDefault(_tree);

var _fixed = require('./fixed');

var _fixed2 = _interopRequireDefault(_fixed);

var _selection = require('./selection');

var _selection2 = _interopRequireDefault(_selection);

var _expanded = require('./expanded');

var _expanded2 = _interopRequireDefault(_expanded);

var _virtual = require('./virtual');

var _virtual2 = _interopRequireDefault(_virtual);

var _lock = require('./lock');

var _lock2 = _interopRequireDefault(_lock);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

var _sticky = require('./sticky');

var _sticky2 = _interopRequireDefault(_sticky);

var _listHeader = require('./list-header');

var _listHeader2 = _interopRequireDefault(_listHeader);

var _listFooter = require('./list-footer');

var _listFooter2 = _interopRequireDefault(_listFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ORDER_LIST = [_fixed2.default, _lock2.default, _selection2.default, _expanded2.default, _tree2.default, _virtual2.default, _list2.default, _sticky2.default];
var Table = ORDER_LIST.reduce(function (ret, current) {
    ret = current(ret);
    return ret;
}, _base2.default);
Table.Base = _base2.default;
Table.fixed = _fixed2.default;
Table.lock = _lock2.default;
Table.selection = _selection2.default;
Table.expanded = _expanded2.default;
Table.tree = _tree2.default;
Table.virtual = _virtual2.default;
Table.list = _list2.default;
Table.sticky = _sticky2.default;

Table.GroupHeader = _listHeader2.default;
Table.GroupFooter = _listFooter2.default;

exports.default = _configProvider2.default.config(Table, {
    componentName: 'Table',
    transform: /* istanbul ignore next */function transform(props, deprecated) {
        if ('expandedRowKeys' in props) {
            deprecated('expandedRowKeys', 'openRowKeys', 'Table');

            var _props = props,
                expandedRowKeys = _props.expandedRowKeys,
                others = (0, _objectWithoutProperties3.default)(_props, ['expandedRowKeys']);

            props = (0, _extends3.default)({ openRowKeys: expandedRowKeys }, others);
        }
        if ('onExpandedChange' in props) {
            deprecated('onExpandedChange', 'onRowOpen', 'Table');

            var _props2 = props,
                onExpandedChange = _props2.onExpandedChange,
                _others = (0, _objectWithoutProperties3.default)(_props2, ['onExpandedChange']);

            props = (0, _extends3.default)({ onRowOpen: onExpandedChange }, _others);
        }
        if ('isLoading' in props) {
            deprecated('isLoading', 'loading', 'Table');

            var _props3 = props,
                isLoading = _props3.isLoading,
                _others2 = (0, _objectWithoutProperties3.default)(_props3, ['isLoading']);

            props = (0, _extends3.default)({ loading: isLoading }, _others2);
        }
        if ('indentSize' in props) {
            deprecated('indentSize', 'indent', 'Table');

            var _props4 = props,
                indentSize = _props4.indentSize,
                _others3 = (0, _objectWithoutProperties3.default)(_props4, ['indentSize']);

            props = (0, _extends3.default)({ indent: indentSize }, _others3);
        }
        if ('optimization' in props) {
            deprecated('optimization', 'pure', 'Table');

            var _props5 = props,
                optimization = _props5.optimization,
                _others4 = (0, _objectWithoutProperties3.default)(_props5, ['optimization']);

            props = (0, _extends3.default)({ pure: optimization }, _others4);
        }

        if ('getRowClassName' in props) {
            deprecated('getRowClassName', 'getRowProps', 'Table');

            var _props6 = props,
                getRowClassName = _props6.getRowClassName,
                getRowProps = _props6.getRowProps,
                _others5 = (0, _objectWithoutProperties3.default)(_props6, ['getRowClassName', 'getRowProps']);

            if (getRowClassName) {
                var newGetRowProps = function newGetRowProps() {
                    return (0, _extends3.default)({
                        className: getRowClassName.apply(undefined, arguments)
                    }, getRowProps ? getRowProps.apply(undefined, arguments) : {});
                };

                props = (0, _extends3.default)({ getRowProps: newGetRowProps }, _others5);
            } else {
                props = (0, _extends3.default)({ getRowProps: getRowProps }, _others5);
            }
        }

        if ('getRowProps' in props) {
            deprecated('getRowProps', 'rowProps', 'Table in 1.15.0');

            var _props7 = props,
                _getRowProps = _props7.getRowProps,
                _others6 = (0, _objectWithoutProperties3.default)(_props7, ['getRowProps']);

            props = (0, _extends3.default)({ rowProps: _getRowProps }, _others6);
        }

        if ('getCellProps' in props) {
            deprecated('getCellProps', 'cellProps', 'Table in 1.15.0');

            var _props8 = props,
                getCellProps = _props8.getCellProps,
                _others7 = (0, _objectWithoutProperties3.default)(_props8, ['getCellProps']);

            props = (0, _extends3.default)({ cellProps: getCellProps }, _others7);
        }

        return props;
    }
});
module.exports = exports['default'];