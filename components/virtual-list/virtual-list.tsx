import PropTypes from 'prop-types';
import React, { Component } from 'react';
import cx from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { findDOMNode } from 'react-dom';
import { events } from '../util';

const NOOP = () => {};
const MAX_SYNC_UPDATES = 40;

const isEqualSubset = (a, b) => {
    for (const key in b) {
        if (a[key] !== b[key]) {
            return false;
        }
    }

    return true;
};

const getOffset = el => {
    let offset = el.clientLeft || 0;
    do {
        offset += el.offsetTop || 0;
        el = el.offsetParent;
    } while (el);
    return offset;
};

const constrain = (from, size, { children, minSize }) => {
    const length = children && children.length;
    size = Math.max(size, minSize);
    if (size > length) {
        size = length;
    }
    from = from ? Math.max(Math.min(from, length - size), 0) : 0;

    return { from, size };
};
/** VirtualList */
class VirtualList extends Component {
    static displayName = 'VirtualList';

    static propTypes = {
        prefix: PropTypes.string,
        /**
         * 渲染的子节点
         */
        children: PropTypes.any,
        /**
         * 最小加载数量
         */
        minSize: PropTypes.number,
        /**
         * 一屏数量
         */
        pageSize: PropTypes.number,
        /**
         * 父渲染函数，默认为 (items, ref) => <ul ref={ref}>{items}</ul>
         */
        itemsRenderer: PropTypes.func,
        /**
         * 缓冲区高度
         */
        threshold: PropTypes.number,
        /**
         * 获取item高度的函数
         */
        itemSizeGetter: PropTypes.func,
        /**
         * 设置跳转位置，需要设置 itemSizeGetter 才能生效, 不设置认为元素等高并取第一个元素高度作为默认高
         */
        jumpIndex: PropTypes.number,
        className: PropTypes.string,
    };

    static defaultProps = {
        prefix: 'next-',
        itemsRenderer: (items, ref) => <ul ref={ref}>{items}</ul>,
        minSize: 1,
        pageSize: 10,
        jumpIndex: 0,
        threshold: 100,
    };

    constructor(props) {
        super(props);
        const { jumpIndex } = props;
        const { from, size } = constrain(jumpIndex, 0, props);
        this.state = { from, size };
        this.cache = {};
        this.cacheAdd = {};
        this.scrollTo = this.scrollTo.bind(this);
        this.cachedScroll = null;
        this.unstable = false;
        this.updateCounter = 0;
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const { from, size } = prevState;

        return constrain(from, size, nextProps);
    }

    componentDidMount() {
        const { jumpIndex } = this.props;

        this.updateFrameAndClearCache = this.updateFrameAndClearCache.bind(this);

        events.on(window, 'resize', this.updateFrameAndClearCache);

        this.updateFrame(this.scrollTo.bind(this, jumpIndex));
    }

    componentDidUpdate(prevProps) {
        const oldIndex = prevProps.jumpIndex;
        const newIndex = this.props.jumpIndex;

        if (oldIndex !== newIndex) {
            this.updateFrame(this.scrollTo.bind(this, newIndex));
        }

        // If the list has reached an unstable state, prevent an infinite loop.
        if (this.unstable) {
            return;
        }

        if (++this.updateCounter > MAX_SYNC_UPDATES) {
            this.unstable = true;
        }

        if (!this.updateCounterTimeoutId) {
            this.updateCounterTimeoutId = setTimeout(() => {
                this.updateCounter = 0;
                delete this.updateCounterTimeoutId;
            }, 0);
        }

        this.updateFrame();
    }

    componentWillUnmount() {
        events.off(window, 'resize', this.updateFrameAndClearCache);

        events.off(this.scrollParent, 'scroll', this.updateFrameAndClearCache);
        events.off(this.scrollParent, 'mousewheel', NOOP);
    }

    maybeSetState(b, cb) {
        if (isEqualSubset(this.state, b)) {
            return cb();
        }

        this.setState(b, cb);
    }

    getEl() {
        return this.el || this.items || {};
    }

    getScrollParent() {
        let el = this.getEl();
        el = el.parentElement;

        switch (window.getComputedStyle(el).overflowY) {
            case 'auto':
            case 'scroll':
            case 'overlay':
            case 'visible':
                return el;
        }

        return window;
    }

    getScroll() {
        // Cache scroll position as this causes a forced synchronous layout.
        // if (typeof this.cachedScroll === 'number') {
        //     return this.cachedScroll;
        // }
        const { scrollParent } = this;
        const scrollKey = 'scrollTop';
        const actual =
            scrollParent === window
                ? // Firefox always returns document.body[scrollKey] as 0 and Chrome/Safari
                  // always return document.documentElement[scrollKey] as 0, so take
                  // whichever has a value.
                  document.body[scrollKey] || document.documentElement[scrollKey]
                : scrollParent[scrollKey];
        const max = this.getScrollSize() - this.getViewportSize();

        const scroll = Math.max(0, Math.min(actual, max));
        const el = this.getEl();
        this.cachedScroll = getOffset(scrollParent) + scroll - getOffset(el);

        return this.cachedScroll;
    }

    setScroll(offset) {
        const { scrollParent } = this;
        offset += getOffset(this.getEl());
        if (scrollParent === window) {
            return window.scrollTo(0, offset);
        }

        offset -= getOffset(this.scrollParent);
        scrollParent.scrollTop = offset;
    }

    getViewportSize() {
        const { scrollParent } = this;
        return scrollParent === window ? window.innerHeight : scrollParent.clientHeight;
    }

