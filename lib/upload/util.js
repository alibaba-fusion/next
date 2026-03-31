"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorCode = exports.previewFile = exports.removeFileItem = exports.getFileItem = exports.fileToObject = exports.uid = void 0;
var now = +new Date();
function uid() {
    return (now++).toString(36);
}
exports.uid = uid;
function fileToObject(file) {
    if (!file.uid) {
        file.uid = uid();
    }
    return {
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate,
        name: file.filename || file.name,
        size: file.size,
        type: file.type,
        uid: file.uid,
        error: file.error,
        percent: 0,
        originFileObj: file,
    };
}
exports.fileToObject = fileToObject;
function getFileItem(file, fileList) {
    if (!file) {
        return null;
    }
    var matchKey = file.uid !== undefined ? 'uid' : 'name';
    return fileList.filter(function (item) { return item[matchKey] === file[matchKey]; })[0];
}
exports.getFileItem = getFileItem;
function removeFileItem(file, fileList) {
    var matchKey = file.uid !== undefined ? 'uid' : 'name';
    var removed = fileList.filter(function (item) { return item[matchKey] !== file[matchKey]; });
    if (removed.length === fileList.length) {
        return null;
    }
    return removed;
}
exports.removeFileItem = removeFileItem;
// https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
function previewFile(file, callback) {
    var reader = new FileReader();
    reader.onloadend = function () { return callback(reader.result); };
    reader.readAsDataURL(file);
}
exports.previewFile = previewFile;
exports.errorCode = {
    EXCEED_LIMIT: 'EXCEED_LIMIT',
    BEFOREUPLOAD_REJECT: 'BEFOREUPLOAD_REJECT',
    RESPONSE_FAIL: 'RESPONSE_FAIL',
};
