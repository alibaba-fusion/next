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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

var _index = require('../icon/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function preventDefault(e) {
    e.preventDefault();
}
var Password = (_temp2 = _class = function (_Input) {
    (0, _inherits3.default)(Password, _Input);

    function Password() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Password);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Input.call.apply(_Input, [this].concat(args))), _this), _this.state = {
            hint: 'eye',
            htmlType: 'password'
        }, _this.toggleEye = function (e) {
            e.preventDefault();

            var eyeClose = _this.state.hint === 'eye-close';

            _this.setState({
                hint: eyeClose ? 'eye' : 'eye-close',
                htmlType: eyeClose || !_this.props.showToggle ? 'password' : 'text'
            });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    Password.prototype.render = function render() {
        var _props = this.props,
            showToggle = _props.showToggle,
            others = (0, _objectWithoutProperties3.default)(_props, ['showToggle']);
        var _state = this.state,
            hint = _state.hint,
            htmlType = _state.htmlType;


        var extra = showToggle ? _react2.default.createElement(_index2.default, {
            type: hint,
            onClick: this.toggleEye,
            onMouseDown: preventDefault
        }) : null;

        return _react2.default.createElement(_input2.default, (0, _extends3.default)({}, others, { extra: extra, htmlType: htmlType }));
    };

    return Password;
}(_input2.default), _class.propTypes = (0, _extends3.default)({}, _input2.default.propTypes, {
    /**
     * 是否展示切换按钮
     */
    showToggle: _propTypes2.default.bool
}), _class.defaultProps = (0, _extends3.default)({}, _input2.default.defaultProps, {
    showToggle: true
}), _temp2);
exports.default = Password;
module.exports = exports['default'];