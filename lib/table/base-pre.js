'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _loading = require('../loading');

var _loading2 = _interopRequireDefault(_loading);

var _body = require('./base/body');

var _body2 = _interopRequireDefault(_body);

var _header = require('./base/header');

var _header2 = _interopRequireDefault(_header);

var _wrapper = require('./base/wrapper');

var _wrapper2 = _interopRequireDefault(_wrapper);

var _row = require('./base/row');

var _row2 = _interopRequireDefault(_row);

var _cell = require('./base/cell');

var _cell2 = _interopRequireDefault(_cell);

var _filter = require('./base/filter');

var _filter2 = _interopRequireDefault(_filter);

var _sort = require('./base/sort');

var _sort2 = _interopRequireDefault(_sort);

var _column = require('./column');

var _column2 = _interopRequireDefault(_column);

var _columnGroup = require('./column-group');

var _columnGroup2 = _interopRequireDefault(_columnGroup);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HOC(WrappedComponent) {
    var _class, _temp;

    var PreTable = (_temp = _class = function (_React$Component) {
        (0, _inherits3.default)(PreTable, _React$Component);

        function PreTable() {
            (0, _classCallCheck3.default)(this, PreTable);
            return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
        }

        PreTable.prototype.render = function render() {
            var _props = this.props,
                prefix = _props.prefix,
                forwardedRef = _props.forwardedRef,
                loadingComponent = _props.loadingComponent,
                loading = _props.loading,
                others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'forwardedRef', 'loadingComponent', 'loading']);

            var LComponent = loadingComponent || _loading2.default;
            if (loading && loadingComponent) {
                var loadingClassName = prefix + 'table-loading';
                return _react2.default.createElement(
                    LComponent,
                    { className: loadingClassName },
                    _react2.default.createElement(WrappedComponent, (0, _extends3.default)({ ref: forwardedRef }, others))
                );
            } else {
                return _react2.default.createElement(WrappedComponent, (0, _extends3.default)({ ref: forwardedRef, loading: loading }, others));
            }
        };

        return PreTable;
    }(_react2.default.Component), _class.Column = _column2.default, _class.ColumnGroup = _columnGroup2.default, _class.Header = _header2.default, _class.Body = _body2.default, _class.Wrapper = _wrapper2.default, _class.Row = _row2.default, _class.Cell = _cell2.default, _class.Filter = _filter2.default, _class.Sort = _sort2.default, _temp);

    // 当前版本大于 16.6.3 （有forwardRef的那个版本）

    PreTable.displayName = 'PreTable';
    if (typeof _react2.default.forwardRef === 'function') {
        var HocTable = _react2.default.forwardRef(function (props, ref) {
            return _react2.default.createElement(PreTable, (0, _extends3.default)({}, props, { forwardedRef: ref }));
        });
        (0, _util.statics)(HocTable, WrappedComponent);
        return HocTable;
    }

    (0, _util.statics)(PreTable, WrappedComponent);
    // 对于没有低版本用户来说，获取底层Table的ref，可以通过 forwardedRef 这个props获取
    return PreTable;
}

exports.default = HOC(_base2.default);
module.exports = exports.default;
module.exports.default = exports.default;