import * as React from 'react';
import { ITEM_TYPE } from '../constant';

export function useEffects(props, model) {
    React.useEffect(() => {
        setAttribute(props, model);
    }, []);
}
export async function setAttribute(props, model) {
    const { item, renderIcon, renderContent, index } = props;
    const icon = () => renderIcon(index, item);
    const content = () => renderContent(index, item);
    model.icon = icon;
    model.content = content;
    model.name = item.name;
    model.order = item._order;
    model.expanded = item.expanded;
    model.isParent = typeof item.expanded === 'boolean';
}
export function getStyle(props, snapshot, index, item, style) {
    const { getContainerStyle } = props;
    const userStyle = getContainerStyle(index, item, snapshot, ITEM_TYPE.CLONE);
    return {
        height: `${props.rowHeight}px`,
        lineHeight: `${props.rowHeight}px`,
        ...userStyle,
        ...style,
    };
}
