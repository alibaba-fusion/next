"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var overlay_1 = require("../overlay");
var inner_1 = require("./inner");
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
        if (nextProps.v2 && !prevState.innerAlign && 'align' in nextProps && nextProps.align !== prevState.align) {
            return {
                align: nextProps.align,
                innerAlign: false,
            };
        }
        return null;
    };
    Tooltip.prototype.render = function () {
        var _a = this.props, id = _a.id, className = _a.className, palign = _a.align, style = _a.style, prefix = _a.prefix, trigger = _a.trigger, children = _a.children, popupContainer = _a.popupContainer, popupProps = _a.popupProps, popupClassName = _a.popupClassName, popupStyle = _a.popupStyle, followTrigger = _a.followTrigger, triggerType = _a.triggerType, autoFocus = _a.autoFocus, alignEdge = _a.alignEdge, autoAdjust = _a.autoAdjust, rtl = _a.rtl, delay = _a.delay, v2 = _a.v2, arrowPointToCenter = _a.arrowPointToCenter, others = tslib_1.__rest(_a, ["id", "className", "align", "style", "prefix", "trigger", "children", "popupContainer", "popupProps", "popupClassName", "popupStyle", "followTrigger", "triggerType", "autoFocus", "alignEdge", "autoAdjust", "rtl", "delay", "v2", "arrowPointToCenter"]);
        var trOrigin = 'trOrigin';
        if (rtl) {
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
        var ariaTrigger = id ? react_1.default.cloneElement(trigger, triggerProps) : trigger;
        var newTrigger = (0, util_1.getDisabledCompatibleTrigger)(react_1.default.isValidElement(ariaTrigger) ? ariaTrigger : react_1.default.createElement("span", null, ariaTrigger));
        var otherProps = {
            delay: delay,
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
    Tooltip.propTypes = {
        /**
         * 样式类名的品牌前缀
         */
        prefix: prop_types_1.default.string,
        /**
         * 自定义类名
         */
        className: prop_types_1.default.string,
        /**
         * 自定义内联样式
         */
        style: prop_types_1.default.object,
        /**
         * tooltip的内容
         */
        children: prop_types_1.default.any,
        /**
         * 弹出层位置
         * @enumdesc 上, 右, 下, 左, 上左, 上右, 下左, 下右, 左上, 左下, 右上, 右下
         */
        align: prop_types_1.default.oneOf(['t', 'r', 'b', 'l', 'tl', 'tr', 'bl', 'br', 'lt', 'lb', 'rt', 'rb']),
        /**
         * 触发元素
         */
        trigger: prop_types_1.default.any,
        /**
         * 触发行为
         * 鼠标悬浮,  鼠标点击('hover', 'click')或者它们组成的数组，如 ['hover', 'click'], 强烈不建议使用'focus'，若有复杂交互，推荐使用triggerType为click的Balloon组件
         */
        triggerType: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.array]),
        /**
         * 弹层组件style，透传给Popup
         */
        popupStyle: prop_types_1.default.object,
        /**
         * 弹层组件className，透传给Popup
         */
        popupClassName: prop_types_1.default.string,
        /**
         * 弹层组件属性，透传给Popup
         */
        popupProps: prop_types_1.default.object,
        /**
         * 是否pure render
         */
        pure: prop_types_1.default.bool,
        /**
         * 指定浮层渲染的父节点, 可以为节点id的字符串，也可以返回节点的函数。
         */
        popupContainer: prop_types_1.default.any,
        /**
         * 是否跟随滚动
         */
        followTrigger: prop_types_1.default.bool,
        /**
         * 弹层id, 传入值才会支持无障碍
         */
        id: prop_types_1.default.string,
        /**
         * 如果需要让 Tooltip 内容可被点击，可以设置这个参数，例如 100
         */
        delay: prop_types_1.default.number,
        /**
         * 开启 v2 版本
         */
        v2: prop_types_1.default.bool,
        /**
         * [v2] 箭头是否指向目标元素的中心
         */
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
}(react_1.default.Component));
exports.default = Tooltip;
