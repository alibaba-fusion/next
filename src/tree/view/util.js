/* eslint-disable valid-jsdoc */
export function normalizeToArray(keys) {
    if (keys !== undefined && keys !== null) {
        if (Array.isArray(keys)) {
            return [...keys];
        }

        return [keys];
    }

    return [];
}
/**
 * 过滤子节点
 * @param {Array} keys
 * @param {Object} _k2n
 */
export function filterChildKey(keys, _k2n) {
    const newKeys = [...keys]
        .filter(key => !!_k2n[key])
        .sort((prev, next) => {
            return getDepth(prev, _k2n) - getDepth(next, _k2n);
        });

    for (let i = 0; i < newKeys.length; i++) {
        for (let j = 0; j < newKeys.length; j++) {
            if (
                i !== j &&
                isDescendantOrSelf(_k2n[newKeys[i]].pos, _k2n[newKeys[j]].pos)
            ) {
                newKeys.splice(j, 1);
                j--;
            }
        }
    }

    return newKeys;
}

export function filterParentKey(keys, _k2n) {
    const newKeys = [...keys]
        .filter(key => !!_k2n[key])
        .sort((prev, next) => {
            return getDepth(next, _k2n) - getDepth(prev, _k2n);
        });

    for (let i = 0; i < newKeys.length; i++) {
        for (let j = 0; j < newKeys.length; j++) {
            if (
                i !== j &&
                isDescendantOrSelf(_k2n[newKeys[j]].pos, _k2n[newKeys[i]].pos)
            ) {
                newKeys.splice(j, 1);
                j--;
            }
        }
    }

    return newKeys;
}

export function isDescendantOrSelf(currentPos, targetPos) {
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

export function isSiblingOrSelf(currentPos, targetPos) {
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
export function getAllCheckedKeys(checkedKeys, _k2n, _p2n) {
    checkedKeys = normalizeToArray(checkedKeys);
    const filteredKeys = checkedKeys.filter(key => !!_k2n[key]);
    let flatKeys = filterChildKey(filteredKeys, _k2n);
    const childChecked = child => flatKeys.indexOf(child.key) > -1;
    const removeKey = child => flatKeys.splice(flatKeys.indexOf(child.key), 1);
    const addParentKey = (i, parent) => flatKeys.splice(i, 0, parent.key);
    const keys = [...flatKeys];
    for (let i = 0; i < keys.length; i++) {
        const pos = _k2n[keys[i]].pos;
        const nums = pos.split('-');
        if (nums.length === 2) {
            break;
        }
        for (let j = nums.length - 2; j > 0; j--) {
            const parentPos = nums.slice(0, j + 1).join('-');
            const parent = _p2n[parentPos];
            const parentChecked = parent.children.every(childChecked);
            if (parentChecked) {
                parent.children.forEach(removeKey);
                addParentKey(i, parent);
            } else {
                break;
            }
        }
    }

    const newKeys = [];
    if (flatKeys.length) {
        flatKeys = flatKeys.reverse();
        const ps = Object.keys(_p2n);
        for (let i = 0; i < flatKeys.length; i++) {
            const pos = _k2n[flatKeys[i]].pos;
            for (let j = 0; j < ps.length; j++) {
                if (isDescendantOrSelf(pos, ps[j])) {
                    newKeys.push(_p2n[ps[j]].key);
                    ps.splice(j, 1);
                    j--;
                }
            }
        }
    }

    return newKeys;
}

function getDepth(key, _k2n) {
    return _k2n[key].pos.split('-').length;
}
