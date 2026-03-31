"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChildSelected = exports.getFirstAvaliablelChildKey = exports.isAvailablePos = exports.isAncestor = exports.isSibling = exports.normalizeToArray = exports.getWidth = void 0;
var getWidth = function (elem) {
    var width = elem &&
        typeof elem.getBoundingClientRect === 'function' &&
        elem.getBoundingClientRect().width;
    if (width) {
        width = +width.toFixed(6);
    }
    return width || 0;
};
exports.getWidth = getWidth;
var normalizeToArray = function (items) {
    if (items) {
        if (Array.isArray(items)) {
            return items;
        }
        return [items];
    }
    return [];
};
exports.normalizeToArray = normalizeToArray;
var isSibling = function (currentPos, targetPos) {
    var currentNums = currentPos.split('-').slice(0, -1);
    var targetNums = targetPos.split('-').slice(0, -1);
    return (currentNums.length === targetNums.length &&
        currentNums.every(function (num, index) {
            return num === targetNums[index];
        }));
};
exports.isSibling = isSibling;
var isAncestor = function (currentPos, targetPos) {
    var currentNums = currentPos.split('-');
    var targetNums = targetPos.split('-');
    return (currentNums.length > targetNums.length &&
        targetNums.every(function (num, index) {
            return num === currentNums[index];
        }));
};
exports.isAncestor = isAncestor;
var isAvailablePos = function (refPos, targetPos, _p2n) {
    var _a = _p2n[targetPos], type = _a.type, disabled = _a.disabled;
    return (0, exports.isSibling)(refPos, targetPos) && ((type === 'item' && !disabled) || type === 'submenu');
};
exports.isAvailablePos = isAvailablePos;
var getFirstAvaliablelChildKey = function (parentPos, _p2n) {
    var pos = Object.keys(_p2n).find(function (p) { return (0, exports.isAvailablePos)("".concat(parentPos, "-0"), p, _p2n); });
    return pos ? _p2n[pos].key : null;
};
exports.getFirstAvaliablelChildKey = getFirstAvaliablelChildKey;
/**
 * 如果 key 在 SelectedKeys 的选中链上（例如 SelectedKeys 是 ['0-1-2'],  key 是 0-1），那么返回 true
 *
 * selectMode?: string; 当前的选择模式，一般为 multiple single
 * selectedKeys?: string[]; 选中的 key 值
 * k2n?: object[] mapping;
 * _key?: string; 待测试的 key 值
 *
 * @returns bool 当前元素是否有孩子被选中
 */
var getChildSelected = function (_a) {
    var selectMode = _a.selectMode, selectedKeys = _a.selectedKeys, _k2n = _a._k2n, _key = _a._key;
    if (!_k2n) {
        return false;
    }
    var _keyPos = "".concat(_k2n[_key] && _k2n[_key].pos, "-");
    return (!!selectMode && selectedKeys.some(function (key) { return _k2n[key] && _k2n[key].pos.indexOf(_keyPos) === 0; }));
};
exports.getChildSelected = getChildSelected;
