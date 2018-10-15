'use strict';

exports.__esModule = true;
exports.normalizeToArray = normalizeToArray;
exports.filterChildKey = filterChildKey;
exports.filterParentKey = filterParentKey;
exports.isDescendantOrSelf = isDescendantOrSelf;
exports.isSiblingOrSelf = isSiblingOrSelf;
exports.getAllCheckedKeys = getAllCheckedKeys;
function normalizeToArray(keys) {
    if (keys) {
        if (Array.isArray(keys)) {
            return [].concat(keys);
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
function filterChildKey(keys, _k2n) {
    var newKeys = [].concat(keys).sort(function (prev, next) {
        return getDepth(prev, _k2n) - getDepth(next, _k2n);
    });

    for (var i = 0; i < newKeys.length; i++) {
        for (var j = 0; j < newKeys.length; j++) {
            if (i !== j && isDescendantOrSelf(_k2n[newKeys[i]].pos, _k2n[newKeys[j]].pos)) {
                newKeys.splice(j, 1);
                j--;
            }
        }
    }

    return newKeys;
}

function filterParentKey(keys, _k2n) {
    var newKeys = [].concat(keys).sort(function (prev, next) {
        return getDepth(next, _k2n) - getDepth(prev, _k2n);
    });

    for (var i = 0; i < newKeys.length; i++) {
        for (var j = 0; j < newKeys.length; j++) {
            if (i !== j && isDescendantOrSelf(_k2n[newKeys[j]].pos, _k2n[newKeys[i]].pos)) {
                newKeys.splice(j, 1);
                j--;
            }
        }
    }

    return newKeys;
}

function isDescendantOrSelf(currentPos, targetPos) {
    if (!currentPos || !targetPos) {
        return false;
    }

    var currentNums = currentPos.split('-');
    var targetNums = targetPos.split('-');

    return currentNums.length <= targetNums.length && currentNums.every(function (num, index) {
        return num === targetNums[index];
    });
}

function isSiblingOrSelf(currentPos, targetPos) {
    var currentNums = currentPos.split('-').slice(0, -1);
    var targetNums = targetPos.split('-').slice(0, -1);

    return currentNums.length === targetNums.length && currentNums.every(function (num, index) {
        return num === targetNums[index];
    });
}

function getAllCheckedKeys(checkedKeys, _k2n, _p2n) {
    checkedKeys = normalizeToArray(checkedKeys);
    var filteredKeys = checkedKeys.filter(function (key) {
        return !!_k2n[key];
    });
    var flatKeys = filterChildKey(filteredKeys, _k2n);
    var childChecked = function childChecked(child) {
        return flatKeys.indexOf(child.key) > -1;
    };
    var removeKey = function removeKey(child) {
        return flatKeys.splice(flatKeys.indexOf(child.key), 1);
    };
    var addParentKey = function addParentKey(i, parent) {
        return flatKeys.splice(i, 0, parent.key);
    };
    var keys = [].concat(flatKeys);
    for (var i = 0; i < keys.length; i++) {
        var pos = _k2n[keys[i]].pos;
        var nums = pos.split('-');
        if (nums.length === 2) {
            break;
        }
        for (var j = nums.length - 2; j > 0; j--) {
            var parentPos = nums.slice(0, j + 1).join('-');
            var parent = _p2n[parentPos];
            var parentChecked = parent.children.every(childChecked);
            if (parentChecked) {
                parent.children.forEach(removeKey);
                addParentKey(i, parent);
            } else {
                break;
            }
        }
    }

    var newKeys = [];
    if (flatKeys.length) {
        flatKeys = flatKeys.reverse();
        var ps = Object.keys(_p2n);
        for (var _i = 0; _i < flatKeys.length; _i++) {
            var _pos = _k2n[flatKeys[_i]].pos;
            for (var _j = 0; _j < ps.length; _j++) {
                if (isDescendantOrSelf(_pos, ps[_j])) {
                    newKeys.push(_p2n[ps[_j]].key);
                    ps.splice(_j, 1);
                    _j--;
                }
            }
        }
    }

    return newKeys;
}

function getDepth(key, _k2n) {
    return _k2n[key].pos.split('-').length;
}