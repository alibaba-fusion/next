export function getScroll(node: Window | Element, isVertical?: boolean) {
    if (typeof window === 'undefined') {
        return 0;
    }
    const windowProp = isVertical ? 'pageYOffset' : 'pageXOffset';
    const elementProp = isVertical ? 'scrollTop' : 'scrollLeft';
    return node === window ? node[windowProp] : (node as Element)[elementProp];
}

export function getRect(node: Window | Element) {
    return node !== window
        ? (node as Element).getBoundingClientRect()
        : { top: 0, left: 0, bottom: 0 };
}

export function getNodeHeight(node: Window | Element) {
    if (!node) {
        return 0;
    }
    if (node === window) {
        return window.innerHeight;
    }
    return (node as Element).clientHeight;
}
