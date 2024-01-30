import { findDOMNode } from 'react-dom';
import type { Target } from '../types';

export default function findNode<T>(target?: Target<T>, param?: T): Element | Text | null {
    let realTarget: typeof target | void = target;
    if (!realTarget) {
        return null;
    }

    if (typeof realTarget === 'string') {
        return document.getElementById(realTarget);
    }

    if (typeof realTarget === 'function') {
        try {
            realTarget = realTarget(param);
        } catch (err) {
            realTarget = null;
        }
    }

    if (!realTarget) {
        return null;
    }

    try {
        // @ts-expect-error realTarget需要判断是否是ReactInstance，还会存在Element Node Text的情况
        return findDOMNode(realTarget);
    } catch (err) {
        // @ts-expect-error 这个兜底逻辑十分破坏类型完备
        return realTarget;
    }
}
