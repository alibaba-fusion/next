import * as React from 'react';
import { obj } from '../../util';

export function useEffects(props, model, contextMenuModel, ref) {
    const { visible, offset } = model;
    React.useEffect(() => {
        if (typeof visible === 'boolean' && visible) {
            setMenuList(props, model, contextMenuModel);
        }
    }, [visible, offset]);
    React.useEffect(() => {
        if (contextMenuModel.list.length > 0) {
            adjustPosition(model, ref);
        }
    }, [contextMenuModel.list]);
}
export function adjustPosition(model, ref) {
    if (ref.current && ref.current.getContentNode()) {
        const {
            offset: [offsetX, offsetY],
        } = model;
        const target = ref.current.getContentNode();
        const menuHeight = target.clientHeight;
        const menuWidth = target.clientWidth;
        const nextX = offsetX + menuWidth;
        const nextY = offsetY + menuHeight;
        const screenHeight = document.body.clientHeight;
        const screenWidth = document.body.clientWidth;
        if (nextX > screenWidth && nextY > screenHeight) {
            model.offset = [offsetX - menuWidth, offsetY - menuHeight];
        } else if (nextX > screenWidth && nextY < screenHeight) {
            model.offset = [offsetX - menuWidth, offsetY];
        } else if (nextX < screenWidth && nextY > screenHeight) {
            model.offset = [offsetX, offsetY - menuHeight];
        }
    }
}
export async function setMenuList(props, model, contextMenuModel) {
    const { getContextMenuList } = props;
    const { data } = model;
    let list = getContextMenuList(data);
    list = obj.isPromise(list) ? await list : list;
    contextMenuModel.list = list;
}
export function getOnClose(model) {
    return () => {
        model.visible = false;
    };
}
export function getOnContextMenuItemClick(props, model) {
    return (key, item, event) => {
        const { onContextMenuItemClick } = props;
        model.visible = false;
        onContextMenuItemClick(key, item, event, obj.clone(model.data));
    };
}
