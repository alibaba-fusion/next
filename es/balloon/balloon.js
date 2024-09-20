import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import Overlay from '../overlay';
import { func, obj, log } from '../util';
import BalloonInner from './inner';
import { normalMap, edgeMap } from './alignMap';
import { getDisabledCompatibleTrigger } from './util';
var noop = func.noop;
var Popup = Overlay.Popup;
var alignList = ['t', 'r', 'b', 'l', 'tl', 'tr', 'bl', 'br', 'lt', 'lb', 'rt', 'rb'];
var alignMap = normalMap;
var Balloon = /** @class */ (function (_super) {
    __extends(Balloon, _super);
    function Balloon(props) {
        var _this = _super.call(this, props) || this;
        _this.beforePosition = function (result, obj) {
            var placement = result.config.placement;
            if (placement !== _this.state.align) {
                _this.setState({
                    align: placement,
                    innerAlign: true,
                });
            }
            if (_this.props.arrowPointToCenter) {
                var _a = obj.target, width = _a.width, height = _a.height;
                if (placement.length === 2) {
                    var offset = normalMap[placement].offset;
                    switch (placement[0]) {
                        case 'b':
                        case 't':
                            {
                                var plus = offset[0] > 0 ? 1 : -1;
                                result.style.left = result.style.left + (plus * width) / 2 - offset[0];
                            }
                            break;
                        case 'l':
                        case 'r':
                            {
                                var plus = offset[0] > 0 ? 1 : -1;
                                result.style.top = result.style.top + (plus * height) / 2 - offset[1];
                            }
                            break;
                    }
                }
            }
            return result;
        };
        _this.state = {
            align: alignList.includes(props.align) ? props.align : 'b',
            visible: 'visible' in props ? props.visible : props.defaultVisible,
        };
        _this._onClose = _this._onClose.bind(_this);
        _this._onPosition = _this._onPosition.bind(_this);
        _this._onVisibleChange = _this._onVisibleChange.bind(_this);
        return _this;
    }
    Balloon.getDerivedStateFromProps = function (nextProps, prevState) {
        var nextState = {};
        if ('visible' in nextProps) {
            nextState.visible = nextProps.visible;
        }
        if (!prevState.innerAlign &&
            'align' in nextProps &&
            alignList.includes(nextProps.align) &&
            nextProps.align !== prevState.align) {
            nextState.align = nextProps.align;
            nextState.innerAlign = false;
        }
        return nextState;
    };
    Balloon.prototype._onVisibleChange = function (visible, trigger) {
        // Not Controlled
        if (!('visible' in this.props)) {
            this.setState({
                visible: visible,
            });
        }
        this.props.onVisibleChange(visible, trigger);
        if (!visible) {
            this.props.onClose();
        }
    };
    Balloon.prototype._onClose = function (e) {
        this._onVisibleChange(false, 'closeClick');
        //必须加上 preventDefault，否则单测 IE 下报错，出现 full page reload 异常
        e.preventDefault();
    };
    Balloon.prototype._onPosition = function (res) {
        var rtl = this.props.rtl;
        alignMap = this.props.alignEdge ? edgeMap : normalMap;
        var newAlign = res.align.join(' ');
        var resAlign;
        var alignKey = 'align';
        if (rtl) {
            alignKey = 'rtlAlign';
        }
        for (var key in alignMap) {
            if (alignMap[key][alignKey] === newAlign) {
                resAlign = key;
                break;
            }
        }
        // @ts-expect-error 在赋值前使用了变量
        resAlign = resAlign || this.state.align;
        if (resAlign !== this.state.align) {
            this.setState({
                align: resAlign,
                innerAlign: true,
            });
        }
    };
    Balloon.prototype.render = function () {
        var _a = this.props, id = _a.id, type = _a.type, prefix = _a.prefix, className = _a.className, title = _a.title, alignEdge = _a.alignEdge, trigger = _a.trigger, triggerType = _a.triggerType, children = _a.children, closable = _a.closable, shouldUpdatePosition = _a.shouldUpdatePosition, delay = _a.delay, mouseEnterDelay = _a.mouseEnterDelay, mouseLeaveDelay = _a.mouseLeaveDelay, needAdjust = _a.needAdjust, autoAdjust = _a.autoAdjust, safeId = _a.safeId, autoFocus = _a.autoFocus, safeNode = _a.safeNode, onClick = _a.onClick, onHover = _a.onHover, animation = _a.animation, offset = _a.offset, style = _a.style, container = _a.container, popupContainer = _a.popupContainer, cache = _a.cache, popupStyle = _a.popupStyle, popupClassName = _a.popupClassName, popupProps = _a.popupProps, followTrigger = _a.followTrigger, rtl = _a.rtl, v2 = _a.v2, arrowPointToCenter = _a.arrowPointToCenter, _b = _a.placementOffset, placementOffset = _b === void 0 ? 0 : _b, others = __rest(_a, ["id", "type", "prefix", "className", "title", "alignEdge", "trigger", "triggerType", "children", "closable", "shouldUpdatePosition", "delay", "mouseEnterDelay", "mouseLeaveDelay", "needAdjust", "autoAdjust", "safeId", "autoFocus", "safeNode", "onClick", "onHover", "animation", "offset", "style", "container", "popupContainer", "cache", "popupStyle", "popupClassName", "popupProps", "followTrigger", "rtl", "v2", "arrowPointToCenter", "placementOffset"]);
        if (container) {
            log.deprecated('container', 'popupContainer', 'Balloon');
        }
        var align = this.state.align;
        alignMap = alignEdge || v2 ? edgeMap : normalMap;
        var _prefix = this.context.prefix || prefix;
        var trOrigin = 'trOrigin';
        if (rtl) {
            trOrigin = 'rtlTrOrigin';
        }
        var _offset = [
            alignMap[align].offset[0] + offset[0],
            alignMap[align].offset[1] + offset[1],
        ];
        var transformOrigin = alignMap[align][trOrigin];
        var _style = __assign({ transformOrigin: transformOrigin }, style);
        var content = (React.createElement(BalloonInner, __assign({}, obj.pickOthers(Object.keys(Balloon.propTypes), others), { id: id, title: title, prefix: _prefix, closable: closable, onClose: this._onClose, className: className, style: _style, align: align, type: type, rtl: rtl, alignEdge: alignEdge, v2: v2 }), children));
        var triggerProps = {};
        triggerProps['aria-describedby'] = id;
        triggerProps.tabIndex = '0';
        var ariaTrigger = id
            ? React.cloneElement(trigger, triggerProps)
            : trigger;
        var newTrigger = getDisabledCompatibleTrigger(React.isValidElement(ariaTrigger) ? ariaTrigger : React.createElement("span", null, ariaTrigger));
        var otherProps = {
            delay: delay,
            mouseEnterDelay: mouseEnterDelay,
            mouseLeaveDelay: mouseLeaveDelay,
            shouldUpdatePosition: shouldUpdatePosition,
            needAdjust: needAdjust,
            align: alignMap[align].align,
            offset: _offset,
            safeId: safeId,
            onHover: onHover,
            onPosition: this._onPosition,
        };
        if (v2) {
            delete otherProps.align;
            delete otherProps.shouldUpdatePosition;
            delete otherProps.needAdjust;
            delete otherProps.safeId;
            delete otherProps.onHover;
            delete otherProps.onPosition;
            Object.assign(otherProps, {
                placement: align,
                placementOffset: placementOffset + 12,
                v2: true,
                beforePosition: this.beforePosition,
                autoAdjust: autoAdjust,
            });
        }
        return (React.createElement(Popup, __assign({}, popupProps, { followTrigger: followTrigger, trigger: newTrigger, cache: cache, triggerType: triggerType, visible: this.state.visible, onClick: onClick, afterClose: this.props.afterClose, onVisibleChange: this._onVisibleChange, animation: animation, autoFocus: triggerType === 'focus' ? false : autoFocus, safeNode: safeNode, container: popupContainer || container, className: popupClassName, style: popupStyle, rtl: rtl }, otherProps), content));
    };
    Balloon.displayName = 'Balloon';
    Balloon.contextTypes = {
        prefix: PropTypes.string,
    };
    Balloon.propTypes = {
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        rtl: PropTypes.bool,
        className: PropTypes.string,
        style: PropTypes.object,
        children: PropTypes.any,
        size: PropTypes.string,
        type: PropTypes.oneOf(['normal', 'primary']),
        title: PropTypes.node,
        visible: PropTypes.bool,
        defaultVisible: PropTypes.bool,
        onVisibleChange: PropTypes.func,
        alignEdge: PropTypes.bool,
        v2: PropTypes.bool,
        arrowPointToCenter: PropTypes.bool,
        placementOffset: PropTypes.number,
        closable: PropTypes.bool,
        align: PropTypes.oneOf(alignList),
        offset: PropTypes.array,
        trigger: PropTypes.any,
        triggerType: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        onClick: PropTypes.func,
        onClose: PropTypes.func,
        onHover: PropTypes.func,
        autoAdjust: PropTypes.bool,
        needAdjust: PropTypes.bool,
        delay: PropTypes.number,
        mouseEnterDelay: PropTypes.number,
        mouseLeaveDelay: PropTypes.number,
        afterClose: PropTypes.func,
        shouldUpdatePosition: PropTypes.bool,
        autoFocus: PropTypes.bool,
        safeNode: PropTypes.string,
        safeId: PropTypes.string,
        animation: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
        cache: PropTypes.bool,
        popupContainer: PropTypes.any,
        container: PropTypes.any,
        popupStyle: PropTypes.object,
        popupClassName: PropTypes.string,
        popupProps: PropTypes.object,
        followTrigger: PropTypes.bool,
        id: PropTypes.string,
    };
    Balloon.defaultProps = {
        prefix: 'next-',
        pure: false,
        type: 'normal',
        closable: true,
        defaultVisible: false,
        size: 'medium',
        alignEdge: false,
        arrowPointToCenter: false,
        align: 'b',
        offset: [0, 0],
        trigger: React.createElement("span", null),
        onClose: noop,
        afterClose: noop,
        onVisibleChange: noop,
        needAdjust: false,
        triggerType: 'hover',
        safeNode: undefined,
        safeId: null,
        autoFocus: true,
        animation: {
            in: 'zoomIn zoomInBig',
            out: 'zoomOut zoomOutBig',
        },
        cache: false,
        popupStyle: {},
        popupClassName: '',
        popupProps: {},
    };
    return Balloon;
}(React.Component));
export default polyfill(Balloon);
