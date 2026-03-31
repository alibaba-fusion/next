import React, { type ReactNode, type ReactElement } from 'react';
export declare const triggerEvents: {
    CLICK: string;
    HOVER: string;
};
export declare function getOffsetWH(node: HTMLElement, tabPosition?: string): number;
export declare function getOffsetLT(node: HTMLElement, tabPosition?: string): number;
export declare function isTransformSupported(style: CSSStyleDeclaration): boolean;
export declare function toArray(children: ReactNode): React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
/**
 * tab数组浅比较
 * @param arrA - 更新后的数组
 * @param arrB - 原数组
 * @returns 数组浅比较是否相等
 * @example
 * arr.tabsArrayShallowEqual(['2','3','4'], ['2','5','4']); // false
 */
export declare function tabsArrayShallowEqual(arrA: ReactElement[], arrB: ReactElement[]): boolean;
