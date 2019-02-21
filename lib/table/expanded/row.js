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

var _util = require('../../util');

var _row = require('../lock/row');

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExpandedRow = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(ExpandedRow, _React$Component);

    function ExpandedRow() {
        (0, _classCallCheck3.default)(this, ExpandedRow);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }

    ExpandedRow.prototype.renderExpandedRow = function renderExpandedRow(record, index, colSpan) {
        var _context = this.context,
            expandedRowRender = _context.expandedRowRender,
            expandedRowIndent = _context.expandedRowIndent,
            openRowKeys = _context.openRowKeys,
            lockType = _context.lockType,
            expandedIndexSimulate = _context.expandedIndexSimulate;


        var expandedIndex = expandedIndexSimulate ? (index - 1) / 2 : index;
        var _props = this.props,
            columns = _props.columns,
            cellRef = _props.cellRef;

        if (expandedRowRender) {
            var _props2 = this.props,
                primaryKey = _props2.primaryKey,
                prefix = _props2.prefix,
                leftIndent = expandedRowIndent[0],
                rightIndent = expandedRowIndent[1],
                totalIndent = leftIndent + rightIndent,
                renderCols = function renderCols(number) {
                var ret = [];

                var _loop = function _loop(i) {
                    ret.push(_react2.default.createElement(
                        'td',
                        { key: i, ref: function ref(cell) {
                                return cellRef(index, i, cell);
                            } },
                        '\xA0'
                    ));
                };

                for (var i = 0; i < number; i++) {
                    _loop(i);
                }
                return ret;
            };

            var content = void 0;

            if (totalIndent > colSpan && !lockType) {
                _util.log.warning('It\'s not allowed expandedRowIndent is more than the number of columns.');
            }
            if (leftIndent < columns.length && lockType === 'left') {
                _util.log.warning('expandedRowIndent left is less than the number of left lock columns.');
            }
            if (rightIndent < columns.length && lockType === 'right') {
                _util.log.warning('expandedRowIndent right is less than the number of right lock columns.');
            }
            if (lockType) {
                return openRowKeys.indexOf(record[primaryKey]) > -1 ? _react2.default.createElement(
                    'tr',
                    { className: prefix + 'table-expanded-row', key: 'expanded-' + index },
                    _react2.default.createElement(
                        'td',
                        { colSpan: colSpan, ref: function ref(cell) {
                                return cellRef(index, 0, cell);
                            } },
                        '\xA0'
                    )
                ) : null;
            }
            content = expandedRowRender(record, expandedIndex);
            if (!_react2.default.isValidElement(content)) {
                content = _react2.default.createElement(
                    'div',
                    { className: prefix + 'table-cell-wrapper' },
                    content
                );
            }
            return openRowKeys.indexOf(record[primaryKey]) > -1 ? _react2.default.createElement(
                'tr',
                { className: prefix + 'table-expanded-row', key: 'expanded-' + (record[primaryKey] || index) },
                renderCols(leftIndent),
                _react2.default.createElement(
                    'td',
                    { colSpan: colSpan - totalIndent },
                    content
                ),
                renderCols(rightIndent)
            ) : null;
        } else {
            return null;
        }
    };

    ExpandedRow.prototype.render = function render() {
        /* eslint-disable no-unused-vars*/
        var _props3 = this.props,
            record = _props3.record,
            rowIndex = _props3.rowIndex,
            columns = _props3.columns;

        if (record.__expanded) {
            return this.renderExpandedRow(record, rowIndex, columns.length);
        }
        return _react2.default.createElement(_row2.default, this.props);
    };

    return ExpandedRow;
}(_react2.default.Component), _class.propTypes = (0, _extends3.default)({}, _row2.default.propTypes), _class.defaultProps = (0, _extends3.default)({}, _row2.default.defaultProps), _class.contextTypes = {
    openRowKeys: _propTypes2.default.array,
    expandedRowRender: _propTypes2.default.func,
    expandedRowIndent: _propTypes2.default.array,
    expandedIndexSimulate: _propTypes2.default.bool,
    lockType: _propTypes2.default.oneOf(['left', 'right'])
}, _temp);
ExpandedRow.displayName = 'ExpandedRow';
exports.default = ExpandedRow;
module.exports = exports['default'];