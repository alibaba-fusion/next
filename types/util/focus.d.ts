/**
 * 列出能获取焦点的子节点
 * @param node - 容器节点
 */
export declare function getFocusNodeList(node: HTMLElement): HTMLElement[];
/**
 * 保存最近一次获得焦点的无素
 */
export declare function saveLastFocusNode(): void;
/**
 * 清除焦点记录
 */
export declare function clearLastFocusNode(): void;
/**
 * 尝试将焦点切换到上一个元素
 */
export declare function backLastFocusNode(): void;
/**
 * 在限制的范围内切换焦点
 * @param node - 容器节点
 * @param e - 键盘事件
 */
export declare function limitTabRange(
    node: HTMLElement,
    e: Pick<KeyboardEvent, 'keyCode' | 'shiftKey' | 'preventDefault'>
): void;
/**
 * 检查一个 ref 是否有 focus 方法，如果有方法，则调用 focus 函数
 */
export declare function focusRef(
    ref:
        | {
              focus?: unknown;
          }
        | undefined,
    ...args: unknown[]
): void;
