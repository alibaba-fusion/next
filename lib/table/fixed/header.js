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

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _header = require('../base/header');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/prefer-stateless-function */
var FixedHeader = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(FixedHeader, _React$Component);

    function FixedHeader() {
        (0, _classCallCheck3.default)(this, FixedHeader);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }

    FixedHeader.prototype.componentDidMount = function componentDidMount() {
        this.context.getNode('header', (0, _reactDom.findDOMNode)(this));
    };

    // 这里的 style={{overflow: 'unset'}} 可以删掉，只是为了解决用户js升级但是样式没升级的情况
    // 这里的 style={{position: 'absolute', right: 0}} 也可以删掉，是为了兼容用户js升级但是样式没升级的情况


    FixedHeader.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            colGroup = _props.colGroup,
            tableWidth = _props.tableWidth,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'className', 'colGroup', 'tableWidth']);
        var _context = this.context,
            onFixedScrollSync = _context.onFixedScrollSync,
            lockType = _context.lockType;


        return _react2.default.createElement(
            'div',
            { className: className, onScroll: onFixedScrollSync },
            _react2.default.createElement(
                'div',
                { className: prefix + 'table-header-inner', style: { overflow: 'unset' } },
                _react2.default.createElement(
                    'table',
                    { style: { width: tableWidth } },
                    colGroup,
                    _react2.default.createElement(_header2.default, (0, _extends3.default)({}, others, { prefix: prefix }))
                )
            ),
            !lockType && _react2.default.createElement('div', { className: prefix + 'table-header-fixer', style: { position: 'absolute', right: 0 } })
        );
    };

    return FixedHeader;
}(_react2.default.Component), _class.propTypes = {
    children: _propTypes2.default.any,
    prefix: _propTypes2.default.string,
    className: _propTypes2.default.string,
    colGroup: _propTypes2.default.any,
    tableWidth: _propTypes2.default.number
}, _class.contextTypes = {
    getNode: _propTypes2.default.func,
    onFixedScrollSync: _propTypes2.default.func,
    lockType: _propTypes2.default.oneOf(['left', 'right'])
}, _temp);
FixedHeader.displayName = 'FixedHeader';
exports.default = FixedHeader;
module.exports = exports.default;
module.exports.default = exports.default;