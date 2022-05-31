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

var _row = require('../selection/row');

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/prefer-stateless-function */
var TreeRow = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(TreeRow, _React$Component);

    function TreeRow() {
        (0, _classCallCheck3.default)(this, TreeRow);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }

    TreeRow.prototype.render = function render() {
        var _classnames;

        /* eslint-disable no-unused-vars*/
        var _props = this.props,
            className = _props.className,
            record = _props.record,
            primaryKey = _props.primaryKey,
            prefix = _props.prefix,
            others = (0, _objectWithoutProperties3.default)(_props, ['className', 'record', 'primaryKey', 'prefix']);
        var _context = this.context,
            treeStatus = _context.treeStatus,
            openRowKeys = _context.openRowKeys;

        var cls = (0, _classnames3.default)((_classnames = {
            hidden: !(treeStatus.indexOf(record[primaryKey]) > -1) && record.__level !== 0
        }, _classnames[prefix + 'table-row-level-' + record.__level] = true, _classnames.opened = openRowKeys.indexOf(record[primaryKey]) > -1, _classnames[className] = className, _classnames));
        return _react2.default.createElement(_row2.default, (0, _extends3.default)({}, others, {
            record: record,
            className: cls,
            primaryKey: primaryKey,
            prefix: prefix
        }));
    };

    return TreeRow;
}(_react2.default.Component), _class.propTypes = (0, _extends3.default)({}, _row2.default.propTypes), _class.defaultProps = (0, _extends3.default)({}, _row2.default.defaultProps), _class.contextTypes = {
    treeStatus: _propTypes2.default.array,
    openRowKeys: _propTypes2.default.array
}, _temp);
TreeRow.displayName = 'TreeRow';
exports.default = TreeRow;
module.exports = exports['default'];