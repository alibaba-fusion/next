'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _reactDom = require('react-dom');

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NOOP = function NOOP() {};
var MAX_SYNC_UPDATES = 100;

var isEqualSubset = function isEqualSubset(a, b) {
    for (var key in b) {
        if (a[key] !== b[key]) {
            return false;
        }
    }

    return true;
};

var getOffset = function getOffset(el) {
    var offset = el.clientLeft || 0;
    do {
        offset += el.offsetTop || 0;
        el = el.offsetParent;
    } while (el);
    return offset;
};

var constrain = function constrain(from, size, _ref) {
    var children = _ref.children,
        minSize = _ref.minSize;

    var length = children && children.length;
    size = Math.max(size, minSize);
    if (size > length) {
        size = length;
    }
    from = from ? Math.max(Math.min(from, length - size), 0) : 0;

    return { from: from, size: size };
};
/** VirtualList */
var VirtualList = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(VirtualList, _Component);

    function VirtualList(props) {
        (0, _classCallCheck3.default)(this, VirtualList);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

        var jumpIndex = props.jumpIndex;

        var _constrain = constrain(jumpIndex, 0, props),
            from = _constrain.from,
            size = _constrain.size;

        _this.state = { from: from, size: size };
        _this.cache = {};
        _this.scrollTo = _this.scrollTo.bind(_this);
        _this.cachedScroll = null;
        _this.unstable = false;
        _this.updateCounter = 0;
        return _this;
    }

    VirtualList.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
        var from = prevState.from,
            size = prevState.size;


        return constrain(from, size, nextProps);
    };

    VirtualList.prototype.componentDidMount = function componentDidMount() {
        var jumpIndex = this.props.jumpIndex;


        this.updateFrameAndClearCache = this.updateFrameAndClearCache.bind(this);

        _util.events.on(window, 'resize', this.updateFrameAndClearCache);

        this.updateFrame(this.scrollTo.bind(this, jumpIndex));
    };

    VirtualList.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        var _this2 = this;

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
            this.updateCounterTimeoutId = setTimeout(function () {
                _this2.updateCounter = 0;
                delete _this2.updateCounterTimeoutId;
            }, 0);
        }

        this.updateFrame();
    };

    VirtualList.prototype.componentWillUnmount = function componentWillUnmount() {
        _util.events.off(window, 'resize', this.updateFrameAndClearCache);

        _util.events.off(this.scrollParent, 'scroll', this.updateFrameAndClearCache);
        _util.events.off(this.scrollParent, 'mousewheel', NOOP);
    };

    VirtualList.prototype.maybeSetState = function maybeSetState(b, cb) {
        if (isEqualSubset(this.state, b)) {
            return cb();
        }

        this.setState(b, cb);
    };

    VirtualList.prototype.getEl = function getEl() {
        return this.el || this.items || {};
    };

    VirtualList.prototype.getScrollParent = function getScrollParent() {
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

    VirtualList.prototype.getScroll = function getScroll() {
        // Cache scroll position as this causes a forced synchronous layout.
        // if (typeof this.cachedScroll === 'number') {
        //     return this.cachedScroll;
        // }
        var scrollParent = this.scrollParent;

        var scrollKey = 'scrollTop';
        var actual = scrollParent === window ? // Firefox always returns document.body[scrollKey] as 0 and Chrome/Safari
        // always return document.documentElement[scrollKey] as 0, so take
        // whichever has a value.
        document.body[scrollKey] || document.documentElement[scrollKey] : scrollParent[scrollKey];
        var max = this.getScrollSize() - this.getViewportSize();

        var scroll = Math.max(0, Math.min(actual, max));
        var el = this.getEl();
        this.cachedScroll = getOffset(scrollParent) + scroll - getOffset(el);

        return this.cachedScroll;
    };

    VirtualList.prototype.setScroll = function setScroll(offset) {
        var scrollParent = this.scrollParent;

        offset += getOffset(this.getEl());
        if (scrollParent === window) {
            return window.scrollTo(0, offset);
        }

        offset -= getOffset(this.scrollParent);
        scrollParent.scrollTop = offset;
    };

    VirtualList.prototype.getViewportSize = function getViewportSize() {
        var scrollParent = this.scrollParent;

        return scrollParent === window ? window.innerHeight : scrollParent.clientHeight;
    };

    VirtualList.prototype.getScrollSize = function getScrollSize() {
        var scrollParent = this.scrollParent;
        var _document = document,
            body = _document.body,
            documentElement = _document.documentElement;

        var key = 'scrollHeight';
        return scrollParent === window ? Math.max(body[key], documentElement[key]) : scrollParent[key];
    };

    VirtualList.prototype.getStartAndEnd = function getStartAndEnd() {
        var threshold = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.threshold;

        var scroll = this.getScroll();

        var trueScroll = scroll;
        var start = Math.max(0, trueScroll - threshold);
        var end = trueScroll + this.getViewportSize() + threshold;

        return { start: start, end: end };
    };

    // Called by 'scroll' and 'resize' events, clears scroll position cache.


    VirtualList.prototype.updateFrameAndClearCache = function updateFrameAndClearCache(cb) {
        this.cachedScroll = null;
        return this.updateFrame(cb);
    };

    VirtualList.prototype.updateFrame = function updateFrame(cb) {
        this.updateScrollParent();

        if (typeof cb !== 'function') {
            cb = NOOP;
        }

        return this.updateVariableFrame(cb);
    };

    VirtualList.prototype.updateScrollParent = function updateScrollParent() {
        var prev = this.scrollParent;
        this.scrollParent = this.getScrollParent();

        if (prev === this.scrollParent) {
            return;
        }
        if (prev) {
            _util.events.off(prev, 'scroll', this.updateFrameAndClearCache);
            _util.events.off(prev, 'mousewheel', NOOP);
        }

        _util.events.on(this.scrollParent, 'scroll', this.updateFrameAndClearCache);
        _util.events.on(this.scrollParent, 'mousewheel', NOOP);

        // You have to attach mousewheel listener to the scrollable element.
        // Just an empty listener. After that onscroll events will be fired synchronously.
    };

    VirtualList.prototype.updateVariableFrame = function updateVariableFrame(cb) {
        if (!this.props.itemSizeGetter) {
            this.cacheSizes();
        }

        var _getStartAndEnd = this.getStartAndEnd(),
            start = _getStartAndEnd.start,
            end = _getStartAndEnd.end;

        var _props = this.props,
            pageSize = _props.pageSize,
            children = _props.children;

        var length = children.length;
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
            var _itemSize = this.getSizeOf(from + size);
            if (_itemSize === null || _itemSize === undefined) {
                size = Math.min(size + pageSize, maxSize);
                break;
            }
            space += _itemSize;
            ++size;
        }

        this.maybeSetState({ from: from, size: size }, cb);
    };

    VirtualList.prototype.getSpaceBefore = function getSpaceBefore(index) {
        var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (!index) {
            return 0;
        }
        if (cache[index] !== null && cache[index] !== undefined) {
            return cache[index] || 0;
        }

        // Find the closest space to index there is a cached value for.
        var from = index;
        while (from > 0 && (cache[from] === null || cache[from] === undefined)) {
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

    VirtualList.prototype.cacheSizes = function cacheSizes() {
        var cache = this.cache;
        var from = this.state.from;
        var _items = this.items,
            children = _items.children,
            _items$props = _items.props,
            props = _items$props === undefined ? {} : _items$props;

        var itemEls = children || props.children || [];
        for (var i = 0, l = itemEls.length; i < l; ++i) {
            var ulRef = (0, _reactDom.findDOMNode)(this.items);
            var height = ulRef.children[i].offsetHeight;
            if (height > 0) {
                cache[from + i] = height;
            }
        }
    };

    VirtualList.prototype.getSizeOf = function getSizeOf(index) {
        var _this3 = this;

        var cache = this.cache;
        var _props2 = this.props,
            itemSizeGetter = _props2.itemSizeGetter,
            jumpIndex = _props2.jumpIndex;

        // Try the cache.

        if (index in cache) {
            return cache[index];
        }
        if (itemSizeGetter) {
            return itemSizeGetter(index);
        }

        var height = Object.keys(this.cache).map(function (key) {
            return _this3.cache[key];
        }).pop();
        if (!this.defaultItemHeight && jumpIndex > -1 && height) {
            this.defaultItemHeight = height;
        }

        if (this.defaultItemHeight) {
            return this.defaultItemHeight;
        }
    };

    VirtualList.prototype.scrollTo = function scrollTo(index) {
        this.setScroll(this.getSpaceBefore(index));
    };

    VirtualList.prototype.renderMenuItems = function renderMenuItems() {
        var _this4 = this;

        var _props3 = this.props,
            children = _props3.children,
            itemsRenderer = _props3.itemsRenderer;
        var _state = this.state,
            from = _state.from,
            size = _state.size;

        var items = [];

        for (var i = 0; i < size; ++i) {
            items.push(children[from + i]);
        }

        return itemsRenderer(items, function (c) {
            _this4.items = c;
            return _this4.items;
        });
    };

    VirtualList.prototype.render = function render() {
        var _cx,
            _this5 = this;

        var _props4 = this.props,
            _props4$children = _props4.children,
            children = _props4$children === undefined ? [] : _props4$children,
            prefix = _props4.prefix,
            className = _props4.className;

        var length = children.length;
        var from = this.state.from;

        var items = this.renderMenuItems();

        var style = { position: 'relative' };
        var cache = {};

        var size = this.getSpaceBefore(length, cache);

        if (size) {
            style.height = size;
        }
        var offset = this.getSpaceBefore(from, cache);
        var transform = 'translate(0px, ' + offset + 'px)';
        var listStyle = {
            msTransform: transform,
            WebkitTransform: transform,
            transform: transform
        };

        var cls = (0, _classnames2.default)((_cx = {}, _cx[prefix + 'virtual-list-wrapper'] = true, _cx[className] = !!className, _cx));

        return _react2.default.createElement(
            'div',
            {
                className: cls,
                style: style,
                ref: function ref(c) {
                    _this5.el = c;
                    return _this5.el;
                }
            },
            _react2.default.createElement(
                'div',
                { style: listStyle },
                items
            )
        );
    };

    return VirtualList;
}(_react.Component), _class.displayName = 'VirtualList', _class.propTypes = {
    prefix: _propTypes2.default.string,
    /**
     * 渲染的子节点
     */
    children: _propTypes2.default.any,
    /**
     * 最小加载数量
     */
    minSize: _propTypes2.default.number,
    /**
     * 一屏数量
     */
    pageSize: _propTypes2.default.number,
    /**
     * 父渲染函数，默认为 (items, ref) => <ul ref={ref}>{items}</ul>
     */
    itemsRenderer: _propTypes2.default.func,
    /**
     * 缓冲区高度
     */
    threshold: _propTypes2.default.number,
    /**
     * 获取item高度的函数
     */
    itemSizeGetter: _propTypes2.default.func,
    /**
     * 设置跳转位置，需要设置 itemSizeGetter 才能生效, 不设置认为元素等高并取第一个元素高度作为默认高
     */
    jumpIndex: _propTypes2.default.number,
    className: _propTypes2.default.string
}, _class.defaultProps = {
    prefix: 'next-',
    itemsRenderer: function itemsRenderer(items, ref) {
        return _react2.default.createElement(
            'ul',
            { ref: ref },
            items
        );
    },
    minSize: 1,
    pageSize: 10,
    jumpIndex: 0,
    threshold: 100
}, _temp);
VirtualList.displayName = 'VirtualList';
exports.default = (0, _reactLifecyclesCompat.polyfill)(VirtualList);
module.exports = exports['default'];