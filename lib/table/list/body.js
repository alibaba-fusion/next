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

var _body = require('../base/body');

var _body2 = _interopRequireDefault(_body);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListBody = (_temp2 = _class = function (_React$Component) {
    (0, _inherits3.default)(ListBody, _React$Component);

    function ListBody() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ListBody);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onScroll = function (e) {
            var onFixedScrollSync = _this.context.onFixedScrollSync;

            onFixedScrollSync && onFixedScrollSync(e);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    ListBody.prototype.componentDidMount = function componentDidMount() {
        var getNode = this.context.getNode;

        getNode && getNode('body', (0, _reactDom.findDOMNode)(this));
    };

    ListBody.prototype.render = function render() {
        return _react2.default.createElement(_body2.default, (0, _extends3.default)({ component: 'div', onScroll: this.onScroll }, this.props));
    };

    return ListBody;
}(_react2.default.Component), _class.contextTypes = {
    getNode: _propTypes2.default.func,
    onFixedScrollSync: _propTypes2.default.func
}, _temp2);
ListBody.displayName = 'ListBody';
exports.default = ListBody;
module.exports = exports.default;
module.exports.default = exports.default;