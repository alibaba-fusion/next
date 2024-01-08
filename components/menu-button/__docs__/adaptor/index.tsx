import * as React from 'react';
import { MenuButton, Menu, Icon } from '@alifd/next';
import { Types, parseData, ContentType } from '@alifd/adaptor-helper';

const createDataSource = (
    list: any = [],
    keys = { selected: [] as string[], expanded: [] as string[] },
    level = 0,
    prefix = ''
) => {
    const array = [];
    let group: any = [];
    let grouping = false;
    let index = 0;

    list.forEach((item: any) => {
        let key;
        switch (item.type) {
            case 'node':
                key = `${prefix || level}-${index++}`;

                if (item.children && item.children.length > 0) {
                    item.children = createDataSource(item.children, keys, level + 1, key);
                }

                if (grouping) {
                    group.push({
                        ...item,
                        key,
                    });
                } else {
                    array.push({
                        ...item,
                        key,
                    });
                }

                if (item.state === 'active') {
                    if (item.children && item.children.length > 0) {
                        keys.expanded.push(key);
                    } else {
                        keys.selected.push(key);
                    }
                }

                return;
            case 'comment':
                if (group.length > 0) {
                    array.push({
                        type: 'group',
                        value: grouping,
                        children: group,
                        key: `${prefix || level}-${index++}`,
                    });
                    group = [];
                }
                grouping = item.value;
                return;
            case 'divider':
                if (group.length > 0) {
                    array.push({
                        type: 'group',
                        value: grouping,
                        children: group,
                        key: `${prefix || level}-${index++}`,
                    });
                    group = [];
                }
                grouping = false;
                array.push({
                    type: 'divider',
                    key: `${prefix || level}-${index++}`,
                });
                return;
            default:
                return;
        }
    });

    if (group.length > 0) {
        array.push({
            type: 'group',
            value: grouping,
            children: group,
            key: `${prefix || level}-${index++}`,
        });
        group = [];
    }

    return array;
};

const createChildMenuItem = (childItem: any) => {
    return (
        <Menu.Item
            key={childItem.key}
            // @ts-expect-error：checked属性在others中
            checked={childItem.state === 'active'}
            disabled={childItem.state === 'disabled'}
            children={childItem.value.map(({ type, value }: any, index: number) =>
                type === 'icon' ? (
                    <Icon
                        key={`icon_${index}`}
                        type={value}
                        size="small"
                        style={{ marginRight: '4px' }}
                    />
                ) : (
                    value
                )
            )}
        />
    );
};

const createMenuItem = (item: any) => {
    if (item.children && item.children.length > 0) {
        return (
            <Menu.SubMenu
                key={item.key}
                // @ts-expect-error：disabled属性在others中
                disabled={item.state === 'disabled'}
                label={
                    item.value
                        ? item.value
                              .filter(({ type }: any) => type === ContentType.text)
                              .map(({ value }: any) => value)
                              .join('')
                        : ''
                }
            >
                {item.children.map((childItem: any) => createChildMenuItem(childItem))}
            </Menu.SubMenu>
        );
    }
    return (
        <Menu.Item
            key={item.key}
            // @ts-expect-error：checked属性在others中
            checked={item.state === 'active'}
            disabled={item.state === 'disabled'}
            children={item.value.map(({ type, value }: any, index: number) =>
                type === 'icon' ? (
                    <Icon
                        key={`icon_${index}`}
                        type={value}
                        size="small"
                        style={{ marginRight: '4px' }}
                    />
                ) : (
                    value
                )
            )}
        />
    );
};

const createContents = (items: any) => {
    return items.map((item: any) => {
        if (item.type === 'group' && item.children.length > 0) {
            return (
                <Menu.Group key={item.key} label={item.value}>
                    {item.children.map(createChildMenuItem)}
                </Menu.Group>
            );
        }
        if (item.type === 'divider') {
            return <Menu.Divider key={item.key} />;
        }
        return createMenuItem(item);
    });
};

const _propsValue = ({ shape, level, size, data, ...others }: any) => {
    const list = parseData(data, { parseContent: true });
    const buttonItem = list[0] ? list[0] : ({ value: [] } as any);

    return {
        ...others,
        size,
        disabled: buttonItem.state === 'disabled',
        visible: buttonItem.state === 'active',
        type: shape === 'ghost' ? 'normal' : level,
        popupProps: { needAdjust: false },
        ghost: shape === 'ghost' ? level : false,
        selectMode: 'multiple',
    };
};

export default {
    name: 'MenuButton',
    shape: ['normal', 'text', 'ghost'],
    propsValue: _propsValue,
    editor: (shape = 'normal') => ({
        props: [
            {
                name: 'level',
                type: Types.enum,
                options:
                    shape === 'text'
                        ? ['normal', 'primary']
                        : shape === 'ghost'
                          ? ['light', 'dark']
                          : ['normal', 'primary', 'secondary'],
                default: shape === 'ghost' ? 'light' : 'normal',
            },
            {
                name: 'size',
                type: Types.enum,
                options: ['large', 'medium', 'small'],
                default: 'medium',
            },
        ],
        data: {
            icon: true,
            active: true,
            disable: true,
            default: 'Edit Document\n\tUndo\n\t*Redo\n\tCut\n\tCopy\n\tPaste',
        },
    }),
    adaptor: ({ shape, level, size, data, ...others }: any) => {
        const list = parseData(data, { parseContent: true });
        const buttonItem = list[0] ? list[0] : ({ value: [] } as any);

        if (buttonItem.type !== 'node') return null;

        const keys = { selected: [], expanded: [] };
        const dataSource = createDataSource(list[0] ? list[0].children : [], keys);

        let label;
        if (typeof buttonItem.value === 'object') {
            label = buttonItem.value.map(({ type, value }: any) => {
                if (type === 'icon') return <Icon type={value} />;
                return value;
            });
        }

        const props = _propsValue({ shape, level, size, data, ...others });

        return (
            <MenuButton
                {...props}
                popupContainer={node => node}
                text={shape === 'text'}
                menuProps={{ openKeys: keys.expanded, style: { textAlign: 'left' } }}
                selectedKeys={keys.selected}
                label={label}
            >
                {createContents(dataSource)}
            </MenuButton>
        );
    },
    demoOptions: (demo: any) => {
        const { node = { props: {} } } = demo;
        const { level, data } = node.props;
        if (data.indexOf('*') === 0) {
            demo = {
                ...demo,
                height: 250,
            };
        }

        if (level === 'dark') {
            demo = {
                ...demo,
                background: '#333',
            };
        } else if (level === 'light') {
            demo = {
                ...demo,
                background: 'rgb(235, 236, 240)',
            };
        }

        return demo;
    },
};
