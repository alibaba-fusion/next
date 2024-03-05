import type { CamelCase } from 'yargs';
import { camelcase, hyphenate } from './string';
import { each, isPlainObject } from './object';

/**
 * 是否能使用 DOM 方法
 */
export const hasDOM =
    typeof window !== 'undefined' && !!window.document && !!document.createElement;

/**
 * 节点是否包含指定 className
 *
 * @example
 * dom.hasClass(document.body, 'foo');
 */
export function hasClass(node?: Element | null, className?: string): boolean {
    /* istanbul ignore if */
    if (!hasDOM || !node) {
        return false;
    }

    if (node.classList) {
        // @ts-expect-error fixme: className can be undefined, conflict with containes
        return node.classList.contains(className);
    } else {
        // @ts-expect-error fixme: className can be undefined, conflict with containes
        return node.className.indexOf(className) > -1;
    }
}

/**
 * 添加 className
 *
 * @example
 * dom.addClass(document.body, 'foo');
 */
export function addClass(node: Element | undefined | null, className: string, _force = false) {
    /* istanbul ignore if */
    if (!hasDOM || !node) {
        return;
    }

    if (node.classList) {
        node.classList.add(className);
    } else if (_force === true || !hasClass(node, className)) {
        node.className += ` ${className}`;
    }
}

/**
 * 移除 className
 *
 * @example
 * dom.removeClass(document.body, 'foo');
 */
export function removeClass(node: Element | undefined | null, className: string, _force = false) {
    /* istanbul ignore if */
    if (!hasDOM || !node) {
        return;
    }

    if (node.classList) {
        node.classList.remove(className);
    } else if (_force === true || hasClass(node, className)) {
        node.className = node.className.replace(className, '').replace(/\s+/g, ' ').trim();
    }
}

/**
 * 切换 className
 * @returns 执行后节点上是否还有此 className
 *
 * @example
 * dom.toggleClass(document.body, 'foo');
 */
export function toggleClass(node: Element | undefined | null, className: string): boolean {
    /* istanbul ignore if */
    if (!hasDOM || !node) {
        return false;
    }

    if (node.classList) {
        return node.classList.toggle(className);
    } else {
        const flag = hasClass(node, className);
        flag ? removeClass(node, className, true) : addClass(node, className, true);

        return !flag;
    }
}

/**
 * 元素是否匹配 CSS 选择器
 * @param node - DOM 节点
 * @param selector - CSS 选择器
 *
 * @example
 * dom.matches(mountNode, '.container'); // boolean
 */
export const matches = (function () {
    let matchesFn: string | null = null;
    /* istanbul ignore else */
    if (hasDOM) {
        const _body: any = document.body || document.head;
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

    return function (node?: Element | undefined | null, selector?: string) {
        if (!hasDOM || !node) {
            return false;
        }
        // @ts-expect-error fixme: selector can be undefined, conflict with matches
        return matchesFn ? node[matchesFn as 'matches'](selector) : false;
    };
})();

/**
 * 获取元素计算后的样式
 */
function _getComputedStyle(
    node: Element | undefined | null
): CSSStyleDeclaration | undefined | null | { [key: string]: never } {
    return node && node.nodeType === 1 ? window.getComputedStyle(node, null) : {};
}

const PIXEL_PATTERN = /margin|padding|width|height|max|min|offset|size|top/i;
const removePixel: Record<string, unknown> = { left: 1, top: 1, right: 1, bottom: 1 };

/**
 * 校验并修正元素的样式属性值
 */
function _getStyleValue(node: HTMLElement, type: string, value: number | string) {
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

    return removePixel[type] ? parseFloat(value as string) || 0 : value;
}

const floatMap: Record<PropertyKey, unknown> = { cssFloat: 1, styleFloat: 1, float: 1 };
export type CustomCSSStyleKey = Exclude<
    keyof ReturnType<typeof window.getComputedStyle>,
    number | typeof Symbol.iterator
>;
type LikeCustomCSSStyleKey<T extends string> = CamelCase<T> extends CustomCSSStyleKey ? T : never;

export type CustomCSSStyle = {
    [key in CustomCSSStyleKey]: unknown;
};

type LikeCustomCSSStyle<T extends Record<string, unknown>> =
    LikeCustomCSSStyleKey<Exclude<keyof T, number | symbol>> extends never ? never : T;

export function getStyle<N extends undefined | null>(node: N, name?: unknown): N;
export function getStyle(node: HTMLElement): CustomCSSStyle;
export function getStyle<K extends string>(
    node: HTMLElement,
    name: LikeCustomCSSStyleKey<K>
): string | number;
/**
 * 获取元素计算后的样式
 * @param node - DOM 节点
 * @param name - 属性名
 */
export function getStyle(
    node: HTMLElement | undefined | null,
    name?: any
): CustomCSSStyle | string | number | { [key: string]: never } | undefined | null {
    /* istanbul ignore if */
    if (!hasDOM || !node) {
        return null;
    }

    const style = _getComputedStyle(node);

    // 如果不指定属性名，则返回全部值
    if (!name) {
        return style;
    }

    // if style is {}(e.g. node isn't a element node), return null
    if (isPlainObject(style)) {
        return null;
    }

    name = floatMap[name] ? ('cssFloat' in node.style ? 'cssFloat' : 'styleFloat') : name;

    return _getStyleValue(
        node,
        name,
        (style as CSSStyleDeclaration).getPropertyValue(hyphenate(name)) ||
            node.style[camelcase(name) as any]
    );
}

export function setStyle(node: undefined | null, name: unknown): false;
export function setStyle<K extends Record<string, unknown>>(
    node: HTMLElement,
    name: K & LikeCustomCSSStyle<K>
): void;
export function setStyle<K extends string>(
    node: HTMLElement,
    name: LikeCustomCSSStyleKey<K>,
    value: unknown
): void;
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
export function setStyle(
    node: HTMLElement | undefined | null,
    name: any,
    value?: any
): false | void {
    /* istanbul ignore if */
    if (!hasDOM || !node) {
        return false;
    }

    // 批量设置多个值
    if (typeof name === 'object' && arguments.length === 2) {
        each(name, (val: any, key: LikeCustomCSSStyleKey<string>) => setStyle(node, key, val));
    } else {
        name = floatMap[name] ? ('cssFloat' in node.style ? 'cssFloat' : 'styleFloat') : name;
        if (typeof value === 'number' && PIXEL_PATTERN.test(name)) {
            value = `${value}px`;
        }
        node.style[camelcase(name) as any] = value; // IE8 support
    }
}

export function getNodeHozWhitespace(node: HTMLElement) {
    const paddingLeft: number = getStyle(node, 'paddingLeft') as any;
    const paddingRight: number = getStyle(node, 'paddingRight') as any;
    const marginLeft: number = getStyle(node, 'marginLeft') as any;
    const marginRight: number = getStyle(node, 'marginRight') as any;
    return paddingLeft + paddingRight + marginLeft + marginRight;
}

const isScrollDisplay = function (element: Element) {
    try {
        const scrollbarStyle = window.getComputedStyle(element, '::-webkit-scrollbar');
        return !scrollbarStyle || scrollbarStyle.getPropertyValue('display') !== 'none';
    } catch (e) {
        // ignore error for firefox
    }

    return true;
};

/**
 * 获取默认的滚动条大小（通过创造一个滚动元素，读取滚动元素的滚动条信息）
 */
export function scrollbar(): { width: number; height: number } {
    const scrollDiv = document.createElement('div');
    scrollDiv.className += 'just-to-get-scrollbar-size';

    setStyle(scrollDiv, {
        position: 'absolute',
        width: '100px',
        height: '100px',
        overflow: 'scroll',
        top: '-9999px',
    });
    document.body && document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    const scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
    document.body.removeChild(scrollDiv);

    return {
        width: scrollbarWidth,
        height: scrollbarHeight,
    };
}

export function hasScroll(containerNode: HTMLElement) {
    // 当元素带有 overflow: hidden 一定没有滚动条
    const overflow = getStyle(containerNode, 'overflow');
    if (overflow === 'hidden') {
        return false;
    }

    const parentNode = containerNode.parentNode as HTMLElement | null;

    return (
        parentNode &&
        parentNode.scrollHeight > parentNode.clientHeight &&
        scrollbar().width > 0 &&
        isScrollDisplay(parentNode) &&
        isScrollDisplay(containerNode)
    );
}

/**
 * 获取元素距离视口顶部和左边的偏移距离
 */
export function getOffset(node: Element) {
    const rect = node.getBoundingClientRect();
    const win = node.ownerDocument.defaultView!;
    return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset,
    };
}

