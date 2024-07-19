"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllDescendantKeys = exports.convertChildren2Data = exports.getAllCheckedKeys = exports.isSiblingOrSelf = exports.isDescendantOrSelf = exports.filterParentKey = exports.filterChildKey = exports.getCheckableParentNode = exports.isNodeDisabledChecked = exports.forEachEnableNode = exports.isNodeChecked = exports.normalizeToArray = void 0;
var tslib_1 = require("tslib");
var tree_node_1 = tslib_1.__importDefault(require("./tree-node"));
// export function normalizeToArray(keys: undefined | null): [];
// export function normalizeToArray<T>(keys: T[]): T[];
// export function normalizeToArray<T>(keys: T): [T];
function normalizeToArray(keys) {
    if (keys !== undefined && keys !== null) {
        if (Array.isArray(keys)) {
            return tslib_1.__spreadArray([], tslib_1.__read(keys), false);
        }
        return [keys];
    }
    return [];
}
exports.normalizeToArray = normalizeToArray;
function isNodeChecked(node, checkedKeys) {
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
exports.isNodeChecked = isNodeChecked;
function forEachEnableNode(node, callback) {
    if (callback === void 0) { callback = function () { }; }
    if (node.disabled || node.checkboxDisabled)
        return;
    // eslint-disable-next-line callback-return
    callback(node);
    if (node.children && node.children.length > 0) {
        node.children.forEach(function (child) { return forEachEnableNode(child, callback); });
    }
}
exports.forEachEnableNode = forEachEnableNode;
function isNodeDisabledChecked(node) {
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
exports.isNodeDisabledChecked = isNodeDisabledChecked;
function getCheckableParentNode(node, _p2n) {
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
exports.getCheckableParentNode = getCheckableParentNode;
function filterChildKey(keys, _k2n, _p2n) {
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
exports.filterChildKey = filterChildKey;
function filterParentKey(keys, _k2n, _p2n) {
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
exports.filterParentKey = filterParentKey;
function isDescendantOrSelf(currentPos, targetPos) {
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
exports.isDescendantOrSelf = isDescendantOrSelf;
function isSiblingOrSelf(currentPos, targetPos) {
    var currentNums = currentPos.split('-').slice(0, -1);
    var targetNums = targetPos.split('-').slice(0, -1);
    return (currentNums.length === targetNums.length &&
        currentNums.every(function (num, index) {
            return num === targetNums[index];
        }));
}
exports.isSiblingOrSelf = isSiblingOrSelf;
// eslint-disable-next-line max-statements
function getAllCheckedKeys(checkedKeys, _k2n, _p2n) {
    checkedKeys = normalizeToArray(checkedKeys);
    var filteredKeys = checkedKeys.filter(function (key) { return !!_k2n[key]; });
    var flatKeys = tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(filterChildKey(filteredKeys, _k2n, _p2n).filter(function (key) { return !(_k2n[key].disabled || _k2n[key].checkboxDisabled); })), false), tslib_1.__read(filteredKeys.filter(function (key) { return _k2n[key].disabled || _k2n[key].checkboxDisabled; })), false);
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
    var keys = tslib_1.__spreadArray([], tslib_1.__read(flatKeys), false);
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
exports.getAllCheckedKeys = getAllCheckedKeys;
function convertChildren2Data(children) {
    function convert(nodes) {
        var treeNodes = normalizeToArray(nodes);
        return treeNodes
            .map(function (node) {
            // @ts-expect-error has target property?
            if (node.type && node.type !== tree_node_1.default && node.type.target !== tree_node_1.default) {
                // 为了兼容之前的实现 保留非法节点
                return {
                    illegalFlag: true,
                    node: node,
                };
            }
            var key = node.key;
            var _a = node.props, children = _a.children, rest = tslib_1.__rest(_a, ["children"]);
            // @ts-expect-error should give key a default value immediately
            var nodeData = tslib_1.__assign({ key: key }, rest);
            if (children && !(Array.isArray(children) && !children.length)) {
                nodeData.children = convert(children);
            }
            return nodeData;
        })
            .filter(function (treeNodeData) { return treeNodeData; });
    }
    return convert(children);
}
exports.convertChildren2Data = convertChildren2Data;
function getAllDescendantKeys(nodeData, p2n) {
    var posList = nodeData.pos.split('-');
    var keys = [];
    var pos = posList[0];
    for (var i = 1; i < posList.length - 1; i++) {
        pos = [pos, posList[i]].join('-');
        keys.push(p2n[pos].key);
    }
    return keys;
}
exports.getAllDescendantKeys = getAllDescendantKeys;
