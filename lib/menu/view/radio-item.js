'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _checkableItem = require('./checkable-item');

var _checkableItem2 = _interopRequireDefault(_checkableItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Menu.RadioItem
 * @order 4
 * @description 该子组件选中情况不受 defaultSelectedKeys/selectedKeys 控制，请自行控制选中逻辑
 */
var RadioItem = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(RadioItem, _Component);

  function RadioItem() {
    (0, _classCallCheck3.default)(this, RadioItem);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  RadioItem.prototype.render = function render() {
    return _react2.default.createElement(_checkableItem2.default, (0, _extends3.default)({
      role: 'menuitemradio',
      checkType: 'radio'
    }, this.props));
  };

  return RadioItem;
}(_react.Component), _class.menuChildType = 'item', _class.propTypes = {
  /**
   * 是否选中
   */
  checked: _propTypes2.default.bool,
  /**
   * 是否禁用
   */
  disabled: _propTypes2.default.bool,
  /**
   * 选中或取消选中触发的回调函数
   * @param {Boolean} checked 是否选中
   * @param {Object} event 选中事件对象
   */
  onChange: _propTypes2.default.func,
  /**
   * 帮助文本
   */
  helper: _propTypes2.default.node,
  /**
   * 标签内容
   */
  children: _propTypes2.default.node
}, _class.defaultProps = {
  checked: false,
  disabled: false,
  onChange: function onChange() {}
}, _temp);
RadioItem.displayName = 'RadioItem';
exports.default = RadioItem;
module.exports = exports['default'];