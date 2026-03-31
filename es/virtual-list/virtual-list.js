import { __extends } from "tslib";
import PropTypes from 'prop-types';
import React, { Component, Children, } from 'react';
import cx from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { findDOMNode } from 'react-dom';
import { events } from '../util';
var NOOP = function () { };
var MAX_SYNC_UPDATES = 40;
var isEqualSubset = function (a, b) {
    for (var key in b) {
        if (a[key] !== b[key]) {
            return false;
        }
    }
    return true;
};
var getOffset = function (el) {
    var offset = el.clientLeft || 0;
    do {
        offset += el.offsetTop || 0;
        el = el.offsetParent;
    } while (el);
    return offset;
};
var constrain = function (from, size, _a) {
    var children = _a.children, minSize = _a.minSize;
    var length = Children.count(children);
    size = Math.max(size, minSize);
    if (size > length) {
        size = length;
    }
    from = from ? Math.max(Math.min(from, length - size), 0) : 0;
    return { from: from, size: size };
};
/** VirtualList */
var VirtualList = /** @class */ (function (_super) {
    __extends(VirtualList, _super);
    function VirtualList(props) {
        var _this = _super.call(this, props) || this;
        var jumpIndex = props.jumpIndex;
        var _a = constrain(jumpIndex, 0, props), from = _a.from, size = _a.size;
        _this.state = { from: from, size: size };
        _this.cache = {};
        _this.cacheAdd = {};
        _this.scrollTo = _this.scrollTo.bind(_this);
        _this.cachedScroll = null;
        _this.unstable = false;
        _this.updateCounter = 0;
        return _this;
    }
    VirtualList.getDerivedStateFromProps = function (nextProps, prevState) {
        var from = prevState.from, size = prevState.size;
        return constrain(from, size, nextProps);
    };
    VirtualList.prototype.componentDidMount = function () {
        var jumpIndex = this.props.jumpIndex;
        this.updateFrameAndClearCache = this.updateFrameAndClearCache.bind(this);
        events.on(window, 'resize', this.updateFrameAndClearCache);
        this.updateFrame(this.scrollTo.bind(this, jumpIndex));
    };
    VirtualList.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        var oldIndex = prevProps.jumpIndex;
        var newIndex = this.props.jumpIndex;
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
            this.updateCounterTimeoutId = window.setTimeout(function () {
                _this.updateCounter = 0;
                delete _this.updateCounterTimeoutId;
            }, 0);
        }
        this.updateFrame();
    };
    VirtualList.prototype.componentWillUnmount = function () {
        events.off(window, 'resize', this.updateFrameAndClearCache);
        events.off(this.scrollParent, 'scroll', this.updateFrameAndClearCache);
        events.off(this.scrollParent, 'mousewheel', NOOP);
    };
    VirtualList.prototype.maybeSetState = function (b, cb) {
        if (isEqualSubset(this.state, b)) {
            return cb();
        }
        this.setState(b, cb);
    };
    VirtualList.prototype.getEl = function () {
        return this.el || this.items || {};
    };
    VirtualList.prototype.getScrollParent = function () {
        var el = this.getEl();
        el = el.parentElement;
        switch (window.getComputedStyle(el).overflowY) {
            case 'auto':
            case 'scroll':
            case 'overlay':
            case 'visible':
                return el;
        }
        return window;
    };
    VirtualList.prototype.getScroll = function () {
        // Cache scroll position as this causes a forced synchronous layout.
        // if (typeof this.cachedScroll === 'number') {
        //     return this.cachedScroll;
        // }
        var scrollParent = this.scrollParent;
        var scrollKey = 'scrollTop';
        var actual = scrollParent === window
            ? // Firefox always returns document.body[scrollKey] as 0 and Chrome/Safari
                // always return document.documentElement[scrollKey] as 0, so take
                // whichever has a value.
                document.body[scrollKey] || document.documentElement[scrollKey]
            : scrollParent[scrollKey];
        var max = this.getScrollSize() - this.getViewportSize();
        var scroll = Math.max(0, Math.min(actual, max));
        var el = this.getEl();
        this.cachedScroll = getOffset(scrollParent) + scroll - getOffset(el);
        return this.cachedScroll;
    };
    VirtualList.prototype.setScroll = function (offset) {
        var scrollParent = this.scrollParent;
        offset += getOffset(this.getEl());
        if (scrollParent === window) {
            return window.scrollTo(0, offset);
        }
        offset -= getOffset(this.scrollParent);
        scrollParent.scrollTop = offset;
    };
    VirtualList.prototype.getViewportSize = function () {
        var scrollParent = this.scrollParent;
        return scrollParent === window
            ? window.innerHeight
            : scrollParent.clientHeight;
    };
    VirtualList.prototype.getScrollSize = function () {
        var scrollParent = this.scrollParent;
        var body = document.body, documentElement = document.documentElement;
        var key = 'scrollHeight';
        return scrollParent === window
            ? Math.max(body[key], documentElement[key])
            : scrollParent[key];
    };
    VirtualList.prototype.getStartAndEnd = function (threshold) {
        if (threshold === void 0) { threshold = this.props.threshold; }
        var scroll = this.getScroll();
        var trueScroll = scroll;
        var start = Math.max(0, trueScroll - threshold);
        var end = trueScroll + this.getViewportSize() + threshold;
        return { start: start, end: end };
    };
    // Called by 'scroll' and 'resize' events, clears scroll position cache.
    VirtualList.prototype.updateFrameAndClearCache = function (cb) {
        this.cachedScroll = null;
        return this.updateFrame(cb);
    };
    VirtualList.prototype.updateFrame = function (cb) {
        this.updateScrollParent();
        if (typeof cb !== 'function') {
            cb = NOOP;
        }
        return this.updateVariableFrame(cb);
    };
    VirtualList.prototype.updateScrollParent = function () {
        var prev = this.scrollParent;
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
    };
    VirtualList.prototype.updateVariableFrame = function (cb) {
        if (!this.props.itemSizeGetter) {
            this.cacheSizes();
        }
        var _a = this.getStartAndEnd(), start = _a.start, end = _a.end;
        var _b = this.props, pageSize = _b.pageSize, children = _b.children;
        var length = Children.count(children);
        var space = 0;
        var from = 0;
        var size = 0;
        var maxFrom = length - 1;
        while (from < maxFrom) {
            var itemSize = this.getSizeOf(from);
            if (itemSize === null || itemSize === undefined || space + itemSize > start) {
                break;
            }
            space += itemSize;
            ++from;
        }
        var maxSize = length - from;
        while (size < maxSize && space < end) {
            var itemSize = this.getSizeOf(from + size);
            if (itemSize === null || itemSize === undefined) {
                size = Math.min(size + pageSize, maxSize);
                break;
            }
            space += itemSize;
            ++size;
        }
        this.maybeSetState({ from: from, size: size }, cb);
    };
    VirtualList.prototype.getSpaceBefore = function (index, cache) {
        if (cache === void 0) { cache = {}; }
        if (!index) {
            return 0;
        }
        if (cache[index] !== null && cache[index] !== undefined && cache[index] > 0) {
            return cache[index];
        }
        // Find the closest space to index there is a cached value for.
        var from = index;
        while (from > 0 &&
            (cache[from] === null || cache[from] === undefined || cache[from] === 0)) {
            from--;
        }
        // Finally, accumulate sizes of items from - index.
        var space = cache[from] || 0;
        for (var i = from; i < index; ++i) {
            cache[i] = space;
            var itemSize = this.getSizeOf(i);
            if (itemSize === null || itemSize === undefined) {
                break;
            }
            space += itemSize;
        }
        cache[index] = space;
        return cache[index] || 0;
    };
    VirtualList.prototype.cacheSizes = function () {
        var cache = this.cache;
        var from = this.state.from;
        var childrenLength = 0;
        if ('children' in this.items && this.items.children) {
            var itemEls = this.items.children;
            childrenLength = itemEls.length;
        }
        else if ('props' in this.items && this.items.props.children) {
            var itemEls = this.items.props.children;
            childrenLength = Children.count(itemEls);
        }
        try {
            // <Select useVirtual /> 模式下，在快速点击切换Tab的情况下（Select实例快速出现、消失） 有时会出现this.items不存在，导致页面报错。怀疑是Select的异步timer渲染逻辑引起的
            for (var i = 0, l = childrenLength; i < l; ++i) {
                var ulRef = findDOMNode(this.items);
                var height = ulRef.children[i].offsetHeight;
                if (height > 0) {
                    cache[from + i] = height;
                }
            }
        }
        catch (error) {
            // ...
        }
    };
    VirtualList.prototype.getSizeOf = function (index) {
        var cache = this.cache;
        var _a = this.props, itemSizeGetter = _a.itemSizeGetter, jumpIndex = _a.jumpIndex;
        // Try the cache.
        if (index in cache) {
            return cache[index];
        }
        if (itemSizeGetter) {
            return itemSizeGetter(index);
        }
        if (!this.defaultItemHeight && jumpIndex > -1) {
            var keysList = Object.keys(this.cache);
            var len = keysList.length;
            var height = this.cache[Number(keysList[len - 1])];
            this.defaultItemHeight = height;
        }
        if (this.defaultItemHeight) {
            return this.defaultItemHeight;
        }
    };
    VirtualList.prototype.scrollTo = function (index) {
        this.setScroll(this.getSpaceBefore(index, this.cacheAdd));
    };
    VirtualList.prototype.renderMenuItems = function () {
        var _this = this;
        var _a = this.props, children = _a.children, itemsRenderer = _a.itemsRenderer;
        var _b = this.state, from = _b.from, size = _b.size;
        var items = [];
        var childrenArray = [];
        Children.forEach(children, function (child) {
            childrenArray.push(child);
        });
        for (var i = 0; i < size; ++i) {
            items.push(childrenArray[from + i]);
        }
        return itemsRenderer(items, function (c) {
            _this.items = c;
            return _this.items;
        });
    };
    VirtualList.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.props, _c = _b.children, children = _c === void 0 ? [] : _c, prefix = _b.prefix, className = _b.className;
        var length = Children.count(children);
        var from = this.state.from;
        var items = this.renderMenuItems();
        var style = { position: 'relative' };
        var size = this.getSpaceBefore(length, {});
        if (size) {
            style.height = size;
        }
        var offset = this.getSpaceBefore(from, this.cacheAdd);
        var transform = "translate(0px, ".concat(offset, "px)");
        var listStyle = {
            msTransform: transform,
            WebkitTransform: transform,
            transform: transform,
        };
        var cls = cx((_a = {},
            _a["".concat(prefix, "virtual-list-wrapper")] = true,
            _a[className] = !!className,
            _a));
        return (React.createElement("div", { className: cls, style: style, ref: function (c) {
                _this.el = c;
                return _this.el;
            } },
            React.createElement("div", { style: listStyle }, items)));
    };
    VirtualList.displayName = 'VirtualList';
    VirtualList.propTypes = {
        prefix: PropTypes.string,
        children: PropTypes.any,
        minSize: PropTypes.number,
        pageSize: PropTypes.number,
        itemsRenderer: PropTypes.func,
        threshold: PropTypes.number,
        itemSizeGetter: PropTypes.func,
        jumpIndex: PropTypes.number,
        className: PropTypes.string,
    };
    VirtualList.defaultProps = {
        prefix: 'next-',
        itemsRenderer: function (items, ref) { return (React.createElement("ul", { ref: ref }, items)); },
        minSize: 1,
        pageSize: 10,
        jumpIndex: 0,
        threshold: 100,
    };
    return VirtualList;
}(Component));
export default polyfill(VirtualList);
