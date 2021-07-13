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

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Form.Error
 * @description 自定义错误展示
 * @order 4
 */
var Error = (_temp2 = _class = function (_React$Component) {
    (0, _inherits3.default)(Error, _React$Component);

    function Error() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Error);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.itemRender = function (errors) {
            return errors.length ? errors : null;
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    Error.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            children = _props.children,
            name = _props.name,
            prefix = _props.prefix,
            style = _props.style,
            className = _props.className,
            _field = _props.field,
            others = (0, _objectWithoutProperties3.default)(_props, ['children', 'name', 'prefix', 'style', 'className', 'field']);


        if (children && typeof children !== 'function') {
            return _react2.default.createElement(
                'div',
                { className: prefix + 'form-item-help' },
                children
            );
        }

        var field = this.context._formField || _field;

        if (!field || !name) {
            return null;
        }

        var isSingle = typeof name === 'string';

        var names = isSingle ? [name] : name;
        var errorArr = [];

        if (names.length) {
            var errors = field.getErrors(names);
            Object.keys(errors).forEach(function (key) {
                if (errors[key]) {
                    errorArr.push(errors[key]);
                }
            });
        }

        var result = null;
        if (typeof children === 'function') {
            result = children(errorArr, isSingle ? field.getState(name) : undefined);
        } else {
            result = this.itemRender(errorArr);
        }

        if (!result) {
            return null;
        }

        var cls = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'form-item-help'] = true, _classNames[className] = className, _classNames));

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({}, others, { className: cls, style: style }),
            result
        );
    };

    return Error;
}(_react2.default.Component), _class.propTypes = {
    /**
     * 表单名
     */
    name: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
    /**
     * 自定义 field (在 Form 内不需要设置)
     */
    field: _propTypes2.default.object,
    style: _propTypes2.default.object,
    className: _propTypes2.default.string,
    /**
     * 自定义错误渲染, 可以是 node 或者 function(errors, state)
     */
    children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
    prefix: _propTypes2.default.string
}, _class.defaultProps = {
    prefix: 'next-'
}, _class.contextTypes = {
    _formField: _propTypes2.default.object
}, _class._typeMark = 'form_error', _temp2);
Error.displayName = 'Error';
exports.default = _configProvider2.default.config(Error);
module.exports = exports['default'];