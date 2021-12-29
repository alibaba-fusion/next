import { dom, guid } from '../util';

const lockcache = [];

function lock(container, style) {
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

function unlock(container, uuid) {
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
    }
}

export default {
    lock,
    unlock,
};
