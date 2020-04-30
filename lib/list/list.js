'use strict';

exports.__esModule = true;

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

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * List
 */
var List = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(List, _Component);

    function List() {
        (0, _classCallCheck3.default)(this, List);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    List.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            prefix = _props.prefix,
            header = _props.header,
            footer = _props.footer,
            size = _props.size,
            divider = _props.divider,
            className = _props.className,
            children = _props.children,
            rtl = _props.rtl,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'header', 'footer', 'size', 'divider', 'className', 'children', 'rtl']);


        if (rtl) {
            others.dir = 'rtl';
        }

        var classes = (0, _classnames2.default)(prefix + 'list', (_classNames = {}, _classNames[prefix + 'list-small'] = size === 'small', _classNames[prefix + 'list-divider'] = divider, _classNames), className);

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({}, others, { className: classes }),
            header ? _react2.default.createElement(
                'div',
                { className: prefix + 'list-header' },
                header
            ) : null,
            _react2.default.createElement(
                'ul',
                { className: prefix + 'list-items' },
                children
            ),
            footer ? _react2.default.createElement(
                'div',
                { className: prefix + 'list-footer' },
                footer
            ) : null
        );
    };

    return List;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    /**
     * 列表头部
     */
    header: _propTypes2.default.node,
    /**
     * 列表尾部
     */
    footer: _propTypes2.default.node,
    /**
     * 列表尺寸
     */
    size: _propTypes2.default.oneOf(['medium', 'small']),
    /**
     * 是否显示分割线
     */
    divider: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    children: _propTypes2.default.any
}, _class.defaultProps = {
    rtl: false,
    size: 'medium',
    divider: true,
    prefix: 'next-'
}, _temp);
List.displayName = 'List';
exports.default = _configProvider2.default.config((0, _reactLifecyclesCompat.polyfill)(List));
module.exports = exports['default'];