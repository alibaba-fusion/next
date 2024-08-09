import type { CascaderDataItem, CascaderDataItemWithPosInfo, NormalizeValueReturns, P2n, V2n } from './types';
/**
 * 将 values 正规化为数组形式
 * @param values - 要被正规化的值
 * @returns 正规化为数组形式的值
 */
export declare function normalizeToArray<T>(values: T): NormalizeValueReturns<T>;
/**
 * 判断子节点是否是选中状态，如果 checkable=false 则向下递归，
 * @param child - 子节点
 * @param checkedValues - 选中的值
 */
export declare function isNodeChecked(node: CascaderDataItem, checkedValues: string[]): boolean;
/**
 * 遍历所有可用的子节点
 * @param node - 子节点
 * @param callback - 遍历的回调
 */
export declare function forEachEnableNode(node: CascaderDataItem, callback?: (node: CascaderDataItem) => void): void;
/**
 * 判断节点是否禁用 checked
 * @param node - 节点
 */
export declare function isNodeDisabledChecked(node: CascaderDataItem): boolean;
/**
 * 递归获取一个 checkable=true 的父节点，当 checkable=false 时继续往上查找
 * @param node - 子节点
 * @param _p2n - 位置信息
 * @returns checkable=true 的父节点
 */
export declare function getCheckableParentNode(node: CascaderDataItemWithPosInfo, _p2n: P2n): false | CascaderDataItemWithPosInfo;
/**
 * 过滤子节点的值
 * @param values - 子节点的值
 * @param _v2n - 节点信息
 * @param _p2n - 位置信息
 */
export declare function filterChildValue(values: string[], _v2n: V2n, _p2n: P2n): string[];
export declare function filterParentValue(values: string[], _v2n: V2n): string[];
/**
 * 判断当前节点是否是目标节点的子孙节点
 * @param currentPos - 当前节点的位置
 * @param targetPos - 目标节点的位置
 */
export declare function isDescendantOrSelf(currentPos: string, targetPos: string): boolean;
/**
 * 判断当前节点是否是目标节点的兄弟节点
 * @param currentPos - 当前节点的位置
 * @param targetPos - 目标节点的位置
 */
export declare function isSiblingOrSelf(currentPos: string, targetPos: string): boolean;
/**
 * 获取所有选中的值
 * @param checkedValues - 候选值
 * @param _v2n - 节点信息
 * @param _p2n - 位置信息
 * @returns 所有选中的值
 */
export declare function getAllCheckedValues(checkedValues: string[], _v2n: V2n, _p2n: P2n): string[];
