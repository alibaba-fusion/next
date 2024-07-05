/// <reference types="react" />
import type { DataNode, FieldDataNode, Key, KeyEntities } from '../types';
export declare function normalizeToArray<T>(keys: T | T[] | undefined | null): T[] | [T] | [];
export declare function isNodeChecked(node: DataNode, checkedKeys: Key[]): boolean;
export declare function forEachEnableNode(node: DataNode, callback?: (node: DataNode) => void): void;
export declare function isNodeDisabledChecked(node: DataNode): boolean;
export declare function getCheckableParentNode(node: DataNode, _p2n: KeyEntities): false | DataNode | FieldDataNode<{
    key: Key;
    label?: React.ReactNode;
    pos: string;
}>;
export declare function filterChildKey(keys: Key[], _k2n: KeyEntities, _p2n: KeyEntities): string[];
export declare function filterParentKey(keys: Key[], _k2n: KeyEntities, _p2n: unknown): string[];
export declare function isDescendantOrSelf(currentPos: string, targetPos: string): boolean;
export declare function isSiblingOrSelf(currentPos: string, targetPos: string): boolean;
export declare function getAllCheckedKeys(checkedKeys: Key[], _k2n: KeyEntities, _p2n: KeyEntities): string[];
export declare function convertChildren2Data(children: React.ReactNode): DataNode[];
export declare function getAllDescendantKeys(nodeData: DataNode, p2n: KeyEntities): string[];
