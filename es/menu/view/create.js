import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React, { Component } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Overlay from '../../overlay';
import { func } from '../../util';
import ConfigProvider from '../../config-provider';
import menu from './menu';
var bindCtx = func.bindCtx;
var getContextProps = ConfigProvider.getContextProps;
var Menu = ConfigProvider.config(menu);
var menuInstance;
var ContextMenu = /** @class */ (function (_super) {
    __extends(ContextMenu, _super);
    function ContextMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            visible: true,
        };
        bindCtx(_this, ['handleOverlayClose', 'handleOverlayOpen', 'handleItemClick', 'getOverlay']);
        return _this;
    }
    ContextMenu.prototype.getOverlay = function (ref) {
        this.overlay = ref;
    };
    ContextMenu.prototype.close = function () {
        this.setState({
            visible: false,
        });
        menuInstance = null;
    };
    ContextMenu.prototype.handleOverlayClose = function (triggerType, e) {
        var others = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            others[_i - 2] = arguments[_i];
        }
        var clickedPopupMenu = triggerType === 'docClick' && this.popupNodes.some(function (node) { return node.contains(e.target); });
        if (!clickedPopupMenu) {
            this.close();
            var overlayProps = this.props.overlayProps;
            if (overlayProps && overlayProps.onRequestClose) {
                overlayProps.onRequestClose.apply(overlayProps, __spreadArray([triggerType, e], __read(others), false));
            }
        }
    };
    ContextMenu.prototype.handleOverlayOpen = function () {
        this.popupNodes = this.overlay
            .getInstance()
            .getContent()
            .getInstance().popupNodes;
        var overlayProps = this.props.overlayProps;
        if (overlayProps && overlayProps.onOpen) {
            overlayProps.onOpen();
        }
    };
    ContextMenu.prototype.handleItemClick = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.close();
        this.props.onItemClick && (_a = this.props).onItemClick.apply(_a, __spreadArray([], __read(args), false));
    };
    ContextMenu.prototype.render = function () {
        var _a, _b;
        var _c = this.props, className = _c.className, popupClassName = _c.popupClassName, target = _c.target, align = _c.align, offset = _c.offset, afterClose = _c.afterClose, _d = _c.overlayProps, overlayProps = _d === void 0 ? {} : _d, others = __rest(_c, ["className", "popupClassName", "target", "align", "offset", "afterClose", "overlayProps"]);
        var contextProps = getContextProps(this.props);
        var prefix = contextProps.prefix;
        var visible = this.state.visible;
        var newOverlayProps = __assign(__assign(__assign({}, contextProps), overlayProps), { target: target, align: align, offset: offset, afterClose: afterClose, visible: visible, onRequestClose: this.handleOverlayClose, onOpen: this.handleOverlayOpen, ref: this.getOverlay });
        var menuProps = __assign(__assign(__assign(__assign({}, contextProps), { triggerType: 'hover' }), others), { className: cx((_a = {},
                _a["".concat(prefix, "context")] = true,
                _a[className] = !!className,
                _a)), popupClassName: cx((_b = {},
                _b["".concat(prefix, "context")] = true,
                _b[popupClassName] = !!popupClassName,
                _b)), onItemClick: this.handleItemClick });
        newOverlayProps.rtl = false;
        return (React.createElement(Overlay, __assign({}, newOverlayProps),
            React.createElement(Menu, __assign({}, menuProps))));
    };
    ContextMenu.propTypes = {
        className: PropTypes.string,
        popupClassName: PropTypes.string,
        target: PropTypes.any,
        align: PropTypes.string,
        offset: PropTypes.array,
        overlayProps: PropTypes.object,
        afterClose: PropTypes.func,
        mode: PropTypes.oneOf(['inline', 'popup']),
        onOpen: PropTypes.func,
        onItemClick: PropTypes.func,
    };
    ContextMenu.defaultProps = {
        prefix: 'next-',
        align: 'tl tl',
        mode: 'popup',
    };
    return ContextMenu;
}(Component));
/**
 * 创建上下文菜单
 * @exportName create
 * @param {Object} props 属性对象
 */
export default function create(props) {
    if (menuInstance) {
        menuInstance.destroy();
    }
    /* eslint-disable no-unused-vars */
    var afterClose = props.afterClose, others = __rest(props, ["afterClose"]);
    /* eslint-enable no-unused-vars */
    var div = document.createElement('div');
    document.body.appendChild(div);
    var closeChain = function () {
        unmountComponentAtNode(div);
        document.body.removeChild(div);
        afterClose && afterClose();
    };
    var newContext = ConfigProvider.getContext();
    var menu;
    render(React.createElement(ConfigProvider, __assign({}, newContext),
        React.createElement(ContextMenu, __assign({ ref: function (ref) {
                menu = ref;
            }, afterClose: closeChain }, others))), div);
    menuInstance = {
        destroy: function () {
            if (menu) {
                menu.close();
            }
        },
    };
    return menuInstance;
}
