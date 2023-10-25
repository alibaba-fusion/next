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

function withContext(Radio) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        (0, _inherits3.default)(WrappedComp, _React$Component);

        function WrappedComp(props) {
            (0, _classCallCheck3.default)(this, WrappedComp);

            var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

            _this.radioRef = null;
            return _this;
        }

        WrappedComp.prototype.focus = function focus() {
            if (this.radioRef) {
                this.radioRef.focus();
            }
        };

        WrappedComp.prototype.render = function render() {
            var _this2 = this;

            return _react2.default.createElement(Radio, (0, _extends3.default)({
                ref: function ref(el) {
                    _this2.radioRef = el;
                }
            }, this.props, {
                context: this.context
            }));
        };

        return WrappedComp;
    }(_react2.default.Component), _class.displayName = 'Radio', _class.contextTypes = {
        onChange: _propTypes2.default.func,
        __group__: _propTypes2.default.bool,
        isButton: _propTypes2.default.bool,
        selectedValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool]),
        disabled: _propTypes2.default.bool
    }, _temp;
}
module.exports = exports['default'];