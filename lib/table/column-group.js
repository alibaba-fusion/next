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

/**
 * Table.ColumnGroup
 * @order 1
 **/
var ColumnGroup = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(ColumnGroup, _React$Component);

    function ColumnGroup() {
        (0, _classCallCheck3.default)(this, ColumnGroup);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }

    ColumnGroup.prototype.getChildContext = function getChildContext() {
        return {
            parent: this
        };
    };

    ColumnGroup.prototype.render = function render() {
        return null;
    };

    return ColumnGroup;
}(_react2.default.Component), _class.propTypes = {
    /**
     * 表头显示的内容
     */
    title: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.node, _propTypes2.default.func])
}, _class.childContextTypes = {
    parent: _propTypes2.default.any
}, _class.defaultProps = {
    title: 'column-group'
}, _class._typeMark = 'columnGroup', _temp);
ColumnGroup.displayName = 'ColumnGroup';
exports.default = ColumnGroup;
module.exports = exports['default'];