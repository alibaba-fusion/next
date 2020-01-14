'use strict';

exports.__esModule = true;

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Divider
 */
var Divider = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Divider, _Component);

    function Divider() {
        (0, _classCallCheck3.default)(this, Divider);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    Divider.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            dashed = _props.dashed,
            direction = _props.direction,
            orientation = _props.orientation,
            children = _props.children;

        var others = _util.obj.pickOthers(Divider.propTypes, this.props);

        var cls = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'divider'] = true, _classNames[prefix + 'divider-dashed'] = !!dashed, _classNames[prefix + 'divider-' + direction] = !!direction, _classNames[prefix + 'divider-with-text-' + orientation] = !!orientation && children, _classNames), className);

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({ role: 'separator', className: cls }, others),
            children && _react2.default.createElement(
                'span',
                { className: prefix + 'divider-inner-text' },
                children
            )
        );
    };

    return Divider;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    children: _propTypes2.default.any,
    className: _propTypes2.default.string,
    /**
     * 是否为虚线
     */
    dashed: _propTypes2.default.bool,
    /**
     * 线是水平还是垂直类型
     */
    direction: _propTypes2.default.oneOf(['hoz', 'ver']),
    /**
     * 分割线标题的位置
     */
    orientation: _propTypes2.default.oneOf(['left', 'right', 'center'])
}, _class.defaultProps = {
    prefix: 'next-',
    direction: 'hoz',
    orientation: 'center',
    dashed: false
}, _temp);
Divider.displayName = 'Divider';
exports.default = _configProvider2.default.config((0, _reactLifecyclesCompat.polyfill)(Divider));
module.exports = exports['default'];