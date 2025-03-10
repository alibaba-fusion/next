import { isValidElement, cloneElement } from 'react';
import ReactDOM from 'react-dom';
export function cloneAndAddKey(element) {
    if (element && isValidElement(element)) {
        var key = element.key || 'error';
        return cloneElement(element, { key: key });
    }
    return element;
}
export function scrollToFirstError(_a) {
    var errorsGroup = _a.errorsGroup, options = _a.options, instance = _a.instance;
    if (errorsGroup && options.scrollToFirstError) {
        var firstNode = void 0;
        var firstTop = void 0;
        for (var i in errorsGroup) {
            if (errorsGroup.hasOwnProperty(i)) {
                var node = ReactDOM.findDOMNode(instance[i]);
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
