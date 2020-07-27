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

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pickOthers = _util.obj.pickOthers;
/**
 * ResponsiveGrid.Cell
 */

var Cell = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Cell, _Component);

    function Cell() {
        (0, _classCallCheck3.default)(this, Cell);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    Cell.prototype.render = function render() {
        var _props = this.props,
            View = _props.component,
            children = _props.children;


        var others = pickOthers(Object.keys(Cell.propTypes), this.props);

        return _react2.default.createElement(
            View,
            others,
            children
        );
    };

    return Cell;
}(_react.Component), _class._typeMark = 'responsive_grid_cell', _class.propTypes = {
    device: _propTypes2.default.oneOf(['phone', 'tablet', 'desktop']),
    /**
     * 横向，占据几列
     */
    colSpan: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.object]),
    /**
     * 纵向，占据几行
     */
    rowSpan: _propTypes2.default.number,
    /**
     * 设置标签类型
     */
    component: _propTypes2.default.elementType
}, _class.defaultProps = {
    component: 'div',
    device: 'desktop'
}, _temp);
Cell.displayName = 'Cell';
exports.default = _configProvider2.default.config(Cell);
module.exports = exports['default'];