import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React, { Children, Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { dom, events, focus, func, guid, KEYCODE, support } from '../util';
import overlayManager from './manager';
import Gateway from './gateway';
import Position from './position';
import findNode from './utils/find-node';

var saveLastFocusNode = focus.saveLastFocusNode,
    getFocusNodeList = focus.getFocusNodeList,
    backLastFocusNode = focus.backLastFocusNode;
var makeChain = func.makeChain,
    noop = func.noop,
    bindCtx = func.bindCtx;


var getContainerNode = function getContainerNode(props) {
    var targetNode = findNode(props.target);
    return findNode(props.container, targetNode);
};

var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];
var getStyleProperty = function getStyleProperty(node, name) {
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
var Overlay = (_temp = _class = function (_Component) {
    _inherits(Overlay, _Component);

    function Overlay(props) {
        _classCallCheck(this, Overlay);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.saveContentRef = function (ref) {
            _this.contentRef = ref;
        };

        _this.saveGatewayRef = function (ref) {
            _this.gatewayRef = ref;
        };

        _this.lastAlign = props.align;

        bindCtx(_this, ['handlePosition', 'handleAnimateEnd', 'handleDocumentKeyDown', 'handleDocumentClick', 'handleMaskClick', 'beforeOpen', 'beforeClose']);

        _this.state = {
            visible: false,
            status: 'none',
            animation: _this.getAnimation(props),
            willOpen: false,
            willClose: false
        };

        _this.timeoutMap = {};
        return _this;
    }

    Overlay.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
        var willOpen = !prevState.visible && nextProps.visible;
        var willClose = prevState.visible && !nextProps.visible;

        var nextState = {
            willOpen: willOpen,
            willClose: willClose
        };

        if (willOpen) {
            nextProps.beforeOpen && nextProps.beforeOpen();
        } else if (willClose) {
            nextProps.beforeClose && nextProps.beforeClose();
        }

        if (nextProps.animation || nextProps.animation === false) {
            nextState.animation = nextProps.animation;
        }

        if (nextProps.animation !== false && support.animation) {
            if (willOpen) {
                nextState.visible = true;
                nextState.status = 'mounting';
            } else if (willClose) {
                // can not set visible=false directly, otherwise animation not work without dom
                // nextState.visible = false;
                nextState.status = 'leaving';
            }
        } else if ('visible' in nextProps && nextProps.visible !== prevState.visible) {
            nextState.visible = nextProps.visible;
        }

        return nextState;
    };

    Overlay.prototype.componentDidMount = function componentDidMount() {
        if (this.state.willOpen) {
            this.beforeOpen();
        } else if (this.state.willClose) {
            this.beforeClose();
        }

        if (this.state.visible) {
            this.doAnimation(true, false);
            this._isMounted = true;
        }

        this.addDocumentEvents();

        overlayManager.addOverlay(this);
    };

    Overlay.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        if (this.state.willOpen) {
            this.beforeOpen();
        } else if (this.state.willClose) {
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

    Overlay.prototype.componentWillUnmount = function componentWillUnmount() {
        this._isDestroyed = true;
        this._isMounted = false;
        overlayManager.removeOverlay(this);
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

    Overlay.prototype.doAnimation = function doAnimation(open, close) {
        var _this2 = this;

        if (this.state.animation && support.animation) {
            if (open) {
                this.onEntering();
            } else if (close) {
                this.onLeaving();
            }
            this.addAnimationEvents();
        } else {
            if (open) {
                // fix https://github.com/alibaba-fusion/next/issues/1901
                setTimeout(function () {
                    _this2.props.onOpen();
                    dom.addClass(_this2.getWrapperNode(), 'opened');
                    overlayManager.addOverlay(_this2);
                    _this2.props.afterOpen();
                });
            } else if (close) {
                this.props.onClose();
                dom.removeClass(this.getWrapperNode(), 'opened');
                overlayManager.removeOverlay(this);
                this.props.afterClose();
            }
            this.setFocusNode();
        }
    };

    Overlay.prototype.getAnimation = function getAnimation(props) {
        if (props.animation === false) {
            return false;
        }

        if (props.animation) {
            return props.animation;
        }

        return this.getAnimationByAlign(props.align);
    };

    Overlay.prototype.getAnimationByAlign = function getAnimationByAlign(align) {
        switch (align[0]) {
            case 't':
                return {
                    // 为了防止有的用户 js升级了而css没升级，所以把两个动画都保留了。
                    // 动画不会叠加，会替代，顺序根据 src/animate/main.scss 中的样式先后顺序遵循css覆盖原则
                    // fadeInDownSmall fadeOutUpSmall 优先级更高
                    in: 'expandInDown fadeInDownSmall',
                    out: 'expandOutUp fadeOutUpSmall'
                };
            case 'b':
                return {
                    in: 'fadeInUp',
                    out: 'fadeOutDown'
                };
            default:
                return {
                    in: 'expandInDown fadeInDownSmall',
                    out: 'expandOutUp fadeOutUpSmall'
                };
        }
    };

    Overlay.prototype.addAnimationEvents = function addAnimationEvents() {
        var _this3 = this;

        setTimeout(function () {
            var node = _this3.getContentNode();
            if (node) {
                var id = guid();

                _this3._animation = events.on(node, support.animation.end, _this3.handleAnimateEnd.bind(_this3, id));

                var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
                var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
                var time = animationDelay + animationDuration;
                if (time) {
                    _this3.timeoutMap[id] = setTimeout(function () {
                        _this3.handleAnimateEnd(id);
                    }, time * 1000 + 200);
                }
            }
        });
    };

    Overlay.prototype.handlePosition = function handlePosition(config) {
        var align = config.align.join(' ');

        if (!('animation' in this.props) && this.props.needAdjust && this.lastAlign !== align) {
            this.setState({
                animation: this.getAnimationByAlign(align)
            });
        }

        var status = this.state.status;

        if (status === 'mounting') {
            this.setState({
                status: 'entering'
            });
        }

        this.lastAlign = align;
    };

    Overlay.prototype.handleAnimateEnd = function handleAnimateEnd(id) {
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
                status: 'none'
            });

            this.onLeaved();
            // dom结构首次出现 触发的是entering
            // dom结构已经存在（例如设置了cache），触发的是mounting
        } else if (this.state.status === 'entering' || this.state.status === 'mounting') {
            this.setState({
                status: 'none'
            });

            this.onEntered();
        }
    };

    Overlay.prototype.onEntering = function onEntering() {
        var _this4 = this;

        if (this._isDestroyed) {
            return;
        }

        // make sure overlay.ref has been called (eg: menu/popup-item called overlay.getInstance().getContentNode().)
        setTimeout(function () {
            var wrapperNode = _this4.getWrapperNode();
            dom.addClass(wrapperNode, 'opened');
            _this4.props.onOpen();
        });
    };

    Overlay.prototype.onLeaving = function onLeaving() {
        var wrapperNode = this.getWrapperNode();
        dom.removeClass(wrapperNode, 'opened');
        this.props.onClose();
    };

    Overlay.prototype.onEntered = function onEntered() {
        overlayManager.addOverlay(this);
        this.setFocusNode();
        this.props.afterOpen();
    };

    Overlay.prototype.onLeaved = function onLeaved() {
        overlayManager.removeOverlay(this);
        this.setFocusNode();
        this.props.afterClose();
    };

    Overlay.prototype.beforeOpen = function beforeOpen() {
        if (this.props.disableScroll) {
            var containerNode = getContainerNode(this.props) || document.body;
            var _containerNode$style = containerNode.style,
                overflow = _containerNode$style.overflow,
                paddingRight = _containerNode$style.paddingRight;


            var cnInfo = containerNodeList.find(function (m) {
                return m.containerNode === containerNode;
            }) || {
                containerNode: containerNode,
                count: 0
            };

            /**
             * container 节点初始状态已经是 overflow=hidden 则忽略
             * See {@link https://codesandbox.io/s/next-overlay-overflow-2-fulpq?file=/src/App.js}
             */
            if (cnInfo.count === 0 && overflow !== 'hidden') {
                var style = {
                    overflow: 'hidden'
                };

                cnInfo.overflow = overflow;

                if (dom.hasScroll(containerNode)) {
                    cnInfo.paddingRight = paddingRight;
                    style.paddingRight = dom.getStyle(containerNode, 'paddingRight') + dom.scrollbar().width + 'px';
                }

                dom.setStyle(containerNode, style);
                containerNodeList.push(cnInfo);
                cnInfo.count++;
            } else if (cnInfo.count) {
                cnInfo.count++;
            }

            this._containerNode = containerNode;
        }
    };

    Overlay.prototype.beforeClose = function beforeClose() {
        var _this5 = this;

        if (this.props.disableScroll) {
            var idx = containerNodeList.findIndex(function (cn) {
                return cn.containerNode === _this5._containerNode;
            });

            if (idx !== -1) {
                var cnInfo = containerNodeList[idx];
                var overflow = cnInfo.overflow,
                    paddingRight = cnInfo.paddingRight;

                // 最后一个 overlay 的时候再将样式重置回去
                // 此时 overflow 应该值在 beforeOpen 中设置的 hidden

                if (cnInfo.count === 1 && this._containerNode && this._containerNode.style.overflow === 'hidden') {
                    var style = {
                        overflow: overflow
                    };

                    if (paddingRight !== undefined) {
                        style.paddingRight = paddingRight;
                    }

                    dom.setStyle(this._containerNode, style);
                }

                cnInfo.count--;

                if (cnInfo.count === 0) {
                    containerNodeList.splice(idx, 1);
                }
            }
            this._containerNode = undefined;
        }
    };

    Overlay.prototype.setFocusNode = function setFocusNode() {
        var _this6 = this;

        if (!this.props.autoFocus) {
            return;
        }

        if (this.state.visible && !this._hasFocused) {
            saveLastFocusNode();
            // 这个时候很可能上一个弹层的关闭事件还未触发，导致焦点已经回到触发的元素
            // 这里延时处理一下，延时的时间为 document.click 捕获触发的延时时间
            this.focusTimeout = setTimeout(function () {
                var node = _this6.getContentNode();
                if (node) {
                    var focusNodeList = getFocusNodeList(node);
                    if (focusNodeList.length) {
                        focusNodeList[0].focus();
                    }
                    _this6._hasFocused = true;
                }
            }, 100);
        } else if (!this.state.visible && this._hasFocused) {
            backLastFocusNode();
            this._hasFocused = false;
        }
    };

    Overlay.prototype.getContent = function getContent() {
        return this.contentRef;
    };

    Overlay.prototype.getContentNode = function getContentNode() {
        try {
            return findDOMNode(this.contentRef);
        } catch (err) {
            return null;
        }
    };

    Overlay.prototype.getWrapperNode = function getWrapperNode() {
        return this.gatewayRef ? this.gatewayRef.getChildNode() : null;
    };

    /**
     * document global event
     */


    Overlay.prototype.addDocumentEvents = function addDocumentEvents() {
        var useCapture = this.props.useCapture;
        // use capture phase listener to be compatible with react17
        // https://reactjs.org/blog/2020/08/10/react-v17-rc.html#fixing-potential-issues

        if (this.props.canCloseByEsc) {
            this._keydownEvents = events.on(document, 'keydown', this.handleDocumentKeyDown, useCapture);
        }

        if (this.props.canCloseByOutSideClick) {
            this._clickEvents = events.on(document, 'click', this.handleDocumentClick, useCapture);
            this._touchEvents = events.on(document, 'touchend', this.handleDocumentClick, useCapture);
        }
    };

    Overlay.prototype.removeDocumentEvents = function removeDocumentEvents() {
        var _this7 = this;

        ['_keydownEvents', '_clickEvents', '_touchEvents'].forEach(function (event) {
            if (_this7[event]) {
                _this7[event].off();
                _this7[event] = null;
            }
        });
    };

    Overlay.prototype.handleDocumentKeyDown = function handleDocumentKeyDown(e) {
        if (this.state.visible && e.keyCode === KEYCODE.ESC && overlayManager.isCurrentOverlay(this)) {
            this.props.onRequestClose('keyboard', e);
        }
    };

    Overlay.prototype.isInShadowDOM = function isInShadowDOM(node) {
        return node.getRootNode ? node.getRootNode().nodeType === 11 : false;
    };

    Overlay.prototype.getEventPath = function getEventPath(event) {
        // 参考 https://github.com/spring-media/react-shadow-dom-retarget-events/blob/master/index.js#L29
        return event.path || event.composedPath && event.composedPath() || this.composedPath(event.target);
    };

    Overlay.prototype.composedPath = function composedPath(el) {
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

    Overlay.prototype.matchInShadowDOM = function matchInShadowDOM(node, e) {
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

    Overlay.prototype.handleDocumentClick = function handleDocumentClick(e) {
        var _this8 = this;

        if (this.state.visible) {
            var safeNode = this.props.safeNode;

            var safeNodes = Array.isArray(safeNode) ? [].concat(safeNode) : [safeNode];
            safeNodes.unshift(function () {
                return _this8.getWrapperNode();
            });

            for (var i = 0; i < safeNodes.length; i++) {
                var node = findNode(safeNodes[i], this.props);
                // HACK: 如果触发点击的节点是弹层内部的节点，并且在被点击后立即销毁，那么此时无法使用 node.contains(e.target)
                // 来判断此时点击的节点是否是弹层内部的节点，额外判断
                if (node && (node === e.target || node.contains(e.target) || this.matchInShadowDOM(node, e) || e.target !== document && !document.documentElement.contains(e.target))) {
                    return;
                }
            }

            this.props.onRequestClose('docClick', e);
        }
    };

    Overlay.prototype.handleMaskClick = function handleMaskClick(e) {
        if (e.currentTarget === e.target && this.props.canCloseByMask) {
            this.props.onRequestClose('maskClick', e);
        }
    };

    // 兼容过去的用法: this.popupRef.getInstance().overlay.getInstance().getContentNode()
    Overlay.prototype.getInstance = function getInstance() {
        return this;
    };

    Overlay.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            style = _props.style,
            propChildren = _props.children,
            target = _props.target,
            align = _props.align,
            offset = _props.offset,
            container = _props.container,
            hasMask = _props.hasMask,
            needAdjust = _props.needAdjust,
            autoFit = _props.autoFit,
            beforePosition = _props.beforePosition,
            onPosition = _props.onPosition,
            wrapperStyle = _props.wrapperStyle,
            rtl = _props.rtl,
            propShouldUpdatePosition = _props.shouldUpdatePosition,
            cache = _props.cache,
            wrapperClassName = _props.wrapperClassName,
            onMaskMouseEnter = _props.onMaskMouseEnter,
            onMaskMouseLeave = _props.onMaskMouseLeave,
            maskClass = _props.maskClass,
            isChildrenInMask = _props.isChildrenInMask,
            pinFollowBaseElementWhenFixed = _props.pinFollowBaseElementWhenFixed;
        var _state = this.state,
            stateVisible = _state.visible,
            status = _state.status,
            animation = _state.animation;


        var children = stateVisible || cache && this._isMounted ? propChildren : null;
        if (children) {
            var _classnames, _classnames2;

            var child = Children.only(children);
            // if chlild is a functional component wrap in a component to allow a ref to be set
            if (typeof child.type === 'function' && !(child.type.prototype instanceof Component)) {
                child = React.createElement(
                    'div',
                    { role: 'none' },
                    child
                );
            }
            var childClazz = classnames((_classnames = {}, _classnames[prefix + 'overlay-inner'] = true, _classnames[animation.in] = status === 'entering' || status === 'mounting', _classnames[animation.out] = status === 'leaving', _classnames[child.props.className] = !!child.props.className, _classnames[className] = !!className, _classnames));
            if (typeof child.ref === 'string') {
                throw new Error('Can not set ref by string in Overlay, use function instead.');
            }

            children = React.cloneElement(child, {
                className: childClazz,
                style: _extends({}, child.props.style, style),
                ref: makeChain(this.saveContentRef, child.ref),
                'aria-hidden': !stateVisible && cache && this._isMounted,
                onClick: makeChain(this.props.onClick, child.props.onClick),
                onTouchEnd: makeChain(this.props.onTouchEnd, child.props.onTouchEnd)
            });

            if (align) {
                var shouldUpdatePosition = status === 'leaving' ? false : propShouldUpdatePosition;
                children = React.createElement(Position, {
                    children: children,
                    target: target,
                    align: align,
                    offset: offset,
                    autoFit: autoFit,
                    container: container,
                    needAdjust: needAdjust,
                    pinFollowBaseElementWhenFixed: pinFollowBaseElementWhenFixed,
                    beforePosition: beforePosition,
                    onPosition: makeChain(this.handlePosition, onPosition),
                    shouldUpdatePosition: shouldUpdatePosition,
                    rtl: rtl
                });
            }

            var wrapperClazz = classnames([prefix + 'overlay-wrapper', wrapperClassName]);
            var newWrapperStyle = _extends({}, {
                display: stateVisible ? '' : 'none'
            }, wrapperStyle);

            var maskClazz = classnames((_classnames2 = {}, _classnames2[prefix + 'overlay-backdrop'] = true, _classnames2[maskClass] = !!maskClass, _classnames2));

            children = React.createElement(
                'div',
                { className: wrapperClazz, style: newWrapperStyle, dir: rtl ? 'rtl' : undefined },
                hasMask ? React.createElement(
                    'div',
                    {
                        className: maskClazz,
                        onClick: this.handleMaskClick,
                        onMouseEnter: onMaskMouseEnter,
                        onMouseLeave: onMaskMouseLeave,
                        dir: rtl ? 'rtl' : undefined
                    },
                    isChildrenInMask && children
                ) : null,
                !isChildrenInMask && children
            );
        }

        return React.createElement(Gateway, _extends({ container: container, target: target, children: children }, { ref: this.saveGatewayRef }));
    };

    return Overlay;
}(Component), _class.propTypes = {
    prefix: PropTypes.string,
    pure: PropTypes.bool,
    rtl: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    /**
     * 弹层内容
     */
    children: PropTypes.any,
    /**
     * 是否显示弹层
     */
    visible: PropTypes.bool,
    /**
     * 弹层请求关闭时触发事件的回调函数
     * @param {String} type 弹层关闭的来源
     * @param {Object} e DOM 事件
     */
    onRequestClose: PropTypes.func,
    /**
     * 弹层定位的参照元素
     */
    target: PropTypes.any,
    /**
     * 弹层相对于参照元素的定位, 详见开发指南的[定位部分](#定位)
     */
    align: PropTypes.string,
    /**
     * 弹层相对于trigger的定位的微调, 接收数组[hoz, ver], 表示弹层在 left / top 上的增量
     * e.g. [100, 100] 表示往右(RTL 模式下是往左) 、下分布偏移100px
     */
    offset: PropTypes.array,
    /**
     * 渲染组件的容器，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点
     */
    container: PropTypes.any,
    /**
     * 是否显示遮罩
     */
    hasMask: PropTypes.bool,
    /**
     * 是否支持 esc 按键关闭弹层
     */
    canCloseByEsc: PropTypes.bool,
    /**
     * 点击弹层外的区域是否关闭弹层，不显示遮罩时生效
     */
    canCloseByOutSideClick: PropTypes.bool,
    /**
     * 点击遮罩区域是否关闭弹层，显示遮罩时生效
     */
    canCloseByMask: PropTypes.bool,
    /**
     * 弹层打开前触发事件的回调函数
     */
    beforeOpen: PropTypes.func,
    /**
     * 弹层打开时触发事件的回调函数
     */
    onOpen: PropTypes.func,
    /**
     * 弹层打开后触发事件的回调函数, 如果有动画，则在动画结束后触发
     */
    afterOpen: PropTypes.func,
    /**
     * 弹层关闭前触发事件的回调函数
     */
    beforeClose: PropTypes.func,
    /**
     * 弹层关闭时触发事件的回调函数
     */
    onClose: PropTypes.func,
    /**
     * 弹层关闭后触发事件的回调函数, 如果有动画，则在动画结束后触发
     */
    afterClose: PropTypes.func,
    /**
     * 弹层定位完成前触发的事件
     */
    beforePosition: PropTypes.func,
    /**
     * 弹层定位完成时触发的事件
     * @param {Object} config 定位的参数
     * @param {Array} config.align 对齐方式，如 ['cc', 'cc']（如果开启 autoAdjust，可能和预先设置的 align 不同）
     * @param {Number} config.top 距离视口顶部距离
     * @param {Number} config.left 距离视口左侧距离
     * @param {Object} node 定位参照的容器节点
     */
    onPosition: PropTypes.func,
    shouldUpdatePosition: PropTypes.bool,
    /**
     * 弹层打开时是否让其中的元素自动获取焦点
     */
    autoFocus: PropTypes.bool,
    needAdjust: PropTypes.bool,
    /**
     * 是否禁用页面滚动
     */
    disableScroll: PropTypes.bool,
    /**
     * 是否在捕获阶段监听，适配 react 17 事件模型变更
     * @version 1.25
     */
    useCapture: PropTypes.bool,
    /**
     * 隐藏时是否保留子节点
     */
    cache: PropTypes.bool,
    /**
     * 安全节点，当点击 document 的时候，如果包含该节点则不会关闭弹层，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点，或者以上值组成的数组
     */
    safeNode: PropTypes.any,
    /**
     * 弹层的根节点的样式类
     */
    wrapperClassName: PropTypes.string,
    /**
     * 弹层的根节点的内联样式
     */
    wrapperStyle: PropTypes.object,
    /**
     * 配置动画的播放方式，支持 { in: 'enter-class', out: 'leave-class' } 的对象参数，如果设置为 false，则不播放动画。 请参考 Animate 组件的文档获取可用的动画名
     * @default { in: 'expandInDown', out: 'expandOutUp' }
     */
    animation: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    onMaskMouseEnter: PropTypes.func,
    onMaskMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
    maskClass: PropTypes.string,
    isChildrenInMask: PropTypes.bool,
    // 当 pin 元素（一般是弹层）是 fixed 布局的时候，pin 元素是否要跟随 base 元素（一般是trigger）
    // 举例来说，dialog/drawer 这类组件弹层是不跟随trigger的，而 fixed 布局下的subNav是跟随trigger的
    pinFollowBaseElementWhenFixed: PropTypes.bool,
    /**
     * 开启 v2 版本
     * @version 1.25
     */
    v2: PropTypes.bool,
    /**
     * [v2] align 的数组形式，不能和 align 同时使用
     * @version 1.25
     */
    points: PropTypes.array
}, _class.defaultProps = {
    prefix: 'next-',
    pure: false,
    visible: false,
    onRequestClose: noop,
    target: Position.VIEWPORT,
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
    onTouchEnd: function onTouchEnd(event) {
        event.stopPropagation();
    },
    onClick: function onClick(event) {
        return event.stopPropagation();
    },
    maskClass: '',
    useCapture: true
}, _temp);
Overlay.displayName = 'Overlay';


export default polyfill(Overlay);