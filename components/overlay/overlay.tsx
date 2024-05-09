import React, { Children, Component, type ReactNode } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { dom, events, focus, func, guid, KEYCODE, support } from '../util';
import overlayManager from './manager';
import Gateway from './gateway';
import Position from './position';
import findNode from './utils/find-node';
import type { OverlayProps, OverlayState } from './types';
import type { ListenerCallback } from '../util/events';
import type { CustomCSSStyle } from '../util/dom';

const { saveLastFocusNode, getFocusNodeList, backLastFocusNode } = focus;
const { makeChain, noop, bindCtx } = func;

const getContainerNode = (props: OverlayProps) => {
    const targetNode = findNode(props.target as Element);
    return findNode(props.container as Element, targetNode as HTMLElement);
};

const prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];
const getStyleProperty = (node: HTMLElement, name: string) => {
    const style = window.getComputedStyle(node);
    let ret = '';
    for (let i = 0; i < prefixes.length; i++) {
        ret = style.getPropertyValue(prefixes[i] + name);
        if (ret) {
            break;
        }
    }
    return ret;
};

// 存 containerNode 信息
const containerNodeList = [] as Array<
    HTMLElement | { [key: string]: string } | { containerNode: Element } | CSSPropertyRule
>;

/**
 * Overlay
 */
class Overlay extends Component<OverlayProps, OverlayState> {
    static propTypes = {
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        rtl: PropTypes.bool,
        className: PropTypes.string,
        style: PropTypes.object,
        children: PropTypes.any,
        visible: PropTypes.bool,
        onRequestClose: PropTypes.func,
        target: PropTypes.any,
        align: PropTypes.string,
        offset: PropTypes.array,
        container: PropTypes.any,
        hasMask: PropTypes.bool,
        canCloseByEsc: PropTypes.bool,
        canCloseByOutSideClick: PropTypes.bool,
        canCloseByMask: PropTypes.bool,
        beforeOpen: PropTypes.func,
        onOpen: PropTypes.func,
        afterOpen: PropTypes.func,
        beforeClose: PropTypes.func,
        onClose: PropTypes.func,
        afterClose: PropTypes.func,
        beforePosition: PropTypes.func,
        onPosition: PropTypes.func,
        shouldUpdatePosition: PropTypes.bool,
        autoFocus: PropTypes.bool,
        needAdjust: PropTypes.bool,
        disableScroll: PropTypes.bool,
        useCapture: PropTypes.bool,
        cache: PropTypes.bool,
        safeNode: PropTypes.array,
        wrapperClassName: PropTypes.string,
        wrapperStyle: PropTypes.object,
        animation: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
        onMaskMouseEnter: PropTypes.func,
        onMaskMouseLeave: PropTypes.func,
        onClick: PropTypes.func,
        maskClass: PropTypes.string,
        isChildrenInMask: PropTypes.bool,
        pinFollowBaseElementWhenFixed: PropTypes.bool,
        v2: PropTypes.bool,
        points: PropTypes.array,
    };
    static defaultProps = {
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
        onTouchEnd: (event: UIEvent) => {
            event.stopPropagation();
        },
        onClick: (event: UIEvent) => event.stopPropagation(),
        maskClass: '',
        useCapture: true,
    };
    lastAlign: string | boolean | undefined;
    timeoutMap: { [key: string]: number };
    _isMounted: boolean;
    _isDestroyed: boolean;
    focusTimeout: NodeJS.Timeout;
    _animation: { off: () => void } | null;
    _containerNode: HTMLElement | undefined;
    _hasFocused: boolean;
    contentRef: HTMLElement;
    gatewayRef: HTMLElement | HTMLDivElement | ReactNode | null;
    _keydownEvents: {
        /**
         * 弹层内容
         */
        off: () => void;
    } | null;
    _clickEvents: {
        /**
         * 弹层内容
         */
        off: () => void;
    } | null;
    _touchEvents: {
        /**
         * 弹层内容
         */
        off: () => void;
    } | null;
    overlay: Overlay | null;

