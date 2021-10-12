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
 * Select.OptionGroup
 */
var OptionGroup = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(OptionGroup, _React$Component);

    function OptionGroup() {
        (0, _classCallCheck3.default)(this, OptionGroup);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }

    OptionGroup.prototype.render = function render() {
        return this.props.children;
    };

    return OptionGroup;
}(_react2.default.Component), _class.propTypes = {
    /**
     * 设置分组的文案
     */
    label: _propTypes2.default.node,
    children: _propTypes2.default.any
}, _class._typeMark = 'next_select_option_group', _temp);
OptionGroup.displayName = 'OptionGroup';
exports.default = OptionGroup;
module.exports = exports['default'];