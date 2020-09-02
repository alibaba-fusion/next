import * as React from 'react';

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
