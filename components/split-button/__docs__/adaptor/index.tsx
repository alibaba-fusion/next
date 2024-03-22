import React from 'react';
import { SplitButton, Menu, Icon } from '@alifd/next';
import { Types, parseData, ContentType } from '@alifd/adaptor-helper';

type MenuItem = {
    key?: string;
    type?: string;
    state?: string;
    value?: any;
    children?: MenuItem[];
};

type Keys = {
    selected: string[];
    expanded: string[];
};

const createDataSouce = (
    list: MenuItem[],
    keys: Keys = { selected: [], expanded: [] },
    level = 0,
    prefix = ''
) => {
    const array: MenuItem[] = [];
    let group: MenuItem[] = [];
    let grouping: boolean | undefined = false;
    let index = 0;
    let key: string = '';

    list.forEach(item => {
        switch (item.type) {
            case 'node':
                key = `${prefix || level}-${index++}`;
                if (item.children && item.children.length > 0) {
                    item.children = createDataSouce(item.children, keys, level + 1, key);
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

// createMenuItem need use this function, which is now defined here
let createContents: (array: MenuItem[]) => React.ReactNode = () => null;

const createMenuItem = (item: MenuItem) => {
    if (item.children && item.children.length > 0) {
        return (
            <Menu.SubMenu
                key={item.key}
                // @ts-expect-error disabled is not defined on Menu.SubMenu
                disabled={item.state === 'disabled'}
                label={
                    item.value
                        ? item.value
                              .filter(({ type }: { type: string }) => type === ContentType.text)
                              .map(({ value }: any) => value)
                              .join('')
                        : ''
                }
            >
                {createContents(item.children)}
            </Menu.SubMenu>
        );
    }

    return (
        <Menu.Item
            key={item.key}
            // @ts-expect-error checked is not defined on Menu.Item
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

createContents = (array = []) => {
    return array.map(item => {
        if (item.type === 'group' && item.children && item.children.length > 0) {
            return (
                <Menu.Group key={item.key} label={item.value}>
                    {item.children.map(it => createMenuItem(it))}
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
    const buttonItem = list[0] ? list[0] : { value: [], type: undefined };
    const keys = { selected: [], expanded: [] };
    if (buttonItem.type !== 'node') return null;

    const label =
        Array.isArray(buttonItem.value) &&
        buttonItem.value.map(({ type, value }: { type: string; value: string }) => {
            if (type === 'icon') return <Icon type={value} />;
            return value;
        });

    return {
        ...others,
        size,
        disabled: buttonItem.state === 'disabled',
        visible: buttonItem.state === 'active',
        type: shape === 'ghost' ? 'normal' : level,
        popupProps: { needAdjust: false, container: (node: any) => node },
        ghost: shape === 'ghost' ? level : false,
        selectMode: 'multiple',
        menuProps: { openKeys: keys.expanded, style: { textAlign: 'left' } },
        selectedKeys: keys.selected,
        label: label,
    };
};

export default {
    name: 'SplitButton',
    shape: ['normal', 'ghost'],
    editor: (shape = 'normal') => ({
        props: [
            {
                name: 'level',
                type: Types.enum,
                options: shape === 'ghost' ? ['light', 'dark'] : ['normal', 'primary', 'secondary'],
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
    propsValue: _propsValue,
    adaptor: (args: any) => {
        const list = parseData(args.data, { parseContent: true });
        const keys = { selected: [], expanded: [] };
        const dataSouce = createDataSouce((list[0] ? list[0].children : []) as MenuItem[], keys);
        const props = _propsValue(args);
        return <SplitButton {...props}>{createContents(dataSouce)}</SplitButton>;
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
