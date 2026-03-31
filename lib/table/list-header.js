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
 * Table.GroupHeader
 * @order 2
 **/
var ListHeader = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(ListHeader, _React$Component);

  function ListHeader() {
    (0, _classCallCheck3.default)(this, ListHeader);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  ListHeader.prototype.render = function render() {
    return null;
  };

  return ListHeader;
}(_react2.default.Component), _class.propTypes = {
  /**
   * 行渲染的逻辑
   */
  cell: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.node, _propTypes2.default.func]),
  /**
   * 是否在Children上面渲染selection
   */
  hasChildrenSelection: _propTypes2.default.bool,
  /**
   * 是否在GroupHeader上面渲染selection
   */
  hasSelection: _propTypes2.default.bool,
  /**
   * 当 dataSouce 里没有 children 时，是否使用内容作为数据
   */
  useFirstLevelDataWhenNoChildren: _propTypes2.default.bool
}, _class.defaultProps = {
  cell: function cell() {
    return '';
  },
  hasSelection: true,
  hasChildrenSelection: false,
  useFirstLevelDataWhenNoChildren: false
}, _class._typeMark = 'listHeader', _temp);
ListHeader.displayName = 'ListHeader';
exports.default = ListHeader;
module.exports = exports.default;
module.exports.default = exports.default;