/**
 * 获取不同单位转为 number 的长度
 * @param len - 传入的长度
 * @returns pixels
 */
export function getPixels(len: string | number): number {
    const win = document.defaultView!;
    if (typeof +len === 'number' && !isNaN(+len)) {
        return +len;
    }

    if (typeof len === 'string') {
        const PX_REG = /(\d+)px/;
        const VH_REG = /(\d+)vh/;
        if (Array.isArray(len.match(PX_REG))) {
            return +len.match(PX_REG)![1] || 0;
        }

        if (Array.isArray(len.match(VH_REG))) {
            const _1vh = win.innerHeight / 100;
            return +((len.match(VH_REG)![1] as any) * _1vh) || 0;
        }
    }

    return 0;
}

/**
 * 如果元素被指定的选择器字符串选择，getMatches()  方法返回 true; 否则返回 false
 * @param dom - 待匹配的元素
 * @param selecotr - 选择器
 * @returns parent
 */
export function getMatches(dom: Element | undefined | null, selector: string): boolean | null {
    /* istanbul ignore if */
    if (!hasDOM || !dom) {
        return null;
    }

    /* istanbul ignore if */
    if (Element.prototype.matches as any) {
        return dom.matches(selector);
    } else if ((Element.prototype as any).msMatchesSelector) {
        return (dom as any).msMatchesSelector(selector);
    } else if ((Element.prototype as any).webkitMatchesSelector) {
        return dom.webkitMatchesSelector(selector);
    }

    return null;
}

/**
 * 匹配特定选择器且离当前元素最近的祖先元素（也可以是当前元素本身），如果匹配不到，则返回 null
 * @param dom - 待匹配的元素
 * @param selecotr - 选择器
 * @returns parent
 */
export function getClosest(dom: HTMLElement | undefined | null, selector: string): Element | null {
    /* istanbul ignore if */
    if (!hasDOM || !dom) {
        return null;
    }

    // ie9
    /* istanbul ignore if */
    if (!Element.prototype.closest) {
        if (!document.documentElement.contains(dom)) return null;
        do {
            if (getMatches(dom, selector)) return dom;
            dom = dom.parentElement;
        } while (dom !== null);
    } else {
        return dom.closest(selector);
    }
    return null;
}

export function saveRef(ref: string | ((ins: any) => any) | { current?: any }) {
    if (!ref) {
        return null;
    }
    return (element: any) => {
        if (typeof ref === 'string') {
            throw new Error(`can not set ref string for ${ref}`);
        } else if (typeof ref === 'function') {
            ref(element);
        } else if (Object.prototype.hasOwnProperty.call(ref, 'current')) {
            ref.current = element;
        }
    };
}
