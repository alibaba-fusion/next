"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_dom_1 = require("react-dom");
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
        }
        catch (err) {
            target = null;
        }
    }
    if (!target) {
        return null;
    }
    try {
        return (0, react_dom_1.findDOMNode)(target);
    }
    catch (err) {
        return target;
    }
}
exports.default = findNode;
