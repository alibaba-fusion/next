"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveRef = exports.getClosest = exports.getMatches = exports.getPixels = exports.getOffset = exports.hasScroll = exports.scrollbar = exports.getNodeHozWhitespace = exports.setStyle = exports.getStyle = exports.matches = exports.toggleClass = exports.removeClass = exports.addClass = exports.hasClass = exports.hasDOM = void 0;
var string_1 = require("./string");
var object_1 = require("./object");
/**
 * 是否能使用 DOM 方法
 */
exports.hasDOM = typeof window !== 'undefined' && !!window.document && !!document.createElement;
/**
 * 节点是否包含指定 className
 *
 * @example
 * dom.hasClass(document.body, 'foo');
 */
function hasClass(node, className) {
    /* istanbul ignore if */
    if (!exports.hasDOM || !node) {
        return false;
    }
    if (node.classList) {
        // @ts-expect-error fixme: className can be undefined, conflict with containes
        return node.classList.contains(className);
    }
    else {
        // @ts-expect-error fixme: className can be undefined, conflict with containes
        return node.className.indexOf(className) > -1;
    }
}
exports.hasClass = hasClass;
/**
 * 添加 className
 *
 * @example
 * dom.addClass(document.body, 'foo');
 */
function addClass(node, className, _force) {
    if (_force === void 0) { _force = false; }
    /* istanbul ignore if */
    if (!exports.hasDOM || !node) {
        return;
    }
    if (node.classList) {
        node.classList.add(className);
    }
    else if (_force === true || !hasClass(node, className)) {
        node.className += " ".concat(className);
    }
}
exports.addClass = addClass;
/**
 * 移除 className
 *
 * @example
 * dom.removeClass(document.body, 'foo');
 */
function removeClass(node, className, _force) {
    if (_force === void 0) { _force = false; }
    /* istanbul ignore if */
    if (!exports.hasDOM || !node) {
        return;
    }
    if (node.classList) {
        node.classList.remove(className);
    }
    else if (_force === true || hasClass(node, className)) {
        node.className = node.className.replace(className, '').replace(/\s+/g, ' ').trim();
    }
}
exports.removeClass = removeClass;
/**
 * 切换 className
 * @returns 执行后节点上是否还有此 className
 *
 * @example
 * dom.toggleClass(document.body, 'foo');
 */
function toggleClass(node, className) {
    /* istanbul ignore if */
    if (!exports.hasDOM || !node) {
        return false;
    }
    if (node.classList) {
        return node.classList.toggle(className);
    }
    else {
        var flag = hasClass(node, className);
        flag ? removeClass(node, className, true) : addClass(node, className, true);
        return !flag;
    }
}
exports.toggleClass = toggleClass;
/**
 * 元素是否匹配 CSS 选择器
 * @param node - DOM 节点
 * @param selector - CSS 选择器
 *
 * @example
 * dom.matches(mountNode, '.container'); // boolean
 */
exports.matches = (function () {
    var matchesFn = null;
    /* istanbul ignore else */
    if (exports.hasDOM) {
        var _body = document.body || document.head;
        matchesFn = _body.matches
            ? 'matches'
            : _body.webkitMatchesSelector
                ? 'webkitMatchesSelector'
                : _body.msMatchesSelector
                    ? 'msMatchesSelector'
                    : _body.mozMatchesSelector
                        ? 'mozMatchesSelector'
                        : null;
    }
    return function (node, selector) {
        if (!exports.hasDOM || !node) {
            return false;
        }
        // @ts-expect-error fixme: selector can be undefined, conflict with matches
        return matchesFn ? node[matchesFn](selector) : false;
    };
})();
/**
 * 获取元素计算后的样式
 */
function _getComputedStyle(node) {
    return node && node.nodeType === 1 ? window.getComputedStyle(node, null) : {};
}
var PIXEL_PATTERN = /margin|padding|width|height|max|min|offset|size|top/i;
var removePixel = { left: 1, top: 1, right: 1, bottom: 1 };
/**
 * 校验并修正元素的样式属性值
 */
function _getStyleValue(node, type, value) {
    type = type.toLowerCase();
    if (value === 'auto') {
        if (type === 'height') {
            return node.offsetHeight || 0;
        }
        if (type === 'width') {
            return node.offsetWidth || 0;
        }
    }
    if (!(type in removePixel)) {
        // 属性值是否需要去掉 px 单位，这里假定此类的属性值都是 px 为单位的
        removePixel[type] = PIXEL_PATTERN.test(type);
    }
    return removePixel[type] ? parseFloat(value) || 0 : value;
}
var floatMap = { cssFloat: 1, styleFloat: 1, float: 1 };
/**
 * 获取元素计算后的样式
 * @param node - DOM 节点
 * @param name - 属性名
 */
function getStyle(node, name) {
    /* istanbul ignore if */
    if (!exports.hasDOM || !node) {
        return null;
    }
    var style = _getComputedStyle(node);
    // 如果不指定属性名，则返回全部值
    if (!name) {
        return style;
    }
    // if style is {}(e.g. node isn't a element node), return null
    if ((0, object_1.isPlainObject)(style)) {
        return null;
    }
    name = floatMap[name] ? ('cssFloat' in node.style ? 'cssFloat' : 'styleFloat') : name;
    return _getStyleValue(node, name, style.getPropertyValue((0, string_1.hyphenate)(name)) ||
        node.style[(0, string_1.camelcase)(name)]);
}
exports.getStyle = getStyle;
/**
 * 设置元素的样式
 * @param node - DOM 节点
 * @param name - 属性名，或者是一个对象，包含多个属性
 * @param value - 属性值
 *
 * @example
 * // 设置单个属性值
 * dom.setStyle(mountNode, 'width', 100);
 * // 设置多条属性值
 * dom.setStyle(mountNode, \{
 *     width: 100,
 *     height: 200
 * \});
 */
