'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _row = require('../expanded/row');

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/prefer-stateless-function */
var SelectionRow = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(SelectionRow, _React$Component);

    function SelectionRow() {
        (0, _classCallCheck3.default)(this, SelectionRow);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }

    SelectionRow.prototype.render = function render() {
        var _classnames;

        /* eslint-disable no-unused-vars*/
        var _props = this.props,
            className = _props.className,
            record = _props.record,
            primaryKey = _props.primaryKey;
        var selectedRowKeys = this.context.selectedRowKeys;

        var cls = (0, _classnames3.default)((_classnames = {
            selected: selectedRowKeys.indexOf(record[primaryKey]) > -1
        }, _classnames[className] = className, _classnames));
        return _react2.default.createElement(_row2.default, (0, _extends3.default)({}, this.props, { className: cls }));
    };

    return SelectionRow;
}(_react2.default.Component), _class.propTypes = (0, _extends3.default)({}, _row2.default.propTypes), _class.defaultProps = (0, _extends3.default)({}, _row2.default.defaultProps), _class.contextTypes = {
    selectedRowKeys: _propTypes2.default.array
}, _temp);
SelectionRow.displayName = 'SelectionRow';
exports.default = SelectionRow;
module.exports = exports['default'];