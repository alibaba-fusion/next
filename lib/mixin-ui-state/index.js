'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeChain = _util.func.makeChain;
// UIState 为一些特殊元素的状态响应提供了标准的方式，
// 尤其适合CSS无法完全定制的控件，比如checkbox，radio等。
// 若组件 disable 则自行判断是否需要绑定状态管理。
// 注意：disable 不会触发事件，请使用resetUIState还原状态
/* eslint-disable react/prop-types */

var UIState = function (_Component) {
    (0, _inherits3.default)(UIState, _Component);

    function UIState(props) {
        (0, _classCallCheck3.default)(this, UIState);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

        _this.state = {};
        ['_onUIFocus', '_onUIBlur'].forEach(function (item) {
            _this[item] = _this[item].bind(_this);
        });
        return _this;
    }
    // base 事件绑定的元素


    UIState.prototype.getStateElement = function getStateElement(base) {
        var _props = this.props,
            onFocus = _props.onFocus,
            onBlur = _props.onBlur;

        return _react2.default.cloneElement(base, {
            onFocus: makeChain(this._onUIFocus, onFocus),
            onBlur: makeChain(this._onUIBlur, onBlur)
        });
    };
    // 获取状态classname


    UIState.prototype.getStateClassName = function getStateClassName() {
        var focused = this.state.focused;

        return (0, _classnames2.default)({
            focused: focused
        });
    };
    // 复原状态


    UIState.prototype.resetUIState = function resetUIState() {
        this.setState({
            focused: false
        });
    };

    UIState.prototype._onUIFocus = function _onUIFocus() {
        this.setState({
            focused: true
        });
    };

    UIState.prototype._onUIBlur = function _onUIBlur() {
        this.setState({
            focused: false
        });
    };

    return UIState;
}(_react.Component);

UIState.displayName = 'UIState';
exports.default = UIState;
module.exports = exports['default'];