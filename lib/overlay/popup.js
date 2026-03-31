"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_dom_1 = require("react-dom");
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var util_1 = require("../util");
var overlay_1 = tslib_1.__importDefault(require("./overlay"));
var noop = util_1.func.noop, makeChain = util_1.func.makeChain, bindCtx = util_1.func.bindCtx;
/**
 * Overlay.Popup
 * 继承 Overlay 的 API，除非特别说明
 * */
var Popup = /** @class */ (function (_super) {
    tslib_1.__extends(Popup, _super);
    function Popup(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            visible: typeof props.visible === 'undefined' ? props.defaultVisible : props.visible,
        };
        bindCtx(_this, [
            'handleTriggerClick',
            'handleTriggerKeyDown',
            'handleTriggerMouseEnter',
            'handleTriggerMouseLeave',
            'handleTriggerFocus',
            'handleTriggerBlur',
            'handleContentMouseEnter',
            'handleContentMouseLeave',
            'handleContentMouseDown',
            'handleRequestClose',
            'handleMaskMouseEnter',
            'handleMaskMouseLeave',
        ]);
        return _this;
    }
    Popup.getDerivedStateFromProps = function (nextProps, prevState) {
        if ('visible' in nextProps) {
            return tslib_1.__assign(tslib_1.__assign({}, prevState), { visible: nextProps.visible });
        }
        return null;
    };
    Popup.prototype.componentWillUnmount = function () {
        var _this = this;
        ['_timer', '_hideTimer', '_showTimer'].forEach(function (time) {
            _this[time] && clearTimeout(_this[time]);
        });
    };
    Popup.prototype.handleVisibleChange = function (visible, type, e) {
        if (!('visible' in this.props)) {
            this.setState({
                visible: visible,
            });
        }
        this.props.onVisibleChange(visible, type, e);
    };
    Popup.prototype.handleTriggerClick = function (e) {
        if (this.state.visible && !this.props.canCloseByTrigger) {
            return;
        }
        this.handleVisibleChange(!this.state.visible, 'fromTrigger', e);
    };
    Popup.prototype.handleTriggerKeyDown = function (e) {
        var triggerClickKeycode = this.props.triggerClickKeycode;
        var keycodes = Array.isArray(triggerClickKeycode)
            ? triggerClickKeycode
            : [triggerClickKeycode];
        if (keycodes.includes(e.keyCode)) {
            e.preventDefault();
            this.handleTriggerClick(e);
        }
    };
    Popup.prototype.handleTriggerMouseEnter = function (e) {
        var _this = this;
        this._mouseNotFirstOnMask = false;
        if (this._hideTimer) {
            clearTimeout(this._hideTimer);
            this._hideTimer = null;
        }
        if (this._showTimer) {
            clearTimeout(this._showTimer);
            this._showTimer = null;
        }
        if (!this.state.visible) {
            this._showTimer = window.setTimeout(function () {
                _this.handleVisibleChange(true, 'fromTrigger', e);
            }, this.props.mouseEnterDelay === null || this.props.mouseEnterDelay === undefined
                ? this.props.delay
                : this.props.mouseEnterDelay);
        }
    };
    Popup.prototype.handleTriggerMouseLeave = function (e, type) {
        var _this = this;
        if (this._showTimer) {
            clearTimeout(this._showTimer);
            this._showTimer = null;
        }
        if (this.state.visible) {
            this._hideTimer = window.setTimeout(function () {
                _this.handleVisibleChange(false, type || 'fromTrigger', e);
            }, this.props.mouseLeaveDelay === null || this.props.mouseLeaveDelay === undefined
                ? this.props.delay
                : this.props.mouseLeaveDelay);
        }
    };
    Popup.prototype.handleTriggerFocus = function (e) {
        this.handleVisibleChange(true, 'fromTrigger', e);
    };
    Popup.prototype.handleTriggerBlur = function (e) {
        if (!this._isForwardContent) {
            this.handleVisibleChange(false, 'fromTrigger', e);
        }
        this._isForwardContent = false;
    };
    Popup.prototype.handleContentMouseDown = function () {
        this._isForwardContent = true;
    };
    Popup.prototype.handleContentMouseEnter = function () {
        clearTimeout(this._hideTimer);
    };
    Popup.prototype.handleContentMouseLeave = function (e) {
        this.handleTriggerMouseLeave(e, 'fromContent');
    };
    Popup.prototype.handleMaskMouseEnter = function () {
        if (!this._mouseNotFirstOnMask) {
            clearTimeout(this._hideTimer);
            this._hideTimer = null;
            this._mouseNotFirstOnMask = false;
        }
    };
    Popup.prototype.handleMaskMouseLeave = function () {
        this._mouseNotFirstOnMask = true;
    };
    Popup.prototype.handleRequestClose = function (type, e) {
        this.handleVisibleChange(false, type, e);
    };
    Popup.prototype.renderTrigger = function () {
        var _this = this;
        var _a = this.props, trigger = _a.trigger, disabled = _a.disabled;
        var props = {
            key: 'trigger',
            'aria-haspopup': true,
            'aria-expanded': this.state.visible,
        };
        if (!this.state.visible) {
            props['aria-describedby'] = undefined;
        }
        if (!disabled) {
            var triggerType = this.props.triggerType;
            var triggerTypes = Array.isArray(triggerType) ? triggerType : [triggerType];
            var _b = (trigger && trigger.props) || {}, onClick_1 = _b.onClick, onKeyDown_1 = _b.onKeyDown, onMouseEnter_1 = _b.onMouseEnter, onMouseLeave_1 = _b.onMouseLeave, onFocus_1 = _b.onFocus, onBlur_1 = _b.onBlur;
            triggerTypes.forEach(function (triggerType) {
                switch (triggerType) {
                    case 'click':
                        props.onClick = makeChain(_this.handleTriggerClick, onClick_1);
                        props.onKeyDown = makeChain(_this.handleTriggerKeyDown, onKeyDown_1);
                        break;
                    case 'hover':
                        props.onMouseEnter = makeChain(_this.handleTriggerMouseEnter, onMouseEnter_1);
                        props.onMouseLeave = makeChain(_this.handleTriggerMouseLeave, onMouseLeave_1);
                        break;
                    case 'focus':
                        props.onFocus = makeChain(_this.handleTriggerFocus, onFocus_1);
                        props.onBlur = makeChain(_this.handleTriggerBlur, onBlur_1);
                        break;
                    default:
                        break;
                }
            });
        }
        return trigger && (0, react_1.cloneElement)(trigger, props);
    };
    Popup.prototype.renderContent = function () {
        var _this = this;
        var _a = this.props, children = _a.children, triggerType = _a.triggerType;
        var triggerTypes = Array.isArray(triggerType) ? triggerType : [triggerType];
        var content = react_1.Children.only(children);
        var _b = content.props, onMouseDown = _b.onMouseDown, onMouseEnter = _b.onMouseEnter, onMouseLeave = _b.onMouseLeave;
        var props = {
            key: 'portal',
        };
        triggerTypes.forEach(function (triggerType) {
            switch (triggerType) {
                case 'focus':
                    props.onMouseDown = makeChain(_this.handleContentMouseDown, onMouseDown);
                    break;
                case 'hover':
                    props.onMouseEnter = makeChain(_this.handleContentMouseEnter, onMouseEnter);
                    props.onMouseLeave = makeChain(_this.handleContentMouseLeave, onMouseLeave);
                    break;
                default:
                    break;
            }
        });
        return (0, react_1.cloneElement)(content, props);
    };
    Popup.prototype.renderPortal = function () {
        var _this = this;
        var _a = this.props, target = _a.target, safeNode = _a.safeNode, followTrigger = _a.followTrigger, triggerType = _a.triggerType, hasMask = _a.hasMask, wrapperStyle = _a.wrapperStyle, v2 = _a.v2, others = tslib_1.__rest(_a, ["target", "safeNode", "followTrigger", "triggerType", "hasMask", "wrapperStyle", "v2"]);
        var container = this.props.container;
        var findTriggerNode = function () { return (0, react_dom_1.findDOMNode)(_this); };
        var safeNodes = Array.isArray(safeNode) ? tslib_1.__spreadArray([], tslib_1.__read(safeNode), false) : [safeNode];
        safeNodes.unshift(findTriggerNode);
        var newWrapperStyle = wrapperStyle || {};
        if (followTrigger) {
            container = function (trigger) { return (trigger && trigger.parentNode) || trigger; };
            newWrapperStyle.position = 'relative';
        }
        if (triggerType === 'hover' && hasMask) {
            others.onMaskMouseEnter = this.handleMaskMouseEnter;
            others.onMaskMouseLeave = this.handleMaskMouseLeave;
        }
        return (react_1.default.createElement(overlay_1.default, tslib_1.__assign({}, others, { key: "overlay", ref: function (overlay) { return (_this.overlay = overlay); }, visible: this.state.visible, target: target || findTriggerNode, container: container, safeNode: safeNodes, wrapperStyle: newWrapperStyle, triggerType: triggerType, hasMask: hasMask, onRequestClose: this.handleRequestClose }), this.props.children && this.renderContent()));
    };
    Popup.prototype.render = function () {
        return [this.renderTrigger(), this.renderPortal()];
    };
    Popup.propTypes = {
        /**
         * 弹层内容
         */
        children: prop_types_1.default.node,
        /**
         * 触发弹层显示或隐藏的元素
         */
        trigger: prop_types_1.default.element,
        /**
         * 触发弹层显示或隐藏的操作类型，可以是 'click'，'hover'，'focus'，或者它们组成的数组，如 ['hover', 'focus']
         */
        triggerType: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.array]),
        /**
         * 当 triggerType 为 click 时才生效，可自定义触发弹层显示的键盘码
         */
        triggerClickKeycode: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.array]),
        /**
         * 弹层当前是否显示
         */
        visible: prop_types_1.default.bool,
        /**
         * 弹层默认是否显示
         */
        defaultVisible: prop_types_1.default.bool,
        /**
         * 弹层显示或隐藏时触发的回调函数
         */
        onVisibleChange: prop_types_1.default.func,
        /**
         * 设置此属性，弹层无法显示或隐藏
         */
        disabled: prop_types_1.default.bool,
        autoFit: prop_types_1.default.bool,
        /**
         * 弹层显示或隐藏的延时时间（以毫秒为单位），在 triggerType 被设置为 hover 时生效
         */
        delay: prop_types_1.default.number,
        /**
         * 鼠标放置后的延时显示, 单位毫秒 ms
         */
        mouseEnterDelay: prop_types_1.default.number,
        /**
         * 鼠标离开后的延时显示, 单位毫秒 ms
         */
        mouseLeaveDelay: prop_types_1.default.number,
        /**
         * trigger 是否可以关闭弹层
         */
        canCloseByTrigger: prop_types_1.default.bool,
        /**
         * 弹层定位的参照元素
         */
        target: prop_types_1.default.any,
        safeNode: prop_types_1.default.any,
        /**
         * 是否跟随trigger滚动
         */
        followTrigger: prop_types_1.default.bool,
        container: prop_types_1.default.any,
        hasMask: prop_types_1.default.bool,
        wrapperStyle: prop_types_1.default.object,
        rtl: prop_types_1.default.bool,
        /**
         * 开启 v2 版本
         */
        v2: prop_types_1.default.bool,
        /**
         * [v2] 快捷位置，包含 'tl' | 't' | 'tr' | 'rt' | 'r' | 'rb' | 'bl' | 'b' | 'br' | 'lt' | 'l' | 'lb'
         */
        placement: prop_types_1.default.string,
        /**
         * [v2] 弹层偏离触发元素的像素值
         */
        placementOffset: prop_types_1.default.number,
        /**
         * [v2] 浮窗被遮挡时是否自动调整位置
         */
        autoAdjust: prop_types_1.default.bool,
    };
    Popup.defaultProps = {
        triggerType: 'hover',
        triggerClickKeycode: [util_1.KEYCODE.SPACE, util_1.KEYCODE.ENTER],
        defaultVisible: false,
        onVisibleChange: noop,
        disabled: false,
        autoFit: false,
        delay: 200,
        canCloseByTrigger: true,
        followTrigger: false,
        container: function () { return document.body; },
        rtl: false,
    };
    Popup.displayName = 'Popup';
    return Popup;
}(react_1.Component));
exports.default = (0, react_lifecycles_compat_1.polyfill)(Popup);
