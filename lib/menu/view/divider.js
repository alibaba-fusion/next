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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Menu.Divider
 * @order 6
 */
var Divider = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Divider, _Component);

    function Divider() {
        (0, _classCallCheck3.default)(this, Divider);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    Divider.prototype.render = function render() {
        var _cx;

        var _props = this.props,
            root = _props.root,
            className = _props.className,
            others = (0, _objectWithoutProperties3.default)(_props, ['root', 'className']);
        var prefix = root.props.prefix;


        var newClassName = (0, _classnames2.default)((_cx = {}, _cx[prefix + 'menu-divider'] = true, _cx[className] = !!className, _cx));

        return _react2.default.createElement('li', (0, _extends3.default)({ role: 'separator', className: newClassName }, others));
    };

    return Divider;
}(_react.Component), _class.menuChildType = 'divider', _class.propTypes = {
    root: _propTypes2.default.object,
    className: _propTypes2.default.string
}, _temp);
Divider.displayName = 'Divider';
exports.default = Divider;
module.exports = exports['default'];