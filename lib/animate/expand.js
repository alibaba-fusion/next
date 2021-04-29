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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = require('../util');

var _animate = require('./animate');

var _animate2 = _interopRequireDefault(_animate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};
var getStyle = _util.dom.getStyle;
var Expand = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Expand, _Component);

    function Expand(props) {
        (0, _classCallCheck3.default)(this, Expand);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

        _util.func.bindCtx(_this, ['beforeEnter', 'onEnter', 'afterEnter', 'beforeLeave', 'onLeave', 'afterLeave']);
        return _this;
    }

    Expand.prototype.beforeEnter = function beforeEnter(node) {
        if (this.leaving) {
            this.afterLeave(node);
        }

        this.cacheCurrentStyle(node);
        this.cacheComputedStyle(node);
        this.setCurrentStyleToZero(node);

        this.props.beforeEnter(node);
    };

    Expand.prototype.onEnter = function onEnter(node) {
        this.setCurrentStyleToComputedStyle(node);

        this.props.onEnter(node);
    };

    Expand.prototype.afterEnter = function afterEnter(node) {
        this.restoreCurrentStyle(node);

        this.props.afterEnter(node);
    };

    Expand.prototype.beforeLeave = function beforeLeave(node) {
        this.leaving = true;

        this.cacheCurrentStyle(node);
        this.cacheComputedStyle(node);
        this.setCurrentStyleToComputedStyle(node);

        this.props.beforeLeave(node);
    };

    Expand.prototype.onLeave = function onLeave(node) {
        this.setCurrentStyleToZero(node);

        this.props.onLeave(node);
    };

    Expand.prototype.afterLeave = function afterLeave(node) {
        this.leaving = false;

        this.restoreCurrentStyle(node);

        this.props.afterLeave(node);
    };

    Expand.prototype.cacheCurrentStyle = function cacheCurrentStyle(node) {
        this.styleBorderTopWidth = node.style.borderTopWidth;
        this.stylePaddingTop = node.style.paddingTop;
        this.styleHeight = node.style.height;
        this.stylePaddingBottom = node.style.paddingBottom;
        this.styleBorderBottomWidth = node.style.borderBottomWidth;
    };

    Expand.prototype.cacheComputedStyle = function cacheComputedStyle(node) {
        this.borderTopWidth = getStyle(node, 'borderTopWidth');
        this.paddingTop = getStyle(node, 'paddingTop');
        this.height = node.offsetHeight;
        this.paddingBottom = getStyle(node, 'paddingBottom');
        this.borderBottomWidth = getStyle(node, 'borderBottomWidth');
    };

    Expand.prototype.setCurrentStyleToZero = function setCurrentStyleToZero(node) {
        node.style.borderTopWidth = '0px';
        node.style.paddingTop = '0px';
        node.style.height = '0px';
        node.style.paddingBottom = '0px';
        node.style.borderBottomWidth = '0px';
    };

    Expand.prototype.setCurrentStyleToComputedStyle = function setCurrentStyleToComputedStyle(node) {
        node.style.borderTopWidth = this.borderTopWidth + 'px';
        node.style.paddingTop = this.paddingTop + 'px';
        node.style.height = this.height + 'px';
        node.style.paddingBottom = this.paddingBottom + 'px';
        node.style.borderBottomWidth = this.borderBottomWidth + 'px';
    };

    Expand.prototype.restoreCurrentStyle = function restoreCurrentStyle(node) {
        node.style.borderTopWidth = this.styleBorderTopWidth;
        node.style.paddingTop = this.stylePaddingTop;
        node.style.height = this.styleHeight;
        node.style.paddingBottom = this.stylePaddingBottom;
        node.style.borderBottomWidth = this.styleBorderBottomWidth;
    };

    Expand.prototype.render = function render() {
        var _props = this.props,
            animation = _props.animation,
            others = (0, _objectWithoutProperties3.default)(_props, ['animation']);

        var newAnimation = animation || 'expand';

        return _react2.default.createElement(_animate2.default, (0, _extends3.default)({}, others, {
            animation: newAnimation,
            beforeEnter: this.beforeEnter,
            onEnter: this.onEnter,
            afterEnter: this.afterEnter,
            beforeLeave: this.beforeLeave,
            onLeave: this.onLeave,
            afterLeave: this.afterLeave
        }));
    };

    return Expand;
}(_react.Component), _class.propTypes = {
    animation: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
    beforeEnter: _propTypes2.default.func,
    onEnter: _propTypes2.default.func,
    afterEnter: _propTypes2.default.func,
    beforeLeave: _propTypes2.default.func,
    onLeave: _propTypes2.default.func,
    afterLeave: _propTypes2.default.func
}, _class.defaultProps = {
    beforeEnter: noop,
    onEnter: noop,
    afterEnter: noop,
    beforeLeave: noop,
    onLeave: noop,
    afterLeave: noop
}, _temp);
Expand.displayName = 'Expand';
exports.default = Expand;
module.exports = exports['default'];