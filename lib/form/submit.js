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

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Form.Submit
 * @description 继承 Button API
 * @order 2
 */
var Submit = (_temp2 = _class = function (_React$Component) {
    (0, _inherits3.default)(Submit, _React$Component);

    function Submit() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Submit);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function () {
            var _this$props = _this.props,
                onClick = _this$props.onClick,
                validate = _this$props.validate;

            var field = _this.context._formField || _this.props.field;

            if (!field) {
                onClick();
                return;
            }

            if (validate === true) {
                field.validate(function (errors) {
                    onClick(field.getValues(), errors, field);
                });
            } else if (Array.isArray(validate)) {
                field.validate(validate, function (errors) {
                    onClick(field.getValues(), errors, field);
                });
            } else {
                onClick(field.getValues(), null, field);
            }
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    Submit.prototype.render = function render() {
        var children = this.props.children;


        return _react2.default.createElement(
            _button2.default,
            (0, _extends3.default)({}, _util.obj.pickOthers(Submit.propTypes, this.props), {
                onClick: this.handleClick
            }),
            children
        );
    };

    return Submit;
}(_react2.default.Component), _class.propTypes = {
    /**
     * 点击提交后触发
     * @param {Object} value 数据
     * @param {Object} errors 错误数据
     * @param {class} field 实例
     */
    onClick: _propTypes2.default.func,
    /**
     * 是否校验/需要校验的 name 数组
     */
    validate: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.array]),
    /**
     * 自定义 field (在 Form 内不需要设置)
     */
    field: _propTypes2.default.object,
    children: _propTypes2.default.node
}, _class.defaultProps = {
    onClick: _util.func.noop
}, _class.contextTypes = {
    _formField: _propTypes2.default.object
}, _temp2);
Submit.displayName = 'Submit';
exports.default = Submit;
module.exports = exports['default'];