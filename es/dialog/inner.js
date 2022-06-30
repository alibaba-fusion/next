import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '../button';
import Icon from '../icon';
import zhCN from '../locale/zh-cn';
import { func, obj, guid, dom } from '../util';

var makeChain = func.makeChain;
var pickOthers = obj.pickOthers;

var noop = function noop() {};

var Inner = (_temp = _class = function (_Component) {
    _inherits(Inner, _Component);

    function Inner() {
        _classCallCheck(this, Inner);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Inner.prototype.componentDidUpdate = function componentDidUpdate() {
        // style 作为第一优先级
        var _props = this.props,
            pheight = _props.height,
            _props$style = _props.style,
            maxHeight = _props$style.maxHeight,
            _props$style$height = _props$style.height,
            sheight = _props$style$height === undefined ? maxHeight || pheight : _props$style$height,
            v2 = _props.v2;

        if (this.bodyNode && v2 && sheight && sheight !== 'auto') {
            var style = {};
            var headerHeight = 0,
                footerHeight = 0;
            if (this.headerNode) {
                headerHeight = this.headerNode.getBoundingClientRect().height;
            }
            if (this.footerNode) {
                footerHeight = this.footerNode.getBoundingClientRect().height;
            }
            var minHeight = headerHeight + footerHeight;

            var height = sheight;
            if (sheight && typeof sheight === 'string') {
                if (height.match(/calc|vh/)) {
                    style.maxHeight = 'calc(' + sheight + ' - ' + minHeight + 'px)';
                    style.overflowY = 'auto';
                } else {
                    height = parseInt(sheight);
                }
            }

            if (typeof height === 'number' && height > minHeight) {
                style.maxHeight = height - minHeight;
                style.overflowY = 'auto';
            }

            dom.setStyle(this.bodyNode, style);
        }
    };

    Inner.prototype.getNode = function getNode(name, ref) {
        this[name] = ref;
    };

    Inner.prototype.renderHeader = function renderHeader() {
        var _props2 = this.props,
            prefix = _props2.prefix,
            title = _props2.title;

        if (title) {
            this.titleId = guid('dialog-title-');
            return React.createElement(
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
        var _props3 = this.props,
            prefix = _props3.prefix,
            children = _props3.children,
            footer = _props3.footer,
            noPadding = _props3.noPadding;

        if (children) {
            var _cx;

            return React.createElement(
                'div',
                {
                    className: cx(prefix + 'dialog-body', (_cx = {}, _cx[prefix + 'dialog-body-no-footer'] = footer === false, _cx[prefix + 'dialog-body-no-padding'] = noPadding === true, _cx)),
                    ref: this.getNode.bind(this, 'bodyNode')
                },
                children
            );
        }
        return null;
    };

    Inner.prototype.renderFooter = function renderFooter() {
        var _cx2,
            _this2 = this;

        var _props4 = this.props,
            prefix = _props4.prefix,
            footer = _props4.footer,
            footerAlign = _props4.footerAlign,
            footerActions = _props4.footerActions,
            locale = _props4.locale,
            height = _props4.height;


        if (footer === false) {
            return null;
        }

        var newClassName = cx((_cx2 = {}, _cx2[prefix + 'dialog-footer'] = true, _cx2[prefix + 'align-' + footerAlign] = true, _cx2[prefix + 'dialog-footer-fixed-height'] = !!height, _cx2));
        var footerContent = footer === true || !footer ? footerActions.map(function (action) {
            var btnProps = _this2.props[action + 'Props'];
            var newBtnProps = _extends({}, btnProps, {
                prefix: prefix,
                className: cx(prefix + 'dialog-btn', btnProps.className),
                onClick: makeChain(_this2.props['on' + (action[0].toUpperCase() + action.slice(1))], btnProps.onClick),
                children: btnProps.children || locale[action]
            });
            if (action === 'ok') {
                newBtnProps.type = 'primary';
            }

            return React.createElement(Button, _extends({ key: action }, newBtnProps));
        }) : footer;

        return React.createElement(
            'div',
            { className: newClassName, ref: this.getNode.bind(this, 'footerNode') },
            footerContent
        );
    };

    Inner.prototype.renderCloseLink = function renderCloseLink() {
        var _props5 = this.props,
            prefix = _props5.prefix,
            closeable = _props5.closeable,
            onClose = _props5.onClose,
            locale = _props5.locale,
            closeIcon = _props5.closeIcon;


        if (closeable) {
            return React.createElement(
                'a',
                { role: 'button', 'aria-label': locale.close, className: prefix + 'dialog-close', onClick: onClose },
                closeIcon ? closeIcon : React.createElement(Icon, { className: prefix + 'dialog-close-icon', type: 'close' })
            );
        }

        return null;
    };

    Inner.prototype.render = function render() {
        var _cx3;

        var _props6 = this.props,
            prefix = _props6.prefix,
            className = _props6.className,
            closeable = _props6.closeable,
            title = _props6.title,
            role = _props6.role,
            rtl = _props6.rtl;

        var others = pickOthers(Object.keys(Inner.propTypes), this.props);
        var newClassName = cx((_cx3 = {}, _cx3[prefix + 'dialog'] = true, _cx3[prefix + 'closeable'] = closeable, _cx3[className] = !!className, _cx3));

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

        others.style = _extends({}, obj.pickProps(['height', 'maxHeight', 'width'], this.props), others.style);

        return React.createElement(
            'div',
            _extends({}, ariaProps, { className: newClassName }, others, { dir: rtl ? 'rtl' : undefined }),
            header,
            body,
            footer,
            closeLink
        );
    };

    return Inner;
}(Component), _class.propTypes = {
    prefix: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.node,
    children: PropTypes.node,
    footer: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
    footerAlign: PropTypes.oneOf(['left', 'center', 'right']),
    footerActions: PropTypes.array,
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
    okProps: PropTypes.object,
    cancelProps: PropTypes.object,
    closeable: PropTypes.bool,
    onClose: PropTypes.func,
    locale: PropTypes.object,
    role: PropTypes.string,
    rtl: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    // set value for a fixed height dialog. Passing a value will absolutely position the footer to the bottom.
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    v2: PropTypes.bool,
    closeIcon: PropTypes.node,
    pure: PropTypes.bool,
    noPadding: PropTypes.bool
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
    locale: zhCN.Dialog,
    role: 'dialog'
}, _temp);
Inner.displayName = 'Inner';
export { Inner as default };