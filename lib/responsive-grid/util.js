"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripObject = exports.filterUndefinedValue = void 0;
var util_1 = require("../util");
var isPlainObject = util_1.obj.isPlainObject;
/**
 * 过滤 undefined 类型的值
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
exports.filterUndefinedValue = filterUndefinedValue;
/**
 * 从 obj 中去除 subObj
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
exports.stripObject = stripObject;
