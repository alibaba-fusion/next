"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guid = void 0;
var timestamp = Date.now();
/**
 * 生成全局唯一的 id
 * @param prefix - 前缀字符串，默认为空串
 *
 * @example
 * guid(); // j7jv509c
 * guid('prefix-'); // prefix-j7jv509d
 */
function guid(prefix) {
    prefix = prefix || '';
    return prefix + (timestamp++).toString(36);
}
exports.guid = guid;
exports.default = guid;
