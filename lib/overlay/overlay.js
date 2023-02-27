'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _util = require('../util');

var _manager = require('./manager');

var _manager2 = _interopRequireDefault(_manager);

var _gateway = require('./gateway');

var _gateway2 = _interopRequireDefault(_gateway);

var _position = require('./position');

var _position2 = _interopRequireDefault(_position);

var _findNode = require('./utils/find-node');

var _findNode2 = _interopRequireDefault(_findNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var saveLastFocusNode = _util.focus.saveLastFocusNode,
    getFocusNodeList = _util.focus.getFocusNodeList,
    backLastFocusNode = _util.focus.backLastFocusNode;
var makeChain = _util.func.makeChain,
    noop = _util.func.noop,
    bindCtx = _util.func.bindCtx;


var getContainerNode = function getContainerNode(props) {
    var targetNode = (0, _findNode2.default)(props.target);
    return (0, _findNode2.default)(props.container, targetNode);
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
    (0, _inherits3.default)(Overlay, _Component);

    function Overlay(props) {
        (0, _classCallCheck3.default)(this, Overlay);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

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

        if (nextProps.animation !== false && _util.support.animation) {
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

        _manager2.default.addOverlay(this);
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
        _manager2.default.removeOverlay(this);
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

        if (this.state.animation && _util.support.animation) {
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
                    _util.dom.addClass(_this2.getWrapperNode(), 'opened');
                    _manager2.default.addOverlay(_this2);
                    _this2.props.afterOpen();
                });
            } else if (close) {
                this.props.onClose();
                _util.dom.removeClass(this.getWrapperNode(), 'opened');
                _manager2.default.removeOverlay(this);
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
                var id = (0, _util.guid)();

                _this3._animation = _util.events.on(node, _util.support.animation.end, _this3.handleAnimateEnd.bind(_this3, id));

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
            _util.dom.addClass(wrapperNode, 'opened');
            _this4.props.onOpen();
        });
    };

    Overlay.prototype.onLeaving = function onLeaving() {
        var wrapperNode = this.getWrapperNode();
        _util.dom.removeClass(wrapperNode, 'opened');
        this.props.onClose();
    };

    Overlay.prototype.onEntered = function onEntered() {
        _manager2.default.addOverlay(this);
        this.setFocusNode();
        this.props.afterOpen();
    };

    Overlay.prototype.onLeaved = function onLeaved() {
        _manager2.default.removeOverlay(this);
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

                if (_util.dom.hasScroll(containerNode)) {
                    cnInfo.paddingRight = paddingRight;
                    style.paddingRight = _util.dom.getStyle(containerNode, 'paddingRight') + _util.dom.scrollbar().width + 'px';
                }

                _util.dom.setStyle(containerNode, style);
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

                    _util.dom.setStyle(this._containerNode, style);
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
            return (0, _reactDom.findDOMNode)(this.contentRef);
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
            this._keydownEvents = _util.events.on(document, 'keydown', this.handleDocumentKeyDown, useCapture);
        }

        if (this.props.canCloseByOutSideClick) {
            this._clickEvents = _util.events.on(document, 'click', this.handleDocumentClick, useCapture);
            this._touchEvents = _util.events.on(document, 'touchend', this.handleDocumentClick, useCapture);
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
        if (this.state.visible && e.keyCode === _util.KEYCODE.ESC && _manager2.default.isCurrentOverlay(this)) {
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
                var node = (0, _findNode2.default)(safeNodes[i], this.props);
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

            var child = _react.Children.only(children);
            // if chlild is a functional component wrap in a component to allow a ref to be set
            if (typeof child.type === 'function' && !(child.type.prototype instanceof _react.Component)) {
                child = _react2.default.createElement(
                    'div',
                    { role: 'none' },
                    child
                );
            }
            var childClazz = (0, _classnames4.default)((_classnames = {}, _classnames[prefix + 'overlay-inner'] = true, _classnames[animation.in] = status === 'entering' || status === 'mounting', _classnames[animation.out] = status === 'leaving', _classnames[child.props.className] = !!child.props.className, _classnames[className] = !!className, _classnames));
            if (typeof child.ref === 'string') {
                throw new Error('Can not set ref by string in Overlay, use function instead.');
            }

            children = _react2.default.cloneElement(child, {
                className: childClazz,
                style: (0, _extends3.default)({}, child.props.style, style),
                ref: makeChain(this.saveContentRef, child.ref),
                'aria-hidden': !stateVisible && cache && this._isMounted,
                onClick: makeChain(this.props.onClick, child.props.onClick),
                onTouchEnd: makeChain(this.props.onTouchEnd, child.props.onTouchEnd)
            });

            if (align) {
                var shouldUpdatePosition = status === 'leaving' ? false : propShouldUpdatePosition;
                children = _react2.default.createElement(_position2.default, {
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

            var wrapperClazz = (0, _classnames4.default)([prefix + 'overlay-wrapper', wrapperClassName]);
            var newWrapperStyle = (0, _extends3.default)({}, {
                display: stateVisible ? '' : 'none'
            }, wrapperStyle);

            var maskClazz = (0, _classnames4.default)((_classnames2 = {}, _classnames2[prefix + 'overlay-backdrop'] = true, _classnames2[maskClass] = !!maskClass, _classnames2));

            children = _react2.default.createElement(
                'div',
                { className: wrapperClazz, style: newWrapperStyle, dir: rtl ? 'rtl' : undefined },
                hasMask ? _react2.default.createElement(
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

        return _react2.default.createElement(_gateway2.default, (0, _extends3.default)({ container: container, target: target, children: children }, { ref: this.saveGatewayRef }));
    };

    return Overlay;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    pure: _propTypes2.default.bool,
    rtl: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    /**
     * 弹层内容
     */
    children: _propTypes2.default.any,
    /**
     * 是否显示弹层
     */
    visible: _propTypes2.default.bool,
    /**
     * 弹层请求关闭时触发事件的回调函数
     * @param {String} type 弹层关闭的来源
     * @param {Object} e DOM 事件
     */
    onRequestClose: _propTypes2.default.func,
    /**
     * 弹层定位的参照元素
     */
    target: _propTypes2.default.any,
    /**
     * 弹层相对于参照元素的定位, 详见开发指南的[定位部分](#定位)
     */
    align: _propTypes2.default.string,
    /**
     * 弹层相对于trigger的定位的微调, 接收数组[hoz, ver], 表示弹层在 left / top 上的增量
     * e.g. [100, 100] 表示往右(RTL 模式下是往左) 、下分布偏移100px
     */
    offset: _propTypes2.default.array,
    /**
     * 渲染组件的容器，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点
     */
    container: _propTypes2.default.any,
    /**
     * 是否显示遮罩
     */
    hasMask: _propTypes2.default.bool,
    /**
     * 是否支持 esc 按键关闭弹层
     */
    canCloseByEsc: _propTypes2.default.bool,
    /**
     * 点击弹层外的区域是否关闭弹层，不显示遮罩时生效
     */
    canCloseByOutSideClick: _propTypes2.default.bool,
    /**
     * 点击遮罩区域是否关闭弹层，显示遮罩时生效
     */
    canCloseByMask: _propTypes2.default.bool,
    /**
     * 弹层打开前触发事件的回调函数
     */
    beforeOpen: _propTypes2.default.func,
    /**
     * 弹层打开时触发事件的回调函数
     */
    onOpen: _propTypes2.default.func,
    /**
     * 弹层打开后触发事件的回调函数, 如果有动画，则在动画结束后触发
     */
    afterOpen: _propTypes2.default.func,
    /**
     * 弹层关闭前触发事件的回调函数
     */
    beforeClose: _propTypes2.default.func,
    /**
     * 弹层关闭时触发事件的回调函数
     */
    onClose: _propTypes2.default.func,
    /**
     * 弹层关闭后触发事件的回调函数, 如果有动画，则在动画结束后触发
     */
    afterClose: _propTypes2.default.func,
    /**
     * 弹层定位完成前触发的事件
     */
    beforePosition: _propTypes2.default.func,
    /**
     * 弹层定位完成时触发的事件
     * @param {Object} config 定位的参数
     * @param {Array} config.align 对齐方式，如 ['cc', 'cc']（如果开启 autoAdjust，可能和预先设置的 align 不同）
     * @param {Number} config.top 距离视口顶部距离
     * @param {Number} config.left 距离视口左侧距离
     * @param {Object} node 定位参照的容器节点
     */
    onPosition: _propTypes2.default.func,
    shouldUpdatePosition: _propTypes2.default.bool,
    /**
     * 弹层打开时是否让其中的元素自动获取焦点
     */
    autoFocus: _propTypes2.default.bool,
    needAdjust: _propTypes2.default.bool,
    /**
     * 是否禁用页面滚动
     */
    disableScroll: _propTypes2.default.bool,
    /**
     * 是否在捕获阶段监听，适配 react 17 事件模型变更
     * @version 1.25
     */
    useCapture: _propTypes2.default.bool,
    /**
     * 隐藏时是否保留子节点
     */
    cache: _propTypes2.default.bool,
    /**
     * 安全节点，当点击 document 的时候，如果包含该节点则不会关闭弹层，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点，或者以上值组成的数组
     */
    safeNode: _propTypes2.default.any,
    /**
     * 弹层的根节点的样式类
     */
    wrapperClassName: _propTypes2.default.string,
    /**
     * 弹层的根节点的内联样式
     */
    wrapperStyle: _propTypes2.default.object,
    /**
     * 配置动画的播放方式，支持 { in: 'enter-class', out: 'leave-class' } 的对象参数，如果设置为 false，则不播放动画。 请参考 Animate 组件的文档获取可用的动画名
     * @default { in: 'expandInDown', out: 'expandOutUp' }
     */
    animation: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),
    onMaskMouseEnter: _propTypes2.default.func,
    onMaskMouseLeave: _propTypes2.default.func,
    onClick: _propTypes2.default.func,
    maskClass: _propTypes2.default.string,
    isChildrenInMask: _propTypes2.default.bool,
    // 当 pin 元素（一般是弹层）是 fixed 布局的时候，pin 元素是否要跟随 base 元素（一般是trigger）
    // 举例来说，dialog/drawer 这类组件弹层是不跟随trigger的，而 fixed 布局下的subNav是跟随trigger的
    pinFollowBaseElementWhenFixed: _propTypes2.default.bool,
    /**
     * 开启 v2 版本
     * @version 1.25
     */
    v2: _propTypes2.default.bool,
    /**
     * [v2] align 的数组形式，不能和 align 同时使用
     * @version 1.25
     */
    points: _propTypes2.default.array
}, _class.defaultProps = {
    prefix: 'next-',
    pure: false,
    visible: false,
    onRequestClose: noop,
    target: _position2.default.VIEWPORT,
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
exports.default = (0, _reactLifecyclesCompat.polyfill)(Overlay);
module.exports = exports['default'];