'use strict';

exports.__esModule = true;
exports.default = undefined;

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

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _body = require('../base/body');

var _body2 = _interopRequireDefault(_body);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/prefer-stateless-function */
var FixedBody = (_temp2 = _class = function (_React$Component) {
    (0, _inherits3.default)(FixedBody, _React$Component);

    function FixedBody() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, FixedBody);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onBodyScroll = function (event) {
            var onFixedScrollSync = _this.context.onFixedScrollSync;
            // sync scroll left to header

            onFixedScrollSync && onFixedScrollSync(event);

            // sync scroll top/left to lock columns
            if ('onLockScroll' in _this.props && typeof _this.props.onLockScroll === 'function') {
                _this.props.onLockScroll(event);
            }
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    FixedBody.prototype.componentDidMount = function componentDidMount() {
        var getNode = this.context.getNode;

        getNode && getNode('body', (0, _reactDom.findDOMNode)(this));
    };

    FixedBody.prototype.render = function render() {
        /*eslint-disable no-unused-vars */
        var _props = this.props,
            className = _props.className,
            colGroup = _props.colGroup,
            onLockScroll = _props.onLockScroll,
            others = (0, _objectWithoutProperties3.default)(_props, ['className', 'colGroup', 'onLockScroll']);
        var _context = this.context,
            maxBodyHeight = _context.maxBodyHeight,
            fixedHeader = _context.fixedHeader;

        var style = {};
        if (fixedHeader) {
            style.maxHeight = maxBodyHeight;
            style.position = 'relative';
        }
        return _react2.default.createElement(
            'div',
            {
                style: style,
                className: className,
                onScroll: this.onBodyScroll
            },
            _react2.default.createElement(
                'table',
                null,
                colGroup,
                _react2.default.createElement(_body2.default, (0, _extends3.default)({}, others, { colGroup: colGroup }))
            )
        );
    };

    return FixedBody;
}(_react2.default.Component), _class.propTypes = {
    children: _propTypes2.default.any,
    prefix: _propTypes2.default.string,
    className: _propTypes2.default.string,
    colGroup: _propTypes2.default.any,
    onLockScroll: _propTypes2.default.func
}, _class.contextTypes = {
    fixedHeader: _propTypes2.default.bool,
    maxBodyHeight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    onFixedScrollSync: _propTypes2.default.func,
    getNode: _propTypes2.default.func
}, _temp2);
FixedBody.displayName = 'FixedBody';
exports.default = FixedBody;
module.exports = exports['default'];