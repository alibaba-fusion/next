import { isValidElement, cloneElement, type ReactElement, type ReactInstance } from 'react';
import ReactDOM from 'react-dom';
import { type ScrollToFirstErrorOption } from './types';

export function cloneAndAddKey(element: ReactElement) {
    if (element && isValidElement(element)) {
        const key = element.key || 'error';
        return cloneElement(element, { key });
    }
    return element;
}

export function scrollToFirstError({ errorsGroup, options, instance }: ScrollToFirstErrorOption) {
    if (errorsGroup && options.scrollToFirstError) {
        let firstNode: HTMLElement | undefined;
        let firstTop: number | undefined;
        for (const i in errorsGroup) {
            if (errorsGroup.hasOwnProperty(i)) {
                const node = ReactDOM.findDOMNode(instance[i] as ReactInstance) as HTMLElement;
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
                window.scrollTo(offsetLeft, firstTop! + options.scrollToFirstError);
            } else if (
                'scrollIntoViewIfNeeded' in firstNode &&
                typeof firstNode.scrollIntoViewIfNeeded === 'function'
            ) {
                firstNode.scrollIntoViewIfNeeded(true);
            } else {
                firstNode.scrollIntoView({ block: 'center' });
            }
        }
    }
}
