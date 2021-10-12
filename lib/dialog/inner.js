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

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _zhCn = require('../locale/zh-cn');

var _zhCn2 = _interopRequireDefault(_zhCn);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeChain = _util.func.makeChain;
var pickOthers = _util.obj.pickOthers;

var noop = function noop() {};

var Inner = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Inner, _Component);

    function Inner() {
        (0, _classCallCheck3.default)(this, Inner);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    Inner.prototype.getNode = function getNode(name, ref) {
        this[name] = ref;
    };

    Inner.prototype.renderHeader = function renderHeader() {
        var _props = this.props,
            prefix = _props.prefix,
            title = _props.title;

        if (title) {
            this.titleId = (0, _util.guid)('dialog-title-');
            return _react2.default.createElement(
                'div',
                {
                    className: prefix + 'dialog-header',
                    id: this.titleId,
                    ref: this.getNode.bind(this, 'headerNode'),
                    role: 'heading',
                    'aria-level': '1'
                },
                title
            );
        }
        return null;
    };

    Inner.prototype.renderBody = function renderBody() {
        var _props2 = this.props,
            prefix = _props2.prefix,
            children = _props2.children;

        if (children) {
            return _react2.default.createElement(
                'div',
                {
                    className: prefix + 'dialog-body',
                    ref: this.getNode.bind(this, 'bodyNode')
                },
                children
            );
        }
        return null;
    };

    Inner.prototype.renderFooter = function renderFooter() {
        var _cx,
            _this2 = this;

        var _props3 = this.props,
            prefix = _props3.prefix,
            footer = _props3.footer,
            footerAlign = _props3.footerAlign,
            footerActions = _props3.footerActions,
            locale = _props3.locale,
            height = _props3.height;


        if (footer === false) {
            return null;
        }

        var newClassName = (0, _classnames2.default)((_cx = {}, _cx[prefix + 'dialog-footer'] = true, _cx[prefix + 'align-' + footerAlign] = true, _cx[prefix + 'dialog-footer-fixed-height'] = !!height, _cx));
        var footerContent = footer === true || !footer ? footerActions.map(function (action) {
            var btnProps = _this2.props[action + 'Props'];
            var newBtnProps = (0, _extends3.default)({}, btnProps, {
                prefix: prefix,
                className: (0, _classnames2.default)(prefix + 'dialog-btn', btnProps.className),
                onClick: makeChain(_this2.props['on' + (action[0].toUpperCase() + action.slice(1))], btnProps.onClick),
                children: btnProps.children || locale[action]
            });
            if (action === 'ok') {
                newBtnProps.type = 'primary';
            }

            return _react2.default.createElement(_button2.default, (0, _extends3.default)({ key: action }, newBtnProps));
        }) : footer;

        return _react2.default.createElement(
            'div',
            {
                className: newClassName,
                ref: this.getNode.bind(this, 'footerNode')
            },
            footerContent
        );
    };

    Inner.prototype.renderCloseLink = function renderCloseLink() {
        var _props4 = this.props,
            prefix = _props4.prefix,
            closeable = _props4.closeable,
            onClose = _props4.onClose,
            locale = _props4.locale;


        if (closeable) {
            return _react2.default.createElement(
                'a',
                {
                    role: 'button',
                    'aria-label': locale.close,
                    className: prefix + 'dialog-close',
                    onClick: onClose
                },
                _react2.default.createElement(_icon2.default, {
                    className: prefix + 'dialog-close-icon',
                    type: 'close'
                })
            );
        }

        return null;
    };

    Inner.prototype.render = function render() {
        var _cx2;

        var _props5 = this.props,
            prefix = _props5.prefix,
            className = _props5.className,
            closeable = _props5.closeable,
            title = _props5.title,
            role = _props5.role,
            rtl = _props5.rtl,
            height = _props5.height;

        var others = pickOthers(Object.keys(Inner.propTypes), this.props);
        var newClassName = (0, _classnames2.default)((_cx2 = {}, _cx2[prefix + 'dialog'] = true, _cx2[prefix + 'closeable'] = closeable, _cx2[className] = !!className, _cx2));

        var header = this.renderHeader();
        var body = this.renderBody();
        var footer = this.renderFooter();
        var closeLink = this.renderCloseLink();

        var ariaProps = {
            role: role,
            'aria-modal': 'true'
        };
        if (title) {
            ariaProps['aria-labelledby'] = this.titleId;
        }

        others.style = (0, _extends3.default)({}, others.style, { height: height });

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({}, ariaProps, {
                className: newClassName
            }, others, {
                dir: rtl ? 'rtl' : undefined
            }),
            header,
            body,
            footer,
            closeLink
        );
    };

    return Inner;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    className: _propTypes2.default.string,
    title: _propTypes2.default.node,
    children: _propTypes2.default.node,
    footer: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.node]),
    footerAlign: _propTypes2.default.oneOf(['left', 'center', 'right']),
    footerActions: _propTypes2.default.array,
    onOk: _propTypes2.default.func,
    onCancel: _propTypes2.default.func,
    okProps: _propTypes2.default.object,
    cancelProps: _propTypes2.default.object,
    closeable: _propTypes2.default.bool,
    onClose: _propTypes2.default.func,
    locale: _propTypes2.default.object,
    role: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    // set value for a fixed height dialog. Passing a value will absolutely position the footer to the bottom.
    height: _propTypes2.default.string
}, _class.defaultProps = {
    prefix: 'next-',
    footerAlign: 'right',
    footerActions: ['ok', 'cancel'],
    onOk: noop,
    onCancel: noop,
    okProps: {},
    cancelProps: {},
    closeable: true,
    onClose: noop,
    locale: _zhCn2.default.Dialog,
    role: 'dialog'
}, _temp);
Inner.displayName = 'Inner';
exports.default = Inner;
module.exports = exports['default'];