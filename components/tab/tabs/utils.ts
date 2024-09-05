import React, { ReactNode, ReactElement } from 'react';

export const triggerEvents = {
    CLICK: 'click',
    HOVER: 'hover',
};

export function getOffsetWH(node: HTMLElement, tabPosition?: string) {
    // let prop = 'width';
    // if (tabPosition === 'left' || tabPosition === 'right') {
    //     prop = 'height';
    // }
    // return node ? node.getBoundingClientRect()[prop] : 0;
    if (!node) return 0;
    const rect = node.getBoundingClientRect();
    return tabPosition === 'left' || tabPosition === 'right' ? rect.height : rect.width;
}

export function getOffsetLT(node: HTMLElement, tabPosition?: string) {
    // let prop = 'left';
    // if (tabPosition === 'left' || tabPosition === 'right') {
    //     prop = 'top';
    // }
    // return node.getBoundingClientRect()[prop];
    if (!node) return 0;
    const rect = node.getBoundingClientRect();
    return tabPosition === 'left' || tabPosition === 'right' ? rect.top : rect.left;
}

export function isTransformSupported(style: CSSStyleDeclaration) {
    return 'transform' in style || 'webkitTransform' in style || 'MozTransform' in style;
}

export function toArray(children: ReactNode) {
    const ret: ReactElement[] = [];
    React.Children.forEach(children, (child, index) => {
        if (React.isValidElement(child)) {
            const props = {
                key: child.key || index,
                title: child.props.title || child.props.tab,
            };
            ret.push(React.cloneElement(child, props));
        }
    });
    return ret;
}

/**
 * tab数组浅比较
 * @param  {Array} arrA   更新后的数组
 * @param  {Array} arrB   原数组
 * @return {Boolean}      数组浅比较是否相等
 * @example
 * arr.tabsArrayShallowEqual(['2','3','4'], ['2','5','4']); // false
 */

export function tabsArrayShallowEqual(arrA: ReactElement[], arrB: ReactElement[]) {
    // 相同地址的返回true，不需要更新数据（更新数据的基础是props数据与当前获取的值不同）
    if (arrA === arrB) {
        return true;
    }

    // 判断：调用的值/是否为数组/数组的长度
    if (
        !arrA ||
        !arrB ||
        typeof arrA + typeof arrB !== 'objectobject' ||
        arrA.length !== arrB.length
    ) {
        return false;
    }

    // 判断tabs的key与title是否更改
    for (let i = 0; i < arrA.length; i++) {
        if (arrA[i].key !== arrB[i].key || arrA[i].props.title !== arrB[i].props.title) {
            return false;
        }
    }
    return true;
}
