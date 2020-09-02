import * as React from 'react';
import { obj } from '../../util';
import { EXPANDFOLDER_TIME_DELAY } from '../constant';

export function useEffects(props, model) {
    const { snapshot, treeRef, item } = props;
    const isGroupedOver = Boolean(snapshot.combineTargetFor);
    React.useLayoutEffect(() => {
        setRenderAttributes(props, model);
    }, [item.id, item.name, item.expanded, item._order]);
    React.useEffect(() => {
        if (isGroupedOver && model.isParent) {
            model.timer = setTimeout(() => {
                if (treeRef && treeRef.current) {
                    treeRef.current.expandFolder(model.id, true);
                }
            }, EXPANDFOLDER_TIME_DELAY);
        } else {
            clearTimeout(model.timer);
        }
    }, [isGroupedOver]);
}
export function setRenderAttributes(props, model) {
    const { item, treeRef } = props;
    if (item) {
        model.id = item.id;
        model.isParent = typeof item.expanded === 'boolean';
        model.name = item.name;
        model.order = item._order;
        model.expanded = item.expanded;
        if (treeRef && treeRef.current) {
            model.selected = treeRef.current.getSelectedNodeId() === item.id;
        }
    }
}
export function getOnClick(props, model, treeModel) {
    return event => {
        const { onItemClick, openFolderByDBClick, treeRef, item } = props;
        const { isParent, id } = model;
        treeModel.visible = false;
        if (treeRef && treeRef.current) {
            treeRef.current.setSelectedNodeId(id);
        }
        if (isParent && !openFolderByDBClick) {
            onSwitchFolder(props, model);
        }
        if (item.disabled) {
            return;
        }
        onItemClick && onItemClick(event, id, obj.clone(item));
    };
}
export function getOnDoubleClick(props, model) {
    return event => {
        const { openFolderByDBClick, onItemDbClick, item } = props;
        const { isParent, id } = model;
        if (isParent && openFolderByDBClick) {
            onSwitchFolder(props, model);
        }
        if (item.disabled) {
            return;
        }
        onItemDbClick && onItemDbClick(event, id, obj.clone(item));
    };
}
export function getOnMouseDown(props, model) {
    return event => {
        const { id } = model;
        const { onItemMouseDown, item } = props;
        onItemMouseDown && onItemMouseDown(event, id, obj.clone(item));
    };
}
export function getOnItemMouseUp(props, model) {
    return event => {
        const { id } = model;
        const { onItemMouseUp, item } = props;
        onItemMouseUp && onItemMouseUp(event, id, obj.clone(item));
    };
}
export function getOnMouseOver(props, model) {
    return event => {
        const { id } = model;
        const { onItemMouseOver, item } = props;
        onItemMouseOver && onItemMouseOver(event, id, obj.clone(item));
    };
}
export function getOnMouseOut(props, model) {
    return event => {
        const { id } = model;
        const { onItemMouseOut, item } = props;
        onItemMouseOut && onItemMouseOut(event, id, obj.clone(item));
    };
}
export function getOnMouseEnter(props, model) {
    return event => {
        const { id } = model;
        const { onItemMouseEnter, item } = props;
        onItemMouseEnter && onItemMouseEnter(event, id, obj.clone(item));
    };
}
export function getOnMouseLeave(props, model) {
    return event => {
        const { id } = model;
        const { onItemMouseLeave, item } = props;
        onItemMouseLeave && onItemMouseLeave(event, id, obj.clone(item));
    };
}
export function getOnContextMenu(props, model, treeModel) {
    return async event => {
        event.preventDefault();
        event.persist();
        const { onItemRightClick, useContextMenu, item } = props;
        if (item.disabled) {
            return;
        }
        const { id } = model;
        onItemRightClick && onItemRightClick(event, id, obj.clone(item));
        if (useContextMenu) {
            // The visible would be set as false first if the visible of menu is true.
            if (typeof treeModel.visible === 'boolean' && treeModel.visible) {
                treeModel.visible = false;
            }
            const {
                nativeEvent: { clientX, clientY },
                target,
            } = event;
            treeModel.data = item;
            treeModel.offset = [clientX, clientY];
            treeModel.target = target;
            treeModel.visible = true;
        }
    };
}
export async function onSwitchFolder(props, model) {
    const { beforeExpand, treeRef, item } = props;
    const { id } = model;
    const nextExpanded = !item.expanded;
    let result = beforeExpand(id, nextExpanded, item);
    if (obj.isPromise(result)) {
        result = await result;
    }
    if (typeof result === 'boolean' && result && treeRef && treeRef.current) {
        item.expanded = nextExpanded;
        model.expanded = nextExpanded;
        treeRef.current.expandFolder(item.id, nextExpanded);
    }
}
