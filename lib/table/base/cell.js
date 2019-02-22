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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cell = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(Cell, _React$Component);

    function Cell() {
        (0, _classCallCheck3.default)(this, Cell);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }

    Cell.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        if (nextProps.pure) {
            var isEqual = _util.obj.shallowEqual(this.props, nextProps);
            return !isEqual;
        }
        return true;
    };

    Cell.prototype.render = function render() {
        var _classnames;

        /* eslint-disable no-unused-vars */
        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            cell = _props.cell,
            value = _props.value,
            resizable = _props.resizable,
            colIndex = _props.colIndex,
            rowIndex = _props.rowIndex,
            record = _props.record,
            context = _props.context,
            align = _props.align,
            _props$style = _props.style,
            style = _props$style === undefined ? {} : _props$style,
            Tag = _props.component,
            children = _props.children,
            title = _props.title,
            width = _props.width,
            innerStyle = _props.innerStyle,
            primaryKey = _props.primaryKey,
            __normalized = _props.__normalized,
            filterMode = _props.filterMode,
            filters = _props.filters,
            sortable = _props.sortable,
            lock = _props.lock,
            pure = _props.pure,
            locale = _props.locale,
            expandedIndexSimulate = _props.expandedIndexSimulate,
            rtl = _props.rtl,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'className', 'cell', 'value', 'resizable', 'colIndex', 'rowIndex', 'record', 'context', 'align', 'style', 'component', 'children', 'title', 'width', 'innerStyle', 'primaryKey', '__normalized', 'filterMode', 'filters', 'sortable', 'lock', 'pure', 'locale', 'expandedIndexSimulate', 'rtl']);

        var tagStyle = (0, _extends3.default)({}, style);
        var cellProps = { value: value, index: rowIndex, record: record, context: context };
        var content = cell;
        if (_react2.default.isValidElement(content)) {
            content = _react2.default.cloneElement(content, cellProps);
        } else if (typeof content === 'function') {
            content = content(value, rowIndex, record, context);
        }
        if (align) {
            tagStyle.textAlign = align;
            if (rtl) {
                tagStyle.textAlign = align === 'left' ? 'right' : align === 'right' ? 'left' : align;
            }
        }
        var cls = (0, _classnames3.default)((_classnames = {}, _classnames[prefix + 'table-cell'] = true, _classnames[className] = className, _classnames));

        return _react2.default.createElement(
            Tag,
            (0, _extends3.default)({}, others, { className: cls, style: tagStyle, role: 'gridcell' }),
            _react2.default.createElement(
                'div',
                { className: prefix + 'table-cell-wrapper', style: innerStyle },
                content,
                children
            )
        );
    };

    return Cell;
}(_react2.default.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    pure: _propTypes2.default.bool,
    primaryKey: _propTypes2.default.string,
    className: _propTypes2.default.string,
    record: _propTypes2.default.any,
    value: _propTypes2.default.any,
    colIndex: _propTypes2.default.number,
    rowIndex: _propTypes2.default.number,
    title: _propTypes2.default.any,
    width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    context: _propTypes2.default.any,
    cell: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.node, _propTypes2.default.func]),
    align: _propTypes2.default.oneOf(['left', 'center', 'right']),
    component: _propTypes2.default.oneOf(['td', 'th', 'div']),
    children: _propTypes2.default.any,
    style: _propTypes2.default.object,
    innerStyle: _propTypes2.default.object,
    filterMode: _propTypes2.default.oneOf(['single', 'multiple']),
    filters: _propTypes2.default.array,
    sortable: _propTypes2.default.bool,
    lock: _propTypes2.default.any,
    type: _propTypes2.default.oneOf(['header', 'body']),
    resizable: _propTypes2.default.bool,
    __normalized: _propTypes2.default.bool
}, _class.defaultProps = {
    component: 'td',
    type: 'body',
    cell: function cell(value) {
        return value;
    },
    prefix: 'next-'
}, _temp);
Cell.displayName = 'Cell';
exports.default = Cell;
module.exports = exports['default'];