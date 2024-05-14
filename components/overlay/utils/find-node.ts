import { findDOMNode } from 'react-dom';
import type { ReactElement, ReactNode } from 'react';
import type { OverlayProps, PositionProps } from '../types';

export default function findNode(
    target?:
        | ReactElement
        | ReactNode
        | Element
        | string
        | ((param: Element | undefined) => Element)
        | null,
    param?: Element | PositionProps | OverlayProps
): ReactNode | ReactElement | Element | null | Text | HTMLElement {
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
        return findDOMNode(target as Element);
    } catch (err) {
        return target;
    }
}
