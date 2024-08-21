import type React from 'react';
import { type CommonProps } from '../util';

export interface VirtualListState {
    size: number;
    from: number;
}

/**
 * @api VirtualList
 */
export interface VirtualListProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 渲染的子节点
     * @en children of the virtual list component
     */
    children?: React.ReactElement | Array<React.ReactElement | undefined | null>;

    /**
     * 最小加载数量
     * @en the minimum number of items to be loaded
     * @defaultValue 1
     */
    minSize?: number;

    /**
     * 一屏数量
     * @en the number of items to be rendered in one screen
     * @defaultValue 10
     */
    pageSize?: number;

    /**
     * 父渲染函数
     * @en the parent render function
     * @defaultValue `(items, ref) => <ul ref={ref}>{items}</ul>`
     */
    itemsRenderer?: (
        items: React.ReactNodeArray,
        ref: (instance: React.ReactInstance | null) => React.ReactInstance | null
    ) => React.ReactNode;

    /**
     * 缓冲区高度
     * @en the height of the buffer
     * @defaultValue 100
     */
    threshold?: number;

    /**
     * 获取 item 高度的函数
     * @en the function to get the height of the item
     */
    itemSizeGetter?: (index?: number) => void;

    /**
     * 设置跳转位置，需要设置 itemSizeGetter 才能生效，不设置认为元素等高并取第一个元素高度作为默认高
     * @en set the jump position, need to set itemSizeGetter to take effect, if not set, the element is assumed to be of equal height and the height of the first element is taken as the default height
     * @defaultValue 0
     */
    jumpIndex?: number;
}
