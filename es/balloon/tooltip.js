import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Overlay from '../overlay';
import BalloonInner from './inner';
import { normalMap, edgeMap } from './alignMap';
import { getDisabledCompatibleTrigger } from './util';
var Popup = Overlay.Popup;
var alignMap = normalMap;
/** Balloon.Tooltip */
var Tooltip = /** @class */ (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip(props) {
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
            align: props.placement || props.align,
            innerAlign: false,
        };
        return _this;
    }
    Tooltip.getDerivedStateFromProps = function (nextProps, prevState) {
        if (nextProps.v2 &&
            !prevState.innerAlign &&
            'align' in nextProps &&
            nextProps.align !== prevState.align) {
            return {
                align: nextProps.align,
                innerAlign: false,
            };
        }
        return null;
    };
    Tooltip.prototype.render = function () {
        var _a = this.props, id = _a.id, className = _a.className, palign = _a.align, style = _a.style, prefix = _a.prefix, trigger = _a.trigger, children = _a.children, popupContainer = _a.popupContainer, popupProps = _a.popupProps, popupClassName = _a.popupClassName, popupStyle = _a.popupStyle, followTrigger = _a.followTrigger, triggerType = _a.triggerType, autoFocus = _a.autoFocus, alignEdge = _a.alignEdge, autoAdjust = _a.autoAdjust, rtl = _a.rtl, delay = _a.delay, mouseEnterDelay = _a.mouseEnterDelay, mouseLeaveDelay = _a.mouseLeaveDelay, v2 = _a.v2, arrowPointToCenter = _a.arrowPointToCenter, others = __rest(_a, ["id", "className", "align", "style", "prefix", "trigger", "children", "popupContainer", "popupProps", "popupClassName", "popupStyle", "followTrigger", "triggerType", "autoFocus", "alignEdge", "autoAdjust", "rtl", "delay", "mouseEnterDelay", "mouseLeaveDelay", "v2", "arrowPointToCenter"]);
        var trOrigin = 'trOrigin';
        if (rtl) {
            // @ts-expect-error others 上没有 rtl 属性
            others.rtl = true;
            trOrigin = 'rtlTrOrigin';
        }
        alignMap = alignEdge || v2 ? edgeMap : normalMap;
        var align = v2 ? this.state.align : palign;
        var transformOrigin = alignMap[align][trOrigin];
        var _offset = alignMap[align].offset;
        var _style = __assign({ transformOrigin: transformOrigin }, style);
        var content = (React.createElement(BalloonInner, __assign({}, others, { id: id, prefix: prefix, closable: false, isTooltip: true, className: className, style: _style, align: align, rtl: rtl, alignEdge: alignEdge, v2: v2 }), children));
        var triggerProps = {};
        triggerProps['aria-describedby'] = id;
        triggerProps.tabIndex = '0';
        var newTriggerType = triggerType;
        if (triggerType === 'hover' && id) {
            newTriggerType = ['focus', 'hover'];
        }
        var ariaTrigger = id
            ? React.cloneElement(trigger, triggerProps)
            : trigger;
        var newTrigger = getDisabledCompatibleTrigger(React.isValidElement(ariaTrigger) ? ariaTrigger : React.createElement("span", null, ariaTrigger));
        var otherProps = {
            delay: delay,
            mouseEnterDelay: mouseEnterDelay,
            mouseLeaveDelay: mouseLeaveDelay,
            shouldUpdatePosition: true,
            needAdjust: false,
            align: alignMap[align].align,
            offset: _offset,
        };
        if (v2) {
            delete otherProps.align;
            delete otherProps.shouldUpdatePosition;
            delete otherProps.needAdjust;
            delete otherProps.offset;
            Object.assign(otherProps, {
                placement: align,
                placementOffset: 12,
                v2: true,
                beforePosition: this.beforePosition,
                autoAdjust: autoAdjust,
            });
        }
        return (React.createElement(Popup, __assign({ role: "tooltip", animation: {
                in: 'zoomIn',
                out: 'zoomOut',
            }, className: popupClassName, container: popupContainer, followTrigger: followTrigger, trigger: newTrigger, triggerType: newTriggerType, style: popupStyle, rtl: rtl, autoFocus: triggerType === 'focus' ? false : autoFocus }, otherProps, popupProps), content));
    };
    Tooltip.displayName = 'Tooltip';
    Tooltip.propTypes = {
        prefix: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        children: PropTypes.any,
        align: PropTypes.oneOf([
            't',
            'r',
            'b',
            'l',
            'tl',
            'tr',
            'bl',
            'br',
            'lt',
            'lb',
            'rt',
            'rb',
        ]),
        trigger: PropTypes.any,
        triggerType: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        popupStyle: PropTypes.object,
        popupClassName: PropTypes.string,
        popupProps: PropTypes.object,
        pure: PropTypes.bool,
        popupContainer: PropTypes.any,
        followTrigger: PropTypes.bool,
        id: PropTypes.string,
        delay: PropTypes.number,
        mouseEnterDelay: PropTypes.number,
        mouseLeaveDelay: PropTypes.number,
        v2: PropTypes.bool,
        arrowPointToCenter: PropTypes.bool,
    };
    Tooltip.defaultProps = {
        triggerType: 'hover',
        prefix: 'next-',
        align: 'b',
        delay: 50,
        trigger: React.createElement("span", null),
        arrowPointToCenter: false,
    };
    return Tooltip;
}(Component));
export default Tooltip;
