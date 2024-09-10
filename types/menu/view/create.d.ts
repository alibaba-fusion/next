import type { CreateMenuProps } from '../types';
/**
 * 创建上下文菜单
 */
export default function create(props: CreateMenuProps): {
    destroy(): void;
};
