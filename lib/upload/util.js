'use strict';

exports.__esModule = true;
exports.uid = uid;
exports.fileToObject = fileToObject;
exports.getFileItem = getFileItem;
exports.removeFileItem = removeFileItem;
exports.previewFile = previewFile;
var now = +new Date();

/**
 * 生成唯一的id
 * @return {String} uid
 */
function uid() {
    return (now++).toString(36);
}

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
        originFileObj: file
    };
}

function getFileItem(file, fileList) {
    var matchKey = file.uid !== undefined ? 'uid' : 'name';
    return fileList.filter(function (item) {
        return item[matchKey] === file[matchKey];
    })[0];
}

function removeFileItem(file, fileList) {
    var matchKey = file.uid !== undefined ? 'uid' : 'name';
    var removed = fileList.filter(function (item) {
        return item[matchKey] !== file[matchKey];
    });
    if (removed.length === fileList.length) {
        return null;
    }
    return removed;
}

// https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
function previewFile(file, callback) {
    var reader = new FileReader();
    reader.onloadend = function () {
        return callback(reader.result);
    };
    reader.readAsDataURL(file);
}

var errorCode = exports.errorCode = {
    EXCEED_LIMIT: 'EXCEED_LIMIT',
    BEFOREUPLOAD_REJECT: 'BEFOREUPLOAD_REJECT',
    RESPONSE_FAIL: 'RESPONSE_FAIL'
};