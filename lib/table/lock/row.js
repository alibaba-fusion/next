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

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _row = require('../base/row');

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LockRow = (_temp2 = _class = function (_React$Component) {
    (0, _inherits3.default)(LockRow, _React$Component);

    function LockRow() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, LockRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onMouseEnter = function (record, index, e) {
            var onRowMouseEnter = _this.context.onRowMouseEnter;
            var onMouseEnter = _this.props.onMouseEnter;

            onRowMouseEnter && onRowMouseEnter(record, index, e);
            onMouseEnter(record, index, e);
        }, _this.onMouseLeave = function (record, index, e) {
            var onRowMouseLeave = _this.context.onRowMouseLeave;
            var onMouseLeave = _this.props.onMouseLeave;

            onRowMouseLeave && onRowMouseLeave(record, index, e);
            onMouseLeave(record, index, e);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    LockRow.prototype.render = function render() {
        /* eslint-disable no-unused-vars*/
        return _react2.default.createElement(_row2.default, (0, _extends3.default)({}, this.props, { onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave }));
    };

    return LockRow;
}(_react2.default.Component), _class.propTypes = (0, _extends3.default)({}, _row2.default.propTypes), _class.contextTypes = {
    onRowMouseEnter: _propTypes2.default.func,
    onRowMouseLeave: _propTypes2.default.func
}, _class.defaultProps = (0, _extends3.default)({}, _row2.default.defaultProps), _temp2);
LockRow.displayName = 'LockRow';
exports.default = LockRow;
module.exports = exports.default;
module.exports.default = exports.default;