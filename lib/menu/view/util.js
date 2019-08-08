'use strict';

exports.__esModule = true;
var getWidth = exports.getWidth = function getWidth(elem) {
    var width = elem && typeof elem.getBoundingClientRect === 'function' && elem.getBoundingClientRect().width;
    if (width) {
        width = +width.toFixed(6);
    }
    return width || 0;
};