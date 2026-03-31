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

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = require('../../util');

var _row = require('../lock/row');

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExpandedRow = (_temp2 = _class = function (_React$Component) {
    (0, _inherits3.default)(ExpandedRow, _React$Component);

    function ExpandedRow() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ExpandedRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.getExpandedRow = function (parentKey, ref) {
            var getExpandedRowRef = _this.context.getExpandedRowRef;

            getExpandedRowRef && getExpandedRowRef(parentKey, ref);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    ExpandedRow.prototype.renderExpandedRow = function renderExpandedRow(record, rowIndex) {
        var _context = this.context,
            expandedRowRender = _context.expandedRowRender,
            expandedRowIndent = _context.expandedRowIndent,
            openRowKeys = _context.openRowKeys,
            lockType = _context.lockType,
            expandedIndexSimulate = _context.expandedIndexSimulate,
            expandedRowWidthEquals2Table = _context.expandedRowWidthEquals2Table;

        var expandedIndex = expandedIndexSimulate ? (rowIndex - 1) / 2 : rowIndex;

        var _props = this.props,
            columns = _props.columns,
            cellRef = _props.cellRef;

        var colSpan = columns.length;
        var expandedCols = columns[0] && columns[0].__colIndex || 0;

        if (expandedRowRender) {
            var _props2 = this.props,
                primaryKey = _props2.primaryKey,
                prefix = _props2.prefix,
                leftIndent = expandedRowIndent[0],
                rightIndent = expandedRowIndent[1],
                totalIndent = leftIndent + rightIndent,
                renderCols = function renderCols(number) {
                var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

                var ret = [];

                var _loop = function _loop(i) {
                    ret.push(_react2.default.createElement(
                        'td',
                        { key: i, ref: function ref(cell) {
                                return cellRef(rowIndex, i + start, cell);
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
                _util.log.warning("It's not allowed expandedRowIndent is more than the number of columns.");
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
                    { className: prefix + 'table-expanded-row', key: 'expanded-' + expandedIndex },
                    _react2.default.createElement(
                        'td',
                        { colSpan: colSpan, ref: function ref(cell) {
                                return cellRef(rowIndex, expandedCols, cell);
                            } },
                        '\xA0'
                    )
                ) : null;
            }

            var expandedRowStyle = {
                position: 'sticky',
                left: 0
            };
            // 暴露给用户的index
            content = expandedRowRender(record, expandedIndex);
            if (!_react2.default.isValidElement(content)) {
                content = _react2.default.createElement(
                    'div',
                    {
                        className: prefix + 'table-cell-wrapper',
                        ref: this.getExpandedRow.bind(this, record[primaryKey]),
                        style: expandedRowWidthEquals2Table && expandedRowStyle
                    },
                    content
                );
            } else {
                content = expandedRowWidthEquals2Table ? _react2.default.createElement(
                    'div',
                    {
                        className: prefix + 'table-expanded-area',
                        ref: this.getExpandedRow.bind(this, record[primaryKey]),
                        style: expandedRowStyle
                    },
                    content
                ) : content;
            }

            var rightStart = columns.length;
            columns.forEach(function (col) {
                col.lock === 'right' && rightStart--;
            });
            return openRowKeys.indexOf(record[primaryKey]) > -1 ? _react2.default.createElement(
                'tr',
                { className: prefix + 'table-expanded-row', key: 'expanded-' + (record[primaryKey] || expandedIndex) },
                renderCols(leftIndent),
                _react2.default.createElement(
                    'td',
                    { colSpan: colSpan - totalIndent },
                    content
                ),
                renderCols(rightIndent, rightStart)
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
            columns = _props3.columns,
            others = (0, _objectWithoutProperties3.default)(_props3, ['record', 'rowIndex', 'columns']);
        var expandedIndexSimulate = this.context.expandedIndexSimulate;


        if (record.__expanded) {
            return this.renderExpandedRow(record, rowIndex, columns);
        }

        var newRowIndex = expandedIndexSimulate ? rowIndex / 2 : rowIndex;
        return _react2.default.createElement(_row2.default, (0, _extends3.default)({}, others, { record: record, columns: columns, __rowIndex: rowIndex, rowIndex: newRowIndex }));
    };

    return ExpandedRow;
}(_react2.default.Component), _class.propTypes = (0, _extends3.default)({}, _row2.default.propTypes), _class.defaultProps = (0, _extends3.default)({}, _row2.default.defaultProps), _class.contextTypes = {
    openRowKeys: _propTypes2.default.array,
    expandedRowRender: _propTypes2.default.func,
    expandedRowIndent: _propTypes2.default.array,
    expandedIndexSimulate: _propTypes2.default.bool,
    expandedRowWidthEquals2Table: _propTypes2.default.bool,
    lockType: _propTypes2.default.oneOf(['left', 'right']),
    getExpandedRowRef: _propTypes2.default.func
}, _temp2);
ExpandedRow.displayName = 'ExpandedRow';
exports.default = ExpandedRow;
module.exports = exports.default;
module.exports.default = exports.default;