import { __assign } from "tslib";
import classnames from 'classnames';
var blackList = [
    'defaultProps',
    'propTypes',
    'contextTypes',
    'childContextTypes',
    'displayName',
    'getDerivedStateFromProps',
];
export var statics = function (Target, Component) {
    Object.keys(Component).forEach(function (property) {
        if (blackList.indexOf(property) === -1) {
            Target[property] = Component[property];
        }
    });
};
export var fetchDataByPath = function (object, path) {
    if (!object || !path) {
        return false;
    }
    path = path.toString();
    var field = path.split('.');
    var val, key;
    if (field.length) {
        key = field[0];
        // lists[1].name
        if (key.indexOf('[') >= 0) {
            key = key.match(/(.*)\[(.*)\]/);
            if (key && typeof key[1] === 'object' && typeof object[key[1]] === 'object') {
                val = object[key[1]][key[2]];
            }
        }
        else {
            val = object[field[0]];
        }
        if (val) {
            for (var colIndex = 1; colIndex < field.length; colIndex++) {
                val = val[field[colIndex]];
                if (typeof val === 'undefined') {
                    break;
                }
            }
        }
    }
    return val;
};
/**
 * @param {Array} lockChildren
 * @param {String} dir 'left', 'right'
 */
export var setStickyStyle = function (lockChildren, flatenChildren, dir, offsetArr, prefix) {
    if (offsetArr === void 0) { offsetArr = []; }
    var len = flatenChildren.length;
    flatenChildren.forEach(function (col, index) {
        var _a;
        var isLeftLast = dir === 'left' && index === len - 1;
        var isRightFirst = dir === 'right' && index === 0;
        var style = {
            position: 'sticky',
        };
        var offset = offsetArr[index];
        if (offset > -1) {
            style[dir] = offset;
        }
        col.className = classnames(col.className, (_a = {},
            _a["".concat(prefix, "table-fix-").concat(dir)] = true,
            _a["".concat(prefix, "table-fix-left-last")] = isLeftLast,
            _a["".concat(prefix, "table-fix-right-first")] = isRightFirst,
            _a));
        col.style = __assign(__assign({}, col.style), style);
        col.cellStyle = style;
    });
    var setOffset = function (col, index, dir, isBorder) {
        var _a;
        var style = {
            position: 'sticky',
        };
        var offset = offsetArr[index];
        if (offset > -1) {
            style[dir] = offset;
        }
        col.className = classnames(col.className, (_a = {},
            _a["".concat(prefix, "table-fix-").concat(dir)] = true,
            _a["".concat(prefix, "table-fix-left-last")] = dir === 'left' && isBorder,
            _a["".concat(prefix, "table-fix-right-first")] = dir === 'right' && isBorder,
            _a));
        col.style = __assign(__assign({}, col.style), style);
        col.cellStyle = style;
    };
    // 查看当前元素的叶子结点数量
    var getLeafNodes = function (node) {
        var nodesLen = 0;
        var arrLen = (Array.isArray(node && node.children) && node.children.length) || 0;
        if (arrLen > 0) {
            nodesLen = node.children.reduce(function (ret, item, idx) {
                return ret + getLeafNodes(item.children);
            }, 0);
        }
        else {
            nodesLen = 1;
        }
        return nodesLen;
    };
    var getPreNodes = function (arr, idx) {
        return arr.reduce(function (ret, item, i) {
            if (i < idx) {
                return ret + getLeafNodes(item);
            }
            return ret;
        }, 0);
    };
    // for multiple header
    // nodesLen 前序叶子结点数
    var loop = function (arr, i) {
        dir === 'right' && arr.reverse();
        arr.forEach(function (child, j) {
            var p = dir === 'right' ? i - getPreNodes(arr, j) : i + getPreNodes(arr, j);
            if (child.children) {
                // 合并单元格的节点
                loop(child.children, p);
                // 查询当前元素下的 前序叶子结点数 比如为n
                // const isBorder = (dir === 'right' && j === 0) || (dir === 'left' && j === (arr.length - 1));
                setOffset(child, p, dir, j === arr.length - 1);
            }
        });
        dir === 'right' && arr.reverse();
    };
    loop(lockChildren, dir === 'left' ? 0 : len - 1);
};
