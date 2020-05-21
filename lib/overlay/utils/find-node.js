'use strict';

exports.__esModule = true;
exports.default = findNode;

var _reactDom = require('react-dom');

function findNode(target, param) {
    if (!target) {
        return null;
    }

    if (typeof target === 'string') {
        return document.getElementById(target);
    }

    if (typeof target === 'function') {
        try {
            target = target(param);
        } catch (err) {
            target = null;
        }
    }

    if (!target) {
        return null;
    }

    try {
        return (0, _reactDom.findDOMNode)(target);
    } catch (err) {
        return target;
    }
}
module.exports = exports['default'];