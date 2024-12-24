import classnames from 'classnames';
import { type CSSProperties } from 'react';
import type { NormalizedColumnProps } from './types';

const blackList = [
    'defaultProps',
    'propTypes',
    'contextTypes',
    'childContextTypes',
    'displayName',
    'getDerivedStateFromProps',
];

export const statics = <T extends object, U extends object>(Target: T, Component: U): T & U => {
    Object.keys(Component).forEach(property => {
        if (blackList.indexOf(property) === -1) {
            (Target as Record<string, unknown>)[property] = (Component as Record<string, unknown>)[
                property
            ];
        }
    });
    return Target as T & U;
};

export const fetchDataByPath = (object: Record<string, unknown>, path?: string) => {
    if (!object || !path) {
        return false;
    }
    path = path.toString();
    const field = path.split('.');
    let val, key;
    if (field.length) {
        key = field[0];
        // lists[1].name
        if (key.indexOf('[') >= 0) {
            key = key.match(/(.*)\[(.*)\]/);
            if (key && typeof key[1] === 'object' && typeof object[key[1]] === 'object') {
                val = (object[key[1]] as Record<string, unknown>)[key[2]];
            }
        } else {
            val = object[field[0]];
        }
        if (val) {
            for (let colIndex = 1; colIndex < field.length; colIndex++) {
                val = (val as Record<string, unknown>)[field[colIndex]];
                if (typeof val === 'undefined') {
                    break;
                }
            }
        }
    }
    return val;
};

export const setStickyStyle = (
    lockChildren: NormalizedColumnProps[],
    flatenChildren: NormalizedColumnProps[],
    dir: 'left' | 'right',
    offsetArr: number[] = [],
    prefix: string
) => {
    const len = flatenChildren.length;

    flatenChildren.forEach((col, index) => {
        const isLeftLast = dir === 'left' && index === len - 1;
        const isRightFirst = dir === 'right' && index === 0;
        const style: CSSProperties = {
            position: 'sticky',
        };
        const offset = offsetArr[index];

        if (offset > -1) {
            style[dir] = offset;
        }

        col.className = classnames(col.className, {
            [`${prefix}table-fix-${dir}`]: true,
            [`${prefix}table-fix-left-last`]: isLeftLast,
            [`${prefix}table-fix-right-first`]: isRightFirst,
        });
        col.style = { ...col.style, ...style };
        col.cellStyle = style;
    });

    const setOffset = (
        col: NormalizedColumnProps,
        index: number,
        dir: 'left' | 'right',
        isBorder: boolean
    ) => {
        const style: CSSProperties = {
            position: 'sticky',
        };
        const offset = offsetArr[index];

        if (offset > -1) {
            style[dir] = offset;
        }

        col.className = classnames(col.className, {
            [`${prefix}table-fix-${dir}`]: true,
            [`${prefix}table-fix-left-last`]: dir === 'left' && isBorder,
            [`${prefix}table-fix-right-first`]: dir === 'right' && isBorder,
        });
        col.style = { ...col.style, ...style };
        col.cellStyle = style;
    };

    // 查看当前元素的叶子结点数量
    const getLeafNodes = (node: NormalizedColumnProps | undefined) => {
        let nodesLen = 0;
        const arrLen = (Array.isArray(node && node.children) && node!.children!.length) || 0;
        if (arrLen > 0) {
            nodesLen = node!.children!.reduce((ret, item, idx) => {
                // @ts-expect-error 这里实现感觉有些问题，应该传入的是 item
                return ret + getLeafNodes(item.children);
            }, 0);
        } else {
            nodesLen = 1;
        }
        return nodesLen;
    };

    const getPreNodes = (arr: NormalizedColumnProps[], idx: number) => {
        return arr.reduce((ret, item, i) => {
            if (i < idx) {
                return ret + getLeafNodes(item);
            }
            return ret;
        }, 0);
    };

    // for multiple header
    // nodesLen 前序叶子结点数
    const loop = (arr: NormalizedColumnProps[], i: number) => {
        dir === 'right' && arr.reverse();
        arr.forEach((child, j) => {
            const p = dir === 'right' ? i - getPreNodes(arr, j) : i + getPreNodes(arr, j);
            if (child.children) {
                // 合并单元格的节点
                loop(child.children, p);
                // 查询当前元素下的 前序叶子结点数 比如为 n
                // const isBorder = (dir === 'right' && j === 0) || (dir === 'left' && j === (arr.length - 1));
                setOffset(child, p, dir, j === arr.length - 1);
            }
        });
        dir === 'right' && arr.reverse();
    };

    loop(lockChildren, dir === 'left' ? 0 : len - 1);
};
