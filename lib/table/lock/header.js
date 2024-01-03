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

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _header = require('../fixed/header');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LockHeader = (_temp = _class = function (_FixedHeader) {
    (0, _inherits3.default)(LockHeader, _FixedHeader);

    function LockHeader() {
        (0, _classCallCheck3.default)(this, LockHeader);
        return (0, _possibleConstructorReturn3.default)(this, _FixedHeader.apply(this, arguments));
    }

    LockHeader.prototype.componentDidMount = function componentDidMount() {
        var _context = this.context,
            getNode = _context.getNode,
            getLockNode = _context.getLockNode;

        getNode && getNode('header', (0, _reactDom.findDOMNode)(this), this.context.lockType);
        getLockNode && getLockNode('header', (0, _reactDom.findDOMNode)(this), this.context.lockType);
    };

    return LockHeader;
}(_header2.default), _class.propTypes = (0, _extends3.default)({}, _header2.default.propTypes), _class.contextTypes = (0, _extends3.default)({}, _header2.default.contextTypes, {
    getLockNode: _propTypes2.default.func,
    lockType: _propTypes2.default.oneOf(['left', 'right'])
}), _temp);
exports.default = LockHeader;
module.exports = exports.default;
module.exports.default = exports.default;