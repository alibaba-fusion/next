import type { K2N, P2N } from '../types';

export const getWidth = (elem: Element | undefined | null) => {
    let width =
        elem &&
        typeof elem.getBoundingClientRect === 'function' &&
        elem.getBoundingClientRect().width;
    if (width) {
        width = +width.toFixed(6);
    }
    return width || 0;
};

export const normalizeToArray = <T>(items: T | T[] | undefined | null) => {
    if (items) {
        if (Array.isArray(items)) {
            return items;
        }
        return [items];
    }

    return [];
};

export const isSibling = (currentPos: string, targetPos: string) => {
    const currentNums = currentPos.split('-').slice(0, -1);
    const targetNums = targetPos.split('-').slice(0, -1);

    return (
        currentNums.length === targetNums.length &&
        currentNums.every((num, index) => {
            return num === targetNums[index];
        })
    );
};

export const isAncestor = (currentPos: string, targetPos: string) => {
    const currentNums = currentPos.split('-');
    const targetNums = targetPos.split('-');

    return (
        currentNums.length > targetNums.length &&
        targetNums.every((num, index) => {
            return num === currentNums[index];
        })
    );
};

export const isAvailablePos = (refPos: string, targetPos: string, _p2n: P2N) => {
    const { type, disabled } = _p2n[targetPos];

    return isSibling(refPos, targetPos) && ((type === 'item' && !disabled) || type === 'submenu');
};

export const getFirstAvaliablelChildKey = (parentPos: string, _p2n: P2N) => {
    const pos = Object.keys(_p2n).find(p => isAvailablePos(`${parentPos}-0`, p, _p2n));
    return pos ? _p2n[pos].key : null;
};

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
export const getChildSelected = ({
    selectMode,
    selectedKeys,
    _k2n,
    _key,
}: {
    _k2n?: K2N;
    _key: string;
    selectedKeys: string[];
    selectMode?: 'single' | 'multiple';
}) => {
    if (!_k2n) {
        return false;
    }

    const _keyPos = `${_k2n[_key] && _k2n[_key].pos}-`;

    return (
        !!selectMode && selectedKeys.some(key => _k2n[key] && _k2n[key].pos.indexOf(_keyPos) === 0)
    );
};
