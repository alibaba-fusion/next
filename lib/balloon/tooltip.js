"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var overlay_1 = tslib_1.__importDefault(require("../overlay"));
var inner_1 = tslib_1.__importDefault(require("./inner"));
var alignMap_1 = require("./alignMap");
var util_1 = require("./util");
var Popup = overlay_1.default.Popup;
var alignMap = alignMap_1.normalMap;
/** Balloon.Tooltip */
var Tooltip = /** @class */ (function (_super) {
    tslib_1.__extends(Tooltip, _super);
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
                    var offset = alignMap_1.normalMap[placement].offset;
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
        var _a = this.props, id = _a.id, className = _a.className, palign = _a.align, style = _a.style, prefix = _a.prefix, trigger = _a.trigger, children = _a.children, popupContainer = _a.popupContainer, popupProps = _a.popupProps, popupClassName = _a.popupClassName, popupStyle = _a.popupStyle, followTrigger = _a.followTrigger, triggerType = _a.triggerType, autoFocus = _a.autoFocus, alignEdge = _a.alignEdge, autoAdjust = _a.autoAdjust, rtl = _a.rtl, delay = _a.delay, mouseEnterDelay = _a.mouseEnterDelay, mouseLeaveDelay = _a.mouseLeaveDelay, v2 = _a.v2, arrowPointToCenter = _a.arrowPointToCenter, others = tslib_1.__rest(_a, ["id", "className", "align", "style", "prefix", "trigger", "children", "popupContainer", "popupProps", "popupClassName", "popupStyle", "followTrigger", "triggerType", "autoFocus", "alignEdge", "autoAdjust", "rtl", "delay", "mouseEnterDelay", "mouseLeaveDelay", "v2", "arrowPointToCenter"]);
        var trOrigin = 'trOrigin';
        if (rtl) {
            // @ts-expect-error others 上没有 rtl 属性
            others.rtl = true;
            trOrigin = 'rtlTrOrigin';
        }
        alignMap = alignEdge || v2 ? alignMap_1.edgeMap : alignMap_1.normalMap;
        var align = v2 ? this.state.align : palign;
        var transformOrigin = alignMap[align][trOrigin];
        var _offset = alignMap[align].offset;
        var _style = tslib_1.__assign({ transformOrigin: transformOrigin }, style);
        var content = (react_1.default.createElement(inner_1.default, tslib_1.__assign({}, others, { id: id, prefix: prefix, closable: false, isTooltip: true, className: className, style: _style, align: align, rtl: rtl, alignEdge: alignEdge, v2: v2 }), children));
        var triggerProps = {};
        triggerProps['aria-describedby'] = id;
        triggerProps.tabIndex = '0';
        var newTriggerType = triggerType;
        if (triggerType === 'hover' && id) {
            newTriggerType = ['focus', 'hover'];
        }
        var ariaTrigger = id
            ? react_1.default.cloneElement(trigger, triggerProps)
            : trigger;
        var newTrigger = (0, util_1.getDisabledCompatibleTrigger)(react_1.default.isValidElement(ariaTrigger) ? ariaTrigger : react_1.default.createElement("span", null, ariaTrigger));
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
        return (react_1.default.createElement(Popup, tslib_1.__assign({ role: "tooltip", animation: {
                in: 'zoomIn',
                out: 'zoomOut',
            }, className: popupClassName, container: popupContainer, followTrigger: followTrigger, trigger: newTrigger, triggerType: newTriggerType, style: popupStyle, rtl: rtl, autoFocus: triggerType === 'focus' ? false : autoFocus }, otherProps, popupProps), content));
    };
    Tooltip.displayName = 'Tooltip';
    Tooltip.propTypes = {
        prefix: prop_types_1.default.string,
        className: prop_types_1.default.string,
        style: prop_types_1.default.object,
        children: prop_types_1.default.any,
        align: prop_types_1.default.oneOf([
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
        trigger: prop_types_1.default.any,
        triggerType: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.array]),
        popupStyle: prop_types_1.default.object,
        popupClassName: prop_types_1.default.string,
        popupProps: prop_types_1.default.object,
        pure: prop_types_1.default.bool,
        popupContainer: prop_types_1.default.any,
        followTrigger: prop_types_1.default.bool,
        id: prop_types_1.default.string,
        delay: prop_types_1.default.number,
        mouseEnterDelay: prop_types_1.default.number,
        mouseLeaveDelay: prop_types_1.default.number,
        v2: prop_types_1.default.bool,
        arrowPointToCenter: prop_types_1.default.bool,
    };
    Tooltip.defaultProps = {
        triggerType: 'hover',
        prefix: 'next-',
        align: 'b',
        delay: 50,
        trigger: react_1.default.createElement("span", null),
        arrowPointToCenter: false,
    };
    return Tooltip;
}(react_1.Component));
exports.default = Tooltip;
