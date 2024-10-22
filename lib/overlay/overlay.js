"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_dom_1 = require("react-dom");
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var util_1 = require("../util");
var manager_1 = tslib_1.__importDefault(require("./manager"));
var gateway_1 = tslib_1.__importDefault(require("./gateway"));
var position_1 = tslib_1.__importDefault(require("./position"));
var find_node_1 = tslib_1.__importDefault(require("./utils/find-node"));
var saveLastFocusNode = util_1.focus.saveLastFocusNode, getFocusNodeList = util_1.focus.getFocusNodeList, backLastFocusNode = util_1.focus.backLastFocusNode;
var makeChain = util_1.func.makeChain, noop = util_1.func.noop, bindCtx = util_1.func.bindCtx;
var getContainerNode = function (props) {
    var targetNode = (0, find_node_1.default)(props.target);
    return (0, find_node_1.default)(props.container, targetNode);
};
var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];
var getStyleProperty = function (node, name) {
    var style = window.getComputedStyle(node);
    var ret = '';
    for (var i = 0; i < prefixes.length; i++) {
        ret = style.getPropertyValue(prefixes[i] + name);
        if (ret) {
            break;
        }
    }
    return ret;
};
// 存 containerNode 信息
var containerNodeList = [];
/**
 * Overlay
 */
