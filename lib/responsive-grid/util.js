'use strict';

exports.__esModule = true;
exports.filterUndefinedValue = filterUndefinedValue;
exports.stripObject = stripObject;

var _util = require('../util');

var isPlainObject = _util.obj.isPlainObject;

/**
 * 过滤 undefined 类型的值
 * @param  {*}  obj
 * @return {Object}
 */

function filterUndefinedValue(object) {
    if (!isPlainObject(object)) {
        return object;
    }

    var obj = {};

    Object.keys(object).forEach(function (key) {
        var value = object[key];

        if (value !== undefined) {
            obj[key] = value;
        }
    });

    return obj;
}

/**
 * 从 obj 中去除 subObj
 * @param  {*}  obj
 * @param  {*}  subObj
 * @return {Object}
 */
function stripObject(obj, subObj) {
    var newObject = {};

    Object.keys(obj).forEach(function (key) {
        if (!(key in subObj)) {
            newObject[key] = obj[key];
        }
    });
    return newObject;
}