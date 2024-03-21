'use strict';

exports.__esModule = true;
exports.default = undefined;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore file */
/**
 * Table.GroupFooter
 * @order 3
 **/
var ListFooter = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(ListFooter, _React$Component);

    function ListFooter() {
        (0, _classCallCheck3.default)(this, ListFooter);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }

    ListFooter.prototype.render = function render() {
        return null;
    };

    return ListFooter;
}(_react2.default.Component), _class.propTypes = {
    /**
     * 行渲染的逻辑
     */
    cell: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.node, _propTypes2.default.func])
}, _class.defaultProps = {
    cell: function cell() {
        return '';
    }
}, _class._typeMark = 'listFooter', _temp);
ListFooter.displayName = 'ListFooter';
exports.default = ListFooter;
module.exports = exports.default;
module.exports.default = exports.default;