import { FieldOption } from '@alifd/field';
import { isValidElement, cloneElement, ReactElement, ReactInstance } from 'react';
import ReactDOM from 'react-dom';

type scrollToFirstErrorOption = {
    errorsGroup: { [index: string]: object };
    options: FieldOption;
    instance: { [index: string]: ReactInstance | null | undefined };
};

export function cloneAndAddKey(element: ReactElement) {
    if (element && isValidElement(element)) {
        const key = element.key || 'error';
        return cloneElement(element, { key });
    }
    return element;
}

export function scrollToFirstError({ errorsGroup, options, instance }: scrollToFirstErrorOption) {
    if (errorsGroup && options.scrollToFirstError) {
        let firstNode;
        let firstTop: number = -Infinity;
        for (const i in errorsGroup) {
            if (errorsGroup.hasOwnProperty(i)) {
                const node = ReactDOM.findDOMNode(instance[i]) as HTMLElement;
                if (!node) {
                    return;
                }
                const top = node.offsetTop;
                if (firstTop > top) {
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
                window.scrollTo(offsetLeft, firstTop + options.scrollToFirstError);
            } else if (
                (firstNode as unknown as { scrollIntoViewIfNeeded: (flag: boolean) => void })
                    .scrollIntoViewIfNeeded
            ) {
                (
                    firstNode as unknown as { scrollIntoViewIfNeeded: (flag: boolean) => void }
                ).scrollIntoViewIfNeeded(true);
            }
        }
    }
}
