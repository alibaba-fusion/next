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
    static VIEWPORT = position.VIEWPORT;

    static propTypes = {
        children: PropTypes.node,
        target: PropTypes.element,
        container: PropTypes.element,
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

    constructor(props: PositionProps) {
        super(props);

        bindCtx(this, ['handleResize']);

        this.resizeObserver = new ResizeObserver(this.handleResize);
    }

    componentDidMount() {
        this.setPosition();

        if (this.props.needListenResize) {
            events.on(window, 'resize', this.handleResize);
            this.observe();
        }
    }

    componentDidUpdate(prevProps: PositionProps) {
        const { props } = this;

        if (('align' in props && props.align !== prevProps.align) || props.shouldUpdatePosition) {
            this.shouldUpdatePosition = true;
        }

        if (this.shouldUpdatePosition) {
            clearTimeout(this.resizeTimeout as unknown as number);

            this.setPosition();
            this.shouldUpdatePosition = false;
        }
    }
    resizeTimeout(resizeTimeout: number): void {
        throw new Error('Method not implemented.');
    }

    componentWillUnmount() {
        if (this.props.needListenResize) {
            events.off(window, 'resize', this.handleResize);
            this.unobserve();
        }

        clearTimeout(this.resizeTimeout as unknown as number);
    }

    observe = () => {
        const contentNode = this.getContentNode() as HTMLElement;
        contentNode && this.resizeObserver.observe(contentNode);
    };

    unobserve = () => {
        this.resizeObserver.disconnect();
    };

    shouldIgnorePosition = () => {
        const node = this.getContentNode() as HTMLElement;
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

        const contentNode = this.getContentNode() as HTMLElement;
        const targetNode = this.getTargetNode() as HTMLElement;

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
                    align: (resultAlign as string).split(' '),
                    top,
                    left,
                },
                contentNode
            );
        }
    }

    getContentNode() {
        try {
            return findDOMNode(this);
        } catch (err) {
            return null;
        }
    }

    getTargetNode() {
        const { target } = this.props;

        return target === position.VIEWPORT
            ? position.VIEWPORT
            : findNode(target, this.props as unknown as Element);
    }

    handleResize() {
        clearTimeout(this.resizeTimeout as unknown as number);

        this.resizeTimeout = setTimeout(() => {
            this.setPosition();
        }, 200) as unknown as (resizeTimeout: number) => void;
    }

    render() {
        return Children.only(this.props.children);
    }
}
