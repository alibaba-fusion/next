import React from 'react';
import Menu from '../../menu';

const { Divider, Item, Group, SubMenu } = Menu;

function switcher(list, order = 0) {
    return list.map((item, idx) => {
        const {
            key,
            type,
            content,
            helper,
            disabled = false,
            title = '',
            icon = null,
            mode,
            align = 'r',
            display = true,
        } = item;
        switch (type) {
            case 'item':
                return display ? (
                    <Item
                        key={key ? key : `item-${order}-${idx}`}
                        disabled={disabled}
                        helper={helper}
                        align={align}
                        data={item}
                    >
                        <span>{icon}</span>
                        <span>{typeof title === 'function' ? title() : title}</span>
                    </Item>
                ) : null;
            case 'divider':
                return display ? <Divider key={key ? key : `divider-${order}-${idx}`} /> : null;
            case 'group':
                return display ? (
                    <Group
                        key={key ? key : `group-${order}-${idx}`}
                        label={typeof title === 'function' ? title() : title}
                    >
                        {switcher(content, order + 1)}
                    </Group>
                ) : null;
            case 'subMenu':
                return Array.isArray(content) && content.length > 0 ? (
                    <SubMenu
                        key={key ? key : `submenu-${order}-${idx}`}
                        mode={mode}
                        data={item}
                        label={
                            <span>
                                <span>{icon}</span>
                                <span>{typeof title === 'function' ? title() : title}</span>
                            </span>
                        }
                    >
                        {switcher(content, order + 1)}
                    </SubMenu>
                ) : (
                    <Item key={key ? key : `item-${order}-${idx}`} disabled>
                        <span>{icon}</span>
                        <span>{typeof title === 'function' ? title() : title}</span>
                    </Item>
                );
            default:
                return null;
        }
    });
}

export default switcher;
