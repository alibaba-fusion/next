import { __assign, __read, __rest, __spreadArray } from "tslib";
import TreeNode from './tree-node';
// export function normalizeToArray(keys: undefined | null): [];
// export function normalizeToArray<T>(keys: T[]): T[];
// export function normalizeToArray<T>(keys: T): [T];
export function normalizeToArray(keys) {
    if (keys !== undefined && keys !== null) {
        if (Array.isArray(keys)) {
            return __spreadArray([], __read(keys), false);
        }
        return [keys];
    }
    return [];
}
export function isNodeChecked(node, checkedKeys) {
    if (node.disabled || node.checkboxDisabled)
        return true;
    /* istanbul ignore next */
    if (node.checkable === false) {
        return (!node.children ||
            node.children.length === 0 ||
            node.children.every(function (c) { return isNodeChecked(c, checkedKeys); }));
    }
    return checkedKeys.indexOf(node.key) > -1;
}
export function forEachEnableNode(node, callback) {
    if (callback === void 0) { callback = function () { }; }
    if (node.disabled || node.checkboxDisabled)
        return;
    // eslint-disable-next-line callback-return
    callback(node);
    if (node.children && node.children.length > 0) {
        node.children.forEach(function (child) { return forEachEnableNode(child, callback); });
    }
}
export function isNodeDisabledChecked(node) {
    if (node.disabled || node.checkboxDisabled)
        return true;
    /* istanbul ignore next */
    if (node.checkable === false) {
        return (!node.children ||
            node.children.length === 0 ||
            node.children.every(isNodeDisabledChecked));
    }
    return false;
}
export function getCheckableParentNode(node, _p2n) {
    var parentPos = node.pos.split('-');
    if (parentPos.length === 2)
        return node;
    parentPos.splice(parentPos.length - 1, 1);
    parentPos = parentPos.join('-');
    var parentNode = _p2n[parentPos];
    if (parentNode.disabled || parentNode.checkboxDisabled)
        return false;
    /* istanbul ignore next */
    if (parentNode.checkable === false) {
        return getCheckableParentNode(parentNode, _p2n);
    }
    return parentNode;
}
export function filterChildKey(keys, _k2n, _p2n) {
    var newKeys = [];
    keys.forEach(function (key) {
        var node = getCheckableParentNode(_k2n[key], _p2n);
        if (!node ||
            node.checkable === false ||
            node === _k2n[key] ||
            keys.indexOf(node.key) === -1) {
            newKeys.push(key);
        }
    });
    return newKeys;
}
export function filterParentKey(keys, _k2n, _p2n) {
    var newKeys = [];
    for (var i = 0; i < keys.length; i++) {
        var node = _k2n[keys[i]];
        if (!node.children ||
            node.children.length === 0 ||
            node.children.every(isNodeDisabledChecked)) {
            newKeys.push(keys[i]);
        }
    }
    return newKeys;
}
export function isDescendantOrSelf(currentPos, targetPos) {
    if (!currentPos || !targetPos) {
        return false;
    }
    var currentNums = currentPos.split('-');
    var targetNums = targetPos.split('-');
    return (currentNums.length <= targetNums.length &&
        currentNums.every(function (num, index) {
            return num === targetNums[index];
        }));
}
export function isSiblingOrSelf(currentPos, targetPos) {
    var currentNums = currentPos.split('-').slice(0, -1);
    var targetNums = targetPos.split('-').slice(0, -1);
    return (currentNums.length === targetNums.length &&
        currentNums.every(function (num, index) {
            return num === targetNums[index];
        }));
}
// eslint-disable-next-line max-statements
export function getAllCheckedKeys(checkedKeys, _k2n, _p2n) {
    checkedKeys = normalizeToArray(checkedKeys);
    var filteredKeys = checkedKeys.filter(function (key) { return !!_k2n[key]; });
    var flatKeys = __spreadArray(__spreadArray([], __read(filterChildKey(filteredKeys, _k2n, _p2n).filter(function (key) { return !(_k2n[key].disabled || _k2n[key].checkboxDisabled); })), false), __read(filteredKeys.filter(function (key) { return _k2n[key].disabled || _k2n[key].checkboxDisabled; })), false);
    var removeKey = function (child) {
        if (child.disabled || child.checkboxDisabled)
            return;
        if (child.checkable === false && child.children && child.children.length > 0) {
            return child.children.forEach(removeKey);
        }
        flatKeys.splice(flatKeys.indexOf(child.key), 1);
    };
    var addParentKey = function (i, parent) { return flatKeys.splice(i, 0, parent.key); };
    // 所有 child nodes 选中时，取 parent node，删除所有 child nodes
    var keys = __spreadArray([], __read(flatKeys), false);
    for (var i = 0; i < keys.length; i++) {
        var pos = _k2n[keys[i]].pos;
        var nums = pos.split('-');
        if (nums.length === 2) {
            continue;
        }
        for (var j = nums.length - 2; j > 0; j--) {
            var parentPos = nums.slice(0, j + 1).join('-');
            var parent_1 = _p2n[parentPos];
            if (parent_1.checkable === false || parent_1.disabled || parent_1.checkboxDisabled)
                continue;
            var parentChecked = parent_1.children.every(function (child) { return isNodeChecked(child, flatKeys); });
            var isAllChildrenDisabled = parent_1.children.every(function (child) {
                return child.disabled;
            });
            // don't auto select parent when all children are disabled,
            // fix https://github.com/alibaba-fusion/next/issues/3936
            if (parentChecked && !isAllChildrenDisabled) {
                parent_1.children.forEach(removeKey);
                addParentKey(i, parent_1);
            }
            else {
                break;
            }
        }
    }
    // 重新选中所有 child nodes
    var newKeys = new Set();
    flatKeys.forEach(function (key) {
        if (_k2n[key].disabled || _k2n[key].checkboxDisabled) {
            newKeys.add(key);
            return;
        }
        forEachEnableNode(_k2n[key], function (node) {
            if (node.checkable === false)
                return;
            newKeys.add(node.key);
        });
    });
    return Array.from(newKeys);
}
export function convertChildren2Data(children) {
    function convert(nodes) {
        var treeNodes = normalizeToArray(nodes);
        return treeNodes
            .map(function (node) {
            // @ts-expect-error has target property?
            if (node.type && node.type !== TreeNode && node.type.target !== TreeNode) {
                // 为了兼容之前的实现 保留非法节点
                return {
                    illegalFlag: true,
                    node: node,
                };
            }
            var key = node.key;
            var _a = node.props, children = _a.children, rest = __rest(_a, ["children"]);
            // @ts-expect-error should give key a default value immediately
            var nodeData = __assign({ key: key }, rest);
            if (children && !(Array.isArray(children) && !children.length)) {
                nodeData.children = convert(children);
            }
            return nodeData;
        })
            .filter(function (treeNodeData) { return treeNodeData; });
    }
    return convert(children);
}
export function getAllDescendantKeys(nodeData, p2n) {
    var posList = nodeData.pos.split('-');
    var keys = [];
    var pos = posList[0];
    for (var i = 1; i < posList.length - 1; i++) {
        pos = [pos, posList[i]].join('-');
        keys.push(p2n[pos].key);
    }
    return keys;
}
