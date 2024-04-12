"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCheckedValues = exports.isSiblingOrSelf = exports.isDescendantOrSelf = exports.filterParentValue = exports.filterChildValue = exports.getCheckableParentNode = exports.isNodeDisabledChecked = exports.forEachEnableNode = exports.isNodeChecked = exports.normalizeToArray = void 0;
var tslib_1 = require("tslib");
/**
 * 将 values 正规化为数组形式
 * @param values - 要被正规化的值
 * @returns 正规化为数组形式的值
 */
function normalizeToArray(values) {
    if (values !== undefined && values !== null) {
        if (Array.isArray(values)) {
            return tslib_1.__spreadArray([], tslib_1.__read(values), false);
        }
        return [values];
    }
    return [];
}
exports.normalizeToArray = normalizeToArray;
/**
 * 判断子节点是否是选中状态，如果 checkable=false 则向下递归，
 * @param child - 子节点
 * @param checkedValues - 选中的值
 */
function isNodeChecked(node, checkedValues) {
    if (node.disabled || node.checkboxDisabled)
        return true;
    if (node.checkable === false) {
        return (!node.children ||
            node.children.length === 0 ||
            node.children.every(function (c) { return isNodeChecked(c, checkedValues); }));
    }
    return checkedValues.indexOf(node.value) > -1;
}
exports.isNodeChecked = isNodeChecked;
/**
 * 遍历所有可用的子节点
 * @param node - 子节点
 * @param callback - 遍历的回调
 */
function forEachEnableNode(node, callback) {
    if (callback === void 0) { callback = function () { }; }
    if (node.disabled || node.checkboxDisabled)
        return;
    callback(node);
    if (node.children && node.children.length > 0) {
        node.children.forEach(function (child) { return forEachEnableNode(child, callback); });
    }
}
exports.forEachEnableNode = forEachEnableNode;
/**
 * 判断节点是否禁用 checked
 * @param node - 节点
 */
function isNodeDisabledChecked(node) {
    if (node.disabled || node.checkboxDisabled)
        return true;
    if (node.checkable === false) {
        return (!node.children ||
            node.children.length === 0 ||
            node.children.every(isNodeDisabledChecked));
    }
    return false;
}
exports.isNodeDisabledChecked = isNodeDisabledChecked;
/**
 * 递归获取一个 checkable=true 的父节点，当 checkable=false 时继续往上查找
 * @param node - 子节点
 * @param _p2n - 位置信息
 * @returns checkable=true 的父节点
 */
function getCheckableParentNode(node, _p2n) {
    var parentPos = node.pos.split('-');
    if (parentPos.length === 2)
        return node;
    parentPos.splice(parentPos.length - 1, 1);
    parentPos = parentPos.join('-');
    var parentNode = _p2n[parentPos];
    if (parentNode.disabled || parentNode.checkboxDisabled)
        return false;
    if (parentNode.checkable === false) {
        return getCheckableParentNode(parentNode, _p2n);
    }
    return parentNode;
}
exports.getCheckableParentNode = getCheckableParentNode;
/**
 * 过滤子节点的值
 * @param values - 子节点的值
 * @param _v2n - 节点信息
 * @param _p2n - 位置信息
 */
function filterChildValue(values, _v2n, _p2n) {
    var newValues = [];
    values.forEach(function (value) {
        var node = getCheckableParentNode(_v2n[value], _p2n);
        if (!node ||
            node.checkable === false ||
            node === _v2n[value] ||
            values.indexOf(node.value) === -1) {
            newValues.push(value);
        }
    });
    return newValues;
}
exports.filterChildValue = filterChildValue;
function filterParentValue(values, _v2n) {
    var newValues = [];
    for (var i = 0; i < values.length; i++) {
        var node = _v2n[values[i]];
        if (!node.children ||
            node.children.length === 0 ||
            node.children.every(isNodeDisabledChecked)) {
            newValues.push(values[i]);
        }
    }
    return newValues;
}
exports.filterParentValue = filterParentValue;
/**
 * 判断当前节点是否是目标节点的子孙节点
 * @param currentPos - 当前节点的位置
 * @param targetPos - 目标节点的位置
 */
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
/**
 * 判断当前节点是否是目标节点的兄弟节点
 * @param currentPos - 当前节点的位置
 * @param targetPos - 目标节点的位置
 */
function isSiblingOrSelf(currentPos, targetPos) {
    var currentNums = currentPos.split('-').slice(0, -1);
    var targetNums = targetPos.split('-').slice(0, -1);
    return (currentNums.length === targetNums.length &&
        currentNums.every(function (num, index) {
            return num === targetNums[index];
        }));
}
exports.isSiblingOrSelf = isSiblingOrSelf;
/**
 * 获取所有选中的值
 * @param checkedValues - 候选值
 * @param _v2n - 节点信息
 * @param _p2n - 位置信息
 * @returns 所有选中的值
 */
function getAllCheckedValues(checkedValues, _v2n, _p2n) {
    checkedValues = normalizeToArray(checkedValues);
    var filteredValues = checkedValues.filter(function (value) { return !!_v2n[value]; });
    var flatValues = tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(filterChildValue(filteredValues, _v2n, _p2n)), false), tslib_1.__read(filteredValues.filter(function (value) { return _v2n[value].disabled || _v2n[value].checkboxDisabled; })), false);
    var removeValue = function (child) {
        if (child.disabled || child.checkboxDisabled)
            return;
        if (child.checkable === false && child.children && child.children.length > 0) {
            return child.children.forEach(removeValue);
        }
        flatValues.splice(flatValues.indexOf(child.value), 1);
    };
    var addParentValue = function (i, parent) {
        return flatValues.splice(i, 0, parent.value);
    };
    var values = tslib_1.__spreadArray([], tslib_1.__read(flatValues), false);
    for (var i = 0; i < values.length; i++) {
        var pos = _v2n[values[i]].pos;
        var nums = pos.split('-');
        if (nums.length === 2) {
            break;
        }
        for (var j = nums.length - 2; j > 0; j--) {
            var parentPos = nums.slice(0, j + 1).join('-');
            var parent_1 = _p2n[parentPos];
            if (parent_1.checkable === false || parent_1.disabled || parent_1.checkboxDisabled)
                continue;
            var parentChecked = parent_1.children.every(function (child) { return isNodeChecked(child, flatValues); });
            if (parentChecked) {
                parent_1.children.forEach(removeValue);
                addParentValue(i, parent_1);
            }
            else {
                break;
            }
        }
    }
    var newValues = [];
    flatValues.forEach(function (value) {
        if (_v2n[value].disabled || _v2n[value].checkboxDisabled) {
            newValues.push(value);
            return;
        }
        forEachEnableNode(_v2n[value], function (node) {
            if (node.checkable === false)
                return;
            newValues.push(node.value);
        });
    });
    return newValues;
}
exports.getAllCheckedValues = getAllCheckedValues;
