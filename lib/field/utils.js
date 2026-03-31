"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrollToFirstError = exports.cloneAndAddKey = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
var react_dom_1 = tslib_1.__importDefault(require("react-dom"));
function cloneAndAddKey(element) {
    if (element && (0, react_1.isValidElement)(element)) {
        var key = element.key || 'error';
        return (0, react_1.cloneElement)(element, { key: key });
    }
    return element;
}
exports.cloneAndAddKey = cloneAndAddKey;
function scrollToFirstError(_a) {
    var errorsGroup = _a.errorsGroup, options = _a.options, instance = _a.instance;
    if (errorsGroup && options.scrollToFirstError) {
        var firstNode = void 0;
        var firstTop = void 0;
        for (var i in errorsGroup) {
            if (errorsGroup.hasOwnProperty(i)) {
                var node = react_dom_1.default.findDOMNode(instance[i]);
                if (!node) {
                    return;
                }
                var top_1 = node.offsetTop;
                if (firstTop === undefined || firstTop > top_1) {
                    firstTop = top_1;
                    firstNode = node;
                }
            }
        }
        if (firstNode) {
            if (typeof options.scrollToFirstError === 'number' &&
                window &&
                typeof window.scrollTo === 'function') {
                var offsetLeft = document && document.body && document.body.offsetLeft
                    ? document.body.offsetLeft
                    : 0;
                window.scrollTo(offsetLeft, firstTop + options.scrollToFirstError);
            }
            else if ('scrollIntoViewIfNeeded' in firstNode &&
                typeof firstNode.scrollIntoViewIfNeeded === 'function') {
                firstNode.scrollIntoViewIfNeeded(true);
            }
            else {
                firstNode.scrollIntoView({ block: 'center' });
            }
        }
    }
}
exports.scrollToFirstError = scrollToFirstError;
