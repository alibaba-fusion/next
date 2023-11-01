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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _checkableItem = require('./checkable-item');

var _checkableItem2 = _interopRequireDefault(_checkableItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Menu.CheckboxItem
 * @order 3
 * @description 该子组件选中情况不受 defaultSelectedKeys/selectedKeys 控制，请自行控制选中逻辑
 */
var CheckboxItem = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(CheckboxItem, _Component);

  function CheckboxItem() {
    (0, _classCallCheck3.default)(this, CheckboxItem);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  CheckboxItem.prototype.render = function render() {
    var _props = this.props,
        checkboxDisabled = _props.checkboxDisabled,
        others = (0, _objectWithoutProperties3.default)(_props, ['checkboxDisabled']);

    return _react2.default.createElement(_checkableItem2.default, (0, _extends3.default)({
      role: 'menuitemcheckbox',
      checkType: 'checkbox',
      checkDisabled: checkboxDisabled
    }, others));
  };

  return CheckboxItem;
}(_react.Component), _class.menuChildType = 'item', _class.propTypes = {
  /**
   * 是否选中
   */
  checked: _propTypes2.default.bool,
  /**
   * 是否半选中
   */
  indeterminate: _propTypes2.default.bool,
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
  children: _propTypes2.default.node,
  checkboxDisabled: _propTypes2.default.bool
}, _class.defaultProps = {
  checked: false,
  indeterminate: false,
  disabled: false,
  onChange: function onChange() {},
  checkboxDisabled: false
}, _temp);
CheckboxItem.displayName = 'CheckboxItem';
exports.default = CheckboxItem;
module.exports = exports['default'];