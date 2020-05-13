'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = withContext;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function withContext(Checkbox) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        (0, _inherits3.default)(WrappedComp, _React$Component);

        function WrappedComp() {
            (0, _classCallCheck3.default)(this, WrappedComp);
            return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
        }

        WrappedComp.prototype.render = function render() {
            return _react2.default.createElement(Checkbox, (0, _extends3.default)({}, this.props, { context: this.context }));
        };

        return WrappedComp;
    }(_react2.default.Component), _class.contextTypes = {
        onChange: _propTypes2.default.func,
        __group__: _propTypes2.default.bool,
        selectedValue: _propTypes2.default.array,
        disabled: _propTypes2.default.bool,
        prefix: _propTypes2.default.string
    }, _temp;
}
module.exports = exports['default'];