function setStyle(node, name, value) {
    /* istanbul ignore if */
    if (!exports.hasDOM || !node) {
        return false;
    }
    // 批量设置多个值
    if (typeof name === 'object' && arguments.length === 2) {
        (0, object_1.each)(name, function (val, key) { return setStyle(node, key, val); });
    }
    else {
        name = floatMap[name] ? ('cssFloat' in node.style ? 'cssFloat' : 'styleFloat') : name;
        if (typeof value === 'number' && PIXEL_PATTERN.test(name)) {
            value = "".concat(value, "px");
        }
        node.style[(0, string_1.camelcase)(name)] = value; // IE8 support
    }
}
exports.setStyle = setStyle;
function getNodeHozWhitespace(node) {
    var paddingLeft = getStyle(node, 'paddingLeft');
    var paddingRight = getStyle(node, 'paddingRight');
    var marginLeft = getStyle(node, 'marginLeft');
    var marginRight = getStyle(node, 'marginRight');
    return paddingLeft + paddingRight + marginLeft + marginRight;
}
exports.getNodeHozWhitespace = getNodeHozWhitespace;
var isScrollDisplay = function (element) {
    try {
        var scrollbarStyle = window.getComputedStyle(element, '::-webkit-scrollbar');
        return !scrollbarStyle || scrollbarStyle.getPropertyValue('display') !== 'none';
    }
    catch (e) {
        // ignore error for firefox
    }
    return true;
};
/**
 * 获取默认的滚动条大小（通过创造一个滚动元素，读取滚动元素的滚动条信息）
 */
function scrollbar() {
    var scrollDiv = document.createElement('div');
    scrollDiv.className += 'just-to-get-scrollbar-size';
    setStyle(scrollDiv, {
        position: 'absolute',
        width: '100px',
        height: '100px',
        overflow: 'scroll',
        top: '-9999px',
    });
    document.body && document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    var scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
    document.body.removeChild(scrollDiv);
    return {
        width: scrollbarWidth,
        height: scrollbarHeight,
    };
}
exports.scrollbar = scrollbar;
function hasScroll(containerNode) {
    // 当元素带有 overflow: hidden 一定没有滚动条
    var overflow = getStyle(containerNode, 'overflow');
    if (overflow === 'hidden') {
        return false;
    }
    var parentNode = containerNode.parentNode;
    return (parentNode &&
        parentNode.scrollHeight > parentNode.clientHeight &&
        scrollbar().width > 0 &&
        isScrollDisplay(parentNode) &&
        isScrollDisplay(containerNode));
}
exports.hasScroll = hasScroll;
/**
 * 获取元素距离视口顶部和左边的偏移距离
 */
function getOffset(node) {
    var rect = node.getBoundingClientRect();
    var win = node.ownerDocument.defaultView;
    return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset,
    };
}
exports.getOffset = getOffset;
/**
 * 获取不同单位转为 number 的长度
 * @param len - 传入的长度
 * @returns pixels
 */
function getPixels(len) {
    var win = document.defaultView;
    if (typeof +len === 'number' && !isNaN(+len)) {
        return +len;
    }
    if (typeof len === 'string') {
        var PX_REG = /(\d+)px/;
        var VH_REG = /(\d+)vh/;
        if (Array.isArray(len.match(PX_REG))) {
            return +len.match(PX_REG)[1] || 0;
        }
        if (Array.isArray(len.match(VH_REG))) {
            var _1vh = win.innerHeight / 100;
            return +(len.match(VH_REG)[1] * _1vh) || 0;
        }
    }
    return 0;
}
exports.getPixels = getPixels;
/**
 * 如果元素被指定的选择器字符串选择，getMatches()  方法返回 true; 否则返回 false
 * @param dom - 待匹配的元素
 * @param selecotr - 选择器
 * @returns parent
 */
function getMatches(dom, selector) {
    /* istanbul ignore if */
    if (!exports.hasDOM || !dom) {
        return null;
    }
    /* istanbul ignore if */
    if (Element.prototype.matches) {
        return dom.matches(selector);
    }
    else if (Element.prototype.msMatchesSelector) {
        return dom.msMatchesSelector(selector);
    }
    else if (Element.prototype.webkitMatchesSelector) {
        return dom.webkitMatchesSelector(selector);
    }
    return null;
}
exports.getMatches = getMatches;
/**
 * 匹配特定选择器且离当前元素最近的祖先元素（也可以是当前元素本身），如果匹配不到，则返回 null
 * @param dom - 待匹配的元素
 * @param selecotr - 选择器
 * @returns parent
 */
function getClosest(dom, selector) {
    /* istanbul ignore if */
    if (!exports.hasDOM || !dom) {
        return null;
    }
    // ie9
    /* istanbul ignore if */
    if (!Element.prototype.closest) {
        if (!document.documentElement.contains(dom))
            return null;
        do {
            if (getMatches(dom, selector))
                return dom;
            dom = dom.parentElement;
        } while (dom !== null);
    }
    else {
        return dom.closest(selector);
    }
    return null;
}
exports.getClosest = getClosest;
function saveRef(ref) {
    if (!ref) {
        return null;
    }
    return function (element) {
        if (typeof ref === 'string') {
            throw new Error("can not set ref string for ".concat(ref));
        }
        else if (typeof ref === 'function') {
            ref(element);
        }
        else if (Object.prototype.hasOwnProperty.call(ref, 'current')) {
            ref.current = element;
        }
    };
}
exports.saveRef = saveRef;
