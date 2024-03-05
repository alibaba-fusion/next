import { dom, guid } from '../util';
import { type CustomCSSStyle } from '../util/dom';

/**
 * https://github.com/alibaba-fusion/next/issues/3638
 * 通过栈的形式：解决弹窗关闭的时候对 document.body 上面的 style 恢复顺序问题
 * 问题复现步骤:
 *   1. dialog1 进来，把 body.style=overflow:hidden，如果关闭应该恢复 body.style=""
 *   2. dialog2 进来，把 body.style=overflow:hidden, 因为此时 body.style是verflow:hidden，所以如果关闭应该恢复 body.style="verflow:hidden"
 *   3. dialog1 关闭，恢复 body.style=""。造成问题：dialog2 页面可滚动
 *   4. dialog2 关闭，恢复 body.style="verflow:hidden"。造成问题：页面不可滚动
 * 解决方案：
 *   1. 每个 dialog 修改 body.style 的时候都 push 入栈
 *   2. 如果dialog1 先退出，发现 dialog2 存在则不做任何操作，把自己的恢复值给到 dialog2
 */

const lockcache: Array<{ uuid: string; container: HTMLElement; originStyle: string | null }> = [];

function lock(container: HTMLElement, style: Partial<CustomCSSStyle>): string {
    const originStyle = container.getAttribute('style');
    const uuid = guid();
    lockcache.push({
        uuid,
        container,
        originStyle,
    });
    dom.setStyle(container, style);
    return uuid;
}

function unlock(container: HTMLElement, uuid: string) {
    const list = lockcache.filter(i => i.container === container);
    const item = list.find(i => i.uuid === uuid);
    if (item) {
        const idx = list.indexOf(item);
        // 解锁的时候，链表有新增。说明 container style 已经被其他 Dialog 修改过了
        if (idx !== -1 && idx < list.length - 1) {
            const originStyle = item.originStyle;
            // 下一个 dialog 解锁的时候直接替换为
            list[idx + 1].originStyle = originStyle;
            lockcache.splice(lockcache.indexOf(item), 1);
            return;
        }

        container.setAttribute('style', item.originStyle || '');
        lockcache.pop();
    }
}

export default {
    lock,
    unlock,
};
