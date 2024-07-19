import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React, { Component } from 'react';
// eslint-disable-next-line react/no-deprecated
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
        _this.handleOverlayClose = function (triggerType, e) {
            var others = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                others[_i - 2] = arguments[_i];
            }
            var clickedPopupMenu = triggerType === 'docClick' &&
                _this.popupNodes.some(function (node) { return node.contains(e.target); });
            if (!clickedPopupMenu) {
                _this.close();
                var overlayProps = _this.props.overlayProps;
                if (overlayProps && overlayProps.onRequestClose) {
                    overlayProps.onRequestClose.apply(overlayProps, __spreadArray([triggerType, e], __read(others), false));
                }
            }
        };
        _this.handleItemClick = function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.close();
            _this.props.onItemClick && (_a = _this.props).onItemClick.apply(_a, __spreadArray([], __read(args), false));
        };
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
    ContextMenu.prototype.handleOverlayOpen = function () {
        // @ts-expect-error 此处 overlay 类型不对，Overlay 完成改造后可去除该注释
        this.popupNodes = this.overlay.getInstance().getContent().getInstance().popupNodes;
        var overlayProps = this.props.overlayProps;
        if (overlayProps && overlayProps.onOpen) {
            overlayProps.onOpen();
        }
    };
    ContextMenu.prototype.render = function () {
        var _a = this.props, className = _a.className, popupClassName = _a.popupClassName, target = _a.target, align = _a.align, offset = _a.offset, afterClose = _a.afterClose, _b = _a.overlayProps, overlayProps = _b === void 0 ? {} : _b, others = __rest(_a, ["className", "popupClassName", "target", "align", "offset", "afterClose", "overlayProps"]);
        var contextProps = getContextProps(this.props);
        var prefix = contextProps.prefix;
        var visible = this.state.visible;
        var newOverlayProps = __assign(__assign(__assign({}, contextProps), overlayProps), { target: target, align: align, offset: offset, afterClose: afterClose, visible: visible, onRequestClose: this.handleOverlayClose, onOpen: this.handleOverlayOpen, ref: this.getOverlay });
        var menuProps = __assign(__assign(__assign(__assign({}, contextProps), { triggerType: 'hover' }), others), { className: cx("".concat(prefix, "context"), className), popupClassName: cx("".concat(prefix, "context"), popupClassName), onItemClick: this.handleItemClick });
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
