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

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _overlay = require('./overlay');

var _overlay2 = _interopRequireDefault(_overlay);

var _overlayV = require('./overlay-v2');

var _overlayV2 = _interopRequireDefault(_overlayV);

var _gateway = require('./gateway');

var _gateway2 = _interopRequireDefault(_gateway);

var _position = require('./position');

var _position2 = _interopRequireDefault(_position);

var _popup = require('./popup');

var _popup2 = _interopRequireDefault(_popup);

var _popupV = require('./popup-v2');

var _popupV2 = _interopRequireDefault(_popupV);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Overlay = function (_React$Component) {
    (0, _inherits3.default)(Overlay, _React$Component);

    function Overlay(props) {
        (0, _classCallCheck3.default)(this, Overlay);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

        _this.overlayRef = null;
        _this.saveRef = _this.saveRef.bind(_this);
        return _this;
    }

    Overlay.prototype.saveRef = function saveRef(ref) {
        this.overlayRef = ref;
    };
    /**
     * 兼容 1.x API, will be removed in 2.1.0
     */


    Overlay.prototype.getContent = function getContent() {
        if (this.overlayRef) {
            return this.overlayRef.getContent();
        }
        return null;
    };
    /**
     * 兼容 1.x API, will be removed in 2.1.0
     */


    Overlay.prototype.getContentNode = function getContentNode() {
        if (this.overlayRef) {
            return this.overlayRef.getContentNode();
        }
        return null;
    };

    Overlay.prototype.render = function render() {
        var _props = this.props,
            v2 = _props.v2,
            others = (0, _objectWithoutProperties3.default)(_props, ['v2']);

        if (v2) {
            if ('needAdjust' in others) {
                _util.log.deprecated('needAdjust', 'autoAdjust', 'Overlay v2');
                others.autoAdjust = others.needAdjust;
                delete others.needAdjust;
            }
            return _react2.default.createElement(_overlayV2.default, others);
        } else {
            return _react2.default.createElement(_overlay2.default, (0, _extends3.default)({}, others, { ref: this.saveRef }));
        }
    };

    return Overlay;
}(_react2.default.Component);
// eslint-disable-next-line


Overlay.displayName = 'Overlay';

var Popup = function (_React$Component2) {
    (0, _inherits3.default)(Popup, _React$Component2);

    function Popup(props) {
        (0, _classCallCheck3.default)(this, Popup);

        var _this2 = (0, _possibleConstructorReturn3.default)(this, _React$Component2.call(this, props));

        _this2.overlay = null;
        _this2.saveRef = _this2.saveRef.bind(_this2);
        return _this2;
    }

    Popup.prototype.saveRef = function saveRef(ref) {
        if (ref) {
            this.overlay = ref.overlay;
        }
    };

    Popup.prototype.render = function render() {
        var _props2 = this.props,
            v2 = _props2.v2,
            others = (0, _objectWithoutProperties3.default)(_props2, ['v2']);

        if (v2) {
            if ('needAdjust' in others) {
                _util.log.deprecated('needAdjust', 'needAdjust', 'Popup v2');
                others.autoAdjust = others.needAdjust;
                delete others.needAdjust;
            }

            return _react2.default.createElement(_popupV2.default, others);
        } else {
            return _react2.default.createElement(_popup2.default, (0, _extends3.default)({}, others, { ref: this.saveRef }));
        }
    };

    return Popup;
}(_react2.default.Component);

Popup.displayName = 'Popup';


Overlay.Gateway = _gateway2.default;
Overlay.Position = _position2.default;
Overlay.Popup = _configProvider2.default.config(Popup, {
    exportNames: ['overlay']
});

exports.default = _configProvider2.default.config(Overlay, {
    exportNames: ['getContent', 'getContentNode']
});
module.exports = exports['default'];