import KEYCODE from './keycode';
import { each } from './object';

/**
 * 用于切换页面元素的焦点
 */

/**
 * 元素是否可见
 */
function _isVisible(node?: Element | null): boolean {
    while (node) {
        const { nodeName } = node;
        if (nodeName === 'BODY' || nodeName === 'HTML') {
            break;
        }
        const style = (node as HTMLElement).style;
        if (style.display === 'none' || style.visibility === 'hidden') {
            return false;
        }
        node = node.parentNode as Element;
    }
    return true;
}

/**
 * 元素是否可以获取焦点
 */
function _isFocusable(node: Element): boolean {
    const nodeName = node.nodeName.toLowerCase();
    const tabIndex = parseInt(node.getAttribute('tabindex')!, 10);
    const hasTabIndex = !isNaN(tabIndex) && tabIndex > -1;

    if (_isVisible(node)) {
        if (nodeName === 'input') {
            return (
                !(node as HTMLInputElement).disabled && (node as HTMLInputElement).type !== 'hidden'
            );
        } else if (['select', 'textarea', 'button'].indexOf(nodeName) > -1) {
            return !(node as HTMLSelectElement | HTMLTextAreaElement | HTMLButtonElement).disabled;
        } else if (nodeName === 'a') {
            return !!node.getAttribute('href') || hasTabIndex;
        } else {
            return hasTabIndex;
        }
    }
    return false;
}

/**
 * 列出能获取焦点的子节点
 * @param node - 容器节点
 */
export function getFocusNodeList(node: HTMLElement): HTMLElement[] {
    const res: HTMLElement[] = [];
    const nodeList = node.querySelectorAll('*');

    each(nodeList, (item: HTMLElement) => {
        if (_isFocusable(item)) {
            const method = item.getAttribute('data-auto-focus') ? 'unshift' : 'push';
            res[method](item);
        }
    });

    if (_isFocusable(node)) {
        res.unshift(node);
    }

    return res;
}

// 用于记录上一次获得焦点的无素
let lastFocusElement: Element | null = null;

/**
 * 保存最近一次获得焦点的无素
 */
export function saveLastFocusNode() {
    lastFocusElement = document.activeElement;
}

/**
 * 清除焦点记录
 */
export function clearLastFocusNode() {
    lastFocusElement = null;
}

/**
 * 尝试将焦点切换到上一个元素
 */
export function backLastFocusNode() {
    if (lastFocusElement) {
        try {
            // 元素可能已经被移动了
            (lastFocusElement as HTMLElement).focus();
        } catch (e) {
            // ignore ...
        }
    }
}

/**
 * 在限制的范围内切换焦点
 * @param node - 容器节点
 * @param e - 键盘事件
 */
export function limitTabRange(
    node: HTMLElement,
    e: Pick<KeyboardEvent, 'keyCode' | 'shiftKey' | 'preventDefault'>
) {
    if (e.keyCode === KEYCODE.TAB) {
        const tabNodeList = getFocusNodeList(node);
        const maxIndex = tabNodeList.length - 1;
        const index = tabNodeList.indexOf(document.activeElement! as HTMLElement);

        if (index > -1) {
            let targetIndex = index + (e.shiftKey ? -1 : 1);
            targetIndex < 0 && (targetIndex = maxIndex);
            targetIndex > maxIndex && (targetIndex = 0);
            (tabNodeList[targetIndex] as HTMLElement).focus();
            e.preventDefault();
        }
    }
}

/**
 * 检查一个 ref 是否有 focus 方法，如果有方法，则调用 focus 函数
 */
export function focusRef(ref: { focus?: unknown } | undefined, ...args: unknown[]) {
    if (ref && ref.focus && typeof ref.focus === 'function') {
        ref.focus(...args);
    }
}
