import { Component, Children } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import ResizeObserver from 'resize-observer-polyfill';
import { func, dom, events } from '../util';
import position from './utils/position';
import findNode from './utils/find-node';

const { noop, bindCtx } = func;
const { getStyle } = dom;
const place = position.place;

export default class Position extends Component {
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

    constructor(props) {
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

    componentDidUpdate(prevProps) {
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
            });
            const top = getStyle(contentNode, 'top');
            const left = getStyle(contentNode, 'left');

            onPosition(
                {
                    align: resultAlign.split(' '),
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

        return target === position.VIEWPORT ? position.VIEWPORT : findNode(target, this.props);
    }

    handleResize() {
        clearTimeout(this.resizeTimeout);

        this.resizeTimeout = setTimeout(() => {
            this.setPosition();
        }, 200);
    }

    render() {
        return Children.only(this.props.children);
    }
}
