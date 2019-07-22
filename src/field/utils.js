import { isValidElement, cloneElement } from 'react';
import ReactDOM from 'react-dom';

export const cloneAndAddKey = function(element) {
    if (element && isValidElement(element)) {
        return cloneElement(element, { key: 'error' });
    }
    return element;
};

export const scrollToFirstError = function({ errorsGroup, options, instance }) {
    if (errorsGroup && options.scrollToFirstError) {
        let firstNode;
        let firstTop;
        for (const i in errorsGroup) {
            if (errorsGroup.hasOwnProperty(i)) {
                const elementInstance = instance[i];
                const node = ReactDOM.findDOMNode(elementInstance);
                if (!node) {
                    return;
                }
                const top = node.offsetTop;
                if (firstTop === undefined || firstTop > top) {
                    firstTop = top;
                    firstNode = node;
                }
            }
        }

        if (firstNode) {
            if (
                typeof options.scrollToFirstError === 'number' &&
                window &&
                typeof window.scrollTo === 'function'
            ) {
                const offsetLeft =
                    document && document.body && document.body.offsetLeft
                        ? document.body.offsetLeft
                        : 0;
                window.scrollTo(
                    offsetLeft,
                    firstTop + options.scrollToFirstError
                );
            } else if (firstNode.scrollIntoViewIfNeeded) {
                firstNode.scrollIntoViewIfNeeded(true);
            }
        }
    }
};
