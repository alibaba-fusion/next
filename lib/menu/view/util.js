'use strict';

exports.__esModule = true;
var getWidth = exports.getWidth = function getWidth(elem) {
    var width = elem && typeof elem.getBoundingClientRect === 'function' && elem.getBoundingClientRect().width;
    if (width) {
        width = +width.toFixed(6);
    }
    return width || 0;
};
/**
 * 如果 key 在 SelectedKeys 的选中链上（例如 SelectedKeys 是['0-1-2'],  key是 0-1 ），那么返回true
 *
 * selectMode?: string; 当前的选择模式，一般为 multiple single
 * selectedKeys?: string[]; 选中的key值
 * root?: any;
 * _key?: string; 待测试的key值
 *
 * @return bool 当前元素是否有孩子被选中
 */
var getChildSelected = exports.getChildSelected = function getChildSelected(_ref) {
    var selectMode = _ref.selectMode,
        selectedKeys = _ref.selectedKeys,
        root = _ref.root,
        _key = _ref._key;

    if (!(root && root.k2n)) {
        return false;
    }

    var _keyPos = root.k2n[_key].pos + '-';

    return !!selectMode && selectedKeys.some(function (key) {
        return root.k2n[key] && root.k2n[key].pos.indexOf(_keyPos) === 0;
    });
};