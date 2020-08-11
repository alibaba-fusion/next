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

var _class, _temp;

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
 * Card.Actions
 * @order 5
 */
var CardActions = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(CardActions, _Component);

    function CardActions() {
        (0, _classCallCheck3.default)(this, CardActions);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    CardActions.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            Component = _props.component,
            className = _props.className,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'component', 'className']);

        return _react2.default.createElement(Component, (0, _extends3.default)({}, others, {
            className: (0, _classnames2.default)(prefix + 'card-actions', className)
        }));
    };

    return CardActions;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    /**
     * 设置标签类型
     */
    component: _propTypes2.default.elementType,
    className: _propTypes2.default.string
}, _class.defaultProps = {
    prefix: 'next-',
    component: 'div'
}, _temp);
CardActions.displayName = 'CardActions';
exports.default = _configProvider2.default.config(CardActions);
module.exports = exports['default'];