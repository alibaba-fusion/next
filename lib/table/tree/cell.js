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

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

var _util = require('../../util');

var _cell = require('../base/cell');

var _cell2 = _interopRequireDefault(_cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TreeCell = (_temp2 = _class = function (_React$Component) {
    (0, _inherits3.default)(TreeCell, _React$Component);

    function TreeCell() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, TreeCell);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onTreeNodeClick = function (record, e) {
            e.stopPropagation();
            _this.context.onTreeNodeClick(record);
        }, _this.expandedKeydown = function (record, e) {
            e.preventDefault();
            e.stopPropagation();

            if (e.keyCode === _util.KEYCODE.ENTER) {
                _this.onTreeNodeClick(record, e);
            }
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    TreeCell.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            colIndex = _props.colIndex,
            record = _props.record,
            prefix = _props.prefix,
            primaryKey = _props.primaryKey,
            locale = _props.locale,
            rtl = _props.rtl,
            children = _props.children;
        var _context = this.context,
            openRowKeys = _context.openTreeRowKeys,
            indent = _context.indent,
            isTree = _context.isTree,
            rowSelection = _context.rowSelection;

        var treeArrowNodeIndex = rowSelection ? 1 : 0;
        var firstCellStyle = void 0,
            treeArrowNode = void 0;
        if (colIndex === treeArrowNodeIndex) {
            var treeArrowType = void 0;
            if (isTree) {
                var _firstCellStyle;

                var paddingType = rtl ? 'paddingRight' : 'paddingLeft';
                firstCellStyle = (_firstCellStyle = {}, _firstCellStyle[paddingType] = indent * (record.__level + 1), _firstCellStyle);
                treeArrowNode = _react2.default.createElement(_icon2.default, { size: 'xs', rtl: rtl, className: prefix + 'table-tree-placeholder', type: 'arrow-right' });
                if (record.children && record.children.length) {
                    var hasExpanded = openRowKeys.indexOf(record[primaryKey]) > -1;

                    treeArrowType = hasExpanded ? 'arrow-down' : 'arrow-right';

                    treeArrowNode = _react2.default.createElement(_icon2.default, {
                        className: prefix + 'table-tree-arrow',
                        type: treeArrowType,
                        size: 'xs',
                        rtl: rtl,
                        onClick: function onClick(e) {
                            return _this2.onTreeNodeClick(record, e);
                        },
                        onKeyDown: function onKeyDown(e) {
                            return _this2.expandedKeydown(record, e);
                        },
                        role: 'button',
                        tabIndex: '0',
                        'aria-expanded': hasExpanded,
                        'aria-label': hasExpanded ? locale.expanded : locale.folded
                    });
                }
            }
        }
        return _react2.default.createElement(
            _cell2.default,
            (0, _extends3.default)({}, this.props, { innerStyle: firstCellStyle, isIconLeft: !!treeArrowNode }),
            children,
            treeArrowNode
        );
    };

    return TreeCell;
}(_react2.default.Component), _class.propTypes = (0, _extends3.default)({
    indent: _propTypes2.default.number,
    locale: _propTypes2.default.object
}, _cell2.default.propTypes), _class.defaultProps = (0, _extends3.default)({}, _cell2.default.defaultProps, {
    component: 'td',
    indent: 20
}), _class.contextTypes = {
    openTreeRowKeys: _propTypes2.default.array,
    indent: _propTypes2.default.number,
    onTreeNodeClick: _propTypes2.default.func,
    isTree: _propTypes2.default.bool,
    rowSelection: _propTypes2.default.object
}, _temp2);
TreeCell.displayName = 'TreeCell';
exports.default = TreeCell;
module.exports = exports.default;
module.exports.default = exports.default;