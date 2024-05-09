import { findDOMNode } from 'react-dom';
import { OverlayProps, PositionProps } from '../types';

export default function findNode(
    target?: Element | string | ((param: Element | undefined) => Element) | null,
    param?: Element | PositionProps | OverlayProps
): Element | null | Text {
    if (!target) {
        return null;
    }

    if (typeof target === 'string') {
        return document.getElementById(target);
    }

    if (typeof target === 'function') {
        try {
            target = target(param as Element);
        } catch (err) {
            target = null;
        }
    }

    if (!target) {
        return null;
    }

    try {
        return findDOMNode(target);
    } catch (err) {
        return target;
    }
}
