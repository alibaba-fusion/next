import type { K2N, P2N } from '../types';
export declare const getWidth: (elem: Element | undefined | null) => number;
export declare const normalizeToArray: <T>(items: T | T[] | null | undefined) => T[];
export declare const isSibling: (currentPos: string, targetPos: string) => boolean;
export declare const isAncestor: (currentPos: string, targetPos: string) => boolean;
export declare const isAvailablePos: (refPos: string, targetPos: string, _p2n: P2N) => boolean;
export declare const getFirstAvaliablelChildKey: (parentPos: string, _p2n: P2N) => string | null;
/**
 * 如果 key 在 SelectedKeys 的选中链上（例如 SelectedKeys 是 ['0-1-2'],  key 是 0-1），那么返回 true
 *
 * selectMode?: string; 当前的选择模式，一般为 multiple single
 * selectedKeys?: string[]; 选中的 key 值
 * k2n?: object[] mapping;
 * _key?: string; 待测试的 key 值
 *
 * @returns bool 当前元素是否有孩子被选中
 */
export declare const getChildSelected: ({ selectMode, selectedKeys, _k2n, _key, }: {
    _k2n?: K2N | undefined;
    _key: string;
    selectedKeys: string[];
    selectMode?: "multiple" | "single" | undefined;
}) => boolean;
