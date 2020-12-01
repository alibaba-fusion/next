import _extends from 'babel-runtime/helpers/extends';
import _typeof from 'babel-runtime/helpers/typeof';
import classnames from 'classnames';

var blackList = ['defaultProps', 'propTypes', 'contextTypes', 'childContextTypes', 'displayName', 'getDerivedStateFromProps'];

export var statics = function statics(Target, Component) {
    Object.keys(Component).forEach(function (property) {
        if (blackList.indexOf(property) === -1) {
            Target[property] = Component[property];
        }
    });
};

export var fetchDataByPath = function fetchDataByPath(object, path) {
    if (!object || !path) {
        return false;
    }
    path = path.toString();
    var field = path.split('.');
    var val = void 0,
        key = void 0;
    if (field.length) {
        key = field[0];
        // lists[1].name
        if (key.indexOf('[') >= 0) {
            key = key.match(/(.*)\[(.*)\]/);
            if (key && _typeof(key[1]) === 'object' && _typeof(object[key[1]]) === 'object') {
                val = object[key[1]][key[2]];
            }
        } else {
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
export var setStickyStyle = function setStickyStyle(lockChildren, flatenChildren, dir) {
    var offsetArr = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var prefix = arguments[4];

    var len = flatenChildren.length;

    flatenChildren.forEach(function (col, index) {
        var _classnames;

        var isLeftLast = dir === 'left' && index === len - 1;
        var isRightFirst = dir === 'right' && index === 0;
        var style = {
            position: 'sticky'
        };
        var offset = offsetArr[index];

        if (offset > -1) {
            style[dir] = offset;
        }

        col.className = classnames(col.className, (_classnames = {}, _classnames[prefix + 'table-fix-' + dir] = true, _classnames[prefix + 'table-fix-left-last'] = isLeftLast, _classnames[prefix + 'table-fix-right-first'] = isRightFirst, _classnames));
        col.style = _extends({}, col.style, style);
        col.cellStyle = style;
    });

    var setOffset = function setOffset(col, index, dir) {
        var _classnames2;

        var style = {
            position: 'sticky'
        };
        var offset = offsetArr[index];

        if (offset > -1) {
            style[dir] = offset;
        }

        col.className = classnames(col.className, (_classnames2 = {}, _classnames2[prefix + 'table-fix-' + dir] = true, _classnames2[prefix + 'table-fix-left-last'] = dir === 'left', _classnames2[prefix + 'table-fix-right-first'] = dir === 'right', _classnames2));
        col.style = _extends({}, col.style, style);
        col.cellStyle = style;
    };

    // for multiple header
    // const flatenlen = offsetArr.length;
    var loop = function loop(arr, i) {
        dir === 'right' && arr.reverse();
        arr.forEach(function (child, j) {
            var p = dir === 'right' ? i - j : i + j;
            if (child.children) {
                // 合并单元格的节点
                loop(child.children, p);
                setOffset(child, p, dir);
            }
        });
        dir === 'right' && arr.reverse();
    };

    loop(lockChildren, dir === 'left' ? 0 : len - 1);
};