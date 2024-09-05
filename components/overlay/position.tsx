import { Component, Children } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import ResizeObserver from 'resize-observer-polyfill';
import { func, dom, events } from '../util';
import position from './utils/position';
import findNode from './utils/find-node';
import { warning } from '../util/log';
import type { PositionProps } from './types';

const { noop, bindCtx } = func;
const { getStyle } = dom;
const place = position.place;
// Follow react NESTED_UPDATE_LIMIT = 50
const MAX_UPDATE_COUNT = 50;

export default class Position extends Component<PositionProps> {
    static displayName = 'Position';
    static VIEWPORT = position.VIEWPORT;

    static propTypes = {
        children: PropTypes.node,
        target: PropTypes.any,
        container: PropTypes.any,
        align: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
        offset: PropTypes.array,
        beforePosition: PropTypes.func,
        onPosition: PropTypes.func,
        needAdjust: PropTypes.bool,
        autoFit: PropTypes.bool,
        needListenResize: PropTypes.bool,
        shouldUpdatePosition: PropTypes.bool,
        rtl: PropTypes.bool,
        pinFollowBaseElementWhenFixed: PropTypes.bool,
    };

    static defaultProps = {
        align: 'tl bl',
        offset: [0, 0],
        beforePosition: noop,
        onPosition: noop,
        needAdjust: true,
        autoFit: false,
        needListenResize: true,
        shouldUpdatePosition: false,
        rtl: false,
    };
    resizeObserver: ResizeObserver;
    shouldUpdatePosition: boolean;

    updateCount = 0;
    resizeTimeout: number;

    constructor(props: PositionProps) {
        super(props);

        bindCtx(this, ['handleResize']);

        this.resizeObserver = new ResizeObserver(this.handleResize);
    }

    componentDidMount() {
        this.setPosition();

        if (this.props.needListenResize) {
            if (typeof window !== 'undefined') {
                events.on(window, 'resize', this.handleResize);
            }
            this.observe();
        }
    }

    componentDidUpdate(prevProps: PositionProps) {
        const { props } = this;

        if (('align' in props && props.align !== prevProps.align) || props.shouldUpdatePosition) {
            this.shouldUpdatePosition = true;
        }

        if (this.shouldUpdatePosition) {
            clearTimeout(this.resizeTimeout);

            this.setPosition();
            this.shouldUpdatePosition = false;
        }
    }

    componentWillUnmount() {
        if (this.props.needListenResize) {
            events.off(window, 'resize', this.handleResize);
            this.unobserve();
        }

        clearTimeout(this.resizeTimeout);
    }

    observe = () => {
        const contentNode = this.getContentNode();
        contentNode && this.resizeObserver.observe(contentNode);
    };

    unobserve = () => {
        this.resizeObserver.disconnect();
    };

    shouldIgnorePosition = () => {
        const node = this.getContentNode();
        if (typeof window === 'undefined') {
            return true;
        }
        if (!node) {
            return true;
        }
        // 从文档中移除
        if (!node.parentNode) {
            return true;
        }
        // 元素隐藏
        const { position, display, visibility } = getComputedStyle(node);
        if (!node.offsetParent && position !== 'fixed') {
            return true;
        }
        // Firefox offsetParent 会返回 body，这里兼容处理
        if (display === 'none' || visibility === 'hidden') {
            return true;
        }
        // 兜底处理，同步进程里连续更新多次，强制中断
        this.updateCount++;
        Promise.resolve().then(() => {
            this.updateCount = 0;
        });
        if (this.updateCount > MAX_UPDATE_COUNT - 10) {
            warning(
                'Over maximum times to adjust position at one task, it is recommended to use v2.'
            );
            return true;
        }
        return false;
    };

    setPosition() {
        const {
            align,
            offset,
            beforePosition,
            onPosition,
            needAdjust,
            container,
            rtl,
            pinFollowBaseElementWhenFixed,
            autoFit,
        } = this.props;

        if (this.shouldIgnorePosition()) {
            return;
        }

        beforePosition();

        const contentNode = this.getContentNode();
        const targetNode = this.getTargetNode();

        if (contentNode && targetNode) {
            const resultAlign = place({
                pinElement: contentNode,
                baseElement: targetNode,
                pinFollowBaseElementWhenFixed,
                align,
                offset,
                autoFit,
                container,
                needAdjust,
                isRtl: rtl,
            } as PositionProps);
            const top = getStyle(contentNode, 'top');
            const left = getStyle(contentNode, 'left');

            onPosition(
                {
                    align: resultAlign!.split(' '),
                    top,
                    left,
                },
                contentNode
            );
        }
    }

    getContentNode(): null | HTMLElement {
        try {
            return findDOMNode(this) as HTMLElement;
        } catch (err) {
            return null;
        }
    }

    getTargetNode() {
        const { target } = this.props;

        return target === position.VIEWPORT ? position.VIEWPORT : findNode(target, this.props);
    }

    handleResize() {
        clearTimeout(this.resizeTimeout);

        this.resizeTimeout = window.setTimeout(() => {
            this.setPosition();
        }, 200);
    }

    render() {
        return Children.only(this.props.children);
    }
}
