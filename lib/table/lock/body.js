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

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _body = require('../fixed/body');

var _body2 = _interopRequireDefault(_body);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/prefer-stateless-function */
var LockBody = (_temp2 = _class = function (_React$Component) {
    (0, _inherits3.default)(LockBody, _React$Component);

    function LockBody() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, LockBody);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onBodyScroll = function (event) {
            _this.context.onLockBodyScroll(event);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    LockBody.prototype.componentDidMount = function componentDidMount() {
        this.context.getLockNode('body', (0, _reactDom.findDOMNode)(this), this.context.lockType);
    };

    LockBody.prototype.render = function render() {
        var event = {
            onLockScroll: this.onBodyScroll
        };
        return _react2.default.createElement(_body2.default, (0, _extends3.default)({}, this.props, event));
    };

    return LockBody;
}(_react2.default.Component), _class.propTypes = (0, _extends3.default)({}, _body2.default.propTypes), _class.contextTypes = (0, _extends3.default)({}, _body2.default.contextTypes, {
    getLockNode: _propTypes2.default.func,
    onLockBodyScroll: _propTypes2.default.func,
    lockType: _propTypes2.default.oneOf(['left', 'right'])
}), _temp2);
LockBody.displayName = 'LockBody';
exports.default = LockBody;
module.exports = exports.default;
module.exports.default = exports.default;