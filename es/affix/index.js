import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ResizeObserver from 'resize-observer-polyfill';
import { polyfill } from 'react-lifecycles-compat';
import { obj, events, func } from '../util';
import ConfigProvider from '../config-provider';
import { getScroll, getRect, getNodeHeight } from './util';
/** Affix */
var Affix = /** @class */ (function (_super) {
    __extends(Affix, _super);
    function Affix(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this._clearContainerEvent = function () {
            if (_this.timeout) {
                clearTimeout(_this.timeout);
                _this.timeout = null;
            }
            var container = _this.props.container;
            _this._removeEventHandlerForContainer(container);
        };
        _this.updatePosition = function () {
            _this._updateNodePosition();
        };
        _this._updateNodePosition = function () {
            var affixMode = _this.state.affixMode;
            var _a = _this.props, container = _a.container, useAbsolute = _a.useAbsolute;
            var affixContainer = container();
            if (!affixContainer || !_this.affixNode) {
                return false;
            }
            var containerScrollTop = getScroll(affixContainer, true); // 容器在垂直位置上的滚动 offset
            var affixOffset = _this._getOffset(_this.affixNode, affixContainer); // 目标节点当前相对于容器的 offset
            var containerHeight = getNodeHeight(affixContainer); // 容器的高度
            var affixHeight = _this.affixNode.offsetHeight;
            var containerRect = getRect(affixContainer);
            var affixChildHeight = _this.affixChildNode.offsetHeight;
            var affixStyle = {
                width: affixOffset.width,
            };
            var containerStyle = {
                width: affixOffset.width,
                height: affixChildHeight,
            };
            var positionStyle = null;
            if (affixMode.top && containerScrollTop > affixOffset.top - affixMode.offset) {
                // affix top
                if (useAbsolute) {
                    affixStyle.position = 'absolute';
                    affixStyle.top = containerScrollTop - (affixOffset.top - affixMode.offset);
                    positionStyle = 'relative';
                }
                else {
                    affixStyle.position = 'fixed';
                    affixStyle.top = affixMode.offset + containerRect.top;
                }
                _this._setAffixStyle(affixStyle, true);
                _this._setContainerStyle(containerStyle);
            }
            else if (affixMode.bottom &&
                containerScrollTop < affixOffset.top + affixHeight + affixMode.offset - containerHeight) {
                // affix bottom
                affixStyle.height = affixHeight;
                if (useAbsolute) {
                    affixStyle.position = 'absolute';
                    affixStyle.top =
                        containerScrollTop -
                            (affixOffset.top + affixHeight + affixMode.offset - containerHeight);
                    positionStyle = 'relative';
                }
                else {
                    affixStyle.position = 'fixed';
                    affixStyle.bottom = affixMode.offset;
                }
                _this._setAffixStyle(affixStyle, true);
                _this._setContainerStyle(containerStyle);
            }
            else {
                _this._setAffixStyle(null);
                _this._setContainerStyle(null);
            }
            if (_this.state.positionStyle !== positionStyle) {
                _this.setState({ positionStyle: positionStyle });
            }
        };
        _this._affixNodeRefHandler = function (ref) {
            _this.affixNode = ref;
        };
        _this._affixChildNodeRefHandler = function (ref) {
            _this.affixChildNode = ref;
        };
        _this.state = {
            style: null,
            containerStyle: null,
            positionStyle: null,
            affixMode: Affix._getAffixMode(props),
        };
        _this.resizeObserver = new ResizeObserver(_this._updateNodePosition);
        return _this;
    }
    Affix._getAffixMode = function (nextProps) {
        var affixMode = {
            top: false,
            bottom: false,
            offset: 0,
        };
        if (!nextProps) {
            return affixMode;
        }
        var offsetTop = nextProps.offsetTop, offsetBottom = nextProps.offsetBottom;
        if (typeof offsetTop !== 'number' && typeof offsetBottom !== 'number') {
            // set default
            affixMode.top = true;
        }
        else if (typeof offsetTop === 'number') {
            affixMode.top = true;
            affixMode.bottom = false;
            affixMode.offset = offsetTop;
        }
        else if (typeof offsetBottom === 'number') {
            affixMode.bottom = true;
            affixMode.top = false;
            affixMode.offset = offsetBottom;
        }
        return affixMode;
    };
    Affix.getDerivedStateFromProps = function (nextProps) {
        if ('offsetTop' in nextProps || 'offsetBottom' in nextProps) {
            return {
                affixMode: Affix._getAffixMode(nextProps),
            };
        }
        return null;
    };
    Affix.prototype.componentDidMount = function () {
        var _this = this;
        var container = this.props.container;
        // wait for parent rendered
        this.timeout = setTimeout(function () {
            _this._updateNodePosition();
            _this._setEventHandlerForContainer(container);
        });
    };
    Affix.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        if (prevProps.container() !== this.props.container()) {
            this._clearContainerEvent();
            this.timeout = setTimeout(function () {
                _this._setEventHandlerForContainer(_this.props.container);
            });
        }
        setTimeout(this._updateNodePosition);
    };
    Affix.prototype.componentWillUnmount = function () {
        this._clearContainerEvent();
    };
    Affix.prototype._setEventHandlerForContainer = function (getContainer) {
        var container = getContainer();
        if (!container) {
            return;
        }
        events.on(container, 'scroll', this._updateNodePosition, false);
        this.resizeObserver.observe(this.affixNode);
    };
    Affix.prototype._removeEventHandlerForContainer = function (getContainer) {
        var container = getContainer();
        if (container) {
            events.off(container, 'scroll', this._updateNodePosition);
            this.resizeObserver.disconnect();
        }
    };
    Affix.prototype._setAffixStyle = function (affixStyle, affixed) {
        if (affixed === void 0) { affixed = false; }
        if (obj.shallowEqual(affixStyle, this.state.style)) {
            return;
        }
        this.setState({
            style: affixStyle,
        });
        var onAffix = this.props.onAffix;
        if (affixed) {
            setTimeout(function () { return onAffix(true); });
        }
        else if (!affixStyle) {
            setTimeout(function () { return onAffix(false); });
        }
    };
    Affix.prototype._setContainerStyle = function (containerStyle) {
        if (obj.shallowEqual(containerStyle, this.state.containerStyle)) {
            return;
        }
        this.setState({ containerStyle: containerStyle });
    };
    Affix.prototype._getOffset = function (affixNode, affixContainer) {
        var affixRect = affixNode.getBoundingClientRect(); // affix 元素 相对浏览器窗口的位置
        var containerRect = getRect(affixContainer); // affix 容器 相对浏览器窗口的位置
        var containerScrollTop = getScroll(affixContainer, true);
        var containerScrollLeft = getScroll(affixContainer, false);
        return {
            top: affixRect.top - containerRect.top + containerScrollTop,
            left: affixRect.left - containerRect.left + containerScrollLeft,
            width: affixRect.width,
            height: affixRect.height,
        };
    };
    Affix.prototype.render = function () {
        var _a;
        var _b = this.state, affixMode = _b.affixMode, positionStyle = _b.positionStyle;
        var _c = this.props, prefix = _c.prefix, className = _c.className, style = _c.style, children = _c.children;
        var state = this.state;
        var classNames = classnames((_a = {},
            _a["".concat(prefix, "affix")] = state.style,
            _a["".concat(prefix, "affix-top")] = !state.style && affixMode.top,
            _a["".concat(prefix, "affix-bottom")] = !state.style && affixMode.bottom,
            _a[className] = className,
            _a));
        var wrapperStyle = __assign(__assign({}, style), { position: positionStyle || undefined });
        return (React.createElement("div", { ref: this._affixNodeRefHandler, style: wrapperStyle },
            state.style && React.createElement("div", { style: state.containerStyle, "aria-hidden": "true" }),
            React.createElement("div", { ref: this._affixChildNodeRefHandler, className: classNames, style: state.style }, children)));
    };
    Affix.propTypes = {
        prefix: PropTypes.string,
        container: PropTypes.func,
        offsetTop: PropTypes.number,
        offsetBottom: PropTypes.number,
        onAffix: PropTypes.func,
        useAbsolute: PropTypes.bool,
        className: PropTypes.string,
        style: PropTypes.object,
        children: PropTypes.any,
    };
    Affix.defaultProps = {
        prefix: 'next-',
        container: function () { return window; },
        onAffix: func.noop,
    };
    return Affix;
}(Component));
export default ConfigProvider.config(polyfill(Affix));