    constructor(props: OverlayProps) {
        super(props);
        this.lastAlign = props.align;

        bindCtx(this, [
            'handlePosition',
            'handleAnimateEnd',
            'handleDocumentKeyDown',
            'handleDocumentClick',
            'handleMaskClick',
            'beforeOpen',
            'beforeClose',
        ]);

        this.state = {
            visible: false,
            status: 'none',
            animation: this.getAnimation(props),
            willOpen: false,
            willClose: false,
        };

        this.timeoutMap = {};
    }

    static getDerivedStateFromProps(nextProps: OverlayProps, prevState: OverlayState) {
        const willOpen = !prevState.visible && nextProps.visible;
        const willClose = prevState.visible && !nextProps.visible;

        const nextState: Partial<OverlayState> = {
            willOpen,
            willClose,
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
            nextState.visible = nextProps.visible!;
        }

        return nextState;
    }

    componentDidMount() {
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
    }

    componentDidUpdate(prevProps: OverlayProps) {
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

        const willOpen = !prevProps.visible && this.props.visible;
        const willClose = prevProps.visible && !this.props.visible;

        (willOpen || willClose) && this.doAnimation(willOpen!, willClose!);
    }

    componentWillUnmount() {
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
    }

    doAnimation(open: boolean, close: boolean) {
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
                setTimeout(() => {
                    this.props.onOpen!();
                    dom.addClass(this.getWrapperNode(), 'opened');
                    overlayManager.addOverlay(this);
                    this.props.afterOpen!();
                });
            } else if (close) {
                this.props.onClose!();
                dom.removeClass(this.getWrapperNode(), 'opened');
                overlayManager.removeOverlay(this);
                this.props.afterClose!();
            }
            this.setFocusNode();
        }
    }

    getAnimation(props: OverlayProps) {
        if (props.animation === false) {
            return false;
        }

        if (props.animation) {
            return props.animation;
        }

        return this.getAnimationByAlign(props.align);
    }

    getAnimationByAlign(align: Array<string> | string | boolean | undefined) {
        switch ((align as Array<string>)[0]) {
            case 't':
                return {
                    // 为了防止有的用户 js升级了而css没升级，所以把两个动画都保留了。
                    // 动画不会叠加，会替代，顺序根据 src/animate/main.scss 中的样式先后顺序遵循css覆盖原则
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
    }

    addAnimationEvents() {
        setTimeout(() => {
            const node = this.getContentNode() as HTMLElement;
            if (node) {
                const id = guid();

                this._animation = events.on(
                    node,
                    (support.animation as { end: string }).end,
                    this.handleAnimateEnd.bind(this, id)
                );

                const animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
                const animationDuration =
                    parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
                const time = animationDelay + animationDuration;
                if (time) {
                    this.timeoutMap[id] = window.setTimeout(
                        () => {
                            this.handleAnimateEnd(id);
                        },
                        time * 1000 + 200
                    );
                }
            }
        });
    }

    handlePosition(config: { align: Array<string> }) {
        const align = config.align.join(' ');

        if (!('animation' in this.props) && this.props.needAdjust && this.lastAlign !== align) {
            this.setState({
                animation: this.getAnimationByAlign(align),
            });
        }

        const { status } = this.state;
        if (status === 'mounting') {
            this.setState({
                status: 'entering',
            });
        }

        this.lastAlign = align;
    }

    handleAnimateEnd(id: string) {
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
            // dom结构首次出现 触发的是entering
            // dom结构已经存在（例如设置了cache），触发的是mounting
        } else if (this.state.status === 'entering' || this.state.status === 'mounting') {
            this.setState({
                status: 'none',
            });

            this.onEntered();
        }
    }

    onEntering() {
        if (this._isDestroyed) {
            return;
        }

        // make sure overlay.ref has been called (eg: menu/popup-item called overlay.getInstance().getContentNode().)
        setTimeout(() => {
            const wrapperNode = this.getWrapperNode();
            dom.addClass(wrapperNode, 'opened');
            this.props.onOpen!();
        });
    }

    onLeaving() {
        const wrapperNode = this.getWrapperNode();
        dom.removeClass(wrapperNode, 'opened');
        this.props.onClose!();
    }

    onEntered() {
        overlayManager.addOverlay(this);
        this.setFocusNode();
        this.props.afterOpen!();
    }

    onLeaved() {
        overlayManager.removeOverlay(this);
        this.setFocusNode();
        this.props.afterClose!();
    }

    beforeOpen() {
        if (this.props.disableScroll) {
            const containerNode = getContainerNode(this.props) || document.body;
            const { overflow, paddingRight } = (containerNode as HTMLDivElement).style;

            const cnInfo = containerNodeList.find(
                m => (m as { containerNode: HTMLElement }).containerNode === containerNode
            ) || {
                containerNode,
                count: 0,
            };

            /**
             * container 节点初始状态已经是 overflow=hidden 则忽略
             * See {@link https://codesandbox.io/s/next-overlay-overflow-2-fulpq?file=/src/App.js}
             */
            if ((cnInfo as { count: number }).count === 0 && overflow !== 'hidden') {
                const style = {
                    overflow: 'hidden',
                } as CustomCSSStyle;

                (cnInfo as { overflow: string }).overflow = overflow;

                if (dom.hasScroll(containerNode as HTMLElement)) {
                    (cnInfo as { paddingRight: string }).paddingRight = paddingRight;
                    style.paddingRight = `${((dom.getStyle(containerNode as HTMLElement, 'paddingRight') as string) + dom.scrollbar().width) as string}px`;
                }

                dom.setStyle(containerNode as HTMLElement, style);
                containerNodeList.push(cnInfo as HTMLElement);
                (cnInfo as { containerNode: Element | Text; count: number }).count++;
            } else if ((cnInfo as { containerNode: Element | Text; count: number }).count) {
                (cnInfo as { containerNode: Element | Text; count: number }).count++;
            }

            this._containerNode = containerNode as HTMLElement;
        }
    }

    beforeClose() {
        if (this.props.disableScroll) {
            const idx = containerNodeList.findIndex(
                cn => (cn as { containerNode: HTMLElement }).containerNode === this._containerNode
            );

            if (idx !== -1) {
                const cnInfo = containerNodeList[idx] as {
                    containerNode: HTMLElement;
                    count: number;
                    overflow: string;
                    paddingRight: string;
                };
                const { overflow, paddingRight } = cnInfo;

                // 最后一个 overlay 的时候再将样式重置回去
                // 此时 overflow 应该值在 beforeOpen 中设置的 hidden
                if (
                    cnInfo.count === 1 &&
                    this._containerNode &&
                    this._containerNode.style.overflow === 'hidden'
                ) {
                    const style = {
                        overflow,
                    } as CustomCSSStyle;

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
    }

    setFocusNode() {
        if (!this.props.autoFocus) {
            return;
        }

        if (this.state.visible && !this._hasFocused) {
            saveLastFocusNode();
            // 这个时候很可能上一个弹层的关闭事件还未触发，导致焦点已经回到触发的元素
            // 这里延时处理一下，延时的时间为 document.click 捕获触发的延时时间
            this.focusTimeout = setTimeout(() => {
                const node = this.getContentNode() as HTMLElement;
                if (node) {
                    const focusNodeList = getFocusNodeList(node) as HTMLElement[];
                    if (focusNodeList.length) {
                        focusNodeList[0].focus();
                    }
                    this._hasFocused = true;
                }
            }, 100);
        } else if (!this.state.visible && this._hasFocused) {
            backLastFocusNode();
            this._hasFocused = false;
        }
    }

    getContent() {
        return this.contentRef;
    }

    getContentNode() {
        try {
            return findDOMNode(this.contentRef);
        } catch (err) {
            return null;
        }
    }

    getWrapperNode() {
        return this.gatewayRef
            ? (
                  this.gatewayRef as {
                      getChildNode: () => HTMLElement;
                  }
              ).getChildNode()
            : null;
    }

    /**
     * document global event
     */
    addDocumentEvents() {
        // FIXME: canCloseByEsc、canCloseByOutSideClick、canCloseByMask仅在didMount时生效，update时不生效
        const { useCapture } = this.props;
        // use capture phase listener to be compatible with react17
        // https://reactjs.org/blog/2020/08/10/react-v17-rc.html#fixing-potential-issues
        if (this.props.canCloseByEsc) {
            this._keydownEvents = events.on(
                document,
                'keydown',
                this.handleDocumentKeyDown as ListenerCallback,
                useCapture
            );
        }

        if (this.props.canCloseByOutSideClick) {
            this._clickEvents = events.on(
                document,
                'click',
                this.handleDocumentClick as ListenerCallback,
                useCapture
            );
            this._touchEvents = events.on(
                document,
                'touchend',
                this.handleDocumentClick as ListenerCallback,
                useCapture
            );
        }
    }

    removeDocumentEvents() {
        ['_keydownEvents', '_clickEvents', '_touchEvents'].forEach(
            (event: '_keydownEvents' | '_clickEvents' | '_touchEvents') => {
                if (this[event]) {
                    (
                        this[event] as {
                            off: () => void;
                        }
                    ).off();
                    this[event] = null;
                }
            }
        );
    }

    handleDocumentKeyDown(e: KeyboardEvent) {
        if (
            this.state.visible &&
            e.keyCode === KEYCODE.ESC &&
            overlayManager.isCurrentOverlay(this)
        ) {
            this.props.onRequestClose!('keyboard', e);
        }
    }

    isInShadowDOM(node: HTMLElement) {
        return node.getRootNode ? node.getRootNode().nodeType === 11 : false;
    }

    getEventPath(event: Event | { path: string }) {
        // 参考 https://github.com/spring-media/react-shadow-dom-retarget-events/blob/master/index.js#L29
        return (
            (event as { path: string }).path ||
            ((event as Event).composedPath && (event as Event).composedPath()) ||
            this.composedPath((event as Event).target as HTMLElement)
        );
    }

    composedPath(el: HTMLElement | null) {
        const path = [] as Array<HTMLElement | Document | Window>;
        while (el) {
            path.push(el);
            if (el.tagName === 'HTML') {
                path.push(document);
                path.push(window);
                return path;
            }
            el = el.parentElement;
        }
    }

    matchInShadowDOM(node: HTMLElement, e: Event) {
        if (this.isInShadowDOM(node)) {
            // Shadow DOM 环境中，触发点击事件，监听 document click 事件获得的事件源
            // 并非实际触发的 dom 节点，而是 Shadow DOM 的 host 节点
            // 进而会导致如 Select 组件的下拉弹层打开后立即关闭等问题
            // 因此额外增加 node 和 eventPath 的判断
            const eventPath = this.getEventPath(e) as EventTarget[];
            return node === eventPath[0] || node.contains(eventPath[0] as HTMLElement);
        }

        return false;
    }

    handleDocumentClick(e: Event) {
        if (this.state.visible) {
            const { safeNode } = this.props;
            const safeNodes = Array.isArray(safeNode) ? [...safeNode] : [safeNode];
            safeNodes.unshift(() => this.getWrapperNode());

            for (let i = 0; i < safeNodes.length; i++) {
                const node = findNode(safeNodes[i], this.props);
                // HACK: 如果触发点击的节点是弹层内部的节点，并且在被点击后立即销毁，那么此时无法使用 node.contains(e.target)
                // 来判断此时点击的节点是否是弹层内部的节点，额外判断
                if (
                    node &&
                    (node === e.target ||
                        node.contains(e.target as HTMLElement) ||
                        this.matchInShadowDOM(node as HTMLElement, e) ||
                        (e.target !== document &&
                            !document.documentElement.contains(e.target as HTMLElement)))
                ) {
                    return;
                }
            }

            this.props.onRequestClose!('docClick', e);
        }
    }

    handleMaskClick(e: React.MouseEvent<Element>) {
        if (e.currentTarget === e.target && this.props.canCloseByMask) {
            this.props.onRequestClose!('maskClick', e);
        }
    }

    saveContentRef = (ref: HTMLDivElement) => {
        this.contentRef = ref;
    };
    // eslint-disable-next-line
    saveGatewayRef: React.LegacyRef<any> | undefined = ref => {
        this.gatewayRef = ref;
    };

    // 兼容过去的用法: this.popupRef.getInstance().overlay.getInstance().getContentNode()
    getInstance() {
        return this;
    }

    render() {
        const {
            prefix,
            className,
            style,
            children: propChildren,
            target,
            align,
            offset,
            container,
            hasMask,
            needAdjust,
            autoFit,
            beforePosition,
            onPosition,
            wrapperStyle,
            rtl,
            shouldUpdatePosition: propShouldUpdatePosition,
            cache,
            wrapperClassName,
            onMaskMouseEnter,
            onMaskMouseLeave,
            maskClass,
            isChildrenInMask,
            pinFollowBaseElementWhenFixed,
        } = this.props;
        const { visible: stateVisible, status, animation } = this.state;

        let children = stateVisible || (cache && this._isMounted) ? propChildren : null;
        if (children) {
            let child = Children.only(children);
            // if chlild is a functional component wrap in a component to allow a ref to be set
            if (typeof child.type === 'function' && !(child.type.prototype instanceof Component)) {
                child = <div role="none">{child}</div>;
            }
            const childClazz = classnames({
                [`${prefix}overlay-inner`]: true,
                [(
                    animation as {
                        in: string;
                        out: string;
                    }
                ).in]: status === 'entering' || status === 'mounting',
                [(
                    animation as {
                        in: string;
                        out: string;
                    }
                ).out]: status === 'leaving',
                [child.props.className]: !!child.props.className,
                [className as string]: !!className,
            });
            if (typeof child.ref === 'string') {
                throw new Error('Can not set ref by string in Overlay, use function instead.');
            }

            children = React.cloneElement(child, {
                className: childClazz,
                style: { ...child.props.style, ...style },
                ref: makeChain(this.saveContentRef as Function, child.ref),
                'aria-hidden': !stateVisible && cache && this._isMounted,
                onClick: makeChain(this.props.onClick as Function, child.props.onClick),
                onTouchEnd: makeChain(this.props.onTouchEnd as Function, child.props.onTouchEnd),
            });

            if (align) {
                const shouldUpdatePosition = status !== 'leaving' && propShouldUpdatePosition;
                children = (
                    <Position
                        {...{
                            children,
                            target,
                            align,
                            offset,
                            autoFit,
                            container,
                            needAdjust,
                            pinFollowBaseElementWhenFixed,
                            beforePosition,
                            onPosition: makeChain(
                                this.handlePosition as Function,
                                onPosition as Function
                            ),
                            shouldUpdatePosition,
                            rtl,
                        }}
                    />
                );
            }

            const wrapperClazz = classnames([`${prefix}overlay-wrapper`, wrapperClassName]);
            const newWrapperStyle = Object.assign(
                {},
                {
                    display: stateVisible ? '' : 'none',
                },
                wrapperStyle
            );

            const maskClazz = classnames({
                [`${prefix}overlay-backdrop`]: true,
                [maskClass as string]: !!maskClass,
            });

            children = (
                <div className={wrapperClazz} style={newWrapperStyle} dir={rtl ? 'rtl' : undefined}>
                    {hasMask ? (
                        <div
                            className={maskClazz}
                            onClick={this.handleMaskClick}
                            onMouseEnter={onMaskMouseEnter}
                            onMouseLeave={onMaskMouseLeave}
                            dir={rtl ? 'rtl' : undefined}
                        >
                            {isChildrenInMask && children}
                        </div>
                    ) : null}
                    {!isChildrenInMask && children}
                </div>
            );
        }

        return (
            <Gateway
                {...{ container, target, children }}
                // eslint-disable-next-line
                ref={this.saveGatewayRef as React.LegacyRef<any>}
            />
        );
    }
}

export default polyfill(Overlay);