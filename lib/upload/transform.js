'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// compatible with 0.x version
/* istanbul ignore next */
var transform = function transform(props, deprecated) {
    var listType = props.listType,
        defaultFileList = props.defaultFileList,
        fileList = props.fileList,
        others = (0, _objectWithoutProperties3.default)(props, ['listType', 'defaultFileList', 'fileList']);

    var newprops = others;

    if (listType === 'text-image') {
        deprecated('listType=text-image', 'listType=image', 'Upload');
        newprops.listType = 'image';
    } else if (listType === 'picture-card') {
        deprecated('listType=picture-card', 'listType=card', 'Upload');
        newprops.listType = 'card';
    } else {
        newprops.listType = listType;
    }

    if ('defaultFileList' in props) {
        deprecated('defaultFileList', 'defaultValue', 'Upload');
        newprops.defaultValue = defaultFileList;
    }

    if ('fileList' in props) {
        deprecated('fileList', 'value', 'Upload');
        newprops.value = fileList;
    }

    return newprops;
};

exports.default = transform;
module.exports = exports['default'];