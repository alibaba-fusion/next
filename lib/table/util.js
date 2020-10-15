'use strict';

exports.__esModule = true;
exports.setStickyStyle = exports.fetchDataByPath = exports.statics = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var blackList = ['defaultProps', 'propTypes', 'contextTypes', 'childContextTypes', 'displayName', 'getDerivedStateFromProps'];

var statics = exports.statics = function statics(Target, Component) {
    Object.keys(Component).forEach(function (property) {
        if (blackList.indexOf(property) === -1) {
            Target[property] = Component[property];
        }
    });
};

var fetchDataByPath = exports.fetchDataByPath = function fetchDataByPath(object, path) {
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
            if (key) {
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
var setStickyStyle = exports.setStickyStyle = function setStickyStyle(lockChildren, flatenChildren, dir) {
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

        col.className = (0, _classnames4.default)(col.className, (_classnames = {}, _classnames[prefix + 'table-fix-' + dir] = true, _classnames[prefix + 'table-fix-left-last'] = isLeftLast, _classnames[prefix + 'table-fix-right-first'] = isRightFirst, _classnames));
        col.style = (0, _extends3.default)({}, col.style, style);
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

        col.className = (0, _classnames4.default)(col.className, (_classnames2 = {}, _classnames2[prefix + 'table-fix-' + dir] = true, _classnames2[prefix + 'table-fix-left-last'] = dir === 'left', _classnames2[prefix + 'table-fix-right-first'] = dir === 'right', _classnames2));
        col.style = (0, _extends3.default)({}, col.style, style);
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