    getScrollSize() {
        const { scrollParent } = this;
        const { body, documentElement } = document;
        const key = 'scrollHeight';
        return scrollParent === window
            ? Math.max(body[key], documentElement[key])
            : scrollParent[key];
    }

    getStartAndEnd(threshold = this.props.threshold) {
        const scroll = this.getScroll();

        const trueScroll = scroll;
        const start = Math.max(0, trueScroll - threshold);
        const end = trueScroll + this.getViewportSize() + threshold;

        return { start, end };
    }

    // Called by 'scroll' and 'resize' events, clears scroll position cache.
    updateFrameAndClearCache(cb) {
        this.cachedScroll = null;
        return this.updateFrame(cb);
    }

    updateFrame(cb) {
        this.updateScrollParent();

        if (typeof cb !== 'function') {
            cb = NOOP;
        }

        return this.updateVariableFrame(cb);
    }

    updateScrollParent() {
        const prev = this.scrollParent;
        this.scrollParent = this.getScrollParent();

        if (prev === this.scrollParent) {
            return;
        }
        if (prev) {
            events.off(prev, 'scroll', this.updateFrameAndClearCache);
            events.off(prev, 'mousewheel', NOOP);
        }

        events.on(this.scrollParent, 'scroll', this.updateFrameAndClearCache);
        events.on(this.scrollParent, 'mousewheel', NOOP);

        // You have to attach mousewheel listener to the scrollable element.
        // Just an empty listener. After that onscroll events will be fired synchronously.
    }

    updateVariableFrame(cb) {
        if (!this.props.itemSizeGetter) {
            this.cacheSizes();
        }

        const { start, end } = this.getStartAndEnd();
        const { pageSize, children } = this.props;
        const length = children.length;
        let space = 0;
        let from = 0;
        let size = 0;
        const maxFrom = length - 1;

        while (from < maxFrom) {
            const itemSize = this.getSizeOf(from);
            if (itemSize === null || itemSize === undefined || space + itemSize > start) {
                break;
            }
            space += itemSize;
            ++from;
        }

        const maxSize = length - from;

        while (size < maxSize && space < end) {
            const itemSize = this.getSizeOf(from + size);
            if (itemSize === null || itemSize === undefined) {
                size = Math.min(size + pageSize, maxSize);
                break;
            }
            space += itemSize;
            ++size;
        }

        this.maybeSetState({ from, size }, cb);
    }

    getSpaceBefore(index, cache = {}) {
        if (!index) {
            return 0;
        }
        if (cache[index] !== null && cache[index] !== undefined) {
            return cache[index] || 0;
        }

        // Find the closest space to index there is a cached value for.
        let from = index;
        while (from > 0 && (cache[from] === null || cache[from] === undefined)) {
            from--;
        }

        // Finally, accumulate sizes of items from - index.
        let space = cache[from] || 0;
        for (let i = from; i < index; ++i) {
            cache[i] = space;
            const itemSize = this.getSizeOf(i);
            if (itemSize === null || itemSize === undefined) {
                break;
            }
            space += itemSize;
        }

        cache[index] = space;

        return cache[index] || 0;
    }

    cacheSizes() {
        const { cache } = this;
        const { from } = this.state;
        const { children, props = {} } = this.items;
        const itemEls = children || props.children || [];

        try {
            // <Select useVirtual /> 模式下，在快速点击切换Tab的情况下（Select实例快速出现、消失） 有时会出现this.items不存在，导致页面报错。怀疑是Select的异步timer渲染逻辑引起的
            for (let i = 0, l = itemEls.length; i < l; ++i) {
                const ulRef = findDOMNode(this.items);
                const height = ulRef.children[i].offsetHeight;
                if (height > 0) {
                    cache[from + i] = height;
                }
            }
        } catch (error) {
            // ...
        }
    }

    getSizeOf(index) {
        const { cache } = this;
        const { itemSizeGetter, jumpIndex } = this.props;

        // Try the cache.
        if (index in cache) {
            return cache[index];
        }
        if (itemSizeGetter) {
            return itemSizeGetter(index);
        }

        if (!this.defaultItemHeight && jumpIndex > -1) {
            const keysList = Object.keys(this.cache);
            const len = keysList.length;
            const height = this.cache[len - 1];
            this.defaultItemHeight = height;
        }

        if (this.defaultItemHeight) {
            return this.defaultItemHeight;
        }
    }

    scrollTo(index) {
        this.setScroll(this.getSpaceBefore(index, this.cacheAdd));
    }

    renderMenuItems() {
        const { children, itemsRenderer } = this.props;
        const { from, size } = this.state;
        const items = [];

        for (let i = 0; i < size; ++i) {
            items.push(children[from + i]);
        }

        return itemsRenderer(items, c => {
            this.items = c;
            return this.items;
        });
    }

    render() {
        const { children = [], prefix, className } = this.props;
        const length = children.length;
        const { from } = this.state;
        const items = this.renderMenuItems();

        const style = { position: 'relative' };

        const size = this.getSpaceBefore(length, {});

        if (size) {
            style.height = size;
        }
        const offset = this.getSpaceBefore(from, this.cacheAdd);
        const transform = `translate(0px, ${offset}px)`;
        const listStyle = {
            msTransform: transform,
            WebkitTransform: transform,
            transform,
        };

        const cls = cx({
            [`${prefix}virtual-list-wrapper`]: true,
            [className]: !!className,
        });

        return (
            <div
                className={cls}
                style={style}
                ref={c => {
                    this.el = c;
                    return this.el;
                }}
            >
                <div style={listStyle}>{items}</div>
            </div>
        );
    }
}

export default polyfill(VirtualList);
