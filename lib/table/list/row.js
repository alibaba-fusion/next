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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _util = require('../../util');

var _row = require('../base/row');

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GroupListRow = (_temp = _class = function (_Row) {
    (0, _inherits3.default)(GroupListRow, _Row);

    function GroupListRow() {
        (0, _classCallCheck3.default)(this, GroupListRow);
        return (0, _possibleConstructorReturn3.default)(this, _Row.apply(this, arguments));
    }

    GroupListRow.prototype.render = function render() {
        var _classnames;

        /* eslint-disable no-unused-vars*/
        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            onClick = _props.onClick,
            onMouseEnter = _props.onMouseEnter,
            onMouseLeave = _props.onMouseLeave,
            columns = _props.columns,
            Cell = _props.Cell,
            rowIndex = _props.rowIndex,
            __rowIndex = _props.__rowIndex,
            record = _props.record,
            children = _props.children,
            primaryKey = _props.primaryKey,
            colGroup = _props.colGroup,
            cellRef = _props.cellRef,
            getCellProps = _props.getCellProps,
            locale = _props.locale,
            wrapper = _props.wrapper,
            rtl = _props.rtl,
            tableEl = _props.tableEl,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'className', 'onClick', 'onMouseEnter', 'onMouseLeave', 'columns', 'Cell', 'rowIndex', '__rowIndex', 'record', 'children', 'primaryKey', 'colGroup', 'cellRef', 'getCellProps', 'locale', 'wrapper', 'rtl', 'tableEl']);

        var cls = (0, _classnames3.default)((_classnames = {}, _classnames[prefix + 'table-row'] = true, _classnames[className] = className, _classnames));

        // clear notRenderCellIndex, incase of cached data
        this.context.notRenderCellIndex = [];

        return _react2.default.createElement(
            'table',
            (0, _extends3.default)({
                className: cls,
                role: 'row'
            }, others, {
                onClick: this.onClick,
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave
            }),
            colGroup,
            _react2.default.createElement(
                'tbody',
                null,
                this.renderContent('header'),
                this.renderChildren(),
                this.renderContent('footer')
            )
        );
    };

    GroupListRow.prototype.isChildrenSelection = function isChildrenSelection() {
        return this.context.listHeader && this.context.listHeader.hasChildrenSelection;
    };

    GroupListRow.prototype.isFirstLevelDataWhenNoChildren = function isFirstLevelDataWhenNoChildren() {
        return this.context.listHeader && this.context.listHeader.useFirstLevelDataWhenNoChildren;
    };

    GroupListRow.prototype.isSelection = function isSelection() {
        return this.context.listHeader && this.context.listHeader.hasSelection;
    };

    GroupListRow.prototype.renderChildren = function renderChildren() {
        var _this2 = this;

        var _props2 = this.props,
            record = _props2.record,
            primaryKey = _props2.primaryKey;
        var children = record.children;


        var toRenderList = children;
        if (this.isFirstLevelDataWhenNoChildren()) {
            _util.log.warning('useFirstLevelDataWhenNoChildren is deprecated, change your dataSource structure, make sure there is \'children\' in your dataSource.');

            toRenderList = children || [record];
        }

        if (toRenderList) {
            return toRenderList.map(function (child, index) {
                var cells = _this2.renderCells(child, index);
                if (_this2.isChildrenSelection()) {
                    if (!child[primaryKey]) {
                        _util.log.warning('record.children/recored should contains primaryKey when childrenSelection is true.');
                    }
                    return _react2.default.createElement(
                        'tr',
                        { key: child[primaryKey] },
                        cells
                    );
                }
                if (_this2.context.rowSelection) {
                    cells.shift();
                    cells[0] = cells[0] && _react2.default.cloneElement(cells[0], (0, _extends3.default)({
                        colSpan: 2
                    }, cells[0].props));
                }
                return _react2.default.createElement(
                    'tr',
                    { key: index },
                    cells
                );
            });
        }
        return null;
    };

    GroupListRow.prototype.renderContent = function renderContent(type) {
        var _props3 = this.props,
            columns = _props3.columns,
            prefix = _props3.prefix,
            record = _props3.record,
            rowIndex = _props3.rowIndex;

        var cameType = type.charAt(0).toUpperCase() + type.substr(1);
        var list = this.context['list' + cameType];
        var listNode = void 0;
        if (list) {
            if (_react2.default.isValidElement(list.cell)) {
                listNode = _react2.default.cloneElement(list.cell, {
                    record: record,
                    index: rowIndex
                });
            } else if (typeof list.cell === 'function') {
                listNode = list.cell(record, rowIndex);
            }
            if (listNode) {
                var cells = this.renderCells(record);
                if (type === 'header' && this.context.rowSelection && this.isSelection()) {
                    cells = cells.slice(0, 1);
                    cells.push(_react2.default.createElement(
                        'td',
                        { colSpan: columns.length - 1, key: 'listNode' },
                        _react2.default.createElement(
                            'div',
                            { className: prefix + 'table-cell-wrapper' },
                            listNode
                        )
                    ));
                    listNode = _react2.default.createElement(
                        'tr',
                        { className: prefix + 'table-group-' + type },
                        cells
                    );
                } else {
                    listNode = _react2.default.createElement(
                        'tr',
                        { className: prefix + 'table-group-' + type },
                        _react2.default.createElement(
                            'td',
                            { colSpan: columns.length },
                            _react2.default.createElement(
                                'div',
                                { className: prefix + 'table-cell-wrapper' },
                                listNode
                            )
                        )
                    );
                }
            }
        }
        return listNode;
    };

    return GroupListRow;
}(_row2.default), _class.contextTypes = {
    listHeader: _propTypes2.default.any,
    listFooter: _propTypes2.default.any,
    rowSelection: _propTypes2.default.object,
    notRenderCellIndex: _propTypes2.default.array,
    lockType: _propTypes2.default.oneOf(['left', 'right'])
}, _temp);
exports.default = GroupListRow;
module.exports = exports.default;
module.exports.default = exports.default;