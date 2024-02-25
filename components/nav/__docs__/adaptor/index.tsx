/* eslint-disable */
import React from 'react';
import { Types, parseData, ContentType } from '@alifd/adaptor-helper';
import { Nav } from '@alifd/next';
import { NavProps } from '@alifd/next/es/nav';

type ValueType<T> = T extends keyof typeof ContentType
    ? { type: keyof typeof ContentType; value: string }[]
    : boolean;

interface DataSourceOption {
    type: 'node' | 'comment' | 'divider' | 'group' | ContentType.icon | ContentType.text;
    key?: string;
    value?: ValueType<DataSourceOption['type']>;
    children?: DataSourceOption[];
    state?: 'active' | 'hover' | 'disabled';
    level?: number;
}

const createDataSource = (
    list: DataSourceOption[],
    keys: {
        selected: string[];
        expanded: string[];
    } = { selected: [], expanded: [] },
    level = 0,
    prefix = ''
) => {
    const array: DataSourceOption[] = [];
    let group: DataSourceOption[] = [];
    let grouping = false;
    let index = 0;

    list.forEach(item => {
        switch (item.type) {
            // eslint-disable-next-line no-case-declarations
            case 'node':
                const key = `${prefix || level}-${index++}`;

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
                grouping = !!item.value;
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

const createMenuItem = (item: DataSourceOption) => {
    const { value } =
        ((Array.isArray(item.value) && item.value) || []).find(
            item => item && typeof item === 'object' && item.type === ContentType.icon
        ) || {};
    if (item.children && item.children.length > 0) {
        return (
            // TODO SubNav 并不支持 disabled 属性 （disabled={item.state === 'disabled'}）
            <Nav.SubNav
                key={item.key}
                icon={value}
                label={
                    Array.isArray(item.value)
                        ? item.value
                              .filter(({ type }) => type === ContentType.text)
                              .map(({ value }) => value)
                              .join('')
                        : ''
                }
            >
                {createContents(item.children)}
            </Nav.SubNav>
        );
    }

    return (
        <Nav.Item
            key={item.key}
            icon={value}
            className={item.state === 'hover' ? 'next-focused' : ''}
            disabled={item.state === 'disabled'}
            children={(Array.isArray(item.value) ? item.value : ([] as Record<string, any>[])).map(
                ({ type, value }, index) => (type === 'icon' ? null : value)
            )}
        />
    );
};

function createContents(array: DataSourceOption[] = []) {
    return array.map(item => {
        if (item.type === 'group' && item.children && item.children.length > 0) {
            return (
                <Nav.Group key={item.key} label={item.value}>
                    {item.children.map(it => createMenuItem(it))}
                </Nav.Group>
            );
        }

        if (item.type === 'divider') {
            return <Nav.Divider key={item.key} />;
        }

        return createMenuItem(item);
    });
}

export default {
    name: 'Nav',
    shape: [
        {
            label: 'Horizontal',
            value: 'hoz',
        },
        {
            label: 'Vertical',
            value: 'ver',
        },
    ],
    editor: (shape = 'hoz') => ({
        props: [
            {
                name: 'level',
                type: Types.enum,
                options: ['normal', 'primary', 'secondary', 'line'],
                default: 'normal',
            },
            {
                name: 'selectLinePosition',
                label: 'Label Position',
                type: Types.enum,
                options: shape === 'hoz' ? ['top', 'bottom', 'none'] : ['left', 'right', 'none'],
                default: shape === 'hoz' ? 'bottom' : 'right',
            },
            {
                name: 'width',
                type: Types.number,
                default: shape === 'hoz' ? 640 : 200,
            },
            ...(shape === 'ver'
                ? [
                      {
                          name: 'height',
                          type: Types.number,
                          default: 600,
                      },
                      {
                          name: 'iconOnly',
                          type: Types.bool,
                          default: false,
                      },
                  ]
                : []),
        ],
        data: {
            active: true,
            hover: true,
            group: true,
            icon: true,
            default: `[account]Nav Item 1\n[account]Nav Item 2\n[account]Nav Item 3\n${shape === 'ver' ? '*' : ''}[account]Nav Item 4\n\t[account]Option 1\n\t[account]Option 2\n\t[account]Option 3\n\t[account]Option 4`,
        },
    }),
    adaptor: ({
        shape,
        level,
        selectLinePosition,
        width,
        height,
        data,
        style,
        iconOnly = false,
        ...others
    }: NavProps & {
        shape: 'hoz' | 'ver';
        iconOnly: boolean;
        style: React.CSSProperties;
        data: string;
        selectLinePosition: 'left' | 'right' | 'top' | 'bottom' | 'none';
        level: 'normal' | 'primary' | 'secondary' | 'line';
        [key: string]: any;
    }) => {
        const list = parseData(data, { parseContent: true }) as unknown as DataSourceOption[];
        const keys = { selected: [], expanded: [] };
        const dataSource = createDataSource(list, keys);

        return (
            <Nav
                {...others}
                type={level}
                direction={shape}
                iconOnly={iconOnly}
                mode={shape === 'hoz' ? 'popup' : 'inline'}
                // 防止在横向模式下，弹层找不到
                popupProps={{ container: (node: HTMLElement) => node.parentNode }}
                openKeys={keys.expanded}
                selectedKeys={keys.selected}
                activeDirection={selectLinePosition === 'none' ? null : selectLinePosition}
                style={{
                    width,
                    height,
                    ...style,
                }}
            >
                {createContents(dataSource)}
            </Nav>
        );
    },
};
