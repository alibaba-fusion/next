import type {
    CascaderDataItem,
    CascaderDataItemWithPosInfo,
    NormalizeValueReturns,
    P2n,
    V2n,
} from './types';

/**
 * 将 values 正规化为数组形式
 * @param values - 要被正规化的值
 * @returns 正规化为数组形式的值
 */
export function normalizeToArray<T>(values: T): NormalizeValueReturns<T> {
    if (values !== undefined && values !== null) {
        if (Array.isArray(values)) {
            return [...values] as NormalizeValueReturns<T>;
        }

        return [values] as NormalizeValueReturns<T>;
    }
    return [] as NormalizeValueReturns<T>;
}

/**
 * 判断子节点是否是选中状态，如果 checkable=false 则向下递归，
 * @param child - 子节点
 * @param checkedValues - 选中的值
 */
export function isNodeChecked(node: CascaderDataItem, checkedValues: string[]): boolean {
    if (node.disabled || node.checkboxDisabled) return true;
    if (node.checkable === false) {
        return (
            !node.children ||
            node.children.length === 0 ||
            node.children.every(c => isNodeChecked(c, checkedValues))
        );
    }
    return checkedValues.indexOf(node.value) > -1;
}

/**
 * 遍历所有可用的子节点
 * @param node - 子节点
 * @param callback - 遍历的回调
 */
export function forEachEnableNode(
    node: CascaderDataItem,
    callback: (node: CascaderDataItem) => void = () => {}
) {
    if (node.disabled || node.checkboxDisabled) return;
    callback(node);
    if (node.children && node.children.length > 0) {
        node.children.forEach(child => forEachEnableNode(child, callback));
    }
}
/**
 * 判断节点是否禁用 checked
 * @param node - 节点
 */
export function isNodeDisabledChecked(node: CascaderDataItem): boolean {
    if (node.disabled || node.checkboxDisabled) return true;
    if (node.checkable === false) {
        return (
            !node.children ||
            node.children.length === 0 ||
            node.children.every(isNodeDisabledChecked)
        );
    }

    return false;
}

/**
 * 递归获取一个 checkable=true 的父节点，当 checkable=false 时继续往上查找
 * @param node - 子节点
 * @param _p2n - 位置信息
 * @returns checkable=true 的父节点
 */
export function getCheckableParentNode(node: CascaderDataItemWithPosInfo, _p2n: P2n) {
    let parentPos: string | string[] = node.pos.split('-');
    if (parentPos.length === 2) return node;
    parentPos.splice(parentPos.length - 1, 1);
    parentPos = parentPos.join('-');
    const parentNode = _p2n[parentPos];
    if (parentNode.disabled || parentNode.checkboxDisabled) return false;
    if (parentNode.checkable === false) {
        return getCheckableParentNode(parentNode, _p2n);
    }

    return parentNode;
}
/**
 * 过滤子节点的值
 * @param values - 子节点的值
 * @param _v2n - 节点信息
 * @param _p2n - 位置信息
 */
export function filterChildValue(values: string[], _v2n: V2n, _p2n: P2n) {
    const newValues: string[] = [];
    values.forEach(value => {
        const node = getCheckableParentNode(_v2n[value], _p2n);
        if (
            !node ||
            node.checkable === false ||
            node === _v2n[value] ||
            values.indexOf(node.value) === -1
        ) {
            newValues.push(value);
        }
    });
    return newValues;
}

export function filterParentValue(values: string[], _v2n: V2n) {
    const newValues = [];

    for (let i = 0; i < values.length; i++) {
        const node = _v2n[values[i]];
        if (
            !node.children ||
            node.children.length === 0 ||
            node.children.every(isNodeDisabledChecked)
        ) {
            newValues.push(values[i]);
        }
    }

    return newValues;
}
/**
 * 判断当前节点是否是目标节点的子孙节点
 * @param currentPos - 当前节点的位置
 * @param targetPos - 目标节点的位置
 */
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

/**
 * 判断当前节点是否是目标节点的兄弟节点
 * @param currentPos - 当前节点的位置
 * @param targetPos - 目标节点的位置
 */
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

/**
 * 获取所有选中的值
 * @param checkedValues - 候选值
 * @param _v2n - 节点信息
 * @param _p2n - 位置信息
 * @returns 所有选中的值
 */
export function getAllCheckedValues(checkedValues: string[], _v2n: V2n, _p2n: P2n) {
    checkedValues = normalizeToArray(checkedValues);
    const filteredValues = checkedValues.filter(value => !!_v2n[value]);
    const flatValues = [
        ...filterChildValue(filteredValues, _v2n, _p2n),
        ...filteredValues.filter(value => _v2n[value].disabled || _v2n[value].checkboxDisabled),
    ];
    const removeValue = (child: V2n[keyof V2n]) => {
        if (child.disabled || child.checkboxDisabled) return;
        if (child.checkable === false && child.children && child.children.length > 0) {
            return child.children.forEach(removeValue);
        }
        flatValues.splice(flatValues.indexOf(child.value), 1);
    };

    const addParentValue = (i: number, parent: V2n[keyof V2n]) =>
        flatValues.splice(i, 0, parent.value);

    const values = [...flatValues];
    for (let i = 0; i < values.length; i++) {
        const pos = _v2n[values[i]].pos;
        const nums = pos.split('-');
        if (nums.length === 2) {
            break;
        }
        for (let j = nums.length - 2; j > 0; j--) {
            const parentPos = nums.slice(0, j + 1).join('-');
            const parent = _p2n[parentPos];
            if (parent.checkable === false || parent.disabled || parent.checkboxDisabled) continue;
            const parentChecked = parent.children!.every(child => isNodeChecked(child, flatValues));
            if (parentChecked) {
                parent.children!.forEach(removeValue);
                addParentValue(i, parent);
            } else {
                break;
            }
        }
    }

    const newValues: string[] = [];
    flatValues.forEach(value => {
        if (_v2n[value].disabled || _v2n[value].checkboxDisabled) {
            newValues.push(value);
            return;
        }
        forEachEnableNode(_v2n[value], node => {
            if (node.checkable === false) return;
            newValues.push(node.value);
        });
    });

    return newValues;
}
