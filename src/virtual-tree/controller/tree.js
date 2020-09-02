import React from 'react';
import ReactDOM from 'react-dom';

export function useEffects(props, treeModel, contextModel, droppableId, treeRef, listRef, dataHandler) {
    const { nextList, onListUpdated } = props;
    const { viewList } = treeModel;
    React.useLayoutEffect(() => {
        if (nextList.length > 0) {
            setViewList(props, treeModel, dataHandler);
            // Set scrollIndex as undefined to prevent scoroller return to top during loading.
            treeModel.scrollIndex = undefined;
        }
    }, [nextList, dataHandler]);
    React.useEffect(() => {
        window.requestIdleCallback(() => {
            onListUpdated(viewList, nextList);
            if (listRef && listRef.current) {
                listRef.current.forceUpdateGrid();
            }
        });
    }, [viewList]);
    React.useEffect(() => {
        treeModel.treeRef = treeRef;
    }, [treeRef]);
    React.useEffect(() => {
        contextModel[droppableId] = {
            treeRef,
            viewList: treeModel.viewList,
        };
        contextModel.treeDroppableIds.add(droppableId);
        return () => {
            contextModel[droppableId] = undefined;
            contextModel.treeDroppableIds.delete(droppableId);
        };
    }, [treeRef, treeModel.viewList]);
    React.useEffect(() => {
        const tree = document.querySelector('.cabala-virtualized-tree-list');
        let lock = false;
        const event = event => {
            if (lock) {
                return;
            }
            const target = event.target;
            if (target.clientHeight + target.scrollTop >= target.scrollHeight && target.style.overflowX === 'auto') {
                const hasXScroll = target.scrollWidth > target.clientWidth;
                target.style.overflowX = hasXScroll ? 'scroll' : 'hidden';
                lock = true;
                setTimeout(() => {
                    lock = false;
                }, 100);
            } else {
                target.style.overflowX = 'auto';
            }
        };
        if (tree) {
            tree.addEventListener('scroll', event);
        }
        return () => {
            tree.removeEventListener('scroll', event);
        };
    }, []);
}
export function setViewList(props, model, dataHandler) {
    const { nextList } = props;
    const viewList = dataHandler.loadNodes(nextList);
    model.viewList = viewList;
}
export function getRefFn(listRef, droppableProvided) {
    return ref => {
        if (ref) {
            // eslint-disable-next-line react/no-find-dom-node
            const whatHasMyLifeComeTo = ReactDOM.findDOMNode(ref);
            listRef.current = ref;
            if (whatHasMyLifeComeTo instanceof HTMLElement) {
                droppableProvided.innerRef(whatHasMyLifeComeTo);
            }
        }
    };
}
export function getHeight(props, viewList, parentHeight) {
    const { minHeight, maxHeight, height, rowHeight } = props;
    const hasMinHeight = typeof minHeight === 'number';
    const hasMaxHeight = typeof maxHeight === 'number';
    let nextHeight = parentHeight;
    if (height !== undefined) {
        nextHeight = height;
    } else if (hasMinHeight || hasMaxHeight) {
        const realHeight = viewList.length * rowHeight;
        const nextMinHeight = hasMinHeight ? minHeight : 0;
        const nextMaxHeight = hasMaxHeight ? maxHeight : parentHeight;
        if (realHeight < nextMinHeight) {
            nextHeight = nextMinHeight;
        } else if (realHeight > nextMaxHeight) {
            nextHeight = nextMaxHeight;
        } else {
            nextHeight = realHeight;
        }
    }
    return nextHeight;
}
