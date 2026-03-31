import type { CamelCase } from 'yargs';
/**
 * 是否能使用 DOM 方法
 */
export declare const hasDOM: boolean;
/**
 * 节点是否包含指定 className
 *
 * @example
 * dom.hasClass(document.body, 'foo');
 */
export declare function hasClass(node?: Element | null, className?: string): boolean;
/**
 * 添加 className
 *
 * @example
 * dom.addClass(document.body, 'foo');
 */
export declare function addClass(node: Element | undefined | null, className: string, _force?: boolean): void;
/**
 * 移除 className
 *
 * @example
 * dom.removeClass(document.body, 'foo');
 */
export declare function removeClass(node: Element | undefined | null, className: string, _force?: boolean): void;
/**
 * 切换 className
 * @returns 执行后节点上是否还有此 className
 *
 * @example
 * dom.toggleClass(document.body, 'foo');
 */
export declare function toggleClass(node: Element | undefined | null, className: string): boolean;
/**
 * 元素是否匹配 CSS 选择器
 * @param node - DOM 节点
 * @param selector - CSS 选择器
 *
 * @example
 * dom.matches(mountNode, '.container'); // boolean
 */
export declare const matches: (node?: Element | undefined | null, selector?: string) => boolean;
export type CustomCSSStyleKey = Exclude<keyof ReturnType<typeof window.getComputedStyle>, number | typeof Symbol.iterator>;
type LikeCustomCSSStyleKey<T extends string> = CamelCase<T> extends CustomCSSStyleKey ? T : never;
export type CustomCSSStyle = {
    [key in CustomCSSStyleKey]: unknown;
};
type LikeCustomCSSStyle<T extends Record<string, unknown>> = LikeCustomCSSStyleKey<Exclude<keyof T, number | symbol>> extends never ? never : T;
export declare function getStyle<N extends undefined | null>(node: N, name?: unknown): N;
export declare function getStyle(node: HTMLElement): CustomCSSStyle;
export declare function getStyle<K extends string>(node: HTMLElement, name: LikeCustomCSSStyleKey<K>): string | number;
export declare function setStyle<K extends Record<string, unknown>>(node: HTMLElement | undefined | null, name: K & LikeCustomCSSStyle<K>): false | void;
export declare function setStyle<K extends string>(node: HTMLElement | undefined | null, name: LikeCustomCSSStyleKey<K>, value: unknown): false | void;
export declare function getNodeHozWhitespace(node: HTMLElement): number;
/**
 * 获取默认的滚动条大小（通过创造一个滚动元素，读取滚动元素的滚动条信息）
 */
export declare function scrollbar(): {
    width: number;
    height: number;
};
export declare function hasScroll(containerNode: HTMLElement): boolean | null;
/**
 * 获取元素距离视口顶部和左边的偏移距离
 */
export declare function getOffset(node: Element): {
    top: number;
    left: number;
};
/**
 * 获取不同单位转为 number 的长度
 * @param len - 传入的长度
 * @returns pixels
 */
export declare function getPixels(len: string | number): number;
/**
 * 如果元素被指定的选择器字符串选择，getMatches()  方法返回 true; 否则返回 false
 * @param dom - 待匹配的元素
 * @param selecotr - 选择器
 * @returns parent
 */
export declare function getMatches(dom: Element | undefined | null, selector: string): boolean | null;
/**
 * 匹配特定选择器且离当前元素最近的祖先元素（也可以是当前元素本身），如果匹配不到，则返回 null
 * @param dom - 待匹配的元素
 * @param selecotr - 选择器
 * @returns parent
 */
export declare function getClosest(dom: HTMLElement | undefined | null, selector: string): Element | null;
export declare function saveRef(ref: string | ((ins: any) => any) | {
    current?: any;
}): ((element: any) => void) | null;
export {};
