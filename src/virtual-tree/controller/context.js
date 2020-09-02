import * as React from 'react';
import * as helper from './helper';
import { obj } from '../../util';
import { ROOT, DELIMITER } from '../constant';

export function getOnDragEnd(props, model) {
    return async eventResult => {
        const { currentDroppableId, treeDroppableIds } = model;
        const { beforeDrop } = props;
        const { source, destination, combine } = eventResult;
        const droppableId = (destination && destination.droppableId) || (combine && combine.droppableId);
        const isTreeDroppableId = treeDroppableIds.has(droppableId);
        const payload = model[currentDroppableId];
        if (!combine && isTreeDroppableId && (!destination || source.index === destination.index)) {
            return false;
        }
        const sourceNode = payload.viewList.find(item => item.id === model.draggingId);
        if (!isTreeDroppableId) {
            return beforeDrop(eventResult, sourceNode);
        }
        model.draggingId = undefined;
        let targetNode;
        if (combine) {
            const { draggableId } = combine;
            const splits = draggableId.split(DELIMITER);
            if (splits.length < 2) {
                //eslint-disable-next-line
                console.error('The draggable id has wrong format.');
                return;
            }
            targetNode = payload.viewList[Number(splits[1])];
            if (obj.isNil(targetNode.expanded)) {
                return;
            }
        } else {
            targetNode = getTargetNodeFromParallel(model, source, destination);
        }
        const clonedSourceNode = obj.clone(sourceNode);
        const clonedTargetNode = obj.clone(targetNode);
        const result = await beforeDrop(eventResult, clonedSourceNode, clonedTargetNode);
        if (typeof result === 'boolean' && result && payload.treeRef.current) {
            payload.treeRef.current.moveNode(clonedSourceNode, clonedTargetNode);
        }
    };
}
export function getOnBeforeDragStart(props, model) {
    return initial => {
        const { beforeDragStart } = props;
        const {
            source: { index },
        } = initial;
        const { currentDroppableId } = model;
        const payload = model[currentDroppableId];
        const node = payload.viewList[index];
        payload.treeRef.current && payload.treeRef.current.setSelectedNodeId(undefined);
        model.draggingId = node.id;
        beforeDragStart(obj.clone(node));
    };
}
export function getOnBeforeCapture(props, model) {
    return React.useCallback(
        param => {
            const { beforeStartCapture } = props;
            const { currentDroppableId } = model;
            const payload = model[currentDroppableId];
            const splits = param.draggableId.split(DELIMITER);
            if (splits.length < 2) {
                //eslint-disable-next-line
                console.error('The draggable id has wrong format.');
                return;
            }
            const node = payload.viewList[Number(splits[1])];
            if (helper.isFolder(node) && payload.treeRef.current) {
                payload.treeRef.current.expandFolder(node.id, false);
            }
            beforeStartCapture(obj.clone(node), param);
        },
        [props.beforeStartCapture]
    );
}
export function getShouldStartCapture(props, model) {
    return React.useCallback(
        draggableId => {
            const { shouldStartCapture } = props;
            const splits = draggableId.split(DELIMITER);
            if (splits.length < 2) {
                //eslint-disable-next-line
                console.error('The draggable id has wrong format.');
                return;
            }
            const droppableId = splits[0];
            const index = Number(splits[1]);
            const payload = model[droppableId];
            const node = payload.viewList[index];
            const result = shouldStartCapture(obj.clone(node));
            model.currentDroppableId = droppableId;
            return result;
        },
        [props.shouldStartCapture]
    );
}
export function getTargetNodeFromParallel(model, source, destination) {
    const { currentDroppableId } = model;
    const payload = model[currentDroppableId];
    const targetNode = payload.viewList[destination.index];
    let nextTargetNode = null;
    const idx = destination.index >= source.index ? destination.index + 1 : destination.index - 1;
    if (idx >= 0 && idx <= payload.viewList.length - 1) {
        const nextNode = payload.viewList[idx];
        const targetIsFolder = nextNode.pId !== targetNode.pId && nextNode._order > targetNode._order;
        if (targetIsFolder) {
            nextTargetNode = payload.viewList.find(item => item.id === nextNode.pId);
        } else if (targetNode.pId) {
            nextTargetNode = payload.viewList.find(item => item.id === targetNode.pId);
        }
    } else if (targetNode.pId && targetNode.pId !== ROOT) {
        nextTargetNode = payload.viewList.find(item => item.id === targetNode.pId);
    }
    return nextTargetNode;
}
