'use strict';

exports.__esModule = true;

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

var _text = require('./text');

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Typography
 * @description 继承 Typography.Text API
 * @order 0
 */
var Typography = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Typography, _Component);

    function Typography() {
        (0, _classCallCheck3.default)(this, Typography);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    Typography.prototype.render = function render() {
        return _react2.default.createElement(_text2.default, this.props);
    };

    return Typography;
}(_react.Component), _class.propTypes = {
    /**
     * 设置标签类型
     */
    component: _propTypes2.default.elementType
}, _class.defaultProps = {
    component: 'article'
}, _temp);
Typography.displayName = 'Typography';
exports.default = Typography;
module.exports = exports['default'];