var Overlay = /** @class */ (function (_super) {
    tslib_1.__extends(Overlay, _super);
    function Overlay(props) {
        var _this = _super.call(this, props) || this;
        _this.saveContentRef = function (ref) {
            _this.contentRef = ref;
        };
        _this.saveGatewayRef = function (ref) {
            _this.gatewayRef = ref;
        };
        _this.lastAlign = props.align;
        bindCtx(_this, [
            'handlePosition',
            'handleAnimateEnd',
            'handleDocumentKeyDown',
            'handleDocumentClick',
            'handleMaskClick',
            'beforeOpen',
            'beforeClose',
        ]);
        _this.state = {
            visible: false,
            status: 'none',
            animation: _this.getAnimation(props),
            willOpen: false,
            willClose: false,
        };
        _this.timeoutMap = {};
        return _this;
    }
    Overlay.getDerivedStateFromProps = function (nextProps, prevState) {
        var willOpen = !prevState.visible && nextProps.visible;
        var willClose = prevState.visible && !nextProps.visible;
        var nextState = {
            willOpen: willOpen,
            willClose: willClose,
        };
        if (willOpen) {
            nextProps.beforeOpen && nextProps.beforeOpen();
        }
        else if (willClose) {
            nextProps.beforeClose && nextProps.beforeClose();
        }
        if (nextProps.animation || nextProps.animation === false) {
            nextState.animation = nextProps.animation;
        }
        if (nextProps.animation !== false && util_1.support.animation) {
            if (willOpen) {
                nextState.visible = true;
                nextState.status = 'mounting';
            }
            else if (willClose) {
                // can not set visible=false directly, otherwise animation not work without dom
                // nextState.visible = false;
                nextState.status = 'leaving';
            }
        }
        else if ('visible' in nextProps && nextProps.visible !== prevState.visible) {
            nextState.visible = nextProps.visible;
        }
        return nextState;
    };
    Overlay.prototype.componentDidMount = function () {
        if (this.state.willOpen) {
            this.beforeOpen();
        }
        else if (this.state.willClose) {
            this.beforeClose();
        }
        if (this.state.visible) {
            this.doAnimation(true, false);
            this._isMounted = true;
        }
        this.addDocumentEvents();
        manager_1.default.addOverlay(this);
    };
    Overlay.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.willOpen) {
            this.beforeOpen();
        }
        else if (this.state.willClose) {
            this.beforeClose();
        }
        if (!this._isMounted && this.props.visible) {
            this._isMounted = true;
        }
        if (this.props.align !== prevProps.align) {
            this.lastAlign = prevProps.align;
        }
        var willOpen = !prevProps.visible && this.props.visible;
        var willClose = prevProps.visible && !this.props.visible;
        (willOpen || willClose) && this.doAnimation(willOpen, willClose);
    };
    Overlay.prototype.componentWillUnmount = function () {
        this._isDestroyed = true;
        this._isMounted = false;
        manager_1.default.removeOverlay(this);
        this.removeDocumentEvents();
        if (this.focusTimeout) {
            clearTimeout(this.focusTimeout);
        }
        if (this._animation) {
            this._animation.off();
            this._animation = null;
        }
        this.beforeClose();
    };
    Overlay.prototype.doAnimation = function (open, close) {
        var _this = this;
        if (this.state.animation && util_1.support.animation) {
            if (open) {
                this.onEntering();
            }
            else if (close) {
                this.onLeaving();
            }
            this.addAnimationEvents();
        }
        else {
            if (open) {
                // fix https://github.com/alibaba-fusion/next/issues/1901
                setTimeout(function () {
                    _this.props.onOpen();
                    util_1.dom.addClass(_this.getWrapperNode(), 'opened');
                    manager_1.default.addOverlay(_this);
                    _this.props.afterOpen();
                });
            }
            else if (close) {
                this.props.onClose();
                util_1.dom.removeClass(this.getWrapperNode(), 'opened');
                manager_1.default.removeOverlay(this);
                this.props.afterClose();
            }
            this.setFocusNode();
        }
    };
    Overlay.prototype.getAnimation = function (props) {
        if (props.animation === false) {
            return false;
        }
        if (props.animation) {
            return props.animation;
        }
        return this.getAnimationByAlign(props.align);
    };
    Overlay.prototype.getAnimationByAlign = function (align) {
        switch (align[0]) {
            case 't':
                return {
                    // 为了防止有的用户 js 升级了而 css 没升级，所以把两个动画都保留了。
                    // 动画不会叠加，会替代，顺序根据 src/animate/main.scss 中的样式先后顺序遵循 css 覆盖原则
                    // fadeInDownSmall fadeOutUpSmall 优先级更高
                    in: 'expandInDown fadeInDownSmall',
                    out: 'expandOutUp fadeOutUpSmall',
                };
            case 'b':
                return {
                    in: 'fadeInUp',
                    out: 'fadeOutDown',
                };
            default:
                return {
                    in: 'expandInDown fadeInDownSmall',
                    out: 'expandOutUp fadeOutUpSmall',
                };
        }
    };
    Overlay.prototype.addAnimationEvents = function () {
        var _this = this;
        if (typeof window === 'undefined') {
            return;
        }
        setTimeout(function () {
            var node = _this.getContentNode();
            if (node) {
                var id_1 = (0, util_1.guid)();
                _this._animation = util_1.events.on(node, util_1.support.animation.end, _this.handleAnimateEnd.bind(_this, id_1));
                var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
                var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
                var time = animationDelay + animationDuration;
                if (time) {
                    _this.timeoutMap[id_1] = window.setTimeout(function () {
                        _this.handleAnimateEnd(id_1);
                    }, time * 1000 + 200);
                }
            }
        });
    };
    Overlay.prototype.handlePosition = function (config) {
        var align = config.align.join(' ');
        if (!('animation' in this.props) && this.props.needAdjust && this.lastAlign !== align) {
            this.setState({
                animation: this.getAnimationByAlign(align),
            });
        }
        var status = this.state.status;
        if (status === 'mounting') {
            this.setState({
                status: 'entering',
            });
        }
        this.lastAlign = align;
    };
    Overlay.prototype.handleAnimateEnd = function (id) {
        if (this.timeoutMap[id]) {
            clearTimeout(this.timeoutMap[id]);
        }
        delete this.timeoutMap[id];
        if (this._animation) {
            this._animation.off();
            this._animation = null;
        }
        if (!this._isMounted) {
            return;
        }
        if (this.state.status === 'leaving') {
            this.setState({
                visible: false,
                status: 'none',
            });
            this.onLeaved();
            // dom 结构首次出现 触发的是 entering
            // dom 结构已经存在（例如设置了 cache），触发的是 mounting
        }
        else if (this.state.status === 'entering' || this.state.status === 'mounting') {
            this.setState({
                status: 'none',
            });
            this.onEntered();
        }
    };
    Overlay.prototype.onEntering = function () {
        var _this = this;
        if (this._isDestroyed) {
            return;
        }
        // make sure overlay.ref has been called (eg: menu/popup-item called overlay.getInstance().getContentNode().)
        setTimeout(function () {
            var wrapperNode = _this.getWrapperNode();
            util_1.dom.addClass(wrapperNode, 'opened');
            _this.props.onOpen();
        });
    };
    Overlay.prototype.onLeaving = function () {
        var wrapperNode = this.getWrapperNode();
        util_1.dom.removeClass(wrapperNode, 'opened');
        this.props.onClose();
    };
    Overlay.prototype.onEntered = function () {
        manager_1.default.addOverlay(this);
        this.setFocusNode();
        this.props.afterOpen();
    };
    Overlay.prototype.onLeaved = function () {
        manager_1.default.removeOverlay(this);
        this.setFocusNode();
        this.props.afterClose();
    };
    Overlay.prototype.beforeOpen = function () {
        if (this.props.disableScroll) {
            var containerNode_1 = getContainerNode(this.props) || document.body;
            var _a = containerNode_1.style, overflow = _a.overflow, paddingRight = _a.paddingRight;
            var cnInfo = containerNodeList.find(function (m) { return m.containerNode === containerNode_1; }) || {
                containerNode: containerNode_1,
                count: 0,
            };
            /**
             * container 节点初始状态已经是 overflow=hidden 则忽略
             * See {@link https://codesandbox.io/s/next-overlay-overflow-2-fulpq?file=/src/App.js}
             */
            if (cnInfo.count === 0 && overflow !== 'hidden') {
                var style = {
                    overflow: 'hidden',
                };
                cnInfo.overflow = overflow;
                if (util_1.dom.hasScroll(containerNode_1)) {
                    cnInfo.paddingRight = paddingRight;
                    style.paddingRight = "".concat(util_1.dom.getStyle(containerNode_1, 'paddingRight') +
                        util_1.dom.scrollbar().width, "px");
                }
                util_1.dom.setStyle(containerNode_1, style);
                containerNodeList.push(cnInfo);
                cnInfo.count++;
            }
            else if (cnInfo.count) {
                cnInfo.count++;
            }
            this._containerNode = containerNode_1;
        }
    };
    Overlay.prototype.beforeClose = function () {
        var _this = this;
        if (this.props.disableScroll) {
            var idx = containerNodeList.findIndex(function (cn) { return cn.containerNode === _this._containerNode; });
            if (idx !== -1) {
                var cnInfo = containerNodeList[idx];
                var overflow = cnInfo.overflow, paddingRight = cnInfo.paddingRight;
                // 最后一个 overlay 的时候再将样式重置回去
                // 此时 overflow 应该值在 beforeOpen 中设置的 hidden
                if (cnInfo.count === 1 &&
                    this._containerNode &&
                    this._containerNode.style.overflow === 'hidden') {
                    var style = {
                        overflow: overflow,
                    };
                    if (paddingRight !== undefined) {
                        style.paddingRight = paddingRight;
                    }
                    util_1.dom.setStyle(this._containerNode, style);
                }
                cnInfo.count--;
                if (cnInfo.count === 0) {
                    containerNodeList.splice(idx, 1);
                }
            }
            this._containerNode = undefined;
        }
    };
    Overlay.prototype.setFocusNode = function () {
        var _this = this;
        if (!this.props.autoFocus) {
            return;
        }
        if (this.state.visible && !this._hasFocused) {
            saveLastFocusNode();
            // 这个时候很可能上一个弹层的关闭事件还未触发，导致焦点已经回到触发的元素
            // 这里延时处理一下，延时的时间为 document.click 捕获触发的延时时间
            this.focusTimeout = window.setTimeout(function () {
                var node = _this.getContentNode();
                if (node) {
                    var focusNodeList = getFocusNodeList(node);
                    if (focusNodeList.length) {
                        focusNodeList[0].focus();
                    }
                    _this._hasFocused = true;
                }
            }, 100);
        }
        else if (!this.state.visible && this._hasFocused) {
            backLastFocusNode();
            this._hasFocused = false;
        }
    };
    Overlay.prototype.getContent = function () {
        return this.contentRef;
    };
    Overlay.prototype.getContentNode = function () {
        try {
            return (0, react_dom_1.findDOMNode)(this.contentRef);
        }
        catch (err) {
            return null;
        }
    };
    Overlay.prototype.getWrapperNode = function () {
        return this.gatewayRef ? this.gatewayRef.getChildNode() : null;
    };
    /**
     * document global event
     */
    Overlay.prototype.addDocumentEvents = function () {
        // FIXME: canCloseByEsc、canCloseByOutSideClick、canCloseByMask 仅在 didMount 时生效，update 时不生效
        var useCapture = this.props.useCapture;
        // use capture phase listener to be compatible with react17
        // https://reactjs.org/blog/2020/08/10/react-v17-rc.html#fixing-potential-issues
        if (typeof document === 'undefined')
            return;
        if (this.props.canCloseByEsc) {
            this._keydownEvents = util_1.events.on(document, 'keydown', this.handleDocumentKeyDown, useCapture);
        }
        if (this.props.canCloseByOutSideClick) {
            this._clickEvents = util_1.events.on(document, 'click', this.handleDocumentClick, useCapture);
            this._touchEvents = util_1.events.on(document, 'touchend', this.handleDocumentClick, useCapture);
        }
    };
    Overlay.prototype.removeDocumentEvents = function () {
        var _this = this;
        ['_keydownEvents', '_clickEvents', '_touchEvents'].forEach(function (event) {
            if (_this[event]) {
                _this[event].off();
                _this[event] = null;
            }
        });
    };
    Overlay.prototype.handleDocumentKeyDown = function (e) {
        if (this.state.visible &&
            e.keyCode === util_1.KEYCODE.ESC &&
            manager_1.default.isCurrentOverlay(this)) {
            this.props.onRequestClose('keyboard', e);
        }
    };
    Overlay.prototype.isInShadowDOM = function (node) {
        return node.getRootNode ? node.getRootNode().nodeType === 11 : false;
    };
    Overlay.prototype.getEventPath = function (event) {
        // 参考 https://github.com/spring-media/react-shadow-dom-retarget-events/blob/master/index.js#L29
        return (event.path ||
            (event.composedPath && event.composedPath()) ||
            this.composedPath(event.target));
    };
    Overlay.prototype.composedPath = function (el) {
        var path = [];
        while (el) {
            path.push(el);
            if (el.tagName === 'HTML') {
                path.push(document);
                path.push(window);
                return path;
            }
            el = el.parentElement;
        }
    };
    Overlay.prototype.matchInShadowDOM = function (node, e) {
        if (this.isInShadowDOM(node)) {
            // Shadow DOM 环境中，触发点击事件，监听 document click 事件获得的事件源
            // 并非实际触发的 dom 节点，而是 Shadow DOM 的 host 节点
            // 进而会导致如 Select 组件的下拉弹层打开后立即关闭等问题
            // 因此额外增加 node 和 eventPath 的判断
            var eventPath = this.getEventPath(e);
            return node === eventPath[0] || node.contains(eventPath[0]);
        }
        return false;
    };
    Overlay.prototype.handleDocumentClick = function (e) {
        var _this = this;
        if (this.state.visible) {
            var safeNode = this.props.safeNode;
            var safeNodes = Array.isArray(safeNode) ? tslib_1.__spreadArray([], tslib_1.__read(safeNode), false) : [safeNode];
            safeNodes.unshift(function () { return _this.getWrapperNode(); });
            for (var i = 0; i < safeNodes.length; i++) {
                var node = (0, find_node_1.default)(safeNodes[i], this.props);
                // HACK: 如果触发点击的节点是弹层内部的节点，并且在被点击后立即销毁，那么此时无法使用 node.contains(e.target)
                // 来判断此时点击的节点是否是弹层内部的节点，额外判断
                if (node &&
                    (node === e.target ||
                        node.contains(e.target) ||
                        this.matchInShadowDOM(node, e) ||
                        (e.target !== document &&
                            !document.documentElement.contains(e.target)))) {
                    return;
                }
            }
            this.props.onRequestClose('docClick', e);
        }
    };
    Overlay.prototype.handleMaskClick = function (e) {
        if (e.currentTarget === e.target && this.props.canCloseByMask) {
            this.props.onRequestClose('maskClick', e);
        }
    };
    // 兼容过去的用法：this.popupRef.getInstance().overlay.getInstance().getContentNode()
    Overlay.prototype.getInstance = function () {
        return this;
    };
    Overlay.prototype.render = function () {
        var _a, _b;
        var _c = this.props, prefix = _c.prefix, className = _c.className, style = _c.style, propChildren = _c.children, target = _c.target, align = _c.align, offset = _c.offset, container = _c.container, hasMask = _c.hasMask, needAdjust = _c.needAdjust, autoFit = _c.autoFit, beforePosition = _c.beforePosition, onPosition = _c.onPosition, wrapperStyle = _c.wrapperStyle, rtl = _c.rtl, propShouldUpdatePosition = _c.shouldUpdatePosition, cache = _c.cache, wrapperClassName = _c.wrapperClassName, onMaskMouseEnter = _c.onMaskMouseEnter, onMaskMouseLeave = _c.onMaskMouseLeave, maskClass = _c.maskClass, isChildrenInMask = _c.isChildrenInMask, pinFollowBaseElementWhenFixed = _c.pinFollowBaseElementWhenFixed;
        var _d = this.state, stateVisible = _d.visible, status = _d.status, animation = _d.animation;
        var children = stateVisible || (cache && this._isMounted) ? propChildren : null;
        if (children) {
            var child = react_1.Children.only(children);
            // if chlild is a functional component wrap in a component to allow a ref to be set
            if (typeof child.type === 'function' && !(child.type.prototype instanceof react_1.Component)) {
                child = react_1.default.createElement("div", { role: "none" }, child);
            }
            var childClazz = (0, classnames_1.default)((_a = {},
                _a["".concat(prefix, "overlay-inner")] = true,
                _a[animation.in] = status === 'entering' || status === 'mounting',
                _a[animation.out] = status === 'leaving',
                _a[child.props.className] = !!child.props.className,
                _a[className] = !!className,
                _a));
            if (typeof child.ref === 'string') {
                throw new Error('Can not set ref by string in Overlay, use function instead.');
            }
            children = (0, react_1.cloneElement)(child, {
                className: childClazz,
                style: tslib_1.__assign(tslib_1.__assign({}, child.props.style), style),
                ref: makeChain(this.saveContentRef, child.ref),
                'aria-hidden': !stateVisible && cache && this._isMounted,
                onClick: makeChain(this.props.onClick, child.props.onClick),
                onTouchEnd: makeChain(this.props.onTouchEnd, child.props.onTouchEnd),
            });
            if (align) {
                var shouldUpdatePosition = status !== 'leaving' && propShouldUpdatePosition;
                children = (react_1.default.createElement(position_1.default, { children: children, target: target, align: align, offset: offset, autoFit: autoFit, container: container, needAdjust: needAdjust, pinFollowBaseElementWhenFixed: pinFollowBaseElementWhenFixed, beforePosition: beforePosition, onPosition: makeChain(this.handlePosition, onPosition), shouldUpdatePosition: shouldUpdatePosition, rtl: rtl }));
            }
            var wrapperClazz = (0, classnames_1.default)(["".concat(prefix, "overlay-wrapper"), wrapperClassName]);
            var newWrapperStyle = Object.assign({}, {
                display: stateVisible ? '' : 'none',
            }, wrapperStyle);
            var maskClazz = (0, classnames_1.default)((_b = {},
                _b["".concat(prefix, "overlay-backdrop")] = true,
                _b[maskClass] = !!maskClass,
                _b));
            children = (react_1.default.createElement("div", { className: wrapperClazz, style: newWrapperStyle, dir: rtl ? 'rtl' : undefined },
                hasMask ? (react_1.default.createElement("div", { className: maskClazz, onClick: this.handleMaskClick, onMouseEnter: onMaskMouseEnter, onMouseLeave: onMaskMouseLeave, dir: rtl ? 'rtl' : undefined }, isChildrenInMask && children)) : null,
                !isChildrenInMask && children));
        }
        return react_1.default.createElement(gateway_1.default, { container: container, target: target, children: children, ref: this.saveGatewayRef });
    };
    Overlay.propTypes = {
        prefix: prop_types_1.default.string,
        pure: prop_types_1.default.bool,
        rtl: prop_types_1.default.bool,
        className: prop_types_1.default.string,
        style: prop_types_1.default.object,
        children: prop_types_1.default.any,
        visible: prop_types_1.default.bool,
        onRequestClose: prop_types_1.default.func,
        target: prop_types_1.default.any,
        align: prop_types_1.default.string,
        offset: prop_types_1.default.array,
        container: prop_types_1.default.any,
        hasMask: prop_types_1.default.bool,
        canCloseByEsc: prop_types_1.default.bool,
        canCloseByOutSideClick: prop_types_1.default.bool,
        canCloseByMask: prop_types_1.default.bool,
        beforeOpen: prop_types_1.default.func,
        onOpen: prop_types_1.default.func,
        afterOpen: prop_types_1.default.func,
        beforeClose: prop_types_1.default.func,
        onClose: prop_types_1.default.func,
        afterClose: prop_types_1.default.func,
        beforePosition: prop_types_1.default.func,
        onPosition: prop_types_1.default.func,
        shouldUpdatePosition: prop_types_1.default.bool,
        autoFocus: prop_types_1.default.bool,
        needAdjust: prop_types_1.default.bool,
        disableScroll: prop_types_1.default.bool,
        useCapture: prop_types_1.default.bool,
        cache: prop_types_1.default.bool,
        safeNode: prop_types_1.default.any,
        wrapperClassName: prop_types_1.default.string,
        wrapperStyle: prop_types_1.default.object,
        animation: prop_types_1.default.oneOfType([prop_types_1.default.object, prop_types_1.default.bool]),
        onMaskMouseEnter: prop_types_1.default.func,
        onMaskMouseLeave: prop_types_1.default.func,
        onClick: prop_types_1.default.func,
        maskClass: prop_types_1.default.string,
        isChildrenInMask: prop_types_1.default.bool,
        pinFollowBaseElementWhenFixed: prop_types_1.default.bool,
        v2: prop_types_1.default.bool,
        points: prop_types_1.default.array,
    };
    Overlay.defaultProps = {
        prefix: 'next-',
        pure: false,
        visible: false,
        onRequestClose: noop,
        target: position_1.default.VIEWPORT,
        align: 'tl bl',
        offset: [0, 0],
        hasMask: false,
        canCloseByEsc: true,
        canCloseByOutSideClick: true,
        canCloseByMask: true,
        beforeOpen: noop,
        onOpen: noop,
        afterOpen: noop,
        beforeClose: noop,
        onClose: noop,
        afterClose: noop,
        beforePosition: noop,
        onPosition: noop,
        onMaskMouseEnter: noop,
        onMaskMouseLeave: noop,
        shouldUpdatePosition: false,
        autoFocus: false,
        needAdjust: true,
        disableScroll: false,
        cache: false,
        isChildrenInMask: false,
        onTouchEnd: function (event) {
            event.stopPropagation();
        },
        onClick: function (event) { return event.stopPropagation(); },
        maskClass: '',
        useCapture: true,
    };
    Overlay.displayName = 'Overlay';
    return Overlay;
}(react_1.Component));
exports.default = (0, react_lifecycles_compat_1.polyfill)(Overlay);
