'use strict';

exports.__esModule = true;

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

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _drawer = require('./drawer');

var _drawer2 = _interopRequireDefault(_drawer);

var _drawerV = require('./drawer-v2');

var _drawerV2 = _interopRequireDefault(_drawerV);

var _inner = require('./inner');

var _inner2 = _interopRequireDefault(_inner);

var _show = require('./show');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Drawer = function (_React$Component) {
    (0, _inherits3.default)(Drawer, _React$Component);

    function Drawer() {
        (0, _classCallCheck3.default)(this, Drawer);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }

    Drawer.prototype.render = function render() {
        var _props = this.props,
            v2 = _props.v2,
            others = (0, _objectWithoutProperties3.default)(_props, ['v2']);

        if (v2) {
            return _react2.default.createElement(_drawerV2.default, others);
        } else {
            return _react2.default.createElement(_drawer2.default, others);
        }
    };

    return Drawer;
}(_react2.default.Component);

Drawer.displayName = 'Drawer';


Drawer.Inner = _inner2.default;
Drawer.show = _show.show;
Drawer.withContext = _show.withContext;

exports.default = _configProvider2.default.config(Drawer);
module.exports = exports['default'];