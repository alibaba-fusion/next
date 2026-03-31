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
 * Table.Column
 * @order 0
 **/
var Column = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(Column, _React$Component);

  function Column() {
    (0, _classCallCheck3.default)(this, Column);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  Column.prototype.render = function render() {
    return null;
  };

  return Column;
}(_react2.default.Component), _class.propTypes = {
  /**
   * 指定列对应的字段，支持`a.b`形式的快速取值
   */
  dataIndex: _propTypes2.default.string,
  /**
   * 行渲染的逻辑
   * value, rowIndex, record, context四个属性只可读不可被更改
   * Function(value, index, record) => Element
   */
  cell: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.node, _propTypes2.default.func]),
  /**
   * 表头显示的内容
   */
  title: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.node, _propTypes2.default.func]),
  /**
   * 写到 header 单元格上的title属性
   */
  htmlTitle: _propTypes2.default.string,
  /**
   * 是否支持排序
   */
  sortable: _propTypes2.default.bool,
  /**
   * 排序的方向。
   * 设置 ['desc', 'asc']，表示降序、升序
   * 设置 ['desc', 'asc', 'default']，表示表示降序、升序、不排序
   * @version 1.23
   */
  sortDirections: _propTypes2.default.arrayOf(_propTypes2.default.oneOf(['desc', 'asc', 'default'])),
  /**
   * 列宽，注意在锁列的情况下一定需要配置宽度
   */
  width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  /**
   * 单元格的对齐方式
   */
  align: _propTypes2.default.oneOf(['left', 'center', 'right']),
  /**
   * 单元格标题的对齐方式, 不配置默认读取align值
   */
  alignHeader: _propTypes2.default.oneOf(['left', 'center', 'right']),
  /**
   * 生成标题过滤的菜单, 格式为`[{label:'xxx', value:'xxx'}]`
   */
  filters: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string,
    value: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string])
  })),
  /**
   * 过滤的模式是单选还是多选
   */
  filterMode: _propTypes2.default.oneOf(['single', 'multiple']),
  /**
   * filter 模式下传递给 Menu 菜单的属性， 默认继承 `Menu` 组件的API
   * @property {Boolean} subMenuSelectable 默认为`false` subMenu是否可选择
   * @property {Boolean} isSelectIconRight 默认为`false` 是否将选中图标居右。注意：SubMenu 上的选中图标一直居左，不受此API控制
   */
  filterMenuProps: _propTypes2.default.object,
  filterProps: _propTypes2.default.object,
  /**
   * 是否支持锁列,可选值为`left`,`right`, `true`
   */
  lock: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  /**
   * 是否支持列宽调整, 当该值设为true，table的布局方式会修改为fixed.
   */
  resizable: _propTypes2.default.bool,
  /**
   * （推荐使用）是否支持异步列宽调整, 当该值设为true，table的布局方式会修改为fixed.
   * @version 1.24
   */
  asyncResizable: _propTypes2.default.bool,
  /**
   * header cell 横跨的格数，设置为0表示不出现此 th
   */
  colSpan: _propTypes2.default.number,
  /**
   * 设置该列单元格的word-break样式，对于id类、中文类适合用all，对于英文句子适合用word
   * @enumdesc all, word
   * @default all
   * @version 1.23
   */
  wordBreak: _propTypes2.default.oneOf(['all', 'word'])
}, _class.contextTypes = {
  parent: _propTypes2.default.any
}, _class.defaultProps = {
  cell: function cell(value) {
    return value;
  },
  filterMode: 'multiple',
  filterMenuProps: {
    subMenuSelectable: false
  },
  filterProps: {},
  resizable: false,
  asyncResizable: false
}, _class._typeMark = 'column', _temp);
Column.displayName = 'Column';
exports.default = Column;
module.exports = exports.default;
module.exports.default = exports.default;