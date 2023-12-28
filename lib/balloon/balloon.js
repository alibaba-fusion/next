"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var overlay_1 = require("../overlay");
var util_1 = require("../util");
var inner_1 = require("./inner");
var alignMap_1 = require("./alignMap");
var util_2 = require("./util");
var noop = util_1.func.noop;
var Popup = overlay_1.default.Popup;
var alignList = ['t', 'r', 'b', 'l', 'tl', 'tr', 'bl', 'br', 'lt', 'lb', 'rt', 'rb'];
var alignMap = alignMap_1.normalMap;
/** Balloon */
var Balloon = /** @class */ (function (_super) {
    tslib_1.__extends(Balloon, _super);
    function Balloon(props, context) {
        var _this = _super.call(this, props, context) || this;
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
        //必须加上preventDefault,否则单测IE下报错,出现full page reload 异常
        e.preventDefault();
    };
    Balloon.prototype._onPosition = function (res) {
        var rtl = this.props.rtl;
        alignMap = this.props.alignEdge ? alignMap_1.edgeMap : alignMap_1.normalMap;
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
        resAlign = resAlign || this.state.align;
        if (resAlign !== this.state.align) {
            this.setState({
                align: resAlign,
                innerAlign: true,
            });
        }
    };
    Balloon.prototype.render = function () {
        var _a = this.props, id = _a.id, type = _a.type, prefix = _a.prefix, className = _a.className, title = _a.title, alignEdge = _a.alignEdge, trigger = _a.trigger, triggerType = _a.triggerType, children = _a.children, closable = _a.closable, shouldUpdatePosition = _a.shouldUpdatePosition, delay = _a.delay, needAdjust = _a.needAdjust, autoAdjust = _a.autoAdjust, safeId = _a.safeId, autoFocus = _a.autoFocus, safeNode = _a.safeNode, onClick = _a.onClick, onHover = _a.onHover, animation = _a.animation, offset = _a.offset, style = _a.style, container = _a.container, popupContainer = _a.popupContainer, cache = _a.cache, popupStyle = _a.popupStyle, popupClassName = _a.popupClassName, popupProps = _a.popupProps, followTrigger = _a.followTrigger, rtl = _a.rtl, v2 = _a.v2, arrowPointToCenter = _a.arrowPointToCenter, _b = _a.placementOffset, placementOffset = _b === void 0 ? 0 : _b, others = tslib_1.__rest(_a, ["id", "type", "prefix", "className", "title", "alignEdge", "trigger", "triggerType", "children", "closable", "shouldUpdatePosition", "delay", "needAdjust", "autoAdjust", "safeId", "autoFocus", "safeNode", "onClick", "onHover", "animation", "offset", "style", "container", "popupContainer", "cache", "popupStyle", "popupClassName", "popupProps", "followTrigger", "rtl", "v2", "arrowPointToCenter", "placementOffset"]);
        if (container) {
            util_1.log.deprecated('container', 'popupContainer', 'Balloon');
        }
        var align = this.state.align;
        alignMap = alignEdge || v2 ? alignMap_1.edgeMap : alignMap_1.normalMap;
        var _prefix = this.context.prefix || prefix;
        var trOrigin = 'trOrigin';
        if (rtl) {
            trOrigin = 'rtlTrOrigin';
        }
        var _offset = [alignMap[align].offset[0] + offset[0], alignMap[align].offset[1] + offset[1]];
        var transformOrigin = alignMap[align][trOrigin];
        var _style = tslib_1.__assign({ transformOrigin: transformOrigin }, style);
        var content = (react_1.default.createElement(inner_1.default, tslib_1.__assign({}, util_1.obj.pickOthers(Object.keys(Balloon.propTypes), others), { id: id, title: title, prefix: _prefix, closable: closable, onClose: this._onClose, className: className, style: _style, align: align, type: type, rtl: rtl, alignEdge: alignEdge, v2: v2 }), children));
        var triggerProps = {};
        triggerProps['aria-describedby'] = id;
        triggerProps.tabIndex = '0';
        var ariaTrigger = id ? react_1.default.cloneElement(trigger, triggerProps) : trigger;
        var newTrigger = (0, util_2.getDisabledCompatibleTrigger)(react_1.default.isValidElement(ariaTrigger) ? ariaTrigger : react_1.default.createElement("span", null, ariaTrigger));
        var otherProps = {
            delay: delay,
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
        return (react_1.default.createElement(Popup, tslib_1.__assign({}, popupProps, { followTrigger: followTrigger, trigger: newTrigger, cache: cache, triggerType: triggerType, visible: this.state.visible, onClick: onClick, afterClose: this.props.afterClose, onVisibleChange: this._onVisibleChange, animation: animation, autoFocus: triggerType === 'focus' ? false : autoFocus, safeNode: safeNode, container: popupContainer || container, className: popupClassName, style: popupStyle, rtl: rtl }, otherProps), content));
    };
    Balloon.contextTypes = {
        prefix: prop_types_1.default.string,
    };
    Balloon.propTypes = {
        prefix: prop_types_1.default.string,
        pure: prop_types_1.default.bool,
        rtl: prop_types_1.default.bool,
        /**
         * 自定义类名
         */
        className: prop_types_1.default.string,
        /**
         * 自定义内敛样式
         */
        style: prop_types_1.default.object,
        /**
         * 浮层的内容
         */
        children: prop_types_1.default.any,
        size: prop_types_1.default.string,
        /**
         * 样式类型
         */
        type: prop_types_1.default.oneOf(['normal', 'primary']),
        /**
         * 标题
         * @version 1.23
         */
        title: prop_types_1.default.node,
        /**
         * 弹层当前显示的状态
         */
        visible: prop_types_1.default.bool,
        /**
         * 弹层默认显示的状态
         */
        defaultVisible: prop_types_1.default.bool,
        /**
         * 弹层在显示和隐藏触发的事件
         * @param {Boolean} visible 弹层是否隐藏和显示
         * @param {String} type 触发弹层显示或隐藏的来源， closeClick 表示由自带的关闭按钮触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发
         */
        onVisibleChange: prop_types_1.default.func,
        alignEdge: prop_types_1.default.bool,
        /**
         * 开启 v2 版本
         * @version 1.25
         */
        v2: prop_types_1.default.bool,
        /**
         * [v2] 箭头是否指向目标元素的中心
         * @version 1.25
         */
        arrowPointToCenter: prop_types_1.default.bool,
        /**
         * [v2] 弹层偏离触发元素的像素值
         */
        placementOffset: prop_types_1.default.number,
        /**
         * 是否显示关闭按钮
         */
        closable: prop_types_1.default.bool,
        /**
         * 弹出层位置
         * @enumdesc 上, 右, 下, 左, 上左, 上右, 下左, 下右, 左上, 左下, 右上, 右下
         */
        align: prop_types_1.default.oneOf(alignList),
        /**
         * 弹层相对于trigger的定位的微调, 接收数组[hoz, ver], 表示弹层在 left / top 上的增量
         * e.g. [100, 100] 表示往右(RTL 模式下是往左) 、下分布偏移100px
         */
        offset: prop_types_1.default.array,
        /**
         * 触发元素
         */
        trigger: prop_types_1.default.any,
        /**
         * 触发行为
         * 鼠标悬浮, 鼠标点击('hover','click')或者它们组成的数组，如 ['hover', 'click'], 强烈不建议使用'focus'，若弹窗内容有复杂交互请使用click
         */
        triggerType: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.array]),
        onClick: prop_types_1.default.func,
        /**
         * 任何visible为false时会触发的事件
         */
        onClose: prop_types_1.default.func,
        onHover: prop_types_1.default.func,
        /**
         * [v2] 是否进行自动位置调整，默认自动开启。
         * @version 1.25
         */
        autoAdjust: prop_types_1.default.bool,
        needAdjust: prop_types_1.default.bool,
        /**
         * 弹层在触发以后的延时显示, 单位毫秒 ms
         */
        delay: prop_types_1.default.number,
        /**
         * 浮层关闭后触发的事件, 如果有动画，则在动画结束后触发
         */
        afterClose: prop_types_1.default.func,
        shouldUpdatePosition: prop_types_1.default.bool,
        /**
         * 弹层出现后是否自动focus到内部第一个元素
         */
        autoFocus: prop_types_1.default.bool,
        /**
         * 安全节点:对于triggetType为click的浮层,会在点击除了浮层外的其它区域时关闭浮层.safeNode用于添加不触发关闭的节点, 值可以是dom节点的id或者是节点的dom对象
         */
        safeNode: prop_types_1.default.string,
        /**
         * 用来指定safeNode节点的id，和safeNode配合使用
         */
        safeId: prop_types_1.default.string,
        /**
         * 配置动画的播放方式，格式是{in: '', out: ''}， 常用的动画class请查看Animate组件文档
         * @param {String} in 进场动画
         * @param {String} out 出场动画
         */
        animation: prop_types_1.default.oneOfType([prop_types_1.default.object, prop_types_1.default.bool]),
        /**
         * 弹层的dom节点关闭时是否删除
         */
        cache: prop_types_1.default.bool,
        /**
         * 指定浮层渲染的父节点, 可以为节点id的字符串，也可以返回节点的函数。
         */
        popupContainer: prop_types_1.default.any,
        container: prop_types_1.default.any,
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
         * 是否跟随滚动
         */
        followTrigger: prop_types_1.default.bool,
        /**
         * 弹层id, 传入值才会支持无障碍
         */
        id: prop_types_1.default.string,
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
        trigger: react_1.default.createElement("span", null),
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
}(react_1.default.Component));
exports.default = (0, react_lifecycles_compat_1.polyfill)(Balloon);
