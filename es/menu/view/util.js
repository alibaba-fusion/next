export var getWidth = function getWidth(elem) {
    var width = elem && typeof elem.getBoundingClientRect === 'function' && elem.getBoundingClientRect().width;
    if (width) {
        width = +width.toFixed(6);
    }
    return width || 0;
};

export var normalizeToArray = function normalizeToArray(items) {
    if (items) {
        if (Array.isArray(items)) {
            return items;
        }
        return [items];
    }

    return [];
};

export var isSibling = function isSibling(currentPos, targetPos) {
    var currentNums = currentPos.split('-').slice(0, -1);
    var targetNums = targetPos.split('-').slice(0, -1);

    return currentNums.length === targetNums.length && currentNums.every(function (num, index) {
        return num === targetNums[index];
    });
};

export var isAncestor = function isAncestor(currentPos, targetPos) {
    var currentNums = currentPos.split('-');
    var targetNums = targetPos.split('-');

    return currentNums.length > targetNums.length && targetNums.every(function (num, index) {
        return num === currentNums[index];
    });
};

export var isAvailablePos = function isAvailablePos(refPos, targetPos, _p2n) {
    var _p2n$targetPos = _p2n[targetPos],
        type = _p2n$targetPos.type,
        disabled = _p2n$targetPos.disabled;


    return isSibling(refPos, targetPos) && (type === 'item' && !disabled || type === 'submenu');
};

export var getFirstAvaliablelChildKey = function getFirstAvaliablelChildKey(parentPos, _p2n) {
    var pos = Object.keys(_p2n).find(function (p) {
        return isAvailablePos(parentPos + '-0', p, _p2n);
    });
    return pos ? _p2n[pos].key : null;
};

/**
 * 如果 key 在 SelectedKeys 的选中链上（例如 SelectedKeys 是['0-1-2'],  key是 0-1 ），那么返回true
 *
 * selectMode?: string; 当前的选择模式，一般为 multiple single
 * selectedKeys?: string[]; 选中的key值
 * k2n?: object[] mapping;
 * _key?: string; 待测试的key值
 *
 * @return bool 当前元素是否有孩子被选中
 */
export var getChildSelected = function getChildSelected(_ref) {
    var selectMode = _ref.selectMode,
        selectedKeys = _ref.selectedKeys,
        _k2n = _ref._k2n,
        _key = _ref._key;

    if (!_k2n) {
        return false;
    }

    var _keyPos = _k2n[_key].pos + '-';

    return !!selectMode && selectedKeys.some(function (key) {
        return _k2n[key] && _k2n[key].pos.indexOf(_keyPos) === 0;
    });
};