/**
 * 反对使用某一方法或属性的警告
 * @param props - 过时的属性或方法名
 * @param instead - 替代的属性或方法名
 * @param component - 组件名
 *
 * @example
 * log.deprecated('onBeforeClose', 'beforeClose', 'Dialog');
 * // Warning: onBeforeClose is deprecated at [ Dialog ], use [ beforeClose ] instead of it.
 */
export declare function deprecated(props: string, instead: string, component: string): void;
/**
 * 控制台警告日志
 */
export declare function warning(msg: string): void;
