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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _zhCn = require('../locale/zh-cn');

var _zhCn2 = _interopRequireDefault(_zhCn);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};
var pickOthers = _util.obj.pickOthers;
var Inner = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Inner, _Component);

    function Inner() {
        (0, _classCallCheck3.default)(this, Inner);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    Inner.prototype.renderHeader = function renderHeader() {
        var _cx;

        var _props = this.props,
            prefix = _props.prefix,
            title = _props.title,
            headerStyle = _props.headerStyle;

        var closeLink = this.renderCloseLink();
        var headerCls = (0, _classnames2.default)((_cx = {}, _cx[prefix + 'drawer-header'] = true, _cx[prefix + 'drawer-no-title'] = !title, _cx));

        return _react2.default.createElement(
            'div',
            {
                className: headerCls,
                style: headerStyle,
                role: 'heading',
                'aria-level': '1'
            },
            title,
            closeLink
        );
    };

    Inner.prototype.renderBody = function renderBody() {
        var _props2 = this.props,
            prefix = _props2.prefix,
            children = _props2.children,
            bodyStyle = _props2.bodyStyle;

        if (children) {
            return _react2.default.createElement(
                'div',
                { className: prefix + 'drawer-body', style: bodyStyle },
                children
            );
        }
        return null;
    };

    Inner.prototype.renderCloseLink = function renderCloseLink() {
        var _props3 = this.props,
            prefix = _props3.prefix,
            closeable = _props3.closeable,
            onClose = _props3.onClose,
            locale = _props3.locale;


        if (closeable) {
            return _react2.default.createElement(
                'a',
                {
                    role: 'button',
                    'aria-label': locale.close,
                    className: prefix + 'drawer-close',
                    onClick: onClose
                },
                _react2.default.createElement(_icon2.default, {
                    className: prefix + 'drawer-close-icon',
                    type: 'close'
                })
            );
        }

        return null;
    };

    Inner.prototype.render = function render() {
        var _cx2;

        var _props4 = this.props,
            prefix = _props4.prefix,
            className = _props4.className,
            closeable = _props4.closeable,
            placement = _props4.placement,
            role = _props4.role,
            rtl = _props4.rtl;


        var others = pickOthers(Object.keys(Inner.propTypes), this.props);
        var newClassName = (0, _classnames2.default)((_cx2 = {}, _cx2[prefix + 'drawer'] = true, _cx2[prefix + 'drawer-' + placement] = true, _cx2[prefix + 'closeable'] = closeable, _cx2[className] = !!className, _cx2));

        var ariaProps = {
            role: role,
            'aria-modal': 'true'
        };

        var header = this.renderHeader();
        var body = this.renderBody();

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({}, ariaProps, {
                className: newClassName
            }, others, {
                dir: rtl ? 'rtl' : undefined
            }),
            _react2.default.createElement(
                'div',
                { style: { height: '100%', overflow: 'auto' } },
                header,
                body
            )
        );
    };

    return Inner;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    className: _propTypes2.default.string,
    closeable: _propTypes2.default.bool,
    role: _propTypes2.default.string,
    title: _propTypes2.default.string,
    placement: _propTypes2.default.oneOf(['top', 'right', 'bottom', 'left']),
    rtl: _propTypes2.default.bool,
    onClose: _propTypes2.default.func,
    locale: _propTypes2.default.object,
    headerStyle: _propTypes2.default.object,
    bodyStyle: _propTypes2.default.object,
    afterClose: _propTypes2.default.func,
    beforeOpen: _propTypes2.default.func,
    beforeClose: _propTypes2.default.func,
    cache: _propTypes2.default.bool,
    shouldUpdatePosition: _propTypes2.default.bool
}, _class.defaultProps = {
    prefix: 'next-',
    closeable: true,
    role: 'dialog',
    onClose: noop,
    locale: _zhCn2.default.Drawer
}, _temp);
Inner.displayName = 'Inner';
exports.default = Inner;
module.exports = exports['default'];