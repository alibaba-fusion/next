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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _affix = require('../../affix');

var _affix2 = _interopRequireDefault(_affix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/prefer-stateless-function*/
var StickHeader = (_temp2 = _class = function (_React$Component) {
    (0, _inherits3.default)(StickHeader, _React$Component);

    function StickHeader() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, StickHeader);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.getAffixRef = function (ref) {
            _this.props.affixRef && _this.props.affixRef(ref);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    StickHeader.prototype.render = function render() {
        var _classnames;

        var prefix = this.props.prefix;
        var _context = this.context,
            Header = _context.Header,
            offsetTop = _context.offsetTop,
            affixProps = _context.affixProps;


        var newAffixProps = affixProps || {};
        var className = newAffixProps.className,
            others = (0, _objectWithoutProperties3.default)(newAffixProps, ['className']);

        var cls = (0, _classnames3.default)((_classnames = {}, _classnames[prefix + 'table-affix'] = true, _classnames.className = className, _classnames));

        return _react2.default.createElement(
            _affix2.default,
            (0, _extends3.default)({ ref: this.getAffixRef }, others, { className: cls, offsetTop: offsetTop }),
            _react2.default.createElement(Header, this.props)
        );
    };

    return StickHeader;
}(_react2.default.Component), _class.propTypes = {
    prefix: _propTypes2.default.string
}, _class.contextTypes = {
    Header: _propTypes2.default.any,
    offsetTop: _propTypes2.default.number,
    affixProps: _propTypes2.default.object
}, _temp2);
StickHeader.displayName = 'StickHeader';
exports.default = StickHeader;
module.exports = exports.default;
module.exports.default = exports.default;