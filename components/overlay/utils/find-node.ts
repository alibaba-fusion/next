import { findDOMNode } from 'react-dom';

export default function findNode(
    target?: Element | string | ((param: Element | undefined) => Element) | null,
    param?: Element
): Element | null | Text {
    if (!target) {
        return null;
    }

    if (typeof target === 'string') {
        return document.getElementById(target);
    }

    if (typeof target === 'function') {
        try {
            target = target(param);
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
