import type { DataNode, FieldDataNode, Key, KeyEntities, NodeElement } from '../types';
import TreeNode from './tree-node';

// export function normalizeToArray(keys: undefined | null): [];
// export function normalizeToArray<T>(keys: T[]): T[];
// export function normalizeToArray<T>(keys: T): [T];
export function normalizeToArray<T>(keys: T | T[] | undefined | null): T[] | [T] | [] {
    if (keys !== undefined && keys !== null) {
        if (Array.isArray(keys)) {
            return [...keys];
        }

        return [keys];
    }

    return [];
}

export function isNodeChecked(node: DataNode, checkedKeys: Key[]): boolean {
    if (node.disabled || node.checkboxDisabled) return true;
    /* istanbul ignore next */
    if (node.checkable === false) {
        return (
            !node.children ||
            node.children.length === 0 ||
            node.children.every(c => isNodeChecked(c, checkedKeys))
        );
    }
    return checkedKeys.indexOf(node.key) > -1;
}

export function forEachEnableNode(node: DataNode, callback: (node: DataNode) => void = () => {}) {
    if (node.disabled || node.checkboxDisabled) return;
    // eslint-disable-next-line callback-return
    callback(node);
    if (node.children && node.children.length > 0) {
        node.children.forEach(child => forEachEnableNode(child, callback));
    }
}

export function isNodeDisabledChecked(node: DataNode): boolean {
    if (node.disabled || node.checkboxDisabled) return true;
    /* istanbul ignore next */
    if (node.checkable === false) {
        return (
            !node.children ||
            node.children.length === 0 ||
            node.children.every(isNodeDisabledChecked)
        );
    }

    return false;
}

export function getCheckableParentNode(node: DataNode, _p2n: KeyEntities) {
    let parentPos: string | string[] = node.pos!.split('-');
    if (parentPos.length === 2) return node;
    parentPos.splice(parentPos.length - 1, 1);
    parentPos = parentPos.join('-');
    const parentNode = _p2n[parentPos] as FieldDataNode<{
        key: Key;
        label?: React.ReactNode;
        pos: string;
    }>;
    if (parentNode.disabled || parentNode.checkboxDisabled) return false;
    /* istanbul ignore next */
    if (parentNode.checkable === false) {
        return getCheckableParentNode(parentNode, _p2n);
    }

    return parentNode;
}

export function filterChildKey(keys: Key[], _k2n: KeyEntities, _p2n: KeyEntities) {
    const newKeys: Key[] = [];
    keys.forEach(key => {
        const node = getCheckableParentNode(_k2n[key], _p2n);
        if (
            !node ||
            node.checkable === false ||
            node === _k2n[key] ||
            keys.indexOf(node.key) === -1
        ) {
            newKeys.push(key);
        }
    });
    return newKeys;
}

export function filterParentKey(keys: Key[], _k2n: KeyEntities, _p2n: unknown) {
    const newKeys = [];

    for (let i = 0; i < keys.length; i++) {
        const node = _k2n[keys[i]];
        if (
            !node.children ||
            node.children.length === 0 ||
            node.children.every(isNodeDisabledChecked)
        ) {
            newKeys.push(keys[i]);
        }
    }

    return newKeys;
}

export function isDescendantOrSelf(currentPos: string, targetPos: string) {
    if (!currentPos || !targetPos) {
        return false;
    }

    const currentNums = currentPos.split('-');
    const targetNums = targetPos.split('-');

    return (
        currentNums.length <= targetNums.length &&
        currentNums.every((num, index) => {
            return num === targetNums[index];
        })
    );
}

export function isSiblingOrSelf(currentPos: string, targetPos: string) {
    const currentNums = currentPos.split('-').slice(0, -1);
    const targetNums = targetPos.split('-').slice(0, -1);

    return (
        currentNums.length === targetNums.length &&
        currentNums.every((num, index) => {
            return num === targetNums[index];
        })
    );
}

// eslint-disable-next-line max-statements
export function getAllCheckedKeys(checkedKeys: Key[], _k2n: KeyEntities, _p2n: KeyEntities) {
    checkedKeys = normalizeToArray(checkedKeys);
    const filteredKeys = checkedKeys.filter(key => !!_k2n[key]);
    const flatKeys = [
        ...filterChildKey(filteredKeys, _k2n, _p2n).filter(
            key => !(_k2n[key].disabled || _k2n[key].checkboxDisabled)
        ),
        ...filteredKeys.filter(key => _k2n[key].disabled || _k2n[key].checkboxDisabled),
    ];
    const removeKey = (child: DataNode) => {
        if (child.disabled || child.checkboxDisabled) return;
        if (child.checkable === false && child.children && child.children.length > 0) {
            return child.children.forEach(removeKey);
        }
        flatKeys.splice(flatKeys.indexOf(child.key), 1);
    };

    const addParentKey = (i: number, parent: DataNode) => flatKeys.splice(i, 0, parent.key);

    // 所有 child nodes 选中时，取 parent node，删除所有 child nodes
    const keys = [...flatKeys];
    for (let i = 0; i < keys.length; i++) {
        const pos = _k2n[keys[i]].pos;
        const nums = pos!.split('-');
        if (nums.length === 2) {
            continue;
        }
        for (let j = nums.length - 2; j > 0; j--) {
            const parentPos = nums.slice(0, j + 1).join('-');
            const parent: DataNode = _p2n[parentPos];
            if (parent.checkable === false || parent.disabled || parent.checkboxDisabled) continue;
            const parentChecked = parent.children!.every(child => isNodeChecked(child, flatKeys));

            const isAllChildrenDisabled = parent.children!.every(child => {
                return child.disabled;
            });

            // don't auto select parent when all children are disabled,
            // fix https://github.com/alibaba-fusion/next/issues/3936

            if (parentChecked && !isAllChildrenDisabled) {
                parent.children!.forEach(removeKey);
                addParentKey(i, parent);
            } else {
                break;
            }
        }
    }

    // 重新选中所有 child nodes
    const newKeys = new Set<string>();
    flatKeys.forEach(key => {
        if (_k2n[key].disabled || _k2n[key].checkboxDisabled) {
            newKeys.add(key);
            return;
        }
        forEachEnableNode(_k2n[key], (node: DataNode) => {
            if (node.checkable === false) return;
            newKeys.add(node.key);
        });
    });

    return Array.from(newKeys);
}

export function convertChildren2Data(children: React.ReactNode): DataNode[] {
    function convert(nodes: React.ReactNode): DataNode[] {
        const treeNodes = normalizeToArray(nodes) as NodeElement[];

        return treeNodes
            .map(node => {
                // @ts-expect-error has target property?
                if (node.type && node.type !== TreeNode && node.type.target !== TreeNode) {
                    // 为了兼容之前的实现 保留非法节点
                    return {
                        illegalFlag: true,
                        node: node,
                    } as DataNode;
                }
                const { key } = node;
                const { children, ...rest } = node.props;

                // @ts-expect-error should give key a default value immediately
                const nodeData: DataNode = { key, ...rest };

                if (children && !(Array.isArray(children) && !children.length)) {
                    nodeData.children = convert(children);
                }

                return nodeData;
            })
            .filter(treeNodeData => treeNodeData);
    }
    return convert(children);
}

export function getAllDescendantKeys(nodeData: DataNode, p2n: KeyEntities) {
    const posList = nodeData.pos!.split('-');
    const keys = [];
    let pos = posList[0];

    for (let i = 1; i < posList.length - 1; i++) {
        pos = [pos, posList[i]].join('-');
        keys.push(p2n[pos].key);
    }

    return keys;
}
