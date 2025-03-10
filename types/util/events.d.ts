export interface ListenerCallback {
    (...args: unknown[]): unknown;
}
export interface CanListenNode {
    addEventListener?: (name: string, callback: ListenerCallback, useCapture?: boolean) => unknown;
    removeEventListener?: (
        name: string,
        callback: ListenerCallback,
        useCapture?: boolean
    ) => unknown;
}
/**
 * 取消事件绑定
 * @param node - DOM 节点或任何可以绑定事件的对象
 * @param eventName - 事件名
 * @param callback - 回调方法
 * @param useCapture - [useCapture=false] 是否开启事件捕获优先
 */
export declare function off(
    node: CanListenNode,
    eventName: string,
    callback: ListenerCallback,
    useCapture?: boolean
): void;
/**
 * 绑定事件
 * @param node - DOM 节点或任何可以绑定事件的对象
 * @param eventName - 事件名
 * @param callback - 回调方法
 * @param useCapture - 是否开启事件捕获优先
 * @returns 返回的 object 中包含一个 off 方法，用于取消事件监听
 *
 * @example
 * const handler = events.on(document.body, 'click', e =\> \{
 *     // handle click ...
 * \});
 * // 取消事件绑定
 * handler.off();
 */
export declare function on(
    node: CanListenNode,
    eventName: string,
    callback: ListenerCallback,
    useCapture?: boolean
): {
    off: () => void;
};
/**
 * 绑定事件，只执行一次后销毁
 * @param node - DOM 节点或任何可以绑定事件的对象
 * @param eventName - 事件名
 * @param callback - 回调方法
 * @param useCapture - 是否开启事件捕获优先
 * @returns 返回的 object 中包含一个 off 方法，用于取消事件监听
 */
export declare function once(
    node: CanListenNode,
    eventName: string,
    callback: ListenerCallback,
    useCapture?: boolean
): {
    off: () => void;
};
